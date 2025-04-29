import { Banner } from "./Components/Banner";
import { CallToAction } from "./Components/CallToAction/CallToAction";
import { OurCustomers } from "./Components/Customers/OurCustomers";
import { Footer } from "./Components/Footer/Footer";
import { Navbar } from "./Components/Navbar";
import { OurProcess } from "./Components/Process/OurProcess";
import { ProyectsSection } from "./Components/Proyects/ProyectsSection";
import { Services } from "./Components/Services/Services";
export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <ProyectsSection />

      <OurProcess />
      <OurCustomers />
      <CallToAction />
      <Footer />
    </>
  );
}
