import { Tracker } from "@/components/Tracker";
import { getContent } from "@/lib/content";
import { getMetadata } from "@/lib/getMetadata";
import ServiceIndex from "@/modules/services";
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  return getMetadata({
    title: "Servicios - Triana Marketing",
    description: "Descubre nuestros servicios: marketing digital, branding, consultoría y estrategias de crecimiento para tu negocio.",
    keywords: [
      "servicios de marketing",
      "branding",
      "consultoría",
      "estrategias digitales",
      "publicidad",
    ]
  })
}

export default async function Service() {
  let content = await getContent()
  if (!content) redirect("/500")

  return (
    <>
      <Tracker />
      <ServiceIndex content={content} />
    </>
  )
}