"use client";

import { Button } from "./ui/button";
import { ArrowRight, Shield, Download, CheckCircle } from "lucide-react";
import { useCheckout } from "@/hooks/useCheckout";
import Image from "next/image";

export default function FinalCTA() {
  const { handleCheckout, isLoading, error } = useCheckout();

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#3D3028] via-[#8B7355] to-[#C9A96E]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-[1fr_280px] gap-12 items-center">
          <div className="space-y-6 text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl">
              Comece hoje a criar festas bonitas e bem planejadas
            </h2>
            <p className="text-lg text-white/90">
              Você não precisa mais só admirar decorações no Instagram. Com um
              método claro, exercícios práticos e checklists prontos, você
              consegue dar seus primeiros passos na decoração de festas de forma
              segura e sem estresse.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-[#F5F1ED] text-lg px-8 py-6"
                onClick={handleCheckout}
                disabled={isLoading}
              >
                Quero meu e-book "Aprenda a Decorar em Dois Passos"
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {error}
              </div>
            )}

            <div className="flex flex-col gap-2 text-sm text-white/80 pt-2">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Pagamento 100% seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                <span>Acesso imediato ao PDF</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Garantia de 7 dias</span>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 shadow-2xl">
              <Image
                src="/Images/ebook-mockup.png"
                alt="Aprenda a Decorar em Dois Passos"
                width={280}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
