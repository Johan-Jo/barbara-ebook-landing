import Image from "next/image";
import { Badge } from "./ui/badge";

export default function SobreAutora() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-gradient-to-br from-[#F5F1ED] to-[#FAF8F5] rounded-3xl shadow-xl p-8 md:p-12 border border-[#E8DDD0]">
          <div className="grid md:grid-cols-[300px_1fr] gap-8 items-start">
            <div>
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <Image
                  src="/Images/perfilBarbara.png"
                  alt="Bárbara Marques - Decoradora de Festas"
                  width={300}
                  height={400}
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <Badge className="bg-[#F5F1ED] text-[#8B7355] border-[#E8DDD0] mb-4">
                  Sobre a autora
                </Badge>
                <h2 className="text-3xl md:text-4xl mb-6 text-foreground">
                  Bárbara Marques
                </h2>

                <div className="space-y-4 text-foreground">
                  <p>
                    Meu nome é Bárbara Marques, e minha história com decoração
                    de festas começou pela necessidade: eu não encontrava
                    profissionais que entendessem exatamente o que eu queria
                    para os eventos da minha própria família.
                  </p>

                  <p>
                    Comecei estudando sozinha, decorando pequenos eventos,
                    casamentos intimistas e festas infantis. Com o tempo, fui
                    desenvolvendo um método simples e repetível para pensar a
                    decoração do jeito certo: primeiro o olhar, depois o
                    planejamento. Sem firula, sem fórmula mágica, mas com muito
                    propósito e intenção.
                  </p>

                  <p>
                    Hoje, depois de decorar dezenas de eventos e ajudar outras
                    pessoas a darem os primeiros passos na decoração, percebi
                    que faltava um material objetivo, com linguagem clara e foco
                    em quem está começando do zero. Este e-book é exatamente
                    isso: o guia que eu gostaria de ter tido quando comecei.
                  </p>
                </div>

                <div className="pt-6 border-t border-[#E8DDD0] mt-6">
                  <p className="text-foreground">Bárbara Marques</p>
                  <p className="text-sm text-muted-foreground">
                    Decoradora de Festas e Educadora
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
