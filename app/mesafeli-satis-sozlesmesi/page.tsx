import { FileText, User, Package, CreditCard } from 'lucide-react'

export const metadata = {
  title: 'On\'la Gelsin - Mesafeli Satış Sözleşmesi',
  description: 'On\'la Gelsin yemek sipariş, market alışverişi ve kurye teslimat hizmeti mesafeli satış sözleşmesi.',
}

export default function MesafeliSatisSozlesmesi() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mesafeli Satış Sözleşmesi</h1>
          <p className="text-xl text-primary-100">
            Son Güncelleme: 7 Mayıs 2026
          </p>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Sözleşme</h3>
              <p className="text-sm text-gray-600">6502 sayılı kanun kapsamında</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Müşteri Hakları</h3>
              <p className="text-sm text-gray-600">Tüketici haklarınız korunur</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Teslimat</h3>
              <p className="text-sm text-gray-600">Hızlı ve güvenli teslimat</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Güvenli Ödeme</h3>
              <p className="text-sm text-gray-600">Güvenli ödeme altyapısı</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">MADDE 1 - TARAFLAR</h2>
              
              <h3 className="font-semibold text-gray-900 mb-3 mt-4">1.1. SATICI (HİZMET SAĞLAYICI) BİLGİLERİ</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Ünvan:</strong> Teketech Technologies / On'la Gelsin</p>
                <p className="text-gray-700 mb-2"><strong>Adres:</strong> Bakkalbaşı Mah. Mustafa Kemal Cad. No: 10/A Çumra / KONYA</p>
                <p className="text-gray-700 mb-2"><strong>E-posta:</strong> destek@onlagelsin.com</p>
                <p className="text-gray-700 mb-2"><strong>WhatsApp:</strong> +90 545 429 10 76</p>
              </div>

              <h3 className="font-semibold text-gray-900 mb-3 mt-4">1.2. ALICI (MÜŞTERİ) BİLGİLERİ</h3>
              <p className="text-gray-600 leading-relaxed">
                Alıcı bilgileri sipariş esnasında kayıt sırasında veya uygulama üzerinden girilecek bilgilerdir. 
                Alıcı, sipariş vermekle bu sözleşmenin tüm maddelerini kabul etmiş sayılır.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">MADDE 2 - KONU</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                İşbu Sözleşmenin konusu, ALICI'nın SATICI'ya ait onlagelsin.com internet sitesi ve mobil uygulamalar 
                üzerinden elektronik ortamda siparişini verdiği aşağıdaki hizmetlerin satışı ve teslimi ile ilgili olarak 
                6502 sayılı Tüketicinin Korunması Hakkındaki Kanun - Mesafeli Sözleşmeler Yönetmeliği hükümleri gereğince 
                tarafların hak ve yükümlülüklerinin saptanmasıdır.
              </p>
              <div className="bg-primary-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Sözleşme kapsamındaki hizmetler:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Restoran yemek siparişi ve teslimat hizmeti</li>
                  <li>Market/süpermarket alışveriş ve teslimat hizmeti</li>
                  <li>Şehir içi kurye ve paket teslimat hizmeti</li>
                  <li>E-ticaret entegrasyonlu teslimat hizmeti</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">MADDE 3 - SÖZLEŞMENİN KONUSU HİZMET VE ÖDEME BİLGİLERİ</h2>
              
              <h3 className="font-semibold text-gray-900 mb-3 mt-4">3.1. Hizmet Özellikleri</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Sipariş verilen ürün/hizmetin türü, miktarı, fiyatı ve teslimat süresi sipariş özeti ekranında gösterilir. 
                ALICI, sipariş vermeden önce bu bilgileri kontrol etme ve onaylama hakkına sahiptir.
              </p>

              <h3 className="font-semibold text-gray-900 mb-3 mt-4">3.2. Ücretler</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li><strong>Ürün Bedeli:</strong> Restoran/market tarafından belirlenen ürün fiyatları</li>
                <li><strong>Teslimat Ücreti:</strong> Mesafe, süre ve hizmet türüne göre değişken ücret</li>
                <li><strong>Hizmet Bedeli:</strong> Platform kullanım ve koordinasyon hizmeti ücreti</li>
                <li><strong>KDV:</strong> Yasal oranlarda hesaplanan katma değer vergisi</li>
              </ul>
              <p className="text-gray-600 text-sm mt-3 italic">
                * Tüm ücretler sipariş öncesi açık ve net şekilde gösterilir. Gizli ücret yoktur.
              </p>

              <h3 className="font-semibold text-gray-900 mb-3 mt-4">3.3. Ödeme Şekli</h3>
              <p className="text-gray-600 leading-relaxed mb-2">
                ALICI aşağıdaki ödeme yöntemlerinden birini tercih edebilir:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Kredi kartı (Visa, MasterCard, American Express, Troy)</li>
                <li>Banka kartı (Debit kart)</li>
                <li>Online ödeme (iyzico altyapısı)</li>
                <li>Kapıda ödeme (nakit veya kart ile - seçili siparişlerde)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">MADDE 4 - GENEL HÜKÜMLER</h2>
              
              <h3 className="font-semibold text-gray-900 mb-3 mt-4">4.1. Sipariş Süreci</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 ml-4">
                <li>ALICI, mobil uygulama veya web sitesi üzerinden ürün/hizmet seçer</li>
                <li>Teslimat adresi ve iletişim bilgileri girilir</li>
                <li>Ödeme yöntemi seçilir ve ödeme yapılır</li>
                <li>Sipariş onaylanır ve hazırlık süreci başlar</li>
                <li>Kurye görevlendirilir ve teslimat gerçekleştirilir</li>
              </ol>

              <h3 className="font-semibold text-gray-900 mb-3 mt-4">4.2. Sipariş Onayı</h3>
              <p className="text-gray-600 leading-relaxed">
                Sipariş tamamlandıktan sonra ALICI'ya SMS ve/veya e-posta ile sipariş onay bildirimi gönderilir. 
                Bu bildirimde sipariş numarası, tahmini teslimat süresi ve sipariş detayları yer alır.
              </p>

              <h3 className="font-semibold text-gray-900 mb-3 mt-4">4.3. Teslimat</h3>
              <p className="text-gray-600 leading-relaxed mb-2">
                Teslimat süreleri sipariş türüne göre değişiklik gösterir:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li><strong>Yemek Siparişi:</strong> 30-60 dakika (restoran hazırlık süresine bağlı)</li>
                <li><strong>Market Siparişi:</strong> 45-90 dakika (ürün toplama süresine bağlı)</li>
                <li><strong>Kurye Hizmeti:</strong> 30 dakika - 4 saat (hizmet türüne göre)</li>
              </ul>
              <p className="text-gray-600 text-sm mt-3 italic">
                * Sürelar tahminidir ve trafik, hava koşulları gibi faktörlerden etkilenebilir.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">MADDE 5 - CAYMA HAKKI</h2>
              
              <h3 className="font-semibold text-gray-900 mb-3 mt-4">5.1. Cayma Hakkının Kullanımı</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                6502 sayılı Tüketicinin Korunması Hakkında Kanun'un 15. maddesi ve Mesafeli Sözleşmeler Yönetmeliği 
                uyarınca, ALICI aşağıdaki koşullarda cayma hakkını kullanabilir:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Sipariş henüz hazırlanmaya başlanmadıysa (ücretsiz iptal)</li>
                <li>Sipariş hazırlanmaya başlandıysa fakat kurye görevlendirilmediyse (kısmi ücret iadesi)</li>
                <li>Kurye görevlendirildikten sonra iptal için teslimat ücretinin %50'si tahsil edilir</li>
              </ul>

              <h3 className="font-semibold text-gray-900 mb-3 mt-4">5.2. Cayma Hakkının İstisnaları</h3>
              <p className="text-gray-600 leading-relaxed mb-2">
                Mesafeli Sözleşmeler Yönetmeliği'nin 15. maddesi gereği, aşağıdaki durumlarda cayma hakkı kullanılamaz:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Çabuk bozulabilen veya son kullanma tarihi geçebilecek mallar (yiyecek, içecek vb.)</li>
                <li>Teslimattan sonra ambalajı açılmış, kullanılmış veya bozulmuş ürünler</li>
                <li>Hijyen ve sağlık açısından geri gönderilmeye uygun olmayan ürünler</li>
                <li>Teslimattan sonra başka ürünlerle karışan ve ayrıştırılması mümkün olmayan mallar</li>
              </ul>

              <h3 className="font-semibold text-gray-900 mb-3 mt-4">5.3. İptal ve İade Prosedürü</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 ml-4">
                <li>İptal talebi uygulama üzerinden veya müşteri hizmetleri ile iletilir</li>
                <li>İptal talebi değerlendirilir ve onaylanır</li>
                <li>Ödeme yapılan tutar 5-10 iş günü içinde iade edilir</li>
                <li>İade, ödemenin yapıldığı yöntem ile gerçekleştirilir</li>
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">MADDE 6 - SATICI'NIN YÜKÜMLÜLÜKLERİ</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                SATICI, aşağıdaki yükümlülükleri yerine getirmeyi taahhüt eder:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Siparişi eksiksiz, doğru ve zamanında teslim etmek</li>
                <li>Müşteri bilgilerini gizli tutmak ve korumak (KVKK kapsamında)</li>
                <li>Ürün/hizmet bilgilerini doğru ve eksiksiz şekilde sunmak</li>
                <li>Fiyat ve ücretleri şeffaf şekilde göstermek</li>
                <li>Müşteri şikayetlerini değerlendirmek ve çözüme kavuşturmak</li>
                <li>Yasal düzenlemelere uymak</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">MADDE 7 - ALICI'NIN YÜKÜMLÜLÜKLERİ</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                ALICI, aşağıdaki yükümlülükleri yerine getirmeyi kabul eder:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Doğru ve eksiksiz bilgi (adres, telefon vb.) vermek</li>
                <li>Sipariş bedelini zamanında ödemek</li>
                <li>Teslimat sırasında adresinde bulunmak veya teslim alacak birini görevlendirmek</li>
                <li>Siparişi teslim alırken kontrol etmek (hasarlı/eksik paket kontrolü)</li>
                <li>Platform kurallarına uymak</li>
                <li>Teslimat personeline saygılı davranmak</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">MADDE 8 - ŞİKAYET VE İTİRAZLAR</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                ALICI, hizmet ile ilgili her türlü şikayet ve itirazını aşağıdaki kanallar üzerinden iletebilir:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="text-gray-700 mb-2"><strong>WhatsApp:</strong> +90 545 429 10 76</p>
                <p className="text-gray-700 mb-2"><strong>E-posta:</strong> destek@onlagelsin.com</p>
                <p className="text-gray-700"><strong>Adres:</strong> Bakkalbaşı Mah. Mustafa Kemal Cad. No: 10/A Çumra / KONYA</p>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Şikayetler en geç 30 gün içinde değerlendirilir ve sonuç müşteriye bildirilir.
              </p>
              <p className="text-gray-600 leading-relaxed">
                ALICI, tüketici hakem heyetlerine ve tüketici mahkemelerine başvuru hakkına sahiptir. 
                Para değerini haiz uyuşmazlıklarda ilgili yıl için Gümrük ve Ticaret Bakanlığınca belirlenen 
                değerin altındaki uyuşmazlıklarda ALICI'nın satın almayı yaptığı veya ikametgah ettiği yerdeki 
                tüketici hakem heyetine başvurabilir.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">MADDE 9 - KİŞİSEL VERİLERİN KORUNMASI</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                SATICI, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında ALICI'nın kişisel verilerini 
                korumayı ve güvenliğini sağlamayı taahhüt eder. Kişisel veriler:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Sadece hizmet sunumu amacıyla işlenir</li>
                <li>Üçüncü kişilerle paylaşılmaz (zorunlu yasal durumlar hariç)</li>
                <li>Güvenli sistemlerde saklanır</li>
                <li>ALICI'nın talebi üzerine silinebilir</li>
              </ul>
              <p className="text-gray-600 text-sm mt-3">
                Detaylı bilgi için <a href="/gizlilik-politikasi" className="text-primary-600 hover:underline">Gizlilik Politikası</a> 
                ve <a href="/kvkk" className="text-primary-600 hover:underline">KVKK Aydınlatma Metni</a> sayfalarını inceleyebilirsiniz.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">MADDE 10 - UYGULANACAK HUKUK VE YETKİ</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                İşbu sözleşmenin uygulanmasında, Türkiye Cumhuriyeti yasaları geçerlidir. 
                Sözleşmeden doğabilecek her türlü uyuşmazlıkta KONYA mahkemeleri ve icra daireleri yetkilidir.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">MADDE 11 - YÜRÜRLÜK</h2>
              <p className="text-gray-600 leading-relaxed">
                İşbu sözleşme, ALICI tarafından elektronik ortamda onaylandığı anda yürürlüğe girer. 
                ALICI, sipariş vermekle bu sözleşmenin tüm maddelerini okuduğunu, anladığını ve kabul ettiğini beyan eder.
              </p>
            </div>

            <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-lg">
              <p className="text-gray-700 mb-3">
                <strong>ALICI, bu sözleşmeyi elektronik ortamda onaylayarak;</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Sözleşmenin tüm maddelerini okuduğunu ve kabul ettiğini,</li>
                <li>Ürün/hizmet bilgilerini ve fiyatlarını kontrol ettiğini,</li>
                <li>Teslimat süresini ve ücretini bildiğini,</li>
                <li>Cayma hakkı ve iade koşullarını öğrendiğini,</li>
                <li>İletişim ve ödeme bilgilerinin doğruluğunu</li>
              </ul>
              <p className="text-gray-700 mt-3">kabul ve beyan eder.</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg mt-8">
              <p className="text-gray-600 text-sm text-center">
                Bu mesafeli satış sözleşmesi 7 Mayıs 2026 tarihinde güncellenmiştir.<br />
                <strong>On'la Gelsin - Teketech Technologies</strong>
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
