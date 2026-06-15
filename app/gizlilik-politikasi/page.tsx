import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: "On'la Gelsin - Gizlilik Politikası",
  description: "On'la Gelsin yemek sipariş platformu gizlilik politikası.",
  path: '/gizlilik-politikasi',
})

export default function GizlilikPolitikasi() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gizlilik Politikası</h1>
          <p className="text-xl text-primary-100">
            Kişisel verilerinizin nasıl işlendiğine ilişkin temel bilgilendirme.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-8">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-700">
              <p>
                Bu gizlilik politikası, veri sorumlusu sıfatıyla{' '}
                <span className="font-semibold text-gray-900">
                  ONLA GELSİN TEKNOLOJİ YAZILIM PERAKENDE LOJİSTİK VE TİCARET LİMİTED ŞİRKETİ
                </span>{' '}
                tarafından yayımlanmaktadır.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Toplanan Veriler</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Ad, soyad, telefon numarası ve e-posta adresi.</li>
                <li>Adres, sipariş notu ve restoran tercihleri gibi sipariş bilgileri.</li>
                <li>Ödeme işlemi için gerekli işlem ve fatura kayıtları.</li>
                <li>Cihaz, oturum, çerez ve kullanım verileri.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Kullanım Amaçları</h2>
              <p className="text-gray-700 leading-relaxed">
                Verileriniz yemek siparişinin oluşturulması, restoranla paylaşılması, ödeme sürecinin yürütülmesi,
                destek taleplerinin yanıtlanması, güvenliğin sağlanması ve platform deneyiminin iyileştirilmesi
                amaçlarıyla işlenir.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Paylaşım</h2>
              <p className="text-gray-700 leading-relaxed">
                Siparişin hazırlanması için gerekli bilgiler ilgili restoranla paylaşılabilir. Ödeme, barındırma,
                bildirim ve destek süreçlerinde hizmet sağlayıcılardan yararlanılabilir. Verileriniz yasal zorunluluklar
                dışında üçüncü kişilerle amaç dışı paylaşılmaz.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Haklarınız</h2>
              <p className="text-gray-700 leading-relaxed">
                KVKK kapsamındaki haklarınızı kullanmak veya gizlilik politikası hakkında soru sormak için
                {' '}
                <a href="mailto:kvkk@onlagelsin.com" className="text-primary-600 hover:underline">
                  kvkk@onlagelsin.com
                </a>
                {' '}
                adresinden bize ulaşabilirsiniz.
              </p>
            </div>

            <div className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded">
              <p className="text-gray-700">
                Bu gizlilik politikası 21 Mayıs 2026 tarihinde güncellenmiştir.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
