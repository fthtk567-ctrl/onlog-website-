import { Calendar, User, ArrowRight } from 'lucide-react';

export const metadata = {
  title: "On'la Gelsin - Blog | Kurye ve Teslimat Haberleri",
  description: 'E-ticaret, kurye teslimat ve lojistik sektörü hakkında güncel haberler, ipuçları ve rehberler.',
}

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'E-Ticaret Siteniz İçin Hızlı Kargo Çözümleri',
      excerpt: 'E-ticaret işletmeniz için en uygun kargo çözümlerini ve müşteri memnuniyetini artırma yöntemlerini keşfedin.',
      author: "On'la Gelsin Editör",
      date: '15 Ekim 2024',
      readTime: '5 dk'
    },
    {
      id: 2,
      title: 'Aynı Gün Teslimat Neden Bu Kadar Önemli?',
      excerpt: 'Günümüz tüketicilerinin beklentileri ve aynı gün teslimatın müşteri sadakatine etkisi hakkında bilmeniz gerekenler.',
      author: "On'la Gelsin Editör",
      date: '10 Ekim 2024',
      readTime: '4 dk'
    },
    {
      id: 3,
      title: "On'la Gelsin Mobil Uygulaması Güncellendi",
      excerpt: 'Yeni özellikler ve kullanıcı dostu arayüz ile mobil uygulamamız daha da gelişti. Hemen güncelleyin!',
      author: "On'la Gelsin Editör",
      date: '5 Ekim 2024',
      readTime: '3 dk'
    },
    {
      id: 4,
      title: 'Kuryelerin Güvenli Teslimat İçin İpuçları',
      excerpt: 'Kuryelerimiz için hazırladığımız güvenli teslimat rehberi. Teslimat sürecinde dikkat edilmesi gerekenler.',
      author: "On'la Gelsin Editör",
      date: '1 Ekim 2024',
      readTime: '6 dk'
    },
    {
      id: 5,
      title: "On'la Gelsin API Entegrasyonu Nasıl Yapılır?",
      excerpt: "E-ticaret sitenize On'la Gelsin API entegrasyonu yaparak otomatik kurye atama sistemini aktif hale getirin.",
      author: "On'la Gelsin Editör",
      date: '25 Eylül 2024',
      readTime: '8 dk'
    },
    {
      id: 6,
      title: 'Market Teslimatlarında Yeni Dönem',
      excerpt: "On'la Gelsin ile market teslimatları artık daha hızlı ve güvenilir. Marketlere özel çözümlerimizi keşfedin.",
      author: "On'la Gelsin Editör",
      date: '20 Eylül 2024',
      readTime: '5 dk'
    }
  ];

  const allPosts = blogPosts;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              On'la Gelsin Blog
            </h1>
            <p className="text-xl text-primary-50">
              Lojistik, e-ticaret ve teslimat dünyasından haberler, ipuçları ve daha fazlası
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
              {allPosts.map((post) => (
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
