import Link from 'next/link'
import { Code, Smartphone, Zap } from 'lucide-react'

export default function Integration() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Müşterileriniz için harika bir teslimat deneyimi sağlayabilirsiniz
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* API Integration */}
          <Link 
            href="/api-entegrasyon"
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div className="p-8">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-primary-600 transition">
                <Code className="w-8 h-8 text-primary-600 group-hover:text-white transition" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">API entegrasyonu</h3>
              <p className="text-gray-600 mb-4">
                Yazılımı hazır, sipariş verme sistemine sahip işletmeler için idealdir.
              </p>
              <span className="text-primary-600 font-semibold group-hover:underline">
                Daha fazla bilgi edinin ›
              </span>
            </div>
            <div className="h-2 bg-gradient-to-r from-primary-500 to-primary-600"></div>
          </Link>

          {/* Mobile App */}
          <a 
            href="#"
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div className="p-8">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-primary-600 transition">
                <Smartphone className="w-8 h-8 text-primary-600 group-hover:text-white transition" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Site ve uygulama</h3>
              <p className="text-gray-600 mb-4">
                Teslimat planlamanızı hızlı ve basit bir şekilde sitemiz ya da uygulama üzerinden yapın.
              </p>
              <span className="text-primary-600 font-semibold group-hover:underline">
                Bir istek bırakın ›
              </span>
            </div>
            <div className="h-2 bg-gradient-to-r from-primary-500 to-primary-600"></div>
          </a>

          {/* Modules */}
          <a 
            href="#"
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-8">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-primary-600 transition">
                <Zap className="w-8 h-8 text-primary-600 group-hover:text-white transition" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Sepette teslimat</h3>
              <p className="text-gray-600 mb-4">
                E-ticaret platformunuza entegre modüller ile müşterileriniz ödeme yaparken teslimat seçeneği sunun.
              </p>
              <span className="text-primary-600 font-semibold group-hover:underline">
                Shopify modülü ›
              </span>
            </div>
            <div className="h-2 bg-gradient-to-r from-primary-500 to-primary-600"></div>
          </a>
        </div>
      </div>
    </section>
  )
}
