"use client";

import { FormEvent } from "react";
import { Language } from "./site-content";

const formCopy = {
  en: {
    labels: {
      visitorType: "I am a",
      name: "Name",
      contact: "Phone or email",
      message: "What do you need?",
    },
    options: {
      employer: "Employer looking for workers",
      applicant: "Applicant looking for work",
      partner: "Community partner",
    },
    placeholders: {
      name: "Your name",
      contact: "Best way to reach you",
      message:
        "Tell us about the role, schedule, experience, or support you need.",
    },
    button: "Submit request",
    note: "Your request opens in WhatsApp so Golden Rose can receive the details quickly. CRM or email automation can be added in the next phase.",
    intro: "Hello Golden Rose, I would like to submit an intake request.",
    fields: {
      visitorType: "I am a",
      name: "Name",
      contact: "Phone or email",
      message: "Details",
    },
  },
  es: {
    labels: {
      visitorType: "Yo soy",
      name: "Nombre",
      contact: "Telefono o email",
      message: "Que necesita?",
    },
    options: {
      employer: "Empleador buscando trabajadores",
      applicant: "Solicitante buscando empleo",
      partner: "Aliado comunitario",
    },
    placeholders: {
      name: "Su nombre",
      contact: "La mejor forma de contactarle",
      message:
        "Cuéntenos sobre el puesto, horario, experiencia o apoyo que necesita.",
    },
    button: "Enviar solicitud",
    note: "Su solicitud se abre en WhatsApp para que Golden Rose reciba los detalles rapidamente. Automatizacion por CRM o email puede agregarse en la proxima fase.",
    intro: "Hola Golden Rose, me gustaria enviar una solicitud.",
    fields: {
      visitorType: "Yo soy",
      name: "Nombre",
      contact: "Telefono o email",
      message: "Detalles",
    },
  },
};

type ContactFormProps = {
  language: Language;
};

export function ContactForm({ language }: ContactFormProps) {
  const copy = formCopy[language];

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const visitorType =
      form.get("visitorType")?.toString() as keyof typeof copy.options;
    const name = form.get("name")?.toString().trim() || "Not provided";
    const contact = form.get("contact")?.toString().trim() || "Not provided";
    const message = form.get("message")?.toString().trim() || "Not provided";

    const text = [
      copy.intro,
      `${copy.fields.visitorType}: ${copy.options[visitorType] ?? copy.options.employer}`,
      `${copy.fields.name}: ${name}`,
      `${copy.fields.contact}: ${contact}`,
      `${copy.fields.message}: ${message}`,
    ].join("\n");

    window.open(
      `https://wa.me/13473509660?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {copy.labels.visitorType}
        <select name="visitorType" defaultValue="employer">
          <option value="employer">{copy.options.employer}</option>
          <option value="applicant">{copy.options.applicant}</option>
          <option value="partner">{copy.options.partner}</option>
        </select>
      </label>
      <label>
        {copy.labels.name}
        <input name="name" type="text" placeholder={copy.placeholders.name} />
      </label>
      <label>
        {copy.labels.contact}
        <input
          name="contact"
          type="text"
          placeholder={copy.placeholders.contact}
        />
      </label>
      <label>
        {copy.labels.message}
        <textarea
          name="message"
          placeholder={copy.placeholders.message}
          rows={5}
        />
      </label>
      <button type="submit">{copy.button}</button>
      <p>{copy.note}</p>
    </form>
  );
}
