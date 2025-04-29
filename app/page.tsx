import { Banner } from "./Components/Banner";
import { Navbar } from "./Components/Navbar";
import { ProyectsSection } from "./Components/Proyects/ProyectsSection";
import { Services } from "./Components/Services/Services";
export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <ProyectsSection />
    </>
  );
}
