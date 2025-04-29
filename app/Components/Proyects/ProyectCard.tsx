import { ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
interface ProyectCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
}

export const ProyectCard = ({
  title,
  description,
  image,
  link,
}: ProyectCardProps) => {
  return (
    <div className="rounded-xl shadow-lg bg-gray-100 dark:bg-gray-900 flex flex-col h-full w-full max-w-sm overflow-hidden">
      <div className="h-1/2">
        <Image
          src={image}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 bg-white dark:bg-gray-800 flex flex-col justify-between p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
        <a href={link} className="text-blue-600 hover:underline">
          Ver Caso de Estudio <ArrowRight className="inline" />
        </a>
      </div>
    </div>
  );
};
