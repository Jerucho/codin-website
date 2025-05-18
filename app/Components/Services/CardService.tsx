"use client";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "motion/react"; // ✅ corrección
import { useRef } from "react";

interface CardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  index?: number; // para delay escalonado
}

export const CardService = ({
  title,
  description,
  icon,
  index = 0,
}: CardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.1, // ✅ delay escalonado
      }}
      className="h-full"
    >
      <Card className="border-blue-100 transition-all hover:shadow-md hover:border-blue-200 h-full flex flex-col">
        <CardContent className="p-6 flex flex-col flex-1">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-4">{title}</h3>
          {description && (
            <p className="mt-2 text-gray-600 flex-1">{description}</p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};
