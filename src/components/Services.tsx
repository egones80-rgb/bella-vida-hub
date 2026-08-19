import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SERVICES } from "@/data/services";
import { whatsappLink } from "@/lib/site";

export function Services() {
  return (
    <section id="servicos" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
      <div className="max-w-2xl">
        <span className="text-xs uppercase tracking-[0.25em] text-primary">Experiências</span>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
          Nossos serviços
        </h2>
        <p className="mt-4 text-muted-foreground">
          Tudo para você se sentir ainda mais bonita, confiante e bem cuidada.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <Card
            key={service.name}
            className="group rounded-2xl border-border/70 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift"
          >
            <span className="grid h-12 w-12 place-items-center rounded-full bg-rose-light text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <service.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-2xl font-semibold">{service.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            <a
              href={whatsappLink(`Olá! Gostaria de agendar: ${service.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-magenta-deep"
            >
              Agendar
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Card>
        ))}
      </div>
    </section>
  );
}
