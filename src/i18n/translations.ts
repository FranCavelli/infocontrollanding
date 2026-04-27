export type Locale = "es" | "en" | "pt";

export const LOCALES: Locale[] = ["es", "en", "pt"];

export const dict = {
  es: {
    nav: {
      servicios: "Servicios",
      ia: "Inteligencia Artificial",
      funcionalidades: "Funcionalidades",
      clientes: "Clientes",
      contacto: "Contacto",
      ingresar: "Ingresar",
    },
    hero: {
      eyebrow: "Software de Gestión Documental",
      titleLead: "Inteligencia Artificial",
      titleRest1: "aplicada al control de",
      titleHighlight: "Contratistas",
      titleRest2: "y RRHH tercerizados.",
      desc: "La plataforma SaaS que automatiza la auditoría documental de tus terceros. Reducí riesgos, tiempos de revisión y costos de tercerización en toda LATAM.",
      ctaPrimary: "Pedí una demo",
      ctaSecondary: "Ver cómo funciona",
      stats: {
        empresas: "Empresas",
        paises: "Países",
        docs: "Documentos/año",
      },
      footnote: "Operamos en 10 países de LATAM y Europa",
    },
    servicios: {
      eyebrow: "Servicios",
      titleLead: "Todo lo que necesitás para",
      titleHighlight: "controlar a tus terceros",
      desc: "Una plataforma única para administrar, auditar y habilitar a tus empresas contratistas, integrada con tus sistemas críticos.",
      learnMore: "Conocer más",
      items: [
        {
          title: "Plataforma en la Nube",
          text: "Acceso 24/7 al panel para gestionar la documentación laboral, previsional e impositiva de tus contratistas.",
        },
        {
          title: "Auditoría con IA",
          text: "Verificación automatizada de documentación con OCR y modelos especializados que detectan inconsistencias.",
        },
        {
          title: "Desarrollo a Medida",
          text: "Funcionalidades específicas para tu operación, integraciones con SAP, Oracle u otros ERPs corporativos.",
        },
        {
          title: "Integraciones",
          text: "Conectá Infocontrol con tus sistemas de control de acceso, ERPs y plataformas internas vía API.",
        },
      ],
    },
    porQue: {
      eyebrow: "¿Por qué nos eligen?",
      titleLead: "Tecnología, equipo y respuesta para tu operación",
      titleHighlight: "crítica",
      desc: "Más que un software: un partner que entiende la complejidad regulatoria de cada país y se adapta a tu operación.",
      items: [
        {
          title: "Inteligencia Artificial",
          text: "Aplicamos modelos especializados para automatizar la auditoría de documentación, reduciendo tiempos y errores humanos.",
          metric: "85%",
          metricLabel: "menos tiempo de revisión",
        },
        {
          title: "Soporte Técnico y Administrativo",
          text: "Atendemos consultas documentales y técnicas tanto a tu equipo como a tus contratistas, en tu idioma y zona horaria.",
          metric: "24/7",
          metricLabel: "disponibilidad operativa",
        },
        {
          title: "Tiempo de Respuesta",
          text: "Asignamos un líder de proyecto dedicado a cada cuenta, con SLAs claros para resolver eventualidades en horas, no días.",
          metric: "<2h",
          metricLabel: "primera respuesta promedio",
        },
      ],
    },
    video: {
      eyebrow: "En 90 segundos",
      title: "Mirá cómo trabajamos",
    },
    clientes: {
      eyebrow: "Confían en nosotros",
      titleLead: "Más de",
      titleHighlight: "150 empresas",
      titleRest: "ya gestionan sus contratistas con Infocontrol",
      desc: "Desde startups industriales hasta multinacionales del sector minero, energético y financiero.",
      filterAll: "Todas",
      industries: {
        mineria: "Minería",
        energia: "Energía",
        oilgas: "Petróleo & Gas",
        banca: "Banca",
        industria: "Industria",
        construccion: "Construcción",
        servicios: "Servicios públicos",
      },
    },
    cta: {
      eyebrow: "Empezá hoy",
      titleLead: "Hagamos el primer",
      titleHighlight: "control",
      titleEnd: "juntos.",
      desc: "Contanos sobre tu operación: cantidad de contratistas, países, ERPs y particularidades. Te armamos una demo ajustada a tu caso.",
      ctaPrimary: "Pedí una demo",
      ctaSecondary: "Hablar con ventas",
      bullets: [
        "Onboarding asistido en menos de 2 semanas",
        "Auditoría con IA desde el día 1",
        "Soporte ES / EN / PT",
        "Integraciones SAP, Oracle y APIs",
      ],
    },
    footer: {
      desc: "Plataforma SaaS con IA para el control documental de contratistas y RRHH tercerizados. Hecho en San Juan, Argentina, para LATAM.",
      cols: {
        producto: "Producto",
        empresa: "Empresa",
        legal: "Legal",
      },
      links: {
        servicios: "Servicios",
        ia: "Inteligencia Artificial",
        funcionalidades: "Funcionalidades",
        integraciones: "Integraciones",
        clientes: "Clientes",
        casos: "Casos de éxito",
        noticias: "Noticias",
        contacto: "Contacto",
        terminos: "Términos y Condiciones",
        privacidad: "Política de Privacidad",
        cookies: "Cookies",
      },
      rights: "Todos los derechos reservados.",
    },
    funcionalidades: {
      eyebrow: "Funcionalidades",
      titleLead: "Todo lo que tu equipo necesita para",
      titleHighlight: "controlar a sus terceros",
      desc: "Una plataforma única, modular y configurable que acompaña tu operación desde el primer contratista hasta los miles que vendrán.",
      items: [
        { title: "Carga y validación documental", text: "Las empresas contratistas suben su documentación al portal. Validación automática de formatos, vencimientos y entidades emisoras." },
        { title: "Auditoría con IA", text: "Modelos de OCR + LLM que extraen datos de PDFs e imágenes, detectan inconsistencias y comparan con normativa local de cada país." },
        { title: "Alertas y vencimientos", text: "Notificaciones automáticas por email y dashboard antes de que un documento o habilitación expire. Adiós a las planillas Excel." },
        { title: "Habilitaciones de personal", text: "Cada trabajador del contratista tiene su legajo digital con CV, exámenes médicos, ART, capacitaciones y permisos de acceso." },
        { title: "Multi-país y multi-norma", text: "Reglas configurables por país, jurisdicción e industria: Argentina, Chile, México, Brasil, Perú, Colombia, Uruguay y más." },
        { title: "Trazabilidad y auditoría", text: "Log inmutable de toda acción: quién subió qué, cuándo se aprobó, qué versión se usó. Listo para auditorías externas." },
        { title: "Integraciones", text: "API REST y conectores para SAP, Oracle, sistemas de control de acceso (torniquetes, biometría) y herramientas internas." },
        { title: "Roles y permisos granulares", text: "Define quién ve qué: por sucursal, contrato, tipo de documento o nivel jerárquico. Cumple con políticas internas y RGPD." },
        { title: "Reportes y BI", text: "Dashboards de cumplimiento por contratista, sucursal o servicio. Exportá a Excel, PDF o conectá con Power BI / Looker." },
      ],
    },
    theme: {
      light: "Modo claro",
      dark: "Modo oscuro",
    },
  },
  en: {
    nav: {
      servicios: "Services",
      ia: "Artificial Intelligence",
      funcionalidades: "Features",
      clientes: "Clients",
      contacto: "Contact",
      ingresar: "Sign in",
    },
    hero: {
      eyebrow: "Document Management Software",
      titleLead: "Artificial Intelligence",
      titleRest1: "applied to managing",
      titleHighlight: "Contractors",
      titleRest2: "and outsourced staff.",
      desc: "The SaaS platform that automates the documentary audit of your third parties. Reduce risks, review time and outsourcing costs across LATAM.",
      ctaPrimary: "Request a demo",
      ctaSecondary: "See how it works",
      stats: {
        empresas: "Companies",
        paises: "Countries",
        docs: "Docs / year",
      },
      footnote: "Operating in 10 countries across LATAM and Europe",
    },
    servicios: {
      eyebrow: "Services",
      titleLead: "Everything you need to",
      titleHighlight: "manage your third parties",
      desc: "A single platform to administer, audit and authorize your contractor companies, integrated with your critical systems.",
      learnMore: "Learn more",
      items: [
        { title: "Cloud Platform", text: "24/7 access to the panel to manage labor, social security and tax documentation of your contractors." },
        { title: "AI-powered Audit", text: "Automated documentation verification with OCR and specialized models that detect inconsistencies." },
        { title: "Custom Development", text: "Specific features for your operation, integrations with SAP, Oracle or other corporate ERPs." },
        { title: "Integrations", text: "Connect Infocontrol to your access control systems, ERPs and internal platforms via API." },
      ],
    },
    porQue: {
      eyebrow: "Why us?",
      titleLead: "Tech, team and response for your",
      titleHighlight: "critical operation",
      desc: "More than software: a partner that understands the regulatory complexity of each country and adapts to your operation.",
      items: [
        { title: "Artificial Intelligence", text: "We apply specialized models to automate documentary audit, cutting time and human errors.", metric: "85%", metricLabel: "less review time" },
        { title: "Technical & Admin Support", text: "We attend documentary and technical inquiries from your team and contractors in your language and time zone.", metric: "24/7", metricLabel: "operational availability" },
        { title: "Response Time", text: "We assign a dedicated project lead per account, with clear SLAs to solve issues in hours, not days.", metric: "<2h", metricLabel: "average first reply" },
      ],
    },
    video: {
      eyebrow: "In 90 seconds",
      title: "See how we work",
    },
    clientes: {
      eyebrow: "They trust us",
      titleLead: "More than",
      titleHighlight: "150 companies",
      titleRest: "already manage their contractors with Infocontrol",
      desc: "From industrial startups to multinationals in the mining, energy and financial sectors.",
      filterAll: "All",
      industries: {
        mineria: "Mining",
        energia: "Energy",
        oilgas: "Oil & Gas",
        banca: "Banking",
        industria: "Industry",
        construccion: "Construction",
        servicios: "Public services",
      },
    },
    cta: {
      eyebrow: "Start today",
      titleLead: "Let's run the first",
      titleHighlight: "control",
      titleEnd: "together.",
      desc: "Tell us about your operation: number of contractors, countries, ERPs and specifics. We'll prepare a demo tailored to your case.",
      ctaPrimary: "Request a demo",
      ctaSecondary: "Talk to sales",
      bullets: [
        "Assisted onboarding in under 2 weeks",
        "AI-powered audit from day 1",
        "ES / EN / PT support",
        "SAP, Oracle and API integrations",
      ],
    },
    footer: {
      desc: "AI-powered SaaS platform for documentary control of contractors and outsourced staff. Made in San Juan, Argentina, for LATAM.",
      cols: { producto: "Product", empresa: "Company", legal: "Legal" },
      links: {
        servicios: "Services",
        ia: "Artificial Intelligence",
        funcionalidades: "Features",
        integraciones: "Integrations",
        clientes: "Clients",
        casos: "Case studies",
        noticias: "News",
        contacto: "Contact",
        terminos: "Terms & Conditions",
        privacidad: "Privacy Policy",
        cookies: "Cookies",
      },
      rights: "All rights reserved.",
    },
    funcionalidades: {
      eyebrow: "Features",
      titleLead: "Everything your team needs to",
      titleHighlight: "manage their third parties",
      desc: "A single, modular, configurable platform that supports your operation from the first contractor to the thousands to come.",
      items: [
        { title: "Document upload & validation", text: "Contractor companies upload their docs. Automated validation of formats, expirations and issuing entities." },
        { title: "AI-powered audit", text: "OCR + LLM models that extract data from PDFs and images, detect inconsistencies and check against local regulations." },
        { title: "Alerts & expirations", text: "Automatic email and dashboard notifications before a document or authorization expires. Goodbye spreadsheets." },
        { title: "Personnel authorizations", text: "Each contractor worker has their digital file: CV, medical exams, insurance, training and access permits." },
        { title: "Multi-country / multi-rule", text: "Configurable rules per country, jurisdiction and industry: Argentina, Chile, Mexico, Brazil, Peru, Colombia, Uruguay and more." },
        { title: "Traceability & audit", text: "Immutable log of every action: who uploaded what, when it was approved, which version was used. Ready for external audits." },
        { title: "Integrations", text: "REST API and connectors for SAP, Oracle, access control systems (turnstiles, biometrics) and internal tools." },
        { title: "Granular roles & permissions", text: "Define who sees what: by branch, contract, document type or hierarchy level. GDPR-compliant." },
        { title: "Reports & BI", text: "Compliance dashboards by contractor, branch or service. Export to Excel, PDF or connect with Power BI / Looker." },
      ],
    },
    theme: { light: "Light mode", dark: "Dark mode" },
  },
  pt: {
    nav: {
      servicios: "Serviços",
      ia: "Inteligência Artificial",
      funcionalidades: "Funcionalidades",
      clientes: "Clientes",
      contacto: "Contato",
      ingresar: "Entrar",
    },
    hero: {
      eyebrow: "Software de Gestão Documental",
      titleLead: "Inteligência Artificial",
      titleRest1: "aplicada ao controle de",
      titleHighlight: "Contratados",
      titleRest2: "e RH terceirizado.",
      desc: "A plataforma SaaS que automatiza a auditoria documental dos seus terceiros. Reduza riscos, tempos de revisão e custos de terceirização em toda LATAM.",
      ctaPrimary: "Solicite uma demo",
      ctaSecondary: "Veja como funciona",
      stats: {
        empresas: "Empresas",
        paises: "Países",
        docs: "Documentos/ano",
      },
      footnote: "Operamos em 10 países da LATAM e Europa",
    },
    servicios: {
      eyebrow: "Serviços",
      titleLead: "Tudo o que você precisa para",
      titleHighlight: "controlar seus terceiros",
      desc: "Uma plataforma única para administrar, auditar e habilitar suas empresas contratadas, integrada aos seus sistemas críticos.",
      learnMore: "Saiba mais",
      items: [
        { title: "Plataforma em Nuvem", text: "Acesso 24/7 ao painel para gerenciar a documentação trabalhista, previdenciária e fiscal dos seus contratados." },
        { title: "Auditoria com IA", text: "Verificação automatizada da documentação com OCR e modelos especializados que detectam inconsistências." },
        { title: "Desenvolvimento Sob Medida", text: "Funcionalidades específicas para sua operação, integrações com SAP, Oracle ou outros ERPs corporativos." },
        { title: "Integrações", text: "Conecte o Infocontrol aos seus sistemas de controle de acesso, ERPs e plataformas internas via API." },
      ],
    },
    porQue: {
      eyebrow: "Por que nos escolhem?",
      titleLead: "Tecnologia, equipe e resposta para sua operação",
      titleHighlight: "crítica",
      desc: "Mais que software: um parceiro que entende a complexidade regulatória de cada país e se adapta à sua operação.",
      items: [
        { title: "Inteligência Artificial", text: "Aplicamos modelos especializados para automatizar a auditoria documental, reduzindo tempos e erros humanos.", metric: "85%", metricLabel: "menos tempo de revisão" },
        { title: "Suporte Técnico e Administrativo", text: "Atendemos consultas documentais e técnicas da sua equipe e dos contratados, no seu idioma e fuso horário.", metric: "24/7", metricLabel: "disponibilidade operacional" },
        { title: "Tempo de Resposta", text: "Atribuímos um líder de projeto dedicado a cada conta, com SLAs claros para resolver eventualidades em horas.", metric: "<2h", metricLabel: "primeira resposta média" },
      ],
    },
    video: { eyebrow: "Em 90 segundos", title: "Veja como trabalhamos" },
    clientes: {
      eyebrow: "Confiam em nós",
      titleLead: "Mais de",
      titleHighlight: "150 empresas",
      titleRest: "já gerenciam seus contratados com Infocontrol",
      desc: "De startups industriais a multinacionais dos setores mineiro, energético e financeiro.",
      filterAll: "Todas",
      industries: {
        mineria: "Mineração",
        energia: "Energia",
        oilgas: "Petróleo & Gás",
        banca: "Banco",
        industria: "Indústria",
        construccion: "Construção",
        servicios: "Serviços públicos",
      },
    },
    cta: {
      eyebrow: "Comece hoje",
      titleLead: "Vamos fazer o primeiro",
      titleHighlight: "controle",
      titleEnd: "juntos.",
      desc: "Conte sobre sua operação: quantidade de contratados, países, ERPs e particularidades. Preparamos uma demo sob medida.",
      ctaPrimary: "Solicite uma demo",
      ctaSecondary: "Falar com vendas",
      bullets: [
        "Onboarding assistido em menos de 2 semanas",
        "Auditoria com IA desde o dia 1",
        "Suporte ES / EN / PT",
        "Integrações SAP, Oracle e APIs",
      ],
    },
    footer: {
      desc: "Plataforma SaaS com IA para o controle documental de contratados e RH terceirizado. Feito em San Juan, Argentina, para LATAM.",
      cols: { producto: "Produto", empresa: "Empresa", legal: "Legal" },
      links: {
        servicios: "Serviços",
        ia: "Inteligência Artificial",
        funcionalidades: "Funcionalidades",
        integraciones: "Integrações",
        clientes: "Clientes",
        casos: "Casos de sucesso",
        noticias: "Notícias",
        contacto: "Contato",
        terminos: "Termos e Condições",
        privacidad: "Política de Privacidade",
        cookies: "Cookies",
      },
      rights: "Todos os direitos reservados.",
    },
    funcionalidades: {
      eyebrow: "Funcionalidades",
      titleLead: "Tudo o que sua equipe precisa para",
      titleHighlight: "controlar seus terceiros",
      desc: "Uma plataforma única, modular e configurável que acompanha sua operação do primeiro contratado aos milhares que virão.",
      items: [
        { title: "Carga e validação documental", text: "Os contratados enviam sua documentação ao portal. Validação automática de formatos, vencimentos e entidades emissoras." },
        { title: "Auditoria com IA", text: "Modelos OCR + LLM que extraem dados de PDFs e imagens, detectam inconsistências e comparam com normas locais." },
        { title: "Alertas e vencimentos", text: "Notificações automáticas por email e dashboard antes que um documento ou habilitação expire. Adeus planilhas." },
        { title: "Habilitações de pessoal", text: "Cada trabalhador tem seu arquivo digital com CV, exames médicos, seguros, capacitações e permissões." },
        { title: "Multi-país e multi-norma", text: "Regras configuráveis por país, jurisdição e setor: Argentina, Chile, México, Brasil, Peru, Colômbia, Uruguai e mais." },
        { title: "Rastreabilidade e auditoria", text: "Log imutável de toda ação: quem enviou, quando aprovou, qual versão foi usada. Pronto para auditorias externas." },
        { title: "Integrações", text: "API REST e conectores para SAP, Oracle, sistemas de controle de acesso (catracas, biometria) e ferramentas internas." },
        { title: "Papéis e permissões granulares", text: "Defina quem vê o que: por filial, contrato, tipo de documento ou nível hierárquico. Cumpre LGPD." },
        { title: "Relatórios e BI", text: "Dashboards de cumprimento por contratado, filial ou serviço. Exporte para Excel, PDF ou conecte com Power BI / Looker." },
      ],
    },
    theme: { light: "Modo claro", dark: "Modo escuro" },
  },
} as const;

