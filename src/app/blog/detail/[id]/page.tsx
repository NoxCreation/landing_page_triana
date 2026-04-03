import { getArticle } from "@/lib/blog";
import BlogDetail from "@/modules/blog/components/detail/BlogDetail";
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function Detail({ params }: { params: { id: string } }) {
    try {
        const { id } = await params
        let article = await getArticle(id)
        if (article.length == 0)
            return redirect("/500");
        article = article[0]
        return (
            <BlogDetail article={article}/>
        )
    } catch {
        return redirect("/500");
    }
}