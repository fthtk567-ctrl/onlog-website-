import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "On'la Gelsin - Şehir İçi Hızlı Kurye Teslimat Hizmeti",
  description: "On'la Gelsin ile gün içinde adresinde! Şehir içi hızlı kurye teslimat hizmetimizle tanışın.",
  icons: {
    icon: '/favicon.svg',
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
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "On'la Gelsin - Şehir İçi Hızlı Kurye Teslimat Hizmeti",
    description: "On'la Gelsin ile gün içinde adresinde! Şehir içi hızlı kurye teslimat hizmetimizle tanışın.",
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
