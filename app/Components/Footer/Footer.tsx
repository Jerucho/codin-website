import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container flex justify-center flex-wrap">
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h2 className="text-3xl">Codin</h2>
          <p>Transformamos ideas en experiencias digitales excepcionales.</p>
        </div>
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h3 className="text-xl font-medium">Servicios</h3>
          <ul className="list-none space-y-1 text-gray-500 mt-2">
            <li>
              <Link
                href="/servicios/web"
                className="hover:text-blue-600 transition-colors"
              >
                Desarrollo Web
              </Link>
            </li>
            <li>
              <Link
                href="/servicios/mobile"
                className="hover:text-blue-600 transition-colors"
              >
                Aplicaciones Móviles
              </Link>
            </li>
            <li>
              <Link
                href="/servicios/consultoria"
                className="hover:text-blue-600 transition-colors"
              >
                Consultoría IT
              </Link>
            </li>
            <li>
              <Link
                href="/servicios/ux-ui"
                className="hover:text-blue-600 transition-colors"
              >
                Diseño UX/UI
              </Link>
            </li>
            <li>
              <Link
                href="/servicios/marketing"
                className="hover:text-blue-600 transition-colors"
              >
                Marketing Digital
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h3 className="text-xl font-medium">Empresa</h3>
          <ul className="list-none space-y-1 text-gray-500 mt-2">
            <li>
              <Link
                href="/nosotros"
                className="hover:text-blue-600 transition-colors"
              >
                Sobre nosotros
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-blue-600 transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contacto"
                className="hover:text-blue-600 transition-colors"
              >
                Contacto
              </Link>
            </li>
            <li>
              <Link
                href="/privacidad"
                className="hover:text-blue-600 transition-colors"
              >
                Política de privacidad
              </Link>
            </li>
            <li>
              <Link
                href="/terminos"
                className="hover:text-blue-600 transition-colors"
              >
                Términos de servicio
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h3 className="text-xl font-medium">Legal</h3>
          <ul className="list-none space-y-1 text-gray-500 mt-2">
            <li>
              <Link
                href="/privacidad"
                className="hover:text-blue-600 transition-colors"
              >
                Política de privacidad
              </Link>
            </li>
            <li>
              <Link
                href="/terminos"
                className="hover:text-blue-600 transition-colors"
              >
                Términos de servicio
              </Link>
            </li>
            <li>
              <Link
                href="/cookies"
                className="hover:text-blue-600 transition-colors"
              >
                Cookies
              </Link>
            </li>
            <li>
              <Link
                href="/accesibilidad"
                className="hover:text-blue-600 transition-colors"
              >
                Accesibilidad
              </Link>
            </li>
            <li>
              <Link
                href="/derechos"
                className="hover:text-blue-600 transition-colors"
              >
                Derechos de autor
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-10 text-center">
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} Codin. Todos los derechos
          reservados.
        </p>
        <p className="text-gray-500">Hecho con ❤️ por Codin</p>
        <p className="text-gray-500">
          Desarrolladores apasionados por la tecnología.
        </p>
      </div>
    </footer>
  );
};
