import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: "On'la Gelsin - Veri Silme Talebi",
  description: "On'la Gelsin hesabınızla ilişkili kişisel veriler için veri silme talebi.",
  path: '/veri-silme',
})

export default function VeriSilmePage() {
  const deletedData = [
    'Hesap ve profil bilgileri',
    'İletişim bilgileri',
    'Adres kayıtları',
    'Uygulama tercihleri',
    'Destek yazışmaları',
  ];

  const retainedData = [
    'Yasal saklama yükümlülüğü bulunan ödeme ve fatura kayıtları',
    'Uyuşmazlık, güvenlik ve muhasebe süreçleri için zorunlu kayıtlar',
    'Anonim hale getirilmiş istatistiksel veriler',
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Veri Silme Talebi</h1>
          <p className="text-xl text-primary-100">
            On&apos;la Gelsin hesabınızla ilişkili kişisel veriler için silme talebi oluşturabilirsiniz.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Silinebilecek Veriler</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  {deletedData.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Saklanabilecek Veriler</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  {retainedData.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Talep Formu</h2>
              <form className="space-y-5">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Ad Soyad *</label>
                  <input className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500" required />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Telefon *</label>
                  <input type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500" required />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">E-posta *</label>
                  <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500" required />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Talep Detayı</label>
                  <textarea rows={5} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                </div>
                <button type="submit" className="w-full bg-primary-600 text-white py-4 rounded-lg font-semibold hover:bg-primary-700 transition">
                  Talebi Gönder
                </button>
              </form>
              <p className="text-sm text-gray-500 mt-6">
                Alternatif olarak talebinizi
                {' '}
                <a href="mailto:kvkk@onlagelsin.com" className="text-primary-600 hover:underline">kvkk@onlagelsin.com</a>
                {' '}
                adresine iletebilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
