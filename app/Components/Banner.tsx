"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export const Banner = () => {
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
      <div className="absolute inset-0 bg-[url('./banner_leon.jpg')] bg-center bg-cover bg-fixed" />
      <div className="absolute inset-0 bg-black/50" />

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 h-full container mx-auto px-4 flex items-center"
      >
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-4">
            Desarrollo de Páginas Web y Aplicaciones Móviles
          </h1>
          <p className="text-2xl mb-8">
            Transformamos ideas en experiencias digitales
          </p>
          <Link
            href="/contacto"
            className="bg-blue-primary text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300 text-xl"
            aria-label="Contáctanos"
          >
            Contáctanos
          </Link>
        </div>
      </motion.div>
    </header>
  );
};
