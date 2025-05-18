import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { ProyectModal } from "./ProyectModal";

interface ProyectCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  className?: string;
}

export const ProyectCard = ({
  title,
  description,
  image,
  className = "",
}: ProyectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className={`group relative rounded-2xl bg-white overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ${className}`}
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6 space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
        <ProyectModal />
      </div>
    </motion.div>
  );
};
