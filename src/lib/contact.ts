import { SITE } from "./site";

export interface MailtoArgs {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export function buildMailto({ name, email, phone, subject, message }: MailtoArgs): string {
  const body = [
    `Name:    ${name}`,
    `Email:   ${email}`,
    phone ? `Phone:   ${phone}` : null,
    "",
    "Message:",
    message,
    "",
    "— Sent from boakinola.com contact form",
  ]
    .filter(Boolean)
    .join("\n");

  const params = new URLSearchParams({
    subject: subject || `Website enquiry — ${name}`,
    body,
  });

  return `mailto:${SITE.email}?${params.toString()}`;
}

export function whatsappLink(message = "Hello BOAkinola & Co, I would like to enquire about your services.") {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}
