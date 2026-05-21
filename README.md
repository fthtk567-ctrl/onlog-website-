# On'la Gelsin - Yerli Yemek Sipariş Platformu

Yerli yemek sipariş platformu için Next.js web sitesi.

## 🚀 Özellikler

- ⚡ Next.js 14 App Router
- 🎨 Tailwind CSS ile modern tasarım
- 📱 Tam responsive tasarım
- 🔥 Vercel'e deploy edilmeye hazır
- 🍽️ Yemek siparişi odaklı pazaryeri anlatımı
- 🏪 Restoran paneli ve iş ortaklığı sayfaları
- 📲 Google Play yönlendirmeli mobil uygulama tanıtımı

## 📦 Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## 🏗️ Proje Yapısı

```
On'la Gelsin-website/
├── app/
│   ├── layout.tsx       # Ana layout
│   ├── page.tsx         # Ana sayfa
│   └── globals.css      # Global stiller
├── components/
│   ├── Header.tsx       # Üst menü
│   ├── Footer.tsx       # Alt bilgi
│   ├── Hero.tsx         # Ana hero section
│   ├── Services.tsx     # Hizmetler bölümü
│   ├── Integration.tsx  # Restoran deneyimi kartları
│   ├── MobileApp.tsx    # Mobil uygulama tanıtımı
│   ├── CourierApplication.tsx  # İş ortaklığı bölümü
│   └── PromoBar.tsx     # Promosyon çubuğu
├── public/              # Statik dosyalar
└── package.json
```

## 🚀 Vercel'e Deploy

### 1. Vercel CLI ile

```bash
# Vercel CLI'yi yükle (henüz yüklemediyseniz)
npm i -g vercel

# Deploy et
vercel
```

### 2. GitHub ile

1. Projeyi GitHub'a push edin
2. [Vercel Dashboard](https://vercel.com/dashboard)'a gidin
3. "New Project" butonuna tıklayın
4. GitHub repository'nizi seçin
5. Deploy edin!

## 🎨 Özelleştirme

### Renkleri Değiştirme

`tailwind.config.ts` dosyasında renk paletini özelleştirebilirsiniz:

```typescript
colors: {
  primary: {
    // Mavi tonlarını değiştirin
  }
}
```

### İçerik Güncelleme

- `components/` klasöründeki dosyaları düzenleyerek içeriği güncelleyin
- `app/page.tsx` ana sayfa yapısını değiştirmek için

## 📱 Mobil Uygulama Linkleri

Google Play bağlantısı yayındadır; App Store rozeti şimdilik bağlantısızdır:
- `components/Footer.tsx`
- `components/MobileApp.tsx`

## 🔧 Geliştirme

```bash
# Geliştirme modu
npm run dev

# Production build
npm run build

# Production'ı başlat
npm start

# Lint kontrol
npm run lint
```

## 📄 Lisans

Bu proje On'la Gelsin için özel olarak geliştirilmiştir.

## 🤝 Destek

Herhangi bir sorun için lütfen destek ekibiyle iletişime geçin.
