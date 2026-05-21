import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Integration from '@/components/Integration'
import MobileApp from '@/components/MobileApp'
import PartnerApplication from '@/components/CourierApplication'
import PromoBar from '@/components/PromoBar'
import SellerPanel from '@/components/SellerPanel'
import RestoranPanel from '@/components/RestoranPanel'

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
      'https://play.google.com/store/apps/details?id=com.teketech.onlagelsin&hl=tr',
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
