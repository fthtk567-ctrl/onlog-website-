'use client'

import { FormEvent, useState } from 'react'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function RestaurantApplicationForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget

    setStatus('submitting')
    setErrorMessage('')

    const formData = new FormData(form)

    const payload = {
      authorizedName: String(formData.get('authorizedName') || ''),
      phone: String(formData.get('phone') || ''),
      email: String(formData.get('email') || ''),
      restaurantName: String(formData.get('restaurantName') || ''),
      city: String(formData.get('city') || ''),
      district: String(formData.get('district') || ''),
      cuisineType: String(formData.get('cuisineType') || ''),
      message: String(formData.get('message') || ''),
      kvkkAccepted: formData.get('kvkkAccepted') === 'on',
    }

    try {
      const response = await fetch('/api/restaurant-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const result = await response.json().catch(() => null)

      if (!response.ok) {
        setStatus('error')
        setErrorMessage(result?.error || 'Başvuru gönderilemedi.')
        return
      }

      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMessage('Bağlantı hatası oluştu. Lütfen tekrar deneyin.')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 px-6 py-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-600 text-3xl font-bold text-white">
          ✓
        </div>
        <h3 className="mb-3 text-2xl font-bold text-gray-900">
          Başvurunuz alındı
        </h3>
        <p className="mx-auto max-w-md text-gray-700">
          Restoran iş ortaklığı başvurunuz bize ulaştı. Ekibimiz en kısa sürede
          sizinle iletişime geçecek.
        </p>
      </div>
    )
  }

  return (
    <form className="space-y-6" method="post" onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Yetkili Ad Soyad *
          </label>
          <input
            name="authorizedName"
            type="text"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
            placeholder="Adınız ve soyadınız"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Telefon *
          </label>
          <input
            name="phone"
            type="tel"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
            placeholder="05XX XXX XX XX"
          />
        </div>
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">
          E-posta *
        </label>
        <input
          name="email"
          type="email"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
          placeholder="ornek@email.com"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Restoran Adı *
        </label>
        <input
          name="restaurantName"
          type="text"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
          placeholder="Örn. Lezzet Lokantası"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Şehir *
          </label>
          <input
            name="city"
            type="text"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
            placeholder="Şehir"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            İlçe *
          </label>
          <input
            name="district"
            type="text"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
            placeholder="İlçe"
          />
        </div>
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Mutfak Türü *
        </label>
        <input
          name="cuisineType"
          type="text"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
          placeholder="Örn. pide, burger, ev yemekleri, tatlı"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Mesajınız
        </label>
        <textarea
          name="message"
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
          placeholder="Restoranınız, mevcut sipariş hacminiz veya çalışma modeliniz hakkında eklemek istediğiniz bilgiler"
        ></textarea>
      </div>

      <div className="flex items-start gap-3">
        <input
          name="kvkkAccepted"
          type="checkbox"
          required
          className="mt-1"
          id="kvkk"
        />
        <label htmlFor="kvkk" className="text-sm text-gray-600">
          <a href="/kvkk" className="text-primary-600 hover:underline">
            KVKK Aydınlatma Metni
          </a>
          &apos;ni okudum ve kabul ediyorum.
        </label>
      </div>

      {status === 'error' && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-700">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-primary-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-primary-700 transition-colors shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'submitting' ? 'Gönderiliyor...' : 'Başvurumu Gönder'}
      </button>
    </form>
  )
}
