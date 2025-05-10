import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coodisy | Desarrollo de software a medida",
  description:
    "Desarrollo de software a medida y soluciones tecnológicas innovadoras. Creamos aplicaciones web, móviles y sistemas robustos para impulsar tu negocio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${GeistSans.className} antialiased`}>{children}</body>
    </html>
  );
}
