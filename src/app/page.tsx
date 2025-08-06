import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Step from "./components/Step";
import TryItNow from "./components/TryItNow";
import WhyUs from "./components/WhyUs";

function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <WhyUs />
      <Step />
      <Pricing />
      <TryItNow />
      <Footer />
    </>
  );
}

export default Page;
