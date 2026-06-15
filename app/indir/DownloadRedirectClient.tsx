'use client'

import { useEffect } from 'react'
import { appStoreUrl, googlePlayUrl } from '@/lib/appLinks'

export default function DownloadRedirectClient() {
  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase()
    const isAndroid = userAgent.includes('android')
    const isIOS = /iphone|ipad|ipod/.test(userAgent)

    if (isAndroid) {
      window.location.replace(googlePlayUrl)
      return
    }

    if (isIOS) {
      window.location.replace(appStoreUrl)
      return
    }
  }, [])

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
      <section className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 text-center">
        <img
          src="/logo-header.png"
          alt="On'la Gelsin"
          className="h-12 w-auto mx-auto mb-6"
        />
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Uygulamayı İndirin</h1>
        <p className="text-gray-600 mb-6">
          Telefonunuz algılanırsa doğru mağazaya otomatik yönlendirilirsiniz.
        </p>
        <div className="space-y-3">
          <a
            href={appStoreUrl}
            className="block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
          >
            App Store'da Aç
          </a>
          <a
            href={googlePlayUrl}
            className="block bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-black transition"
          >
            Google Play'de Aç
          </a>
        </div>
      </section>
    </main>
  )
}
