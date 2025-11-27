import Link from "next/link";
import Button from "@/components/Button";

export default function CanceladoPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background-secondary px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-lg p-8 shadow-lg border border-border">
          <div className="mb-6">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">✕</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
              Compra Cancelada
            </h1>
            <p className="text-primary-light leading-relaxed">
              Sua compra não foi concluída. Não se preocupe, você pode tentar novamente
              quando estiver pronto.
            </p>
          </div>

          <div className="space-y-4">
            <Link href="/" className="block">
              <Button variant="primary" className="w-full">
                Voltar à página inicial
              </Button>
            </Link>
            <p className="text-sm text-primary-lighter">
              Se você teve algum problema durante o pagamento, entre em contato conosco.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}




