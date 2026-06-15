import Link from 'next/link'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: "On'la Gelsin - Sık Sorulan Sorular",
  description: "On'la Gelsin yemek sipariş uygulaması, restoran paneli ve iş ortaklığı hakkında sık sorulan sorular.",
  path: '/sss',
  keywords: ["on'la gelsin sss", 'yemek siparişi soruları', 'restoran paneli soruları'],
})

export default function SSS() {
  const faqs = [
    {
      category: 'Genel Sorular',
      questions: [
        {
          q: "On'la Gelsin nedir?",
          a: "On'la Gelsin, kullanıcıları yerel restoranlarla buluşturan yerli ve milli bir yemek sipariş platformudur.",
        },
        {
          q: 'Hangi hizmeti veriyorsunuz?',
          a: 'Yalnızca yemek siparişi alanına odaklanıyoruz. Kullanıcılar restoranları keşfeder, menüleri inceler ve uygulama üzerinden yemek siparişi verir.',
        },
        {
          q: 'Uygulamayı nereden indirebilirim?',
          a: "On'la Gelsin uygulamasını App Store ve Google Play üzerinden indirebilirsiniz.",
        },
      ],
    },
    {
      category: 'Sipariş ve Ödeme',
      questions: [
        {
          q: 'Nasıl sipariş veririm?',
          a: 'Uygulamayı açıp yakınınızdaki restoranları inceleyebilir, ürünleri sepete ekleyebilir ve ödeme adımını tamamlayarak sipariş oluşturabilirsiniz.',
        },
        {
          q: 'Hangi ödeme yöntemleri var?',
          a: 'Kartla ödeme altyapısı ve güvenli ödeme deneyimi sunuyoruz. Aktif ödeme seçenekleri uygulama içinde görüntülenir.',
        },
        {
          q: 'Sipariş durumunu görebilir miyim?',
          a: 'Evet. Restoran siparişi aldığında ve hazırlık durumu güncellendiğinde süreç uygulama üzerinden takip edilebilir.',
        },
      ],
    },
    {
      category: 'Restoran İş Ortaklığı',
      questions: [
        {
          q: "Restoranımı On'la Gelsin'e nasıl eklerim?",
          a: 'İş ortağı başvuru formunu doldurabilirsiniz. Ekibimiz restoran bilgilerinizi değerlendirip sizinle iletişime geçer.',
        },
        {
          q: 'Restoran panelinde neler yapabilirim?',
          a: 'Menünüzü, fiyatlarınızı, restoran bilgilerinizi, gelen siparişleri ve satış raporlarınızı panelden yönetebilirsiniz.',
        },
        {
          q: 'Komisyon modeli nedir?',
          a: 'Restoran paneli sayfasında belirtilen komisyon yapısı başlangıç bilgisidir. Net çalışma modeli restoranınızın ihtiyaçlarına göre görüşülür.',
        },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sık Sorulan Sorular</h1>
          <p className="text-xl text-primary-100">
            Yemek siparişi, uygulama ve restoran iş ortaklığı hakkında merak edilenler
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {faqs.map((category, idx) => (
            <div key={idx} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-primary-500 pb-2">
                {category.category}
              </h2>
              <div className="space-y-6">
                {category.questions.map((item, qIdx) => (
                  <div key={qIdx} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {item.q}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Contact CTA */}
          <div className="bg-primary-50 rounded-xl p-8 text-center mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Sorunuza cevap bulamadınız mı?
            </h3>
            <p className="text-gray-600 mb-6">
              Destek ekibimiz size yardımcı olmaktan mutluluk duyar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
              >
                Bize Ulaşın
              </Link>
              <a
                href="tel:+905374291076"
                className="bg-white text-primary-600 border-2 border-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition"
              >
                Hemen Ara
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
