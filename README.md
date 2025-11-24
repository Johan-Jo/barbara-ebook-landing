# E-book Website - Bárbara Marques

Landing page para o e-book "Aprenda a Decorar em Dois Passos" construída com Next.js 15, TypeScript, Tailwind CSS e integração completa com Stripe.

## 🚀 Tecnologias

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **Stripe** - Processamento de pagamentos

## 📋 Pré-requisitos

- Node.js 18+ instalado
- Conta Stripe (teste ou produção)
- Variáveis de ambiente configuradas

## 🔧 Instalação

1. Instale as dependências:

```bash
npm install
```

2. Configure as variáveis de ambiente:

Copie `.env.local.example` para `.env.local` e preencha com suas credenciais Stripe:

```bash
cp .env.local.example .env.local
```

Edite `.env.local` com:
- `STRIPE_SECRET_KEY` - Sua chave secreta do Stripe
- `STRIPE_PUBLIC_KEY` - Sua chave pública do Stripe
- `STRIPE_PRICE_ID_EBOOK` - ID do preço do produto no Stripe
- `STRIPE_SUCCESS_URL` - URL de sucesso (ex: `http://localhost:3000/ebook/acesso`)
- `STRIPE_CANCEL_URL` - URL de cancelamento (ex: `http://localhost:3000/checkout/cancelado`)
- `STRIPE_WEBHOOK_SECRET_EBOOK` - Secret do webhook do Stripe

## 🏃 Executando o Projeto

### Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

### Produção

```bash
npm run build
npm start
```

## 📁 Estrutura do Projeto

```
├── app/
│   ├── api/
│   │   ├── checkout/          # API route para criar sessão de checkout
│   │   └── stripe/
│   │       └── webhook/       # Webhook handler do Stripe
│   ├── checkout/
│   │   └── cancelado/        # Página de cancelamento
│   ├── ebook/
│   │   └── acesso/           # Página de acesso gated (após pagamento)
│   ├── layout.tsx            # Layout raiz com metadata
│   ├── page.tsx              # Página principal (landing)
│   └── globals.css           # Estilos globais Tailwind
├── components/               # Componentes React
│   ├── Hero.tsx
│   ├── ParaQuem.tsx
│   ├── OQueVaiAprender.tsx
│   ├── Conteudo.tsx
│   ├── SobreAutora.tsx
│   ├── Depoimentos.tsx
│   ├── Bonus.tsx
│   ├── FAQ.tsx
│   ├── FinalCTA.tsx
│   ├── Footer.tsx
│   ├── Button.tsx
│   ├── BenefitCard.tsx
│   └── TrustBadge.tsx
├── hooks/
│   └── useCheckout.ts        # Hook para gerenciar checkout
├── lib/
│   ├── stripe.ts            # Cliente Stripe (server-side)
│   └── orders.ts            # Gerenciamento de pedidos (file-based)
├── types/
│   └── stripe.ts            # Tipos TypeScript para Stripe
├── data/
│   └── orders.json          # Arquivo de armazenamento de pedidos (gerado)
└── public/
    ├── ebook/               # Imagens do e-book
    └── ebooks/              # PDF do e-book
```

## 💳 Configuração do Stripe

### 1. Criar Produto e Preço

1. Acesse o [Dashboard do Stripe](https://dashboard.stripe.com)
2. Vá em **Products** → **Add product**
3. Crie o produto do e-book
4. Copie o **Price ID** e adicione em `STRIPE_PRICE_ID_EBOOK`

### 2. Configurar Webhook

1. No Stripe Dashboard, vá em **Developers** → **Webhooks**
2. Clique em **Add endpoint**
3. URL: `https://seu-dominio.com/api/stripe/webhook`
4. Selecione o evento: `checkout.session.completed`
5. Copie o **Signing secret** e adicione em `STRIPE_WEBHOOK_SECRET_EBOOK`

### 3. Testar com Stripe CLI (Desenvolvimento)

Para testar webhooks localmente:

```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

Isso fornecerá um webhook secret temporário para usar em `.env.local`.

## 🔒 Segurança

- Nunca exponha `STRIPE_SECRET_KEY` ou `STRIPE_WEBHOOK_SECRET_EBOOK` no cliente
- Todas as chamadas Stripe acontecem apenas no servidor (API routes)
- Webhook valida assinatura antes de processar eventos
- Armazenamento de pedidos é idempotente (evita duplicatas)

## 📝 Funcionalidades

- ✅ Landing page responsiva com todas as seções
- ✅ Integração completa com Stripe Checkout (hosted)
- ✅ Webhook para processar pagamentos confirmados
- ✅ Página de acesso gated (apenas após pagamento confirmado)
- ✅ Armazenamento de pedidos (file-based)
- ✅ Página de cancelamento
- ✅ SEO otimizado com metadata
- ✅ Acessibilidade (ARIA, focus states, semantic HTML)

## 🎨 Design

O design segue as cores e tipografia do Figma:
- **Cores**: `#5D4E37` (primary), `#C9A96E` (accent), `#FBF8F3` (background)
- **Fontes**: Playfair Display (serif) e Inter (sans-serif)
- **Layout**: Responsivo para mobile, tablet e desktop

## 📦 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente no painel da Vercel
3. Deploy automático a cada push

### Outros Provedores

Certifique-se de:
- Configurar todas as variáveis de ambiente
- Atualizar `STRIPE_SUCCESS_URL` e `STRIPE_CANCEL_URL` com o domínio de produção
- Configurar o webhook do Stripe com a URL de produção

## 📄 Licença

Este projeto é privado e proprietário.
