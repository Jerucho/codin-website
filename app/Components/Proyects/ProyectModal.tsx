import { Dialog, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import {
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export const ProyectModal = () => {
  return (
    <div className="z-[2000]">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="w-full group flex items-center justify-center gap-2 text-blue-primary hover:text-gray-900 hover:bg-gray-100/50 transition-all duration-300"
          >
            Ver detalles
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-800">
              Proyecto
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="text-gray-600">
            Detalles del proyecto...
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
};
