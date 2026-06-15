import Link from 'next/link'
import { CreditCard, HeartHandshake, Store, UtensilsCrossed } from 'lucide-react'
import { customerWebUrl } from '@/lib/appLinks'

const services = [
  {
    title: 'Yemek Siparişi',
    description: 'Sevdiğiniz restoranlardan ana yemek, tatlı, içecek ve atıştırmalık seçeneklerini kolayca sipariş edin.',
    icon: UtensilsCrossed,
    link: customerWebUrl,
    external: true,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
  },
  {
    title: 'Yerel Restoranlar',
    description: 'Mahallenizdeki lezzetleri keşfedin; yerel işletmeleri destekleyen yerli bir platformda sipariş verin.',
    icon: Store,
    link: '/hakkimizda',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&h=300&fit=crop',
  },
  {
    title: 'Restoran İş Ortaklığı',
    description: "Restoranınızı On'la Gelsin'e taşıyın, dijital sipariş kanalınızı büyütün ve yeni müşterilere ulaşın.",
    icon: HeartHandshake,
    link: '/is-ortagimiz-ol',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=400&h=300&fit=crop',
  },
  {
    title: 'Güvenli Ödeme',
    description: 'Kartla ödeme seçenekleri, sade sipariş akışı ve kullanıcı dostu deneyimle yemeğinizi rahatça seçin.',
    icon: CreditCard,
    link: '/hizmetlerimiz',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Yemek siparişinde odaklandığımız deneyim
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            On&apos;la Gelsin yalnızca lezzete odaklanır: kullanıcılar için kolay sipariş, restoranlar için güçlü dijital görünürlük.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link
                key={index}
                href={service.link}
                target={service.external ? '_blank' : undefined}
                rel={service.external ? 'noopener noreferrer' : undefined}
                className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
