# Infocontrol — Landing rediseñada

Landing rediseñada de [infocontrolweb.com](https://www.infocontrolweb.com) con Astro 5 + Tailwind v4 + globo 3D (cobe). i18n ES/EN/PT, dark/light mode con detección del sistema, y deploy a GitHub Pages.

## Stack

- [Astro 5](https://astro.build) (estático, SPA via ClientRouter)
- Tailwind CSS v4
- React (solo isla del globo)
- [cobe](https://github.com/shuding/cobe) — globo WebGL 3D
- Smooth scroll y carrusel con `requestAnimationFrame` (sin libs)

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview  # sirve la build
```

## Deploy a GitHub Pages

### 1. Crear el repositorio

En GitHub: **Repositories → New** → nombre **`infocontrollanding`** (público).

### 2. Configurar tu usuario en `astro.config.mjs`

Abrí `astro.config.mjs` y cambiá `TU_USUARIO_GITHUB` por tu usuario real:

```js
const GH_USERNAME = process.env.GH_USERNAME || "tu_usuario_real";
```

> Alternativa: dejarlo así y configurar la variable `GH_USERNAME` en GitHub
> (Repo → Settings → Secrets and variables → Actions → Variables → New
> repository variable). El workflow ya está preparado para usarla.

### 3. Subir el código

Desde la carpeta del proyecto:

```bash
git init
git add .
git commit -m "Initial landing"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/infocontrollanding.git
git push -u origin main
```

### 4. Activar GitHub Pages

En el repositorio: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

### 5. ¡Listo!

Cada `git push` a `main` dispara el workflow `.github/workflows/deploy.yml`, que builda con Astro y publica a Pages. El sitio quedará en:

```
https://TU_USUARIO.github.io/infocontrollanding/
```

## Estructura

```
src/
├── pages/
│   ├── index.astro          # ES
│   ├── en/index.astro       # EN
│   └── pt/index.astro       # PT
├── components/
│   ├── Header.astro          # nav + theme toggle + lang switcher
│   ├── Hero.astro            # hero con globo 3D
│   ├── Globe.tsx             # isla React (cobe)
│   ├── Servicios.astro       # 4 cards + carrusel de mockups
│   ├── ServicesCarousel.astro
│   ├── Funcionalidades.astro # 9 features
│   ├── PorQueEligen.astro    # 3 columnas con métricas
│   ├── VideoSection.astro    # YouTube lazy
│   ├── Clientes.astro        # marquee con filtros por industria
│   ├── CTA.astro
│   └── Footer.astro
├── i18n/translations.ts      # strings ES / EN / PT
├── lib/transitions.ts        # view transitions custom
└── styles/global.css         # tokens, reveal, marquee
```

## Personalizar

- **Logos de clientes reales**: reemplazar el placeholder en `src/components/Clientes.astro` por imágenes en `public/logos/` y un `<img>` en lugar de `<ClientLogo>`.
- **Video de YouTube**: en `src/components/VideoSection.astro`, cambiar `VIDEO_ID`.
- **Países donde opera Infocontrol**: en `src/components/Globe.tsx`, ajustar el array `COUNTRIES`.
- **Stats del hero**: en `src/components/Hero.astro` (números 150, 10, 2M+).
- **Industrias / clientes**: en `src/components/Clientes.astro`.

## Dominio propio

Si más adelante querés un dominio custom (`infocontrol.io`):

1. En `Settings → Pages → Custom domain` agregá el dominio.
2. Crear registro `CNAME` apuntando a `TU_USUARIO.github.io`.
3. En `astro.config.mjs` cambiar `site: "https://tu-dominio.com"` y `base: "/"`.
4. Crear `public/CNAME` con el dominio adentro.
