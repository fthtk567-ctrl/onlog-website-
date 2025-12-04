import { Store, Zap, TrendingUp, Users, CheckCircle, Code, Headphones, Shield, ArrowRight, Package } from 'lucide-react';

export default function EticaretPage() {
  const features = [
    {
      icon: Zap,
      title: 'Otomatik Kurye Atama',
      description: 'Gelen siparişlere anında otomatik olarak kurye atanır, manuel işlem gerekmez'
    },
    {
      icon: Code,
      title: 'Kolay API Entegrasyonu',
      description: 'Web sitenize entegrasyon için teknik ekibimiz size tam destek sağlar'
    },
    {
      icon: TrendingUp,
      title: 'Anlık Sipariş Takibi',
      description: 'Müşterileriniz siparişlerini gerçek zamanlı olarak takip edebilir'
    },
    {
      icon: Shield,
      title: 'Güvenli Teslimat',
      description: 'Tüm gönderileriniz sigorta güvencesi altında taşınır'
    },
    {
      icon: Users,
      title: 'Özel Hesap Yöneticisi',
      description: 'Size özel hesap yöneticiniz tüm ihtiyaçlarınız için yanınızda'
    },
    {
      icon: Headphones,
      title: '7/24 Teknik Destek',
      description: 'Entegrasyon ve operasyon için kesintisiz destek'
    }
  ];

  const benefits = [
    'Dakikalar içinde kurye atama',
    'Toplu sipariş yönetimi',
    'Özel fiyatlandırma paketleri',
    'Aylık raporlama ve analiz',
    'Kurumsal fatura ve sözleşme',
    'Öncelikli müşteri hizmetleri',
    'Özel kurye havuzu oluşturma',
    'Marka özelleştirme seçenekleri'
  ];

  const platforms = [
    'Ticimax',
    'IdeasoftCommerce',
    'T-Soft',
    'Shopify',
    'WooCommerce',
    'Magento',
    'PrestaShop',
    'OpenCart',
    'Diğer tüm e-ticaret platformları'
  ];

  const steps = [
    {
      number: '1',
      title: 'İletişime Geçin',
      description: 'Formu doldurun veya bizi arayın'
    },
    {
      number: '2',
      title: 'Analiz ve Planlama',
      description: 'Teknik ekibimiz sitenizi analiz eder'
    },
    {
      number: '3',
      title: 'Entegrasyon',
      description: 'API entegrasyonunu gerçekleştiririz'
    },
    {
      number: '4',
      title: 'Test ve Devreye Alma',
      description: 'Testleri yapıp sistemi aktif hale getiririz'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
              E-Ticaret İşletmeleri İçin
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              E-Ticaret Sitenizi On'la Gelsin ile Entegre Edin
            </h1>
            <p className="text-xl md:text-2xl text-primary-50 mb-8">
              Web sitenize entegre olun, gelen siparişlere otomatik kurye atansın
            </p>
            <a
              href="#iletisim"
              className="inline-block bg-white text-primary-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-primary-50 transition-colors shadow-lg"
            >
              Entegrasyon İçin İletişime Geçin
            </a>
          </div>
        </div>
      </section>

      {/* Main Value Proposition */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  E-Ticaret Siteniz Var Mı?
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Herhangi bir e-ticaret platformunda web siteniz varsa, On'la Gelsin ile iletişime geçerek 
                  <span className="font-bold text-primary-600"> gelen siparişlerinize otomatik olarak kurye atanacak</span> 
                  {' '}şekilde sisteminizi bize entegre ettirebilirsiniz.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Artık manuel olarak kurye aramaya, telefon açmaya veya sipariş koordinasyonu yapmaya gerek yok! 
                  Müşteriniz sipariş verdiği anda, sistem otomatik olarak en yakın kuryeyi atar ve teslimat süreci başlar.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#iletisim"
                    className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-700 transition-colors"
                  >
                    Hemen Başlayın
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="tel:+905342447504"
                    className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-800 px-8 py-4 rounded-lg font-bold hover:bg-gray-200 transition-colors"
                  >
                    Bizi Arayın
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl shadow-2xl p-8 text-white">
                  <Store className="w-16 h-16 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">
                    Otomatik Teslimat Sistemi
                  </h3>
                  <div className="space-y-3">
                    {[
                      'Sipariş gelir',
                      'Sistem otomatik kurye atar',
                      'Kurye teslimatı alır',
                      'Müşteriye teslim edilir'
                    ].map((step, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              E-Ticaret Entegrasyonunun Avantajları
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              On'la Gelsin API entegrasyonu ile işletmenizi güçlendirin
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              E-Ticaret Paketine Dahil Olanlar
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-gray-50 rounded-lg p-4"
                >
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tüm E-Ticaret Platformlarını Destekliyoruz
            </h2>
            <p className="text-gray-600 mb-12">
              Hangi platformu kullanırsanız kullanın, entegrasyon sağlıyoruz
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="bg-white px-6 py-3 rounded-full shadow-md border-2 border-gray-200 font-medium text-gray-700"
                >
                  {platform}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration Steps */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Entegrasyon Süreci
            </h2>
            <p className="text-center text-primary-100 mb-12 text-lg">
              4 basit adımda sisteminizi entegre edin
            </p>
            <div className="grid md:grid-cols-4 gap-6">
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

      {/* Contact Form */}
      <section id="iletisim" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
                E-Ticaret Entegrasyonu İçin İletişime Geçin
              </h2>
              <p className="text-gray-600 text-center mb-8">
                Formu doldurun, uzman ekibimiz en kısa sürede sizinle iletişime geçsin
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Şirket Adı *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                      placeholder="Şirket adınız"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Yetkili Adı Soyadı *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
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
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Web Site Adresi *
                  </label>
                  <input
                    type="url"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                    placeholder="https://www.siteniz.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    E-Ticaret Platformu *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                  >
                    <option value="">Platform seçiniz</option>
                    <option value="ticimax">Ticimax</option>
                    <option value="ideasoft">IdeasoftCommerce</option>
                    <option value="tsoft">T-Soft</option>
                    <option value="shopify">Shopify</option>
                    <option value="woocommerce">WooCommerce</option>
                    <option value="magento">Magento</option>
                    <option value="prestashop">PrestaShop</option>
                    <option value="opencart">OpenCart</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Aylık Ortalama Sipariş Sayısı
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                  >
                    <option value="">Seçiniz</option>
                    <option value="0-100">0 - 100</option>
                    <option value="100-500">100 - 500</option>
                    <option value="500-1000">500 - 1.000</option>
                    <option value="1000+">1.000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Mesajınız
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                    placeholder="Entegrasyon hakkında eklemek istediğiniz bilgiler..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-primary-700 transition-colors shadow-lg"
                >
                  Entegrasyon Talebi Gönder
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="grid md:grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-gray-600 mb-2">Hemen Arayın</p>
                    <a
                      href="tel:+905342447504"
                      className="text-primary-600 font-bold text-lg hover:text-primary-700"
                    >
                      +90 534 244 75 04
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-2">E-posta Gönderin</p>
                    <a
                      href="mailto:destek@onlagelsin.com"
                      className="text-primary-600 font-bold text-lg hover:text-primary-700"
                    >
                      destek@onlagelsin.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Sık Sorulan Sorular
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: 'Entegrasyon ne kadar sürer?',
                  a: 'Standart entegrasyonlar genellikle 2-5 iş günü içinde tamamlanır. Özel durumlar için süre değişebilir.'
                },
                {
                  q: 'Entegrasyon ücreti var mı?',
                  a: 'Entegrasyon işlemi ücretsizdir. Sadece teslimat başına ücretlendirme yapılır.'
                },
                {
                  q: 'Teknik bilgiye sahip olmam gerekir mi?',
                  a: 'Hayır, teknik ekibimiz tüm entegrasyon işlemlerini sizin için gerçekleştirir.'
                },
                {
                  q: 'Minimum sipariş sayısı var mı?',
                  a: 'Hayır, ister ayda 10 ister 10.000 sipariş olsun, tüm işletmelere hizmet veriyoruz.'
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 border border-gray-200"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
