# Configuração PIX no Stripe

## ✅ O que foi feito

O código do checkout foi atualizado para incluir PIX como método de pagamento:

```typescript
payment_method_types: ["card", "pix"],
payment_method_options: {
  pix: {
    expires_after_days: 1, // PIX expira após 1 dia se não for pago
  },
},
```

## 🔧 Passos Adicionais Necessários

### 1. Ativar PIX no Stripe Dashboard

1. Acesse o [Stripe Dashboard](https://dashboard.stripe.com)
2. Vá em **Configurações** → **Métodos de Pagamento**
3. Procure por **PIX** na lista
4. Ative o PIX se ainda não estiver ativado

### 2. Verificar Configuração da Conta

- **País**: Sua conta Stripe deve estar configurada para o Brasil
- **Moeda**: O produto deve estar em BRL (já está configurado: R$ 79,00)
- **Verificação**: Certifique-se de que sua conta está verificada e ativa

### 3. Testar PIX

#### Em Modo de Teste (Recomendado primeiro):
1. No Stripe Dashboard, alterne para **Test mode** (canto superior direito)
2. Crie um produto de teste com Price ID de teste
3. Teste o checkout - você verá a opção PIX disponível
4. Use os dados de teste do Stripe para simular um pagamento PIX

#### Em Modo de Produção:
1. Certifique-se de que PIX está ativado no Dashboard
2. Teste com um valor pequeno primeiro
3. O cliente verá a opção PIX no checkout
4. Após selecionar PIX, será gerado um QR Code e código PIX
5. O pagamento é confirmado automaticamente quando o cliente paga

## 📋 Como Funciona

1. **Cliente seleciona PIX** no checkout
2. **Stripe gera QR Code e código PIX** para pagamento
3. **Cliente paga via app do banco** (escaneando QR Code ou copiando código)
4. **Stripe detecta o pagamento** automaticamente (geralmente em segundos)
5. **Webhook é disparado** com evento `checkout.session.completed`
6. **Cliente é redirecionado** para a página de sucesso

## ⚙️ Configurações PIX

### Expiração do PIX
- **Atual**: 1 dia (24 horas)
- **Pode ser ajustado**: Altere `expires_after_days` no código se necessário
- **Recomendado**: 1-3 dias para dar tempo ao cliente pagar

### Valores Mínimos/Máximos
- PIX geralmente aceita qualquer valor
- Verifique no Stripe Dashboard se há limites específicos para sua conta

## 🧪 Testando PIX

### Em Test Mode:
1. Use o Stripe Dashboard em modo de teste
2. Crie um checkout de teste
3. Selecione PIX como método de pagamento
4. Use os dados de teste fornecidos pelo Stripe

### Em Live Mode:
⚠️ **Cuidado**: Pagamentos reais serão processados!

1. Teste com um valor muito pequeno primeiro (ex: R$ 0,10)
2. Complete o pagamento PIX real
3. Verifique se o webhook foi recebido
4. Confirme que o pedido foi salvo corretamente

## 🔍 Verificar se PIX está Funcionando

1. **No Checkout**: O cliente deve ver a opção "PIX" junto com "Cartão"
2. **Após selecionar PIX**: Deve aparecer QR Code e código para copiar
3. **No Dashboard**: Vá em **Pagamentos** → você verá transações PIX listadas

## ❓ Troubleshooting

### PIX não aparece no checkout
- ✅ Verifique se PIX está ativado no Dashboard
- ✅ Confirme que a conta está configurada para Brasil
- ✅ Verifique se o produto está em BRL
- ✅ Certifique-se de que `payment_method_types` inclui "pix" no código

### Erro ao criar sessão com PIX
- Verifique os logs do servidor
- Confirme que a conta Stripe suporta PIX
- Entre em contato com suporte do Stripe se necessário

### Pagamento PIX não é detectado
- PIX geralmente é confirmado em segundos
- Se demorar, verifique o webhook
- Confirme que o webhook está configurado corretamente

## 📚 Recursos

- [Stripe PIX Documentation](https://docs.stripe.com/payments/pix)
- [Stripe Checkout Payment Methods](https://docs.stripe.com/payments/checkout/payment-methods)
- [Stripe Dashboard - Payment Methods](https://dashboard.stripe.com/settings/payment_methods)

---

**Última atualização**: 24/11/2025
**Status**: PIX habilitado no código, requer ativação no Dashboard

