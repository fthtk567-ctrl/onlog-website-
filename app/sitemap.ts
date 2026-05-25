import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://onlagelsin.com'
  
  // Tüm sayfalar
  const routes = [
    '',
    '/hizmetlerimiz',
    '/is-ortagimiz-ol',
    '/iletisim',
    '/sss',
    '/restoran-paneli',
    '/blog',
    '/hakkimizda',
    '/cerez-politikasi',
    '/gizlilik-politikasi',
    '/kurye-gizlilik-politikasi',
    '/kullanim-sartlari',
    '/kvkk',
    '/hesap-silme',
    '/veri-silme',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : route === '/hizmetlerimiz' || route === '/is-ortagimiz-ol' ? 0.9 : 0.7,
  }))
}
