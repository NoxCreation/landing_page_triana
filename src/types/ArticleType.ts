
export type ArticleType = {
    title: string;
    thumbnail: string;
    mini_description: string;
    description: string;
    createdAt: Date;
}

export interface PaginatedArticles {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}