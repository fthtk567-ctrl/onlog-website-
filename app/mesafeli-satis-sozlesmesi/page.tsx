export const metadata = {
  title: "On'la Gelsin - Mesafeli Satış Sözleşmesi",
  description: "On'la Gelsin yemek sipariş platformu mesafeli satış sözleşmesi bilgilendirmesi.",
}

export default function MesafeliSatisSozlesmesi() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mesafeli Satış Sözleşmesi</h1>
          <p className="text-xl text-primary-100">
            Yemek siparişleri için temel sözleşme ve ön bilgilendirme esasları.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Taraflar</h2>
              <p className="text-gray-700 leading-relaxed">
                İşbu metin, On&apos;la Gelsin platformu üzerinden yemek siparişi veren kullanıcı ile siparişi kabul eden
                restoran arasındaki mesafeli işlem sürecine ilişkin genel bilgilendirme niteliğindedir. On&apos;la Gelsin,
                kullanıcı ve restoranı bir araya getiren pazar yeri platformudur.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Ürün ve Hizmet Bilgileri</h2>
              <p className="text-gray-700 leading-relaxed">
                Siparişe konu ürünlerin adı, içeriği, fiyatı, varsa seçenekleri ve toplam tutarı sipariş özeti ekranında
                gösterilir. Kullanıcı, siparişi tamamlamadan önce bu bilgileri kontrol eder ve onaylar.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Ödeme</h2>
              <p className="text-gray-700 leading-relaxed">
                Ödeme yöntemi ve toplam tutar uygulama içinde belirtilir. Kartlı ödemeler güvenli ödeme altyapısı
                üzerinden gerçekleştirilir. Fatura ve ödeme kayıtları ilgili mevzuata uygun şekilde saklanır.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cayma, İptal ve İade</h2>
              <p className="text-gray-700 leading-relaxed">
                Yemek siparişleri hızlı bozulan, kişiye özel hazırlanabilen ve hijyen hassasiyeti taşıyan ürünler
                içerebilir. Bu nedenle iptal ve iade talepleri siparişin onaylanma ve hazırlanma durumuna göre,
                ilgili mevzuat çerçevesinde değerlendirilir.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Uyuşmazlık ve İletişim</h2>
              <p className="text-gray-700 leading-relaxed">
                Siparişe ilişkin talepler için
                {' '}
                <a href="mailto:destek@onlagelsin.com" className="text-primary-600 hover:underline">
                  destek@onlagelsin.com
                </a>
                {' '}
                adresinden destek ekibimize ulaşabilirsiniz. Tüketici işlemleri bakımından ilgili mevzuatta öngörülen
                haklar saklıdır.
              </p>
            </div>

            <div className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded">
              <p className="text-gray-700">
                Bu metin 21 Mayıs 2026 tarihinde güncellenmiştir.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
