# Plano de Implementação - Espaço Bella Vida

Implementação de melhorias visuais, técnicas e de experiência para o site institucional do Espaço Bella Vida, focando em estética premium, animações fluidas e acessibilidade.

## 1. Definições Técnicas e Dados
- **Interfaces TypeScript**: Criar `src/types/site.ts` com definições para `Service`, `Testimonial`, `BusinessHour` e `ContactInfo`.
- **Refatoração de Dados**: Mover dados de `src/data/services.ts` e `src/data/testimonials.ts` para um local centralizado se necessário, garantindo tipagem rigorosa.
- **Utilitário WhatsApp**: Refinar a função `whatsappLink` em `src/lib/site.ts` para suportar mensagens personalizadas por serviço.

## 2. Identidade Visual e Design
- **Paleta de Cores**: Ajustar `src/styles.css` para garantir o uso sofisticado de rosa, magenta e nude, evitando saturação excessiva.
- **Tipografia**: Validar a aplicação de *Cormorant Garamond* (serifa) e *Jost* (sans-serif).
- **Logo Temporário**: Implementar uma representação tipográfica elegante com monograma "EBV" enquanto o logo oficial não é fornecido.

## 3. Experiência e Animações
- **Framer Motion**: Integrar animações de fade-in, elevação de cards e transições suaves.
- **Microinterações**:
  - Hover suave nos botões e links.
  - Elevação leve nos cards de serviços e depoimentos.
  - Header com mudança de opacidade/sombra ao rolar.
  - Scroll suave entre seções.

## 4. Responsividade e Acessibilidade
- **Mobile-First**: Ajustar espaçamentos e tamanhos de fonte para telas de 375px a 1440px.
- **Semântica HTML**: Garantir uso correto de `<main>`, `<section>`, `aria-label` e `alt` em todas as imagens.
- **Navegação**: Garantir que o menu mobile seja intuitivo e os links de âncora funcionem perfeitamente.

## 5. SEO e Finalização
- **Meta Tags**: Configurar títulos e descrições únicas em `src/routes/index.tsx`.
- **Open Graph**: Adicionar suporte básico para compartilhamento em redes sociais.
- **Revisão de Textos**: Garantir que todo o conteúdo esteja em Português do Brasil.

## Detalhes Técnicos
- **Framework**: TanStack Start v1 (React 19).
- **Estilização**: Tailwind CSS v4.
- **Componentes**: shadcn/ui.
- **Ícones**: Lucide React.
- **Animações**: Framer Motion ou transições nativas do Tailwind conforme apropriado.
