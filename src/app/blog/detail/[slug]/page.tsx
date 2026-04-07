import { getArticle } from "@/lib/blog";
import { getMetadata } from "@/lib/getMetadata";
import BlogDetail from "@/modules/blog/components/detail/BlogDetail";
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const { slug } = await params
    const article = await getArticle(slug)

    if (article.length === 0) {
        return getMetadata({
            title: "Artículo no encontrado",
            description: "El artículo que buscas no está disponible."
        })
    }

    const data = article[0]

    return getMetadata({
        title: `${data.title} - Triana Marketing`,
        description: data.mini_description,
        keywords: [data.title, "blog de marketing", "consejos de negocio"],
        image: data.image_url
    })
}

export default async function Detail({ params }: { params: { slug: string } }) {
    try {
        const { slug } = await params
        let article = await getArticle(slug)
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