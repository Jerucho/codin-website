import { Banner } from "./Components/Banner";
import { Navbar } from "./Components/Navbar";
import { Services } from "./Components/Services/Services";
export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
    </>
  );
}
