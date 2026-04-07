import { MetadataRoute } from 'next'
import { getContent } from '@/lib/content'
import { getArticles } from '@/lib/blog'

export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${baseUrl}/sobre-mi`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/proceso`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/testimonio`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      priority: 0.9,
    },
  ]

  let serviceRoutes: MetadataRoute.Sitemap = []
  let blogRoutes: MetadataRoute.Sitemap = []

  try {
    const [content, { data: articles }] = await Promise.all([
      getContent(),
      getArticles(1, 1000)
    ])

    serviceRoutes = content?.services?.services?.map((service) => ({
      url: `${baseUrl}/servicios/detalle/${service.slug}`,
      lastModified: new Date(),
      priority: 0.8,
    })) ?? []

    blogRoutes = articles.map((article) => ({
      url: `${baseUrl}/blog/detalle/${article.slug}`,
      lastModified: new Date(article.createdAt),
      priority: 0.8,
    }))
  } catch {
    console.warn('Sitemap: usando solo rutas estáticas')
  }

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes]
}
