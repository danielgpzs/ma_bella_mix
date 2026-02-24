# 🧴 MA BELLA MIX - Loja de Skincare

Uma loja de e-commerce moderna e elegante para produtos de skincare, construída com React, TypeScript e TailwindCSS.

## 🎨 Design & Identidade Visual

**Marca:** MA BELLA MIX  
**Posicionamento:** "Sua rotina de skincare começa aqui."

### Paleta de Cores
- **Primário:** Rosa Nude (#D4A5A5) - CTA e destaques
- **Secundário:** Dourado Suave (#C9B8A3) - Acentos e bordas
- **Fundo:** Branco Puro (#FFFFFF)
- **Texto:** Cinza Cálido (#8B8680)

### Tipografia
- **Títulos:** Playfair Display 600/700 (elegância e sofisticação)
- **Corpo:** Lato 300/400/500 (leitura fluida)

## 🏗️ Estrutura do Projeto

```
client/
├── src/
│   ├── pages/
│   │   ├── Home.tsx          # Página inicial com hero e produtos em destaque
│   │   ├── Produtos.tsx      # Listagem com filtros por categoria
│   │   ├── Produto.tsx       # Página individual de produto
│   │   ├── Carrinho.tsx      # Carrinho de compras
│   │   └── Checkout.tsx      # Formulário de pedido
│   ├── components/
│   │   ├── Header.tsx        # Navegação principal
│   │   ├── Footer.tsx        # Rodapé
│   │   └── ProductCard.tsx   # Card de produto reutilizável
│   ├── contexts/
│   │   ├── CartContext.tsx   # Contexto global do carrinho
│   │   └── ThemeContext.tsx  # Contexto de tema
│   ├── hooks/
│   │   └── useCart.ts        # Hook para gerenciar carrinho
│   ├── lib/
│   │   └── products.ts       # Dados de produtos e categorias
│   ├── App.tsx               # Roteamento principal
│   └── index.css             # Estilos globais e tema
└── index.html                # HTML base
```

## 🛍️ Funcionalidades Implementadas

### ✅ Página Inicial (Home)
- Hero banner com imagem de destaque
- Seção de categorias com ícones
- Produtos em destaque com avaliações
- Seção de benefícios da marca
- Design responsivo

### ✅ Catálogo de Produtos
- Grid de produtos com filtros por categoria
- Cards com imagem, nome, preço, avaliação
- Indicador de desconto
- Botão "Adicionar ao Carrinho" com feedback visual

### ✅ Página Individual de Produto
- Imagem em destaque
- Descrição completa
- Lista de benefícios
- Modo de uso
- Avaliações e número de reviews
- Controle de quantidade
- Botões para adicionar ao carrinho

### ✅ Carrinho de Compras
- Lista de itens com imagem, nome, preço
- Controle de quantidade (+ e -)
- Remover itens
- Cálculo automático de total
- Resumo do pedido
- Persistência em localStorage

### ✅ Checkout
- Formulário de dados pessoais
- Endereço de entrega
- Dados de pagamento
- Resumo do pedido
- Simulação de processamento

### ✅ Navegação & UX
- Header sticky com logo e carrinho
- Menu mobile responsivo
- Breadcrumb em página de produto
- Notificações com toast (sonner)
- Transições suaves

## 🎯 Produtos Disponíveis

1. **Sérum Vitamina C** - R$ 129,90 (desconto de 19%)
2. **Hidratante Rosa Nude** - R$ 99,90
3. **Limpador Facial Suave** - R$ 59,90
4. **Protetor Solar FPS 50** - R$ 79,90
5. **Kit Rotina Completa** - R$ 299,90 (desconto de 19%)

Todos os produtos incluem:
- Descrição detalhada
- Lista de benefícios
- Modo de uso
- Avaliação com número de reviews
- Imagem em alta qualidade

## 🚀 Como Usar

### Desenvolvimento Local
```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev

# Acessar em http://localhost:3000
```

### Build para Produção
```bash
# Gerar build otimizado
pnpm build

# Visualizar build
pnpm preview
```

## 💾 Gerenciamento de Estado

### CartContext
O carrinho é gerenciado globalmente através do `CartContext`, que fornece:
- `cart` - Array de itens no carrinho
- `addToCart()` - Adicionar produto
- `removeFromCart()` - Remover produto
- `updateQuantity()` - Alterar quantidade
- `clearCart()` - Limpar carrinho
- `getTotalPrice()` - Calcular total
- `getTotalItems()` - Contar itens

Os dados do carrinho são persistidos em localStorage automaticamente.

## 🎨 Customização

### Adicionar Novo Produto
Edite `client/src/lib/products.ts`:
```typescript
{
  id: "novo-produto",
  name: "Nome do Produto",
  category: "Categoria",
  price: 99.90,
  originalPrice: 129.90, // opcional
  image: "URL da imagem",
  description: "Descrição",
  benefits: ["Benefício 1", "Benefício 2"],
  usage: "Como usar",
  rating: 4.8,
  reviews: 150
}
```

### Alterar Cores
Edite as variáveis CSS em `client/src/index.css`:
```css
:root {
  --primary: #D4A5A5;      /* Rosa Nude */
  --accent: #C9B8A3;       /* Dourado */
  --background: oklch(...) /* Fundo */
}
```

### Adicionar Categorias
Edite o array `categories` em `client/src/lib/products.ts`.

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## 🔒 Segurança

- Formulário de checkout é simulado (não processa pagamento real)
- Dados sensíveis não são armazenados
- Validação básica de formulário

Para integração real de pagamento, considere:
- Stripe, PayPal ou Mercado Pago
- Backend para processar pagamentos
- Criptografia de dados sensíveis

## 📊 Performance

- Imagens otimizadas em CDN
- CSS-in-JS com TailwindCSS
- Code splitting automático
- Lazy loading de componentes

## 🛠️ Tecnologias

- **React 19** - Framework UI
- **TypeScript** - Tipagem estática
- **TailwindCSS 4** - Estilos
- **Wouter** - Roteamento leve
- **Lucide React** - Ícones
- **Sonner** - Notificações
- **shadcn/ui** - Componentes base

## 📝 Licença

Todos os direitos reservados © 2026 MA BELLA MIX

---

**Desenvolvido com ❤️ para a MA BELLA MIX**
