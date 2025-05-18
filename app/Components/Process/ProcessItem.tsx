"use client";

import { JSX } from "react";
import { motion } from "framer-motion";
export const ProcessItem = ({
  icon,
  title,
  description,
  index,
}: {
  icon: JSX.Element;
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="flex justify-center">
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-blue-600 text-white shadow-md">
            {icon}
          </div>
        </div>
        <motion.div
          initial={{
            transform: "translateY(60px)",
            opacity: 0,
          }}
          whileInView={{
            transform: "translateY(0)",
            opacity: 1,
          }}
          className="flex items-center w-full md:w-auto"
        >
          <div
            className={`w-full md:w-auto mt-8 md:mt-0 ${
              index % 2 === 0 ? "md:mr-[50%] md:pr-12" : "md:ml-[50%] md:pl-12"
            }`}
          >
            <div className="rounded-lg bg-white p-6 shadow-sm border border-blue-50">
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-2 text-gray-600">{description}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
