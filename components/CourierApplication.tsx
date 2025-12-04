import Link from 'next/link'
import { TrendingUp, Clock, Wallet } from 'lucide-react'

export default function CourierApplication() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Kuryemiz olun
            </h2>
            <p className="text-xl text-primary-100">
              On'la Gelsin uygulaması üzerinden sipariş al, teslimat yap ve kazan!
            </p>
            <p className="text-lg text-primary-50">
              10 dakikada kayıt olun!
            </p>

            {/* Benefits */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 rounded-full p-3 mt-1">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Yüksek Kazanç</h3>
                  <p className="text-primary-100">Kendi çalışma saatlerinizi belirleyin ve daha fazla kazanın</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 rounded-full p-3 mt-1">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Esnek Çalışma</h3>
                  <p className="text-primary-100">İstediğiniz zaman, istediğiniz kadar çalışın</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 rounded-full p-3 mt-1">
                  <Wallet className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Hızlı Ödemeler</h3>
                  <p className="text-primary-100">Kazancınız hemen hesabınıza</p>
                </div>
              </div>
            </div>

            <Link 
              href="/kurye-ol"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-50 transition mt-6"
            >
              Başvur
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/kurye-hero.png" 
                alt="Kurye ol" 
                className="w-full h-auto"
              />
            </div>
            {/* Stats Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 rounded-lg shadow-lg p-4 max-w-xs">
              <p className="text-3xl font-bold text-primary-600">🚀</p>
              <p className="text-sm text-gray-600">Ekibimiz Büyüyor</p>
            </div>
            <div className="absolute -top-6 -right-6 bg-white text-gray-900 rounded-lg shadow-lg p-4 max-w-xs">
              <p className="text-3xl font-bold text-primary-600">⭐</p>
              <p className="text-sm text-gray-600">Yeni Fırsatlar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
