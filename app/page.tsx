"use client";
import { useRef } from "react";
import { Banner } from "./Components/Banner";
import { CallToAction } from "./Components/CallToAction/CallToAction";
import { OurCustomers } from "./Components/Customers/OurCustomers";
import { Footer } from "./Components/Footer/Footer";
import { OurProcess } from "./Components/Process/OurProcess";
import { ProyectsSection } from "./Components/Proyects/ProyectsSection";
import { Services } from "./Components/Services/Services";
import { Navbar } from "./Components/Navbar";

export default function Home() {
  const proyectsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  // const customersRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const scrollTo = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Navbar
        onProyectsClick={() => scrollTo(proyectsRef)}
        onServicicesClick={() => scrollTo(servicesRef)}
        onContactClick={() => scrollTo(contactRef)}
        // onCustomersClick={() => scrollTo(customersRef)}
      />
      <Banner />
      <ProyectsSection proyectsRef={proyectsRef} />
      <Services servicesRef={servicesRef} />
      <OurProcess />
      {/* <OurCustomers customersRef={customersRef} /> */}
      <CallToAction callToActionRef={contactRef} />
      <Footer />
    </>
  );
}
