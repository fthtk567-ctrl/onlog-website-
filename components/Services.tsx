import Link from 'next/link'
import { ShoppingBag, UtensilsCrossed, Pill, FileText, Gift, Shirt, Package } from 'lucide-react'

const services = [
  {
    title: 'E-ticaret',
    description: '200 kg\'ye kadar olan tüm gönderilerin gün içinde güvenle adresinde.',
    icon: ShoppingBag,
    link: '/e-ticaret',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop'
  },
  {
    title: 'Gıda ve marketler',
    description: 'Sıcak ya da donmuş tüm yiyeceklerin lezzetlerini koruması için yalıtımlı kargo çantaları kullanıyoruz.',
    icon: Package,
    link: '/kurye-hizmetleri/yemek-kurye-teslimati',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop'
  },
  {
    title: 'Restoranlar',
    description: 'Size zaman kazandırıyoruz. Hızlı kuryelerimizle kapıya kadar teslimat yapıyoruz.',
    icon: UtensilsCrossed,
    link: '/kurye-hizmetleri/restoran-kurye-hizmeti',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop'
  },
  {
    title: 'Ecza',
    description: 'Hem eczanelerden evlere bireysel teslimat, hem de ecza depolarından eczanelere kurumsal teslimat imkânı.',
    icon: Pill,
    link: '/kurye-hizmetleri/eczane-kurye-teslimati',
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=300&fit=crop'
  },
  {
    title: 'Belge ve evraklar',
    description: 'Kuryelerimiz tüm resmi evrakları ve belgeleri, güvenli bir şekilde teslim eder, iade eder.',
    icon: FileText,
    link: '/kurye-hizmetleri/evrak-kurye',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop'
  },
  {
    title: 'Çiçek ve hediyelik',
    description: 'Narin ve kırılma riski olan tüm gönderileriniz için maksimum özen gösteriyoruz.',
    icon: Gift,
    link: '/kurye-hizmetleri/ayn-gun-cicek-ve-hediye-teslimati',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=300&fit=crop'
  },
  {
    title: 'Giyim ve ayakkabı',
    description: 'Müşterilerinize ayrıcalıklı bir hizmet sunun: Gün içinde adrese hızlı teslimat avantajı.',
    icon: Shirt,
    link: '/kurye-hizmetleri/paket-kurye-teslimati',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop'
  },
  {
    title: 'Diğer her şey',
    description: 'Gönderinizin özellikleri ve sizin tüm isteklerinizi göz önüne alarak en uygun hizmeti veriyoruz.',
    icon: Package,
    link: '/order',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=300&fit=crop'
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Her iş kolu için farklı çözümlerle size nasıl yardımcı olacağımızı biliyoruz
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link 
                key={index}
                href={service.link}
                className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
