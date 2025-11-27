import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aprenda a Decorar em Dois Passos - Bárbara Marques",
  description:
    "Os primeiros passos para criar festas bonitas, sofisticadas e sem estresse",
  openGraph: {
    title: "Aprenda a Decorar em Dois Passos - Bárbara Marques",
    description:
      "Os primeiros passos para criar festas bonitas, sofisticadas e sem estresse",
    type: "website",
    images: [
      {
        url: "/Images/ebook-mockup.png",
        width: 1200,
        height: 630,
        alt: "Aprenda a Decorar em Dois Passos - E-book por Bárbara Marques",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aprenda a Decorar em Dois Passos - Bárbara Marques",
    description:
      "Os primeiros passos para criar festas bonitas, sofisticadas e sem estresse",
    images: ["/Images/ebook-mockup.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}




