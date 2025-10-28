import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Integration from '@/components/Integration'
import MobileApp from '@/components/MobileApp'
import CourierApplication from '@/components/CourierApplication'
import PromoBar from '@/components/PromoBar'

export default function Home() {
  return (
    <main>
      <PromoBar />
      <Hero />
      <Services />
      <Integration />
      <MobileApp />
      <CourierApplication />
    </main>
  )
}
