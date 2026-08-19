import { Quote, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { TESTIMONIALS } from "@/data/testimonials";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={i < rating ? "h-4 w-4 fill-primary text-primary" : "h-4 w-4 text-border"}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="avaliacoes" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
          O que nossas clientes dizem
        </h2>
        <div className="flex items-center gap-3 rounded-full border border-border bg-card px-5 py-2.5 shadow-soft">
          <span className="font-display text-2xl font-semibold text-primary">4,5</span>
          <Stars rating={5} />
        </div>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <Card key={t.name} className="rounded-2xl border-border/70 bg-card p-7 shadow-soft">
            <Quote className="h-7 w-7 text-rose-light" />
            <p className="mt-4 leading-relaxed text-foreground">“{t.comment}”</p>
            <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-rose-light font-medium text-primary">
                {t.name.charAt(0)}
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">{t.name}</p>
                <Stars rating={t.rating} />
              </div>
            </div>
          </Card>
        ))}
      </div>
      <p className="mt-6 text-xs text-muted-foreground">
        Avaliações exibidas como demonstração, sem integração externa.
      </p>
    </section>
  );
}
