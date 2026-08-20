import { CalendarDays, MessageCircle, Sparkles, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedGradientButton } from "@/components/ui/AnimatedGradientButton";
import { whatsappLink } from "@/lib/site";
const heroImage = "/hero-banner.png";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-veil pt-32 pb-20 md:pt-40 md:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-rose-light blur-3xl opacity-70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-nude blur-3xl opacity-60"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_1fr]">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-[0.7rem] uppercase tracking-[0.2em] text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Vila Prudente · São Paulo
            </span>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
              Espaço <span className="text-gradient-rose">Bella Vida</span>
            </h1>
            <p className="mt-5 font-display text-2xl text-secondary-foreground md:text-3xl">
              Beleza, cuidado e bem-estar em um só lugar.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Cuide de você com experiências personalizadas de estética, beleza, Pilates e bem-estar.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <AnimatedGradientButton 
                asChild 
                icon={<CalendarDays className="h-4 w-4" />}
                onClick={() => console.log('[AnimatedGradientButton] Agendar atendimento clicado')}
              >
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  Agendar atendimento
                </a>
              </AnimatedGradientButton>
              <AnimatedGradientButton 
                asChild 
                variant="secondary" 
                icon={<ArrowDown className="h-4 w-4" />}
                onClick={() => {
                  console.log('[AnimatedGradientButton] Conhecer nossos serviços clicado');
                  document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <a href="#servicos">Conhecer nossos serviços</a>
              </AnimatedGradientButton>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div
            aria-hidden
            className="absolute -inset-3 rounded-[2.5rem] border border-primary/15"
          />
          <img
            src={heroImage}
            alt="Cliente recebendo tratamento facial no Espaço Bella Vida"
            width={1200}
            height={1504}
            className="relative aspect-[16/10] w-full rounded-[2rem] object-cover shadow-lift"
          />
        </motion.div>
      </div>
    </section>
  );
}
