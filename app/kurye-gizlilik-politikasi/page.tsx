import { company } from '@/lib/companyInfo'

export const metadata = {
  title: "On'la Gelsin Kurye - Gizlilik Politikası",
  description:
    "On'la Gelsin Kurye uygulamasında kişisel verilerin ve konum verilerinin işlenmesine ilişkin gizlilik politikası.",
}

export default function KuryeGizlilikPolitikasi() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            On&apos;la Gelsin Kurye Uygulaması Gizlilik Politikası
          </h1>
          <p className="text-xl text-primary-100">
            Kurye uygulamasında kişisel verilerinizin, konum bilgilerinizin ve uygulama izinlerinin nasıl işlendiğine
            ilişkin bilgilendirme.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-8">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-700">
              <p>
                Bu gizlilik politikası, veri sorumlusu sıfatıyla{' '}
                <span className="font-semibold text-gray-900">{company.legalName}</span> tarafından On&apos;la Gelsin
                Kurye uygulaması için yayımlanmaktadır.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Toplanan Veriler</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                On&apos;la Gelsin Kurye uygulamasını kullanmanız sırasında aşağıdaki kişisel veriler işlenebilir:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Ad, soyad, telefon numarası, kurye hesabı ve oturum bilgileri.</li>
                <li>Teslimat atamaları, teslimat durumu, rota bilgileri, zaman damgaları ve operasyon kayıtları.</li>
                <li>
                  Konum verisi: GPS, yaklaşık veya kesin konum, uygulama açıkken ön plan konumu ve aktif teslimat
                  sürecinde arka plan konumu.
                </li>
                <li>Cihaz modeli, işletim sistemi, uygulama sürümü, IP adresi, hata kayıtları ve kullanım verileri.</li>
                <li>Push bildirim token&apos;ı ve bildirim tercihleri.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Konum Verisinin Kullanımı</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Bu uygulama, aktif teslimat sürecinde rota takibi, teslimat koordinasyonu ve tahmini teslimat süresi
                hesaplama özelliklerini sağlamak amacıyla, uygulama kapalıyken veya kullanımda değilken de konum verisi
                toplayabilir.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Arka plan konumu yalnızca aktif teslimat sürecinde operasyonel görünürlük, teslimat güvenliği, rota
                takibi ve teslimatın doğru şekilde tamamlanması için kullanılır. Konum verisi reklam veya pazarlama
                amacıyla satılmaz ya da bu amaçlarla paylaşılmaz.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Kullanım Amaçları</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Teslimat operasyonlarının yürütülmesi ve kurye atamalarının yönetilmesi.</li>
                <li>Rota, mesafe, teslimat durumu ve tahmini teslimat süresinin hesaplanması.</li>
                <li>Kurye, işletme, müşteri ve operasyon ekipleri arasında koordinasyon sağlanması.</li>
                <li>Teslimat güvenliğinin, hesap güvenliğinin ve hizmet sürekliliğinin sağlanması.</li>
                <li>Uygulama performansının izlenmesi, hata kayıtlarının incelenmesi ve teknik sorunların giderilmesi.</li>
                <li>İşlem, destek, operasyon ve yasal yükümlülüklerin yerine getirilmesi.</li>
                <li>Operasyonel bildirimlerin ve teslimatla ilgili push bildirimlerinin gönderilmesi.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Paylaşım</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kişisel verileriniz ve konum bilgileriniz yalnızca hizmetin sunulması için gerekli olduğu ölçüde
                paylaşılır. Konum verisi, teslimat operasyonunun yürütülmesi amacıyla yetkili işletme, kurye ve
                operasyon ekipleriyle paylaşılabilir.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Barındırma, harita, rota, bildirim, güvenlik, hata izleme ve teknik altyapı süreçlerinde hizmet
                sağlayıcılardan yararlanılabilir. Yetkili kamu kurumlarıyla paylaşım ise yalnızca mevzuatın gerektirdiği
                hallerde yapılır.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. İzinler ve Kullanıcı Kontrolü</h2>
              <p className="text-gray-700 leading-relaxed">
                Konum, bildirim ve benzeri uygulama izinlerini cihaz ayarlarınızdan yönetebilir veya kapatabilirsiniz.
                Konum izninin kapatılması halinde rota takibi, teslimat koordinasyonu, tahmini teslimat süresi ve aktif
                teslimat görünürlüğü gibi konum tabanlı özellikler sınırlı çalışabilir veya kullanılamayabilir.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Saklama Süresi</h2>
              <p className="text-gray-700 leading-relaxed">
                Kişisel veriler, işleme amacı için gerekli süre boyunca ve ilgili mevzuatta öngörülen yasal saklama
                süreleri kapsamında saklanır. Konum verisi operasyonel gereklilik, teslimat güvenliği, uyuşmazlıkların
                çözümü ve yasal yükümlülükler için gerekli süre boyunca saklanır; bu süre sonunda silinir, yok edilir
                veya anonim hale getirilir.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Veri Güvenliği</h2>
              <p className="text-gray-700 leading-relaxed">
                Kişisel verilerinize yetkisiz erişimi, kaybı, hatalı kullanımı veya açıklanmasını önlemek amacıyla
                teknik ve idari güvenlik tedbirleri uygulanır. Uygulama ve sunucu iletişimlerinde güvenli aktarım
                yöntemleri kullanılır.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. KVKK Kapsamındaki Haklarınız</h2>
              <p className="text-gray-700 leading-relaxed">
                KVKK&apos;nın 11. maddesi kapsamındaki haklarınızı kullanmak, kişisel verilerinizin işlenmesine ilişkin
                bilgi almak veya gizlilik politikası hakkında soru sormak için{' '}
                <a href={`mailto:${company.email.kvkk}`} className="text-primary-600 hover:underline">
                  {company.email.kvkk}
                </a>{' '}
                adresinden bize ulaşabilirsiniz.
              </p>
            </div>

            <div className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded">
              <p className="text-gray-700">
                Bu gizlilik politikası 25 Mayıs 2026 tarihinde güncellenmiştir.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
