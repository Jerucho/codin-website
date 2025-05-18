"use client";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { ProyectCard } from "./ProyectCard";
import genesisColperIMG from "@/app/Assets/Img/Genesis.png";

interface MoreProyectsProps {
  show: boolean;
  onClose: () => void;
}

export const MoreProyects = ({ show, onClose }: MoreProyectsProps) => {
  return (
    <AnimatePresence initial={false} mode="wait">
      {show && (
        <>
          <style jsx global>{`
            body {
              overflow: hidden;
            }
          `}</style>
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            exit={{
              x: "-100%",
              opacity: 0,
              transition: {
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            className="h-screen w-full container bg-blue-primary text-white fixed top-0 left-0 z-[1000] overflow-y-auto px-4 md:px-6 lg:px-8"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex justify-between sticky z-[1000] top-0 bg-blue-primary mt-6 md:mt-10 items-center py-4"
            >
              <motion.h1
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold"
              >
                Más Proyectos
              </motion.h1>
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="cursor-pointer overflow-hidden"
              >
                <X className="text-white h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20" />
              </motion.button>
            </motion.div>
            <div className="h-full mt-6 md:mt-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 pb-10">
                {[
                  {
                    title: "Proyecto 1",
                    description: "Descripción del proyecto 1",
                    image: genesisColperIMG,
                  },
                  {
                    title: "Proyecto 2",
                    description: "Descripción del proyecto 2",
                    image: genesisColperIMG,
                  },
                  {
                    title: "Proyecto 3",
                    description: "Descripción del proyecto 3",
                    image: genesisColperIMG,
                  },
                  {
                    title: "Proyecto 4",
                    description: "Descripción del proyecto 4",
                    image: genesisColperIMG,
                  },
                  {
                    title: "Proyecto 5",
                    description: "Descripción del proyecto 5",
                    image: genesisColperIMG,
                  },
                  {
                    title: "Proyecto 6",
                    description: "Descripción del proyecto 6",
                    image: genesisColperIMG,
                  },
                ].map((proyect, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.1 * index,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{
                      y: -10,
                      transition: { duration: 0.2 },
                    }}
                    className="w-full"
                  >
                    <ProyectCard
                      title={proyect.title}
                      description={proyect.description}
                      image={genesisColperIMG}
                      link="/proyect1"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
