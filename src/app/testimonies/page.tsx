import { Tracker } from "@/components/Tracker";
import { getContent } from "@/lib/content";
import { getMetadata } from "@/lib/getMetadata";
import TestimoniesIndex from "@/modules/testimonies";
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  return getMetadata({
    title: "Testimonios - Triana Marketing",
    description: "Lee lo que nuestros clientes dicen sobre nuestra experiencia en marketing digital y consultoría de negocios.",
    keywords: [
      "testimonios",
      "opiniones de clientes",
      "reseñas",
      "satisfacción de clientes",
    ]
  })
}

export default async function Testimonies() {
  let content = await getContent()
  if (!content) redirect("/500")

  return (
    <>
      <Tracker />
      <TestimoniesIndex content={content} />
    </>
  )
}