'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react'
import { createClient } from '@supabase/supabase-js'
import { useSearchParams } from 'next/navigation'

type VerificationStatus = 'loading' | 'success' | 'error'
type EmailOtpType = 'signup' | 'invite' | 'magiclink' | 'recovery' | 'email_change' | 'email' | (string & {})

const SUPABASE_URL = 'https://oilldfyywtzybrmpyixx.supabase.co'
const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pbGxkZnl5d3R6eWJybXB5aXh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2NzI4MjksImV4cCI6MjA3NjI0ODgyOX0.kwTQgWja1VJBNA4sXEbznmv9LMoyO_5rioaTaQXvKsM'

const successMessage = "E-posta doğrulandı. Artık On'La Gelsin Kurye uygulamasından giriş yapabilirsiniz."
const errorMessage =
  'Bağlantı süresi dolmuş veya daha önce kullanılmış olabilir. Uygulamadan doğrulama e-postasını tekrar gönderebilirsiniz.'

export default function AuthConfirmClient() {
  const searchParams = useSearchParams()
  const [status, setStatus] = useState<VerificationStatus>('loading')
  const verificationStartedRef = useRef(false)

  const supabase = useMemo(
    () =>
      createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
        auth: {
          autoRefreshToken: false,
          detectSessionInUrl: false,
          persistSession: false,
        },
      }),
    []
  )

  useEffect(() => {
    let isMounted = true

    async function verifyEmail() {
      if (verificationStartedRef.current) {
        return
      }

      verificationStartedRef.current = true

      const tokenHash = searchParams.get('token_hash')
      const type = (searchParams.get('type') || 'signup') as EmailOtpType

      if (!tokenHash) {
        setStatus('error')
        return
      }

      try {
        const { error } = await supabase.auth.verifyOtp({
          token_hash: tokenHash,
          type,
        })

        if (isMounted) {
          setStatus(error ? 'error' : 'success')
        }
      } catch {
        if (isMounted) {
          setStatus('error')
        }
      }
    }

    verifyEmail()

    return () => {
      isMounted = false
    }
  }, [searchParams, supabase])

  const isLoading = status === 'loading'
  const isSuccess = status === 'success'

  return (
    <main className="min-h-[70vh] bg-gradient-to-br from-primary-50 via-white to-white px-4 py-16">
      <section className="container mx-auto flex min-h-[56vh] max-w-3xl items-center justify-center">
        <div className="w-full rounded-lg border border-primary-100 bg-white p-6 text-center shadow-sm sm:p-10">
          <div className="mb-8 flex justify-center">
            <Image
              src="/logo-header.png"
              alt="On'la Gelsin"
              width={328}
              height={80}
              priority
              unoptimized
              className="h-12 w-auto"
            />
          </div>

          <div
            className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full ${
              isLoading
                ? 'bg-primary-100 text-primary-600'
                : isSuccess
                  ? 'bg-primary-100 text-primary-700'
                  : 'bg-red-50 text-red-600'
            }`}
          >
            {isLoading && <Loader2 className="h-8 w-8 animate-spin" aria-hidden="true" />}
            {isSuccess && <CheckCircle2 className="h-8 w-8" aria-hidden="true" />}
            {status === 'error' && <AlertCircle className="h-8 w-8" aria-hidden="true" />}
          </div>

          <h1 className="mb-4 text-2xl font-bold text-gray-950 sm:text-3xl">
            {isLoading ? 'E-posta doğrulanıyor' : isSuccess ? 'Doğrulama tamamlandı' : 'Doğrulama tamamlanamadı'}
          </h1>

          <p className="mx-auto max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
            {isLoading ? 'Lütfen kısa bir süre bekleyin.' : isSuccess ? successMessage : errorMessage}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition hover:bg-primary-700"
            >
              Ana Sayfaya Dön
            </Link>
            {!isSuccess && !isLoading && (
              <Link
                href="/iletisim"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-primary-200 bg-white px-6 py-3 font-semibold text-primary-700 transition hover:bg-primary-50"
              >
                Destek Al
              </Link>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
