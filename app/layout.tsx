import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: "XXIII Semana Brasileira de Informática Biomédica",
  description: "Evento acadêmico, empresarial e cultural sobre Informática Biomédica.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
