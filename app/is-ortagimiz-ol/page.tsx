import { CheckCircle, Headphones, Megaphone, Percent, Phone, TrendingUp } from 'lucide-react';
import { createPageMetadata } from '@/lib/seo';
import RestaurantApplicationForm from './RestaurantApplicationForm';

export const metadata = createPageMetadata({
  title: "On'la Gelsin - Restoran İş Ortağımız Olun",
  description: "Restoranınızı On'la Gelsin'e taşıyın, düşük komisyon oranları, reklam desteği ve 7/24 teknik destekle dijital sipariş kanalınızı büyütün.",
  path: '/is-ortagimiz-ol',
  keywords: ['restoran iş ortaklığı', 'yemek siparişi iş ortaklığı', 'restoran başvurusu', "on'la gelsin"],
})

export default function IsOrtagimizOlPage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Dijitalde Büyüyün',
      description: "Restoranınızı On'la Gelsin kullanıcılarına açarak yeni sipariş kanalı oluşturun.",
      highlight: true,
    },
    {
      icon: Percent,
      title: 'Düşük Komisyon',
      description: 'Restoran potansiyelinize göre %3 ile %5 arasında, maksimum %5 komisyon modeliyle çalışın.',
    },
    {
      icon: Megaphone,
      title: '6 Ay Reklam Desteği',
      description: 'Platformumuzda ilk 6 ay restoranınızı öne çıkaracak reklam desteğini biz planlayalım.',
    },
    {
      icon: Headphones,
      title: '7/24 Teknik Destek',
      description: 'Panel, menü, sipariş ve operasyon ihtiyaçlarınızda teknik destek ekibimize ulaşın.',
    },
  ];

  const benefitsList = [
    'İlk ay %0 komisyonla başlangıç',
    'Maksimum %5 komisyon',
    'Restoran potansiyeline göre %3 - %5 arası oran',
    'İlk 6 ay platform içi reklam ve öne çıkarma desteği',
    'Online yemek siparişi kanalı',
    'Menü ve fiyat yönetimi',
    'Restoran profil görünürlüğü',
    'Sipariş ekranı',
    'Satış ve ürün raporları',
    'Mobil uyumlu yönetim',
    '7/24 teknik destek',
    "Türkiye'nin yerli ve milli yemek sipariş platformu avantajı",
  ];

  const steps = [
    {
      number: '1',
      title: 'Başvurunuzu Bırakın',
      description: 'Restoranınızın iletişim, konum ve mutfak bilgilerini form üzerinden paylaşın.',
    },
    {
      number: '2',
      title: 'Ekibimiz Sizi Arasın',
      description: 'Komisyon oranını, reklam desteğini ve kurulum adımlarını birlikte netleştirelim.',
    },
    {
      number: '3',
      title: 'Yayına Alalım',
      description: "Menünüz ve restoran profiliniz hazırlanarak On'la Gelsin'de sipariş almaya başlayın.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden text-white py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(15, 23, 42, 0.78), rgba(22, 163, 74, 0.68)), url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&h=720&fit=crop')",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex max-w-full items-center justify-center bg-white text-primary-700 px-5 py-2 rounded-lg shadow-lg border border-white/70 font-bold text-sm md:text-base mb-6 text-center leading-snug">
              Türkiye&apos;nin Yerli ve Milli Yemek Sipariş Platformu
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              İş Ortağımız Olun
            </h1>
            <p className="text-2xl text-primary-50 mb-4">
              Restoranınızı On&apos;la Gelsin ile Dijitalde Büyütün
            </p>
            <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              İlk ay %0 komisyon, ilk 6 ay reklam desteği ve maksimum %5 komisyon modeliyle yeni sipariş kanalınızı kurun.
            </p>
            <a
              href="https://panel.onlagelsin.com/#/basvuru"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full max-w-xs md:w-auto bg-white text-primary-600 px-8 md:px-10 py-4 rounded-lg font-bold text-lg hover:bg-primary-50 transition-colors shadow-lg"
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
            <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Neden On&apos;la Gelsin İş Ortağı Olmalısınız?
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Restoranlar için sade, ölçülebilir ve yemek siparişine odaklı çalışma modeli.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-8 ${
                    item.highlight
                      ? 'bg-gradient-to-br from-primary-600 to-primary-500 text-white shadow-2xl lg:scale-105'
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
              3 adımda restoran başvurunuzu tamamlayın.
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
                Restoran İş Ortaklığı Başvuru Formu
              </h2>
              <p className="text-gray-600 text-center mb-8">
                Restoran bilgilerinizi bırakın, ekibimiz en kısa sürede sizinle iletişime geçsin.
              </p>

              <RestaurantApplicationForm />

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
