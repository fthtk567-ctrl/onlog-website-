import Link from 'next/link'

export default function GizlilikPolitikasi() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gizlilik Politikası</h1>
          <p className="text-xl text-primary-100">
            Son Güncelleme: 28 Ekim 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Giriş</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                On'la Gelsin olarak kişisel verilerinizin güvenliği bizim için son derece önemlidir. Bu Gizlilik Politikası, kişisel bilgilerinizi nasıl topladığımızı, kullandığımızı, sakladığımızı ve koruduğumuzu açıklamaktadır.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Bu politika, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve ilgili mevzuat uyarınca hazırlanmıştır.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Toplanan Veriler</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Hizmetlerimizi kullanırken aşağıdaki kişisel verilerinizi toplayabiliriz:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li><strong>Kimlik Bilgileri:</strong> Ad, soyad, TC kimlik numarası</li>
                <li><strong>İletişim Bilgileri:</strong> Telefon numarası, e-posta adresi, adres</li>
                <li><strong>Finansal Bilgiler:</strong> Ödeme bilgileri, fatura adresi</li>
                <li><strong>Teslimat Bilgileri:</strong> Gönderici ve alıcı bilgileri, teslimat adresleri</li>
                <li><strong>Teknik Bilgiler:</strong> IP adresi, çerez verileri, cihaz bilgileri</li>
                <li><strong>Konum Bilgileri:</strong> GPS konumu (kurye uygulaması için)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Verilerin Kullanım Amaçları</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Teslimat hizmetlerinin yerine getirilmesi</li>
                <li>Müşteri hesabınızın yönetilmesi</li>
                <li>Ödeme işlemlerinin gerçekleştirilmesi</li>
                <li>Müşteri destek hizmetlerinin sağlanması</li>
                <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                <li>Hizmet kalitesinin artırılması ve analiz çalışmaları</li>
                <li>Kampanya ve promosyon bildirimleri (onay vermeniz halinde)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Verilerin Paylaşımı</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kişisel verileriniz, yalnızca aşağıdaki durumlarda ve sınırlı kapsamda üçüncü kişilerle paylaşılabilir:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Teslimat hizmeti için kuryelerimizle (sadece teslimat için gerekli bilgiler)</li>
                <li>Ödeme işlemleri için finans kuruluşları ile</li>
                <li>Yasal zorunluluklar gereği yetkili kamu kurum ve kuruluşları ile</li>
                <li>Hizmet sağlayıcılarımız (veri işleme, hosting, analitik hizmetler)</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Verileriniz hiçbir şekilde üçüncü kişilere pazarlama amacıyla satılmaz veya kiralanmaz.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Veri Güvenliği</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kişisel verilerinizin güvenliği için gerekli teknik ve idari tedbirleri almaktayız:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>SSL/TLS şifreleme ile güvenli veri iletimi</li>
                <li>Güvenli sunucularda veri saklama</li>
                <li>Düzenli güvenlik denetimleri</li>
                <li>Sınırlı erişim kontrolleri</li>
                <li>Çalışan eğitimleri ve gizlilik taahhütleri</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Çerezler (Cookies)</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Web sitemiz, kullanıcı deneyimini iyileştirmek için çerezler kullanmaktadır. Çerezler hakkında detaylı bilgi için <Link href="/cerez-politikasi" className="text-primary-600 hover:underline">Çerez Politikamızı</Link> inceleyebilirsiniz.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Veri Saklama Süresi</h2>
              <p className="text-gray-600 leading-relaxed">
                Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca ve yasal saklama yükümlülükleri çerçevesinde saklanır. Amaç ortadan kalktığında veya yasal süre dolduğunda verileriniz silinir, yok edilir veya anonim hale getirilir.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Haklarınız (KVKK)</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                KVKK uyarınca aşağıdaki haklara sahipsiniz:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                <li>İşlenmişse bilgi talep etme</li>
                <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                <li>Yurt içinde veya yurt dışında aktarıldığı 3. kişileri bilme</li>
                <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
                <li>Yasal şartlar çerçevesinde silinmesini veya yok edilmesini isteme</li>
                <li>Aktarıldığı 3. kişilere bildirilmesini isteme</li>
                <li>Münhasıran otomatik sistemlerle analiz edilmesine itiraz etme</li>
                <li>Zararınızın giderilmesini talep etme</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Başvuru Yöntemi</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                KVKK kapsamındaki haklarınızı kullanmak için aşağıdaki kanallardan başvuruda bulunabilirsiniz:
              </p>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <p className="text-gray-700">
                  <strong>E-posta:</strong> <a href="mailto:kvkk@onlagelsin.com" className="text-primary-600 hover:underline">kvkk@onlagelsin.com</a>
                </p>
                <p className="text-gray-700">
                  <strong>Posta:</strong> Bakkalbaşı Mah. Mustafa Kemal Cad. No: 10/A Çumra / KONYA
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed mt-4">
                Başvurularınız en geç 30 gün içinde değerlendirilip cevaplanacaktır.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Politika Değişiklikleri</h2>
              <p className="text-gray-600 leading-relaxed">
                Bu Gizlilik Politikası, yasal düzenlemeler ve iş gereksinimlerine göre güncellenebilir. Değişiklikler web sitemizde yayınlandığı tarihten itibaren geçerli olacaktır.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. İletişim</h2>
              <div className="bg-primary-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Gizlilik politikamız hakkında sorularınız için:
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <strong>E-posta:</strong> <a href="mailto:destek@onlagelsin.com" className="text-primary-600 hover:underline">destek@onlagelsin.com</a>
                  </p>
                  <p className="text-gray-700">
                    <strong>Telefon:</strong> <a href="tel:+905342447504" className="text-primary-600 hover:underline">+90 534 244 7504</a>
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Back to Home */}
          <div className="text-center mt-8">
            <Link href="/" className="text-primary-600 hover:underline font-semibold">
              ← Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
