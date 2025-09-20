import Navbar from "./components/Navbar";
import HeroComplex from "./components/Hero";
import Services from "./components/Services";
import Products from "./components/Products";
import { CardsSection } from "./components/Cases";
import StepsSection from "./components/Process";
import TestimonialSlider from "./components/Review";
import FAQSection from "./components/FAQ";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import ProjectTimeline from "./components/ProgressBar";
import Capabilities from "./components/Capabilities";
import Agents from "./components/Agents";
import CoreCapabilities from "./components/CoreCapabilities";

function App() {
  return (
    <div className="font-grotesk bg-black min-h-screen text-white">
      <div className="w-full px-6 py-24 md:px-8 md:py-4">
        <Navbar />
        <HeroComplex />
        <Services />
        <Products />
        <Agents />
        <CoreCapabilities />
        <CardsSection />
        <StepsSection />
        <ProjectTimeline />
        <TestimonialSlider />
        <FAQSection />
        <Capabilities />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;
