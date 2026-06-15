import { CheckCircle, CreditCard, HeartHandshake, Search, Smartphone, Store, UtensilsCrossed } from 'lucide-react';
import { appStoreUrl, customerWebUrl } from '@/lib/appLinks';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: "On'la Gelsin - Yemek Siparişi Hizmetimiz",
  description: "On'la Gelsin ile yerel restoranları keşfedin, menüleri inceleyin ve sevdiğiniz yemekleri kolayca sipariş verin.",
  path: '/hizmetlerimiz',
  keywords: ['yemek siparişi', 'online yemek siparişi', 'yerel restoranlar', "on'la gelsin"],
})

export default function HizmetlerimizPage() {
  const services = [
    {
      icon: Search,
      title: 'Restoran Keşfi',
      description: 'Yakınınızdaki restoranları, mutfak türlerini ve popüler lezzetleri tek ekranda keşfedin.',
      features: ['Yerel restoranlar', 'Kategori bazlı arama', 'Popüler menüler', 'Kolay filtreleme'],
    },
    {
      icon: UtensilsCrossed,
      title: 'Kolay Yemek Siparişi',
      description: 'Menüleri inceleyin, sepetinizi hazırlayın ve birkaç adımda siparişinizi oluşturun.',
      features: ['Sade sipariş akışı', 'Sepet yönetimi', 'Not ekleme', 'Favori lezzetler'],
    },
    {
      icon: CreditCard,
      title: 'Güvenli Ödeme',
      description: 'Kartla ödeme seçenekleri ve güvenilir altyapı ile yemeğinizi rahatça sipariş verin.',
      features: ['Kartla ödeme', 'Güvenli işlem', 'Şeffaf tutar', 'Kolay ödeme deneyimi'],
    },
    {
      icon: Store,
      title: 'Restoran Paneli',
      description: "Restoranlar menülerini, siparişlerini ve performanslarını On'la Gelsin panelinden yönetir.",
      features: ['Menü yönetimi', 'Sipariş takibi', 'Satış raporları', 'Restoran profili'],
    },
  ];

  const advantages = [
    {
      icon: HeartHandshake,
      title: 'Yerli ve Milli',
      description: "Türkiye'den çıkan, yerel restoranları destekleyen yemek sipariş platformu.",
    },
    {
      icon: Store,
      title: 'Restoran Odaklı',
      description: 'Tüm deneyim yemek siparişi ve restoran iş ortaklığı üzerine tasarlandı.',
    },
    {
      icon: Smartphone,
      title: 'Mobil Öncelikli',
      description: 'Kullanıcılar sevdikleri lezzetlere mobil uygulama üzerinden kolayca ulaşır.',
    },
    {
      icon: CheckCircle,
      title: 'Sade Deneyim',
      description: 'Menüden sepete, ödemeden sipariş durumuna kadar anlaşılır bir akış sunar.',
    },
  ];

  const steps = [
    {
      step: '1',
      title: 'Restoranı Seçin',
      description: 'Uygulamada yakınınızdaki restoranları ve mutfak türlerini keşfedin.',
    },
    {
      step: '2',
      title: 'Menüyü İnceleyin',
      description: 'Sevdiğiniz ürünleri seçin, notlarınızı ekleyin ve sepetinizi hazırlayın.',
    },
    {
      step: '3',
      title: 'Ödeme Yapın',
      description: 'Sipariş özetinizi kontrol edin ve güvenli ödeme adımıyla işlemi tamamlayın.',
    },
    {
      step: '4',
      title: 'Afiyetle Bekleyin',
      description: 'Restoran siparişinizi hazırlarken durum bilgisini uygulamadan takip edin.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Yemek Siparişi Hizmetimiz
            </h1>
            <p className="text-xl text-primary-50">
              On&apos;la Gelsin, kullanıcıları yerel restoranlarla buluşturan yerli yemek sipariş platformudur.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Tek Odağımız Lezzet
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Pazar yeri yapımızla hem kullanıcıların hem restoranların yemek sipariş deneyimini kolaylaştırıyoruz.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Neden On&apos;la Gelsin?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <advantage.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Nasıl Çalışır?
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            On&apos;la Gelsin&apos;den Hemen Sipariş Verin
          </h2>
          <p className="text-primary-50 mb-8 max-w-2xl mx-auto">
            Yerel restoranları keşfetmek ve sevdiğiniz yemekleri sipariş vermek için müşteri web sitesine geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={customerWebUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Yemek Siparişi Ver
            </a>
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors"
            >
              Uygulamayı İndir
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
