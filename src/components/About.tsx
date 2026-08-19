import { Check } from "lucide-react";
import { motion } from "framer-motion";
const spaceImage = "/space.jpg";

const pillars = [
  "Atendimento personalizado do início ao fim",
  "Ambiente acolhedor e sofisticado",
  "Profissionais especializadas em cada área",
  "Variedade de serviços de beleza e bem-estar",
  "Experiência e cuidado com cada cliente",
];

export function About() {
  return (
    <section id="sobre" className="bg-veil py-24 md:py-32 overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[0.7rem] uppercase tracking-[0.25em] text-primary font-semibold">Sobre nós</span>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl text-foreground">
            Sobre o Espaço Bella Vida
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Um espaço pensado para proporcionar beleza, autoestima, cuidado e bem-estar em cada
            experiência. Localizado na Vila Prudente, somos referência em tratamentos que unem técnica e acolhimento.
          </p>
          <ul className="mt-8 space-y-4">
            {pillars.map((p, i) => (
              <motion.li 
                key={p} 
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground shadow-sm">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm text-foreground/90 font-medium">{p}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2.5rem] border border-primary/10 -z-10" />
          <img
            src={spaceImage}
            alt="Ambiente elegante do Espaço Bella Vida"
            loading="lazy"
            width={1408}
            height={1008}
            className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-lift"
          />
        </motion.div>
      </div>
    </section>
  );
}
