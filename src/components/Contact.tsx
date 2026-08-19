import { Clock, MapPin, MessageCircle, Phone, Navigation, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { AnimatedGradientButton } from "@/components/ui/AnimatedGradientButton";
import { CONTACT, HOURS, whatsappLink } from "@/lib/site";

export function Contact() {
  return (
    <section id="contato" className="mx-auto max-w-6xl px-5 py-24">
      <motion.div 
        className="max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-[0.7rem] uppercase tracking-[0.25em] text-primary font-semibold">Contato</span>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl text-foreground">
          Entre em contato
        </h2>
        <p className="mt-4 text-muted-foreground">Estamos prontos para atender você e tirar todas as suas dúvidas.</p>
      </motion.div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="grid gap-6 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2"
          >
            <Card className="h-full rounded-2xl border-border/70 p-7 shadow-soft border-primary/5">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-rose-light text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-xl font-semibold text-foreground">Endereço</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {CONTACT.address.street}
                    <br />
                    {CONTACT.address.city}
                    <br />
                    {CONTACT.address.zip}
                  </p>
                  <AnimatedGradientButton 
                    asChild 
                    variant="secondary" 
                    className="mt-5 px-4 py-1.5 text-xs"
                    icon={<Navigation className="h-3.5 w-3.5" />}
                  >
                    <a href={CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer">
                      Como chegar
                    </a>
                  </AnimatedGradientButton>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full rounded-2xl border-border/70 p-7 shadow-soft border-primary/5">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-rose-light text-primary">
                <Phone className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-foreground">Telefone</h3>
              <a href={CONTACT.phoneHref} className="mt-2 block text-sm text-muted-foreground transition-colors hover:text-primary font-medium">
                {CONTACT.phone}
              </a>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full rounded-2xl border-border/70 p-7 shadow-soft border-primary/5">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-rose-light text-primary">
                <MessageCircle className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-foreground">WhatsApp</h3>
              <AnimatedGradientButton 
                asChild 
                className="mt-2 w-full py-1.5 text-xs"
                icon={<CalendarDays className="h-3.5 w-3.5" />}
                onClick={() => console.log('[AnimatedGradientButton] WhatsApp Contact clicado')}
              >
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar atendimento
                </a>
              </AnimatedGradientButton>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="h-full rounded-2xl border-border/70 p-7 shadow-soft border-primary/5">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-rose-light text-primary">
                <Clock className="h-5 w-5" />
              </span>
              <h3 className="font-display text-xl font-semibold text-foreground">Horários</h3>
            </div>
            <ul className="mt-6 space-y-3">
              {HOURS.map((h, i) => (
                <li key={h.day} className="flex items-center justify-between gap-4 text-sm border-b border-border/30 pb-2 last:border-0 last:pb-0">
                  <span className="text-muted-foreground">{h.day}</span>
                  <span className={h.time === "Fechado" ? "text-muted-foreground italic" : "font-medium text-foreground"}>
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
