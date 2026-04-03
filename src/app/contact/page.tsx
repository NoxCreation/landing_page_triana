import { getContent } from "@/lib/content";
import ContactIndex from "@/modules/contact";
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function Contact() {
    let content = await getContent()
    if (!content) redirect("/500")

    return (
        <ContactIndex content={content} />
    )
}