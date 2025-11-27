# Stripe Setup Session - Resumo

## ✅ O que foi configurado

### 1. Produto Stripe
- **Nome do Produto**: "Aprenda a Decorar em Dois Passos"
- **Price ID**: `price_1SX81sL6WoUwGkRxLSHlld9G`
- **Preço**: R$ 79,00 BRL
- **Tipo**: One-off (pagamento único)

### 2. Chaves da API Stripe
- **Secret Key**: `sk_live_...` (configurado em `.env.local` - não commitado)
- **Public Key**: `pk_live_...` (configurado em `.env.local` - não commitado)
- **Modo**: Live (produção) ⚠️
- **Onde configurar**: Adicione as chaves em `.env.local` (arquivo local, não commitado)

### 3. Webhook Secret
- **Webhook Secret**: `whsec_...` (configurado em `.env.local` - não commitado)
- **Origem**: Stripe CLI (desenvolvimento local) ou Dashboard (produção)
- **Onde configurar**: Adicione o secret em `.env.local` (arquivo local, não commitado)

### 4. URLs Configuradas
- **Success URL**: `http://localhost:3000/ebook/acesso`
- **Cancel URL**: `http://localhost:3000/checkout/cancelado`

### 5. Stripe CLI
- **Instalado via**: `npm install -g stripe-cli`
- **Versão**: 1.31.0
- **Comando para webhook local**:
  ```bash
  stripe listen --forward-to localhost:3000/api/stripe/webhook
  ```

## 🔧 Arquivos Modificados

### 1. `env.local`
- Todas as variáveis de ambiente configuradas
- Price ID, chaves da API, webhook secret, URLs

### 2. `components/ui/badge.tsx`
- Adicionado `"use client"` para corrigir erro de runtime

### 3. `lib/stripe.ts`
- Removida versão específica da API (usando padrão do Stripe)
- Configuração simplificada

### 4. `app/api/checkout/route.ts`
- Melhorado tratamento de erros
- Logs detalhados para debug
- Retorna detalhes do erro em desenvolvimento

### 5. `hooks/useCheckout.ts`
- Melhorado tratamento de erros no frontend
- Mostra erros detalhados no console do navegador

### 6. `app/api/checkout/test/route.ts` (NOVO)
- Endpoint de teste para verificar configuração
- Acesse: `http://localhost:3000/api/checkout/test`

## ⚠️ Problema Atual

**Status**: Checkout falhando com erro genérico
- Erro: "Erro ao processar pagamento. Tente novamente."
- Não conseguimos ver os logs detalhados ainda

## 🔍 Próximos Passos para Debug

### 1. Verificar Configuração
Acesse: `http://localhost:3000/api/checkout/test`
- Deve mostrar todas as variáveis de ambiente carregadas

### 2. Verificar Logs
- **Terminal do servidor**: Onde `npm run dev` está rodando
- **Console do navegador**: F12 → Console
- Procure por: "========== CHECKOUT ERROR =========="

### 3. Possíveis Causas do Erro
1. Price ID inválido ou inativo no Stripe
2. Problema com as chaves da API (live mode)
3. Versão da API do Stripe incompatível
4. Variáveis de ambiente não carregadas corretamente

### 4. Testar Checkout
1. Abra o console do navegador (F12)
2. Clique no botão "Começar agora"
3. Veja os erros no console
4. Verifique o terminal do servidor

## 📝 Comandos Úteis

### Iniciar servidor de desenvolvimento
```bash
npm run dev
```

### Iniciar webhook listener (em terminal separado)
```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

### Verificar se servidor está rodando
```powershell
netstat -ano | findstr :3000
```

### Matar processos Node
```powershell
Get-Process -Name node | Stop-Process -Force
```

## 🎯 Onde Encontrar Logs

1. **Terminal do servidor**: Onde você rodou `npm run dev`
   - Erros do backend aparecem aqui
   - Procure por "CHECKOUT ERROR"

2. **Console do navegador**: F12 → Console
   - Erros do frontend aparecem aqui
   - Procure por "Checkout error" ou "Checkout API error"

3. **Network tab**: F12 → Network
   - Veja a requisição para `/api/checkout`
   - Clique na requisição e veja a resposta

## ⚠️ Avisos Importantes

1. **Modo Live**: Você está usando chaves de **produção** (live mode)
   - Testes vão cobrar dinheiro real!
   - Considere usar test mode para desenvolvimento

2. **Webhook Secret**: O secret atual é do Stripe CLI (local)
   - Para produção, você precisará criar um webhook no Dashboard do Stripe
   - URL de produção: `https://seu-dominio.com/api/stripe/webhook`

3. **Porta 3000**: Certifique-se de que nada mais está usando a porta 3000
   - O servidor deve rodar em `http://localhost:3000`

## 📚 Documentação de Referência

- **Stripe Setup Guide**: `STRIPE_SETUP.md`
- **Stripe Dashboard**: https://dashboard.stripe.com
- **Stripe CLI Docs**: https://stripe.com/docs/stripe-cli

## 🔄 Para Continuar Depois

1. Inicie o servidor: `npm run dev`
2. Inicie o webhook listener: `stripe listen --forward-to localhost:3000/api/stripe/webhook`
3. Teste a configuração: `http://localhost:3000/api/checkout/test`
4. Tente o checkout e verifique os logs
5. Se necessário, verifique o Price ID no Stripe Dashboard

---

**Última atualização**: 24/11/2025
**Status**: Configuração completa, debug em andamento


