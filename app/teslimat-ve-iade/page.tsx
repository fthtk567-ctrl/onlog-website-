import { Package, Clock, Shield, AlertCircle } from 'lucide-react'

export const metadata = {
  title: 'On\'la Gelsin - Teslimat ve İade Şartları',
  description: 'On\'la Gelsin kurye teslimat hizmeti teslimat ve iade şartları. Teslimat süreleri, ücretlendirme, iptal ve iade koşulları.',
}

export default function TeslimatVeIade() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Teslimat ve İade Şartları</h1>
          <p className="text-xl text-primary-100">
            Son Güncelleme: 7 Mayıs 2026
          </p>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Hızlı Teslimat</h3>
              <p className="text-sm text-gray-600">Aynı gün içinde teslimat seçeneği</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Güvenli Taşıma</h3>
              <p className="text-sm text-gray-600">Paketleriniz güvende</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Sigortalı Hizmet</h3>
              <p className="text-sm text-gray-600">Değerli gönderileriniz sigorta kapsamında</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Teslimat Hizmeti Kapsamı</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                On'la Gelsin, şehir içi kurye ve yemek/market teslimat platformu olarak hizmet sunmaktadır. Hizmetlerimiz şu kapsamları içerir:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Restoran yemek siparişlerinin teslimatı</li>
                <li>Market ve süpermarket alışverişlerinin teslimatı</li>
                <li>Şehir içi paket ve dokümantasyon teslimatı (kurye hizmeti)</li>
                <li>E-ticaret siparişlerinin son kullanıcıya ulaştırılması</li>
                <li>Kurumsal kurye ve teslimat hizmetleri</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Teslimat Süreleri</h2>
              <div className="space-y-3">
                <div className="bg-primary-50 border-l-4 border-primary-600 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Standart Teslimat</h3>
                  <p className="text-gray-600">Sipariş alındıktan sonra 2-4 saat içinde teslimat yapılır.</p>
                </div>
                <div className="bg-primary-50 border-l-4 border-primary-600 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Hızlı Teslimat</h3>
                  <p className="text-gray-600">Sipariş alındıktan sonra 1-2 saat içinde teslimat yapılır.</p>
                </div>
                <div className="bg-primary-50 border-l-4 border-primary-600 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Acil Teslimat</h3>
                  <p className="text-gray-600">Sipariş alındıktan sonra 30-60 dakika içinde teslimat yapılır.</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-4 italic">
                * Teslimat süreleri trafik durumu, hava koşulları ve mesafe gibi faktörlere bağlı olarak değişiklik gösterebilir.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Teslimat Adresi ve Bilgileri</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Teslimat için gerekli bilgiler:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Alıcının tam adı ve soyadı</li>
                <li>Teslimat adresi (mahalle, sokak, bina no, daire no)</li>
                <li>Telefon numarası (alıcıya ulaşılabilecek)</li>
                <li>Varsa özel teslim talimatları</li>
              </ul>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-sm">
                    Eksik veya hatalı adres bilgisi teslimat gecikmelerine neden olabilir. Lütfen adres bilgilerinizi eksiksiz ve doğru bir şekilde giriniz.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Teslimat Ücreti</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Teslimat ücretleri aşağıdaki faktörlere göre belirlenir:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Mesafe (teslimat noktası uzaklığı)</li>
                <li>Teslimat hızı (standart, hızlı, acil)</li>
                <li>Paket boyutu ve ağırlığı</li>
                <li>Teslimat zamanı (yoğun saatler, gece teslimatı vb.)</li>
              </ul>
              <p className="text-gray-600 text-sm mt-4">
                Teslimat ücreti sipariş sırasında hesaplanır ve müşteriye bildirilir. Ücret onaylandıktan sonra teslimat başlatılır.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Teslim Alınmama Durumu</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Alıcıya ulaşılamaması veya teslimat adresinde kimsenin bulunmaması durumunda:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Kurye alıcıyı kayıtlı telefon numarasından arar</li>
                <li>15 dakika beklenir, alıcıya tekrar ulaşılmaya çalışılır</li>
                <li>Alıcıya ulaşılamazsa paket gönderene iade edilir</li>
                <li>İade edilen paketler için ek ücret talep edilebilir</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. İptal ve İade Koşulları</h2>
              
              <h3 className="font-semibold text-gray-900 mb-3 mt-4">6.1. Sipariş İptali</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mb-4">
                <li>Kurye görevlendirilmeden önce iptal edilebilir (ücretsiz)</li>
                <li>Kurye görevlendirildikten sonra iptal için teslimat ücretinin %50'si tahsil edilir</li>
                <li>Kurye paketi aldıktan sonra iptal edilemez</li>
              </ul>

              <h3 className="font-semibold text-gray-900 mb-3 mt-4">6.2. Gönderici İadesi</h3>
              <p className="text-gray-600 leading-relaxed mb-2">
                Gönderici tarafından iade talep edilebilir. İade koşulları:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Paket alıcıya teslim edilmemişse iade edilebilir</li>
                <li>İade için gidiş-dönüş teslimat ücreti tahsil edilir</li>
                <li>Hasarlı veya kayıp paketler için sigorta prosedürü uygulanır</li>
              </ul>

              <h3 className="font-semibold text-gray-900 mb-3 mt-4">6.3. Alıcı İadesi</h3>
              <p className="text-gray-600 leading-relaxed mb-2">
                Alıcı paketi teslim alırken şu durumlarda iade edebilir:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Paket hasarlı veya açılmış ise</li>
                <li>İçerik sipariş edilenle uyuşmuyorsa</li>
                <li>Yanlış adrese/kişiye teslim yapılmışsa</li>
              </ul>
              <p className="text-gray-600 text-sm mt-3 italic">
                * İade kararı gönderen ile alıcı arasındaki ticari anlaşmaya bağlıdır. On'la Gelsin sadece teslimat hizmeti sunmaktadır.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Hasar ve Kayıp Durumları</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Teslimat sırasında meydana gelebilecek hasar veya kayıp durumları:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Hasarlı paketler teslim alınmadan önce fotoğraflanmalıdır</li>
                <li>Hasar/kayıp bildirimi 24 saat içinde yapılmalıdır</li>
                <li>Sigortalı gönderiler için tazminat prosedürü başlatılır</li>
                <li>Standart gönderiler için paket değerinin %80'ine kadar tazminat ödenebilir</li>
              </ul>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  <strong>Önemli:</strong> Değerli gönderilerinizi mutlaka sigortalatınız. Sigorta ücreti paket değerine göre hesaplanır.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Yasaklı Ürünler</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Aşağıdaki ürünlerin teslimatı kabul edilmez:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Yanıcı, patlayıcı ve tehlikeli maddeler</li>
                <li>Yasadışı maddeler ve uyuşturucular</li>
                <li>Silah ve mühimmat</li>
                <li>Canlı hayvanlar</li>
                <li>Telif hakkı ihlali içeren ürünler</li>
                <li>Yasal olmayan veya etik dışı içerikler</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Sorumluluk Sınırları</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                On'la Gelsin'in sorumluluğu:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Teslimat hizmeti ile sınırlıdır, ürün içeriğinden sorumlu değiliz</li>
                <li>Alıcı ile gönderici arasındaki ticari anlaşmalara taraf değiliz</li>
                <li>Mücbir sebepler (doğal afet, savaş, terör vb.) durumunda sorumluluk alınmaz</li>
                <li>Tazminat miktarı sigorta kapsamı veya paket değeri ile sınırlıdır</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Müşteri Hakları</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Müşterilerimizin hakları:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Teslimat durumunu anlık olarak takip etme</li>
                <li>Gecikme durumunda bilgilendirilme</li>
                <li>Şikayet ve taleplerin değerlendirilmesi</li>
                <li>Kişisel verilerinin korunması (KVKK kapsamında)</li>
                <li>Hatalı teslimat durumunda düzeltme talep etme</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. İletişim</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Teslimat ve iade konularında sorularınız için:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>WhatsApp İletişim:</strong> <a href="https://wa.me/905454291076" className="text-primary-600 hover:underline">+90 545 429 10 76</a>
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>E-posta:</strong> <a href="mailto:destek@onlagelsin.com" className="text-primary-600 hover:underline">destek@onlagelsin.com</a>
                </p>
                <p className="text-gray-700">
                  <strong>Adres:</strong> Bakkalbaşı Mah. Mustafa Kemal Cad. No: 10/A Çumra / KONYA
                </p>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="text-gray-600 text-sm">
                Bu teslimat ve iade şartları 7 Mayıs 2026 tarihinde güncellenmiştir. On'la Gelsin, bu şartları önceden haber vermeksizin değiştirme hakkını saklı tutar.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
