import Link from 'next/link'

export default function SSS() {
  const faqs = [
    {
      category: "Genel Sorular",
      questions: [
        {
          q: "OnLog nedir?",
          a: "OnLog, şehir içi hızlı kurye teslimat hizmetleri sunan bir platformdur. Bireysel ve kurumsal müşterilere gün içinde teslimat garantisi sağlıyoruz."
        },
        {
          q: "Hangi şehirlerde hizmet veriyorsunuz?",
          a: "Şu anda İstanbul, Ankara, İzmir ve Konya'da hizmet vermekteyiz. Yakında yeni şehirler eklenecektir."
        },
        {
          q: "Teslimat saatleri nedir?",
          a: "Hafta içi 09:00-22:00, hafta sonu 10:00-20:00 saatleri arasında teslimat yapıyoruz."
        }
      ]
    },
    {
      category: "Fiyatlandırma",
      questions: [
        {
          q: "Kurye ücreti nasıl hesaplanır?",
          a: "Kurye ücreti mesafeye, ağırlığa ve teslimat hızına göre hesaplanır. Minimum ücret 136.90 TL'den başlamaktadır."
        },
        {
          q: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
          a: "Kredi kartı, banka kartı, havale/EFT ve kapıda ödeme seçeneklerimiz mevcuttur."
        },
        {
          q: "Toplu teslimat indirimi var mı?",
          a: "Evet, kurumsal müşterilerimiz için özel fiyatlandırma ve indirim paketlerimiz bulunmaktadır."
        }
      ]
    },
    {
      category: "Teslimat",
      questions: [
        {
          q: "Gönderimi nasıl takip edebilirim?",
          a: "Web sitemiz veya mobil uygulamamız üzerinden gönderi numaranızla canlı takip yapabilirsiniz."
        },
        {
          q: "Teslimat yapılamazsa ne olur?",
          a: "Alıcıya ulaşılamazsa sizinle iletişime geçilir ve yeniden teslimat planlanır veya iade edilir."
        },
        {
          q: "Maksimum gönderi ağırlığı nedir?",
          a: "Standart gönderiler için 200 kg'ye kadar kabul ediyoruz. Daha ağır gönderiler için özel çözümlerimiz mevcuttur."
        }
      ]
    },
    {
      category: "Kurye Olmak",
      questions: [
        {
          q: "Kurye olmak için neler gerekli?",
          a: "18 yaş üstü, ehliyet sahibi, temiz sicil kaydına sahip olmak ve kendi aracınız bulunması gerekmektedir."
        },
        {
          q: "Kazanç nasıl hesaplanır?",
          a: "Tamamladığınız teslimat sayısı ve mesafeye göre kazanç elde edersiniz. Ortalama aylık kazanç 15.000-30.000 TL arasındadır."
        },
        {
          q: "Esnek çalışma saatleri var mı?",
          a: "Evet, kendi çalışma saatlerinizi belirleyebilir, istediğiniz zaman çalışabilirsiniz."
        }
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sık Sorulan Sorular</h1>
          <p className="text-xl text-green-100">
            Merak ettiklerinizin cevaplarını burada bulabilirsiniz
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {faqs.map((category, idx) => (
            <div key={idx} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-green-500 pb-2">
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
          <div className="bg-green-50 rounded-xl p-8 text-center mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Sorunuza cevap bulamadınız mı?
            </h3>
            <p className="text-gray-600 mb-6">
              Müşteri hizmetleri ekibimiz size yardımcı olmaktan mutluluk duyar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Bize Ulaşın
              </Link>
              <a
                href="tel:+905342447504"
                className="bg-white text-green-600 border-2 border-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
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
