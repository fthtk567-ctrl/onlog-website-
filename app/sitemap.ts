import { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/indir',
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
    '/mesafeli-satis-sozlesmesi',
    '/teslimat-ve-iade',
    '/hesap-silme',
    '/veri-silme',
  ]

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : route === '/hizmetlerimiz' || route === '/is-ortagimiz-ol' ? 0.9 : 0.7,
  }))
}
