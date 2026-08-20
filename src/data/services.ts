import {
  Sparkles,
  Zap,
  Flower2,
  Footprints,
  HeartPulse,
  Sun,
  Eye,
  Hand,
  Activity,
  Scissors,
} from "lucide-react";
import { Service } from "@/types/site";

// Import asset pointers
import nails1Asset from "@/assets/nails-1.jpg.asset.json";
import pilates1Asset from "@/assets/pilates-1.jpg.asset.json";
import hairAsset from "@/assets/hair.jpg.asset.json";
import lashes1Asset from "@/assets/lashes-1.jpg.asset.json";
import lashes2Asset from "@/assets/lashes-2.jpg.asset.json";
import nails2Asset from "@/assets/nails-2.jpg.asset.json";
import pilates2Asset from "@/assets/pilates-2.jpg.asset.json";

export const SERVICES: Service[] = [
  {
    name: "Drenagem Facial",
    description: "Massagem relaxante que reduz o inchaço, ativa a circulação e devolve viço ao rosto.",
    icon: Sparkles,
  },
  {
    name: "Depilação a Laser",
    description: "Praticidade e conforto com resultados duradouros e cuidado com a sua pele.",
    icon: Zap,
  },
  {
    name: "Estética",
    description: "Tratamentos estéticos personalizados para cada tipo de pele e necessidade.",
    icon: Flower2,
  },
  {
    name: "Podologia",
    description: "Cuidados especializados para a saúde, o conforto e o bem-estar dos seus pés.",
    icon: Footprints,
  },
  {
    name: "Estética Corporal",
    description: "Protocolos voltados ao cuidado, à firmeza e à valorização do seu corpo.",
    icon: HeartPulse,
  },
  {
    name: "Morena Iluminada",
    description: "Técnica de iluminação dos fios que realça o tom natural com brilho sofisticado.",
    icon: Sun,
    image: hairAsset.url,
  },
  {
    name: "Extensão de Cílios",
    description: "Olhar marcante com fios leves, naturais e acabamento impecável.",
    icon: Eye,
    image: lashes1Asset.url,
  },
  {
    name: "Manicure",
    description: "Unhas bem cuidadas, alinhadas e com acabamento delicado e duradouro.",
    icon: Hand,
    image: nails1Asset.url,
  },
  {
    name: "Pilates",
    description: "Movimento, força e equilíbrio em aulas que cuidam do corpo e da mente.",
    icon: Activity,
    image: pilates1Asset.url,
  },
  {
    name: "Salão de Beleza",
    description: "Cortes, coloração, tratamentos e finalização para você sair renovada.",
    icon: Scissors,
  },
];
