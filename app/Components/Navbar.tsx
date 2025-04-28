import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="logo text-xl font-bold">Logo</div>

        {/* Navbar Links */}
        <nav className="hidden md:flex nav-links">
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className="text-gray-800 hover:text-blue-600 transition-colors "
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-800 hover:text-blue-600 transition-colors "
              >
                Proyectos
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-gray-800 hover:text-blue-600 transition-colors "
              >
                Proceso
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-800 hover:text-blue-600 transition-colors "
              >
                Testimonios
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-gray-800 hover:text-blue-600 transition-colors "
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact Button */}
        <div>
          <Link
            href="/contact"
            className="bg-blue-primary text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
          >
            Contáctanos
          </Link>
        </div>
      </div>
    </div>
  );
};
