import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Navbar } from "./Components/Navbar";

export const metadata: Metadata = {
  icons: {
    icon: "./favicon.ico",
  },
  title: "Jeremias Amador | Desarrollo de software a medida",
  description:
    "Desarrollador web fullstack especializado en crear soluciones digitales innovadoras. Ofrezco servicios de desarrollo web, aplicaciones móviles, consultoría IT y diseño UX/UI. Transformo ideas en experiencias digitales excepcionales con las últimas tecnologías y mejores prácticas de desarrollo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${GeistSans.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
