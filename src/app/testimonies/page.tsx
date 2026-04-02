import { getContent } from "@/lib/content";
import TestimoniesIndex from "@/modules/testimonies";
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function Testimonies() {
    let content = await getContent()
    if (!content) redirect("/500")

    return (
        <TestimoniesIndex content={content}/>
    )
}