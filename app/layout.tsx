import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crobor | Peças Técnicas de Borracha",
  description: "Soluções em peças técnicas de borracha desde 1993.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {/* Cabeçalho que aparece em todas as páginas */}
        <Header />

        {/* Conteúdo da página atual */}
        {children}

        {/* Rodapé que aparece em todas as páginas */}
        <Footer />
      </body>
    </html>
  );
}
