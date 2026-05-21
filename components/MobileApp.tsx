import { Smartphone, Scan } from 'lucide-react'

export default function MobileApp() {
  const googlePlayUrl = 'https://play.google.com/store/apps/details?id=com.teketech.onlagelsin&hl=tr'

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              On&apos;la Gelsin uygulamasıyla sevdiğiniz lezzetleri sipariş verin
            </h2>
            <p className="text-xl text-gray-600">
              Yerli ve milli yemek sipariş deneyimini cebinize taşıyın. Restoranları keşfedin, sepetinizi hazırlayın ve kolayca sipariş verin.
            </p>

            {/* QR Code */}
            <div className="flex items-center space-x-6">
              <div className="bg-gray-100 p-4 rounded-xl">
                <div className="w-32 h-32 bg-white border-4 border-primary-600 rounded-lg flex items-center justify-center">
                  <Scan className="w-16 h-16 text-primary-600" />
                </div>
              </div>
              <div className="space-y-3">
                <span
                  className="block"
                  aria-label="App Store yakında"
                >
                  <img 
                    src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/tr-tr?size=250x83" 
                    alt="App Store'dan İndir" 
                    className="h-12 opacity-60"
                  />
                </span>
                <a 
                  href={googlePlayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img 
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/tr_badge_web_generic.png" 
                    alt="Google Play'den İndir" 
                    className="h-12"
                  />
                </a>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="flex items-start space-x-3">
                <div className="bg-primary-100 rounded-full p-2 mt-1">
                  <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Hızlı Sipariş</p>
                  <p className="text-sm text-gray-600">Birkaç dokunuşla sepetinizi oluşturun</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-primary-100 rounded-full p-2 mt-1">
                  <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Restoran Keşfi</p>
                  <p className="text-sm text-gray-600">Yakınınızdaki lezzetleri görün</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-primary-100 rounded-full p-2 mt-1">
                  <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Kolay Ödeme</p>
                  <p className="text-sm text-gray-600">Güvenli ödeme seçenekleri</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-primary-100 rounded-full p-2 mt-1">
                  <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Yerli Platform</p>
                  <p className="text-sm text-gray-600">Türkiye&apos;den çıkan yemek deneyimi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image - Phone Mockup */}
          <div className="relative">
            <div className="relative mx-auto w-full max-w-sm">
              <img 
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=800&fit=crop" 
                alt="On&apos;la Gelsin mobil uygulama" 
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
