# Bella Vida Hub

Lovable Instruction Block – Site Espaço Bella Vida



Objetivo



Criar um site institucional premium, moderno, elegante e responsivo para o Espaço Bella Vida, um espaço de beleza, estética, bem-estar e cuidados pessoais.



O site deve apresentar os serviços de forma visualmente atraente, transmitir confiança e sofisticação e incentivar o visitante a agendar um atendimento pelo WhatsApp.



A identidade visual deve ser inspirada nas imagens de referência fornecidas: estética feminina premium, predominância de rosa/magenta sofisticado, branco, tons nude/rosé e detalhes metálicos, com aparência elegante e profissional.



Tecnologias obrigatórias:



- React

- TypeScript

- Tailwind CSS

- shadcn/ui

- Lucide React para ícones

- Componentes reutilizáveis e tipados

- Layout totalmente responsivo e mobile-first



---



Localização



Arquitetura



Organizar o projeto utilizando uma estrutura clara e escalável, por exemplo:



- "src/pages/"

- "src/components/"

- "src/components/ui/"

- "src/assets/"

- "src/data/"

- "src/lib/"



Criar componentes reutilizáveis para Header, Hero, Serviços, Avaliações, CTA, Informações de contato e Footer.



Não modificar



- Não remover funcionalidades existentes do projeto.

- Não alterar configurações que não sejam necessárias para esta implementação.

- Não substituir componentes existentes sem necessidade.

- Não alterar lógica de autenticação, banco de dados ou integrações existentes, caso existam.

- Não modificar outras páginas não relacionadas ao site.

- Under no circumstances change any other parts of the app.



---



Estrutura da página



1. Header / Navbar



Criar um header elegante, fixo ou sticky no topo.



Elementos:



- Logo do Espaço Bella Vida

- Links de navegação:

  - Início

  - Serviços

  - Sobre

  - Avaliações

  - Contato

- Botão destacado:

  - Agendar pelo WhatsApp



No mobile:



- Exibir apenas o logo e menu hamburger.

- Abrir menu mobile utilizando componente apropriado do shadcn/ui.

- O menu deve ter animação suave.



Header com efeito discreto de transparência/blur ao fazer scroll.



---



2. Hero Section



Criar uma primeira dobra visualmente impactante.



Título principal:



Espaço Bella Vida



Headline:



Beleza, cuidado e bem-estar em um só lugar.



Texto de apoio:



Cuide de você com experiências personalizadas de estética, beleza, Pilates e bem-estar.



CTAs:



Agendar atendimento



e



Conhecer nossos serviços



Adicionar imagem de alta qualidade relacionada a:



- estética

- spa

- beleza feminina

- autocuidado

- bem-estar



Usar a imagem de referência enviada como inspiração visual.



A composição deve ter aparência de landing page premium, com bastante espaço negativo e hierarquia visual clara.



Adicionar pequenos elementos decorativos em rosa/magenta, sem exageros.



---



3. Seção de confiança



Logo abaixo do Hero, criar uma pequena área de indicadores:



4,5 ★

Avaliação dos clientes



10+

Serviços de beleza e bem-estar



Atendimento personalizado

Cuidado em cada detalhe



Usar cards minimalistas ou uma composição horizontal elegante.



A nota 4,5 deve possuir destaque visual.



---



4. Seção de Serviços



Criar uma seção chamada:



Nossos serviços



Subtítulo:



Tudo para você se sentir ainda mais bonita, confiante e bem cuidada.



Criar cards individuais para cada serviço.



Serviços obrigatórios:



1. Drenagem Facial

   

   - Descrição curta relacionada a relaxamento, cuidado facial e bem-estar.



2. Depilação a Laser

   

   - Descrição curta destacando praticidade e cuidado.



3. Estética

   

   - Tratamentos estéticos personalizados.



4. Podologia

   

   - Cuidados especializados para saúde e bem-estar dos pés.



5. Estética Corporal

   

   - Tratamentos voltados ao cuidado e valorização do corpo.



6. Morena Iluminada

   

   - Serviço de transformação e iluminação dos cabelos.



7. Extensão de Cílios

   

   - Realce do olhar com acabamento sofisticado.



8. Manicure

   

   - Cuidados e beleza para as unhas.



9. Pilates

   

   - Movimento, fortalecimento, equilíbrio e bem-estar.



10. Salão de Beleza



- Serviços completos de beleza e cuidados pessoais.



Cada card deve possuir:



- Ícone ou imagem representativa

- Nome

- Descrição curta

- CTA "Saiba mais" ou "Agendar"

- Hover elegante

- Pequena elevação/sombra no hover

- Transição suave



No desktop:



