# On'la Gelsin Kurye Teslimat Web Sitesi - AI Yardımcı Talimatları

## Proje Genel Bakışı
On'la Gelsin, Türkiye'de şehir içi kurye teslimat hizmeti sunan bir platformdur. Bu proje, Next.js 14 App Router ile geliştirilmiş kurumsal bir tanıtım ve pazarlama web sitesidir. Ana platform panel.onlagelsin.com'da çalışırken, bu site pazarlama ve bilgilendirme amacıyla kullanılıyor.

## Temel Mimari

### Teknoloji Stack
- **Framework**: Next.js 14.2.5 (App Router - file-based routing)
- **UI**: React 18 + TypeScript 5
- **Styling**: Tailwind CSS 3.4 (özel primary renk paleti: `#5DBC00` yeşil)
- **İkonlar**: lucide-react 0.441.0
- **Deployment**: Vercel (otomatik build)
- **Font**: Inter (next/font/google)

### Dizin Yapısı ve Data Flow
```
app/
  ├── layout.tsx        # Root layout: Header/Footer wrapper + global metadata
  ├── page.tsx          # Homepage: Component orchestrator (Hero → Services → etc.)
  └── [route]/page.tsx  # File-based routes (klasör adı = URL path)
components/
  ├── Header.tsx        # 'use client' - Sticky nav + mobile toggle
  ├── Footer.tsx        # Server component - Links + contact info
  └── [Feature].tsx     # Reusable sections (Services, Integration, etc.)
public/
  └── downloads/        # Downloadable assets (kurye-ol form PDFs)
```

**Önemli**: Sayfa bileşenleri (app/ içindeki page.tsx) server component olarak kalır, componentler ise sadece state/events gerektirdiğinde 'use client' kullanır.

## Kritik Geliştirme Konvansiyonları

### Client vs Server Components
- **Kural**: Server component varsayılan, sadece gerektiğinde `'use client'` ekle
- **Client gerektiren durumlar**: useState, useEffect, event handlers, browser APIs
- **Örnek**: [Header.tsx](components/Header.tsx) - `isMenuOpen` state için 'use client'
- **Import path**: Her zaman `@/components/ComponentName` (@ = workspace root)

### Styling Pattern (Tailwind)
**Primary color**: `primary-500` = `#5DBC00` (yeşil) - tailwind.config.ts'te extend edilmiş
```tsx
// Hero/CTA pattern (tüm hero sectionlarda kullanılır)
className="bg-gradient-to-r from-primary-600 to-primary-500 text-white py-20"

// Card hover effect pattern (Services.tsx, Integration.tsx)
className="shadow-md hover:shadow-xl transition-all duration-300"

// Button hover pattern
className="bg-primary-600 hover:bg-primary-700 transition"

// Container pattern (her section'da)
className="container mx-auto px-4"
```

**Responsive pattern**: Mobile-first, `md:` (768px), `lg:` (1024px) breakpoints
```tsx
// Grid pattern (services, features)
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"

// Text sizing
className="text-4xl md:text-5xl font-bold"
```

### Content ve SEO Kuralları
- **Tüm içerik Türkçe** (UI, metadata, alt texts)
- **Her sayfa metadata export etmeli**:
```tsx
export const metadata = {
  title: 'On\'la Gelsin - [Sayfa Başlığı]',
  description: '[SEO açıklaması]',
}
```
- **layout.tsx**: Global metadata (OpenGraph, Twitter Card) tanımlı

### External Integration Points
- **Ana panel**: https://panel.onlagelsin.com/#/login (ayrı uygulama)
- **Restoran panel**: https://restoran.onlagelsin.com
- **İletişim bilgileri** (Footer.tsx'te hardcoded):
  - Müşteri Danışmanı: +90 534 244 7504
  - Muhasebe: +90 530 139 8395
  - Email: destek@onlagelsin.com
- **Görseller**: next.config.js'te Tilda CDN domains tanımlı (optim.tildacdn.com, thb.tildacdn.com)

### İkon ve Asset Kullanımı
- **lucide-react paketinden**: `import { Package, Clock, Shield } from 'lucide-react'`
- **Icon sizing**: `w-6 h-6` (normal), `w-5 h-5` (small)
- **Icon colors**: `text-primary-600` (brand), `text-gray-400` (neutral)
- **Public assets**: `/logo.svg`, `/kurye-hero.png`, `/downloads/*.pdf`

## Önemli İş Akışları

### Yeni Sayfa Ekleme
1. `app/[sayfa-adi]/page.tsx` oluştur (slug format: lowercase, tire ile ayrılmış)
2. Metadata export et (SEO için)
3. [Header.tsx](components/Header.tsx)'e navigation linki ekle (desktop nav + mobile nav)
4. [Footer.tsx](components/Footer.tsx)'e ilgili kategori altına link ekle
5. **Örnek**: [app/hizmetlerimiz/page.tsx](app/hizmetlerimiz/page.tsx) - service grid pattern

### Component Oluşturma
1. `components/` klasörüne PascalCase isimle dosya ekle
2. `'use client'` sadece state/events gerekirse ekle
3. lucide-react ikonları import et
4. Tailwind classları ile stillendirme yap
5. **Örnek pattern**: [components/Services.tsx](components/Services.tsx) - card grid + hover + links

### Build ve Test Workflow
```powershell
npm run dev        # Development server (http://localhost:3000)
npm run build      # Production build (type-check + optimization)
npm run start      # Production preview
npm run lint       # ESLint check
```

**Vercel deployment**: Otomatik (push to main branch) - vercel.json ile konfigüre edilmiş

## Dikkat Edilmesi Gerekenler

### ⚠️ Common Pitfalls
- **useState/useEffect kullanıyorsan**: `'use client'` eklemeyi unutma
- **Görseller**: Unsplash URL'leri placeholder, production'da yerel dosyalar kullanılmalı
- **External panel**: Panel domain'i (panel.onlagelsin.com) ayrı bir uygulama
- **Turkish characters**: Dosya isimleri slug format (örn: `api-entegrasyon`, `kurye-ol`)
- **next/image**: Kullanılmıyor - doğrudan `<img>` tag'i tercih edilmiş (CDN images için)

### ✅ Best Practices
- **Server component**: Default, performans için client component'e geçmeyi geciktir
- **Metadata her sayfada**: SEO için critical
- **Responsive test**: Mobile-first yaklaşım, md/lg breakpoints test et
- **Primary color**: Tailwind config'deki extend'i kullan (hardcode etme)
- **Link component**: Internal linkler için Next.js `Link`, external için `<a>` + target="_blank"

## Kod Örnekleri

### Yeni Hizmet Sayfası Template
```tsx
import { Icon1, Icon2 } from 'lucide-react';

export const metadata = {
  title: 'On'la Gelsin - [Sayfa Başlığı]',
  description: '[SEO açıklaması]',
}

export default function SayfaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-primary-600 to-primary-500 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Başlık</h1>
        </div>
      </section>
      {/* İçerik bölümleri */}
    </div>
  )
}
```

### Component Template
```tsx
'use client'  // Sadece gerekirse

import { IconName } from 'lucide-react'

export default function ComponentName() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* İçerik */}
      </div>
    </section>
  )
}
```

## Referans Dosyalar
- **Sayfa layout pattern**: `app/hizmetlerimiz/page.tsx` (icon grid + features)
- **Component pattern**: `components/Services.tsx` (hover effects, linkler)
- **Form pattern**: `components/CourierApplication.tsx` (client-side form)
- **Navigation pattern**: `components/Header.tsx` (mobile menu toggle)
