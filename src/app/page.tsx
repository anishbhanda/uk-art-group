import Navbar from "@/components/layout/Navbar"
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Booking from "@/components/sections/Booking";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import FloatingWhatsapp from "@/components/sections/FloatingWhatsapp";
import Reels from "@/components/sections/Reels";

export default function HomePage() {
  return (
    <main className="bg-[#111827] text-[#F8F9FA] overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Reels/>
      <Testimonials />
      <Booking />
      <Contact />
      <Footer />
      <FloatingWhatsapp /> 
    </main>
  );
}