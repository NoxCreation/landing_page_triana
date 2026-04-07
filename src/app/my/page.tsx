import { getContent } from "@/lib/content";
import { getMetadata } from "@/lib/getMetadata";
import MyIndex from "@/modules/my";
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
    return getMetadata({
      title: "Sobre Mí - Triana Marketing",
      description: "Conoce a Triana, especialista en marketing digital y consultoría de negocios con experiencia en estrategias de crecimiento.",
      keywords: [
        "sobre mí",
        "consultor de marketing",
        "especialista marketing digital",
        "experiencia profesional",
      ]
    })
}

export default async function My() {
    let content = await getContent()
    if (!content) redirect("/500")

    return (
        <MyIndex content={content} />
    )
}