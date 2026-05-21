import Link from 'next/link'
import { Smartphone, Store, UtensilsCrossed } from 'lucide-react'

export default function Integration() {
  const googlePlayUrl = 'https://play.google.com/store/apps/details?id=com.teketech.onlagelsin&hl=tr'

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Müşterileriniz için harika bir yemek siparişi deneyimi sunun
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            On&apos;la Gelsin, restoranların dijitalde görünür olmasını ve kullanıcıların aradığı lezzete kolayca ulaşmasını sağlar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link
            href="/restoran-paneli"
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div className="p-8">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-primary-600 transition">
                <Store className="w-8 h-8 text-primary-600 group-hover:text-white transition" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Restoran paneli</h3>
              <p className="text-gray-600 mb-4">
                Siparişlerinizi, menünüzü ve restoran bilgilerinizi tek yerden yönetin.
              </p>
              <span className="text-primary-600 font-semibold group-hover:underline">
                Daha fazla bilgi edinin
              </span>
            </div>
            <div className="h-2 bg-gradient-to-r from-primary-500 to-primary-600"></div>
          </Link>

          <Link
            href="/is-ortagimiz-ol"
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div className="p-8">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-primary-600 transition">
                <UtensilsCrossed className="w-8 h-8 text-primary-600 group-hover:text-white transition" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Menü görünürlüğü</h3>
              <p className="text-gray-600 mb-4">
                Lezzetlerinizi uygulamada sergileyin, yeni müşterilere daha kolay ulaşın.
              </p>
              <span className="text-primary-600 font-semibold group-hover:underline">
                İş ortağı olun
              </span>
            </div>
            <div className="h-2 bg-gradient-to-r from-primary-500 to-primary-600"></div>
          </Link>

          <a
            href={googlePlayUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-8">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-primary-600 transition">
                <Smartphone className="w-8 h-8 text-primary-600 group-hover:text-white transition" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Mobil deneyim</h3>
              <p className="text-gray-600 mb-4">
                Kullanıcılar restoranları keşfeder, sepetini oluşturur ve güvenle sipariş verir.
              </p>
              <span className="text-primary-600 font-semibold group-hover:underline">
                Uygulamayı indirin
              </span>
            </div>
            <div className="h-2 bg-gradient-to-r from-primary-500 to-primary-600"></div>
          </a>
        </div>
      </div>
    </section>
  )
}
