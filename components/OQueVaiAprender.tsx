import { Eye, Layout } from "lucide-react";

export default function OQueVaiAprender() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#F5F1ED] to-[#FAF8F5]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground">
            O que você vai aprender em 2 passos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Um método claro para sair da admiração e ir para a prática – do
            olhar ao planejamento completo da decoração.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Passo 1 */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#E8DDD0]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-[#F5F1ED] flex items-center justify-center flex-shrink-0">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <div>
                <p className="text-sm text-primary uppercase tracking-wider mb-1">
                  Passo 1
                </p>
                <h3 className="text-xl text-foreground">Olhar de Decoradora</h3>
              </div>
            </div>

            <p className="mb-4 text-foreground">
              Você aprende a enxergar como uma decoradora profissional:
            </p>

            <ul className="space-y-3">
              {[
                "Por que a decoração é tão importante em casamentos e festas infantis",
                "Como entender a história e o desejo por trás de cada evento",
                "Estilos decorativos explicados de forma simples (romântico, rústico, clássico, moderno, temático)",
                "Como combinar cores que funcionam sem precisar ser \"artista\"",
                "Exercícios práticos para treinar seu olhar no dia a dia",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Passo 2 */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#E8DDD0]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-[#F5F1ED] flex items-center justify-center flex-shrink-0">
                <Layout className="w-8 h-8 text-[#8B7355]" />
              </div>
              <div>
                <p className="text-sm text-[#8B7355] uppercase tracking-wider mb-1">
                  Passo 2
                </p>
                <h3 className="text-xl text-foreground">
                  Planejando e Executando a Decoração
                </h3>
              </div>
            </div>

            <p className="mb-4 text-foreground">
              Você aprende a tirar a ideia da cabeça e levar para o espaço real:
            </p>

            <ul className="space-y-3">
              {[
                "Como ler o espaço e fazer uma planta baixa simples, sem software",
                "Como escolher e posicionar mobiliário, objetos e acessórios com proporção",
                "Como trabalhar com flores, arranjos e elementos naturais mesmo sem ser florista",
                "Iluminação que valoriza a decoração (e não \"mata\" o ambiente nas fotos)",
                "Checklists completos, orçamento e cronograma para não se perder",
                "Dois estudos de caso comentados: mini casamento intimista e festa infantil \"Jardim Encantado\"",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#8B7355] mt-1">•</span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
