export default function Conteudo() {
  return (
    <section id="conteudo" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground">
            O que tem dentro do e-book
          </h2>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-[#E8DDD0]">
          <p className="text-lg text-foreground mb-8">
            Dentro do e-book você encontra:
          </p>

          <div className="space-y-4">
            {[
              "Introdução + jornada da Bárbara na decoração",
              "PASSO 1 – Olhar de Decoradora: importância da decoração, história e desejo, estilos e cores",
              "PASSO 2 – Planejando e Executando: leitura de espaço, planta baixa simples, mobiliário, flores e iluminação",
              "Checklist geral da decoração + modelos compactos (mini casamento e festa infantil)",
              "Orientação de orçamento e cronograma por etapas",
              "2 estudos de caso comentados: mini casamento intimista e festa infantil \"Jardim Encantado\"",
              "Seção de exercícios e workbook para você praticar e montar seus primeiros projetos",
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="text-primary text-xl mt-0.5">•</span>
                <p className="text-foreground text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
