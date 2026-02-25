import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Product from "./components/Product";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#050510] min-h-screen text-white">
      <Navigation />
      <Hero />
      <Features />
      <Product />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
