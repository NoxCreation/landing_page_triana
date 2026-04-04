import { getContent } from "@/lib/content";
import { getMetadata } from "@/lib/getMetadata";
import HomeIndex from "@/modules/home";
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
    return getMetadata({
      title: "Pagina Principal - Triana Marketing",
      description: "Triana Marketing es una agencia de marketing digital en EEUU especializada en estrategias de crecimiento para negocios. Impulsamos tu marca con soluciones innovadoras y resultados medibles."
    })
}

export default async function Home() {
  let content = await getContent()
  if (!content) redirect("/500")

  return (
    <HomeIndex content={content} />
  );
}