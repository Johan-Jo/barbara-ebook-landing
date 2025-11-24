import { ParaQuemCard } from "@/components/para-quem-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  CheckCircle,
  ArrowRight,
  Download,
  Sparkles,
  Eye,
  Layout,
  Gift,
  ListChecks,
  Shield,
} from "lucide-react";
import Image from "next/image";
import { useCheckout } from "@/hooks/useCheckout";
import Hero from "@/components/Hero";
import ParaQuem from "@/components/ParaQuem";
import OQueVaiAprender from "@/components/OQueVaiAprender";
import Conteudo from "@/components/Conteudo";
import ResultadosNaPratica from "@/components/ResultadosNaPratica";
import SobreAutora from "@/components/SobreAutora";
import BonusEGarantia from "@/components/BonusEGarantia";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ParaQuem />
      <OQueVaiAprender />
      <Conteudo />
      <ResultadosNaPratica />
      <SobreAutora />
      <BonusEGarantia />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
