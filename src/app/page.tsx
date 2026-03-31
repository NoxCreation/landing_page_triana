import Differentiation from "@/components/home/Differentiation";
import Hero from "@/components/home/Hero";
import HowWeWork from "@/components/home/HowWeWork";
import LeadForm from "@/components/home/LeadForm";
import Need from "@/components/home/Need";
import Service from "@/components/home/Service";
import Testimonials from "@/components/home/Testimonials";
import { queryDb2 } from "@/lib/db2";
import { redirect } from 'next/navigation';

export default async function Home() {
  const query = `SELECT * FROM public.landing`;
  let content = {} as any;

  try {
    const result = await queryDb2(query, []);
    if(result.length > 0){
      content = result[0].content
    }
  } catch (err) {
    redirect('/500');
  }

  return (
    <div style={{ overflow: "hidden" }}>
      <Hero content={content['home']}/>
      <Differentiation />
      <Need />
      <Service />
      <HowWeWork />
      <Testimonials />
      <LeadForm />
    </div>
  );
}