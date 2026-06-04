import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

type Variant = "primary" | "accent" | "outline" | "ghost-light";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
  iconRight?: ReactNode;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

const VARIANT = {
  primary: "btn-primary",
  accent: "btn-accent",
  outline: "btn-outline",
  "ghost-light": "btn-ghost-light",
};

const SIZE = {
  sm: "text-sm px-3 py-2",
  md: "",
  lg: "text-base px-6 py-3",
};

interface LinkButtonProps extends BaseProps {
  to: string;
  type?: never;
  onClick?: never;
  href?: never;
}

interface AnchorButtonProps extends BaseProps {
  href: string;
  external?: boolean;
  to?: never;
  onClick?: never;
  type?: never;
}

interface ButtonProps extends BaseProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  to?: never;
  href?: never;
}

type Props = LinkButtonProps | AnchorButtonProps | ButtonProps;

export function Button(props: Props) {
  const {
    children,
    variant = "primary",
    className = "",
    icon,
    iconRight,
    size = "md",
    fullWidth = false,
  } = props;

  const classes = `btn ${VARIANT[variant]} ${SIZE[size]} ${fullWidth ? "w-full" : ""} ${className}`;

  if ("to" in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {icon}
        {children}
        {iconRight}
      </Link>
    );
  }

  if ("href" in props && props.href) {
    return (
      <a
        href={props.href}
        className={classes}
        target={props.external ? "_blank" : undefined}
        rel={props.external ? "noopener noreferrer" : undefined}
      >
        {icon}
        {children}
        {iconRight}
      </a>
    );
  }

  return (
    <button
      type={"type" in props ? props.type ?? "button" : "button"}
      className={classes}
      onClick={"onClick" in props ? props.onClick : undefined}
      disabled={"disabled" in props ? props.disabled : undefined}
    >
      {icon}
      {children}
      {iconRight}
    </button>
  );
}
