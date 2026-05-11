import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.hdptradehub.com'

  // List all the route paths you have created wrappers for
  const routes = [
    { path: '', changeFrequency: 'always' as const, priority: 1 },
    { path: '/about-us', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/seafood-expo', changeFrequency: 'weekly' as const, priority: 0.9 },
    { path: '/business-opportunity', changeFrequency: 'weekly' as const, priority: 0.7 },
    { path: '/market-insight', changeFrequency: 'weekly' as const, priority: 0.7 },
  ]

  // Your specific language parameters
  const languages = ['vi', 'en', 'ko']

  // This creates 18 unique entries (6 pages * 3 languages)
  return routes.flatMap((route) =>
    languages.map((lang) => ({
      url: `${baseUrl}${route.path}?lang=${lang}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    }))
  )
}
