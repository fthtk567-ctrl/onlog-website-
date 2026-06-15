import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: "On'la Gelsin - Teslimat ve İade Şartları",
  description: "On'la Gelsin yemek siparişleri için teslimat, iptal ve iade bilgilendirmesi.",
  path: '/teslimat-ve-iade',
})

export default function TeslimatVeIade() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Teslimat ve İade Şartları</h1>
          <p className="text-xl text-primary-100">
            Yemek siparişleriniz için temel teslimat, iptal ve iade süreçleri.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Kapsam</h2>
              <p className="text-gray-700 leading-relaxed">
                On&apos;la Gelsin, restoranlardan verilen yemek siparişleri için kullanıcı, restoran ve ödeme akışını
                bir araya getiren pazar yeri platformudur. Siparişin hazırlanması, ürün içeriği ve restoran kaynaklı
                bilgilendirmeler ilgili restoran tarafından yönetilir.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Sipariş Hazırlığı ve Teslimat Bilgisi</h2>
              <p className="text-gray-700 leading-relaxed">
                Tahmini süreler restoran yoğunluğu, ürün hazırlık süresi, adres doğruluğu, trafik ve hava koşulları
                gibi faktörlere göre değişebilir. Uygulamadaki süreler bilgilendirme amaçlıdır.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Adres ve İletişim Bilgileri</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Adres, telefon ve sipariş notlarının doğru girilmesi kullanıcının sorumluluğundadır.</li>
                <li>Eksik veya hatalı bilgi siparişin gecikmesine ya da tamamlanamamasına neden olabilir.</li>
                <li>Restoran veya destek ekibi gerekli durumlarda kayıtlı iletişim bilgileri üzerinden ulaşabilir.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. İptal ve İade</h2>
              <p className="text-gray-700 leading-relaxed">
                Sipariş iptali ve iade talepleri, siparişin restoran tarafından onaylanıp onaylanmadığına ve hazırlık
                durumuna göre değerlendirilir. Kişiye özel hazırlanan, hızlı bozulan veya hijyen açısından geri alınması
                uygun olmayan ürünlerde iade hakkı mevzuat çerçevesinde sınırlı olabilir.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Sorun Bildirimi</h2>
              <p className="text-gray-700 leading-relaxed">
                Eksik, hatalı veya sorunlu siparişlerde destek ekibimize uygulama kanalları veya
                {' '}
                <a href="mailto:destek@onlagelsin.com" className="text-primary-600 hover:underline">
                  destek@onlagelsin.com
                </a>
                {' '}
                üzerinden ulaşabilirsiniz. Talebiniz restoran ve ödeme kayıtlarıyla birlikte değerlendirilir.
              </p>
            </div>

            <div className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded">
              <p className="text-gray-700">
                Bu teslimat ve iade şartları 21 Mayıs 2026 tarihinde güncellenmiştir.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
