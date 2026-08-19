import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/site";

export function CtaSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-16 text-center text-primary-foreground shadow-lift md:px-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-rose-soft opacity-40 blur-3xl"
        />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Pronta para reservar seu momento de cuidado?
          </h2>
          <p className="mt-4 opacity-90">
            Escolha seu serviço e fale conosco pelo WhatsApp para encontrar o melhor horário para você.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-9 rounded-full">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" /> Agendar pelo WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
