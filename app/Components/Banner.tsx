"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { Github, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

type BannerProps = {
  onProyectsClick: () => void;
  onContactClick: () => void;
};

export const Banner = ({ onProyectsClick, onContactClick }: BannerProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // cuando el banner entra y sale de la vista
  });

  // Animaciones basadas en scroll
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <header
      ref={ref}
      className="relative h-screen overflow-hidden"
      aria-label="Banner Section"
    >
      <div className="absolute inset-0 bg-[url('./banner_leon.jpg')] bg-right-bottom md:bg-center bg-cover bg-no-repeat bg-fixed" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/1 to-black/50" />

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 h-full container mx-auto px-4 flex items-center"
      >
        <div className="max-w-2xl text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
          >
            Fullstack Developer
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl mb-6 md:mb-8 text-gray-200"
          >
            Transformando ideas en experiencias digitales excepcionales
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-6 md:mb-8"
          >
            <Link
              href="https://github.com/jerucho"
              target="_blank"
              className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors text-sm md:text-base"
            >
              <Github className="w-5 h-5 md:w-6 md:h-6" />
              <span>GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/jeremias-amador"
              target="_blank"
              className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors text-sm md:text-base"
            >
              <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
              <span>LinkedIn</span>
            </Link>
            <Link
              href="mailto:hola@jeremiasamador.com"
              className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors text-sm md:text-base"
            >
              <Mail className="w-5 h-5 md:w-6 md:h-6" />
              <span className="hidden sm:inline">hola@jeremiasamador.com</span>
              <span className="sm:hidden">Email</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              className="bg-blue-600 text-white px-6 md:px-8 py-5 rounded-full hover:bg-blue-700 transition duration-300 text-base md:text-lg font-medium hover:scale-105 text-center w-full sm:w-auto"
              aria-label="Contáctame"
              onClick={() => onContactClick()}
            >
              Contáctame
            </Button>
            <Button
              variant="outline"
              className=" border-white/80 text-black px-6 md:px-8 py-5 rounded-full hover:bg-white/20 hover:border-white hover:text-white transition-all duration-300 text-base md:text-lg font-medium hover:scale-105 text-center backdrop-blur-sm w-full sm:w-auto"
              aria-label="Ver proyectos"
              onClick={() => onProyectsClick()}
            >
              Ver proyectos
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
};
