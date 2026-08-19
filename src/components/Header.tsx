import { useEffect, useState } from "react";
import { Menu, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedGradientButton } from "@/components/ui/AnimatedGradientButton";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NAV_LINKS, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";
import logoAsset from "@/assets/logo.png.asset.json";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-soft" : "bg-transparent",
      )}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4">
        <a href="#inicio" className="flex min-w-0 items-center gap-2.5">
          <img
            src={logoAsset.url}
            alt="Espaço Bella Vida Logo"
            className="h-10 w-auto shrink-0 object-contain"
          />
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-lg font-semibold tracking-tight">
              Espaço Bella Vida
            </span>
            <span className="block text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
              beleza & bem-estar
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <AnimatedGradientButton 
            asChild 
            icon={<MessageCircle className="h-4 w-4" />} 
            className="px-5 py-2 text-sm"
            onClick={() => console.log('[AnimatedGradientButton] Header CTA clicado')}
          >
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              Agendar pelo WhatsApp
            </a>
          </AnimatedGradientButton>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" aria-label="Abrir menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[86%] max-w-xs bg-background">
            <SheetTitle className="font-display text-xl">Espaço Bella Vida</SheetTitle>
            <nav className="mt-8 flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {l.label}
                </a>
              ))}
              <AnimatedGradientButton 
                asChild 
                icon={<MessageCircle className="h-4 w-4" />} 
                className="mt-4 w-full"
                onClick={() => {
                  console.log('[AnimatedGradientButton] Mobile Header CTA clicado');
                  setOpen(false);
                }}
              >
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  Agendar pelo WhatsApp
                </a>
              </AnimatedGradientButton>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
