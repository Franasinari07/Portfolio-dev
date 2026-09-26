export const portfolioData = {
  personal: {
    name: "Franco Asinari",

    role: "QA Tester & Desarrollador Fullstack",

    title: "Técnico Superior en Desarrollo de Software",

    shortDescription:
      "Combino desarrollo Fullstack con Quality Assurance para construir software funcional, confiable y bien testeado.",

    photoUrl: "/foto.jpg",

    githubUsername: "Franasinari07",

    linkedinUrl:
      "https://www.linkedin.com/in/franco-asinari/",

    email: "fmasinari@gmail.com",
  },

  cv: {
    cvUrl: "/cv-franco-asinari.pdf",
  },

  presentation: {
    title: "Carta de Presentación",

    intro:
      "Una mirada transparente sobre quién soy, qué sé hacer y cómo combino el desarrollo de código con el aseguramiento de la calidad.",

    fullText: `Estimado/a equipo de selección,

Mi nombre es Fran Asinari y me dirijo a ustedes con el objetivo de postularme a una posición como Desarrollador Fullstack Jr y/o QA Automation & QA Manual.

Soy Técnico Superior en Desarrollo de Software y cuento con experiencia trabajando con tecnologías como JavaScript, React, Node.js, HTML, CSS, Tailwind CSS, MySQL y PHP.

He participado en el desarrollo de proyectos fullstack donde implementé funcionalidades tanto del lado del cliente como del servidor, integrando APIs, autenticación con JWT y gestión de bases de datos.

Además, poseo una certificación en Testing Avanzado (QA) obtenida a través de Argentina Programa 4.0, donde profundicé en pruebas funcionales, diseño de casos de prueba, detección y reporte de bugs, pruebas manuales y fundamentos de automatización.

Me considero una persona analítica, orientada a la resolución de problemas y con gran interés en las buenas prácticas de desarrollo y aseguramiento de la calidad.

Me encantaría tener la oportunidad de conversar con ustedes para ampliar detalles sobre mi perfil y cómo puedo aportar valor a su equipo.

Desde ya, muchas gracias por su tiempo y consideración.

Saludos cordiales,

Franco`,
  },

  about: {
    text1:
      "Egresado de la carrera de Tecnicatura en Desarrollo de Software y desempeño mis funciones como Desarrollador Full Stack y Quality Assurance como Freelance.",

    text2:
      "Cuento con gran motivación para avanzar en mi carrera profesional y me destaco por mi compromiso y responsabilidad.",

    highlights: [
      { label: "Desarrollo Full Stack", icon: "code" },
      { label: "Quality Assurance", icon: "check" },
      { label: "Testing Manual", icon: "search" },
      { label: "QA Automation", icon: "bolt" },
      { label: "Aprendizaje continuo", icon: "book" },
      { label: "Resolución de problemas", icon: "puzzle" },
    ],
  },

   skills: {
    // Enfoque original: Tecnologías + En qué las aplicás
    development: [
      {
        name: "JavaScript (ES6+)",
        useCase: "Creación de lógica dinámica, manipulación del DOM y consumo de APIs asíncronas."
      },
      {
        name: "React & Vite",
        useCase: "Construcción de interfaces de usuario modulares, reactivas y optimizadas."
      },
      {
        name: "Node.js & Express",
        useCase: "Desarrollo de REST APIs, autenticación segura con JWT y gestión de servidores."
      },
      {
        name: "HTML5 & CSS3 / Tailwind CSS",
        useCase: "Maquetado semántico y diseño UI responsivo enfocado en la experiencia de usuario."
      },
    ],

    qa: [
      {
        name: "Cypress",
        useCase: "Automatización de pruebas de extremo a extremo (E2E) y validación de flujos críticos."
      },
      {
        name: "Postman",
        useCase: "Pruebas funcionales de APIs, automatización de colecciones y validación de respuestas."
      },
      {
        name: "Git & GitHub",
        useCase: "Control de versiones, gestión de ramas (GitFlow) y resolución de conflictos en equipo."
      },
      {
        name: "Jira & Scrum",
        useCase: "Gestión del ciclo de vida del software, reporte de bugs claro y metodologías ágiles."
      },
    ],

    // Nuevo apartado clave para tu primer empleo: Demuestra cómo trabajás
    softSkills: [
      {
        name: "Pensamiento Analítico",
        description: "Capacidad para desglosar problemas complejos y diseñar casos de prueba meticulosos para encontrar fallas antes de que lleguen a producción."
      },
      {
        name: "Comunicación Clara y Asertiva",
        description: "Esencial para un QA. Redacción de reportes de bugs precisos, sin ambigüedades, facilitando el trabajo de los desarrolladores."
      },
      {
        name: "Mentalidad de Crecimiento",
        description: "Interés constante por aprender nuevas herramientas, adaptarme a diferentes metodologías de trabajo y recibir feedback constructivo."
      },
      {
        name: "Atención al Detalle",
        description: "Foco riguroso en los requerimientos del producto para asegurar que el software no solo funcione, sino que sea confiable."
      }
    ]
  },

  education: [
    {
      title: "Técnico Superior en Desarrollo de Software",

      institution:
        'E.N.S.S.C. "Domingo Guzmán Silva" Nº46',

      period: "2019 — Actualidad",

      description:
        "Formación orientada al desarrollo de software, programación, bases de datos, desarrollo web y tecnologías relacionadas.",
    },

    {
      title:
        "Bachiller en Economía y Administración",

      institution:
        "E.E.S.O.P.I. Nº 8106 Don Bosco",

      period: "2013 — 2018",

      description: "",
    },
  ],

  experience: [
    {
      title: "Programador Jr. Freelancer",

      institution: "Freelance",

      period: "2024 — Actualidad",

      description:
        "Desarrollo Full Stack de proyectos para clientes.",

      responsibilities: [
        "Desarrollo de sitios web",
        "Desarrollo frontend y backend",
        "Integración de APIs",
        "Testing",
        "Resolución de problemas",
        "Mantenimiento y mejoras",
      ],

      technologies: [],
    },

    {
      title: "Programador Jr. — Crombie",

      institution: "Crombie",

      period: "2023 — 2024",

      description:
        "Desarrollo Full Stack de un proyecto de autenticación.",

      responsibilities: [
        "Desarrollo frontend",
        "Desarrollo backend",
        "Integración de APIs",
        "Autenticación",
        "Integración con servicios AWS",
      ],

      technologies: [
        "React",
        "Node.js",
        "REST API",
        "JWT",
        "AWS S3",
        "AWS Lambda",
        "EC2",
      ],
    },
  ],

  featuredProject: {
    name: "Proyecto de Autenticación — Crombie",

    description:
      "Sistema de autenticación desarrollado durante la experiencia profesional en Crombie, integrando frontend, backend y servicios en la nube.",

    technologies: [
      "React",
      "Node.js",
      "REST API",
      "JWT",
      "AWS S3",
      "AWS Lambda",
      "EC2",
    ],

    role:
      "Desarrollo Full Stack (frontend, backend e integración con AWS)",

    githubUrl: "https://github.com/Franasinari07",

    images: [
      "/mockup-login.png",
      "/mockup-dashboard.png",
      "/mockup-qa-testing.png",
    ],
  },

  featuredProjects: [
    {
      name: "Proyecto de Autenticación — Crombie",

      description:
        "Sistema de autenticación desarrollado durante la experiencia profesional en Crombie, integrando frontend, backend y servicios en la nube.",

      technologies: [
        "React",
        "Node.js",
        "REST API",
        "JWT",
        "AWS S3",
        "AWS Lambda",
        "EC2",
      ],

      role:
        "Desarrollo Full Stack (frontend, backend e integración con AWS)",

      githubUrl: "https://github.com/Franasinari07",

      images: [
        "/mockup-login.png",
        "/mockup-dashboard.png",
        "/mockup-qa-testing.png",
      ],
    },
    {
      name: "Dashboard de Gestión — CRM",

      description:
        "Panel administrativo pensado para visualizar métricas, gestionar usuarios y centralizar procesos clave de una operación comercial.",

      technologies: [
        "React",
        "Tailwind CSS",
        "Charts",
        "API REST",
        "UX/UI",
      ],

      role: "Diseño y desarrollo del dashboard con foco en experiencia y métricas.",

      githubUrl: "https://github.com/Franasinari07",

      images: [
        "/mockup-dashboard.png",
        "/mockup-qa-testing.png",
      ],
    },
    {
      name: "App de Proyectos Personales",

      description:
        "Portfolio personal desarrollado para presentar experiencia, proyectos y habilidades con un diseño moderno y enfocado en la conversión.",

      technologies: [
        "React",
        "Vite",
        "CSS",
        "Responsive Design",
      ],

      role: "Diseño, estructura y desarrollo completo del sitio personal.",

      githubUrl: "https://github.com/Franasinari07",

      images: [
        "/mockup-login.png",
        "/mockup-dashboard.png",
      ],
    },
  ],

  github: {
    githubUsername: "Franasinari07",

    apiUrl:
      "https://api.github.com/users/Franasinari07/repos",

    maxRepos: 9,
  },

  contact: {
    text:
      "¿Tenés un proyecto, una oportunidad laboral o simplemente querés conocer más sobre mi perfil? No dudes en contactarme.",

    githubUrl:
      "https://github.com/Franasinari07",

    linkedinUrl:
      "https://www.linkedin.com/in/franco-asinari/",

    email: "fmasinari@gmail.com",
  },
};