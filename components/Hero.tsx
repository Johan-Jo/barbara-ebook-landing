"use client";

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  CheckCircle,
  ArrowRight,
  Download,
  Sparkles,
  Shield,
} from "lucide-react";
import { useCheckout } from "@/hooks/useCheckout";

export default function Hero() {
  const { handleCheckout, isLoading, error } = useCheckout();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F5F1ED] via-white to-[#FAF8F5] pt-20 pb-24 md:pt-32 md:pb-40">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <Badge className="bg-[#F5F1ED] text-[#8B7355] border-[#E8DDD0] hover:bg-[#E8DDD0]">
              Para quem quer decorar festas bonitas (e talvez até viver disso)
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground">
              Decore festas como profissional
            </h1>

            <p className="text-lg text-muted-foreground">
              Aprenda o método em 2 passos da Bárbara Marques para criar festas
              bonitas, sofisticadas e sem estresse – mesmo começando do zero.
            </p>

            <div className="space-y-3">
              {[
                "Descubra quais estilos, cores e proporções funcionam de verdade",
                "Aprenda a ler qualquer espaço e planejar a decoração antes de gastar",
                "Use checklists prontos para montar sua primeira festa completa em até 10 dias",
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-[#B8986A] text-white text-lg px-8 py-6"
                onClick={handleCheckout}
                disabled={isLoading}
              >
                Começar agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-[#E8DDD0] hover:bg-[#F5F1ED]"
                onClick={() => {
                  document
                    .getElementById("conteudo")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Ver conteúdo
              </Button>
            </div>

            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {error}
              </div>
            )}

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Download className="w-4 h-4 text-primary" />
                <span>PDF com acesso imediato</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-primary" />
                <span>Pagamento 100% seguro</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="w-4 h-4 text-primary" />
                <span>Linguagem direta, zero enrolação</span>
              </div>
            </div>
          </div>

          {/* Right Column - E-book Mockup */}
          <div className="relative">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <img
                src="/Public/Images/ebook-mockup.png"
                alt="Aprenda a Decorar em Dois Passos - E-book por Bárbara Marques"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#E8DDD0]/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#C9A96E]/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
