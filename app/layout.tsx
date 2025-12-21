import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://onlagelsin.com'),
  title: "On'la Gelsin - Şehir İçi Hızlı Kurye Teslimat Hizmeti",
  description: "On'la Gelsin ile gün içinde adresinde! Şehir içi hızlı kurye teslimat hizmetimizle tanışın.",
  keywords: ['kurye', 'teslimat', 'hızlı kurye', 'şehir içi kurye', 'on\'la gelsin', 'kurye hizmeti', 'paket teslimat'],
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
    title: "On'la Gelsin - Şehir İçi Hızlı Kurye Teslimat Hizmeti",
    description: "On'la Gelsin ile gün içinde adresinde! Şehir içi hızlı kurye teslimat hizmetimizle tanışın.",
    url: 'https://onlagelsin.com',
    siteName: "On'la Gelsin",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: "On'la Gelsin - Kurye Teslimat Hizmeti",
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
    title: "On'la Gelsin - Şehir İçi Hızlı Kurye Teslimat Hizmeti",
    description: "On'la Gelsin ile gün içinde adresinde! Şehir içi hızlı kurye teslimat hizmetimizle tanışın.",
    images: ['/og-image.png'],
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
  verification: {
    google: 'google-site-verification-code',
  },
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
    url: 'https://onlagelsin.com',
    logo: 'https://onlagelsin.com/logo.svg',
    description: 'Şehir içi hızlı kurye teslimat hizmeti',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+90-534-244-7504',
      contactType: 'Müşteri Hizmetleri',
      areaServed: 'TR',
      availableLanguage: 'Turkish',
    },
    sameAs: [
      'https://panel.onlagelsin.com',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'TR',
      addressLocality: 'Türkiye',
    },
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
