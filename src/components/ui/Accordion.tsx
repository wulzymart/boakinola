import { useState, useId, type ReactNode } from "react";

interface AccordionItemProps {
  q: string;
  a: ReactNode;
  defaultOpen?: boolean;
}

export function AccordionItem({ q, a, defaultOpen = false }: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  const panelId = `${id}-panel`;
  const buttonId = `${id}-button`;

  return (
    <div className="border-b border-border last:border-b-0">
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-semibold text-primary hover:text-accent-600 transition-colors"
        >
          <span>{q}</span>
          <span
            aria-hidden="true"
            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border text-base transition-transform ${
              open ? "rotate-45 border-accent text-accent-600" : "text-muted"
            }`}
          >
            +
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
        className="pb-5 pr-10 text-muted leading-relaxed"
      >
        {a}
      </div>
    </div>
  );
}

export function Accordion({ children }: { children: ReactNode }) {
  return <div className="divide-y divide-border border-y border-border">{children}</div>;
}
