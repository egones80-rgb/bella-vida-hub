import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/site";
import careImage from "@/assets/care.jpg";

export function Highlight() {
  return (
    <section className="bg-veil py-24 md:py-28 overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1fr_1.1fr]">
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={careImage}
            alt="Mãos com manicure delicada em ambiente de autocuidado"
            loading="lazy"
            width={1200}
            height={1200}
            className="aspect-square w-full rounded-[2rem] object-cover shadow-lift border border-primary/5"
          />
          <div
            aria-hidden
            className="absolute -bottom-5 -right-4 hidden h-28 w-28 rounded-full border border-primary/20 bg-card/70 backdrop-blur sm:block shadow-soft"
          />
          <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-soft border border-primary/10">
            <span className="text-primary font-display font-semibold text-sm">Prêmio de Qualidade 2026</span>
          </div>
        </motion.div>
        <motion.div 
          className="lg:pl-6"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[0.7rem] uppercase tracking-[0.25em] text-primary font-semibold">Exclusivo</span>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl text-foreground">
            Seu momento de se cuidar
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground italic">
            "Um refúgio de tranquilidade no coração da Vila Prudente."
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Do cuidado com a pele aos cabelos, unhas, corpo e bem-estar, o Espaço Bella Vida reúne
            diferentes experiências para você cuidar de si em um ambiente planejado para o seu conforto absoluto.
          </p>
          <Button asChild size="lg" className="mt-8 rounded-full shadow-soft transition-all duration-300 hover:scale-105 active:scale-95">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" /> Agendar meu horário
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
