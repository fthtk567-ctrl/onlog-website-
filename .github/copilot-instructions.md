# On'la Gelsin Kurye Teslimat Web Sitesi - AI Yardımcı Talimatları

## Proje Genel Bakışı
On'la Gelsin, Türkiye'de şehir içi kurye teslimat hizmeti sunan bir platformdur. Bu proje, Next.js 14 App Router ile geliştirilmiş kurumsal bir tanıtım ve pazarlama web sitesidir.

## Temel Mimari

### Teknoloji Stack
- **Framework**: Next.js 14 (App Router)
- **UI**: React 18 + TypeScript 5
- **Styling**: Tailwind CSS 3.4 (özel primary renk paleti: `#00B341`)
- **İkonlar**: lucide-react
- **Deployment**: Vercel

### Dizin Yapısı
```
app/                    # App Router sayfaları (her klasör bir route)
  ├── layout.tsx        # Ana layout (Header + Footer sarmalayıcı)
  ├── page.tsx          # Ana sayfa (componentleri sıralar)
  └── [route]/page.tsx  # Alt sayfalar (hizmetlerimiz, iletisim, vb.)
components/             # Tekrar kullanılabilir UI componentleri
  ├── Header.tsx        # Sticky navigation + mobil menu
  ├── Footer.tsx        # Linkler, iletişim bilgileri, sosyal medya
  └── [Feature].tsx     # Hero, Services, Integration, vb.
```

## Geliştirme Kuralları

### 1. Component Yapısı
- **Her component** `'use client'` direktifi gerektirir (eğer state/event handler kullanıyorsa)
- **Örnek**: `Header.tsx` mobil menü için `useState` kullanır
- **Sayfalar** (app/ içindeki page.tsx'ler) genellikle server component kalır
- **Import yolu**: `@/components/ComponentName` şeklinde (@/ root'u işaret eder)

### 2. Styling Konvansiyonları
- **Primary color**: `primary-500` (#00B341) yeşil tonu kullanılır
- **Gradient pattern**: `bg-gradient-to-r from-primary-600 to-primary-500`
- **Hover effects**: `hover:text-primary-600 transition` veya `hover:bg-primary-700 transition`
- **Card shadows**: `shadow-md hover:shadow-xl transition-all duration-300`
- **Container**: `container mx-auto px-4` standart genişlik için

### 3. Responsive Tasarım
- **Mobile-first**: Önce mobil, sonra `md:` ve `lg:` breakpoints
- **Mobil menü**: Header'da `isMenuOpen` state ile toggle
- **Grid yapısı**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4`

### 4. İçerik ve Metin
- **Dil**: Türkçe (tüm content ve metadata)
- **Metadata**: Her sayfa `export const metadata` ile SEO bilgisi içermeli
- **Başlık formatı**: `"On'la Gelsin - [Sayfa Başlığı]"`

### 5. Dış Linkler ve Entegrasyonlar
- **Panel linki**: `https://panel.onlagelsin.com/#/login` (kurye çağırma butonu)
- **İletişim**: 
  - Müşteri Danışmanı: +90 534 244 7504
  - Muhasebe: +90 530 139 8395
  - Email: destek@onlagelsin.com
- **Görseller**: next/image yerine doğrudan `<img>` kullanılmış (next.config.js'de external domains tanımlı)

### 6. Routing ve Navigation
- **App Router**: File-based routing (klasör ismi = URL path)
- **Link component**: Next.js `Link` kullan (`next/link`)
- **Internal linkler**: `/hizmetlerimiz`, `/kurye-ol`, `/iletisim`, vb.
- **External linkler**: `target="_blank" rel="noopener noreferrer"` ekle

### 7. İkon Kullanımı
- **lucide-react** paketinden import: `import { Package, Clock, Shield } from 'lucide-react'`
- **Boyutlandırma**: `w-6 h-6` veya `w-5 h-5` standart
- **Renkler**: `text-primary-600` veya `text-primary-600`

## Önemli İş Akışları

### Yeni Sayfa Ekleme
1. `app/[sayfa-adi]/page.tsx` oluştur
2. Metadata export et (SEO için)
3. Header.tsx'e navigation linki ekle
4. Footer.tsx'e ilgili kategori altına link ekle

### Component Oluşturma
1. `components/` klasörüne PascalCase isimle dosya ekle
2. `'use client'` gerekirse ekle
3. lucide-react ikonları import et
4. Tailwind classları ile stillendirme yap

### Build ve Deployment
```bash
npm run dev        # Geliştirme (localhost:3000)
npm run build      # Production build (hata kontrolü için)
npm run start      # Production preview
```

## Dikkat Edilmesi Gerekenler

### ⚠️ Common Pitfalls
- **useState/useEffect kullanıyorsan**: `'use client'` eklemeyi unutma
- **Görseller**: Unsplash URL'leri placeholder, production'da yerel dosyalar kullanılmalı
- **External panel**: Panel domain'i (panel.onlagelsin.com) ayrı bir uygulama
- **Turkish characters**: Dosya isimleri slug format (örn: `api-entegrasyon`, `kurye-ol`)

### ✅ Best Practices
- Server component'te kalmaya çalış (performans için)
- Metadata'yı her sayfada tanımla
- Responsive breakpoint'leri test et
- Tailwind'in extend config'ini kullan (primary renk gibi)

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
