import Differentiation from "./components/Differentiation";
import Hero from "./components/Hero";
import HowWeWork from "./components/HowWeWork";
import LeadForm from "./components/LeadForm";
import Need from "./components/Need";
import Service from "./components/Service";
import Testimonials from "./components/Testimonials";

export default async function HomeIndex({
    content
}: {
    content: any
}) {
    
    return (
        <div style={{ overflow: "hidden" }}>
            <Hero content={content['home']} />
            <Differentiation />
            <Need />
            <Service />
            <HowWeWork />
            <Testimonials />
            <LeadForm />
        </div>
    );
}