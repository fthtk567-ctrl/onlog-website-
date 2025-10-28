import Link from 'next/link'
import { ArrowRight, Package, Clock, Shield } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              OnLog ile gün içinde adresinde!
            </h1>
            <p className="text-xl text-gray-600">
              İster bireysel ister kurumsal gönderileriniz için şehir içi hızlı kurye teslimat hizmetimizle tanışın!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="/kurye-cagir"
                className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition group"
              >
                Kurye Çağır
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
              </Link>
              <div className="text-center sm:text-left">
                <p className="text-3xl font-bold text-green-600">136.90 ₺</p>
                <p className="text-sm text-gray-600">&apos;den başlayan fiyatlarla</p>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                  <Package className="w-8 h-8 text-green-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">Güvenli Teslimat</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">Hızlı Servis</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">Sigortalı Gönderim</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop" 
                alt="Kurye teslimat hizmeti" 
                className="w-full h-auto"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 rounded-full p-3">
                  <Package className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Teslimat Tamamlandı</p>
                  <p className="text-sm text-gray-600">2 dakika önce</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
