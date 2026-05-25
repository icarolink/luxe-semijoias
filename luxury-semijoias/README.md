# LUXE - E-commerce de Semijoias de Luxo

Um e-commerce moderno, minimalista e de alta conversão para semijoias de luxo, desenvolvido com as tecnologias mais recentes.

## 🚀 Stack Tecnológica

- **Framework:** Next.js 14 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Animações:** Framer Motion
- **Ícones:** Lucide React
- **Utilitários:** clsx, tailwind-merge

## 📁 Estrutura do Projeto

```
luxury-semijoias/
├── src/
│   ├── app/
│   │   ├── globals.css      # Estilos globais e variáveis CSS
│   │   ├── layout.tsx       # Layout principal com providers
│   │   └── page.tsx         # Página inicial
│   ├── components/
│   │   ├── Header.tsx       # Header fixo com navegação
│   │   ├── HeroSection.tsx  # Seção hero com imagem full-screen
│   │   ├── CategoryCarousel.tsx  # Carousel de categorias
│   │   ├── ProductCard.tsx  # Card de produto individual
│   │   ├── ProductShowcase.tsx  # Vitrine de produtos
│   │   ├── FeaturesSection.tsx  # Diferenciais da marca
│   │   ├── CartDrawer.tsx   # Sacola lateral deslizante
│   │   └── Footer.tsx       # Rodapé completo
│   ├── hooks/
│   │   └── useCart.tsx      # Contexto e hook do carrinho
│   ├── lib/
│   │   └── utils.ts         # Utilitários (cn function)
│   └── types/
│       └── index.ts         # Tipos TypeScript
├── public/
│   └── images/              # Imagens estáticas
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.mjs
```

## 🎨 Design System

### Cores
- **Off-white:** #faf9f8 (background principal)
- **Dourado:** #d4af37 (cor de destaque)
- **Dourado claro:** #f3e5ab (detalhes)
- **Preto:** #1a1a1a (texto principal)
- **Cinza sutil:** #f5f5f5 (fundos secundários)

### Tipografia
- **Títulos:** Playfair Display (serifada)
- **Corpo:** Inter (sans-serif)

## ✨ Funcionalidades

1. **Header & Navegação**
   - Menu sticky que se adapta ao scroll
   - Banner promocional no topo
   - Busca preditiva
   - Ícones de sacola com contador e perfil

2. **Hero Section**
   - Imagem full-screen de alto impacto
   - Animações suaves de fade-in
   - CTA magnético

3. **Carousel de Categorias**
   - Navegação horizontal fluida
   - Imagens circulares com hover effects
   - Setas de navegação desktop

4. **Vitrine de Produtos**
   - Grid responsivo
   - Hover com segunda imagem do produto
   - Tags (Novo, Mais Vendido, Oferta)
   - Quick view e add to cart rápido

5. **Diferenciais**
   - Grid com ícones minimalistas
   - 6 benefícios da marca

6. **Sacola Lateral (Cart Drawer)**
   - Slide-in animation com Framer Motion
   - Controle de quantidade
   - Progresso para frete grátis
   - Subtotal em tempo real

7. **Footer Completo**
   - Links institucionais
   - Newsletter para captura de leads
   - Selos de segurança e formas de pagamento

## 🛠️ Instalação e Desenvolvimento

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção
npm start
```

## 📱 Responsividade

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Testado em todos os dispositivos principais

## 🎯 Performance

- Imagens otimizadas com lazy loading
- Animações a 60fps com Framer Motion
- Core Web Vitals otimizados
- Código modular e componentizado

## 🔐 Boas Práticas

- TypeScript para type safety
- Componentes reutilizáveis
- Hooks customizados para lógica de estado
- Acessibilidade (ARIA labels)
- SEO otimizado com metadata

## 📄 Licença

MIT License
