import { Package, Users, Target, Award, TrendingUp, Shield } from 'lucide-react';

export default function HakkimizdaPage() {
  const values = [
    {
      icon: Package,
      title: 'Hızlı Teslimat',
      description: 'Siparişlerinizi en hızlı şekilde adresinize ulaştırıyoruz.'
    },
    {
      icon: Users,
      title: 'Müşteri Memnuniyeti',
      description: 'Müşterilerimizin memnuniyeti bizim önceliğimizdir.'
    },
    {
      icon: Target,
      title: 'Güvenilirlik',
      description: 'Teslimatlarınızı güvenle bize emanet edebilirsiniz.'
    },
    {
      icon: Award,
      title: 'Kalite',
      description: 'Her teslimatı en yüksek kalite standartlarında gerçekleştiriyoruz.'
    },
    {
      icon: TrendingUp,
      title: 'Sürekli Gelişim',
      description: 'Teknoloji ve hizmet kalitemizi sürekli geliştiriyoruz.'
    },
    {
      icon: Shield,
      title: 'Güvenlik',
      description: 'Gönderi güvenliğiniz için sigortalı teslimat seçeneği sunuyoruz.'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Mutlu Müşteri' },
    { number: '50,000+', label: 'Başarılı Teslimat' },
    { number: '500+', label: 'Aktif Kurye' },
    { number: '24/7', label: 'Destek Hizmeti' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              OnLog Hakkında
            </h1>
            <p className="text-xl text-primary-50">
              Türkiye&apos;nin en hızlı ve güvenilir kurye hizmeti
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
                  OnLog, modern şehir hayatının getirdiği hızlı teslimat ihtiyacına çözüm olmak amacıyla kuruldu. 
                  Teknoloji ve lojistik alanındaki deneyimlerimizi birleştirerek, müşterilerimize en kaliteli 
                  hizmeti sunmayı hedefliyoruz.
                </p>
                <p>
                  Kuruluşumuzdan bu yana binlerce teslimat gerçekleştirdik ve her gün büyüyen müşteri ailemize 
                  hizmet vermenin gururunu yaşıyoruz. Amacımız, Türkiye&apos;nin her noktasında güvenilir ve hızlı 
                  kurye hizmeti sunarak, insanların hayatını kolaylaştırmak.
                </p>
                <p>
                  Gelişmiş teknolojimiz ve deneyimli kurye ekibimizle, her türlü gönderinizi aynı gün içinde 
                  güvenle teslim ediyoruz. Müşteri memnuniyeti odaklı yaklaşımımız ve sürekli gelişen hizmet 
                  kalitemizle sektörde fark yaratıyoruz.
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
              OnLog olarak, her gün yaptığımız işin temelinde yatan değerlerimiz
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Misyonumuz
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Türkiye&apos;nin her noktasına, en hızlı ve güvenilir şekilde teslimat yaparak, 
                  insanların hayatını kolaylaştırmak ve e-ticaret ekosisteminin vazgeçilmez 
                  lojistik partneri olmak.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Vizyonumuz
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Teknoloji destekli lojistik çözümlerimizle, Türkiye&apos;nin en tercih edilen 
                  kurye şirketi olmak ve müşterilerimize her zaman en iyi hizmeti sunmak.
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
            OnLog Ailesine Katılın
          </h2>
          <p className="text-primary-50 mb-8 max-w-2xl mx-auto">
            Binlerce mutlu müşterimizin arasına siz de katılın ve hızlı teslimatın keyfini çıkarın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/kurye-ol"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Kurye Ol
            </a>
            <a
              href="/iletisim"
              className="bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors"
            >
              İletişime Geç
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
