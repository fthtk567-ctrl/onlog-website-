import { Package, ShoppingBag, Utensils, Pill, FileText, Gift, Shirt, Zap, CheckCircle, Clock, Shield, Users } from 'lucide-react';

export default function HizmetlerimizPage() {
  const services = [
    {
      icon: ShoppingBag,
      title: 'E-Ticaret Teslimatı',
      description: 'Online mağazanızdan gelen siparişleri aynı gün içinde müşterilerinize ulaştırıyoruz.',
      features: ['Otomatik kurye atama', 'Anlık takip', 'Aynı gün teslimat', 'Kapıda ödeme']
    },
    {
      icon: Utensils,
      title: 'Yemek Teslimatı',
      description: 'Restoranlardan evlere ve iş yerlerine sıcak yemek teslimatı hizmeti.',
      features: ['Hızlı teslimat', 'Sıcak yemek güvencesi', 'Özel paketleme', 'Toplu siparişler']
    },
    {
      icon: Package,
      title: 'Market Teslimatı',
      description: 'Marketlerden günlük ihtiyaç ürünlerinin teslimatı.',
      features: ['30-60 dk teslimat', 'Soğuk zincir', 'Nakit tahsilat', 'Toplu alışveriş']
    },
    {
      icon: Pill,
      title: 'Eczane Teslimatı',
      description: 'İlaç ve sağlık ürünlerinin güvenli ve hızlı teslimatı.',
      features: ['Acil teslimat', 'Güvenli taşıma', 'Reçeteli ilaç', '7/24 hizmet']
    },
    {
      icon: FileText,
      title: 'Evrak Teslimatı',
      description: 'Önemli evrak ve dokümanların güvenli şekilde teslimi.',
      features: ['Güvenli taşıma', 'İmza karşılığı', 'Acil evrak', 'Kurumsal hizmet']
    },
    {
      icon: Gift,
      title: 'Hediye Teslimatı',
      description: 'Özel günler için hediye paketlerinin özenli teslimatı.',
      features: ['Özel paketleme', 'Mesaj kartı', 'Zamanında teslimat', 'Sürpriz hizmet']
    },
    {
      icon: Shirt,
      title: 'Kuru Temizleme',
      description: 'Kuru temizleme ve çamaşırhane hizmetleri için kurye desteği.',
      features: ['Alış-veriş hizmeti', 'Askılı taşıma', 'Zamanlı teslimat', 'Toplu hizmet']
    },
    {
      icon: Zap,
      title: 'Diğer Teslimatlar',
      description: 'Özel teslimat ihtiyaçlarınız için esnek çözümler.',
      features: ['Özel talep', 'Büyük paket', 'Toplu taşıma', 'Özel araç']
    }
  ];

  const advantages = [
    {
      icon: Clock,
      title: 'Hızlı Teslimat',
      description: 'Şehir içi 1-2 saat içinde teslimat garantisi'
    },
    {
      icon: Shield,
      title: 'Güvenli Taşıma',
      description: 'Tüm gönderi türleri için sigorta ve güvenlik'
    },
    {
      icon: Users,
      title: 'Profesyonel Kuryeler',
      description: 'Deneyimli ve güvenilir kurye ekibimiz'
    },
    {
      icon: CheckCircle,
      title: 'Anlık Takip',
      description: 'Teslimatınızı gerçek zamanlı olarak takip edin'
    }
  ];

  const stats = [
    { number: '50.000+', label: 'Teslimat' },
    { number: '10.000+', label: 'Mutlu Müşteri' },
    { number: '500+', label: 'Aktif Kurye' },
    { number: '24/7', label: 'Destek Hizmeti' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hizmetlerimiz
            </h1>
            <p className="text-xl text-primary-50">
              Her türlü teslimat ihtiyacınız için hızlı, güvenli ve profesyonel kurye hizmetleri
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              OnLog Kurye Hizmetleri
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Bireysel ve kurumsal tüm teslimat ihtiyaçlarınız için yanınızdayız
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
              Neden OnLog?
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

      {/* Stats */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              OnLog Rakamlarla
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-primary-100">
                    {stat.label}
                  </div>
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
              {[
                {
                  step: '1',
                  title: 'Sipariş Verin',
                  description: 'Web, mobil uygulama veya telefon ile sipariş oluşturun'
                },
                {
                  step: '2',
                  title: 'Kurye Atanır',
                  description: 'Sistem otomatik olarak en yakın kuryeyi atar'
                },
                {
                  step: '3',
                  title: 'Teslimat Başlar',
                  description: 'Kurye gönderiyi alır ve yola çıkar'
                },
                {
                  step: '4',
                  title: 'Teslim Edilir',
                  description: 'Gönderiniz adrese güvenle teslim edilir'
                }
              ].map((step, index) => (
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

      {/* Pricing Info */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Fiyatlandırma
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Bireysel Müşteriler
                  </h3>
                  <p className="text-3xl font-bold text-primary-600 mb-2">
                    136.90 ₺
                  </p>
                  <p className="text-gray-700 mb-4">
                    &apos;den başlayan fiyatlarla
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-primary-600" />
                      <span>Şehir içi teslimat</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-primary-600" />
                      <span>Anlık takip</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-primary-600" />
                      <span>Güvenli teslimat</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Kurumsal Müşteriler
                  </h3>
                  <p className="text-3xl font-bold text-primary-600 mb-2">
                    Özel Fiyat
                  </p>
                  <p className="text-gray-700 mb-4">
                    İşletmenize özel paketler
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-primary-600" />
                      <span>Toplu teslimat indirimi</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-primary-600" />
                      <span>API entegrasyonu</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-primary-600" />
                      <span>Özel hesap yöneticisi</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Hemen Kurye Çağırın
          </h2>
          <p className="text-primary-50 mb-8 max-w-2xl mx-auto">
            İhtiyacınız olan hizmeti seçin ve dakikalar içinde kuryeniz yola çıksın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://panel.onlog.com.tr/#/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Kurye Çağır
            </a>
            <a
              href="/iletisim"
              className="inline-block bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors"
            >
              Bize Ulaşın
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
