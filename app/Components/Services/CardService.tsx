"use client";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "motion/react"; // ✅ corrección
import Link from "next/link";
import { useRef } from "react";

interface CardProps {
  title: string;
  description?: string;
  link?: string;
  icon?: React.ReactNode;
  index?: number; // para delay escalonado
}

export const CardService = ({
  title,
  description,
  link,
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
    >
      <Card className="border-blue-100 transition-all hover:shadow-md hover:border-blue-200 min-h-[300px]">
        <CardContent className="p-6">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
            {icon}
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
          {description && <p className="mt-2 text-gray-600">{description}</p>}
          <Link
            href={link || "#"}
            className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            Saber más <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
};
