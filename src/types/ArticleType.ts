
export type ArticleType = {
    id: string;
    slug: string;
    title: string;
    thumbnail: string;
    mini_description: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface PaginatedArticles {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}