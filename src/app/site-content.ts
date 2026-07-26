export type Language = "en" | "es";

export const oldHeroImage =
  "https://img1.wsimg.com/isteam/stock/naxm9Al/:/rs=w:1920,h:1080,cg:true,m/cr=w:1920,h:1080,a:cc";

export const placeholderImages = {
  about:
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&fm=jpg&q=80&w=1400",
  domestic:
    "https://images.unsplash.com/photo-1758273705723-26ef454252ce?auto=format&fit=crop&fm=jpg&q=80&w=1400",
  liveInHousekeeper:
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&fm=jpg&q=80&w=1400",
  housekeeper:
    "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&fm=jpg&q=80&w=1400",
  nanny:
    "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&fm=jpg&q=80&w=1400",
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
        "Domestic household staffing is our primary focus, with commercial staffing referrals also available for local businesses.",
      stats: [
        ["10", "Years in business"],
        ["1k+", "Workers placed"],
        ["1k+", "Employers helped"],
        ["NYC", "All communities served"],
      ],
      introTitle: "A Brooklyn agency built on personal referrals.",
      introText:
        "Golden Rose connects employers with reliable workers and helps job seekers prepare for better opportunities. Our team keeps the process direct, practical, and easy to understand.",
      cards: [
        {
          title: "Live-In Housekeepers",
          items: [
            "Domestic & household staffing",
            "Private home cleaning support",
            "Reliable live-in help",
            "Family-focused referrals",
            "Brooklyn and NYC placements",
          ],
          href: "/services#domestic-household-staffing",
          image: "liveInHousekeeper",
        },
        {
          title: "Housekeepers",
          items: [
            "Live-out housekeepers",
            "Day workers",
            "House cleaning support",
            "Flexible schedules",
            "Home staffing referrals",
          ],
          href: "/services#domestic-household-staffing",
          image: "housekeeper",
        },
        {
          title: "Nannies & Housekeeper/Nannies",
          items: [
            "Live-in nannies",
            "Live-out nannies",
            "Housekeeper/nanny roles",
            "Babysitters",
            "Mother's helpers",
          ],
          href: "/services#domestic-household-staffing",
          image: "nanny",
        },
      ],
      process: {
        eyebrow: "Process",
        title: "Employer hiring process",
        text: "Golden Rose keeps each request practical, personal, and organized from the first call through placement follow-up.",
        steps: [
          {
            title: "Contact Golden Rose",
            text: "Reach us by phone, WhatsApp, email, or by completing the Employer Request Form.",
          },
          {
            title: "Tell us what you need",
            text: "Share the details that matter for a strong match.",
            details: [
              "Position needed",
              "Schedule: full-time, part-time, live-in, or live-out",
              "Location",
              "Salary or hourly rate",
              "Preferred experience and language skills",
              "Start date",
              "Special requirements such as kosher experience, childcare, elder care, or driver's license",
            ],
          },
          {
            title: "Recruiter review",
            text: "Our recruiters review our database and begin searching for qualified candidates.",
          },
          {
            title: "Selected candidates",
            text: "We present carefully selected candidates that match your requirements.",
          },
          {
            title: "Employer interview",
            text: "You interview the candidate or candidates and select the person you wish to hire.",
          },
          {
            title: "Placement support",
            text: "We coordinate the placement and provide follow-up support after the candidate starts working.",
          },
        ],
      },
      trust: {
        eyebrow: "Trust Proof",
        title: "A decade of staffing referrals across New York City.",
        text: "Families, employers, and job seekers rely on Golden Rose for direct communication, careful matching, and bilingual support.",
        notes: [
          "Real testimonials and reviews can be featured with names, initials, or anonymous labels when approved.",
          "Success stories can be added for domestic placements, household roles, restaurant staffing, and local business hiring.",
          "Google reviews can be linked here when an official review link is available.",
        ],
      },
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
      title: "Domestic and commercial staffing referrals in Brooklyn.",
      text: "Golden Rose focuses first on domestic and household staffing, then supports restaurants, shops, warehouses, and local businesses with practical hiring referrals.",
      topServicesTitle: "Top services",
      topServicesText:
        "Our most requested domestic placements for families and private homes.",
      topServices: [
        "Live-In Housekeepers",
        "Housekeepers (Live-Out / Day Workers)",
        "Nannies & Housekeeper/Nannies",
      ],
      groups: [
        {
          title: "Domestic & Household Staffing",
          id: "domestic-household-staffing",
          image: "domestic",
          summary:
            "Our primary service area: dependable household staffing referrals for families and private homes.",
          items: [
            "Housekeepers",
            "Live-In Housekeepers",
            "Live-Out Housekeepers",
            "Nannies",
            "Live-In Nannies",
            "Live-Out Nannies",
            "Housekeeper/Nanny",
            "Babysitters",
            "Elder Caregivers",
            "Companion Care",
            "Home Health Aides (Referral)",
            "Personal Assistants",
            "Mother's Helpers",
            "Private Cooks",
            "House Managers",
          ],
        },
        {
          title: "Commercial Staffing",
          id: "commercial-staffing",
          image: "restaurant",
          summary:
            "Staffing referrals for restaurants, food businesses, retail, warehouses, construction, and other commercial employers.",
          items: [
            "Restaurants",
            "Delis",
            "Supermarkets",
            "Bakeries",
            "Cafes & Coffee Shops",
            "Hospitality",
            "Commercial Cleaning",
            "Warehouse & Distribution",
            "Factory & Manufacturing",
            "Retail",
            "Construction",
            "General Labor",
            "Non-CDL Drivers",
          ],
        },
        {
          title: "Positions We Commonly Fill",
          id: "positions-we-fill",
          image: "labor",
          summary:
            "Common restaurant, grocery, warehouse, factory, construction, cleaning, porter, and maintenance roles we help employers fill.",
          items: [
            "Line Cooks",
            "Prep Cooks",
            "Grill Cooks",
            "Kitchen Helpers",
            "Dishwashers",
            "Cashiers",
            "Deli Counter Staff",
            "Grocery Clerks",
            "Stock Clerks",
            "Warehouse Associates",
            "Packers",
            "Order Pickers",
            "Shipping & Receiving",
            "Factory Workers",
            "Construction Laborers",
            "Construction Clean-Up Crew",
            "Porters",
            "Maintenance Workers",
          ],
        },
      ],
    },
    community: {
      eyebrow: "Community",
      title: "Community work, workforce development, and sustainability.",
      text: "Golden Rose Employment Agency is deeply committed to serving New York City beyond employment services. Our community work includes neighborhood beautification, workforce development, small business education, sustainability, and support for immigrant communities.",
      resourceTitle: "Community Resource",
      initiatives: [
        "Selected for Brooklyn Botanic Garden's Greenest Block in Brooklyn initiative",
        "Growing social media through NYC Small Business Solutions and nonprofit marketing classes",
        "Participating in an intensive AI program for small businesses",
        "Modernizing marketing, automation, digital presence, and client service",
      ],
      programs: [
        {
          title: "Greenest Block in Brooklyn",
          summary:
            "Golden Rose participates in the Greenest Block in Brooklyn initiative as part of our commitment to keeping the neighborhood welcoming, cared for, and connected.",
          items: [
            "Beautifying our neighborhood",
            "Sustainability",
            "Urban gardening",
            "Recycling and reuse",
            "Creating a welcoming environment for the community",
          ],
        },
        {
          title: "NYC Small Business Solutions",
          summary:
            "Golden Rose regularly participates in educational programs through NYC Small Business Services (SBS) to strengthen our operations and community impact.",
          items: [
            "Business growth",
            "Marketing",
            "Government contracting",
            "MWBE certification",
            "Financial management",
            "Technology",
            "AI",
            "Leadership",
            "Entrepreneurship",
          ],
        },
        {
          title: "AI Small Business Program",
          summary:
            "Golden Rose Employment Agency was selected as one of 25 small businesses across New York City for the Hispanic Federation x Pursuit Small Business AI Initiative. After completing the first phase, we were selected among 10 businesses to work one-on-one with an AI engineer on practical AI solutions.",
          items: [
            "Improving candidate matching",
            "Improving communication",
            "Strengthening business operations",
            "Improving customer service",
          ],
        },
      ],
      aiSupportTitle: "Initiative support",
      aiSupporters: [
        "Hispanic Federation",
        "Pursuit",
        "Google",
        "Amazon",
        "JFF",
        "New York City Council",
      ],
      organizationsTitle: "Community organizations & workforce programs",
      organizationsText:
        "Golden Rose actively collaborates with and participates in programs offered by organizations across New York City's small business, workforce development, entrepreneurship, and community-service ecosystem.",
      organizations: [
        "NYC Small Business Services (SBS)",
        "Hispanic Federation",
        "Pursuit",
        "Brooklyn Public Library (PowerUP)",
        "Brooklyn Chamber of Commerce",
        "SCORE",
        "Pace University Small Business Development Center",
        "WE NYC",
        "Start Small Think Big",
        "Legal services providers supporting small businesses",
        "Workforce development and entrepreneurship initiatives throughout New York City",
      ],
      immigrantTitle: "Supporting immigrant communities",
      immigrantText: [
        "Golden Rose Employment Agency has proudly served New York City's diverse immigrant communities for many years.",
        "Our mission is to connect qualified job seekers with employers while treating every individual with dignity, professionalism, and respect.",
        "We proudly serve people from many backgrounds and cultures, helping individuals build careers, support their families, and contribute to New York City's workforce.",
        "We believe employment creates opportunity, independence, and stronger communities, and we are committed to making quality employment services accessible to everyone.",
      ],
      photoTitle: "Community in action",
      photoText:
        "This page can feature photos from community events, educational workshops, the AI program, sustainability initiatives, flowers, plants, and neighborhood activities as they are provided.",
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
        "Nuestro enfoque principal es personal domestico para el hogar, con referencias comerciales para negocios locales.",
      stats: [
        ["10", "Anos en negocio"],
        ["1k+", "Trabajadores colocados"],
        ["1k+", "Empleadores ayudados"],
        ["NYC", "Comunidades servidas"],
      ],
      introTitle: "Una agencia de Brooklyn basada en referencias personales.",
      introText:
        "Golden Rose conecta empleadores con trabajadores confiables y ayuda a personas que buscan empleo a prepararse para mejores oportunidades. Nuestro equipo mantiene el proceso directo, practico y facil de entender.",
      cards: [
        {
          title: "Housekeepers Internas",
          items: [
            "Personal domestico y del hogar",
            "Limpieza para casas privadas",
            "Ayuda interna confiable",
            "Referencias para familias",
            "Colocaciones en Brooklyn y NYC",
          ],
          href: "/services#domestic-household-staffing",
          image: "liveInHousekeeper",
        },
        {
          title: "Housekeepers",
          items: [
            "Entrada por salida",
            "Trabajadoras por dia",
            "Limpieza del hogar",
            "Horarios flexibles",
            "Referencias para casas",
          ],
          href: "/services#domestic-household-staffing",
          image: "housekeeper",
        },
        {
          title: "Nineras & Housekeeper/Nannies",
          items: [
            "Nineras internas",
            "Nineras entrada por salida",
            "Housekeeper/nanny",
            "Babysitters",
            "Ayudantes de mama",
          ],
          href: "/services#domestic-household-staffing",
          image: "nanny",
        },
      ],
      process: {
        eyebrow: "Proceso",
        title: "Proceso de contratacion para empleadores",
        text: "Golden Rose mantiene cada solicitud practica, personal y organizada desde el primer contacto hasta el seguimiento despues de la colocacion.",
        steps: [
          {
            title: "Contacte a Golden Rose",
            text: "Comuniquese por telefono, WhatsApp, email o completando el Employer Request Form.",
          },
          {
            title: "Diganos lo que necesita",
            text: "Comparta los detalles importantes para encontrar una buena candidata o candidato.",
            details: [
              "Posicion necesaria",
              "Horario: full-time, part-time, interna o entrada por salida",
              "Ubicacion",
              "Salario o pago por hora",
              "Experiencia e idioma preferido",
              "Fecha de comienzo",
              "Requisitos especiales como experiencia kosher, cuidado de ninos, cuidado de ancianos o licencia de conducir",
            ],
          },
          {
            title: "Revision por reclutadores",
            text: "Nuestros reclutadores revisan nuestra base de datos y comienzan la busqueda de candidatos calificados.",
          },
          {
            title: "Candidatos seleccionados",
            text: "Presentamos candidatos cuidadosamente seleccionados que coinciden con sus requisitos.",
          },
          {
            title: "Entrevista del empleador",
            text: "Usted entrevista al candidato o candidatos y selecciona la persona que desea contratar.",
          },
          {
            title: "Apoyo de colocacion",
            text: "Coordinamos la colocacion y damos seguimiento despues de que la persona empieza a trabajar.",
          },
        ],
      },
      trust: {
        eyebrow: "Confianza",
        title: "Una decada de referencias de empleo en toda la Ciudad de Nueva York.",
        text: "Familias, empleadores y trabajadores confian en Golden Rose por su comunicacion directa, seleccion cuidadosa y apoyo bilingue.",
        notes: [
          "Testimonios y reviews reales pueden publicarse con nombres, iniciales o anonimos cuando sean aprobados.",
          "Historias de exito pueden agregarse para colocaciones domesticas, hogar, restaurantes y negocios locales.",
          "Google reviews pueden enlazarse aqui cuando haya un enlace oficial disponible.",
        ],
      },
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
      title: "Referencias de personal domestico y comercial en Brooklyn.",
      text: "Golden Rose se enfoca primero en personal domestico y del hogar, y tambien apoya restaurantes, tiendas, almacenes y negocios locales con referencias practicas.",
      topServicesTitle: "Servicios principales",
      topServicesText:
        "Las colocaciones domesticas mas solicitadas para familias y casas privadas.",
      topServices: [
        "Housekeepers Internas",
        "Housekeepers (Entrada por Salida / Por Dia)",
        "Nineras & Housekeeper/Nannies",
      ],
      groups: [
        {
          title: "Personal Domestico y del Hogar",
          id: "domestic-household-staffing",
          image: "domestic",
          summary:
            "Nuestra area principal: referencias confiables de personal domestico para familias y casas privadas.",
          items: [
            "Housekeepers",
            "Housekeepers Internas",
            "Housekeepers Entrada por Salida",
            "Nineras",
            "Nineras Internas",
            "Nineras Entrada por Salida",
            "Housekeeper/Nanny",
            "Babysitters",
            "Cuidadores de Ancianos",
            "Companion Care",
            "Home Health Aides (Referral)",
            "Asistentes Personales",
            "Ayudantes de Mama",
            "Cocineros Privados",
            "Encargados de Casa",
          ],
        },
        {
          title: "Personal Comercial",
          id: "commercial-staffing",
          image: "restaurant",
          summary:
            "Referencias para restaurantes, negocios de comida, tiendas, almacenes, construccion y otros empleadores comerciales.",
          items: [
            "Restaurantes",
            "Delis",
            "Supermercados",
            "Panaderias",
            "Cafes & Coffee Shops",
            "Hospitalidad",
            "Limpieza Comercial",
            "Almacen y Distribucion",
            "Fabrica y Manufactura",
            "Retail",
            "Construccion",
            "Labor General",
            "Choferes Non-CDL",
          ],
        },
        {
          title: "Posiciones que Llenamos Frecuentemente",
          id: "positions-we-fill",
          image: "labor",
          summary:
            "Roles comunes en restaurantes, supermercados, almacenes, fabricas, construccion, limpieza, porteria y mantenimiento.",
          items: [
            "Line Cooks",
            "Prep Cooks",
            "Grill Cooks",
            "Ayudantes de Cocina",
            "Lavaplatos",
            "Cajeros",
            "Personal de Deli",
            "Empleados de Supermercado",
            "Stock Clerks",
            "Warehouse Associates",
            "Packers",
            "Order Pickers",
            "Shipping & Receiving",
            "Trabajadores de Fabrica",
            "Trabajadores de Construccion",
            "Equipo de Limpieza de Construccion",
            "Porters",
            "Trabajadores de Mantenimiento",
          ],
        },
      ],
    },
    community: {
      eyebrow: "Comunidad",
      title: "Trabajo comunitario, desarrollo laboral y sostenibilidad.",
      text: "Golden Rose Employment Agency esta profundamente comprometida con servir a la comunidad de la Ciudad de Nueva York mas alla de los servicios de empleo. Nuestro trabajo comunitario incluye embellecimiento del vecindario, desarrollo laboral, educacion para pequenos negocios, sostenibilidad y apoyo a comunidades inmigrantes.",
      resourceTitle: "Recurso Comunitario",
      initiatives: [
        "Seleccionados para Greenest Block in Brooklyn de Brooklyn Botanic Garden",
        "Creciendo en redes sociales mediante NYC Small Business Solutions y clases de mercadeo",
        "Participando en un programa intensivo de inteligencia artificial para pequenos negocios",
        "Modernizando mercadeo, automatizacion, presencia digital y servicio al cliente",
      ],
      programs: [
        {
          title: "Greenest Block in Brooklyn",
          summary:
            "Golden Rose participa en la iniciativa Greenest Block in Brooklyn como parte de nuestro compromiso de mantener el vecindario acogedor, cuidado y conectado.",
          items: [
            "Embellecer nuestro vecindario",
            "Sostenibilidad",
            "Jardineria urbana",
            "Reciclaje y reutilizacion",
            "Crear un ambiente acogedor para la comunidad",
          ],
        },
        {
          title: "NYC Small Business Solutions",
          summary:
            "Golden Rose participa regularmente en programas educativos de NYC Small Business Services (SBS) para fortalecer nuestras operaciones e impacto comunitario.",
          items: [
            "Crecimiento del negocio",
            "Marketing",
            "Contratacion gubernamental",
            "Certificacion MWBE",
            "Manejo financiero",
            "Tecnologia",
            "AI",
            "Liderazgo",
            "Emprendimiento",
          ],
        },
        {
          title: "Programa de AI para pequenos negocios",
          summary:
            "Golden Rose Employment Agency fue seleccionada como uno de 25 pequenos negocios en toda la Ciudad de Nueva York para la iniciativa Hispanic Federation x Pursuit Small Business AI Initiative. Despues de completar la primera fase, fuimos seleccionados entre 10 negocios para trabajar uno-a-uno con un ingeniero de AI en soluciones practicas.",
          items: [
            "Mejorar la seleccion de candidatos",
            "Mejorar la comunicacion",
            "Fortalecer las operaciones del negocio",
            "Mejorar el servicio al cliente",
          ],
        },
      ],
      aiSupportTitle: "Apoyo de la iniciativa",
      aiSupporters: [
        "Hispanic Federation",
        "Pursuit",
        "Google",
        "Amazon",
        "JFF",
        "New York City Council",
      ],
      organizationsTitle: "Organizaciones comunitarias y programas laborales",
      organizationsText:
        "Golden Rose colabora activamente y participa en programas ofrecidos por organizaciones del ecosistema de pequenos negocios, desarrollo laboral, emprendimiento y servicios comunitarios en la Ciudad de Nueva York.",
      organizations: [
        "NYC Small Business Services (SBS)",
        "Hispanic Federation",
        "Pursuit",
        "Brooklyn Public Library (PowerUP)",
        "Brooklyn Chamber of Commerce",
        "SCORE",
        "Pace University Small Business Development Center",
        "WE NYC",
        "Start Small Think Big",
        "Proveedores de servicios legales que apoyan pequenos negocios",
        "Iniciativas de desarrollo laboral y emprendimiento en toda la Ciudad de Nueva York",
      ],
      immigrantTitle: "Apoyo a comunidades inmigrantes",
      immigrantText: [
        "Golden Rose Employment Agency ha servido con orgullo a las diversas comunidades inmigrantes de la Ciudad de Nueva York por muchos anos.",
        "Nuestra mision es conectar trabajadores calificados con empleadores mientras tratamos a cada persona con dignidad, profesionalismo y respeto.",
        "Servimos con orgullo a personas de muchos origenes y culturas, ayudando a individuos a construir carreras, apoyar a sus familias y contribuir a la fuerza laboral de Nueva York.",
        "Creemos que el empleo crea oportunidad, independencia y comunidades mas fuertes, y estamos comprometidos a hacer que servicios de empleo de calidad sean accesibles para todos.",
      ],
      photoTitle: "Comunidad en accion",
      photoText:
        "Esta pagina puede incluir fotos de eventos comunitarios, talleres educativos, el programa de AI, iniciativas de sostenibilidad, flores, plantas y actividades del vecindario cuando esten disponibles.",
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
