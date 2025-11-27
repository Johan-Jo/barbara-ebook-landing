import { CheckCircle } from "lucide-react";

export default function ResultadosNaPratica() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#F5F1ED] to-[#FAF8F5]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-[#E8DDD0]">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground">
              Em até 10 dias, você consegue:
            </h2>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              "Parar de travar na hora de escolher cores, estilos e referências",
              "Enxergar o espaço com clareza e planejar antes de gastar 1 real",
              "Montar uma decoração completa usando checklists, cronograma e exemplos reais",
              "Dar o primeiro passo concreto para, se quiser, transformar isso em carreira de decoração",
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 items-start p-6 bg-gradient-to-r from-[#F5F1ED] to-white rounded-2xl border border-[#E8DDD0]"
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}




