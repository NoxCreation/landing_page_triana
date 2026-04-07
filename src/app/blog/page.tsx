import { getArticles } from "@/lib/blog";
import { getMetadata } from "@/lib/getMetadata";
import BlogIndex from "@/modules/blog";
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
    return getMetadata({
      title: "Blog - Triana Marketing",
      description: "Artículos y consejos sobre marketing digital, estrategias de crecimiento y tendencias actuales para negocios.",
      keywords: [
        "blog de marketing",
        "consejos de marketing",
        "tendencias digitales",
        "artículos de negocios",
        "estrategias de crecimiento",
        "marketing digital",
        "triangula tu negocio",
        "triangula tu marca",
        "triangula tu éxito",
        "3ana marketing"
      ]
    })
}

interface BlogPageProps {
    searchParams: Promise<{ page?: string }> | { page?: string };
}

export default async function Blog({ searchParams }: BlogPageProps) {
    const params = await searchParams;
    const pageParam = params?.page;
    const page = pageParam ? Math.max(1, parseInt(pageParam, 10)) : 1;

    const { data: content, pagination } = await getArticles(page, 6);

    if (!content) redirect("/500");

    return <BlogIndex content={content} pagination={pagination} />;
}