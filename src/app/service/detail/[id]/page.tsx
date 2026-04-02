import { getContent } from "@/lib/content";
import ServiceDetail from "@/modules/services/components/details/ServiceDetail";
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function ServiceDetails({ params }: { params: { id: string } }) {
    const { id } = await params
    let content = await getContent()
    if (!content) redirect("/500")

    const service = content.services.services.find(service => service.id == id)
    return (
        <ServiceDetail service={service}/>
    )
}