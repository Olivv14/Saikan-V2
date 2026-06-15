import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type CTAButtonBaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "compact";
  className?: string;
};

type CTAButtonAnchorProps = CTAButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type CTAButtonButtonProps = CTAButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export type CTAButtonProps = CTAButtonAnchorProps | CTAButtonButtonProps;

export function CTAButton({
  children,
  variant = "primary",
  className = "",
  ...props
}: CTAButtonProps) {
  const classes = `landing-cta landing-cta--${variant} ${className}`.trim();

  if ("href" in props && props.href) {
    const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
    };

    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button className={classes} type="button" {...buttonProps}>
      {children}
    </button>
  );
}
