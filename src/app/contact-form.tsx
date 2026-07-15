"use client";

import { FormEvent } from "react";

const contactLabels = {
  employer: "Employer looking for workers",
  applicant: "Applicant looking for work",
  partner: "Community partner",
};

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const visitorType =
      form.get("visitorType")?.toString() as keyof typeof contactLabels;
    const name = form.get("name")?.toString().trim() || "Not provided";
    const contact = form.get("contact")?.toString().trim() || "Not provided";
    const message = form.get("message")?.toString().trim() || "Not provided";

    const text = [
      "Hello Golden Rose, I would like to submit an intake request.",
      `I am a: ${contactLabels[visitorType] ?? contactLabels.employer}`,
      `Name: ${name}`,
      `Phone or email: ${contact}`,
      `Details: ${message}`,
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
        I am a
        <select name="visitorType" defaultValue="employer">
          <option value="employer">Employer looking for workers</option>
          <option value="applicant">Applicant looking for work</option>
          <option value="partner">Community partner</option>
        </select>
      </label>
      <label>
        Name
        <input name="name" type="text" placeholder="Your name" />
      </label>
      <label>
        Phone or email
        <input name="contact" type="text" placeholder="Best way to reach you" />
      </label>
      <label>
        What do you need?
        <textarea
          name="message"
          placeholder="Tell us about the role, schedule, experience, or support you need."
          rows={5}
        />
      </label>
      <button type="submit">Submit request</button>
      <p>
        Your request opens in WhatsApp so Golden Rose can receive the details
        quickly. CRM or email automation can be added in the next phase.
      </p>
    </form>
  );
}
