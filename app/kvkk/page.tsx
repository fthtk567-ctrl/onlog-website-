import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: "On'la Gelsin - KVKK Aydınlatma Metni",
  description: "On'la Gelsin yemek sipariş platformu KVKK aydınlatma metni.",
  path: '/kvkk',
})

export default function KVKKPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">KVKK Aydınlatma Metni</h1>
          <p className="text-xl text-primary-100">
            Kişisel verilerinizin korunması ve işlenmesi hakkında bilgilendirme.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Veri Sorumlusu</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) kapsamında kişisel verilerinizin
                veri sorumlusu aşağıda belirtilen şirkettir:
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-800 space-y-1">
                <p className="font-semibold">ONLA GELSİN TEKNOLOJİ YAZILIM PERAKENDE LOJİSTİK VE TİCARET LİMİTED ŞİRKETİ</p>
                <p>MERSİS No: 0643086768200001</p>
                <p>Vergi Kimlik No: 6430867682</p>
                <p>Ticaret Sicil No: 003402</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. İşlenen Kişisel Veriler</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Kimlik ve iletişim bilgileri.</li>
                <li>Adres, sipariş, restoran tercihi ve işlem geçmişi bilgileri.</li>
                <li>Ödeme, fatura ve muhasebe kayıtları.</li>
                <li>Cihaz, oturum, çerez ve uygulama kullanım bilgileri.</li>
                <li>Restoran iş ortaklığı başvurularında restoran ve yetkili kişi bilgileri.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. İşleme Amaçları</h2>
              <p className="text-gray-700 leading-relaxed">
                Verileriniz sipariş oluşturma, restoranla sipariş bilgisini paylaşma, ödeme ve fatura süreçlerini
                yürütme, destek sağlama, restoran iş ortaklığı başvurularını değerlendirme, güvenliği sağlama ve
                platformu geliştirme amaçlarıyla işlenir.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Aktarım</h2>
              <p className="text-gray-700 leading-relaxed">
                Kişisel verileriniz; siparişin yerine getirilmesi için ilgili restoranlara, ödeme ve teknik altyapı
                hizmet sağlayıcılarına, yasal zorunluluklar halinde yetkili kurumlara aktarılabilir.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Haklarınız</h2>
              <p className="text-gray-700 leading-relaxed">
                KVKK&apos;nın 11. maddesi kapsamındaki haklarınızı kullanmak için
                {' '}
                <a href="mailto:kvkk@onlagelsin.com" className="text-primary-600 hover:underline">
                  kvkk@onlagelsin.com
                </a>
                {' '}
                adresinden bizimle iletişime geçebilirsiniz.
              </p>
            </div>

            <div className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded">
              <p className="text-gray-700">
                Bu aydınlatma metni 21 Mayıs 2026 tarihinde güncellenmiştir.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
