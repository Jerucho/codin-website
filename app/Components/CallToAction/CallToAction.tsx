import Link from "next/link";

export const CallToAction = () => {
  return (
    <div className="container my-20 ">
      <div className="border bg-blue-600 flex flex-col items-center justify-center text-center py-16 px-4 text-white rounded-3xl">
        <h2 className="text-5xl font-bold text-white mb-4">
          ¿Listo para llevar tu proyecto al siguiente nivel?
        </h2>
        <p className="text-lg text-white mb-6">
          Contáctame y descubre cómo puedo ayudarte a alcanzar tus metas.
        </p>
        <Link
          href={"/contacto"}
          className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md hover:shadow-2xl transition duration-300 text-2xl"
        >
          Contáctame
        </Link>
      </div>
    </div>
  );
};
