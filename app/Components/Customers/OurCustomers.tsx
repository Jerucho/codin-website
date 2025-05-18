import { Title } from "../Title";
import { CustomerCard } from "./CustomerCard";

const customers = [
  {
    name: "Cliente 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Cliente 2",
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Cliente 3",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];
export const OurCustomers = ({
  customersRef,
}: {
  customersRef: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <div
      ref={customersRef}
      className="py-20 bg-gradient-to-br from-blue-50 to-blue-100"
    >
      <div>
        <Title
          title="Clientes que confiaron en mi"
          description="Historias de éxito de quienes han confiado en mis servicios"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
        {customers.map((customer, index) => (
          <CustomerCard
            key={index}
            customerName={customer.name}
            customerDetails={customer.text}
          />
        ))}
      </div>
    </div>
  );
};
