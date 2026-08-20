import { Flower2, MapPin, MessageCircle, Phone } from "lucide-react";
import { CONTACT, NAV_LINKS, whatsappLink } from "@/lib/site";
import logoImage from "@/assets/logo.png";


export function Footer() {
  return (
    <footer className="border-t border-border bg-veil">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <img
              src={logoImage}
              alt="Espaço Bella Vida Logo"
              className="h-10 w-auto shrink-0 object-contain"
            />
            <span className="font-display text-xl font-semibold">Espaço Bella Vida</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Beleza, cuidado e bem-estar.</p>
        </div>

        <nav className="flex flex-col gap-2.5">
          <h3 className="font-display text-lg font-semibold">Navegação</h3>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-primary">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <h3 className="font-display text-lg font-semibold">Contato</h3>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
          >
            <MessageCircle className="h-4 w-4 shrink-0" /> WhatsApp {CONTACT.phone}
          </a>
          <a href={CONTACT.phoneHref} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
            <Phone className="h-4 w-4 shrink-0" /> {CONTACT.phone}
          </a>
          <a
            href={CONTACT.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary"
          >
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
            <span>
              {CONTACT.address.street} — {CONTACT.address.city}
            </span>
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-5 py-6 text-center text-xs text-muted-foreground">
          © 2026 Espaço Bella Vida. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
