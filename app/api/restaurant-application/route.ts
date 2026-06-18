import { NextResponse } from 'next/server'

const primaryRecipients = [
  'fthtk567@gmail.com',
  'fatihsultanmehmetteke@onlagelsin.com.tr',
]

const duzceRecipient = 'zappyw81@icloud.com'
const resendTestRecipient = 'fthtk567@gmail.com'

function normalizeCity(value: string) {
  return value
    .trim()
    .toLocaleLowerCase('tr-TR')
    .replaceAll('ı', 'i')
    .replaceAll('ğ', 'g')
    .replaceAll('ü', 'u')
    .replaceAll('ş', 's')
    .replaceAll('ö', 'o')
    .replaceAll('ç', 'c')
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function field(label: string, value: string) {
  return `
    <tr>
      <td style="padding: 10px 12px; border-bottom: 1px solid #e5e7eb; color: #64748b; width: 180px;">${label}</td>
      <td style="padding: 10px 12px; border-bottom: 1px solid #e5e7eb; color: #111827; font-weight: 600;">${escapeHtml(value || '-')}</td>
    </tr>
  `
}

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY
  const fromEmail =
    process.env.RESEND_FROM_EMAIL || "On'la Gelsin <basvuru@onlagelsin.com.tr>"
  const usesResendTestSender = fromEmail.includes('@resend.dev')

  if (!resendApiKey) {
    return NextResponse.json(
      { error: 'Mail servisi yapılandırılmamış.' },
      { status: 500 }
    )
  }

  const body = await request.json().catch(() => null)

  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Geçersiz başvuru verisi.' }, { status: 400 })
  }

  const authorizedName = String(body.authorizedName || '').trim()
  const phone = String(body.phone || '').trim()
  const email = String(body.email || '').trim()
  const restaurantName = String(body.restaurantName || '').trim()
  const city = String(body.city || '').trim()
  const district = String(body.district || '').trim()
  const cuisineType = String(body.cuisineType || '').trim()
  const message = String(body.message || '').trim()
  const kvkkAccepted = Boolean(body.kvkkAccepted)

  if (
    !authorizedName ||
    !phone ||
    !email ||
    !restaurantName ||
    !city ||
    !district ||
    !cuisineType ||
    !kvkkAccepted
  ) {
    return NextResponse.json(
      { error: 'Lütfen zorunlu alanları doldurun.' },
      { status: 400 }
    )
  }

  const recipients = usesResendTestSender ? [resendTestRecipient] : [...primaryRecipients]

  if (!usesResendTestSender && normalizeCity(city) === 'duzce') {
    recipients.push(duzceRecipient)
  }

  const submittedAt = new Intl.DateTimeFormat('tr-TR', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Europe/Istanbul',
  }).format(new Date())

  const html = `
    <div style="font-family: Arial, sans-serif; background: #f8fafc; padding: 24px;">
      <div style="max-width: 680px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb;">
        <div style="background: #16a34a; color: #ffffff; padding: 20px 24px;">
          <h1 style="margin: 0; font-size: 22px;">Yeni Restoran İş Ortaklığı Başvurusu</h1>
          <p style="margin: 8px 0 0; color: #dcfce7;">On'la Gelsin web sitesi üzerinden yeni başvuru alındı.</p>
        </div>
        <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
          ${field('Yetkili Ad Soyad', authorizedName)}
          ${field('Telefon', phone)}
          ${field('E-posta', email)}
          ${field('Restoran Adı', restaurantName)}
          ${field('Şehir', city)}
          ${field('İlçe', district)}
          ${field('Mutfak Türü', cuisineType)}
          ${field('Mesaj', message)}
          ${field('KVKK Onayı', kvkkAccepted ? 'Evet' : 'Hayır')}
          ${field('Başvuru Tarihi', submittedAt)}
        </table>
      </div>
    </div>
  `

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: recipients,
      subject: `Yeni restoran başvurusu: ${restaurantName} - ${city}`,
      html,
      reply_to: email,
      tags: [
        { name: 'source', value: 'restaurant_application' },
        { name: 'city', value: normalizeCity(city).replaceAll(' ', '-') },
      ],
    }),
  })

  if (!resendResponse.ok) {
    const errorText = await resendResponse.text()
    console.error('Resend email error:', errorText)

    return NextResponse.json(
      { error: 'Başvuru maili gönderilemedi. Lütfen daha sonra tekrar deneyin.' },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}
