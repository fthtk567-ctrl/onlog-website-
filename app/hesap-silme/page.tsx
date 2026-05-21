export const metadata = {
  title: "On'la Gelsin - Hesap Silme",
  description: "On'la Gelsin uygulama hesabınızı silme talebi.",
}

export default function HesapSilmePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hesap Silme</h1>
          <p className="text-xl text-primary-100">
            On&apos;la Gelsin uygulama hesabınızın silinmesi için talep oluşturabilirsiniz.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hesap Silindiğinde</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Hesabınıza giriş yapamazsınız.</li>
                <li>Profil, adres ve uygulama tercihleri silinir.</li>
                <li>Yasal saklama yükümlülüğü bulunan ödeme ve fatura kayıtları mevzuat süresince saklanabilir.</li>
                <li>Anonim istatistiksel veriler platform güvenliği ve raporlama için kullanılabilir.</li>
              </ul>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Ad Soyad *</label>
                  <input className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500" required />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Telefon *</label>
                  <input type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500" required />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">E-posta *</label>
                <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500" required />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Talep Açıklaması</label>
                <textarea rows={5} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500" />
              </div>

              <div className="flex items-start gap-3">
                <input id="confirm-delete" type="checkbox" required className="mt-1" />
                <label htmlFor="confirm-delete" className="text-sm text-gray-600">
                  Hesap silme talebimin sonuçlarını okudum ve onaylıyorum.
                </label>
              </div>

              <button type="submit" className="w-full bg-primary-600 text-white py-4 rounded-lg font-semibold hover:bg-primary-700 transition">
                Hesap Silme Talebi Gönder
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-8">
              Talebinizi
              {' '}
              <a href="mailto:destek@onlagelsin.com" className="text-primary-600 hover:underline">destek@onlagelsin.com</a>
              {' '}
              adresine e-posta göndererek de iletebilirsiniz.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
