import Link from 'next/link'
import { ArrowRight, BarChart3, Store, TrendingUp, UtensilsCrossed } from 'lucide-react'

export default function PartnerApplication() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              İş ortağımız olun
            </h2>
            <p className="text-xl text-primary-100">
              Restoranınızı On&apos;la Gelsin&apos;e taşıyın, dijitalde daha görünür olun ve yemek siparişlerinden yeni gelir kanalı oluşturun.
            </p>
            <p className="text-lg text-primary-50">
              Başvurunuzu bırakın, ekibimiz restoranınız için en uygun başlangıç adımlarını birlikte planlasın.
            </p>

            {/* Benefits */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 rounded-full p-3 mt-1">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Yeni müşterilere ulaşın</h3>
                  <p className="text-primary-100">Dijital sipariş kanalınızı On&apos;la Gelsin kullanıcılarıyla büyütün.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 rounded-full p-3 mt-1">
                  <UtensilsCrossed className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Menünüz hep güncel kalsın</h3>
                  <p className="text-primary-100">Ürünlerinizi, fiyatlarınızı ve restoran bilgilerinizi kolayca yönetin.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 rounded-full p-3 mt-1">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Performansınızı görün</h3>
                  <p className="text-primary-100">Sipariş ve satış verilerinizi restoran panelinden takip edin.</p>
                </div>
              </div>
            </div>

            <Link
              href="/is-ortagimiz-ol"
              className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-50 transition group mt-6"
            >
              Başvuru Yap
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&h=500&fit=crop"
                alt="On'la Gelsin restoran iş ortaklığı"
                className="w-full h-auto"
              />
            </div>
            {/* Stats Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 rounded-lg shadow-lg p-4 max-w-xs">
              <Store className="w-8 h-8 text-primary-600 mb-2" />
              <p className="text-sm text-gray-600">Restoranınız dijitalde büyüsün</p>
            </div>
            <div className="absolute -top-6 -right-6 bg-white text-gray-900 rounded-lg shadow-lg p-4 max-w-xs">
              <UtensilsCrossed className="w-8 h-8 text-primary-600 mb-2" />
              <p className="text-sm text-gray-600">Lezzetleriniz daha çok kişiye ulaşsın</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
