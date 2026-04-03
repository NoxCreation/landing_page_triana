import { getArticles } from "@/lib/blog";
import BlogIndex from "@/modules/blog";
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

interface BlogPageProps {
    searchParams: Promise<{ page?: string }> | { page?: string };
}

export default async function Blog({ searchParams }: BlogPageProps) {
    // En Next.js 15+, searchParams puede ser una Promise; si no, usarlo directamente
    const params = await searchParams;
    const pageParam = params?.page;
    const page = pageParam ? Math.max(1, parseInt(pageParam, 10)) : 1;

    const { data: content, pagination } = await getArticles(page, 6);

    if (!content) redirect("/500");

    return <BlogIndex content={content} pagination={pagination} />;
}