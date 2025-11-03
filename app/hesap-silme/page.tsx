import { UserX, Trash2, Mail, Phone, FileText, CheckCircle, AlertCircle, Clock, Shield } from 'lucide-react';

export default function HesapSilmePage() {
  const dataTypes = [
    {
      category: 'Kişisel Bilgiler',
      items: [
        'Ad, soyad',
        'Telefon numarası',
        'E-posta adresi',
        'Profil fotoğrafı',
        'Kimlik bilgileri'
      ],
      retention: 'Talep sonrası 30 gün içinde silinir'
    },
    {
      category: 'Hesap Bilgileri',
      items: [
        'Kullanıcı adı',
        'Şifre',
        'Oturum bilgileri',
        'Cihaz bilgileri'
      ],
      retention: 'Talep sonrası 30 gün içinde silinir'
    },
    {
      category: 'Konum Verileri',
      items: [
        'GPS konum geçmişi',
        'Teslimat adresleri',
        'Rota bilgileri',
        'Çalışma bölgeleri'
      ],
      retention: 'Talep sonrası 30 gün içinde silinir'
    },
    {
      category: 'Finansal Bilgiler',
      items: [
        'Kazanç bilgileri',
        'Banka hesap bilgileri',
        'Ödeme geçmişi',
        'Fatura bilgileri'
      ],
      retention: 'Yasal zorunluluk: 10 yıl saklanır (anonim)'
    },
    {
      category: 'Teslimat ve İşlem Geçmişi',
      items: [
        'Tamamlanan siparişler',
        'Teslimat detayları',
        'Müşteri geri bildirimleri',
        'Performans kayıtları'
      ],
      retention: 'Yasal zorunluluk: 10 yıl saklanır (anonim)'
    },
    {
      category: 'İletişim Geçmişi',
      items: [
        'Destek talepleri',
        'Şikayet kayıtları',
        'Mesaj geçmişi'
      ],
      retention: 'Talep sonrası 30 gün içinde silinir'
    }
  ];

  const steps = [
    {
      number: '1',
      title: 'Talep Formu',
      description: 'Aşağıdaki formu doldurarak hesap silme talebinizi iletin'
    },
    {
      number: '2',
      title: 'Kimlik Doğrulama',
      description: 'Güvenlik için kimliğiniz telefon veya e-posta ile doğrulanır'
    },
    {
      number: '3',
      title: 'Bekleyen İşlemler',
      description: 'Bekleyen ödemeler ve işlemler tamamlanır'
    },
    {
      number: '4',
      title: 'Hesap Kapatma',
      description: 'Hesabınız ve ilişkili tüm verileriniz 30 gün içinde silinir'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <UserX className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              OnLog Kurye Uygulaması
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Hesap Silme Talebi
            </h2>
            <p className="text-xl text-red-50">
              Hesabınızın ve tüm ilişkili verilerinizin kalıcı olarak silinmesini talep edebilirsiniz
            </p>
          </div>
        </div>
      </section>

      {/* Critical Warning */}
      <section className="py-8 bg-red-50 border-b-4 border-red-300">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-red-900 mb-3">
                  ⚠️ Kritik Uyarı - Dikkatli Okuyunuz
                </h3>
                <div className="space-y-2 text-red-800">
                  <p className="font-semibold">
                    Hesabınızı silerseniz:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>OnLog Kurye uygulamasını bir daha kullanamazsınız</li>
                    <li>Hesabınız kalıcı olarak kapatılır ve geri açılamaz</li>
                    <li>Tüm kişisel verileriniz silinir</li>
                    <li>Teslimat geçmişinize erişemezsiniz</li>
                    <li>Bekleyen ödemeleriniz tamamlandıktan sonra işlem yapılır</li>
                    <li>Bu işlem GERİ ALINAMAZ!</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Hesap Silme Hakkında
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında, OnLog Kurye 
                  uygulamasını kullanan kuryelerimiz, hesaplarının ve kişisel verilerinin tamamen 
                  silinmesini talep etme hakkına sahiptir.
                </p>
                <p>
                  Hesap silme işlemi, sadece verilerinizi değil, aynı zamanda uygulama üzerindeki 
                  hesabınızı da kalıcı olarak kapatır. Bu işlem sonrasında aynı telefon numarası ile 
                  yeni hesap açabilirsiniz, ancak önceki verilerinize erişemezsiniz.
                </p>
                <p className="font-semibold text-gray-900">
                  Lütfen bu kararı vermeden önce alternatif çözümleri değerlendirin:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Hesabınızı geçici olarak pasif hale getirebilirsiniz</li>
                  <li>Bildirimlerinizi kapatabilirsiniz</li>
                  <li>Sadece belirli verilerin silinmesini talep edebilirsiniz</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Hesap Silme Süreci
            </h2>
            <p className="text-center text-gray-600 mb-12">
              4 adımda hesabınızı ve verilerinizi kalıcı olarak silebilirsiniz
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-white">
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
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Silinecek ve Saklanacak Veri Türleri
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Hesabınız silindiğinde hangi verilerin ne kadar süre saklanacağı
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dataTypes.map((dataType, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200 hover:border-primary-500 transition-colors"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {dataType.category}
                  </h3>
                  <ul className="space-y-2 mb-4">
                    {dataType.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 pt-4 border-t border-gray-300">
                    <Clock className="w-5 h-5 text-gray-600" />
                    <span className="text-xs font-medium text-gray-700">
                      {dataType.retention}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 space-y-6">
              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Yasal Saklama Zorunluluğu
                </h4>
                <p className="text-blue-800 text-sm">
                  Türk Vergi Kanunu, Ticaret Kanunu ve diğer yasal düzenlemeler gereği, finansal 
                  kayıtlar ve teslimat geçmişi gibi veriler 10 yıl boyunca saklanmak zorundadır. 
                  Bu veriler tamamen <strong>anonim hale getirilerek</strong> ve <strong>kimliğinizle 
                  ilişkilendirilemeyecek şekilde</strong> sadece yasal zorunluluklar için muhafaza edilir.
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                <h4 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Silinen Veriler
                </h4>
                <p className="text-green-800 text-sm">
                  Kişisel bilgileriniz, hesap bilgileriniz, konum verileri ve iletişim geçmişiniz 
                  talep sonrası 30 gün içinde kalıcı olarak silinir ve geri getirilemez.
                </p>
              </div>
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
                  <UserX className="w-8 h-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Hesap Silme Talep Formu
                </h2>
                <p className="text-gray-600">
                  Lütfen formu eksiksiz ve dikkatli doldurunuz
                </p>
              </div>

              <form className="space-y-6">
                <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-300 mb-6">
                  <p className="text-sm text-yellow-800 font-semibold">
                    ⚠️ Bu işlem GERİ ALINAMAZ! Emin olmadığınız takdirde önce destek ekibimizle 
                    iletişime geçmenizi öneririz.
                  </p>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition"
                    placeholder="OnLog Kurye hesabınızda kayıtlı ad ve soyadınız"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Telefon Numarası *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition"
                    placeholder="Kayıtlı telefon numaranız (05XX XXX XX XX)"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    OnLog Kurye uygulamasında giriş yaptığınız telefon numaranızı giriniz
                  </p>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    E-posta Adresi *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition"
                    placeholder="E-posta adresiniz"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Onay ve bilgilendirme için kullanılacaktır
                  </p>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Kimlik Doğrulama Yöntemi *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition"
                  >
                    <option value="">Seçiniz</option>
                    <option value="sms">SMS ile doğrulama (Önerilen)</option>
                    <option value="email">E-posta ile doğrulama</option>
                    <option value="call">Telefon görüşmesi ile doğrulama</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Hesap Silme Sebebi *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition"
                  >
                    <option value="">Seçiniz</option>
                    <option value="artik-kullanmiyorum">Artık kullanmıyorum</option>
                    <option value="gizlilik-endisesi">Gizlilik endişesi</option>
                    <option value="baska-uygulama">Başka uygulama kullanıyorum</option>
                    <option value="memnun-degilim">Hizmetten memnun değilim</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Ek Açıklama
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition"
                    placeholder="Hesabınızı silme sebebinizi detaylandırabilirsiniz (isteğe bağlı)"
                  ></textarea>
                </div>

                <div className="bg-red-50 rounded-lg p-6 border-2 border-red-200">
                  <div className="flex items-start gap-3 mb-4">
                    <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-red-800">
                      <p className="font-bold mb-2 text-base">Aşağıdakileri kabul ediyorum:</p>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Hesabımın ve tüm verilerimin <strong>kalıcı olarak silineceğini</strong></li>
                        <li>Bu işlemin <strong>geri alınamaz</strong> olduğunu</li>
                        <li>OnLog Kurye uygulamasını bir daha <strong>kullanamayacağımı</strong></li>
                        <li>Teslimat geçmişime ve kazanç bilgilerime <strong>erişemeyeceğimi</strong></li>
                        <li>Bekleyen ödemelerimin tamamlandıktan sonra işlemin yapılacağını</li>
                        <li>Yasal zorunluluklar nedeniyle bazı verilerin 10 yıl <strong>anonim olarak saklanacağını</strong></li>
                        <li>Yeni hesap açmak istediğimde sıfırdan başlayacağımı</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    required
                    className="mt-1"
                    id="confirm-delete"
                  />
                  <label htmlFor="confirm-delete" className="text-sm text-gray-700">
                    <strong>Evet, hesabımı ve tüm verilerimi kalıcı olarak silmek istiyorum.</strong> 
                    Yukarıdaki tüm uyarıları okudum, anladım ve kabul ediyorum. *
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors shadow-lg"
                >
                  Hesap Silme Talebini Gönder
                </button>

                <p className="text-center text-sm text-gray-500">
                  Talebiniz alındıktan sonra 24 saat içinde size dönüş yapılacaktır
                </p>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4 text-center">
                  Yardıma mı ihtiyacınız var?
                </h3>
                <p className="text-center text-gray-600 mb-4 text-sm">
                  Hesabınızı silmeden önce alternatif çözümler için destek ekibimizle görüşebilirsiniz
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Mail className="w-6 h-6 mx-auto mb-2 text-primary-600" />
                    <p className="text-xs text-gray-600 mb-1">E-posta</p>
                    <a
                      href="mailto:destek@onlog.com.tr"
                      className="text-primary-600 font-semibold hover:text-primary-700 text-sm"
                    >
                      destek@onlog.com.tr
                    </a>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Phone className="w-6 h-6 mx-auto mb-2 text-primary-600" />
                    <p className="text-xs text-gray-600 mb-1">Telefon</p>
                    <a
                      href="tel:+905342447504"
                      className="text-primary-600 font-semibold hover:text-primary-700 text-sm"
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

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Sıkça Sorulan Sorular
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Hesap silme işlemi ne kadar sürer?
                </h3>
                <p className="text-gray-700">
                  Talebiniz onaylandıktan sonra, hesabınız ve verileriniz en geç 30 gün içinde 
                  sistemden kalıcı olarak silinir. Süreç boyunca e-posta ve SMS ile bilgilendirilirsiniz.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Hesabımı sildikten sonra tekrar açabilir miyim?
                </h3>
                <p className="text-gray-700">
                  Evet, hesabınız silindikten sonra aynı telefon numarası ile yeni bir hesap açabilirsiniz. 
                  Ancak önceki verilerinize, teslimat geçmişinize ve kazanç bilgilerinize erişemezsiniz. 
                  Sıfırdan başlamış olursunuz.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Bekleyen ödemelerim ne olacak?
                </h3>
                <p className="text-gray-700">
                  Hesap silme işlemi, bekleyen tüm ödemeleriniz hesabınıza aktarıldıktan sonra 
                  başlatılır. Ödeme bekleyen hesaplar için silme işlemi yapılmaz. Önce ödemelerinizi 
                  almanız gerekir.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Hangi veriler kalıcı olarak saklanır?
                </h3>
                <p className="text-gray-700">
                  Türk Vergi Kanunu ve Ticaret Kanunu gereği, finansal kayıtlar ve teslimat geçmişiniz 
                  anonim hale getirilerek 10 yıl boyunca saklanır. Bu veriler kimliğinizle 
                  ilişkilendirilmez ve sadece yasal denetimler için muhafaza edilir.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Hesabımı geçici olarak donduramaz mıyım?
                </h3>
                <p className="text-gray-700">
                  Evet! Hesabınızı kalıcı olarak silmek yerine geçici olarak pasif hale getirebilirsiniz. 
                  Bu seçenek için lütfen destek ekibimizle iletişime geçin. Verileriniz korunur ve 
                  istediğiniz zaman geri dönebilirsiniz.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  İşlemi iptal edebilir miyim?
                </h3>
                <p className="text-gray-700">
                  Talebiniz onaylandıktan sonra 7 gün içinde fikrinizi değiştirirseniz işlemi 
                  iptal edebilirsiniz. Bu süre sonunda silme işlemi başlar ve geri alınamaz.
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/kvkk"
              className="inline-block bg-white text-primary-600 px-6 py-2 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              KVKK Aydınlatma Metni
            </a>
            <a
              href="/veri-silme"
              className="inline-block bg-primary-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-800 transition-colors border-2 border-white"
            >
              Sadece Veri Silme
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
