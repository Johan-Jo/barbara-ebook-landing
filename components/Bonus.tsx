export default function Bonus() {
  const bonus = [
    {
      titulo: "Templates Prontos",
      descricao: "Modelos editáveis para planejamento e orçamento",
    },
    {
      titulo: "Checklist Completo",
      descricao: "Lista de verificação para não esquecer nenhum detalhe",
    },
    {
      titulo: "Exercícios Práticos",
      descricao: "Atividades para fixar o aprendizado",
    },
    {
      titulo: "Cronograma de Estudos",
      descricao: "Plano de ação para aplicar o método em 30 dias",
    },
  ];

  return (
    <section
      id="bonus"
      className="py-16 lg:py-24 bg-background-tertiary px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Bônus Exclusivos
          </h2>
          <div className="w-24 h-0.5 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-primary-light max-w-2xl mx-auto">
            Materiais complementares para acelerar seus resultados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {bonus.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-accent font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">
                    {item.titulo}
                  </h3>
                  <p className="text-primary-light">{item.descricao}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-accent/10 rounded-lg p-8 text-center border-2 border-accent">
          <p className="text-lg font-semibold text-primary mb-2">
            Todos os bônus incluídos no e-book
          </p>
          <p className="text-primary-light">
            Sem custos adicionais. Tudo que você precisa para começar está aqui.
          </p>
        </div>
      </div>
    </section>
  );
}




