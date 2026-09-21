import { expertos, dif } from "../assets";

export const navLinks = [
  { id: "stack", title: "Stack" },
  { id: "projects", title: "Proyectos" },
  { id: "ai", title: "IA" },
  { id: "experience", title: "Experiencia" },
  { id: "contact", title: "Contacto" },
];

export const techGroups = [
  {
    title: "Primary",
    items: [
      { name: "React", level: "core" },
      { name: "TypeScript", level: "core" },
      { name: "Node.js", level: "core" },
      { name: "Laravel / PHP", level: "core" },
      { name: "C# / .NET", level: "core" },
      { name: "React Native", level: "core" },
      { name: "JavaScript", level: "supporting" },
      { name: "Next.js", level: "supporting" },
      { name: "Express", level: "supporting" },
      { name: "Python / FastAPI", level: "supporting" },
      { name: "Expo", level: "supporting" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MySQL", level: "supporting" },
      { name: "MariaDB", level: "supporting" },
      { name: "PostgreSQL", level: "supporting" },
      { name: "SQL Server", level: "supporting" },
      { name: "MongoDB", level: "supporting" },
    ],
  },
  {
    title: "Infrastructure",
    items: [
      { name: "Docker", level: "supporting" },
      { name: "Linux", level: "supporting" },
      { name: "Git / GitHub", level: "supporting" },
      { name: "CI/CD", level: "supporting" },
      { name: "Azure", level: "supporting" },
      { name: "AWS", level: "supporting" },
      { name: "DigitalOcean", level: "supporting" },
    ],
  },
  {
    title: "AI",
    items: [
      { name: "Claude Code", level: "supporting" },
      { name: "Cursor", level: "supporting" },
      { name: "GitHub Copilot", level: "supporting" },
      { name: "ChatGPT", level: "supporting" },
      { name: "Ollama", level: "supporting" },
      { name: "Qwen", level: "supporting" },
    ],
  },
];

export const projects = [
  {
    name: "Expertos en Convenciones",
    status: "Private",
    problem: "Plataforma multi-tenant para operar eventos empresariales de registro a acceso en sitio.",
    built: [
      "Laravel / PHP, React, TypeScript, MySQL y APIs REST",
      "Pagos, registro, QR, roles y módulos por tenant",
      "Modernización de una plataforma real en producción",
    ],
    role: "Full-stack, architecture, API/database design and technical ownership.",
    stack: ["Laravel", "PHP", "React", "TypeScript", "MySQL", "REST"],
    screenshot: null,
    screenshotFile: "public/projects/expertos.png",
    imageAlt: "Screenshot pendiente de Expertos en Convenciones",
  },
  {
    name: "TM Escolar",
    status: "Private",
    problem: "App escolar Android/iOS + backend, con sync offline/online. Sin datos personales en esta web.",
    built: [
      "React Native / Expo sobre Laravel REST",
      "Auth, roles, push y sync idempotente",
      "Galerías y tooling auxiliar en C#",
    ],
    role: "Architecture, mobile, API design, offline sync and ownership.",
    stack: ["React Native", "Expo", "Laravel", "REST", "C#"],
    screenshot: null,
    screenshotFile: "public/projects/tm-escolar.png",
    imageAlt: "Screenshot pendiente de TM Escolar",
  },
  {
    name: "Trading Integrations",
    status: "Private",
    problem: "Integraciones privadas de trading: auth, APIs de brokers y datos financieros.",
    built: [
      "C# / .NET y Python / FastAPI",
      "cTrader Open API, MetaTrader 5 y OAuth2",
      "Sincronización y procesamiento de datos",
    ],
    role: "API integration, auth flows, backend services and troubleshooting.",
    stack: ["C#", ".NET", "cTrader", "OAuth2", "FastAPI", "MT5"],
    screenshot: null,
    screenshotFile: "public/projects/trading.png",
    imageAlt: "Screenshot pendiente de Trading Integrations",
  },
  {
    name: "Marketplace & Booking Platform",
    status: "Private",
    problem: "Marketplace y reservas con catálogos, pricing y proveedores.",
    built: [
      "Next.js / React y APIs Laravel",
      "Booking, pricing y catálogos",
      "Arquitectura modular por dominio",
    ],
    role: "Product architecture, full-stack, API design and business rules.",
    stack: ["Next.js", "React", "Laravel", "REST"],
    screenshot: null,
    screenshotFile: "public/projects/marketplace.png",
    imageAlt: "Screenshot pendiente de Marketplace & Booking",
  },
];

export const aiWorkflow = ["Analyze", "Plan", "Implement", "Test", "Review", "Validate"];

export const experiences = [
  {
    title: "Líder de Proyectos / Full Stack Developer",
    company_name: "Taloon Studio",
    icon: null,
    initials: "TS",
    iconBg: "#1b1633",
    date: "2023 — Presente",
    points: [
      "Liderazgo técnico de productos y entregas de extremo a extremo.",
      "APIs financieras e integraciones en Node.js, React, Python y C#/.NET.",
      "Automatización, Docker e infraestructura.",
    ],
  },
  {
    title: "Desarrollador Web / Responsable Técnico",
    company_name: "DIF Zapopan",
    icon: dif,
    initials: "DZ",
    iconBg: "#383E56",
    date: "Oct 2022 — Jun 2023",
    points: [
      "Responsable técnico de sistemas administrativos para gobierno.",
      "Desarrollo en React y Laravel, con mantenimiento de módulos Angular existentes.",
      "APIs y bases de datos para trámites y operación institucional.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Expertos en Convenciones",
    icon: expertos,
    initials: "EC",
    iconBg: "#151030",
    date: "Nov 2020 — Oct 2023",
    points: [
      "Plataforma multi-tenant para gestión de eventos con reglas de negocio complejas.",
      "Laravel, React y TypeScript sobre MySQL y APIs REST.",
      "Módulos de registro, pagos, boletos, certificados, encuestas y control de acceso.",
    ],
  },
];

export const approachItems = [
  {
    title: "API-first",
    text: "Contratos REST explícitos; clientes web y móvil desacoplados del backend.",
  },
  {
    title: "Security by design",
    text: "Roles, JWT/OAuth2, CORS y validación en el borde antes de persistir.",
  },
  {
    title: "Modular architecture",
    text: "Dominios separados (pagos, auth, sync, pricing) para cambiar reglas sin reescribir el núcleo.",
  },
  {
    title: "Risk-based testing",
    text: "Tests en auth, idempotencia, pagos y permisos; un cambio no se acepta solo por el reporte de un agente.",
  },
  {
    title: "Evidence-based debugging",
    text: "Validación contra diff, build, estado de base de datos y comportamiento real.",
  },
];
