import Link from 'next/link'
import { Facebook, Instagram, Linkedin, X } from 'lucide-react'
import { appStoreUrl, customerWebUrl, googlePlayUrl } from '@/lib/appLinks'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary-400 mb-4">On&apos;la Gelsin</h3>
            <p className="text-gray-400 text-sm mb-4">
              Yerli ve milli yemek sipariş platformu. Kullanıcıları sevdikleri restoranlarla buluşturur.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 mb-4">
              <p className="text-gray-400 text-sm">
                <span className="font-semibold text-white">Müşteri Hizmetleri:</span><br />
                <a href="mailto:destek@onlagelsin.com" className="hover:text-primary-400 transition">
                  destek@onlagelsin.com
                </a>
              </p>
              <p className="text-gray-400 text-sm">
                <span className="font-semibold text-white">Muhasebe:</span><br />
                <a href="mailto:muhasebe@onlagelsin.com" className="hover:text-primary-400 transition">
                  muhasebe@onlagelsin.com
                </a>
              </p>
            </div>

            <p className="text-gray-400 text-xs mb-4">
              Teketech Technologies iştirakidir
            </p>

            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/Onla-Gelsin/61591547724025/#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/onlagelsin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="X"
              >
                <X className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/onlagelsin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/onla-gelsin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Yemek Deneyimi</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={customerWebUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  Yemek Siparişi Ver
                </a>
              </li>
              <li>
                <Link href="/hizmetlerimiz" className="text-gray-400 hover:text-white transition">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link href="/restoran-paneli" className="text-gray-400 hover:text-white transition">
                  Restoran Paneli
                </Link>
              </li>
              <li>
                <Link href="/is-ortagimiz-ol" className="text-gray-400 hover:text-white transition">
                  İş Ortağımız Olun
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
                <Link href="/iletisim" className="text-gray-400 hover:text-white transition">
                  İletişim
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
                <Link href="/kullanim-sartlari" className="text-gray-400 hover:text-white transition">
                  Kullanım Şartları
                </Link>
              </li>
              <li>
                <Link href="/mesafeli-satis-sozlesmesi" className="text-gray-400 hover:text-white transition">
                  Mesafeli Satış Sözleşmesi
                </Link>
              </li>
              <li>
                <Link href="/teslimat-ve-iade" className="text-gray-400 hover:text-white transition">
                  Teslimat ve İade Şartları
                </Link>
              </li>
              <li>
                <Link href="/gizlilik-politikasi" className="text-gray-400 hover:text-white transition">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="/kurye-gizlilik-politikasi" className="text-gray-400 hover:text-white transition">
                  Kurye Gizlilik Politikası
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

          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center mb-8">
            <h4 className="text-sm font-semibold text-gray-400 mb-4">Güvenli Ödeme</h4>
            <div className="flex items-center justify-center">
              <img
                src="/payments/logo_band_colored.svg"
                alt="iyzico, Visa, MasterCard, American Express, Troy ile Güvenli Ödeme"
                className="h-8 md:h-10 w-auto max-w-full opacity-90 hover:opacity-100 transition"
              />
            </div>
          </div>
        </div>

        {/* App Links */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © 2026 On&apos;la Gelsin — Tüm hakları saklıdır.
              </p>
              <p className="text-gray-600 text-xs mt-1">
                ONLA GELSİN TEKNOLOJİ YAZILIM PERAKENDE LOJİSTİK VE TİCARET LİMİTED ŞİRKETİ
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
                aria-label="App Store'dan indir"
              >
                <img
                  src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/tr-tr?size=250x83"
                  alt="App Store'dan İndir"
                  className="h-10"
                />
              </a>
              <a
                href={googlePlayUrl}
                target="_blank"
                rel="noopener noreferrer"
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
