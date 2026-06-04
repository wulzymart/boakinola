import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  as?: "section" | "div" | "article" | "header" | "footer" | "main" | "aside";
  background?: "surface" | "alt" | "primary" | "accent";
  padding?: "sm" | "md" | "lg" | "none";
  id?: string;
  ariaLabel?: string;
}

const BG = {
  surface: "bg-surface",
  alt: "bg-surface-alt",
  primary: "bg-primary text-white",
  accent: "bg-accent-50",
};

const PAD = {
  none: "",
  sm: "py-10 md:py-14",
  md: "py-14 md:py-20",
  lg: "py-20 md:py-28",
};

export function Section({
  children,
  className = "",
  containerClassName = "",
  as = "section",
  background = "surface",
  padding = "md",
  id,
  ariaLabel,
}: SectionProps) {
  const Tag = as as keyof JSX.IntrinsicElements;
  return (
    <Tag
      id={id}
      aria-label={ariaLabel}
      className={`${BG[background]} ${PAD[padding]} ${className}`}
    >
      <div className={`container-narrow ${containerClassName}`}>{children}</div>
    </Tag>
  );
}
