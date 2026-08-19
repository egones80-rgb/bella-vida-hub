# Plan: Animated Gradient Pill Button

Create a premium, high-tech pill-shaped button with a rotating conic gradient "comet" effect for Espaço Bella Vida.

## Technical Details

- **Component**: `src/components/ui/AnimatedGradientButton.tsx`
- **Styling**: Tailwind CSS + standard CSS for the conic gradient animation (`@keyframes spin`).
- **Animation**: Continuous 360-degree rotation of a pseudo-element with `conic-gradient`.
- **Interactivity**: Smooth transitions (300-500ms) to a full-glow state on hover.
- **Accessibility**: Semantic `<button>` (or `<a>`), keyboard navigation, and respect for `prefers-reduced-motion`.

## Steps

1.  **Create Component**: Build `AnimatedGradientButton.tsx` with full TypeScript props (colors, trail length, duration, comet count).
2.  **Define CSS**: Add the `spin` keyframe and conic gradient logic using Tailwind's arbitrary values or local CSS.
3.  **Implement Hover Effect**: Add states for increased glow and color shifts on hover.
4.  **Integrate WhatsApp**: Replace the main "Agendar pelo WhatsApp" buttons in:
    - `Hero.tsx`
    - `Header.tsx`
    - `CtaSection.tsx`
5.  **Verify**: Ensure no layout shifts, check mobile responsiveness, and confirm WhatsApp links still work.
