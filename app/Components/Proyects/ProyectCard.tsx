import { ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

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
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="group relative rounded-2xl bg-white dark:bg-gray-900 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6 space-y-4">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          {description}
        </p>
        <a
          href={link}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-200"
        >
          Ver Caso de Estudio
          <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" />
        </a>
      </div>
    </motion.div>
  );
};
