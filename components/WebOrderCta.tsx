import { ArrowRight, Clock3, MapPin, ShieldCheck, UtensilsCrossed } from 'lucide-react'
import { customerWebUrl } from '@/lib/appLinks'

const highlights = [
  {
    icon: MapPin,
    title: 'Yakındaki restoranlar',
    description: 'Bölgenizdeki lezzetleri webden hızlıca keşfedin.',
  },
  {
    icon: Clock3,
    title: 'Hızlı sepet',
    description: 'Menüyü inceleyin, ürünleri seçin ve siparişe ilerleyin.',
  },
  {
    icon: ShieldCheck,
    title: 'Güvenli ödeme',
    description: 'Sipariş özetini kontrol ederek ödeme adımına geçin.',
  },
]

export default function WebOrderCta() {
  return (
    <section className="bg-primary-900 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-primary-100">
              <UtensilsCrossed className="h-4 w-4" />
              Webden sipariş
            </div>
            <h2 className="mt-5 text-3xl md:text-5xl font-bold leading-tight">
              Uygulama indirmeden de On&apos;la Gelsin&apos;den yemek siparişi verin
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-primary-100">
              Müşteri web sitesinde restoranları görüntüleyin, menüleri inceleyin ve sevdiğiniz lezzetleri birkaç adımda sipariş edin.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={customerWebUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-lg font-semibold text-primary-700 transition hover:bg-primary-50 group"
              >
                Yemek Siparişi Ver
                <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
              </a>
              <a
                href="/is-ortagimiz-ol"
                className="inline-flex items-center justify-center rounded-lg border border-white/40 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
              >
                Restoranınızı Ekleyin
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            {highlights.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="flex gap-4 rounded-lg bg-white p-5 text-gray-900 shadow-xl">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-100">
                    <Icon className="h-6 w-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
