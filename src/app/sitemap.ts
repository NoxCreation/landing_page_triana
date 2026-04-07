import { MetadataRoute } from 'next'
import { getContent } from '@/lib/content'
import { getArticles } from '@/lib/blog'

export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!baseUrl) {
    throw new Error('NEXT_PUBLIC_SITE_URL no está definida');
  }

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/my`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/testimonies`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/service`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ]

  let serviceRoutes: MetadataRoute.Sitemap = []
  let blogRoutes: MetadataRoute.Sitemap = []

  try {
    const [content, { data: articles }] = await Promise.all([
      getContent(),
      getArticles(1, 10000) // Obtener hasta 10,000 artículos para el sitemap
    ])

    const now = new Date()
    serviceRoutes = content?.services?.services?.map((service) => ({
      url: `${baseUrl}/service/detail/${service.slug}`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.8,
    })) ?? []

    blogRoutes = articles.map((article) => ({
      url: `${baseUrl}/blog/detail/${article.slug}`,
      lastModified: new Date(article.updatedAt),
      changeFrequency: 'daily',
      priority: 0.8,
    }))
  } catch {
    console.warn('Sitemap: usando solo rutas estáticas')
  }

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes]
}
