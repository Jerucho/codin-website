import { Laptop, Smartphone, Zap } from "lucide-react";
import { Title } from "../Title";
import { CardService } from "./CardService";
const services = [
  {
    title: "Diseño Web",
    description: "Creamos sitios web atractivos y funcionales.",
    icon: <Laptop />,
  },
  {
    title: "Desarrollo de Aplicaciones",
    description: "Desarrollamos aplicaciones móviles y de escritorio.",
    icon: <Smartphone />,
  },
  {
    title: "Marketing Digital",
    description: "Estrategias efectivas para aumentar tu visibilidad.",
    icon: <Zap />,
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
