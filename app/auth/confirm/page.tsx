import type { Metadata } from 'next'
import { Suspense } from 'react'
import AuthConfirmClient from './AuthConfirmClient'

export const metadata: Metadata = {
  title: "E-posta Doğrulama - On'la Gelsin",
  description: "On'la Gelsin Kurye uygulaması için e-posta doğrulama sayfası.",
  robots: {
    index: false,
    follow: false,
  },
}

function AuthConfirmFallback() {
  return (
    <main className="min-h-[70vh] bg-gradient-to-br from-primary-50 via-white to-white px-4 py-16">
      <section className="container mx-auto flex min-h-[56vh] max-w-3xl items-center justify-center">
        <div className="w-full rounded-lg border border-primary-100 bg-white p-6 text-center shadow-sm sm:p-10">
          <div className="mx-auto mb-6 h-14 w-14 animate-pulse rounded-full bg-primary-100" />
          <p className="text-lg font-semibold text-gray-900">E-posta doğrulaması kontrol ediliyor...</p>
        </div>
      </section>
    </main>
  )
}

export default function AuthConfirmPage() {
  return (
    <Suspense fallback={<AuthConfirmFallback />}>
      <AuthConfirmClient />
    </Suspense>
  )
}
