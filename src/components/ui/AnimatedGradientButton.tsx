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
  cometCount?: number;
  hoverFillColor?: string;
  hoverTextColor?: string;
  hoverIconColor?: string;
  hoverGlowColor?: string;
}

export type AnimatedGradientButtonVariant = "primary" | "secondary";

export const AnimatedGradientButton = React.forwardRef<HTMLButtonElement, AnimatedGradientButtonProps & { variant?: AnimatedGradientButtonVariant }>(
  (
    {
      className,
      asChild = false,
      children,
      variant = "primary",
      headColor,
      trailColor,
      trailLength = 30,
      animationDuration = 3,
      borderWidth = 2,
      icon,
      iconPosition = "left",
      iconSpacing = 8,
      cometCount = 1,
      hoverFillColor,
      hoverTextColor = "#FFFFFF",
      hoverIconColor = "#FFFFFF",
      hoverGlowColor,
      ...props
    },
    ref
  ) => {
    // Default values based on variant
    const isPrimary = variant === "primary";
    
    const finalHeadColor = headColor || (isPrimary ? "#FFFFFF" : "oklch(0.97 0.02 350)");
    const finalTrailColor = trailColor || (isPrimary ? "oklch(0.63 0.155 358)" : "oklch(0.47 0.166 356)");
    const finalHoverFillColor = hoverFillColor || (isPrimary ? "oklch(0.47 0.166 356)" : "oklch(0.63 0.155 358)");
    const finalHoverGlowColor = hoverGlowColor || (isPrimary ? "oklch(0.63 0.155 358)" : "oklch(0.47 0.166 356)");
    const Comp = asChild ? Slot : "button";

    const style = {
      "--head-color": finalHeadColor,
      "--trail-color": finalTrailColor,
      "--trail-length": `${trailLength}%`,
      "--anim-duration": `${animationDuration}s`,
      "--border-width": `${borderWidth}px`,
      "--hover-fill": finalHoverFillColor,
      "--hover-text": hoverTextColor,
      "--hover-glow": finalHoverGlowColor,
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
            padding: 0.75rem 2.25rem;
            border-radius: 9999px;
            overflow: hidden;
            background: transparent;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            isolation: isolate;
            z-index: 1;
            cursor: pointer;
            pointer-events: auto !important;
            border: none;
            color: oklch(0.47 0.166 356) !important;
            font-weight: 600;
            text-transform: none;
            white-space: nowrap;
          }
          .animated-gradient-pill span {
            position: relative;
            z-index: 10 !important;
          }
          .animated-gradient-pill:hover {
            color: var(--hover-text);
            box-shadow: 
              0 0 15px var(--hover-glow),
              0 0 40px oklch(from var(--hover-glow) l c h / 0.4);
            transform: scale(1.03);
          }
          .animated-gradient-pill:active {
            transform: scale(0.97);
          }
          /* Background layer */
          .animated-gradient-pill::before {
            content: '';
            position: absolute;
            inset: var(--border-width);
            background: oklch(1 0 0);
            border-radius: 9999px;
            z-index: -1;
            transition: background 0.4s ease;
            pointer-events: none;
          }
          .animated-gradient-pill:hover::before {
            background: var(--hover-fill);
          }
          /* Animated gradient layer */
          .animated-gradient-pill::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 300%;
            aspect-ratio: 1/1;
            background: conic-gradient(
              from 0deg,
              transparent 0%,
              transparent calc(100% - var(--trail-length)),
              var(--trail-color) calc(100% - var(--trail-length) + 10%),
              var(--head-color) 100%
            );
            animation: spin-gradient var(--anim-duration) linear infinite;
            z-index: -2;
            transform-origin: center center;
            pointer-events: none;
          }
          @media (prefers-reduced-motion: reduce) {
            .animated-gradient-pill::after {
              animation: none;
              background: var(--trail-color);
              opacity: 0.5;
            }
          }
        `}} />
        <Comp
          ref={ref}
          className={cn("animated-gradient-pill group", className)}
          style={style}
          {...props}
        >
          <span className="relative z-10 flex items-center justify-center gap-[var(--icon-spacing)] pointer-events-none select-none">
            {icon && iconPosition === "left" && (
              <span className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                {icon}
              </span>
            )}
            {children}
            {icon && iconPosition === "right" && (
              <span className="shrink-0 transition-transform duration-300 group-hover:scale-110">
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
