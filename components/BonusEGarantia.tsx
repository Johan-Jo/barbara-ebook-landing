import { Gift, Shield, ListChecks, CheckCircle } from "lucide-react";

export default function BonusEGarantia() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-primary via-[#B8986A] to-[#8B7355]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Bônus e garantia para você começar com segurança
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Além do conteúdo principal, você ainda leva:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Bônus */}
          <div className="bg-white/95 backdrop-blur rounded-3xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#F5F1ED] flex items-center justify-center">
                <Gift className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl text-foreground">Bônus Inclusos</h3>
            </div>

            <div className="space-y-4">
              {[
                "Checklist geral da decoração para usar em qualquer tipo de festa",
                "Checklists compactos prontos para mini casamentos e festas infantis",
                "Estrutura de cronograma por etapas para você nunca mais deixar tudo para a última hora",
              ].map((bonus, i) => (
                <div key={i} className="flex items-start gap-3">
                  <ListChecks className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{bonus}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Garantia */}
          <div className="bg-white/95 backdrop-blur rounded-3xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#F5F1ED] flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#8B7355]" />
              </div>
              <h3 className="text-2xl text-foreground">Garantia de 7 dias</h3>
            </div>

            <p className="text-foreground mb-6">
              Você pode acessar o e-book com calma, ler, começar a aplicar e
              sentir se o conteúdo faz sentido para você. Se em até 7 dias achar
              que não te ajuda em nada, é só enviar um e-mail que devolvemos 100%
              do seu investimento. Simples assim.
            </p>

            <div className="space-y-3 pt-4 border-t border-border">
              {[
                "Sem perguntas, sem burocracia",
                "Devolução em até 48 horas úteis",
                "Risco zero para você",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#8B7355] flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

