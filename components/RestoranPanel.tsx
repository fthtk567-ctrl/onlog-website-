import Link from 'next/link';
import { Store, ShoppingCart, BarChart3, ArrowRight } from 'lucide-react';

export default function RestoranPanel() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Store className="w-4 h-4 mr-2" />
              Restoran İşletmecileri İçin
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Restoranınızı Dijital Çağa Taşıyın
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              Online sipariş alın, otomatik kurye ataması yapın, dijital satış kanalınızı açın ve gelir fırsatlarınızı artırın!
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-primary-600 rounded-full p-2 mr-4 flex-shrink-0">
                  <ShoppingCart className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Kolay Sipariş Yönetimi</h3>
                  <p className="text-gray-600">Tüm siparişlerinizi tek panelden yönetin</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-600 rounded-full p-2 mr-4 flex-shrink-0">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Detaylı Raporlar</h3>
                  <p className="text-gray-600">Satış analizleri ve gelir raporları</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary-600 rounded-full p-2 mr-4 flex-shrink-0">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Hızlı Kurye Entegrasyonu</h3>
                  <p className="text-gray-600">Otomatik kurye ataması ve teslimat takibi</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/restoran-paneli"
                className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition group"
              >
                Daha Fazla Bilgi
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
              </Link>
              
              <a
                href="https://panel.onlagelsin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-50 transition"
              >
                Panele Giriş
              </a>
            </div>
          </div>

          {/* Right Image/Stats */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <img
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=400&fit=crop"
                alt="Restoran"
                className="rounded-lg w-full h-64 object-cover mb-6"
              />
              
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">📈</div>
                  <div className="text-sm text-gray-600">Satış Artışı</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">⚡</div>
                  <div className="text-sm text-gray-600">Hızlı Kurulum</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">🎯</div>
                  <div className="text-sm text-gray-600">Kolay Yönetim</div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-primary-600 text-white px-6 py-3 rounded-full shadow-lg">
              <div className="text-2xl font-bold">Ücretsiz</div>
              <div className="text-xs">Kurulum</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
