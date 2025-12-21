import { Store, TrendingUp, Clock, Users, Smartphone, BarChart3, ShoppingCart, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "On'la Gelsin - Restoran Paneli | Online Sipariş Yönetimi",
  description: 'Restoranınız için güçlü online sipariş yönetim paneli. Menü yönetimi, sipariş takibi, analiz raporları ve daha fazlası.',
}

export default function RestoranPaneliPage() {
  const features = [
    {
      icon: ShoppingCart,
      title: 'Kolay Sipariş Yönetimi',
      description: 'Gelen siparişleri tek bir panelden yönetin, anlık bildirimler alın'
    },
    {
      icon: BarChart3,
      title: 'Detaylı Raporlar',
      description: 'Satış analizleri, popüler ürünler, gelir raporları'
    },
    {
      icon: Clock,
      title: 'Hızlı Kurye Entegrasyonu',
      description: 'Otomatik kurye ataması, teslimat takibi'
    },
    {
      icon: Smartphone,
      title: 'Mobil Uyumlu',
      description: 'Her cihazdan erişim, mobil uygulamalar'
    },
    {
      icon: Users,
      title: 'Müşteri Yönetimi',
      description: 'Müşteri profilleri, sipariş geçmişi, sadakat programları'
    },
    {
      icon: TrendingUp,
      title: 'Satış Artışı',
      description: 'Online sipariş ile satışlarınızı %300 artırın'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Kayıt Olun',
      description: 'Hızlı ve kolay kayıt formu ile başlayın'
    },
    {
      number: '02',
      title: 'Menünüzü Ekleyin',
      description: 'Ürünlerinizi, kategorilerinizi ve fiyatlarınızı girin'
    },
    {
      number: '03',
      title: 'Siparişleri Alın',
      description: 'Online siparişler gelmeye başlasın!'
    }
  ];

  const pricingFeatures = [
    'Sınırsız sipariş',
    'Menü yönetimi',
    'Otomatik kurye atama',
    'Sipariş takibi',
    'Detaylı raporlar',
    'Müşteri yönetimi',
    'Mobil uygulama',
    '7/24 teknik destek'
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
              Restoranınızı dijital çağa taşıyın! Online sipariş alın, kurye hizmetimizle teslim edin, satışlarınızı artırın.
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
                href="/iletisim"
                className="inline-flex items-center justify-center bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-800 transition"
              >
                Demo Talep Et
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
              Güçlü Özellikler
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Restoranınızı yönetmek için ihtiyacınız olan her şey
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
              Nasıl Çalışır?
            </h2>
            <p className="text-xl text-gray-600">
              3 adımda online siparişe başlayın
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
                Esnek Fiyatlandırma
              </h2>
              <p className="text-xl text-gray-600">
                İhtiyacınıza göre paket seçenekleri
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200 rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <div className="text-5xl font-bold text-primary-600 mb-2">
                  %5
                </div>
                <p className="text-gray-600">Sipariş başına komisyon</p>
                <p className="text-sm text-gray-500 mt-2">Kurye ücreti dahil değildir</p>
              </div>

              <div className="space-y-3 mb-8">
                {pricingFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://panel.onlagelsin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-primary-600 text-white text-center py-4 rounded-lg font-semibold hover:bg-primary-700 transition"
              >
                Hemen Başla
              </a>
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
            Bugün başlayın, online siparişlerinizi artırın!
          </p>
          <a
            href="https://panel.onlagelsin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition text-lg"
          >
            Ücretsiz Deneyin
          </a>
        </div>
      </section>
    </div>
  );
}
