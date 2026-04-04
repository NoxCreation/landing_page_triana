import LayoutCEO from "@/components/LayoutCEO";
import { getContent } from "@/lib/content";
import HomeIndex from "@/modules/home";
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

// Genera los metadatos en el servidor (óptimo para SEO)
export async function generateMetadata(): Promise<any> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://3anamarketing.com';
  const title = "3ana Marketing & Consulting";
  const description = "Agencia de marketing digital especializada en SEO, SEM, redes sociales y diseño web. Impulsa tu negocio con estrategias personalizadas y resultados medibles.";
  const image = "/social.webp";
  const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: baseUrl,
      type: 'website',
      images: [{ url: fullImageUrl }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullImageUrl],
    },
  };
}

export default async function Home() {
  let content = await getContent()
  if (!content) redirect("/500")

  return (
    <HomeIndex content={content} />
  );
}