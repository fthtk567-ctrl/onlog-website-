import { ArrowRight, Calendar, User } from 'lucide-react';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: "On'la Gelsin - Blog | Yemek Siparişi ve Restoran İçgörüleri",
  description: 'Yemek siparişi, yerel restoranlar ve dijital restoran yönetimi hakkında güncel yazılar.',
  path: '/blog',
  keywords: ['yemek siparişi blog', 'restoran içgörüleri', 'dijital restoran yönetimi'],
})

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'Yerel Restoranlar Dijital Siparişle Nasıl Büyür?',
      excerpt: 'Restoranların online yemek siparişi kanalıyla daha fazla müşteriye ulaşması için temel adımlar.',
      author: "On'la Gelsin Editör",
      date: '15 Ekim 2024',
      readTime: '5 dk',
    },
    {
      id: 2,
      title: 'Yemek Siparişinde Kullanıcı Deneyimi Neden Önemli?',
      excerpt: 'Sade menü, anlaşılır sepet ve güvenli ödeme akışının müşteri memnuniyetine etkisi.',
      author: "On'la Gelsin Editör",
      date: '10 Ekim 2024',
      readTime: '4 dk',
    },
    {
      id: 3,
      title: "On'la Gelsin Mobil Uygulaması Google Play'de",
      excerpt: 'Yerli ve milli yemek sipariş deneyimini Android cihazınıza indirerek restoranları keşfetmeye başlayın.',
      author: "On'la Gelsin Editör",
      date: '5 Ekim 2024',
      readTime: '3 dk',
    },
    {
      id: 4,
      title: 'Restoran Menüleri Dijitalde Nasıl Daha İyi Sunulur?',
      excerpt: 'Ürün açıklamaları, görseller, kategori düzeni ve fiyat güncelliği için pratik öneriler.',
      author: "On'la Gelsin Editör",
      date: '1 Ekim 2024',
      readTime: '6 dk',
    },
    {
      id: 5,
      title: 'Restoran Panelinde Takip Edilmesi Gereken Metrikler',
      excerpt: 'Popüler ürünler, sipariş yoğunluğu ve satış raporları restoran kararlarını nasıl güçlendirir?',
      author: "On'la Gelsin Editör",
      date: '25 Eylül 2024',
      readTime: '7 dk',
    },
    {
      id: 6,
      title: 'Yerli Yemek Sipariş Platformu Kullanmanın Avantajları',
      excerpt: "On'la Gelsin'in yerel restoran ekosistemine ve kullanıcı deneyimine kattığı değerler.",
      author: "On'la Gelsin Editör",
      date: '20 Eylül 2024',
      readTime: '5 dk',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              On&apos;la Gelsin Blog
            </h1>
            <p className="text-xl text-primary-50">
              Yemek siparişi, yerel restoranlar ve dijital restoran yönetimi hakkında yazılar
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Son Yazılar
            </h2>
            <div className="space-y-6">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <span className="ml-auto">
                      {post.readTime}
                    </span>
                  </div>
                  <button className="inline-flex items-center gap-2 text-primary-600 font-semibold mt-4 hover:gap-3 transition-all">
                    Devamını Oku
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Blog Güncellemelerini Kaçırmayın
            </h2>
            <p className="text-primary-50 mb-8">
              E-posta adresinizi girerek yeni blog yazılarımızdan haberdar olun
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-6 py-3 rounded-lg border-0 focus:ring-2 focus:ring-primary-300"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                Abone Ol
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
