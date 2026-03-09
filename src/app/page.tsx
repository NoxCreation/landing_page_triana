import Differentiation from "@/components/Differentiation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowWeWork from "@/components/HowWeWork";
import LeadForm from "@/components/LeadForm";
import Need from "@/components/Need";
import Service from "@/components/Service";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Differentiation />
      <Need />
      <Service />
      <HowWeWork />
      <Testimonials />
      <LeadForm />
      <Footer />
    </div>
  );
}
