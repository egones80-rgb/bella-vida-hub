import { Star, HeartHandshake, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const items = [
  {
    highlight: "4,5 ★",
    title: "Avaliação das clientes",
    icon: Star,
    accent: true,
  },
  { highlight: "10+", title: "Serviços de beleza e bem-estar", icon: Sparkles, accent: false },
  {
    highlight: "Atendimento personalizado",
    title: "Cuidado em cada detalhe",
    icon: HeartHandshake,
    accent: false,
  },
];

export function TrustBar() {
  return (
    <section className="mx-auto -mt-8 max-w-6xl px-5">
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <Card
            key={item.title}
            className={`rounded-2xl border-border/70 p-6 shadow-soft ${item.accent ? "bg-primary text-primary-foreground" : "bg-card"}`}
          >
            <item.icon className={`h-5 w-5 ${item.accent ? "opacity-90" : "text-primary"}`} />
            <p
              className={`mt-4 font-display text-3xl font-semibold leading-tight ${item.accent ? "" : "text-foreground"}`}
            >
              {item.highlight}
            </p>
            <p className={`mt-1 text-sm ${item.accent ? "opacity-85" : "text-muted-foreground"}`}>
              {item.title}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
