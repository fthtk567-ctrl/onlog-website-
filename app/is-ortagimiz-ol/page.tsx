import { BarChart3, Bike, CheckCircle, Clock, MapPin, PackageCheck, Phone, ShieldCheck, Store, TrendingUp, UtensilsCrossed } from 'lucide-react';

export const metadata = {
  title: "On'la Gelsin - İş Ortağımız Olun ve Kurye Olun",
  description: "Restoranınızı On'la Gelsin'e taşıyın veya yemek siparişlerimizi taşıyacak kurye ağına katılın.",
}

export default function IsOrtagimizOlPage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Dijitalde Büyüyün',
      description: "Restoranınızı On'la Gelsin kullanıcılarına açarak yeni sipariş kanalı oluşturun.",
      highlight: true,
    },
    {
      icon: Store,
      title: 'Restoran Profiliniz',
      description: 'Menünüz, çalışma saatleriniz ve restoran bilgileriniz uygulamada görünür olsun.',
    },
    {
      icon: UtensilsCrossed,
      title: 'Kolay Menü Yönetimi',
      description: 'Ürünlerinizi, fiyatlarınızı ve kategorilerinizi restoran panelinden güncelleyin.',
    },
    {
      icon: BarChart3,
      title: 'Satış Raporları',
      description: 'Sipariş performansınızı, popüler ürünlerinizi ve gelir akışınızı takip edin.',
    },
  ];

  const benefitsList = [
    'Online yemek siparişi kanalı',
    'Menü ve fiyat yönetimi',
    'Restoran profil görünürlüğü',
    'Sipariş ekranı',
    'Satış ve ürün raporları',
    'Mobil uyumlu yönetim',
    'Teknik destek',
    'Yerli platform avantajı',
  ];

  const courierBenefits = [
    {
      icon: Bike,
      title: 'Yemek Siparişlerini Taşıyın',
      description: "On'la Gelsin restoranlarından çıkan siparişleri müşterilere ulaştıran kurye ağımıza katılın.",
    },
    {
      icon: MapPin,
      title: 'Bölgenizde Çalışın',
      description: 'Başvurduğunuz şehir ve ilçeye göre operasyon ekibimiz uygun çalışma alanını değerlendirir.',
    },
    {
      icon: Clock,
      title: 'Esnek Çalışma Planı',
      description: 'Müsaitlik durumunuzu ve çalışmak istediğiniz saat aralıklarını başvuru sırasında paylaşabilirsiniz.',
    },
    {
      icon: ShieldCheck,
      title: 'Operasyon Desteği',
      description: 'Teslimat sürecinde sipariş, rota ve operasyon takibi için kurye uygulaması kullanılır.',
    },
  ];

  const steps = [
    {
      number: '1',
      title: 'Başvurunuzu Bırakın',
      description: 'Restoran veya kurye başvurunuz için iletişim ve çalışma bilgilerinizi form üzerinden paylaşın.',
    },
    {
      number: '2',
      title: 'Ekibimiz Sizi Arasın',
      description: 'Çalışma modelini, bölge uygunluğunu ve ihtiyaç duyulan kurulum adımlarını birlikte netleştirelim.',
    },
    {
      number: '3',
      title: 'Operasyona Başlayın',
      description: "Restoran profiliniz yayına alınsın veya kurye hesabınız hazırlanarak On'la Gelsin operasyonuna katılın.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              İş Ortağımız Olun
            </h1>
            <p className="text-2xl text-primary-50 mb-4">
              Restoranınızı Büyütün veya Kurye Ağımıza Katılın
            </p>
            <p className="text-xl text-primary-100 mb-8">
              Yerli yemek sipariş platformumuzda yerinizi alın; lezzetleri müşterilerle buluşturan operasyonun parçası olun.
            </p>
            <a
              href="#basvuru"
              className="inline-block bg-white text-primary-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-primary-50 transition-colors shadow-lg"
            >
              Başvuru Formuna Git
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Highlight */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Neden On&apos;la Gelsin İş Ortağı Olmalısınız?
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Restoranlar ve kurye operasyonu için sade, ölçülebilir ve yemek siparişine odaklı çalışma modeli.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-8 ${
                    item.highlight
                      ? 'bg-gradient-to-br from-primary-600 to-primary-500 text-white shadow-2xl scale-105'
                      : 'bg-gray-50 border-2 border-gray-200'
                  }`}
                >
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                      item.highlight ? 'bg-white/20' : 'bg-primary-100'
                    }`}
                  >
                    <item.icon
                      className={`w-8 h-8 ${
                        item.highlight ? 'text-white' : 'text-primary-600'
                      }`}
                    />
                  </div>
                  <h3
                    className={`text-2xl font-bold mb-3 ${
                      item.highlight ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={
                      item.highlight ? 'text-primary-100' : 'text-gray-600'
                    }
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courier Opportunity */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-semibold mb-4">
                <PackageCheck className="w-5 h-5" />
                Kurye Ol
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Yemek Siparişlerimizi Taşıyacak Kuryeler Arıyoruz
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Motorlu kurye olarak On&apos;la Gelsin operasyonuna katılabilir, restoranlardan çıkan siparişlerin
                müşterilere zamanında ve güvenli şekilde ulaşmasına destek olabilirsiniz.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courierBenefits.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Restoranınız İçin Sunulanlar
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {benefitsList.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm"
                >
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Nasıl Başlarsınız?
            </h2>
            <p className="text-center text-primary-100 mb-12 text-lg">
              3 adımda restoran veya kurye başvurunuzu tamamlayın.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-primary-100 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="basvuru" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
                Restoran İş Ortaklığı ve Kurye Başvuru Formu
              </h2>
              <p className="text-gray-600 text-center mb-8">
                Başvuru türünüzü seçin, ekibimiz en kısa sürede sizinle iletişime geçsin.
              </p>

              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Başvuru Türü *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Başvuru türünüzü seçin
                    </option>
                    <option>Restoran İş Ortağı Olmak İstiyorum</option>
                    <option>Kurye Olmak İstiyorum</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Yetkili Ad Soyad *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                      placeholder="05XX XXX XX XX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    E-posta *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                    placeholder="ornek@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Restoran Adı veya Kurye Araç Tipi *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                    placeholder="Örn. Lezzet Lokantası veya motosiklet"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Şehir *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                      placeholder="Şehir"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      İlçe *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                      placeholder="İlçe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Mutfak Türü veya Çalışma Tercihi *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                    placeholder="Örn. pide, burger veya hafta içi akşam saatleri"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Mesajınız
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                    placeholder="Restoranınız, araç durumunuz veya çalışma tercihleriniz hakkında eklemek istediğiniz bilgiler"
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    required
                    className="mt-1"
                    id="kvkk"
                  />
                  <label htmlFor="kvkk" className="text-sm text-gray-600">
                    <a href="/kvkk" className="text-primary-600 hover:underline">
                      KVKK Aydınlatma Metni
                    </a>
                    &apos;ni okudum ve kabul ediyorum.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-primary-700 transition-colors shadow-lg"
                >
                  Başvurumu Gönder
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                <p className="text-gray-600 mb-4">
                  Sorularınız mı var? WhatsApp üzerinden bize ulaşın:
                </p>
                <a
                  href="https://wa.me/905374291076"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-600 font-bold text-xl hover:text-primary-700"
                >
                  <Phone className="w-6 h-6" />
                  +90 537 429 1076
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
