import { getContent } from "@/lib/content";
import { getMetadata } from "@/lib/getMetadata";
import ContactIndex from "@/modules/contact";
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
    return getMetadata({
      title: "Contacto - Triana Marketing",
      description: "Contáctanos para una consulta gratuita. Estamos listos para impulsar tu negocio con estrategias de marketing personalizadas.",
      keywords: [
        "contacto",
        "consulta gratuita",
        "agencia de marketing",
        "comunicación",
      ]
    })
}

export default async function Contact() {
    let content = await getContent()
    if (!content) redirect("/500")

    return (
        <ContactIndex content={content} />
    )
}