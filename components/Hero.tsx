import { ArrowRight, CreditCard, Smartphone, Store, UtensilsCrossed } from 'lucide-react'
import { appStoreUrl, customerWebUrl } from '@/lib/appLinks'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              On&apos;la Gelsin ile sevdiğiniz yemekler cebinizde
            </h1>
            <p className="text-xl text-gray-600">
              Yerli ve milli yemek sipariş deneyimiyle, bulunduğunuz bölgedeki restoranları keşfedin ve lezzetli yemeklere kolayca ulaşın.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href={customerWebUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition group"
              >
                Yemek Siparişi Ver
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
              </a>
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-50 transition"
              >
                <Smartphone className="mr-2 w-5 h-5" />
                Uygulamayı İndir
              </a>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                  <UtensilsCrossed className="w-8 h-8 text-primary-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">Lezzetli Seçimler</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                  <Store className="w-8 h-8 text-primary-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">Yerel Restoranlar</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                  <CreditCard className="w-8 h-8 text-primary-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">Kolay Ödeme</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop" 
                alt="On'la Gelsin yemek sipariş deneyimi" 
                className="w-full h-auto"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="bg-primary-100 rounded-full p-3">
                  <UtensilsCrossed className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Siparişiniz hazırlanıyor</p>
                  <p className="text-sm text-gray-600">Sevdiğiniz lezzetler yolda</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
