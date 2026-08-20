import { Star, HeartHandshake, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const items = [
  {
    highlight: "4,5 ★",
    title: "Avaliação das clientes",
    icon: Star,
    accent: false,
  },
  { highlight: "10+", title: "Serviços especializados", icon: Sparkles, accent: false },
  {
    highlight: "Personalizado",
    title: "Cuidado em cada detalhe",
    icon: HeartHandshake,
    accent: false,
  },
];

export function TrustBar() {
  return (
    <section className="mx-auto -mt-8 max-w-6xl px-5 relative z-10">
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
          >
            <Card
              className={`rounded-2xl border-border/70 p-6 shadow-lift transition-transform duration-300 hover:-translate-y-1 ${
                item.accent 
                  ? "bg-primary text-primary-foreground border-gold/30" 
                  : "bg-card border-primary/5"
              }`}
            >
              <item.icon className={`h-5 w-5 ${item.accent ? "text-gold" : "text-primary"}`} />
              <p
                className={`mt-4 font-display text-3xl font-semibold leading-tight ${item.accent ? "" : "text-foreground"}`}
              >
                {item.highlight}
              </p>
              <p className={`mt-1 text-[0.7rem] uppercase tracking-widest ${item.accent ? "opacity-90" : "text-muted-foreground"}`}>
                {item.title}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
