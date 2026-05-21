import { Award, HeartHandshake, Smartphone, Store, Target, TrendingUp, Users, UtensilsCrossed } from 'lucide-react';

export const metadata = {
  title: "On'la Gelsin - Hakkımızda",
  description: "On'la Gelsin, kullanıcıları yerel restoranlarla buluşturan yerli ve milli yemek sipariş platformudur.",
}

export default function HakkimizdaPage() {
  const googlePlayUrl = 'https://play.google.com/store/apps/details?id=com.teketech.onlagelsin&hl=tr'

  const values = [
    {
      icon: UtensilsCrossed,
      title: 'Lezzet Odağı',
      description: 'Tüm enerjimizi yemek siparişi deneyimini daha sade, erişilebilir ve keyifli hale getirmeye ayırıyoruz.',
    },
    {
      icon: Store,
      title: 'Yerel Restoranlar',
      description: 'Mahalle restoranlarının dijitalde daha görünür olmasını ve yeni müşterilere ulaşmasını önemsiyoruz.',
    },
    {
      icon: Users,
      title: 'Kullanıcı Memnuniyeti',
      description: 'Sipariş verirken anlaşılır, güven veren ve hızlı ilerleyen bir deneyim sunmayı hedefliyoruz.',
    },
    {
      icon: HeartHandshake,
      title: 'Adil İş Ortaklığı',
      description: 'Restoranlarla uzun vadeli, şeffaf ve sürdürülebilir iş birlikleri kurmaya odaklanıyoruz.',
    },
    {
      icon: TrendingUp,
      title: 'Sürekli Gelişim',
      description: 'Uygulamamızı ve restoran panelimizi gerçek ihtiyaçlara göre düzenli olarak geliştiriyoruz.',
    },
    {
      icon: Award,
      title: 'Yerli Girişim',
      description: 'Türkiye’den çıkan, yerel ekonomiye ve restoran ekosistemine değer katmayı amaçlayan bir markayız.',
    },
  ];

  const stats = [
    { number: '2024', label: 'Kuruluş Yılı' },
    { number: 'Yerli', label: 'Girişim' },
    { number: 'Restoran', label: 'Odaklı' },
    { number: 'Mobil', label: 'Deneyim' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              On&apos;la Gelsin Hakkında
            </h1>
            <p className="text-xl text-primary-50">
              Kullanıcıları sevdikleri restoranlarla buluşturan yerli yemek sipariş platformu
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Hikayemiz
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  On&apos;la Gelsin, yemek siparişini daha yerel, daha anlaşılır ve daha erişilebilir hale getirmek
                  amacıyla hayata geçirildi. Kullanıcıların yaşadığı bölgedeki restoranları keşfedebildiği,
                  restoranların ise dijitalde daha güçlü yer alabildiği bir pazar yeri kuruyoruz.
                </p>
                <p>
                  Bizim odağımız tek: yemek. Farklı iş kollarına dağılmadan, restoranlar ve yemek siparişi
                  deneyimi için çalışan yerli ve milli bir platform olmayı önemsiyoruz.
                </p>
                <p>
                  Şeffaflık, güven ve sürdürülebilir iş ortaklığı temel değerlerimizdir. Her gün kullanıcıların
                  sipariş deneyimini, restoranların ise panel ve satış akışını iyileştirmek için çalışıyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-100 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Değerlerimiz
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              On&apos;la Gelsin&apos;in merkezinde lezzet, yerellik ve güçlü restoran iş ortaklığı var.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <Target className="w-10 h-10 text-primary-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Misyonumuz
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Türkiye&apos;de kullanıcıların sevdikleri restoranlara kolayca ulaşabildiği, restoranların ise
                  dijital sipariş kanalını güvenle büyütebildiği yerli bir yemek sipariş pazar yeri oluşturmak.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <Smartphone className="w-10 h-10 text-primary-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Vizyonumuz
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yerel restoranları teknolojiyle güçlendiren, kullanıcıların günlük yemek alışkanlıklarında
                  güvenle tercih ettiği, yerli ve milli bir marka haline gelmek.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            On&apos;la Gelsin Deneyimine Katılın
          </h2>
          <p className="text-primary-50 mb-8 max-w-2xl mx-auto">
            Kullanıcıysanız uygulamayı indirin, restoran sahibiyseniz iş ortağımız olun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={googlePlayUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Uygulamayı İndir
            </a>
            <a
              href="/is-ortagimiz-ol"
              className="bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors"
            >
              İş Ortağımız Olun
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
