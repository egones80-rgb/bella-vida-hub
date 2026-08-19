import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/site";
import careImage from "@/assets/care.jpg";

export function Highlight() {
  return (
    <section className="bg-veil py-24 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1fr_1.1fr]">
        <div className="relative">
          <img
            src={careImage}
            alt="Mãos com manicure delicada em ambiente de autocuidado"
            loading="lazy"
            width={1200}
            height={1200}
            className="aspect-square w-full rounded-[2rem] object-cover shadow-lift"
          />
          <div
            aria-hidden
            className="absolute -bottom-5 -right-4 hidden h-28 w-28 rounded-full border border-primary/20 bg-card/70 backdrop-blur sm:block"
          />
        </div>
        <div className="lg:pl-6">
          <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Seu momento de se cuidar
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Do cuidado com a pele aos cabelos, unhas, corpo e bem-estar, o Espaço Bella Vida reúne
            diferentes experiências para você cuidar de si em um ambiente acolhedor e sofisticado.
          </p>
          <Button asChild size="lg" className="mt-8 rounded-full shadow-soft">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" /> Agendar meu horário
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
