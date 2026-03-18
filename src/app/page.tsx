import Differentiation from "@/components/home/Differentiation";
import Hero from "@/components/home/Hero";
import HowWeWork from "@/components/home/HowWeWork";
import LeadForm from "@/components/home/LeadForm";
import Need from "@/components/home/Need";
import Service from "@/components/home/Service";
import Testimonials from "@/components/home/Testimonials";

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
    </div>
  );
}
