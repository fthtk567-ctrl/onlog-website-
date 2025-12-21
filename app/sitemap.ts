import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://onlagelsin.com'
  
  // Tüm sayfalar
  const routes = [
    '',
    '/hizmetlerimiz',
    '/kurye-ol',
    '/iletisim',
    '/sss',
    '/api-entegrasyon',
    '/restoran-paneli',
    '/e-ticaret',
    '/marketlere-ozel',
    '/blog',
    '/hakkimizda',
    '/cerez-politikasi',
    '/gizlilik-politikasi',
    '/kullanim-sartlari',
    '/kvkk',
    '/hesap-silme',
    '/veri-silme',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : route === '/hizmetlerimiz' || route === '/kurye-ol' ? 0.9 : 0.7,
  }))
}
