import { Dialog, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import {
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github, ExternalLink, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Image from "next/image";

export const ProyectModal = ({
  title,
  description,
  stack,
  image,
  githubUrl,
  liveUrl,
}: {
  title: string;
  description: string;
  stack: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}) => {
  return (
    <div className="z-[2000]">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="w-full group flex items-center justify-center gap-2 text-blue-primary hover:text-gray-900 hover:bg-gray-100/50 transition-all duration-300 hover:scale-[1.02]"
          >
            Ver detalles
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-white max-w-3xl p-0 overflow-hidden w-[95vw] sm:w-[90vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw] max-h-[90vh]">
          <DialogClose asChild>
            <Button
              variant="ghost"
              className="absolute right-2 sm:right-4 top-2 sm:top-4 z-50 h-8 w-8 sm:h-12 sm:w-12 p-0 rounded-full bg-blue-primary text-white hover:bg-white hover:text-blue-primary transition-all duration-300"
            >
              <X className="h-6 w-6 sm:h-8 sm:w-8" />
              <span className="sr-only">Cerrar</span>
            </Button>
          </DialogClose>
          <div className="relative h-32 sm:h-40 md:h-48 w-full">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
          <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(90vh-12rem)]">
            <DialogHeader>
              <DialogTitle className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                {title}
              </DialogTitle>
            </DialogHeader>
            <DialogDescription className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              {description}
            </DialogDescription>
            <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
              {stack.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge className="text-xs sm:text-sm bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
                    {item}
                  </Badge>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              {githubUrl && (
                <Button
                  variant="outline"
                  className="flex items-center justify-center gap-2 hover:bg-gray-100 w-full sm:w-auto"
                  onClick={() => window.open(githubUrl, "_blank")}
                >
                  <Github className="w-4 h-4" />
                  Ver código
                </Button>
              )}
              {liveUrl && (
                <Button
                  variant="default"
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 w-full sm:w-auto"
                  onClick={() => window.open(liveUrl, "_blank")}
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver proyecto
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
