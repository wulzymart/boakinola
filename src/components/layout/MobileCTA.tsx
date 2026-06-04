import { SITE } from "../../lib/site";
import { whatsappLink } from "../../lib/contact";

/**
 * Floating mobile CTA bar. Sticky, never blocks content on desktop.
 * Hidden on `lg` and up; on smaller screens it gives one-tap call / WhatsApp / contact.
 */
export function MobileCTA() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-surface/95 shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.15)] backdrop-blur lg:hidden"
      role="region"
      aria-label="Quick contact"
    >
      <div className="grid grid-cols-3 gap-1 px-2 py-2 text-xs font-semibold">
        <a
          href={`tel:${SITE.phoneTel[0]}`}
          className="flex flex-col items-center justify-center gap-1 rounded-md py-2 text-primary hover:bg-surface-alt"
          aria-label="Call us"
        >
          <span aria-hidden="true" className="text-lg">☎</span>
          <span>Call</span>
        </a>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 rounded-md bg-[#25D366] py-2 text-white"
          aria-label="Chat with us on WhatsApp"
        >
          <span aria-hidden="true" className="text-lg">💬</span>
          <span>WhatsApp</span>
        </a>
        <a
          href={`mailto:${SITE.email}`}
          className="flex flex-col items-center justify-center gap-1 rounded-md py-2 text-primary hover:bg-surface-alt"
          aria-label="Email us"
        >
          <span aria-hidden="true" className="text-lg">✉</span>
          <span>Email</span>
        </a>
      </div>
    </div>
  );
}
