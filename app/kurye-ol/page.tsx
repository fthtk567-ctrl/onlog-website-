import { TrendingUp, Clock, Wallet, Shield, MapPin, Users, CheckCircle, Phone } from 'lucide-react';

export const metadata = {
  title: "On'la Gelsin - Kurye Ol | Esnek Çalışma İmkanı",
  description: 'Kuryemiz olun! Esnek saatlerde çalışın, yüksek kazanç elde edin. Haftalık ödeme, sigorta güvencesi ve kariyer fırsatları.',
}

export default function KuryeOlPage() {
  const earnings = [
    {
      icon: Wallet,
      title: 'Yüksek Kazanç',
      description: 'Yaptığınız teslimat sayısına göre cazip aylık kazanç',
      highlight: true
    },
    {
      icon: TrendingUp,
      title: 'Sınırsız Kazanç',
      description: 'Ne kadar çok çalışırsanız o kadar çok kazanırsınız'
    },
    {
      icon: Clock,
      title: 'Esnek Çalışma',
      description: 'İstediğiniz saatlerde çalışma özgürlüğü'
    },
    {
      icon: Shield,
      title: 'Sigortalı İş',
      description: 'SGK ve özel sağlık sigortası güvencesi'
    }
  ];

  const benefits = [
    'Haftalık ödeme imkanı',
    'Yakıt desteği',
    'Performans primleri',
    'Özel gün bonusları',
    'Sadakat ödülleri',
    'Eğitim ve kariyer gelişimi',
    'Modern araç-gereç desteği',
    'Ücretsiz kaza sigortası'
  ];

  const requirements = [
    {
      title: 'Araç Sahibi Olmalısınız',
      description: 'Motosiklet, bisiklet veya araç (trafik sigortası ve ruhsatı olmalı)'
    },
    {
      title: '18 Yaşından Büyük',
      description: 'Yasal olarak çalışma izniniz olmalı'
    },
    {
      title: 'Ehliyet',
      description: 'Kullandığınız araca uygun sürücü belgesi'
    },
    {
      title: 'Akıllı Telefon',
      description: "On'la Gelsin uygulamasını çalıştırabilen Android veya iOS cihaz"
    }
  ];

  const steps = [
    {
      number: '1',
      title: 'Başvuru Formu',
      description: 'Aşağıdaki formu doldurarak başvurunuzu tamamlayın'
    },
    {
      number: '2',
      title: 'Ön Değerlendirme',
      description: '24 saat içinde ekibimiz sizi arayacak'
    },
    {
      number: '3',
      title: 'Evrak ve Eğitim',
      description: 'Gerekli evrakları tamamlayın ve online eğitimi alın'
    },
    {
      number: '4',
      title: 'Hemen Başlayın',
      description: 'Aynı gün teslimat yapmaya başlayıp kazanmaya başlayın'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Kendi İşinizin Patronu Olun!
            </h1>
            <p className="text-2xl text-primary-50 mb-4">
              Yüksek Kazanç Fırsatı
            </p>
            <p className="text-xl text-primary-100 mb-8">
              Esnek çalışma saatleri, haftalık ödeme, sınırsız kazanç fırsatı
            </p>
            <a
              href="#basvuru"
              className="inline-block bg-white text-primary-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-primary-50 transition-colors shadow-lg"
            >
              Hemen Başvur
            </a>
          </div>
        </div>
      </section>

      {/* Earnings Highlight */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Neden On'la Gelsin Kuryesi Olmalısınız?
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Türkiye&apos;nin en avantajlı kurye sisteminde yerinizi alın
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {earnings.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-8 ${
                    item.highlight
                      ? 'bg-gradient-to-br from-primary-600 to-primary-500 text-white shadow-2xl scale-105'
                      : 'bg-gray-50 border-2 border-gray-200'
                  }`}
                >
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                      item.highlight ? 'bg-white/20' : 'bg-primary-100'
                    }`}
                  >
                    <item.icon
                      className={`w-8 h-8 ${
                        item.highlight ? 'text-white' : 'text-primary-600'
                      }`}
                    />
                  </div>
                  <h3
                    className={`text-2xl font-bold mb-3 ${
                      item.highlight ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={
                      item.highlight ? 'text-primary-100' : 'text-gray-600'
                    }
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Ek Avantajlar ve İmkanlar
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm"
                >
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Gereksinimler
            </h2>
            <p className="text-center text-gray-600 mb-12">
              On'la Gelsin kuryesi olmak için ihtiyacınız olanlar
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {requirements.map((req, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {req.title}
                  </h3>
                  <p className="text-gray-600">{req.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Nasıl Başlarsınız?
            </h2>
            <p className="text-center text-primary-100 mb-12 text-lg">
              4 basit adımda kurye olun ve kazanmaya başlayın
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-primary-100 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="basvuru" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
                Kurye Başvuru Formu
              </h2>
              <p className="text-gray-600 text-center mb-8">
                Formu doldurun, 24 saat içinde sizi arayalım
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Ad Soyad *
                    </label>
                    <input
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
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                    placeholder="ornek@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Şehir *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                  >
                    <option value="">Şehir seçiniz</option>
                    <option value="istanbul">İstanbul</option>
                    <option value="ankara">Ankara</option>
                    <option value="izmir">İzmir</option>
                    <option value="konya">Konya</option>
                    <option value="bursa">Bursa</option>
                    <option value="antalya">Antalya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Araç Tipi *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                  >
                    <option value="">Araç tipi seçiniz</option>
                    <option value="motosiklet">Motosiklet</option>
                    <option value="bisiklet">Bisiklet</option>
                    <option value="otomobil">Otomobil</option>
                    <option value="ticari">Ticari Araç</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Mesajınız
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition"
                    placeholder="Eklemek istediğiniz bilgiler (isteğe bağlı)"
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input
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

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-primary-700 transition-colors shadow-lg"
                >
                  Başvurumu Gönder
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                <p className="text-gray-600 mb-4">
                  Sorularınız mı var? Hemen bizi arayın:
                </p>
                <a
                  href="tel:+905342447504"
                  className="inline-flex items-center gap-2 text-primary-600 font-bold text-xl hover:text-primary-700"
                >
                  <Phone className="w-6 h-6" />
                  +90 534 244 75 04
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Kuryelerimiz Ne Diyor?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Ahmet Y.',
                  role: "On'la Gelsin Kuryesi - 8 Ay",
                  text: 'Aylık ortalama çok iyi kazanıyorum. Esnek çalışma saatleri sayesinde ailemle daha çok vakit geçirebiliyorum.',
                  city: 'İstanbul'
                },
                {
                  name: 'Mehmet K.',
                  role: "On'la Gelsin Kuryesi - 1 Yıl",
                  text: 'Haftalık ödeme sistemi çok işime yarıyor. Performans primleri sayesinde gelirimi artırabiliyorum.',
                  city: 'Ankara'
                },
                {
                  name: 'Emre D.',
                  role: "On'la Gelsin Kuryesi - 6 Ay",
                  text: 'Öğrenciyim ve part-time çalışarak iyi para kazanıyorum. Hem okuyor hem kazanıyorum.',
                  city: 'İzmir'
                }
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3">{testimonial.text}</p>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <MapPin className="w-4 h-4" />
                    {testimonial.city}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
