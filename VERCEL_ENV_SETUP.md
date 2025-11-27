# Configuração de Variáveis de Ambiente na Vercel

## ⚠️ Erro em Produção: "Erro ao processar pagamento"

Este erro geralmente significa que as variáveis de ambiente não estão configuradas na Vercel.

## 🔧 Como Configurar

### 1. Acesse o Dashboard da Vercel
1. Vá para: https://vercel.com/dashboard
2. Selecione o projeto: `barbara-ebook-landing`
3. Clique em **Settings** → **Environment Variables**

### 2. Adicione as Variáveis

Adicione cada uma das seguintes variáveis:

#### Variáveis Obrigatórias:

```
STRIPE_SECRET_KEY
```
**Valor**: `sk_live_...` (sua chave secreta do Stripe Dashboard)
**Onde encontrar**: https://dashboard.stripe.com/apikeys
**Ambientes**: Production, Preview, Development

```
STRIPE_PUBLIC_KEY
```
**Valor**: `pk_live_...` (sua chave pública do Stripe Dashboard)
**Onde encontrar**: https://dashboard.stripe.com/apikeys
**Ambientes**: Production, Preview, Development

```
STRIPE_PRICE_ID_EBOOK
```
**Valor**: `price_...` (ID do preço do seu produto no Stripe)
**Onde encontrar**: Stripe Dashboard → Products → Seu produto → Price ID
**Ambientes**: Production, Preview, Development

```
STRIPE_SUCCESS_URL
```
**Valor**: `https://seu-dominio.vercel.app/ebook/acesso`
**Ambientes**: Production, Preview, Development
⚠️ **Substitua `seu-dominio.vercel.app` pelo seu domínio real da Vercel**

```
STRIPE_CANCEL_URL
```
**Valor**: `https://seu-dominio.vercel.app/checkout/cancelado`
**Ambientes**: Production, Preview, Development
⚠️ **Substitua `seu-dominio.vercel.app` pelo seu domínio real da Vercel**

```
STRIPE_WEBHOOK_SECRET_EBOOK
```
**Valor**: (veja instruções abaixo para obter)
**Ambientes**: Production, Preview, Development

### 3. Configurar Webhook no Stripe Dashboard

1. Acesse: https://dashboard.stripe.com/webhooks
2. Clique em **Add endpoint**
3. **Endpoint URL**: `https://seu-dominio.vercel.app/api/stripe/webhook`
   ⚠️ **Substitua pelo seu domínio real**
4. **Events to send**: Selecione `checkout.session.completed`
5. Clique em **Add endpoint**
6. **Copie o Signing secret** (começa com `whsec_...`)
7. Adicione esse secret em `STRIPE_WEBHOOK_SECRET_EBOOK` na Vercel

### 4. Redeploy Após Configurar

Após adicionar todas as variáveis:
1. Vá para **Deployments** na Vercel
2. Clique nos três pontos (...) do último deployment
3. Selecione **Redeploy**
4. Ou faça um novo commit para trigger automático

## 🧪 Testar a Configuração

### Opção 1: Endpoint de Teste
Acesse: `https://seu-dominio.vercel.app/api/checkout/test`

Deve retornar:
```json
{
  "hasSecretKey": true,
  "hasPublicKey": true,
  "hasPriceId": true,
  "hasSuccessUrl": true,
  "hasCancelUrl": true,
  "hasWebhookSecret": true,
  ...
}
```

Se algum campo retornar `false`, a variável correspondente não está configurada.

### Opção 2: Testar Checkout
1. Acesse sua landing page em produção
2. Clique no botão "Começar agora"
3. Deve redirecionar para o Stripe Checkout
4. Se der erro, verifique o console do navegador (F12)

## 🔍 Troubleshooting

### Erro: "Stripe não configurado"
- ✅ Verifique se `STRIPE_SECRET_KEY` está configurada
- ✅ Certifique-se de que fez redeploy após adicionar as variáveis

### Erro: "Configuração de pagamento incompleta"
- ✅ Verifique se todas as variáveis obrigatórias estão configuradas:
  - `STRIPE_PRICE_ID_EBOOK`
  - `STRIPE_SUCCESS_URL`
  - `STRIPE_CANCEL_URL`

### Erro: "Invalid signature" (no webhook)
- ✅ Verifique se `STRIPE_WEBHOOK_SECRET_EBOOK` está correto
- ✅ Certifique-se de que o webhook no Stripe Dashboard está apontando para a URL correta

### URLs Incorretas
- ✅ Certifique-se de usar `https://` (não `http://`)
- ✅ Use o domínio correto da Vercel (ex: `seu-projeto.vercel.app`)
- ✅ Não use `localhost` em produção

## 📋 Checklist Rápido

- [ ] `STRIPE_SECRET_KEY` configurada
- [ ] `STRIPE_PUBLIC_KEY` configurada
- [ ] `STRIPE_PRICE_ID_EBOOK` configurada
- [ ] `STRIPE_SUCCESS_URL` configurada (com https:// e domínio correto)
- [ ] `STRIPE_CANCEL_URL` configurada (com https:// e domínio correto)
- [ ] `STRIPE_WEBHOOK_SECRET_EBOOK` configurada
- [ ] Webhook criado no Stripe Dashboard
- [ ] Redeploy feito após configurar variáveis
- [ ] Testado endpoint `/api/checkout/test`

## 🔗 Links Úteis

- **Vercel Dashboard**: https://vercel.com/dashboard
- **Stripe Dashboard**: https://dashboard.stripe.com
- **Stripe Webhooks**: https://dashboard.stripe.com/webhooks
- **Vercel Environment Variables**: Settings → Environment Variables no seu projeto

---

**Última atualização**: 24/11/2025

