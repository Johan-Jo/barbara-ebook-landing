import { ParaQuemCard } from "./para-quem-card";
import { Sparkles, Heart, TrendingUp, Home } from "lucide-react";

export default function ParaQuem() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground">
            Para quem é este e-book
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Para quem olha fotos de festas lindas e pensa: "Eu nunca vou
            conseguir fazer isso" – mas sente, lá no fundo, que poderia aprender
            se tivesse um passo a passo claro.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ParaQuemCard
            icon={Sparkles}
            title="Quem quer começar na decoração"
            description="Você sonha em decorar casamentos e festas infantis, mas não sabe por onde começar, nem quais são os primeiros passos para fazer algo no padrão profissional."
          />

          <ParaQuemCard
            icon={Heart}
            title="Quem já ajuda em festas, mas sente que falta método"
            description="Você já monta mesas, ajuda amigos e família, mas sente que faz tudo 'no olho', sem estrutura, e perde muito tempo com dúvidas e insegurança."
          />

          <ParaQuemCard
            icon={TrendingUp}
            title="Quem quer transformar gosto por decoração em carreira"
            description="Você ama decoração, já maratona referências no Instagram e Pinterest, e quer transformar isso em uma possível fonte de renda, mas ainda não tem base técnica."
          />

          <ParaQuemCard
            icon={Home}
            title="Mães e anfitriãs exigentes"
            description="Você quer decorar as próprias festas (seja do filho, casamento intimista ou eventos da família) com mais segurança, sem depender 100% de terceiros."
          />
        </div>
      </div>
    </section>
  );
}
