import { getContent } from "@/lib/content";
import { geMetadata } from "@/lib/geMetadata";
import HomeIndex from "@/modules/home";
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
    return geMetadata()
}

export default async function Home() {
  let content = await getContent()
  if (!content) redirect("/500")

  return (
    <HomeIndex content={content} />
  );
}