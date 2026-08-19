import { Check } from "lucide-react";
import spaceImage from "@/assets/space.jpg";

const pillars = [
  "Atendimento personalizado do início ao fim",
  "Ambiente acolhedor e sofisticado",
  "Profissionais especializadas em cada área",
  "Variedade de serviços de beleza e bem-estar",
  "Experiência e cuidado com cada cliente",
];

export function About() {
  return (
    <section id="sobre" className="bg-veil py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-primary">Sobre nós</span>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Sobre o Espaço Bella Vida
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Um espaço pensado para proporcionar beleza, autoestima, cuidado e bem-estar em cada
            experiência.
          </p>
          <ul className="mt-8 space-y-3">
            {pillars.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm text-foreground">{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <img
          src={spaceImage}
          alt="Ambiente elegante do Espaço Bella Vida"
          loading="lazy"
          width={1408}
          height={1008}
          className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-lift"
        />
      </div>
    </section>
  );
}
