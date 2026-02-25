import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero.jsx";
import Partners from "./components/Partners/Partners";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Services from "./components/Services/Services";
import Industries from "./components/Industries/Industries";
import About from "./components/About/About";
import Testimonials from "./components/Testimonials/Testimonials";
import CTA from "./components/CTA/CTA";
import Contact from "./components/Contact/Contact";
import LocationMap from "./components/LocationMap/LocationMap";
import Footer from "./components/Footer/Footer.jsx";
import Consultation from "./components/Consultation/Consultation";
import ConsultationsDashboard from "./components/ConsultationsDashboard/ConsultationsDashboard";



function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Partners />
      <WhyChooseUs />
      <Services />
      <Industries />
      <About />
      <Testimonials />
      <CTA />
      <Consultation />
      <ConsultationsDashboard />
      <Contact />
      <LocationMap />
      <Footer />
    </div>
  );
}

export default App;
