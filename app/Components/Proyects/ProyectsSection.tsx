"use client";
import { Title } from "../Title";
import { ProyectCard } from "./ProyectCard";
import taliendoIMG from "@/app/Assets/Img/Taliendo.png";
import { Button } from "@/components/ui/button";
import { MoreProyects } from "./MoreProyects";
import { useState } from "react";
import cafeNativoIMG from "@/app/Assets/Img/CafeNativo.png";
import raccoonIMG from "@/app/Assets/Img/Raccoon.png";

const proyects = [
  {
    title: "Café Nativo",
    short_description:
      "Sitio web corporativo para una cafetería artesanal que ofrece productos orgánicos y de comercio justo",
    description:
      "Café Nativo es una cafetería artesanal que se especializa en ofrecer café de origen único y productos orgánicos. " +
      "El sitio web fue diseñado para mostrar su filosofía de comercio justo, su proceso de tostado artesanal y su compromiso con la sostenibilidad. " +
      "Incluye una sección de blog para compartir conocimientos sobre café y un sistema de reservas para eventos y catas.",
    stack: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    image: cafeNativoIMG,
    liveUrl: "https://cafenativo.com",
  },
  {
    title: "Raccoon",
    short_description:
      "Sistema de gestión de inventarios y ventas para una empresa de logística y distribución de libros",
    description:
      "Raccoon es un sistema de gestión de inventarios y ventas para una empresa de logística y distribución de libros. " +
      "El sistema fue diseñado para ayudar a la empresa a administrar sus inventarios y ventas de manera eficiente. " +
      "Incluye un panel de administración para poder administrar los datos de los clientes, productos y ventas.",
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
    image: raccoonIMG,
  },

  {
    title: "Taliendo",
    short_description:
      "Software de gestión humana diseñado para ayudar a las empresas a administrar la productividad de los empleados",
    description:
      "Taliendo es un software de gestión humana diseñado para ayudar a las empresas a administrar la productividad de los empleados. " +
      "El software fue diseñado para ayudar a las empresas a administrar la productividad de los empleados. " +
      "Incluye una sección de blog para compartir conocimientos sobre café y un sistema de reservas para eventos y catas.",
    stack: ["Angular", ".NET", "Bootstrap", "TypeScript", "Entity Framework"],
    image: taliendoIMG,
    liveUrl: "https://taliendo.com",
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
              liveUrl={proyect.liveUrl}
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
