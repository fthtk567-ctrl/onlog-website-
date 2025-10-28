import Link from 'next/link'
import { Globe, Download, ChartBar, Package, Clock } from 'lucide-react'

export default function SellerPanel() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Satıcı Paneli
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Siparişlerinizi yönetin, teslimatları takip edin ve işinizi büyütün!
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="flex items-start space-x-4">
            <div className="bg-green-100 rounded-full p-3">
              <ChartBar className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Detaylı Raporlar</h3>
              <p className="text-sm text-gray-600">Tüm teslimatlarınızı analiz edin</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-green-100 rounded-full p-3">
              <Package className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Sipariş Yönetimi</h3>
              <p className="text-sm text-gray-600">Tüm siparişleriniz tek ekranda</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-green-100 rounded-full p-3">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Anlık Takip</h3>
              <p className="text-sm text-gray-600">Kuryenizi canlı izleyin</p>
            </div>
          </div>
        </div>

        {/* Platform Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Web Panel */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-100 hover:border-green-300 transition">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 rounded-full p-6">
                <Globe className="w-12 h-12 text-green-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-3">
              Web Paneli
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Tarayıcınızdan hemen erişin, kurulum gerektirmez
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-sm text-gray-600">
                <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Kurulum gerektirmez
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Her cihazdan erişim
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Otomatik güncellemeler
              </li>
            </ul>
            <Link
              href="https://panel.onlog.com.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-600 text-white text-center py-4 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Hemen Başla →
            </Link>
          </div>

          {/* Windows App */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-100 hover:border-green-300 transition">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 rounded-full p-6">
                <Download className="w-12 h-12 text-green-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-3">
              Windows Uygulaması
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Masaüstü uygulamasını indirin, daha hızlı çalışın
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-sm text-gray-600">
                <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Daha hızlı performans
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Çevrimdışı çalışma
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Masaüstü bildirimleri
              </li>
            </ul>
            <a
              href="/downloads/OnlogMerchantPanel_Setup_v1.0.0.exe"
              download
              className="block w-full bg-gray-900 text-white text-center py-4 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              <span className="flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Windows İndir v1.0.0
              </span>
            </a>
            <p className="text-xs text-gray-500 text-center mt-3">
              Windows 10/11 uyumlu
            </p>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Sorularınız mı var? <Link href="/iletisim" className="text-green-600 hover:underline font-semibold">Bize ulaşın</Link>
          </p>
        </div>
      </div>
    </section>
  )
}