- Grid de 3 colunas.



No tablet:



- Grid de 2 colunas.



No mobile:



- 1 coluna.



Utilizar componentes shadcn/ui quando fizer sentido, especialmente "Card", "Button" e elementos interativos.



---



5. Destaque visual dos serviços



Criar uma seção intermediária de destaque com imagem grande e texto.



Título:



Seu momento de se cuidar



Texto:



Do cuidado com a pele aos cabelos, unhas, corpo e bem-estar, o Espaço Bella Vida reúne diferentes experiências para você cuidar de si em um ambiente acolhedor e sofisticado.



CTA:



Agendar meu horário



Usar composição assimétrica e elegante.



---



6. Seção de avaliações



Criar seção:



O que nossas clientes dizem



Mostrar avaliação média:



4,5 ★★★★★



Criar pelo menos 3 cards de avaliações fictícias realistas, deixando claro no código que são dados de demonstração caso não exista integração real de avaliações.



Exemplo:



«"Um espaço maravilhoso, atendimento impecável e profissionais muito atenciosas. Adorei a experiência!"»



Cada avaliação deve conter:



- Nome

- Estrelas

- Comentário

- Ícone de aspas ou avatar discreto



Visual:



- Cards claros

- Bordas arredondadas

- Sombras suaves

- Detalhes em rosa/magenta

- Aparência premium



---



7. Seção Sobre



Título:



Sobre o Espaço Bella Vida



Texto institucional:



Um espaço pensado para proporcionar beleza, autoestima, cuidado e bem-estar em cada experiência.



Criar conteúdo destacando:



- Atendimento personalizado

- Ambiente acolhedor

- Profissionais especializados

- Variedade de serviços

- Experiência e cuidado com cada cliente



Usar imagem relacionada ao ambiente de estética/beleza.



---



8. CTA principal



Criar uma seção de conversão forte antes do footer.



Título:



Pronta para reservar seu momento de cuidado?



Texto:



Escolha seu serviço e fale conosco pelo WhatsApp para encontrar o melhor horário para você.



Botão:



Agendar pelo WhatsApp



O botão deve abrir o WhatsApp utilizando o número configurado em uma constante centralizada.



Não espalhar números de telefone diretamente pelos componentes.



Criar uma constante/configuração como:



"WHATSAPP_NUMBER"



para facilitar alteração futura.



---



9. Informações de contato



Criar seção:



Entre em contato



Informações:



Endereço



R. Virgílio, 90 - Vila Prudente

São Paulo - SP

CEP 03138-050



Telefone



(11) 98506-4055



WhatsApp



(11) 98506-4055



Horários



- Segunda-feira: 09:00–22:00

- Terça-feira: 08:00–22:00

- Quarta-feira: 08:00–22:00

- Quinta-feira: 08:00–22:00

- Sexta-feira: 08:00–22:00

- Sábado: 08:00–18:00

- Domingo: Fechado



Criar cards ou layout organizado para endereço, telefone, WhatsApp e horários.



Adicionar ícones Lucide:



- "MapPin"

- "Phone"

- "MessageCircle"

- "Clock"



O endereço deve possuir opção visual de "Como chegar".



---



10. Footer



Criar footer sofisticado.



Incluir:



Espaço Bella Vida



Beleza, cuidado e bem-estar.



Links:



- Início

- Serviços

- Sobre

- Avaliações

- Contato



Adicionar:



- WhatsApp

- Telefone

- Endereço

- Redes sociais, caso existam configurações para elas



Rodapé inferior:



© 2026 Espaço Bella Vida. Todos os direitos reservados.



---



Identidade visual



Utilizar como referência principal as imagens fornecidas pelo usuário.



Paleta



Criar tokens de cor utilizando Tailwind/CSS variables.



Paleta sugerida:



- Branco: "#FFFFFF"

- Off-white: "#FCF8FA"

- Rosa claro: "#F8DDE8"

- Rosa sofisticado: "#D94B82"

- Magenta premium: "#B51F5E"

- Rosa escuro: "#86143F"

- Nude: "#E8D3D0"

- Dourado/rosé metálico para pequenos detalhes

- Texto principal: "#2A2025"

- Texto secundário: "#6F6269"



Não utilizar rosa excessivamente saturado em grandes áreas.



O resultado deve parecer premium, feminino, sofisticado e moderno, e não infantil.



Tipografia



Usar uma combinação elegante:



- Fonte serifada sofisticada para títulos, quando apropriado.

- Fonte sans-serif moderna para textos e elementos de interface.



Garantir excelente legibilidade.



---



Logo e identidade

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/73c7ae0e-84ef-4f23-8b35-ef44b58ad65b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
