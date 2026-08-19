import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/site";

export function CtaSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 overflow-hidden">
      <motion.div 
        className="relative overflow-hidden rounded-[2.5rem] bg-primary px-6 py-16 text-center text-primary-foreground shadow-lift md:px-16 border border-gold/20"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-rose-soft opacity-30 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-gold/20 opacity-30 blur-3xl"
        />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Pronta para reservar seu momento de cuidado?
          </h2>
          <p className="mt-5 opacity-90 text-lg font-display">
            Escolha seu serviço e fale conosco pelo WhatsApp para encontrar o melhor horário para você na Vila Prudente.
          </p>
          <Button 
            asChild 
            size="lg" 
            variant="secondary" 
            className="mt-9 rounded-full px-8 py-6 shadow-soft transition-all duration-300 hover:scale-105 active:scale-95 bg-white text-primary hover:bg-gold hover:text-white"
          >
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5 mr-2" /> Agendar pelo WhatsApp
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
