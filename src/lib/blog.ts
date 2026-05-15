import { ArticleType, PaginatedArticles } from "@/types/ArticleType";
import { queryDb2 } from "./db2";

export const getArticles = async (
    page: number = 1,
    limit: number = 10
): Promise<{
    data: Array<ArticleType>,
    pagination: PaginatedArticles
}> => {
    const offset = (page - 1) * limit;
    const query = `SELECT *
FROM public.articles
ORDER BY "createdAt" DESC
LIMIT $1 OFFSET $2;
`;
    const countQuery = `SELECT COUNT(*) as count FROM public.articles`;

    try {
        const [result, totalResult] = await Promise.all([
            queryDb2(query, [limit, offset]),
            queryDb2(countQuery, [])
        ]);

        const total = Number(totalResult[0]?.count) || 0;
        const totalPages = Math.ceil(total / limit);

        return {
            data: result,
            pagination: {
                total,
                page,
                limit,
                totalPages
            }
        };
    } catch (err) {
        console.error("Error fetching articles:", err);
        return {
            data: [],
            pagination: {
                total: 0,
                page,
                limit,
                totalPages: 0
            }
        };
    }
};

export const getArticle = async (
    slug: string
) => {
    const query = `SELECT * FROM public.articles WHERE slug=$1`;
    return await queryDb2(query, [slug])
}