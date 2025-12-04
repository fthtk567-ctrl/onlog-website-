import Link from 'next/link'

export default function KullanimSartlari() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kullanım Şartları</h1>
          <p className="text-xl text-primary-100">
            Son Güncelleme: 28 Ekim 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Genel Hükümler</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                İşbu Kullanım Şartları, On'la Gelsin (&quot;Şirket&quot;) tarafından sunulan kurye ve teslimat hizmetlerinin kullanımına ilişkin genel şartları düzenlemektedir. On'la Gelsin platformunu kullanarak bu şartları kabul etmiş sayılırsınız.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Şirket, bu şartları önceden haber vermeksizin değiştirme hakkını saklı tutar. Değişiklikler web sitemizde yayınlandığı andan itibaren geçerli olacaktır.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Hizmet Kapsamı</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                On'la Gelsin, şehir içi kurye ve teslimat hizmetleri sunmaktadır. Hizmetlerimiz şunları içerir:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Gün içi teslimat hizmetleri</li>
                <li>Evrak ve belge teslimatı</li>
                <li>Paket ve kargo teslimatı</li>
                <li>E-ticaret teslimat çözümleri</li>
                <li>Kurumsal toplu teslimat hizmetleri</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Kullanıcı Sorumlulukları</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kullanıcılar aşağıdaki hususlardan sorumludur:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Gönderi bilgilerinin doğru ve eksiksiz olarak girilmesi</li>
                <li>Yasaklı ve tehlikeli maddelerin gönderilmemesi</li>
                <li>Gönderinin uygun şekilde paketlenmesi</li>
                <li>Teslimat adresinin doğru ve erişilebilir olması</li>
                <li>Ödeme yükümlülüklerinin zamanında yerine getirilmesi</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Yasaklı Maddeler</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Aşağıdaki maddeler taşınmaz:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Patlayıcı, yanıcı ve tehlikeli maddeler</li>
                <li>Silah ve mühimmat</li>
                <li>Uyuşturucu ve yasal olmayan maddeler</li>
                <li>Canlı hayvanlar</li>
                <li>Kanuna aykırı ürünler</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Fiyatlandırma ve Ödeme</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Teslimat ücretleri mesafe, ağırlık ve teslimat hızına göre belirlenir. Tüm fiyatlar KDV dahildir.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Ödeme, sipariş sırasında kredi kartı, banka kartı veya kapıda ödeme yöntemleriyle yapılabilir. Kurumsal müşteriler için fatura ve havale/EFT seçenekleri mevcuttur.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. İptal ve İade</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Henüz kurye tarafından alınmamış siparişler ücretsiz olarak iptal edilebilir. Kurye tarafından alındıktan sonra yapılan iptallerde ücret iadesi yapılmaz.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Teslimat yapılamayan gönderiler için yeniden teslimat ücreti alınabilir veya gönderi iade edilir.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Sorumluluk Sınırlaması</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                On'la Gelsin, standart gönderi değeri için yasal sorumluluk kapsamında teminat sağlar. Yüksek değerli gönderiler için ek sigorta yapılması önerilir.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Hava koşulları, trafik, doğal afetler gibi mücbir sebeplerden kaynaklanan gecikmelerden Şirket sorumlu tutulamaz.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Fikri Mülkiyet</h2>
              <p className="text-gray-600 leading-relaxed">
                On'la Gelsin web sitesi ve mobil uygulamasında yer alan tüm içerik, logo, tasarım ve yazılımlar Şirket&apos;in fikri mülkiyetidir ve izinsiz kullanılamaz.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Uyuşmazlık Çözümü</h2>
              <p className="text-gray-600 leading-relaxed">
                İşbu sözleşmeden doğabilecek uyuşmazlıklarda Konya Mahkemeleri ve İcra Daireleri yetkilidir.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. İletişim</h2>
              <p className="text-gray-600 leading-relaxed mb-2">
                Sorularınız için bizimle iletişime geçebilirsiniz:
              </p>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <p className="text-gray-700">
                  <strong>E-posta:</strong> <a href="mailto:destek@onlagelsin.com" className="text-primary-600 hover:underline">destek@onlagelsin.com</a>
                </p>
                <p className="text-gray-700">
                  <strong>Telefon:</strong> <a href="tel:+905342447504" className="text-primary-600 hover:underline">+90 534 244 7504</a>
                </p>
                <p className="text-gray-700">
                  <strong>Adres:</strong> Bakkalbaşı Mah. Mustafa Kemal Cad. No: 10/A Çumra / KONYA
                </p>
              </div>
            </div>

          </div>

          {/* Back to Home */}
          <div className="text-center mt-8">
            <Link href="/" className="text-primary-600 hover:underline font-semibold">
              ← Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
