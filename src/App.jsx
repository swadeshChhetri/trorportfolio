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
import Cursor from "./components/common/Cursor";
import ProjectTimeline from "./components/ProgressBar";
import Capabilities from "./components/Capabilities";
import Agents from "./components/Agents";
import CoreCapabilities from "./components/CoreCapabilities";
import ParticleBackground from "./components/common/ParticleBackground";

function App() {
  return (
    <div className="font-grotesk bg-black min-h-screen text-white  relative">
      <ParticleBackground/>
      <div className="relative z-10 px-6 md:px-8">
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
