import * as React from "react";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

interface AnimatedGradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  headColor?: string;
  trailColor?: string;
  trailLength?: number; // 5 to 60
  animationDuration?: number; // seconds
  borderWidth?: number;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  iconSpacing?: number;
  cometCount?: number; // Only 1 implemented for sophistication as per request
  hoverFillColor?: string;
  hoverTextColor?: string;
  hoverIconColor?: string;
  hoverGlowColor?: string;
}

export const AnimatedGradientButton = React.forwardRef<HTMLButtonElement, AnimatedGradientButtonProps>(
  (
    {
      className,
      asChild = false,
      children,
      headColor = "#FFFFFF",
      trailColor = "oklch(0.63 0.155 358)", // --rose-soft
      trailLength = 25,
      animationDuration = 3,
      borderWidth = 2,
      icon,
      iconPosition = "left",
      iconSpacing = 8,
      cometCount = 1,
      hoverFillColor = "oklch(0.47 0.166 356)", // --magenta
      hoverTextColor = "#FFFFFF",
      hoverIconColor = "#FFFFFF",
      hoverGlowColor = "oklch(0.63 0.155 358)", // --rose-soft
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    // CSS variables for customization
    const style = {
      "--head-color": headColor,
      "--trail-color": trailColor,
      "--trail-length": `${trailLength}%`,
      "--anim-duration": `${animationDuration}s`,
      "--border-width": `${borderWidth}px`,
      "--hover-fill": hoverFillColor,
      "--hover-text": hoverTextColor,
      "--hover-glow": hoverGlowColor,
      "--icon-spacing": `${iconSpacing}px`,
    } as React.CSSProperties;

    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes spin-gradient {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
          }
          .animated-gradient-pill {
            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0.75rem 2rem;
            border-radius: 9999px;
            overflow: hidden;
            background: oklch(1 0 0);
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            isolation: isolate;
            z-index: 0;
            cursor: pointer;
            border: none;
            color: oklch(0.47 0.166 356); /* Default text color */
            font-weight: 500;
          }
          .animated-gradient-pill:hover {
            background: var(--hover-fill);
            color: var(--hover-text);
            box-shadow: 
              0 0 15px var(--hover-glow),
              0 0 30px oklch(from var(--hover-glow) l c h / 0.4);
            transform: scale(1.02);
          }
          .animated-gradient-pill:active {
            transform: scale(0.98);
          }
          .animated-gradient-pill::before {
            content: '';
            position: absolute;
            inset: var(--border-width);
            background: inherit;
            border-radius: 9999px;
            z-index: 1;
          }
          .animated-gradient-pill::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 250%; /* Larger to ensure it covers even long pills */
            aspect-ratio: 1/1;
            background: conic-gradient(
              from 0deg,
              transparent 0%,
              transparent calc(100% - var(--trail-length)),
              var(--trail-color) calc(100% - var(--trail-length) + 5%),
              var(--head-color) 100%
            );
            animation: spin-gradient var(--anim-duration) linear infinite;
            z-index: -1;
            transform-origin: center center;
          }
          @media (prefers-reduced-motion: reduce) {
            .animated-gradient-pill::after {
              animation-play-state: paused;
            }
          }
        `}} />
        <Comp
          ref={ref}
          className={cn("animated-gradient-pill group", className)}
          style={style}
          {...props}
        >
          <span className="relative z-10 flex items-center justify-center gap-[var(--icon-spacing)] transition-colors duration-300">
            {icon && iconPosition === "left" && (
              <span className="transition-colors duration-300 group-hover:text-[var(--hover-text)]">
                {icon}
              </span>
            )}
            {children}
            {icon && iconPosition === "right" && (
              <span className="transition-colors duration-300 group-hover:text-[var(--hover-text)]">
                {icon}
              </span>
            )}
          </span>
        </Comp>
      </>
    );
  }
);

AnimatedGradientButton.displayName = "AnimatedGradientButton";
