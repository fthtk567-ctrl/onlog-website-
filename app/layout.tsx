import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { appStoreUrl, customerWebUrl, googlePlayUrl } from '@/lib/appLinks'
import { defaultOgImage, siteName, siteUrl } from '@/lib/seo'

const inter = Inter({ subsets: ['latin'] })
const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "On'la Gelsin - Yerli Yemek Sipariş Platformu",
  description: "On'la Gelsin ile yerel restoranları keşfedin, sevdiğiniz yemekleri kolayca sipariş verin. Yerli ve milli yemek sipariş deneyimi.",
  keywords: ['yemek sipariş', 'online yemek', 'restoran', 'on\'la gelsin', 'yerli yemek uygulaması', 'restoran paneli', 'online sipariş'],
  authors: [{ name: "On'la Gelsin" }],
  creator: "On'la Gelsin",
  publisher: "On'la Gelsin",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/logo.svg', type: 'image/svg+xml', sizes: 'any' },
    ],
    shortcut: '/favicon.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    title: "On'la Gelsin - Yerli Yemek Sipariş Platformu",
    description: "On'la Gelsin ile yerel restoranları keşfedin, sevdiğiniz yemekleri kolayca sipariş verin.",
    url: siteUrl,
    siteName,
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: "On'la Gelsin - Yerli Yemek Sipariş Platformu",
      },
      {
        url: '/logo.svg',
        width: 512,
        height: 512,
        alt: "On'la Gelsin Logo",
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "On'la Gelsin - Yerli Yemek Sipariş Platformu",
    description: "On'la Gelsin ile yerel restoranları keşfedin, sevdiğiniz yemekleri kolayca sipariş verin.",
    images: [defaultOgImage],
    creator: '@onlagelsin',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  ...(googleSiteVerification
    ? {
        verification: {
          google: googleSiteVerification,
        },
      }
    : {}),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: "On'la Gelsin",
    legalName:
      'ONLA GELSİN TEKNOLOJİ YAZILIM PERAKENDE LOJİSTİK VE TİCARET LİMİTED ŞİRKETİ',
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    description: 'Yerli ve milli yemek sipariş platformu',
    taxID: '6430867682',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+90-850-303-0859',
      contactType: 'Müşteri Hizmetleri',
      areaServed: 'TR',
      availableLanguage: 'Turkish',
    },
    sameAs: [
      'https://panel.onlagelsin.com',
      customerWebUrl,
      appStoreUrl,
      googlePlayUrl,
    ],
  }

  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
