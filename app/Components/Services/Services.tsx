import { Laptop, Smartphone, GitBranch } from "lucide-react";
import { Title } from "../Title";
import { CardService } from "./CardService";

const services = [
  {
    title: "Diseño Web",
    description:
      "Creo sitios web modernos y responsivos que cautivan a tus visitantes. Desde landing pages hasta plataformas complejas, cada proyecto se adapta perfectamente a tus necesidades y objetivos de negocio.",
    icon: <Laptop />,
  },
  {
    title: "Desarrollo de Aplicaciones",
    description:
      "Desarrollo aplicaciones móviles y de escritorio personalizadas con las últimas tecnologías. Me enfoco en crear soluciones intuitivas, escalables y que ofrezcan una experiencia de usuario excepcional.",
    icon: <Smartphone />,
  },
  {
    title: "Automatización y Despliegue",
    description:
      "Implemento sistemas de automatización que hacen que tu proyecto sea más eficiente y confiable. Me encargo de que tus actualizaciones se desplieguen de forma segura y rápida.",
    icon: <GitBranch />,
  },
];

export const Services = ({
  servicesRef,
}: {
  servicesRef: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <div
      ref={servicesRef}
      className="container flex flex-col items-center justify-center py-20"
    >
      <Title title="Mis Servicios" description="Descripción de mis servicios" />
      <div className="grid gap-8 md:grid-cols-3 mt-10">
        {services.map((service, index) => (
          <CardService
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
};
