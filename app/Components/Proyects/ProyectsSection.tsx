"use client";
import { Title } from "../Title";
import { ProyectCard } from "./ProyectCard";
import genesisColperIMG from "@/app/Assets/Img/Genesis.png";
import genesisColperIMG2 from "@/app/Assets/Img/GenesisColper.png";
import { Button } from "@/components/ui/button";
import { MoreProyects } from "./MoreProyects";
import { useState } from "react";
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
          <ProyectCard
            title="Proyect 1"
            description="Description 1"
            image={genesisColperIMG}
            link="/proyect1"
          />
          <ProyectCard
            title="Proyect 2"
            description="Description 2"
            image={genesisColperIMG2}
            link="/proyect2"
          />
          <ProyectCard
            title="Proyect 3"
            description="Description 3"
            image={genesisColperIMG2}
            link="/proyect3"
          />
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
