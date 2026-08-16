"use client";

import { FormEvent, useState } from "react";
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
      sending: "Sending...",
      success: "Thank you. Your employer request was sent.",
    },
    applicant: {
      title: "Job seeker details",
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
      button: "Send work details",
      sending: "Sending...",
      success: "Thank you. Your job seeker details were sent.",
    },
    note: "Your details are sent securely to Golden Rose.",
    formError: "Please fix the highlighted fields and try again.",
    requiredSuffix: "is required.",
    submitError: "We could not send your request right now. Please try again.",
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
      sending: "Enviando...",
      success: "Gracias. Su solicitud de empleador fue enviada.",
    },
    applicant: {
      title: "Datos para buscar empleo",
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
      button: "Enviar datos",
      sending: "Enviando...",
      success: "Gracias. Sus datos fueron enviados.",
    },
    note: "Sus datos se envian de forma segura a Golden Rose.",
    formError: "Corrija los campos marcados e intente de nuevo.",
    requiredSuffix: "es obligatorio.",
    submitError: "No pudimos enviar su solicitud ahora. Intente de nuevo.",
  },
};

type IntakeFormProps = {
  language: Language;
};

type SubmitState = {
  status: "idle" | "sending" | "success" | "error";
  errors: string[];
};

function getValue(form: FormData, key: string) {
  const value = form.get(key);
  return typeof value === "string" ? value.trim() : "";
}

async function sendContactRequest(payload: Record<string, string>) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = (await response.json().catch(() => null)) as {
    errors?: string[];
  } | null;

  if (!response.ok) {
    throw new Error(data?.errors?.join("\n") || "Submission failed.");
  }
}

export function EmployerRequestForm({ language }: IntakeFormProps) {
  const copy = formCopy[language].employer;
  const [submitState, setSubmitState] = useState<SubmitState>({
    status: "idle",
    errors: [],
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const payload = {
      formType: "employer",
      name: getValue(form, "name"),
      contact: getValue(form, "contact"),
      role: getValue(form, "role"),
      schedule: getValue(form, "schedule"),
      details: getValue(form, "details"),
    };

    const missingFields = [
      [copy.labels.name, payload.name],
      [copy.labels.contact, payload.contact],
      [copy.labels.role, payload.role],
      [copy.labels.schedule, payload.schedule],
    ]
      .filter(([, value]) => !value)
      .map(([label]) => `${label} ${formCopy[language].requiredSuffix}`);

    if (missingFields.length > 0) {
      setSubmitState({ status: "error", errors: missingFields });
      return;
    }

    setSubmitState({ status: "sending", errors: [] });

    try {
      await sendContactRequest(payload);
      event.currentTarget.reset();
      setSubmitState({ status: "success", errors: [] });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : formCopy[language].submitError;
      setSubmitState({
        status: "error",
        errors: message.split("\n").filter(Boolean),
      });
    }
  }

  return (
    <form aria-describedby="employer-request-note" onSubmit={handleSubmit}>
      <label>
        {copy.labels.name}
        <input
          autoComplete="name"
          name="name"
          placeholder={copy.placeholders.name}
          required
          type="text"
        />
      </label>
      <label>
        {copy.labels.contact}
        <input
          autoComplete="tel"
          name="contact"
          placeholder={copy.placeholders.contact}
          required
          type="text"
        />
      </label>
      <label>
        {copy.labels.role}
        <input
          name="role"
          placeholder={copy.placeholders.role}
          required
          type="text"
        />
      </label>
      <label>
        {copy.labels.schedule}
        <input
          name="schedule"
          placeholder={copy.placeholders.schedule}
          required
          type="text"
        />
      </label>
      <label>
        {copy.labels.details}
        <textarea
          name="details"
          placeholder={copy.placeholders.details}
          rows={4}
        />
      </label>
      <button disabled={submitState.status === "sending"} type="submit">
        {submitState.status === "sending" ? copy.sending : copy.button}
      </button>
      <FormStatus
        errors={submitState.errors}
        fallbackError={formCopy[language].formError}
        status={submitState.status}
        success={copy.success}
      />
      <p id="employer-request-note">{formCopy[language].note}</p>
    </form>
  );
}

export function ApplicantIntakeForm({ language }: IntakeFormProps) {
  const copy = formCopy[language].applicant;
  const [submitState, setSubmitState] = useState<SubmitState>({
    status: "idle",
    errors: [],
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const payload = {
      formType: "applicant",
      name: getValue(form, "name"),
      contact: getValue(form, "contact"),
      work: getValue(form, "work"),
      experience: getValue(form, "experience"),
      availability: getValue(form, "availability"),
    };

    const missingFields = [
      [copy.labels.name, payload.name],
      [copy.labels.contact, payload.contact],
      [copy.labels.work, payload.work],
    ]
      .filter(([, value]) => !value)
      .map(([label]) => `${label} ${formCopy[language].requiredSuffix}`);

    if (missingFields.length > 0) {
      setSubmitState({ status: "error", errors: missingFields });
      return;
    }

    setSubmitState({ status: "sending", errors: [] });

    try {
      await sendContactRequest(payload);
      event.currentTarget.reset();
      setSubmitState({ status: "success", errors: [] });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : formCopy[language].submitError;
      setSubmitState({
        status: "error",
        errors: message.split("\n").filter(Boolean),
      });
    }
  }

  return (
    <form aria-describedby="applicant-intake-note" onSubmit={handleSubmit}>
      <label>
        {copy.labels.name}
        <input
          autoComplete="name"
          name="name"
          placeholder={copy.placeholders.name}
          required
          type="text"
        />
      </label>
      <label>
        {copy.labels.contact}
        <input
          autoComplete="tel"
          name="contact"
          placeholder={copy.placeholders.contact}
          required
          type="text"
        />
      </label>
      <label>
        {copy.labels.work}
        <input
          name="work"
          placeholder={copy.placeholders.work}
          required
          type="text"
        />
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
      <button disabled={submitState.status === "sending"} type="submit">
        {submitState.status === "sending" ? copy.sending : copy.button}
      </button>
      <FormStatus
        errors={submitState.errors}
        fallbackError={formCopy[language].formError}
        status={submitState.status}
        success={copy.success}
      />
      <p id="applicant-intake-note">{formCopy[language].note}</p>
    </form>
  );
}

function FormStatus({
  errors,
  fallbackError,
  status,
  success,
}: {
  errors: string[];
  fallbackError: string;
  status: SubmitState["status"];
  success: string;
}) {
  if (status === "success") {
    return (
      <p className="form-status success" role="status">
        {success}
      </p>
    );
  }

  if (status === "error") {
    return (
      <div className="form-status error" role="alert">
        <p>{errors.length > 0 ? fallbackError : "Submission failed."}</p>
        {errors.length > 0 ? (
          <ul>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  }

  return null;
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
