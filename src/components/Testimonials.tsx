import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { TESTIMONIALS } from "@/data/testimonials";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={i < rating ? "h-3.5 w-3.5 fill-primary text-primary" : "h-3.5 w-3.5 text-border"}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="avaliacoes" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
      <motion.div 
        className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-xl">
          <span className="text-[0.7rem] uppercase tracking-[0.25em] text-primary font-semibold">Feedback</span>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl text-foreground">
            O que nossas clientes dizem
          </h2>
        </div>
        <div className="flex items-center gap-3 rounded-full border border-border bg-card px-5 py-2.5 shadow-soft border-gold/20">
          <span className="font-display text-2xl font-semibold text-primary">4,5</span>
          <Stars rating={5} />
        </div>
      </motion.div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t, index) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col justify-between rounded-2xl border-border/70 bg-card p-7 shadow-soft transition-all duration-300 hover:shadow-lift border-primary/5 hover:border-primary/20">
              <div>
                <Quote className="h-7 w-7 text-rose-soft opacity-30" />
                <p className="mt-4 leading-relaxed text-foreground/90 italic">“{t.comment}”</p>
              </div>
              <div className="mt-8 flex items-center gap-3 border-t border-border/50 pt-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-rose-light font-display text-lg font-bold text-primary border border-primary/10">
                  {t.name.charAt(0)}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-foreground">{t.name}</p>
                  <Stars rating={t.rating} />
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
      <p className="mt-8 text-[0.65rem] text-muted-foreground uppercase tracking-widest text-center">
        Depoimentos reais de nossas clientes atendidas
      </p>
    </section>
  );
}
