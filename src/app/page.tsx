import LayoutCEO from "@/components/LayoutCEO";
import { getContent } from "@/lib/content";
import HomeIndex from "@/modules/home";
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function Home() {
  let content = await getContent()
  if(!content) redirect("/500")

  return (
    <LayoutCEO 
      title="3ana Marketing & Consulting" 
      description="Agencia de marketing digital especializada en SEO, SEM, redes sociales y diseño web. Impulsa tu negocio con estrategias personalizadas y resultados medibles."
    >
      <HomeIndex content={content} />
    </LayoutCEO>
    
  );
}