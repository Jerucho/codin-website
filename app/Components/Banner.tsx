import Link from "next/link";

export const Banner = () => {
  return (
    <header className="container bg-[url('./banner_leon.jpg')] bg-center bg-cover bg-no-repeat bg-fixed">
      <section className="flex flex-col justify-center h-screen text-left">
        <div className="max-w-2xl mb-8 text-white">
          <h1 className="text-5xl font-bold mb-4">
            Desarrollo de Páginas Web y Aplicaciones Móviles
          </h1>

          <p className="text-2xl text-white mb-8">
            Transformamos ideas en experiencias digitales
          </p>
          <Link
            href="/contacto"
            className="bg-blue-primary text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300 text-xl"
            aria-label="Contáctanos"
          >
            Contáctanos
          </Link>
        </div>
      </section>
    </header>
  );
};
