import Link from 'next/link'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function Iletisim() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Bize Ulaşın</h1>
          <p className="text-xl text-green-100">
            Size yardımcı olmaktan mutluluk duyarız!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">İletişim Bilgileri</h2>
                <p className="text-gray-600 mb-8">
                  Sorularınız, önerileriniz veya destek talepleriniz için bize ulaşabilirsiniz. Ekibimiz size en kısa sürede dönüş yapacaktır.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Phone */}
                <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full p-3">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Telefon</h3>
                    <p className="text-gray-600 text-sm mb-1">Müşteri Danışmanı:</p>
                    <a href="tel:+905342447504" className="text-green-600 hover:underline font-medium">
                      +90 534 244 7504
                    </a>
                    <p className="text-gray-600 text-sm mt-2 mb-1">Muhasebe:</p>
                    <a href="tel:+905301398395" className="text-green-600 hover:underline font-medium">
                      +90 530 139 8395
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full p-3">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">E-posta</h3>
                    <p className="text-gray-600 text-sm mb-1">Destek:</p>
                    <a href="mailto:destek@onlog.com.tr" className="text-green-600 hover:underline font-medium block">
                      destek@onlog.com.tr
                    </a>
                    <p className="text-gray-600 text-sm mt-2 mb-1">Muhasebe:</p>
                    <a href="mailto:muhasebe@onlog.com.tr" className="text-green-600 hover:underline font-medium block">
                      muhasebe@onlog.com.tr
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full p-3">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Adres</h3>
                    <p className="text-gray-600">
                      Bakkalbaşı Mah. Mustafa Kemal Cad.<br />
                      No: 10/A Çumra / KONYA
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full p-3">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Çalışma Saatleri</h3>
                    <p className="text-gray-600">
                      Hafta İçi: 09:00 - 22:00<br />
                      Hafta Sonu: 10:00 - 20:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Mesaj Gönderin</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Ad Soyad *</label>
                    <input 
                      type="text" 
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Adınız Soyadınız"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Telefon *</label>
                    <input 
                      type="tel" 
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="+90 5XX XXX XX XX"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">E-posta *</label>
                  <input 
                    type="email" 
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="ornek@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Konu *</label>
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>Genel Bilgi</option>
                    <option>Kurumsal İşbirliği</option>
                    <option>Teknik Destek</option>
                    <option>Şikayet</option>
                    <option>Diğer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Mesajınız *</label>
                  <textarea 
                    rows={6}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Mesajınızı buraya yazın..."
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  Gönder
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Bizi Ziyaret Edin</h2>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Harita buraya eklenecek</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Hemen Teslimat Başlatın!</h2>
          <p className="text-xl text-green-100 mb-8">
            Kurye çağırmak veya fiyat teklifi almak için hemen iletişime geçin
          </p>
          <Link 
            href="/kurye-cagir"
            className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition"
          >
            Kurye Çağır
          </Link>
        </div>
      </section>
    </main>
  )
}
