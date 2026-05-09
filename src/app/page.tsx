import Navbar from "@/components/layout/Navbar"
import Hero from "@/components/sections/Hero";
// import About from "@/components/About";
// import Services from "@/components/Services";
// import Gallery from "@/components/Gallery";
// import Testimonials from "@/components/Testimonials";
// import Booking from "@/components/Booking";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";
// import FloatingWhatsapp from "@/components/FloatingWhatsapp";

export default function HomePage() {
  return (
    <main className="bg-[#111827] text-[#F8F9FA] overflow-x-hidden">
      <Navbar />
      <Hero />
      {/* <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Booking />
      <Contact />
      <Footer />
      <FloatingWhatsapp /> */}
    </main>
  );
}