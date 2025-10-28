import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

export default function BlogPage() {
  const categories = [
    'Tümü',
    'Haberler',
    'İpuçları',
    'E-Ticaret',
    'Teknoloji',
    'Duyurular'
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'E-Ticaret Siteniz İçin Hızlı Kargo Çözümleri',
      excerpt: 'E-ticaret işletmeniz için en uygun kargo çözümlerini ve müşteri memnuniyetini artırma yöntemlerini keşfedin.',
      image: '/images/blog/blog-1.jpg',
      category: 'E-Ticaret',
      author: 'OnLog Editör',
      date: '15 Ekim 2024',
      readTime: '5 dk'
    },
    {
      id: 2,
      title: 'Aynı Gün Teslimat Neden Bu Kadar Önemli?',
      excerpt: 'Günümüz tüketicilerinin beklentileri ve aynı gün teslimatın müşteri sadakatine etkisi hakkında bilmeniz gerekenler.',
      image: '/images/blog/blog-2.jpg',
      category: 'İpuçları',
      author: 'OnLog Editör',
      date: '10 Ekim 2024',
      readTime: '4 dk'
    },
    {
      id: 3,
      title: 'OnLog Mobil Uygulaması Güncellendi',
      excerpt: 'Yeni özellikler ve kullanıcı dostu arayüz ile mobil uygulamamız daha da gelişti. Hemen güncelleyin!',
      image: '/images/blog/blog-3.jpg',
      category: 'Duyurular',
      author: 'OnLog Editör',
      date: '5 Ekim 2024',
      readTime: '3 dk'
    },
    {
      id: 4,
      title: 'Kuryelerin Güvenli Teslimat İçin İpuçları',
      excerpt: 'Kuryelerimiz için hazırladığımız güvenli teslimat rehberi. Teslimat sürecinde dikkat edilmesi gerekenler.',
      image: '/images/blog/blog-4.jpg',
      category: 'İpuçları',
      author: 'OnLog Editör',
      date: '1 Ekim 2024',
      readTime: '6 dk'
    },
    {
      id: 5,
      title: 'OnLog API Entegrasyonu Nasıl Yapılır?',
      excerpt: 'E-ticaret sitenize OnLog API entegrasyonu yaparak otomatik kurye atama sistemini aktif hale getirin.',
      image: '/images/blog/blog-5.jpg',
      category: 'Teknoloji',
      author: 'OnLog Editör',
      date: '25 Eylül 2024',
      readTime: '8 dk'
    },
    {
      id: 6,
      title: 'Market Teslimatlarında Yeni Dönem',
      excerpt: 'OnLog ile market teslimatları artık daha hızlı ve güvenilir. Marketlere özel çözümlerimizi keşfedin.',
      image: '/images/blog/blog-6.jpg',
      category: 'Haberler',
      author: 'OnLog Editör',
      date: '20 Eylül 2024',
      readTime: '5 dk'
    }
  ];

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              OnLog Blog
            </h1>
            <p className="text-xl text-primary-50">
              Lojistik, e-ticaret ve teslimat dünyasından haberler, ipuçları ve daha fazlası
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  index === 0
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-64 md:h-full bg-gradient-to-br from-primary-400 to-primary-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center p-8">
                      <Tag className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-sm opacity-75">Öne Çıkan Yazı Görseli</p>
                    </div>
                  </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="text-gray-500 text-sm">Öne Çıkan</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                  </div>
                  <button className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all">
                    Devamını Oku
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Son Yazılar
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48 bg-gradient-to-br from-primary-400 to-primary-600">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center p-4">
                        <Tag className="w-12 h-12 mx-auto mb-2 opacity-50" />
                        <p className="text-xs opacity-75">Blog Görseli</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-xs">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500 pt-4 border-t">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                Daha Fazla Yükle
              </button>
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
