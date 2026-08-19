export const WHATSAPP_NUMBER = "5511985064055";

export const CONTACT = {
  phone: "(11) 98506-4055",
  phoneHref: "tel:+5511985064055",
  address: {
    street: "R. Virgílio, 90 - Vila Prudente",
    city: "São Paulo - SP",
    zip: "CEP 03138-050",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=R.+Virg%C3%ADlio,+90+-+Vila+Prudente,+S%C3%A3o+Paulo+-+SP,+03138-050",
} as const;

export const HOURS = [
  { day: "Segunda-feira", time: "09:00 – 22:00" },
  { day: "Terça-feira", time: "08:00 – 22:00" },
  { day: "Quarta-feira", time: "08:00 – 22:00" },
  { day: "Quinta-feira", time: "08:00 – 22:00" },
  { day: "Sexta-feira", time: "08:00 – 22:00" },
  { day: "Sábado", time: "08:00 – 18:00" },
  { day: "Domingo", time: "Fechado" },
] as const;

export function whatsappLink(message = "Olá! Gostaria de agendar um atendimento no Espaço Bella Vida.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
] as const;
