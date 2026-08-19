import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CONTACT, HOURS, whatsappLink } from "@/lib/site";

export function Contact() {
  return (
    <section id="contato" className="mx-auto max-w-6xl px-5 py-24">
      <div className="max-w-2xl">
        <span className="text-xs uppercase tracking-[0.25em] text-primary">Contato</span>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
          Entre em contato
        </h2>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-[1.2fr_1fr]">
        <div className="grid gap-5 sm:grid-cols-2">
          <Card className="rounded-2xl border-border/70 p-7 shadow-soft sm:col-span-2">
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-rose-light text-primary">
                <MapPin className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-xl font-semibold">Endereço</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {CONTACT.address.street}
                  <br />
                  {CONTACT.address.city}
                  <br />
                  {CONTACT.address.zip}
                </p>
                <Button asChild variant="outline" size="sm" className="mt-4 rounded-full border-primary/30 text-primary">
                  <a href={CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer">
                    Como chegar
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          <Card className="rounded-2xl border-border/70 p-7 shadow-soft">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-rose-light text-primary">
              <Phone className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-display text-xl font-semibold">Telefone</h3>
            <a href={CONTACT.phoneHref} className="mt-1 block text-sm text-muted-foreground hover:text-primary">
              {CONTACT.phone}
            </a>
          </Card>

          <Card className="rounded-2xl border-border/70 p-7 shadow-soft">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-rose-light text-primary">
              <MessageCircle className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-display text-xl font-semibold">WhatsApp</h3>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-sm text-muted-foreground hover:text-primary"
            >
              {CONTACT.phone}
            </a>
          </Card>
        </div>

        <Card className="rounded-2xl border-border/70 p-7 shadow-soft">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-rose-light text-primary">
              <Clock className="h-5 w-5" />
            </span>
            <h3 className="font-display text-xl font-semibold">Horários</h3>
          </div>
          <ul className="mt-5 space-y-2.5">
            {HOURS.map((h) => (
              <li key={h.day} className="flex items-center justify-between gap-4 text-sm">
                <span className="text-muted-foreground">{h.day}</span>
                <span className={h.time === "Fechado" ? "text-muted-foreground" : "font-medium"}>
                  {h.time}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}
