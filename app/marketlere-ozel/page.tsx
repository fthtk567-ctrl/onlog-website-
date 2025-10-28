import { ShoppingBag, Zap, Clock, TrendingUp, Users, CheckCircle, Code, Headphones, Shield, ArrowRight, Package, Truck } from 'lucide-react';

export default function MarketlerePage() {
  const features = [
    {
      icon: Zap,
      title: 'Otomatik Kurye Atama',
      description: 'Müşteri sipariş verdiği anda otomatik olarak en yakın kurye atanır'
    },
    {
      icon: Clock,
      title: 'Hızlı Teslimat',
      description: '30-60 dakika içinde market ürünlerini müşterinize ulaştırın'
    },
    {
      icon: Code,
      title: 'Kolay Entegrasyon',
      description: 'Mevcut kasanıza veya web sitenize kolay entegrasyon'
    },
    {
      icon: TrendingUp,
      title: 'Satışları Artırın',
      description: 'Online sipariş ile satış hacminizi %300 artırabilirsiniz'
    },
    {
      icon: Shield,
      title: 'Güvenli Teslimat',
      description: 'Soğuk zincir ve özel taşıma çözümleri ile güvenli teslimat'
    },
    {
      icon: Headphones,
      title: '7/24 Destek',
      description: 'Müşterileriniz için kesintisiz sipariş ve destek hizmeti'
    }
  ];

  const marketTypes = [
    {
      title: 'Süpermarket & Hipermarket',
      description: 'Büyük market zincirleri için toplu sipariş yönetimi',
      icon: ShoppingBag
    },
    {
      title: 'Mahalle Bakkalları',
      description: 'Yerel bakkallar için dijital dönüşüm çözümleri',
      icon: Store
    },
    {
      title: 'Organik Market',
      description: 'Özel ürün grupları için dikkatli taşıma',
      icon: Package
    },
    {
      title: 'Şarküteri & Kasap',
      description: 'Soğuk zincir gerektiren ürünler için özel çözüm',
      icon: Truck
    }
  ];

  const benefits = [
    'Dakikalar içinde sipariş teslimi',
    'Ürün envanteri yönetimi',
    'Müşteri sadakat programları',
    'Özel market fiyatlandırması',
    'Toplu sipariş desteği',
    'Soğuk zincir taşıma',
    'Nakit tahsilat seçeneği',
    'Detaylı satış raporları',
    'Mobil uygulama entegrasyonu',
    'SMS ve bildirim sistemi',
    'Müşteri geri bildirim sistemi',
    'Kampanya yönetimi'
  ];

  const steps = [
    {
      number: '1',
      title: 'İletişime Geçin',
      description: 'Marketiniz için özel çözümü görüşelim'
    },
    {
      number: '2',
      title: 'İhtiyaç Analizi',
      description: 'Market türünüze özel plan oluşturalım'
    },
    {
      number: '3',
      title: 'Sistem Kurulumu',
      description: 'Kasanıza veya sitenize entegrasyon yapalım'
    },
    {
      number: '4',
      title: 'Hizmete Başlayın',
      description: 'Hemen sipariş almaya başlayın'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Marketler İçin Özel Çözüm
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Marketinizi Dijitale Taşıyın
            </h1>
            <p className="text-xl md:text-2xl text-primary-50 mb-8">
              OnLog entegrasyonu ile online sipariş alın, otomatik kurye atansın
            </p>
            <a
              href="#iletisim"
              className="inline-block bg-white text-primary-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-primary-50 transition-colors shadow-lg"
            >
              Marketim İçin Entegrasyon İstiyorum
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
                  Marketiniz Var Mı?
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Fiziksel mağazanız veya online market siteniz varsa, OnLog ile iletişime geçerek 
                  <span className="font-bold text-primary-600"> gelen siparişlere otomatik olarak kurye atanacak</span>
                  {' '}şekilde sisteminizi bize entegre ettirebilirsiniz.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Müşterileriniz telefon, web sitesi veya mobil uygulama üzerinden sipariş verdiğinde, 
                  sistem otomatik olarak en yakın kuryeyi atar ve ürünler dakikalar içinde müşterinize ulaşır.
                </p>
                <div className="bg-primary-50 rounded-xl p-6 mb-6">
                  <h3 className="font-bold text-primary-900 mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Marketler İçin Özel Avantajlar
                  </h3>
                  <ul className="space-y-2 text-primary-800">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>Satışlarınızı %200-300 artırın</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>Yeni müşterilere ulaşın</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>Teslimat maliyetlerini düşürün</span>
                    </li>
                  </ul>
                </div>
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
                  <ShoppingBag className="w-16 h-16 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">
                    Market Otomasyonu
                  </h3>
                  <div className="space-y-3">
                    {[
                      'Müşteri sipariş verir',
                      'Sistem otomatik kurye atar',
                      'Kurye marketten alır',
                      '30-60 dk içinde teslim edilir'
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
              Marketler İçin Özel Özellikler
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              OnLog ile marketinizi dijital çağa taşıyın
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

      {/* Market Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Her Türlü Market İçin Çözüm
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {marketTypes.map((type, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200 hover:border-primary-500 transition-colors text-center"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <type.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {type.description}
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
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Market Paketine Dahil Olanlar
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm"
                >
                  <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{benefit}</span>
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
              Nasıl Başlarsınız?
            </h2>
            <p className="text-center text-primary-100 mb-12 text-lg">
              4 basit adımda marketinizi dijitale taşıyın
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

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Başarı Hikayeleri
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Yeşil Market',
                  location: 'Ankara',
                  result: '%350 Satış Artışı',
                  quote: 'OnLog entegrasyonu ile online sipariş sistemimiz çok verimli çalışıyor. Satışlarımız 3 katına çıktı.'
                },
                {
                  name: 'Mahalle Bakkalı',
                  location: 'İstanbul',
                  result: '500+ Günlük Sipariş',
                  quote: 'Artık sadece mağazadan değil, online siparişlerle de kazanıyoruz. Müşterilerimiz çok memnun.'
                },
                {
                  name: 'Fresh Market',
                  location: 'İzmir',
                  result: '%280 Müşteri Artışı',
                  quote: 'Teslimat hızı müşterilerimizi çok mutlu ediyor. Yeni müşteriler sürekli artıyor.'
                }
              ].map((story, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200"
                >
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {story.result}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">
                    {story.name}
                  </h4>
                  <p className="text-sm text-gray-500 mb-4">{story.location}</p>
                  <p className="text-gray-700 italic">&quot;{story.quote}&quot;</p>
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
                Marketiniz İçin Entegrasyon Talebi
              </h2>
              <p className="text-gray-600 text-center mb-8">
                Formu doldurun, market uzmanımız en kısa sürede sizinle iletişime geçsin
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Market Adı *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                      placeholder="Market adınız"
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
                    Şehir & İlçe *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                    placeholder="Örn: İstanbul / Kadıköy"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Market Türü *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                  >
                    <option value="">Seçiniz</option>
                    <option value="supermarket">Süpermarket</option>
                    <option value="bakkal">Mahalle Bakkalı</option>
                    <option value="organik">Organik Market</option>
                    <option value="sarkuteri">Şarküteri / Kasap</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Web Siteniz Var Mı?
                  </label>
                  <input
                    type="url"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                    placeholder="https://www.marketiniz.com (varsa)"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Günlük Ortalama Sipariş Hedefi
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                  >
                    <option value="">Seçiniz</option>
                    <option value="0-50">0 - 50 sipariş</option>
                    <option value="50-100">50 - 100 sipariş</option>
                    <option value="100-200">100 - 200 sipariş</option>
                    <option value="200+">200+ sipariş</option>
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
                      href="mailto:destek@onlog.com.tr"
                      className="text-primary-600 font-bold text-lg hover:text-primary-700"
                    >
                      destek@onlog.com.tr
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
                  q: 'Küçük bir bakkalım, bana da uygun mu?',
                  a: 'Evet! Her büyüklükte market için çözümlerimiz var. Küçük bakkallar bile günde onlarca online sipariş alabiliyor.'
                },
                {
                  q: 'Web sitem yok, nasıl sipariş alacağım?',
                  a: 'Size özel bir web sitesi ve mobil uygulama entegrasyonu sağlıyoruz. Müşterileriniz buradan sipariş verebilir.'
                },
                {
                  q: 'Soğuk zincir gerektiren ürünleri taşıyabilir misiniz?',
                  a: 'Evet, soğuk zincir gerektiren ürünler için özel çantalar ve taşıma çözümlerimiz mevcuttur.'
                },
                {
                  q: 'Nakit tahsilat yapıyor musunuz?',
                  a: 'Evet, kuryelerimiz nakit tahsilat yapabilir ve günlük olarak size aktarabilir.'
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

function Store(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
      <path d="M2 7h20" />
      <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
    </svg>
  );
}
