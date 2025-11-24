"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "Preciso ter experiência em decoração para aproveitar o e-book?",
      answer:
        "Não. O e-book foi pensado justamente para quem está começando do zero ou só \"ajuda nas festas da família\". Eu explico tudo em linguagem simples, com exemplos, exercícios e checklists. Se você gosta de decoração e está disposta a praticar, você aproveita o conteúdo. O objetivo é justamente te dar o método e a base que faltam – não pressupõe conhecimento técnico prévio.",
    },
    {
      question: "Em quanto tempo vou conseguir montar minha primeira decoração?",
      answer:
        "Se você seguir o passo a passo e fizer os exercícios, em até 10 dias já consegue entender a base e montar uma primeira decoração simples, porém bonita e bem planejada. O e-book não é só teoria: ele te guia com checklists, cronograma e estudos de caso reais. Claro que depende do seu ritmo, mas a estrutura foi pensada para resultados rápidos e práticos, sem enrolação.",
    },
    {
      question: "Funciona para qualquer tipo de festa?",
      answer:
        "Sim. Os exemplos principais são casamentos intimistas e festas infantis, mas o método de olhar, planejar e executar serve para qualquer tipo de festa social – aniversários adultos, batizados, chá de bebê, eventos corporativos, etc. Os fundamentos de estilo, cores, espaço, mobiliário e iluminação são universais. Você adapta os checklists para o tipo de evento que quiser decorar.",
    },
    {
      question: "Preciso investir muito em materiais?",
      answer:
        "Não. O foco é te ensinar a pensar o projeto antes de sair comprando. Assim você evita desperdício e consegue resultados bonitos mesmo com orçamentos menores. Ensino como reaproveitar, alugar, priorizar e fazer escolhas inteligentes. Decoração bonita não depende de gasto alto – depende de planejamento, proporção e intenção. E é isso que o e-book entrega.",
    },
    {
      question: "Como funciona a entrega do e-book?",
      answer:
        "Após a compra, você recebe um link para download imediato em PDF. É só salvar no seu celular, tablet ou computador e começar a ler na hora. Não tem prazo de validade, não tem limite de acessos. O e-book é seu para sempre. Você pode imprimir, salvar na nuvem, consultar quantas vezes quiser. Acesso 100% vitalício.",
    },
    {
      question: "Este e-book me ajuda a começar uma carreira em decoração?",
      answer:
        "Ele é o primeiro passo. Você vai ganhar base, método e confiança para começar a decorar com segurança. A partir daí, pode seguir para cursos mais avançados, mentoria ou ir construindo seu portfólio com festas reais. Muitas pessoas que começam estudando sozinhas acabam virando decoradoras profissionais – e este e-book é justamente o empurrão que faltava para você sair da paralisia e botar a mão na massa.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#F5F1ED] to-[#FAF8F5]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground">
            Dúvidas frequentes
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className="bg-white rounded-xl px-6 border-none shadow-sm"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
