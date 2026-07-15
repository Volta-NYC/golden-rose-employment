export type Language = "en" | "es";

export const oldHeroImage =
  "https://img1.wsimg.com/isteam/stock/naxm9Al/:/rs=w:1920,h:1080,cg:true,m/cr=w:1920,h:1080,a:cc";

export const placeholderImages = {
  domestic: "https://placehold.co/900x620/008390/ffffff?text=Domestic+Care",
  restaurant: "https://placehold.co/900x620/161616/ffffff?text=Restaurant+Staff",
  labor: "https://placehold.co/900x620/005a64/ffffff?text=General+Labor",
  community: "https://placehold.co/900x620/008390/ffffff?text=Community+Resource",
};

export const siteCopy = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      community: "Community",
      contact: "Contact",
    },
    footer: {
      tagline: "Licensed employment referral agency in Brooklyn, NY.",
      appointment:
        "We love our customers. To serve you better, please call us and make an appointment.",
      hours: "Open 9:00 AM - 5:00 PM. Closed Saturdays.",
      rights: "Copyright © 2020 Agencia de Empleos NYC - All Rights Reserved.",
      madeBy: "Made by Volta",
    },
    home: {
      eyebrow: "Bienvenidos / Welcome",
      title: "Golden Rose Agencia de Empleos NYC",
      text: "Licensed employment referrals for families, employers, and job seekers in Brooklyn since 2016.",
      primaryAction: "I need workers",
      secondaryAction: "I need work",
      appointmentTitle: "Call us now to make an appointment.",
      appointmentText:
        "Domestic, restaurant, cleaning, construction, general labor, and other staffing referrals.",
      stats: [
        ["2016", "Serving New York since"],
        ["NYC", "Licensed employment agency"],
        ["2", "English and Spanish"],
        ["381", "Troy Ave, Brooklyn"],
      ],
      introTitle: "A Brooklyn agency built on personal referrals.",
      introText:
        "Golden Rose connects employers with reliable workers and helps applicants prepare for better opportunities. Our team keeps the process direct, practical, and easy to understand.",
      cards: [
        {
          title: "Housekeeper Nannies",
          text: "Housekeeping services, elderly care, live-in, live-out, cleaning nannies, and childcare support.",
          href: "/services",
          image: "domestic",
        },
        {
          title: "Restaurants",
          text: "Cooks, chefs, deli staff, grill men, busboys, dishwashers, waiters, waitresses, bartenders, and delivery help.",
          href: "/services",
          image: "restaurant",
        },
        {
          title: "General Labor",
          text: "Painters, carpenters, drivers, demolition, maintenance workers, chauffeurs, personal assistants, and staffing needs.",
          href: "/services",
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
      text: "Golden Rose organizes each request by the kind of work, schedule, and experience needed so employers and applicants can move quickly.",
      groups: [
        {
          title: "Housekeeper Nannies",
          image: "domestic",
          items: [
            "Housekeeping services",
            "Elderly care",
            "Live in - live out",
            "Cleaning nannies",
            "Nineras / cuidado de bebes",
            "Limpieza, cuidado de ancianos, entrada por salida, interna",
          ],
        },
        {
          title: "Restaurants",
          image: "restaurant",
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
            "Trabajos de cocina, lavaplatos, meseras, deliveristas",
          ],
        },
        {
          title: "General Labor",
          image: "labor",
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
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Nosotros",
      services: "Servicios",
      community: "Comunidad",
      contact: "Contacto",
    },
    footer: {
      tagline: "Agencia de empleos licenciada en Brooklyn, NY.",
      appointment:
        "Queremos servirle mejor. Por favor llamenos para hacer una cita.",
      hours: "Abierto 9:00 AM - 5:00 PM. Cerrado los sabados.",
      rights: "Copyright © 2020 Agencia de Empleos NYC - Todos los derechos reservados.",
      madeBy: "Hecho por Volta",
    },
    home: {
      eyebrow: "Bienvenidos / Welcome",
      title: "Golden Rose Agencia de Empleos NYC",
      text: "Referencias de empleo licenciadas para familias, empleadores y trabajadores en Brooklyn desde 2016.",
      primaryAction: "Necesito trabajadores",
      secondaryAction: "Busco empleo",
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
        "Golden Rose conecta empleadores con trabajadores confiables y ayuda a solicitantes a prepararse para mejores oportunidades. Nuestro equipo mantiene el proceso directo, practico y facil de entender.",
      cards: [
        {
          title: "Housekeeper Nannies",
          text: "Limpieza, cuidado de ancianos, interna, entrada por salida, nineras y cuidado de bebes.",
          href: "/services",
          image: "domestic",
        },
        {
          title: "Restaurantes",
          text: "Cocineros, chefs, deli, grill, busboys, lavaplatos, meseras, bartenders y deliveristas.",
          href: "/services",
          image: "restaurant",
        },
        {
          title: "Labor General",
          text: "Pintores, carpinteros, choferes, demolicion, mantenimiento, asistentes personales y construccion.",
          href: "/services",
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
      text: "Golden Rose organiza cada solicitud por tipo de trabajo, horario y experiencia para que empleadores y solicitantes puedan avanzar con claridad.",
      groups: [
        {
          title: "Housekeeper Nannies",
          image: "domestic",
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
          image: "restaurant",
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
          image: "labor",
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
  },
};
