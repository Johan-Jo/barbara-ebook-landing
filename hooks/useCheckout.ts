"use client";

import { useState } from "react";

export function useCheckout() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMsg = data.error || data.details || "Erro ao processar pagamento. Tente novamente.";
        console.error("Checkout API error:", data);
        throw new Error(errorMsg);
      }

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("URL de checkout não encontrada.");
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Erro desconhecido";
      console.error("Checkout error:", err);
      setError(errorMessage);
      setIsLoading(false);
    }
  };

  return {
    handleCheckout,
    isLoading,
    error,
  };
}



