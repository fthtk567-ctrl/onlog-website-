import Link from 'next/link'

export default function CerezPolitikasi() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Çerez Politikası</h1>
          <p className="text-xl text-green-100">
            Son Güncelleme: 28 Ekim 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Çerez Nedir?</h2>
              <p className="text-gray-600 leading-relaxed">
                Çerezler, web sitelerini ziyaret ettiğinizde tarayıcınız aracılığıyla cihazınıza (bilgisayar, telefon, tablet) kaydedilen küçük metin dosyalarıdır. Çerezler, web sitesinin düzgün çalışmasını sağlamak, kullanıcı deneyimini iyileştirmek ve site performansını analiz etmek amacıyla kullanılır.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Çerez Türleri</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2.1 Zorunlu Çerezler</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Web sitesinin temel işlevlerini yerine getirmesi için gerekli olan çerezlerdir. Bu çerezler olmadan site düzgün çalışmaz. Oturum yönetimi, güvenlik ve temel işlevsellik için kullanılır.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2.2 Performans Çerezleri</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ziyaretçilerin web sitesini nasıl kullandığını anlamamıza yardımcı olan çerezlerdir. Hangi sayfaların en çok ziyaret edildiği, ne kadar süre kalındığı gibi bilgileri toplar. Bu veriler anonim olarak toplanır ve site performansını iyileştirmek için kullanılır.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2.3 İşlevsel Çerezler</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Kullanıcı tercihlerinizi hatırlamak için kullanılan çerezlerdir. Dil tercihi, bölge ayarları ve diğer kişiselleştirme seçeneklerini saklar.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2.4 Hedefleme/Reklam Çerezleri</h3>
                  <p className="text-gray-600 leading-relaxed">
                    İlgi alanlarınıza uygun içerik ve reklamlar göstermek için kullanılır. Üçüncü taraf reklam ağları tarafından da kullanılabilir.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. OnLog&apos;un Kullandığı Çerezler</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 border text-left">Çerez Adı</th>
                      <th className="px-4 py-2 border text-left">Türü</th>
                      <th className="px-4 py-2 border text-left">Amaç</th>
                      <th className="px-4 py-2 border text-left">Süre</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="px-4 py-2 border">session_id</td>
                      <td className="px-4 py-2 border">Zorunlu</td>
                      <td className="px-4 py-2 border">Oturum yönetimi</td>
                      <td className="px-4 py-2 border">Oturum süresi</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">user_preferences</td>
                      <td className="px-4 py-2 border">İşlevsel</td>
                      <td className="px-4 py-2 border">Kullanıcı tercihleri</td>
                      <td className="px-4 py-2 border">1 yıl</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">_ga</td>
                      <td className="px-4 py-2 border">Performans</td>
                      <td className="px-4 py-2 border">Google Analytics</td>
                      <td className="px-4 py-2 border">2 yıl</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">cookie_consent</td>
                      <td className="px-4 py-2 border">Zorunlu</td>
                      <td className="px-4 py-2 border">Çerez onayı</td>
                      <td className="px-4 py-2 border">1 yıl</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Üçüncü Taraf Çerezler</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Web sitemizde aşağıdaki üçüncü taraf hizmetler kullanılmaktadır:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li><strong>Google Analytics:</strong> Site trafiği ve kullanıcı davranışı analizi</li>
                <li><strong>Google Maps:</strong> Harita ve konum hizmetleri</li>
                <li><strong>Sosyal Medya Eklentileri:</strong> Facebook, Twitter, Instagram paylaşım butonları</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Bu hizmetler kendi çerez politikalarına sahiptir. Detaylı bilgi için ilgili platformların gizlilik politikalarını inceleyebilirsiniz.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Çerezleri Nasıl Kontrol Edebilirsiniz?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Çerezleri kontrol etmek veya silmek için tarayıcı ayarlarınızı kullanabilirsiniz:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li><strong>Chrome:</strong> Ayarlar → Gizlilik ve güvenlik → Çerezler</li>
                <li><strong>Firefox:</strong> Seçenekler → Gizlilik ve Güvenlik → Çerezler</li>
                <li><strong>Safari:</strong> Tercihler → Gizlilik → Çerezler</li>
                <li><strong>Edge:</strong> Ayarlar → Çerezler ve site izinleri</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4 bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <strong>Uyarı:</strong> Çerezleri tamamen devre dışı bırakırsanız, web sitemizin bazı özellikleri düzgün çalışmayabilir.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Çerez Onayınızı Değiştirme</h2>
              <p className="text-gray-600 leading-relaxed">
                Çerez tercihlerinizi istediğiniz zaman değiştirebilirsiniz. Ayarlarınızı güncellemek için sayfanın altındaki &quot;Çerez Ayarları&quot; linkine tıklayabilirsiniz.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Güncellemeler</h2>
              <p className="text-gray-600 leading-relaxed">
                Bu Çerez Politikası, gerektiğinde güncellenebilir. Değişiklikler bu sayfada yayınlanacak ve güncelleme tarihi belirtilecektir.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. İletişim</h2>
              <div className="bg-green-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Çerez politikamız hakkında sorularınız için:
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <strong>E-posta:</strong> <a href="mailto:destek@onlog.com.tr" className="text-green-600 hover:underline">destek@onlog.com.tr</a>
                  </p>
                  <p className="text-gray-700">
                    <strong>Telefon:</strong> <a href="tel:+905342447504" className="text-green-600 hover:underline">+90 534 244 7504</a>
                  </p>
                  <p className="text-gray-700">
                    <strong>Adres:</strong> Bakkalbaşı Mah. Mustafa Kemal Cad. No: 10/A Çumra / KONYA
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Back to Home */}
          <div className="text-center mt-8">
            <Link href="/" className="text-green-600 hover:underline font-semibold">
              ← Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
