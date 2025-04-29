import { Quote } from "lucide-react";

interface TestimonialCardProps {
  customerName: string;
  customerDetails: string;
}

export const CustomerCard = ({
  customerName,
  customerDetails,
}: TestimonialCardProps) => {
  return (
    <div className="flex flex-col max-w-sm min-h-[220px] justify-center bg-white rounded-2xl shadow-lg p-6 mb-6 hover:shadow-xl transition-shadow duration-300">
      {/* Cita */}
      <div className="flex justify-center mb-4">
        <div className="text-4xl text-blue-600">
          <Quote />
        </div>
      </div>

      {/* Texto */}
      <p className="text-gray-700 text-base italic mb-4 text-center">
        {customerDetails}
      </p>

      {/* Nombre */}
      <h2 className="text-lg font-semibold text-gray-900 text-center">
        {customerName}
      </h2>
    </div>
  );
};
