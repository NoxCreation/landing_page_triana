import BlogGrid from "./components/BlogGrid";
import { ArticleType, PaginatedArticles } from "@/types/ArticleType";

export default function BlogIndex({
    content,
    pagination
}:{
    content: Array<ArticleType>
    pagination: PaginatedArticles
}) {
    return (
        <BlogGrid content={content} pagination={pagination}/>
    )
}