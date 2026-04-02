import { getContent } from "@/lib/content";
import ServiceIndex from "@/modules/services";
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function Service() {
    let content = await getContent()
    if (!content) redirect("/500")

    return (
        <ServiceIndex content={content}/>
    )
}