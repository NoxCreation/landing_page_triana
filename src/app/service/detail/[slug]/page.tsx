import { getContent } from "@/lib/content";
import { getMetadata } from "@/lib/getMetadata";
import ServiceDetail from "@/modules/services/components/details/ServiceDetail";
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const { slug } = await params
    const content = await getContent()
    const service = content?.services?.services?.find(s => s.slug === slug)

    if (!service) {
        return getMetadata({
            title: "Servicio no encontrado",
            description: "El servicio que buscas no está disponible."
        })
    }

    return getMetadata({
        title: `${service.title} - Triana Marketing`,
        description: service.description,
        keywords: [service.title, "servicio de marketing", "agencia digital"]
    })
}

export default async function ServiceDetails({ params }: { params: { slug: string } }) {
    const { slug } = await params
    let content = await getContent()
    if (!content) redirect("/500")

    const service = content.services.services.find(service => service.slug == slug)
    return (
        <ServiceDetail service={service}/>
    )
}