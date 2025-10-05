export type Project = {
  title: string;
  image: string;
  alt: string;
  description: string;
  tech: string[];
  codeUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Sistema de votación con Blockchain",
    image: "/assets/proyectos/votesystem.png",
    alt: "Sistema de votación con Blockchain",
    description:
      "Sistema de votación seguro y transparente utilizando tecnología blockchain para garantizar la integridad de los votos.",
    tech: ["Solidity", "Ethereum", "Next.js", "Node.js"],
    codeUrl: "https://github.com/FranciscoLuengo/votesystem",
    demoUrl: "https://votesystembc.netlify.app/",
  },
  {
    title: "Generador de contraseñas seguras",
    image: "/assets/proyectos/generadorpw.png",
    alt: "Generador de contraseñas",
    description:
      "Página para generar contraseñas seguras y aleatorias, con opciones de personalización.",
    tech: ["Angular", "Tailwind", "PrimeNG"],
    codeUrl: "https://github.com/FranciscoLuengo/generadordepw_front",
    demoUrl: "https://secure-pw-gen.netlify.app/",
  },
    {
    title: "Calculadora Agrícola",
    image: "/assets/proyectos/app_calculadora.png",
    alt: "App Calculadora Agrícola",
    description:
      "Una aplicación móvil desarrollada en React Native para calcular las ganancias de rejillas trabajadas con descuentos aplicados. La aplicación permite ingresar datos de rejillas y kilos, aplicar descuentos y mantener un historial de todos los cálculos realizados.",
    tech: ["React Native", "Expo", "TypeScript"],
    codeUrl: "https://github.com/FranciscoLuengo",
    demoUrl: "https://youtube.com/shorts/SjdEJrrNlnY?feature=share",
  },
  // {
  //   title: "Bot de ofertas informáticas",
  //   image: "/assets/proyectos/discord_bot.png",
  //   alt: "Bot ofertas Chiletrabajos",
  //   description:
  //     "Bot que informa sobre ofertas de trabajo del área informática en Chiletrabajos.",
  //   tech: ["Python", "Discord Webhooks"],
  //   codeUrl: "https://github.com/FranciscoLuengo/chiletrabajos_bot",
  //   demoUrl: "https://discord.gg/bZ9qZEXFy7",
  // },
  {
    title: "Gasto tracker",
    image: "/assets/proyectos/gasto_tracker.png",
    alt: "Gasto tracker",
    description: "Una aplicación web moderna para rastrear y gestionar tus gastos personales de forma simple y efectiva.",
    tech: ["Next.js", "Tailwind", "TypeScript", "NextAuth.js", "Next,js API Routes", "Prisma", "PostgreSQL", "bcriptjs"],
    codeUrl: "https://github.com/FranciscoLuengo/GastoTracker",
    demoUrl: "gasto-tracker.vercel.app",
  },
];
