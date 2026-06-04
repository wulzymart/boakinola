interface IconProps {
  name: string;
  className?: string;
}

/**
 * Lightweight inline SVG icon set. Kept dependency-free; stroke-only, currentColor.
 * Add to the switch statement to introduce new service icons.
 */
export function IconForService({ name, className = "h-6 w-6" }: IconProps) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "currentColor" as const,
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "audit":
      return (
        <svg {...common}>
          <path d="M9 12l2 2 4-4" />
          <path d="M21 12c0 5-4 9-9 9s-9-4-9-9 4-9 9-9c2.4 0 4.6 1 6.2 2.6" />
        </svg>
      );
    case "ledger":
      return (
        <svg {...common}>
          <path d="M4 4h13a3 3 0 013 3v13a0 0 0 010 0H7a3 3 0 01-3-3V4z" />
          <path d="M8 8h8M8 12h8M8 16h5" />
        </svg>
      );
    case "tax":
      return (
        <svg {...common}>
          <path d="M4 21V10l8-6 8 6v11" />
          <path d="M9 21v-7h6v7" />
          <path d="M12 7v3" />
        </svg>
      );
    case "vat":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 9h6M9 13h6M9 17h3" />
        </svg>
      );
    case "recover":
      return (
        <svg {...common}>
          <path d="M3 12a9 9 0 1015.5-6.4" />
          <path d="M21 3v6h-6" />
        </svg>
      );
    case "consult":
      return (
        <svg {...common}>
          <path d="M21 12c0 4.4-4 8-9 8-1.4 0-2.7-.3-3.9-.8L3 21l1.8-4.4C3.7 15.2 3 13.7 3 12c0-4.4 4-8 9-8s9 3.6 9 8z" />
          <path d="M9 11h.01M12 11h.01M15 11h.01" />
        </svg>
      );
    case "incorporate":
      return (
        <svg {...common}>
          <path d="M3 7l9-4 9 4-9 4-9-4z" />
          <path d="M3 12l9 4 9-4" />
          <path d="M3 17l9 4 9-4" />
        </svg>
      );
    case "gavel":
      return (
        <svg {...common}>
          <path d="M14 13l-7 7-3-3 7-7" />
          <path d="M9 8l3-3 7 7-3 3z" />
          <path d="M14 4l6 6" />
        </svg>
      );
    case "magnify":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
      );
    case "reconcile":
      return (
        <svg {...common}>
          <path d="M3 6h12M3 12h12M3 18h12" />
          <path d="M19 9l2 2-2 2" />
          <path d="M19 15l2 2-2 2" />
        </svg>
      );
    case "asset":
      return (
        <svg {...common}>
          <path d="M3 7l9-4 9 4v10l-9 4-9-4V7z" />
          <path d="M3 7l9 4 9-4" />
          <path d="M12 11v10" />
        </svg>
      );
    case "training":
      return (
        <svg {...common}>
          <path d="M2 9l10-5 10 5-10 5L2 9z" />
          <path d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
          <path d="M22 9v6" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...common}>
          <path d="M11 20A7 7 0 014 13c0-7 9-9 17-9 0 8-2 17-9 17a7 7 0 01-1-.1z" />
          <path d="M2 22c4-8 9-12 18-13" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}
