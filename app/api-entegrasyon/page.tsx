import { Code, Zap, Lock, FileText, Headphones, CheckCircle, Mail, Phone } from 'lucide-react';

export default function EntegrasyonAPIPage() {
  const features = [
    {
      icon: Zap,
      title: 'Hızlı Entegrasyon',
      description: 'Sisteminize hızlıca entegre edin, dakikalar içinde kullanmaya başlayın'
    },
    {
      icon: Lock,
      title: 'Güvenli API',
      description: 'SSL sertifikası ve token bazlı kimlik doğrulama ile güvenli bağlantı'
    },
    {
      icon: Code,
      title: 'RESTful API',
      description: 'Modern ve kolay kullanılabilir RESTful API yapısı'
    },
    {
      icon: FileText,
      title: 'Detaylı Dokümantasyon',
      description: 'Kapsamlı API dokümantasyonu ve kullanım örnekleri'
    },
    {
      icon: Headphones,
      title: 'Teknik Destek',
      description: '7/24 teknik destek ekibimiz entegrasyon sürecinde yanınızda'
    },
    {
      icon: CheckCircle,
      title: 'Test Ortamı',
      description: 'Canlı ortama geçmeden önce test edebileceğiniz sandbox ortamı'
    }
  ];

  const useCases = [
    {
      title: 'E-Ticaret Platformları',
      description: 'Online mağazanızdan gelen siparişlere otomatik kurye atayın',
      examples: ['WooCommerce', 'Shopify', 'Magento', 'Ticimax']
    },
    {
      title: 'Mobil Uygulamalar',
      description: 'Kendi uygulamanıza kurye çağırma özelliği ekleyin',
      examples: ['iOS', 'Android', 'React Native', 'Flutter']
    },
    {
      title: 'Market Sistemleri',
      description: 'Market kasanızdan veya yönetim panelinizden teslimat oluşturun',
      examples: ['POS Sistemleri', 'Envanter Yazılımları', 'Sipariş Yönetimi']
    },
    {
      title: 'Restoran ve Yemek Servisleri',
      description: 'Sipariş yönetim sisteminize entegre ederek otomatik teslimat başlatın',
      examples: ['Menü Sistemleri', 'Sipariş Panelleri', 'QR Menü']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Code className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              On'la Gelsin API ve Entegrasyon
            </h1>
            <p className="text-xl md:text-2xl text-primary-50 mb-8">
              Sisteminizi On'la Gelsin API ile entegre edin, otomatik kurye atama sisteminden yararlanın
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              On'la Gelsin API Nedir?
            </h2>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12">
              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                On'la Gelsin API, web siteniz, mobil uygulamanız veya herhangi bir yazılımınızdan kurye hizmeti 
                talep edebilmenizi sağlayan gelişmiş bir entegrasyon çözümüdür. API&apos;miz sayesinde 
                sisteminizden otomatik olarak kurye atayabilir, teslimat durumunu takip edebilir ve 
                müşterilerinize gerçek zamanlı bilgi sağlayabilirsiniz.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                Modern RESTful API yapımız, tüm popüler programlama dilleri ve platformlarla uyumludur. 
                JSON formatında veri alışverişi yaparak, güvenli ve hızlı bir şekilde On'la Gelsin sistemine 
                bağlanabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              API Özellikleri
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              On'la Gelsin API&apos;nin sunduğu güçlü özellikler
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

      {/* Use Cases */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Kullanım Alanları
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-8 border-2 border-gray-200 hover:border-primary-500 transition-colors"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {useCase.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.examples.map((example, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* API Capabilities */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              API ile Neler Yapabilirsiniz?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Yeni teslimat talebi oluşturma',
                'Teslimat durumunu sorgulama',
                'Kurye konumunu gerçek zamanlı takip',
                'Teslimat geçmişini görüntüleme',
                'Fiyat hesaplama ve teklif alma',
                'Kurye bilgilerine erişim',
                'Teslimat iptali ve değişiklik',
                'Webhook ile otomatik bildirim alma',
                'Toplu teslimat oluşturma',
                'Müşteri ve adres yönetimi',
                'Ödeme ve fatura bilgileri',
                'Raporlama ve istatistikler'
              ].map((capability, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm"
                >
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Entegrasyon Süreci
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'İletişime Geçin',
                  description: 'Entegrasyon talebinizi iletin, teknik ekibimiz sizinle iletişime geçsin'
                },
                {
                  step: '2',
                  title: 'API Anahtarı Alın',
                  description: 'Test ve canlı ortam için API anahtarlarınızı ve dökümanları teslim alalım'
                },
                {
                  step: '3',
                  title: 'Test Ortamında Geliştirin',
                  description: 'Sandbox ortamında entegrasyonunuzu geliştirin ve test edin'
                },
                {
                  step: '4',
                  title: 'Canlıya Geçin',
                  description: 'Testler tamamlandıktan sonra canlı ortama geçiş yapın'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-6 items-start bg-gray-50 rounded-xl p-6 border-l-4 border-primary-600"
                >
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Info */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Teknik Bilgiler
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur">
                <h3 className="text-xl font-bold mb-4">API Tipi</h3>
                <p className="text-primary-100">RESTful API</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur">
                <h3 className="text-xl font-bold mb-4">Veri Formatı</h3>
                <p className="text-primary-100">JSON</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur">
                <h3 className="text-xl font-bold mb-4">Kimlik Doğrulama</h3>
                <p className="text-primary-100">Bearer Token (API Key)</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur">
                <h3 className="text-xl font-bold mb-4">Güvenlik</h3>
                <p className="text-primary-100">HTTPS/SSL, Rate Limiting</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur">
                <h3 className="text-xl font-bold mb-4">Webhook Desteği</h3>
                <p className="text-primary-100">Evet (Otomatik bildirimler)</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur">
                <h3 className="text-xl font-bold mb-4">Test Ortamı</h3>
                <p className="text-primary-100">Sandbox mevcut</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-l-4 border-primary-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Entegrasyon Desteği
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                On'la Gelsin API entegrasyonu için teknik ekibimiz size tam destek sağlamaktadır. 
                Entegrasyon sürecinde karşılaşabileceğiniz tüm sorunlarda yanınızdayız. 
                Detaylı API dokümantasyonu, kod örnekleri ve entegrasyon rehberi için 
                bizimle iletişime geçebilirsiniz.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Not:</strong> API erişimi için öncelikle On'la Gelsin ile iş ortaklığı anlaşması 
                yapmanız gerekmektedir. Entegrasyon süreci ve API anahtarı talepleri için 
                aşağıdaki iletişim kanallarını kullanabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            API Entegrasyonu İçin İletişime Geçin
          </h2>
          <p className="text-primary-50 mb-8 max-w-2xl mx-auto text-lg">
            Teknik ekibimiz entegrasyon sürecinde size yardımcı olmaktan mutluluk duyacaktır
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <Phone className="w-8 h-8 mx-auto mb-3 text-white" />
              <p className="text-primary-100 mb-2">Bizi Arayın</p>
              <a
                href="tel:+905342447504"
                className="text-white font-bold text-xl hover:text-primary-100 transition-colors"
              >
                +90 534 244 75 04
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <Mail className="w-8 h-8 mx-auto mb-3 text-white" />
              <p className="text-primary-100 mb-2">E-posta Gönderin</p>
              <a
                href="mailto:destek@onlagelsin.com"
                className="text-white font-bold text-xl hover:text-primary-100 transition-colors"
              >
                destek@onlagelsin.com
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/iletisim"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              İletişim Formu
            </a>
            <a
              href="/e-ticaret"
              className="inline-block bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors"
            >
              E-Ticaret Entegrasyonu
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
