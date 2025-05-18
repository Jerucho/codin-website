import { Code, Layers, Users, Zap } from "lucide-react";
import { Title } from "../Title";
import { ProcessItem } from "./ProcessItem";
// import { Title } from "../Title";
// import { ProcessItem } from "./ProcessItem";

const listOfProcess = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Descubrimiento",
    description:
      "Capturo tus objetivos, audiencia y necesidades específicas para crear una estrategia personalizada.",
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Diseño",
    description:
      "Creo wireframes y diseños visuales que reflejan tu marca y ofrecen una experiencia de usuario excepcional.",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Desarrollo",
    description:
      "Transformo los diseños en código, construyendo tu sitio con las tecnologías más modernas y eficientes.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Lanzamiento",
    description:
      "Realizo pruebas exhaustivas y optimizo el rendimiento antes de lanzar tu sitio al mundo.",
  },
];
export function OurProcess() {
  return (
    <section id="proceso" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <Title
            title="Proceso de Trabajo"
            description="Un enfoque estructurado para garantizar resultados excepcionales en cada proyecto"
          />
        </div>

        <div className="relative">
          <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-blue-100"></div>

          <div className="space-y-12">
            {listOfProcess.map((step, index) => (
              <ProcessItem
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
