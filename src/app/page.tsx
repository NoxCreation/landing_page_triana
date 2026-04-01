import { queryDb2 } from "@/lib/db2";
import HomeIndex from "@/modules/home";
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const query = `SELECT * FROM public.landing`;
  let content = {} as any;

  try {
    const result = await queryDb2(query, []);
    if (result.length > 0) {
      content = result[0].content
    }
  } catch (err) {
    redirect('/500');
  }

  return (
    <HomeIndex content={content} />
  );
}