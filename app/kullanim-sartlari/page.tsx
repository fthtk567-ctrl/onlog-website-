export const metadata = {
  title: "On'la Gelsin - Kullanım Şartları",
  description: "On'la Gelsin yemek sipariş platformu kullanım şartları.",
}

export default function KullanimSartlari() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kullanım Şartları</h1>
          <p className="text-xl text-primary-100">
            On&apos;la Gelsin yemek sipariş platformunu kullanırken geçerli temel şartlar.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Hizmetin Kapsamı</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                On&apos;la Gelsin; ONLA GELSİN TEKNOLOJİ YAZILIM PERAKENDE LOJİSTİK VE TİCARET LİMİTED ŞİRKETİ
                tarafından işletilen, kullanıcıların restoranları keşfetmesini, menüleri incelemesini ve yemek siparişi
                oluşturmasını sağlayan bir pazar yeri platformudur.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Restoranlar ürün, fiyat, stok ve hazırlık bilgilerini kendi panelinden yönetir.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Kullanıcı Sorumlulukları</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Hesap, iletişim ve adres bilgilerini doğru ve güncel tutmak.</li>
                <li>Sipariş özeti, ürün içeriği, fiyat ve ödeme bilgilerini onaylamadan önce kontrol etmek.</li>
                <li>Platformu hukuka, dürüstlük kurallarına ve üçüncü kişilerin haklarına uygun kullanmak.</li>
                <li>Restoran notları ve özel taleplerde doğru, anlaşılır ve saygılı ifadeler kullanmak.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Restoran Sorumlulukları</h2>
              <p className="text-gray-700 leading-relaxed">
                Restoranlar menü içeriklerinin, fiyatların, görsellerin, alerjen ve ürün bilgilerinin doğruluğundan
                sorumludur. Siparişin hazırlanma süreci ve restoran kaynaklı iptal/güncelleme bildirimleri restoran
                tarafından yönetilir.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Ödeme ve İptal</h2>
              <p className="text-gray-700 leading-relaxed">
                Ödeme seçenekleri uygulama içinde gösterilir. İptal ve iade süreçleri siparişin hazırlanma durumuna,
                restoran onayına ve ilgili mevzuata göre değerlendirilir. Kullanıcı, siparişi tamamlamadan önce toplam
                tutarı ve seçilen ödeme yöntemini kontrol etmekle yükümlüdür.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Fikri Mülkiyet</h2>
              <p className="text-gray-700 leading-relaxed">
                On&apos;la Gelsin adı, logosu, arayüz tasarımları, yazılımı ve platform içeriği ilgili hak sahiplerine
                aittir. İzinsiz kopyalanamaz, çoğaltılamaz veya ticari amaçla kullanılamaz.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. İletişim</h2>
              <p className="text-gray-700 leading-relaxed">
                Kullanım şartlarıyla ilgili sorularınız için
                {' '}
                <a href="mailto:destek@onlagelsin.com" className="text-primary-600 hover:underline">
                  destek@onlagelsin.com
                </a>
                {' '}
                adresinden bize ulaşabilirsiniz.
              </p>
            </div>

            <div className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded">
              <p className="text-gray-700">
                Bu kullanım şartları 21 Mayıs 2026 tarihinde güncellenmiştir.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
