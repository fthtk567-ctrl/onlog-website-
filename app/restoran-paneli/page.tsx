import { ArrowRight, BarChart3, CheckCircle, Clock, Smartphone, Store, TrendingUp, Users, UtensilsCrossed } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "On'la Gelsin - Restoran Paneli | Online Yemek Siparişi Yönetimi",
  description: 'Restoranınız için online yemek siparişi yönetim paneli. Menü yönetimi, sipariş takibi, analiz raporları ve daha fazlası.',
}

export default function RestoranPaneliPage() {
  const features = [
    {
      icon: UtensilsCrossed,
      title: 'Menü Yönetimi',
      description: 'Ürünlerinizi, kategorilerinizi, fiyatlarınızı ve müsaitlik durumlarını kolayca güncelleyin.',
    },
    {
      icon: Store,
      title: 'Restoran Profili',
      description: 'Çalışma saatleri, görseller, açıklamalar ve restoran bilgilerinizi tek yerden yönetin.',
    },
    {
      icon: Clock,
      title: 'Sipariş Akışı',
      description: 'Gelen siparişleri görün, hazırlık durumunu güncelleyin ve operasyonunuzu düzenli tutun.',
    },
    {
      icon: Smartphone,
      title: 'Mobil Uyumlu',
      description: 'Panelinizi farklı cihazlardan takip ederek yoğun saatlerde hızlı aksiyon alın.',
    },
    {
      icon: Users,
      title: 'Müşteri İçgörüsü',
      description: 'Popüler ürünleri, tekrar eden siparişleri ve müşteri tercihlerini daha iyi anlayın.',
    },
    {
      icon: TrendingUp,
      title: 'Satış Artışı',
      description: 'Online sipariş kanalıyla restoranınızın dijital görünürlüğünü ve satış hacmini artırın.',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Başvurun',
      description: 'Restoran bilgilerinizi paylaşın, ekibimiz sizinle iletişime geçsin.',
    },
    {
      number: '02',
      title: 'Menünüzü Ekleyin',
      description: 'Ürünlerinizi, kategorilerinizi ve fiyatlarınızı panele tanımlayın.',
    },
    {
      number: '03',
      title: 'Sipariş Almaya Başlayın',
      description: "On'la Gelsin kullanıcılarına görünür olun ve online yemek siparişlerinizi yönetin.",
    },
  ];

  const pricingFeatures = [
    'Sınırsız menü ürünü',
    'Kategori ve fiyat yönetimi',
    'Sipariş ekranı',
    'Hazırlık durumu güncelleme',
    'Restoran profil yönetimi',
    'Satış ve ürün raporları',
    'Mobil uyumlu panel',
    'Teknik destek',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Store className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Restoran Paneli
            </h1>
            <p className="text-xl text-primary-50 mb-8">
              Restoranınızı dijital çağa taşıyın. Menünüzü yönetin, online yemek siparişleri alın ve satışlarınızı büyütün.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://panel.onlagelsin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-50 transition group"
              >
                Panele Giriş Yap
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
              </a>
              <Link
                href="/is-ortagimiz-ol"
                className="inline-flex items-center justify-center bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-800 transition"
              >
                İş Ortağı Başvurusu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Restoranınız İçin Güçlü Özellikler
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Online yemek siparişlerini yönetmek için ihtiyacınız olan temel araçlar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition">
                  <div className="bg-primary-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nasıl Başlanır?
            </h2>
            <p className="text-xl text-gray-600">
              3 adımda On&apos;la Gelsin&apos;de yerinizi alın.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-600 text-white text-3xl font-bold w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Esnek İş Ortaklığı
              </h2>
              <p className="text-xl text-gray-600">
                Restoranınız için sade, anlaşılır ve büyümeye açık yapı.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200 rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <div className="text-5xl font-bold text-primary-600 mb-2">
                  %5
                </div>
                <p className="text-gray-600">Sipariş başına komisyon</p>
                <p className="text-sm text-gray-500 mt-2">Detaylar restoranınızın çalışma modeline göre netleştirilir.</p>
              </div>

              <div className="space-y-3 mb-8">
                {pricingFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/is-ortagimiz-ol"
                className="block w-full bg-primary-600 text-white text-center py-4 rounded-lg font-semibold hover:bg-primary-700 transition"
              >
                İş Ortağı Başvurusu Yap
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Restoranınızı Büyütmeye Hazır Mısınız?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            On&apos;la Gelsin&apos;de yerinizi alın, lezzetlerinizi daha fazla kullanıcıyla buluşturun.
          </p>
          <Link
            href="/is-ortagimiz-ol"
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition text-lg"
          >
            Başvurunuzu Bırakın
          </Link>
        </div>
      </section>
    </div>
  );
}