export type Dict = (typeof dict)["es"];

export function getT(locale: Locale): Dict {
  return dict[locale] as unknown as Dict;
}

// Base path del sitio (ej: "/infocontrollanding" en GH Pages, "" en raíz).
// Astro lo expone como import.meta.env.BASE_URL siempre con slash final.
const RAW_BASE = (import.meta.env.BASE_URL ?? "/") as string;
const BASE = RAW_BASE.replace(/\/+$/, ""); // sin slash final

/** Quita el prefijo del base path si está presente. */
function stripBase(pathname: string): string {
  if (BASE && pathname.startsWith(BASE)) {
    const rest = pathname.slice(BASE.length);
    return rest.startsWith("/") ? rest : "/" + rest;
  }
  return pathname;
}

export function getLocaleFromPath(pathname: string): Locale {
  const p = stripBase(pathname);
  if (p.startsWith("/en")) return "en";
  if (p.startsWith("/pt")) return "pt";
  return "es";
}

/**
 * Devuelve la URL equivalente en otro idioma, prefijada con el BASE del sitio.
 * - "/", locale="en"        → "{BASE}/en/"
 * - "/funcionalidades", "pt" → "{BASE}/pt/funcionalidades"
 * - "/en/funcionalidades", "es" → "{BASE}/funcionalidades"
 */
export function localizePath(pathname: string, target: Locale): string {
  let p = stripBase(pathname).replace(/\/+$/, "") || "/";
  if (p === "/en" || p === "/pt") p = "/";
  else if (p.startsWith("/en/") || p.startsWith("/pt/")) p = p.slice(3) || "/";
  const localized =
    target === "es" ? p : p === "/" ? `/${target}/` : `/${target}${p}`;
  return BASE + localized;
}
