import {
  Book,
  Eye,
  Layout,
  CheckSquare,
  DollarSign,
  FileText,
  PenTool,
} from "lucide-react";

export default function Conteudo() {
  const items = [
    { icon: Book, text: "Introdução + jornada da Bárbara na decoração" },
    {
      icon: Eye,
      text: "PASSO 1 – Olhar de Decoradora: importância da decoração, história e desejo, estilos e cores",
    },
    {
      icon: Layout,
      text: "PASSO 2 – Planejando e Executando: leitura de espaço, planta baixa simples, mobiliário, flores e iluminação",
    },
    {
      icon: CheckSquare,
      text: "Checklist geral da decoração + modelos compactos (mini casamento e festa infantil)",
    },
    {
      icon: DollarSign,
      text: "Orientação de orçamento e cronograma por etapas",
    },
    {
      icon: FileText,
      text: '2 estudos de caso comentados: mini casamento intimista e festa infantil "Jardim Encantado"',
    },
    {
      icon: PenTool,
      text: "Seção de exercícios e workbook para você praticar e montar seus primeiros projetos",
    },
  ];

  return (
    <section id="conteudo" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground">
            O que tem dentro do e-book
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="flex gap-4 items-start p-6 bg-white rounded-2xl border border-[#E8DDD0] hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F5F1ED] to-[#E8DDD0] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground text-lg pt-1.5">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
