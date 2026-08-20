import { type LucideIcon } from "lucide-react";

export interface Service {
  name: string;
  description: string;
  icon: LucideIcon;
  image?: string;
}

export interface Testimonial {
  name: string;
  rating: number;
  comment: string;
}

export interface BusinessHour {
  day: string;
  time: string;
}

export interface ContactInfo {
  phone: string;
  phoneHref: string;
  address: {
    street: string;
    city: string;
    zip: string;
  };
  mapsUrl: string;
}
