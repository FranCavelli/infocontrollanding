import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";

type Country = {
  name: string;
  lat: number;
  lon: number;
  size: number;
};

const COUNTRIES: Country[] = [
  { name: "Argentina", lat: -34.6, lon: -58.4, size: 0.1 },
  { name: "Brasil", lat: -15.8, lon: -47.9, size: 0.1 },
  { name: "Chile", lat: -33.4, lon: -70.6, size: 0.08 },
  { name: "Perú", lat: -12.0, lon: -77.0, size: 0.08 },
  { name: "Colombia", lat: 4.7, lon: -74.1, size: 0.07 },
  { name: "México", lat: 19.4, lon: -99.1, size: 0.1 },
  { name: "Uruguay", lat: -34.9, lon: -56.2, size: 0.06 },
  { name: "Paraguay", lat: -25.3, lon: -57.5, size: 0.06 },
  { name: "Panamá", lat: 9.0, lon: -79.5, size: 0.06 },
  { name: "España", lat: 40.4, lon: -3.7, size: 0.07 },
];

const DEG = Math.PI / 180;
const ROT_SPEED = 0.0035;

function lonDistance(a: number, b: number) {
  const d = Math.abs(a - b) % 360;
  return d > 180 ? 360 - d : d;
}

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const pointerDownRef = useRef<{ x: number; phi: number } | null>(null);
  // Convención REAL de cobe (resuelta de la matriz de rotación del shader):
  //   Para apuntar a longitud `lon`: phi = -(lon + 90) * π/180
  //   Inversa: lon_visible(°) = -phi * 180/π - 90
  // Ej: Greenwich (lon 0) → phi=-π/2, BA (lon -58) → phi=-0.55, México (lon -99) → phi=+0.157
  const INITIAL_IDX = 0; // Argentina
  const phiRef = useRef(-(COUNTRIES[INITIAL_IDX].lon + 90) * DEG);
  const widthRef = useRef(0);
  const activeIdxRef = useRef(INITIAL_IDX);
  const [activeCountry, setActiveCountry] = useState(COUNTRIES[INITIAL_IDX].name);
  const [labelVisible, setLabelVisible] = useState(true);
  const [ready, setReady] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof document === "undefined") return "light";
    return (document.documentElement.dataset.theme as "light" | "dark") || "light";
  });

  // Sincronizar con cambios de tema (toggle del header)
  useEffect(() => {
    const root = document.documentElement;
    const update = () => {
      const t = (root.dataset.theme as "light" | "dark") || "light";
      setTheme(t);
    };
    const mo = new MutationObserver(update);
    mo.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
    update();
    return () => mo.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Paleta de colores del globo según tema
    const isDark = theme === "dark";
    const palette = isDark
      ? {
          dark: 1,
          baseColor: [0.18, 0.22, 0.32] as [number, number, number],
          markerColor: [0.043, 0.733, 0.937] as [number, number, number],
          glowColor: [0.2, 0.55, 0.85] as [number, number, number],
          mapBrightnessBase: 6.5,
          diffuseBase: 1.25,
        }
      : {
          dark: 0,
          // Tono más definido: gris medio-claro en vez de casi-blanco
          baseColor: [0.78, 0.82, 0.9] as [number, number, number],
          markerColor: [0.043, 0.733, 0.937] as [number, number, number],
          glowColor: [0.62, 0.78, 0.95] as [number, number, number],
          mapBrightnessBase: 0.7,
          diffuseBase: 1.5,
        };

    let destroyed = false;
    let globe: ReturnType<typeof createGlobe> | null = null;
    let firstFrameDone = false;
    // Si volvemos a entrar (cambio de tema), arrancamos invisibles
    setReady(false);

    const updateSize = () => {
      // Usamos el wrapper como referencia: siempre cuadrado por aspect-square
      const w = wrap.clientWidth;
      if (w > 0) widthRef.current = w;
    };

    const init = () => {
      updateSize();
      if (widthRef.current === 0) return; // aún no hay layout
      if (globe) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      globe = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width: widthRef.current * dpr,
        height: widthRef.current * dpr,
        phi: phiRef.current,
        theta: 0.22,
        dark: palette.dark,
        diffuse: palette.diffuseBase,
        mapSamples: 18000,
        mapBrightness: palette.mapBrightnessBase,
        baseColor: palette.baseColor,
        markerColor: palette.markerColor,
        glowColor: palette.glowColor,
        opacity: 1,
        offset: [0, 0],
        markers: COUNTRIES.map(({ lat, lon, size }) => ({
          location: [lat, lon],
          size,
        })),
        onRender: (state) => {
          if (destroyed) return;
          // Recién mostramos el canvas tras el primer frame ya pintado
          if (!firstFrameDone) {
            firstFrameDone = true;
            requestAnimationFrame(() => setReady(true));
          }
          const now = performance.now();
          const dragging = pointerDownRef.current !== null;

          // phi decrece: la cara visible avanza hacia longitudes positivas
          // (rotación natural oeste→este de la Tierra)
          if (!dragging && !reduceMotion) {
            phiRef.current -= ROT_SPEED;
          }

          // Normalizar phi a [-π, π]
          const TAU = Math.PI * 2;
          phiRef.current =
            ((phiRef.current + Math.PI) % TAU + TAU) % TAU - Math.PI;

          // Longitud visible al frente (en grados, [-180, 180])
          // Inversa: lon = -phi*180/π - 90
          let frontLon = (-phiRef.current * 180) / Math.PI - 90;
          while (frontLon > 180) frontLon -= 360;
          while (frontLon < -180) frontLon += 360;

          // País más cercano al meridiano frontal
          let bestIdx = 0;
          let bestDist = Infinity;
          for (let i = 0; i < COUNTRIES.length; i++) {
            const d = lonDistance(COUNTRIES[i].lon, frontLon);
            if (d < bestDist) {
              bestDist = d;
              bestIdx = i;
            }
          }
          const NEAR_THRESHOLD = 22;
          if (bestDist < NEAR_THRESHOLD) {
            if (bestIdx !== activeIdxRef.current) {
              activeIdxRef.current = bestIdx;
              setActiveCountry(COUNTRIES[bestIdx].name);
            }
            setLabelVisible(true);
          } else {
            setLabelVisible(false);
          }

          state.phi = phiRef.current;
          state.theta = 0.22 + Math.sin(now / 4000) * 0.05;
          state.width = widthRef.current * dpr;
          state.height = widthRef.current * dpr;
          const breathBright = isDark ? 1.6 : 0.18;
          state.mapBrightness =
            palette.mapBrightnessBase + Math.sin(now / 850) * breathBright;
          state.diffuse = palette.diffuseBase + Math.sin(now / 1300) * 0.2;

          if (innerRef.current) {
            const scale = 1 + Math.sin(now / 1100) * 0.012;
            innerRef.current.style.setProperty(
              "--breath-scale",
              String(scale)
            );
          }
        },
      });
      // (setReady se llama desde el primer onRender)
    };

    // Esperamos a que el wrapper tenga tamaño antes de inicializar
    const ro = new ResizeObserver(() => {
      updateSize();
      if (!globe && widthRef.current > 0) init();
    });
    ro.observe(wrap);

    // Intento inmediato (por si ya hay layout)
    init();

    return () => {
      destroyed = true;
      ro.disconnect();
      globe?.destroy();
      globe = null;
    };
  }, [theme]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    pointerDownRef.current = { x: e.clientX, phi: phiRef.current };
    (e.currentTarget as HTMLDivElement).style.cursor = "grabbing";
  };
  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    pointerDownRef.current = null;
    (e.currentTarget as HTMLDivElement).style.cursor = "grab";
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const start = pointerDownRef.current;
    if (start) {
      const dx = e.clientX - start.x;
      // Drag a la derecha rota el globo a la derecha visualmente
      // (fronton avanza al oeste, lon decrece, phi crece).
      phiRef.current = start.phi + dx * 0.005;
    }
  };

  return (
    <div
      ref={wrapRef}
      className="relative mx-auto aspect-square w-full max-w-[640px]"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerOut={onPointerUp}
      onPointerMove={onPointerMove}
      style={{
        cursor: "grab",
        touchAction: "pan-y",
      }}
    >
      {/* Wrapper interno para el breathing-scale (no afecta el aspect-ratio del padre) */}
      <div
        ref={innerRef}
        className="absolute inset-0"
        style={{
          // @ts-expect-error CSS custom property
          "--breath-scale": "1",
          transform: "scale(var(--breath-scale))",
          transformOrigin: "center",
          transition: "transform 50ms linear",
        }}
      >
        {/* Glow exterior pulsante — usa CSS var --globe-glow para que el SSR
            ya tenga el valor correcto del tema vigente al cargar */}
        <div
          aria-hidden="true"
          className="absolute inset-[4%] rounded-full blur-3xl"
          style={{
            background: "var(--globe-glow)",
            opacity: ready ? 1 : 0,
            transition: "opacity 1.4s ease",
            animation: "globe-pulse 4.5s ease-in-out infinite",
          }}
        />
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          style={{
            opacity: ready ? 1 : 0,
            transition: "opacity 1.2s ease 0.15s",
            display: "block",
            background: "transparent",
          }}
        />
        {/* Vignette muy sutil — también via CSS var */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: "var(--globe-vignette)" }}
        />
      </div>

      {/* Etiqueta del país visible al frente. Se oculta cuando rotamos sobre océano. */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-2 z-10 flex justify-center"
        style={{
          opacity: ready && labelVisible ? 1 : 0,
          transform:
            ready && labelVisible ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        <div
          key={activeCountry}
          className="rounded-full border px-4 py-1.5 text-xs font-medium tracking-wide backdrop-blur-md"
          style={{
            animation: "country-pop 0.5s ease both",
            borderColor: "var(--border-1)",
            background:
              "color-mix(in oklab, var(--color-bg-soft) 88%, transparent)",
            color: "var(--color-text)",
          }}
        >
          <span className="mr-2 inline-block h-1.5 w-1.5 translate-y-[-1px] rounded-full bg-[color:var(--color-brand)] align-middle shadow-[0_0_12px_rgba(11,187,239,0.9)]" />
          {activeCountry}
        </div>
      </div>

      <style>{`
        @keyframes globe-pulse {
          0%, 100% { opacity: 0.85; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.06); }
        }
        @keyframes country-pop {
          from { opacity: 0; transform: translateY(8px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}
