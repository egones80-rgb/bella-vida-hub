import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { Highlight } from "@/components/Highlight";
import { Testimonials } from "@/components/Testimonials";
import { About } from "@/components/About";
import { CtaSection } from "@/components/CtaSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const title = "Espaço Bella Vida | Estética, Beleza, Pilates e Bem-Estar";
const description =
  "O melhor centro de estética e bem-estar na Vila Prudente, São Paulo. Depilação a laser, podologia, pilates, manicure e muito mais. Agende agora!";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: "https://project--73c7ae0e-84ef-4f23-8b35-ef44b58ad65b.lovable.app/og-image.jpg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Highlight />
        <Testimonials />
        <About />
        <CtaSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
