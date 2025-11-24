export default function Depoimentos() {
  const depoimentos = [
    {
      nome: "Maria Silva",
      texto: "Este e-book mudou completamente minha forma de trabalhar. O método em dois passos é simples, mas extremamente eficaz. Recomendo para todas que querem começar na decoração!",
      localizacao: "São Paulo, SP",
    },
    {
      nome: "Ana Costa",
      texto: "Finalmente encontrei um material que realmente ensina como fazer, não apenas teoria. As dicas práticas me ajudaram a organizar meus primeiros projetos com muito mais confiança.",
      localizacao: "Rio de Janeiro, RJ",
    },
    {
      nome: "Juliana Santos",
      texto: "Como empreendedora, preciso de métodos que funcionem na prática. Este e-book me deu exatamente isso: uma estrutura clara que posso aplicar imediatamente nos meus projetos.",
      localizacao: "Belo Horizonte, MG",
    },
  ];

  return (
    <section
      id="depoimentos"
      className="py-16 lg:py-24 bg-white px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            O que dizem nossas alunas
          </h2>
          <div className="w-24 h-0.5 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-primary-light max-w-2xl mx-auto">
            Histórias reais de transformação e resultados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {depoimentos.map((depoimento, index) => (
            <div
              key={index}
              className="bg-background-secondary rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-primary-light leading-relaxed mb-6 italic">
                "{depoimento.texto}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-primary">{depoimento.nome}</p>
                <p className="text-sm text-primary-lighter">{depoimento.localizacao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

