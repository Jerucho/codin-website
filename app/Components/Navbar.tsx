"use client";

import Link from "next/link";
import { useState } from "react";
type NavbarProps = {
  onProyectsClick: () => void;
  onServicicesClick: () => void;
  onContactClick: () => void;
  onCustomersClick: () => void;
};

export const Navbar = ({
  onProyectsClick,
  onServicicesClick,
  onContactClick,
  onCustomersClick,
}: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 w-full border-b container bg-white/80 backdrop-blur-sm">
      <div className="flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold hover:text-blue-600 transition-colors"
        >
          Jeremias Amador
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden p-2 relative w-10 h-10 flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <div className="relative w-6 h-6">
            <span
              className={`absolute h-0.5 w-6 bg-gray-800 transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45 top-3" : "top-1"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-6 bg-gray-800 top-3 transition-all duration-300 ease-in-out ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-6 bg-gray-800 transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? "-rotate-45 top-3" : "top-5"
              }`}
            ></span>
          </div>
        </button>

        {/* Navbar Links */}
        <div
          className={`${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          } md:opacity-100 md:translate-y-0 md:pointer-events-auto transition-all duration-300 ease-in-out absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0">
            <li>
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left text-gray-800 hover:text-blue-600 transition-colors cursor-pointer"
                aria-label="Ver proyectos"
              >
                Inicio
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  onProyectsClick();
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left text-gray-800 hover:text-blue-600 transition-colors cursor-pointer"
                aria-label="Ver proyectos"
              >
                Proyectos
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  onServicicesClick();
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left text-gray-800 hover:text-blue-600 transition-colors cursor-pointer"
                aria-label="Ver servicios"
              >
                Servicios
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  onCustomersClick();
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left text-gray-800 hover:text-blue-600 transition-colors cursor-pointer"
                aria-label="Ver clientes"
              >
                Clientes
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  onContactClick();
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left text-gray-800 hover:text-blue-600 transition-colors cursor-pointer"
                aria-label="Ir a contacto"
              >
                Contacto
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link
            href="/contacto"
            className="bg-blue-primary text-white px-6 py-2 rounded-full hover:bg-blue-600 transition cursor-pointer"
            aria-label="Ir a contacto"
          >
            Contáctame
          </Link>
        </div>
      </div>
    </nav>
  );
};
