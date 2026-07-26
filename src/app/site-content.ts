export type Language = "en" | "es";

export const oldHeroImage =
  "https://img1.wsimg.com/isteam/stock/naxm9Al/:/rs=w:1920,h:1080,cg:true,m/cr=w:1920,h:1080,a:cc";

export const placeholderImages = {
  about:
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&fm=jpg&q=80&w=1400",
  domestic:
    "https://images.unsplash.com/photo-1758273705723-26ef454252ce?auto=format&fit=crop&fm=jpg&q=80&w=1400",
  restaurant:
    "https://images.unsplash.com/photo-1776142519748-2b897acaecd7?auto=format&fit=crop&fm=jpg&q=80&w=1400",
  labor:
    "https://images.unsplash.com/photo-1772300164438-f73307d3b645?auto=format&fit=crop&fm=jpg&q=80&w=1400",
  community:
    "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?auto=format&fit=crop&fm=jpg&q=80&w=1400",
};

export const logoImage = "/golden-rose-logo.jpg";

export const dcwpLinks = {
  employmentAgencies:
    "https://www.nyc.gov/site/dca/businesses/info-employment-agencies.page",
  jobHunters: "https://www.nyc.gov/site/dca/workers/job-hunters.page",
};

export const siteCopy = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      community: "Community",
      rights: "Worker Rights",
      contact: "Contact",
    },
    footer: {
      tagline: "Licensed employment agency in Brooklyn, NY.",
      appointment:
        "We love our customers. To serve you better, please call us and make an appointment.",
      hours: "Open 9:00 AM - 5:00 PM. Closed Saturdays.",
      legalName: "Golden Rose Employment Agency Inc. - Licensed Employment Agency",
      address: "381 Troy Ave, Brooklyn, NY 11213",
      license: "NYC DCWP License No. 2032912-DCA",
      phone: "347-350-9660",
      rights: "Copyright (c) 2026 Agencia de Empleos NYC - All Rights Reserved.",
      madeBy: "Made by Volta",
    },
    home: {
      eyebrow: "Bienvenidos / Welcome",
      title: "Golden Rose Employment Agency",
      text: "Warm, bilingual employment referrals for families, employers, and job seekers in Brooklyn since 2016.",
      primaryAction: "I need workers",
      secondaryAction: "I need work",
      trustProof: ["Serving New York since 2016"],
      audiencePaths: [
        {
          title: "Employers",
          text: "Request reliable workers for home, restaurant, cleaning, labor, or business staffing needs.",
          action: "Request workers",
          href: "/contact?type=employer",
        },
        {
          title: "Job Seekers",
          text: "Share your experience, preferred schedule, and the kind of work you are looking for.",
          action: "Tell us what you need",
          href: "/contact?type=applicant",
        },
      ],
      appointmentTitle: "Call us now to make an appointment.",
      appointmentText:
        "Domestic, restaurant, cleaning, construction, general labor, and other staffing referrals.",
      stats: [
        ["2016", "Serving New York since"],
        ["NYC", "Licensed employment agency"],
        ["EN/ES", "English and Spanish"],
        ["381", "Troy Ave, Brooklyn"],
      ],
      introTitle: "A Brooklyn agency built on personal referrals.",
      introText:
        "Golden Rose connects employers with reliable workers and helps job seekers prepare for better opportunities. Our team keeps the process direct, practical, and easy to understand.",
      cards: [
        {
          title: "Housekeeper Nannies",
          items: [
            "Housekeeping services",
            "Elderly care",
            "Live-in and live-out support",
            "Cleaning nannies",
            "Childcare support",
          ],
          href: "/services#domestic-care",
          image: "domestic",
        },
        {
          title: "Restaurants",
          items: [
            "Cooks and chefs",
            "Deli and grill staff",
            "Busboys and dishwashers",
            "Waiters and waitresses",
            "Bartenders and delivery help",
          ],
          href: "/services#restaurant-staff",
          image: "restaurant",
        },
        {
          title: "General Labor",
          items: [
            "Painters and carpenters",
            "Drivers and chauffeurs",
            "Demolition and maintenance",
            "Personal assistants",
            "Additional staffing needs",
          ],
          href: "/services#general-labor",
          image: "labor",
        },
      ],
    },
    about: {
      eyebrow: "About Golden Rose",
      title: "Serving employers and workers with respect since 2016.",
      text: "Golden Rose Employment Agency Inc. is a licensed employment referral agency based in Brooklyn, New York. We help families, businesses, and job seekers make practical connections through work.",
      points: [
        "Professional employment referrals for homes and businesses",
        "Support for immigrant communities in English and Spanish",
        "Resume assistance, interview preparation, and guidance",
        "Connections to nonprofit organizations, workforce programs, and small business resources",
      ],
    },
    services: {
      eyebrow: "Services",
      title: "Staffing referrals for homes, restaurants, and local businesses.",
      text: "Golden Rose organizes each request by the kind of work, schedule, and experience needed so employers and job seekers can move quickly.",
      groups: [
        {
          title: "Housekeeper Nannies",
          id: "domestic-care",
          image: "domestic",
          summary:
            "Home-focused referrals for families who need dependable domestic care and cleaning support.",
          items: [
            "Housekeeping services",
            "Elderly care",
            "Live in - live out",
            "Cleaning nannies",
            "Childcare and baby care",
            "Private home cleaning support",
          ],
        },
        {
          title: "Restaurants",
          id: "restaurant-staff",
          image: "restaurant",
          summary:
            "Kitchen, floor, counter, and delivery referrals for restaurants and food businesses.",
          items: [
            "Cooks",
            "Chefs",
            "Restaurant help",
            "Deli staff",
            "Grill men",
            "Busboys",
            "Dishwashers",
            "Waiters and waitresses",
            "Bartenders",
            "Delivery boys",
            "Kitchen, dishwashing, service, and delivery roles",
          ],
        },
        {
          title: "General Labor",
          id: "general-labor",
          image: "labor",
          summary:
            "Practical workforce referrals for construction, maintenance, driving, cleaning, and other labor needs.",
          items: [
            "Painters",
            "Carpenters",
            "Drivers",
            "Demolition",
            "Maintenance workers",
            "Chauffeurs",
            "Personal assistants",
            "Construction work",
            "School cleaning",
            "Additional staffing requests",
          ],
        },
      ],
    },
    community: {
      eyebrow: "Community",
      title: "More than employment referrals.",
      text: "Golden Rose is growing as a community resource, helping people connect with nonprofit organizations, workforce development programs, small business resources, and services that improve quality of life.",
      initiatives: [
        "Selected for Brooklyn Botanic Garden's Greenest Block in Brooklyn initiative",
        "Growing social media through NYC Small Business Solutions and nonprofit marketing classes",
        "Participating in an intensive AI program for small businesses",
        "Modernizing marketing, automation, digital presence, and client service",
      ],
    },
    contact: {
      eyebrow: "Contact Us",
      title: "Please call us now to make an appointment.",
      text: "We love our customers. In order to serve you better, please call us and make an appointment so we can help you.",
      formTitle: "Drop us a line",
      business: "Golden Rose Agencia de Empleos NYC",
      address: "381 Troy Ave, Brooklyn, NY 11213 US",
      phone: "(347) 350-9660 - 347.789.1185",
      openToday: "Open today",
      hours: "09:00 am - 05:00 pm",
      closed: "Close on Saturdays",
    },
    rights: {
      eyebrow: "Job Seeker Rights",
      title: "Know your rights before working with any employment agency.",
      text: "DCWP publishes the Job Hunter's Bill of Rights so workers can understand what employment agencies may and may not do. We keep these materials visible because every job seeker deserves clear information.",
      sourceLabel: "Official DCWP materials",
      englishPdf: "English Job Hunter's Bill of Rights",
      spanishPdf: "Spanish Job Hunter's Bill of Rights",
      rightsTitle: "Important protections",
      rightsList: [
        "Use a licensed employment agency. You can confirm a license by calling 311 or checking NYC resources.",
        "Employment agencies cannot guarantee that they will find you a job.",
        "An agency cannot refer you to a job that pays less than minimum wage or denies required overtime.",
        "You have the right to written information, receipts, and clear terms before moving forward.",
        "You can file a complaint with DCWP. The City does not ask about immigration status when you make a complaint.",
      ],
      spanishTitle: "Derechos importantes",
      spanishList: [
        "Use una agencia de empleos licenciada. Puede confirmar una licencia llamando al 311 o revisando recursos de NYC.",
        "Las agencias de empleo no pueden garantizar que le conseguiran trabajo.",
        "Una agencia no puede enviarlo a un trabajo que pague menos del salario minimo o niegue overtime requerido.",
        "Tiene derecho a informacion por escrito, recibos y terminos claros antes de seguir adelante.",
        "Puede presentar una queja con DCWP. La Ciudad no pregunta sobre estatus migratorio cuando presenta una queja.",
      ],
      note: "This page is informational and links to DCWP's official materials. For legal questions, contact DCWP, 311, or a qualified advisor.",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Nosotros",
      services: "Servicios",
      community: "Comunidad",
      rights: "Derechos",
      contact: "Contacto",
    },
    footer: {
      tagline: "Agencia de empleos licenciada en Brooklyn, NY.",
      appointment:
        "Queremos servirle mejor. Por favor llamenos para hacer una cita.",
      hours: "Abierto 9:00 AM - 5:00 PM. Cerrado los sabados.",
      legalName: "Golden Rose Employment Agency Inc. - Licensed Employment Agency",
      address: "381 Troy Ave, Brooklyn, NY 11213",
      license: "NYC DCWP License No. 2032912-DCA",
      phone: "347-350-9660",
      rights: "Copyright (c) 2026 Agencia de Empleos NYC - Todos los derechos reservados.",
      madeBy: "Hecho por Volta",
    },
    home: {
      eyebrow: "Bienvenidos / Welcome",
      title: "Golden Rose Agencia de Empleos NYC",
      text: "Referencias de empleo licenciadas para familias, empleadores y trabajadores en Brooklyn desde 2016.",
      primaryAction: "Necesito trabajadores",
      secondaryAction: "Busco empleo",
      trustProof: ["Sirviendo a Nueva York desde 2016"],
      audiencePaths: [
        {
          title: "Empleadores",
          text: "Solicite trabajadores confiables para hogar, restaurante, limpieza, labor general o negocio.",
          action: "Solicitar trabajadores",
          href: "/contact?type=employer",
        },
        {
          title: "Busco Empleo",
          text: "Comparta su experiencia, horario preferido y el tipo de trabajo que busca.",
          action: "Buscar empleo",
          href: "/contact?type=applicant",
        },
      ],
      appointmentTitle: "Llamenos ahora para hacer una cita.",
      appointmentText:
        "Referencias para trabajo domestico, restaurantes, limpieza, construccion, labor general y otras necesidades de personal.",
      stats: [
        ["2016", "Sirviendo a Nueva York desde"],
        ["NYC", "Agencia de empleos licenciada"],
        ["2", "Ingles y espanol"],
        ["381", "Troy Ave, Brooklyn"],
      ],
      introTitle: "Una agencia de Brooklyn basada en referencias personales.",
      introText:
        "Golden Rose conecta empleadores con trabajadores confiables y ayuda a personas que buscan empleo a prepararse para mejores oportunidades. Nuestro equipo mantiene el proceso directo, practico y facil de entender.",
      cards: [
        {
          title: "Housekeeper Nannies",
          items: [
            "Limpieza del hogar",
            "Cuidado de ancianos",
            "Interna y entrada por salida",
            "Nineras de limpieza",
            "Cuidado de bebes",
          ],
          href: "/services#domestic-care",
          image: "domestic",
        },
        {
          title: "Restaurantes",
          items: [
            "Cocineros y chefs",
            "Deli y grill",
            "Busboys y lavaplatos",
            "Meseros y meseras",
            "Bartenders y deliveristas",
          ],
          href: "/services#restaurant-staff",
          image: "restaurant",
        },
        {
          title: "Labor General",
          items: [
            "Pintores y carpinteros",
            "Choferes",
            "Demolicion y mantenimiento",
            "Asistentes personales",
            "Trabajo de construccion",
          ],
          href: "/services#general-labor",
          image: "labor",
        },
      ],
    },
    about: {
      eyebrow: "Sobre Golden Rose",
      title: "Sirviendo a empleadores y trabajadores desde 2016.",
      text: "Golden Rose Employment Agency Inc. es una agencia de referencias de empleo licenciada en Brooklyn, Nueva York. Ayudamos a familias, negocios y trabajadores a conectarse mediante oportunidades de trabajo.",
      points: [
        "Referencias profesionales para hogares y negocios",
        "Apoyo para comunidades inmigrantes en ingles y espanol",
        "Ayuda con resume, preparacion para entrevistas y orientacion",
        "Conexiones con organizaciones sin fines de lucro, programas laborales y recursos para pequenos negocios",
      ],
    },
    services: {
      eyebrow: "Servicios",
      title: "Referencias de personal para hogares, restaurantes y negocios.",
      text: "Golden Rose organiza cada solicitud por tipo de trabajo, horario y experiencia para que empleadores y personas buscando empleo puedan avanzar con claridad.",
      groups: [
        {
          title: "Housekeeper Nannies",
          id: "domestic-care",
          image: "domestic",
          summary:
            "Referencias para familias que necesitan apoyo confiable en limpieza, cuidado domestico y cuidado familiar.",
          items: [
            "Housekeeping services",
            "Cuidado de ancianos",
            "Interna y entrada por salida",
            "Cleaning nannies",
            "Nineras / cuidado de bebes",
            "Limpieza, cuidado de ancianos, entrada por salida, interna",
          ],
        },
        {
          title: "Restaurantes",
          id: "restaurant-staff",
          image: "restaurant",
          summary:
            "Referencias para cocina, servicio, mostrador y delivery en restaurantes y negocios de comida.",
          items: [
            "Cocineros",
            "Chefs",
            "Ayuda para restaurantes",
            "Deli",
            "Grill men",
            "Busboys",
            "Lavaplatos",
            "Meseros y meseras",
            "Bartenders",
            "Deliveristas",
            "Trabajos de cocina, lavaplatos, meseras, deliveristas",
          ],
        },
        {
          title: "Labor General",
          id: "general-labor",
          image: "labor",
          summary:
            "Referencias practicas para construccion, mantenimiento, choferes, limpieza y otras necesidades de labor.",
          items: [
            "Pintores",
            "Carpinteros",
            "Choferes",
            "Demolicion",
            "Trabajadores de mantenimiento",
            "Chauffeurs",
            "Asistentes personales",
            "Trabajo de construccion",
            "Limpieza de escuelas",
            "Todas sus necesidades de personal",
          ],
        },
      ],
    },
    community: {
      eyebrow: "Comunidad",
      title: "Mas que referencias de empleo.",
      text: "Golden Rose tambien es un recurso comunitario que ayuda a conectar personas con organizaciones sin fines de lucro, programas de desarrollo laboral, recursos para pequenos negocios y servicios que mejoran la calidad de vida.",
      initiatives: [
        "Seleccionados para Greenest Block in Brooklyn de Brooklyn Botanic Garden",
        "Creciendo en redes sociales mediante NYC Small Business Solutions y clases de mercadeo",
        "Participando en un programa intensivo de inteligencia artificial para pequenos negocios",
        "Modernizando mercadeo, automatizacion, presencia digital y servicio al cliente",
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Por favor llamenos ahora para hacer una cita.",
      text: "Queremos servirle mejor. Por favor llamenos y haga una cita para poder ayudarle.",
      formTitle: "Envienos un mensaje",
      business: "Golden Rose Agencia de Empleos NYC",
      address: "381 Troy Ave, Brooklyn, NY 11213 US",
      phone: "(347) 350-9660 - 347.789.1185",
      openToday: "Abierto hoy",
      hours: "09:00 am - 05:00 pm",
      closed: "Cerrado los sabados",
    },
    rights: {
      eyebrow: "Derechos del Trabajador",
      title: "Conozca sus derechos antes de trabajar con una agencia de empleos.",
      text: "DCWP publica la Declaracion de Derechos del Buscador de Empleo para que los trabajadores entiendan lo que una agencia de empleo puede y no puede hacer. Mantenemos estos materiales visibles porque cada persona merece informacion clara.",
      sourceLabel: "Materiales oficiales de DCWP",
      englishPdf: "Job Hunter's Bill of Rights en ingles",
      spanishPdf: "Job Hunter's Bill of Rights en espanol",
      rightsTitle: "Important protections",
      rightsList: [
        "Use a licensed employment agency. You can confirm a license by calling 311 or checking NYC resources.",
        "Employment agencies cannot guarantee that they will find you a job.",
        "An agency cannot refer you to a job that pays less than minimum wage or denies required overtime.",
        "You have the right to written information, receipts, and clear terms before moving forward.",
        "You can file a complaint with DCWP. The City does not ask about immigration status when you make a complaint.",
      ],
      spanishTitle: "Derechos importantes",
      spanishList: [
        "Use una agencia de empleos licenciada. Puede confirmar una licencia llamando al 311 o revisando recursos de NYC.",
        "Las agencias de empleo no pueden garantizar que le conseguiran trabajo.",
        "Una agencia no puede enviarlo a un trabajo que pague menos del salario minimo o niegue overtime requerido.",
        "Tiene derecho a informacion por escrito, recibos y terminos claros antes de seguir adelante.",
        "Puede presentar una queja con DCWP. La Ciudad no pregunta sobre estatus migratorio cuando presenta una queja.",
      ],
      note: "Esta pagina es informativa y enlaza a los materiales oficiales de DCWP. Para preguntas legales, contacte a DCWP, 311 o un asesor calificado.",
    },
  },
};
