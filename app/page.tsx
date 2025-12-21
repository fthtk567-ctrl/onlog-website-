import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Integration from '@/components/Integration'
import MobileApp from '@/components/MobileApp'
import CourierApplication from '@/components/CourierApplication'
import PromoBar from '@/components/PromoBar'
import SellerPanel from '@/components/SellerPanel'
import RestoranPanel from '@/components/RestoranPanel'

export default function Home() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://onlagelsin.com',
    name: "On'la Gelsin",
    image: 'https://onlagelsin.com/logo.svg',
    logo: 'https://onlagelsin.com/logo.svg',
    url: 'https://onlagelsin.com',
    telephone: '+90-534-244-7504',
    email: 'destek@onlagelsin.com',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      addressCountry: 'TR',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    sameAs: [
      'https://panel.onlagelsin.com',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <main>
        <PromoBar />
        <RestoranPanel />
        <Hero />
        <Services />
        <SellerPanel />
        <Integration />
        <MobileApp />
        <CourierApplication />
      </main>
    </>
  )
}
