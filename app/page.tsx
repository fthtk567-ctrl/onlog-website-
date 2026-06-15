import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Integration from '@/components/Integration'
import MobileApp from '@/components/MobileApp'
import PartnerApplication from '@/components/CourierApplication'
import PromoBar from '@/components/PromoBar'
import SellerPanel from '@/components/SellerPanel'
import RestoranPanel from '@/components/RestoranPanel'
import WebOrderCta from '@/components/WebOrderCta'
import { appStoreUrl, customerWebUrl, googlePlayUrl } from '@/lib/appLinks'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: "On'la Gelsin - Yerli Yemek Sipariş Platformu",
  description:
    "On'la Gelsin ile yerel restoranları keşfedin, webden veya mobil uygulamadan sevdiğiniz yemekleri kolayca sipariş verin.",
  path: '/',
  keywords: ['yemek sipariş', 'online yemek', 'webden yemek siparişi', "on'la gelsin", 'yerli yemek uygulaması'],
})

export default function Home() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://onlagelsin.com',
    name: "On'la Gelsin",
    url: 'https://onlagelsin.com',
    description: 'Yerli ve milli yemek sipariş platformu.',
    publisher: {
      '@type': 'Organization',
      name: "On'la Gelsin",
      logo: 'https://onlagelsin.com/logo.svg',
    },
    sameAs: [
      'https://panel.onlagelsin.com',
      customerWebUrl,
      appStoreUrl,
      googlePlayUrl,
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <main>
        <PromoBar />
        <Hero />
        <WebOrderCta />
        <Services />
        <RestoranPanel />
        <SellerPanel />
        <Integration />
        <MobileApp />
        <PartnerApplication />
      </main>
    </>
  )
}
