import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Integration from '@/components/Integration'
import MobileApp from '@/components/MobileApp'
import CourierApplication from '@/components/CourierApplication'
import PromoBar from '@/components/PromoBar'
import SellerPanel from '@/components/SellerPanel'
import RestoranPanel from '@/components/RestoranPanel'

export default function Home() {
  return (
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
  )
}
