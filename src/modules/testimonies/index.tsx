import { ContentType } from "@/types/ContentType";
import FormTestimonies from "./components/FormTestimonies";
import Testimonials from "./components/Testimonials";

export default function TestimoniesIndex({
    content
}: {
    content: ContentType
}) {
    return (
        <>
            <Testimonials content={content} />
            <FormTestimonies />
        </>
    )
}