"use client";
import { Title } from "../Title";
import { ProyectCard } from "./ProyectCard";
import genesisColperIMG from "@/app/Assets/Img/Genesis.png";
import transporteIMG from "@/app/Assets/Img/TransporteDonJuan.png";
import cafeIMG from "@/app/Assets/Img/CafeNativo.png";
import { Button } from "@/components/ui/button";
import { MoreProyects } from "./MoreProyects";
import { useState } from "react";

const proyects = [
  {
    title: "Web + Admin | Genesis Colper",
    short_description:
      "Sitio web corporativo con panel de administración para empresa de logística y transporte de libros",
    description:
      "Genesis Colper es una empresa que se dedica a la logística y transporte de libros. Necesitaba un sitio web para mostrar sus servicios y contactar con ellos." +
      "Además, necesitaba un sistema de gestión para poder administrar sus datos y servicios.",
    stack: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MySQL",
      "JWT",
      "Docker",
    ],
    image: genesisColperIMG,
  },
  {
    title: "Sitio Web + Admin | Transporte Don Juan",
    short_description:
      "Sitio web corporativo con panel de administración para empresa de transporte de cargas a nivel nacional",
    description:
      "Don Juan es una empresa argentina con trayectoria en el rubro de transporte de cargas a nivel nacional. Con el objetivo de dar a conocer sus servicios y llegar a más clientes, decidió dar el paso hacia la digitalización creando su sitio web oficial..",
    stack: ["React", "Next.js", "Tailwind CSS"],
    image: transporteIMG,
  },
  {
    title: "Sitio Web | Café Nativo",
    short_description:
      "Sitio web corporativo para una cafetería artesanal que ofrece productos orgánicos y de comercio justo",
    description:
      "Café Nativo es una cafetería artesanal que se especializa en ofrecer café de origen único y productos orgánicos. " +
      "El sitio web fue diseñado para mostrar su filosofía de comercio justo, su proceso de tostado artesanal y su compromiso con la sostenibilidad. " +
      "Incluye una sección de blog para compartir conocimientos sobre café y un sistema de reservas para eventos y catas.",
    stack: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    image: cafeIMG,
  },
];

export const ProyectsSection = ({
  proyectsRef,
}: {
  proyectsRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const [showMoreProyects, setShowMoreProyects] = useState(false);

  const handleShowMoreProyects = () => {
    setShowMoreProyects(!showMoreProyects);
  };

  return (
    <>
      <div
        ref={proyectsRef}
        className="flex gap-5 py-20 flex-col items-center justify-center w-full h-full bg-gray-100 dark:bg-gray-900"
      >
        <Title
          title="Proyectos Destacados"
          description="Explora algunos de mis trabajos más recientes y descubre cómo ayudé a mis clientes"
        />
        <div className="container flex flex-col md:flex-row gap-6">
          {proyects.map((proyect) => (
            <ProyectCard
              key={proyect.title}
              title={proyect.title}
              short_description={proyect.short_description}
              description={proyect.description}
              image={proyect.image}
              stack={proyect.stack}
            />
          ))}
        </div>
        <Button
          onClick={handleShowMoreProyects}
          className="mt-6 px-8 py-6 text-lg cursor-pointer text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition-all duration-300 ease-in-out"
        >
          Ver más proyectos
        </Button>

        <MoreProyects
          show={showMoreProyects}
          onClose={handleShowMoreProyects}
        />
      </div>
    </>
  );
};
