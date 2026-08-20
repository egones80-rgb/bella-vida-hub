import { ArrowRight, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { AnimatedGradientButton } from "@/components/ui/AnimatedGradientButton";
import { SERVICES } from "@/data/services";
import { whatsappLink } from "@/lib/site";

export function Services() {
  return (
    <section id="servicos" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <span className="text-[0.7rem] uppercase tracking-[0.25em] text-primary font-semibold">Experiências</span>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl text-foreground">
          Nossos serviços
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Tudo para você se sentir ainda mais bonita, confiante e bem cuidada.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card
              className="group h-full flex flex-col rounded-2xl border-border/70 bg-card p-7 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-lift"
            >
              <div className="relative h-48 w-full overflow-hidden rounded-xl mb-5">
                {service.image ? (
                  <img
                    src={service.image}
                    alt={`Procedimento de ${service.name}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-rose-light/30">
                    <service.icon className="h-10 w-10 text-primary/40" />
                  </div>
                )}
                <div className="absolute top-3 left-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-background/90 text-primary shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <service.icon className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground">{service.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground flex-grow">{service.description}</p>
              <AnimatedGradientButton
                asChild
                className="mt-5 w-full py-2 text-xs"
                icon={<CalendarDays className="h-3.5 w-3.5" />}
                iconPosition="right"
                onClick={() => console.log(`[AnimatedGradientButton] Agendar serviço: ${service.name}`)}
              >
                <a
                  href={whatsappLink(service.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar
                </a>
              </AnimatedGradientButton>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
