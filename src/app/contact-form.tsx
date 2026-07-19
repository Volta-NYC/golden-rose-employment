"use client";

import { FormEvent } from "react";
import { Language } from "./site-content";

const formCopy = {
  en: {
    employer: {
      title: "Employer request",
      labels: {
        name: "Name",
        contact: "Phone or email",
        role: "Type of worker needed",
        schedule: "Schedule",
        details: "Notes",
      },
      placeholders: {
        name: "Your name",
        contact: "Best way to reach you",
        role: "Housekeeper, cook, driver, cleaner...",
        schedule: "Live-in, weekends, full-time, ASAP...",
        details: "Location, experience needed, start date, language, pay range.",
      },
      button: "Request workers",
      intro: "Hello Golden Rose, I am an employer requesting workers.",
    },
    applicant: {
      title: "Applicant intake",
      labels: {
        name: "Name",
        contact: "Phone or email",
        work: "Work wanted",
        experience: "Experience",
        availability: "Availability",
      },
      placeholders: {
        name: "Your name",
        contact: "Best way to reach you",
        work: "Housekeeping, restaurant, labor, childcare...",
        experience: "Briefly describe your work history",
        availability: "Days, hours, live-in/live-out, start date.",
      },
      button: "Apply for work",
      intro: "Hello Golden Rose, I am looking for work.",
    },
    note: "Submissions open in WhatsApp so Golden Rose can receive the details quickly.",
  },
  es: {
    employer: {
      title: "Solicitud de empleador",
      labels: {
        name: "Nombre",
        contact: "Telefono o email",
        role: "Tipo de trabajador que necesita",
        schedule: "Horario",
        details: "Notas",
      },
      placeholders: {
        name: "Su nombre",
        contact: "La mejor forma de contactarle",
        role: "Housekeeper, cocinero, chofer, limpieza...",
        schedule: "Interna, fines de semana, tiempo completo, urgente...",
        details: "Ubicacion, experiencia necesaria, fecha, idioma, pago.",
      },
      button: "Solicitar trabajadores",
      intro: "Hola Golden Rose, soy empleador y necesito trabajadores.",
    },
    applicant: {
      title: "Solicitud de empleo",
      labels: {
        name: "Nombre",
        contact: "Telefono o email",
        work: "Trabajo que busca",
        experience: "Experiencia",
        availability: "Disponibilidad",
      },
      placeholders: {
        name: "Su nombre",
        contact: "La mejor forma de contactarle",
        work: "Limpieza, restaurante, labor, cuidado de ninos...",
        experience: "Describa brevemente su experiencia",
        availability: "Dias, horas, interna/entrada por salida, fecha.",
      },
      button: "Buscar empleo",
      intro: "Hola Golden Rose, estoy buscando empleo.",
    },
    note: "Las solicitudes se abren en WhatsApp para que Golden Rose reciba los detalles rapidamente.",
  },
};

type IntakeFormProps = {
  language: Language;
};

function openWhatsApp(lines: string[]) {
  window.open(
    `https://wa.me/13473509660?text=${encodeURIComponent(lines.join("\n"))}`,
    "_blank",
    "noopener,noreferrer",
  );
}

export function EmployerRequestForm({ language }: IntakeFormProps) {
  const copy = formCopy[language].employer;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    openWhatsApp([
      copy.intro,
      `${copy.labels.name}: ${form.get("name") || "Not provided"}`,
      `${copy.labels.contact}: ${form.get("contact") || "Not provided"}`,
      `${copy.labels.role}: ${form.get("role") || "Not provided"}`,
      `${copy.labels.schedule}: ${form.get("schedule") || "Not provided"}`,
      `${copy.labels.details}: ${form.get("details") || "Not provided"}`,
    ]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {copy.labels.name}
        <input name="name" type="text" placeholder={copy.placeholders.name} />
      </label>
      <label>
        {copy.labels.contact}
        <input name="contact" type="text" placeholder={copy.placeholders.contact} />
      </label>
      <label>
        {copy.labels.role}
        <input name="role" type="text" placeholder={copy.placeholders.role} />
      </label>
      <label>
        {copy.labels.schedule}
        <input
          name="schedule"
          type="text"
          placeholder={copy.placeholders.schedule}
        />
      </label>
      <label>
        {copy.labels.details}
        <textarea name="details" placeholder={copy.placeholders.details} rows={4} />
      </label>
      <button type="submit">{copy.button}</button>
      <p>{formCopy[language].note}</p>
    </form>
  );
}

export function ApplicantIntakeForm({ language }: IntakeFormProps) {
  const copy = formCopy[language].applicant;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    openWhatsApp([
      copy.intro,
      `${copy.labels.name}: ${form.get("name") || "Not provided"}`,
      `${copy.labels.contact}: ${form.get("contact") || "Not provided"}`,
      `${copy.labels.work}: ${form.get("work") || "Not provided"}`,
      `${copy.labels.experience}: ${form.get("experience") || "Not provided"}`,
      `${copy.labels.availability}: ${form.get("availability") || "Not provided"}`,
    ]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {copy.labels.name}
        <input name="name" type="text" placeholder={copy.placeholders.name} />
      </label>
      <label>
        {copy.labels.contact}
        <input name="contact" type="text" placeholder={copy.placeholders.contact} />
      </label>
      <label>
        {copy.labels.work}
        <input name="work" type="text" placeholder={copy.placeholders.work} />
      </label>
      <label>
        {copy.labels.experience}
        <textarea
          name="experience"
          placeholder={copy.placeholders.experience}
          rows={3}
        />
      </label>
      <label>
        {copy.labels.availability}
        <input
          name="availability"
          type="text"
          placeholder={copy.placeholders.availability}
        />
      </label>
      <button type="submit">{copy.button}</button>
      <p>{formCopy[language].note}</p>
    </form>
  );
}

export const intakeFormTitles = {
  en: {
    employer: formCopy.en.employer.title,
    applicant: formCopy.en.applicant.title,
  },
  es: {
    employer: formCopy.es.employer.title,
    applicant: formCopy.es.applicant.title,
  },
};
