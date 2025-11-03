import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-green-400 mb-4">OnLog</h3>
            <p className="text-gray-400 text-sm mb-4">
              Şehir içi hızlı kurye teslimat hizmetleri ile gün içinde adresinde!
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 mb-4">
              <p className="text-gray-400 text-sm">
                <span className="font-semibold text-white">Müşteri Danışmanı:</span><br />
                <a href="tel:+905342447504" className="hover:text-green-400 transition">
                  +90 534 244 7504
                </a>
              </p>
              <p className="text-gray-400 text-sm">
                <span className="font-semibold text-white">Muhasebe:</span><br />
                <a href="tel:+905301398395" className="hover:text-green-400 transition">
                  +90 530 139 8395
                </a>
              </p>
              <p className="text-gray-400 text-sm">
                <a href="mailto:destek@onlog.com.tr" className="hover:text-green-400 transition">
                  destek@onlog.com.tr
                </a>
              </p>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hizmetler</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/istanbul" className="text-gray-400 hover:text-white transition">
                  Istanbul
                </Link>
              </li>
              <li>
                <Link href="/izmir" className="text-gray-400 hover:text-white transition">
                  Izmir
                </Link>
              </li>
              <li>
                <Link href="/ankara" className="text-gray-400 hover:text-white transition">
                  Ankara
                </Link>
              </li>
              <li>
                <Link href="/hizmetlerimiz" className="text-gray-400 hover:text-white transition">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link href="/entegrasyonlar" className="text-gray-400 hover:text-white transition">
                  Entegrasyon ve API
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Şirket</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/hakkimizda" className="text-gray-400 hover:text-white transition">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/kurye-ol" className="text-gray-400 hover:text-white transition">
                  Kurye Ol
                </Link>
              </li>
              <li>
                <Link href="/e-ticaret" className="text-gray-400 hover:text-white transition">
                  E-ticarete Özel
                </Link>
              </li>
              <li>
                <Link href="/market" className="text-gray-400 hover:text-white transition">
                  Marketlere Özel
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Destek</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sss" className="text-gray-400 hover:text-white transition">
                  Sık Sorulan Sorular
                </Link>
              </li>
              <li>
                <Link href="/yardim-merkezi" className="text-gray-400 hover:text-white transition">
                  Yardım Merkezi
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-gray-400 hover:text-white transition">
                  Bize Ulaşın
                </Link>
              </li>
              <li>
                <Link href="/kullanim-sartlari" className="text-gray-400 hover:text-white transition">
                  Kullanım Şartları
                </Link>
              </li>
              <li>
                <Link href="/gizlilik-politikasi" className="text-gray-400 hover:text-white transition">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="/cerez-politikasi" className="text-gray-400 hover:text-white transition">
                  Çerez Politikası
                </Link>
              </li>
              <li>
                <Link href="/veri-silme" className="text-gray-400 hover:text-white transition">
                  Veri Silme Talebi
                </Link>
              </li>
              <li>
                <Link href="/hesap-silme" className="text-gray-400 hover:text-white transition">
                  Hesap Silme
                </Link>
              </li>
            </ul>
            
            {/* Address */}
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Adres</h5>
              <p className="text-gray-400 text-sm">
                Bakkalbaşı Mah. Mustafa Kemal Cad.<br />
                No: 10/A Çumra / KONYA
              </p>
            </div>
          </div>
        </div>

        {/* App Links */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 OnLog. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="inline-block"
              >
                <img 
                  src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/tr-tr?size=250x83" 
                  alt="App Store'dan İndir" 
                  className="h-10"
                />
              </a>
              <a 
                href="#" 
                className="inline-block"
              >
                <img 
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/tr_badge_web_generic.png" 
                  alt="Google Play'den İndir" 
                  className="h-10"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
