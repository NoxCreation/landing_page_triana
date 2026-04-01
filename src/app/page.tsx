import { getContent } from "@/lib/content";
import HomeIndex from "@/modules/home";
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function Home() {
  let content = await getContent()
  if(!content) redirect("/500")

  return (
    <HomeIndex content={content} />
  );
}