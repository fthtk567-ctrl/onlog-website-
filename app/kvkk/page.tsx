import { Shield, Lock, Eye, Users, FileText, Mail } from 'lucide-react';

export default function KVKKPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              KVKK Aydınlatma Metni
            </h1>
            <p className="text-xl text-primary-50">
              Kişisel Verilerinizin Korunması ve İşlenmesi Hakkında Bilgilendirme
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              
              {/* Introduction */}
              <div className="mb-12">
                <p className="text-gray-700 leading-relaxed">
                  OnLog olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) kapsamında, 
                  kişisel verilerinizin güvenliğini en üst düzeyde tutmayı ve gizliliğinizi korumayı taahhüt ediyoruz. 
                  Bu aydınlatma metni, kişisel verilerinizin nasıl toplandığı, işlendiği ve korunduğu hakkında sizi 
                  bilgilendirmek amacıyla hazırlanmıştır.
                </p>
              </div>

              {/* Veri Sorumlusu */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    1. Veri Sorumlusu
                  </h2>
                </div>
                <div className="ml-15 text-gray-700 space-y-3">
                  <p>
                    KVKK kapsamında veri sorumlusu olarak OnLog, kişisel verilerinizin işleme amaçlarını ve 
                    vasıtalarını belirler, veri kayıt sisteminin kurulmasından ve yönetilmesinden sorumludur.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 mt-4">
                    <p className="font-semibold text-gray-900 mb-2">İletişim Bilgileri:</p>
                    <p><strong>Adres:</strong> Bakkalbaşı Mah. Mustafa Kemal Cad. No: 10/A Çumra / KONYA</p>
                    <p><strong>E-posta:</strong> destek@onlog.com.tr</p>
                    <p><strong>Telefon:</strong> +90 534 244 75 04</p>
                  </div>
                </div>
              </div>

              {/* Toplanan Veriler */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    2. Toplanan Kişisel Veriler
                  </h2>
                </div>
                <div className="ml-15 text-gray-700 space-y-3">
                  <p>OnLog olarak, hizmetlerimizi sunabilmek için aşağıdaki kişisel verilerinizi işlemekteyiz:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Kimlik Bilgileri:</strong> Ad, soyad, T.C. kimlik numarası</li>
                    <li><strong>İletişim Bilgileri:</strong> Telefon numarası, e-posta adresi, adres</li>
                    <li><strong>Araç Bilgileri:</strong> Plaka numarası, ruhsat bilgileri, ehliyet bilgileri</li>
                    <li><strong>Finansal Bilgiler:</strong> Banka hesap bilgileri (ödeme için)</li>
                    <li><strong>Konum Bilgileri:</strong> Teslimat sırasında GPS konum verileri</li>
                    <li><strong>İşlem Bilgileri:</strong> Teslimat geçmişi, sipariş detayları</li>
                  </ul>
                </div>
              </div>

              {/* İşleme Amaçları */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Eye className="w-6 h-6 text-primary-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    3. Kişisel Verilerin İşlenme Amaçları
                  </h2>
                </div>
                <div className="ml-15 text-gray-700 space-y-3">
                  <p>Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Kurye hizmetlerinin sunulması ve yönetilmesi</li>
                    <li>İş başvurularının değerlendirilmesi ve personel alımı</li>
                    <li>Ödeme işlemlerinin gerçekleştirilmesi</li>
                    <li>Teslimat süreçlerinin takibi ve koordinasyonu</li>
                    <li>Müşteri memnuniyeti ve hizmet kalitesinin artırılması</li>
                    <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                    <li>İletişim ve bilgilendirme faaliyetleri</li>
                    <li>Güvenlik ve iş sağlığı tedbirlerinin alınması</li>
                  </ul>
                </div>
              </div>

              {/* İşleme Yöntemleri */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Lock className="w-6 h-6 text-primary-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    4. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebepleri
                  </h2>
                </div>
                <div className="ml-15 text-gray-700 space-y-3">
                  <p>
                    Kişisel verileriniz, web sitemiz, mobil uygulamamız, başvuru formları, e-posta ve telefon 
                    yoluyla elektronik veya fiziksel ortamda toplanmaktadır.
                  </p>
                  <p className="mt-3">
                    <strong>Hukuki Sebepler:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Açık rızanızın bulunması</li>
                    <li>Sözleşmenin kurulması ve ifası için gerekli olması</li>
                    <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                    <li>Meşru menfaatlerimiz için veri işlemenin zorunlu olması</li>
                  </ul>
                </div>
              </div>

              {/* Veri Aktarımı */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    5. Kişisel Verilerin Aktarılması
                  </h2>
                </div>
                <div className="ml-15 text-gray-700 space-y-3">
                  <p>Kişisel verileriniz, yukarıda belirtilen amaçlarla ve KVKK&apos;nın öngördüğü şartlarda:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>İş ortaklarımıza ve tedarikçilerimize</li>
                    <li>Yasal yükümlülüklerimiz gereği kamu kurum ve kuruluşlarına</li>
                    <li>Hukuki işlemlerin yürütülmesi için hukuk bürolarına</li>
                    <li>Ödeme hizmet sağlayıcılara (bankalar, ödeme kuruluşları)</li>
                  </ul>
                  <p className="mt-3">aktarılabilir.</p>
                </div>
              </div>

              {/* Haklarınız */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    6. Kişisel Veri Sahibi Olarak Haklarınız
                  </h2>
                </div>
                <div className="ml-15 text-gray-700 space-y-3">
                  <p>KVKK&apos;nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                    <li>İşlenmiş ise buna ilişkin bilgi talep etme</li>
                    <li>İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                    <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
                    <li>Eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
                    <li>KVKK&apos;nın 7. maddesinde öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme</li>
                    <li>Düzeltme, silme ve yok edilme işlemlerinin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
                    <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
                    <li>Kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
                  </ul>
                </div>
              </div>

              {/* Başvuru Yöntemi */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    7. Başvuru Yöntemi
                  </h2>
                </div>
                <div className="ml-15 text-gray-700 space-y-3">
                  <p>
                    Yukarıda belirtilen haklarınızı kullanmak için, kimliğinizi tespit edici gerekli bilgiler ile 
                    hangi konuda başvuruda bulunmak istediğinizi belirterek aşağıdaki yöntemlerle başvurabilirsiniz:
                  </p>
                  <div className="bg-primary-50 rounded-lg p-6 mt-4">
                    <p className="font-semibold text-primary-900 mb-3">Başvuru Kanalları:</p>
                    <ul className="space-y-2">
                      <li><strong>E-posta:</strong> destek@onlog.com.tr</li>
                      <li><strong>Posta Adresi:</strong> Bakkalbaşı Mah. Mustafa Kemal Cad. No: 10/A Çumra / KONYA</li>
                      <li><strong>Telefon:</strong> +90 534 244 75 04</li>
                    </ul>
                  </div>
                  <p className="mt-4">
                    Başvurularınız, talebin niteliğine göre en geç 30 gün içinde ücretsiz olarak 
                    sonuçlandırılacaktır. Ancak, işlemin ayrıca bir maliyeti gerektirmesi hâlinde, 
                    Kişisel Verileri Koruma Kurulu tarafından belirlenen tarifedeki ücret alınabilir.
                  </p>
                </div>
              </div>

              {/* Güvenlik */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Lock className="w-6 h-6 text-primary-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    8. Veri Güvenliği
                  </h2>
                </div>
                <div className="ml-15 text-gray-700 space-y-3">
                  <p>
                    OnLog olarak, kişisel verilerinizin güvenliğini sağlamak için gerekli tüm teknik ve 
                    idari tedbirleri almaktayız. Verileriniz, yetkisiz erişime, kaybolmaya, değiştirilmeye 
                    veya ifşa edilmeye karşı korunmaktadır.
                  </p>
                </div>
              </div>

              {/* Son Bilgiler */}
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary-600">
                <p className="text-sm text-gray-700">
                  <strong>Not:</strong> Bu aydınlatma metni, yasal düzenlemelerdeki değişiklikler doğrultusunda 
                  güncellenebilir. Güncel versiyona her zaman web sitemizden ulaşabilirsiniz.
                </p>
                <p className="text-sm text-gray-600 mt-3">
                  Son Güncelleme: Ekim 2025
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Sorularınız mı var?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            KVKK kapsamındaki haklarınız veya kişisel verilerinizin işlenmesi hakkında 
            sorularınız için bizimle iletişime geçebilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/iletisim"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              İletişime Geç
            </a>
            <a
              href="mailto:destek@onlog.com.tr"
              className="inline-block bg-gray-100 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              E-posta Gönder
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
