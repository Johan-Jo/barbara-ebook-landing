import { Suspense } from "react";
import Link from "next/link";
import Button from "@/components/Button";
import { getStripe } from "@/lib/stripe";
import type Stripe from "stripe";

interface PageProps {
  searchParams: Promise<{ session_id?: string }>;
}

async function AccessContent({ sessionId }: { sessionId: string }) {
  let session: Stripe.Checkout.Session | null = null;
  let error: string | null = null;

  // Check if Stripe is configured
  if (!process.env.STRIPE_SECRET_KEY) {
    return (
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-lg p-8 shadow-lg border border-border">
          <div className="mb-6">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">⚠</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
              Stripe não configurado
            </h1>
            <p className="text-primary-light leading-relaxed mb-6">
              O sistema de pagamento ainda não está configurado. Entre em contato com o suporte.
            </p>
            <Link href="/">
              <Button variant="primary" className="w-full">
                Voltar à página inicial
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  try {
    const stripe = getStripe();
    session = await stripe.checkout.sessions.retrieve(sessionId);
  } catch (err) {
    console.error("Error retrieving session:", err);
    error = "Erro ao verificar sessão de pagamento";
  }

  if (error || !session) {
    return (
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-lg p-8 shadow-lg border border-border">
          <div className="mb-6">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">⚠</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
              Sessão Inválida
            </h1>
            <p className="text-primary-light leading-relaxed mb-6">
              {error ||
                "Não foi possível encontrar sua sessão de pagamento. Verifique o link e tente novamente."}
            </p>
            <Link href="/">
              <Button variant="primary" className="w-full">
                Voltar à página inicial
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (session.payment_status !== "paid") {
    return (
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-lg p-8 shadow-lg border border-border">
          <div className="mb-6">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">⏳</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
              Pagamento em Processamento
            </h1>
            <p className="text-primary-light leading-relaxed mb-6">
              Seu pagamento ainda não foi confirmado. Isso pode levar alguns minutos.
              Você receberá um e-mail quando o pagamento for confirmado.
            </p>
            <div className="space-y-4">
              <Link href="/">
                <Button variant="secondary" className="w-full">
                  Voltar à página inicial
                </Button>
              </Link>
              <p className="text-sm text-primary-lighter">
                Se o problema persistir, entre em contato conosco.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Payment is confirmed
  return (
    <div className="max-w-2xl w-full text-center">
      <div className="bg-white rounded-lg p-8 shadow-lg border border-border">
        <div className="mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">✓</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
            Parabéns! Seu pagamento foi confirmado
          </h1>
          <p className="text-primary-light leading-relaxed mb-8">
            Agora você tem acesso completo ao e-book. Faça o download e comece sua
            jornada na decoração de festas!
          </p>
        </div>

        <div className="space-y-6">
          <a
            href="/ebooks/barbara-aprenda-a-decorar.pdf"
            download
            className="block"
          >
            <Button variant="primary" className="w-full text-lg py-5">
              Baixar E-book (PDF)
            </Button>
          </a>

          <div className="bg-background-secondary rounded-lg p-6 border border-border">
            <p className="text-sm text-primary-light mb-2">
              <strong className="text-primary">Dica:</strong> Salve o arquivo em um local
              de fácil acesso para consultar sempre que precisar.
            </p>
            <p className="text-sm text-primary-lighter">
              Você pode baixar o e-book novamente a qualquer momento acessando este link.
            </p>
          </div>

          <Link href="/" className="block">
            <Button variant="secondary" className="w-full">
              Voltar à página inicial
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default async function AcessoPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const sessionId = params.session_id;

  if (!sessionId) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-background-secondary px-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-lg p-8 shadow-lg border border-border">
            <div className="mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚠</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                Sessão Inválida
              </h1>
              <p className="text-primary-light leading-relaxed mb-6">
                Sessão de pagamento não encontrada. Verifique o link e tente novamente.
              </p>
              <Link href="/">
                <Button variant="primary" className="w-full">
                  Voltar à página inicial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-background-secondary px-4 py-16">
      <Suspense
        fallback={
          <div className="max-w-md w-full text-center">
            <div className="bg-white rounded-lg p-8 shadow-lg border border-border">
              <p className="text-primary-light">Verificando pagamento...</p>
            </div>
          </div>
        }
      >
        <AccessContent sessionId={sessionId} />
      </Suspense>
    </main>
  );
}

