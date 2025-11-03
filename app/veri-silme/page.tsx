import { Shield, Trash2, Mail, Phone, FileText, CheckCircle, AlertCircle, Clock } from 'lucide-react';

export default function VeriSilmePage() {
  const dataTypes = [
    {
      category: 'Kişisel Bilgiler',
      items: [
        'Ad, soyad',
        'Telefon numarası',
        'E-posta adresi',
        'Profil fotoğrafı'
      ],
      retention: 'Talep sonrası 30 gün içinde silinir'
    },
    {
      category: 'Konum Verileri',
      items: [
        'GPS konum geçmişi',
        'Teslimat adresleri',
        'Rota bilgileri'
      ],
      retention: 'Talep sonrası 30 gün içinde silinir'
    },
    {
      category: 'Finansal Bilgiler',
      items: [
        'Kazanç bilgileri',
        'Banka hesap bilgileri',
        'Ödeme geçmişi'
      ],
      retention: 'Yasal zorunluluk: 10 yıl saklanır'
    },
    {
      category: 'Teslimat Geçmişi',
      items: [
        'Tamamlanan siparişler',
        'Teslimat detayları',
        'Müşteri geri bildirimleri'
      ],
      retention: 'Yasal zorunluluk: 10 yıl saklanır'
    }
  ];

  const steps = [
    {
      number: '1',
      title: 'Talep Formu',
      description: 'Aşağıdaki formu doldurarak veri silme talebinizi iletin'
    },
    {
      number: '2',
      title: 'Kimlik Doğrulama',
      description: 'Güvenlik için kimliğiniz doğrulanacaktır (telefon veya e-posta ile)'
    },
    {
      number: '3',
      title: 'Onay',
      description: 'Talebiniz değerlendirilir ve onaylanır'
    },
    {
      number: '4',
      title: 'Silme İşlemi',
      description: '30 gün içinde verileriniz sistemden kalıcı olarak silinir'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              OnLog Uygulamaları
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Veri Silme Talebi
            </h2>
            <p className="text-xl text-primary-50">
              Kişisel verilerinizin silinmesini talep edebilirsiniz
            </p>
            <p className="text-sm text-primary-100 mt-2">
              (OnLog Kurye Uygulaması ve Satıcı Paneli için)
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 bg-yellow-50 border-b border-yellow-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Önemli Uyarı
                </h3>
                <p className="text-gray-700">
                  Verilerinizin silinmesi durumunda OnLog uygulamalarını kullanmaya devam edemezsiniz. 
                  Hesabınız kalıcı olarak kapatılacaktır. Bekleyen ödemeleriniz varsa, önce bunların 
                  tamamlanmasını beklemeniz gerekmektedir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında, OnLog uygulamalarını 
                (OnLog Kurye Uygulaması ve Satıcı Paneli) kullanan tüm kullanıcılarımız, kişisel 
                verilerinin silinmesini talep etme hakkına sahiptir. Bu sayfa, veri silme talebinde 
                bulunma sürecini ve hangi verilerin nasıl işleneceğini açıklamaktadır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Veri Silme Süreci
            </h2>
            <p className="text-center text-gray-600 mb-12">
              4 basit adımda verilerinizin silinmesini talep edebilirsiniz
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-white">
                    {step.number}
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

      {/* Data Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Veri Türleri ve Saklama Süreleri
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Hangi verilerinizin silineceği ve hangilerinin yasal zorunluluk nedeniyle saklanacağı
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {dataTypes.map((dataType, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {dataType.category}
                  </h3>
                  <ul className="space-y-2 mb-4">
                    {dataType.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 pt-4 border-t border-gray-300">
                    <Clock className="w-5 h-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">
                      {dataType.retention}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Yasal Saklama Zorunluluğu
              </h4>
              <p className="text-blue-800 text-sm">
                Vergi Usul Kanunu ve diğer yasal düzenlemeler gereği, finansal kayıtlar ve 
                teslimat geçmişi gibi veriler 10 yıl boyunca saklanmak zorundadır. Bu veriler 
                anonim hale getirilerek sadece yasal zorunluluklar için muhafaza edilecektir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trash2 className="w-8 h-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Veri Silme Talep Formu
                </h2>
                <p className="text-gray-600">
                  Lütfen formu eksiksiz doldurunuz
                </p>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                    placeholder="Kayıtlı ad ve soyadınız"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Telefon Numarası *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                    placeholder="Kayıtlı telefon numaranız (05XX XXX XX XX)"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    OnLog uygulamalarında giriş yaptığınız telefon numaranızı giriniz
                  </p>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    E-posta Adresi *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                    placeholder="E-posta adresiniz"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Kimlik Doğrulama Yöntemi *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                  >
                    <option value="">Seçiniz</option>
                    <option value="sms">SMS ile doğrulama</option>
                    <option value="email">E-posta ile doğrulama</option>
                    <option value="call">Telefon görüşmesi ile doğrulama</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Silme Sebebi
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                    placeholder="Verilerinizin silinmesini talep etme sebebinizi belirtebilirsiniz (isteğe bağlı)"
                  ></textarea>
                </div>

                <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-yellow-800">
                      <p className="font-semibold mb-1">Onaylıyorum:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Verilerimin silinmesi sonrası OnLog uygulamalarını kullanamayacağımı</li>
                        <li>Hesabımın kalıcı olarak kapatılacağını</li>
                        <li>Yasal zorunluluklar nedeniyle bazı verilerin 10 yıl saklanacağını</li>
                        <li>Bu işlemin geri alınamaz olduğunu</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    required
                    className="mt-1"
                    id="confirm"
                  />
                  <label htmlFor="confirm" className="text-sm text-gray-700">
                    Yukarıdaki bilgileri okudum, anladım ve veri silme talebimi onaylıyorum. *
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors shadow-lg"
                >
                  Veri Silme Talebini Gönder
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4 text-center">
                  Sorularınız mı var?
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="text-center">
                    <Mail className="w-6 h-6 mx-auto mb-2 text-primary-600" />
                    <p className="text-sm text-gray-600 mb-1">E-posta</p>
                    <a
                      href="mailto:destek@onlog.com.tr"
                      className="text-primary-600 font-semibold hover:text-primary-700"
                    >
                      destek@onlog.com.tr
                    </a>
                  </div>
                  <div className="text-center">
                    <Phone className="w-6 h-6 mx-auto mb-2 text-primary-600" />
                    <p className="text-sm text-gray-600 mb-1">Telefon</p>
                    <a
                      href="tel:+905342447504"
                      className="text-primary-600 font-semibold hover:text-primary-700"
                    >
                      +90 534 244 75 04
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Sıkça Sorulan Sorular
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Veri silme işlemi ne kadar sürer?
                </h3>
                <p className="text-gray-700">
                  Talebiniz onaylandıktan sonra, verileriniz en geç 30 gün içinde sistemden 
                  kalıcı olarak silinir. Süreç boyunca size bilgilendirme yapılır.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Tekrar hesap açabilir miyim?
                </h3>
                <p className="text-gray-700">
                  Evet, verileriniz silindikten sonra dilediğiniz zaman yeni bir hesap açabilirsiniz. 
                  Ancak önceki verilerinize ve geçmişinize erişemezsiniz.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Bekleyen ödemelerim ne olacak?
                </h3>
                <p className="text-gray-700">
                  Veri silme talebinden önce, tüm bekleyen ödemelerinizin hesabınıza aktarılmasını 
                  beklemeniz gerekmektedir. Ödeme bekleyen hesaplar için veri silme talebi kabul edilmez.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Hangi veriler kalıcı olarak saklanır?
                </h3>
                <p className="text-gray-700">
                  Vergi Usul Kanunu ve diğer yasal düzenlemeler gereği, finansal kayıtlar ve 
                  teslimat geçmişiniz anonim hale getirilerek 10 yıl boyunca saklanır. 
                  Bu veriler kimliğinizle ilişkilendirilmez.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KVKK Reference */}
      <section className="py-8 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">
            Bu sayfa, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında hazırlanmıştır.
          </p>
          <a
            href="/kvkk"
            className="inline-block bg-white text-primary-600 px-6 py-2 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            KVKK Aydınlatma Metnini İnceleyin
          </a>
        </div>
      </section>
    </div>
  );
}
