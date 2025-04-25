import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendar, FaUser, FaTag, FaSearch, FaArrowLeft, FaNewspaper } from 'react-icons/fa';

const News = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'الكل' },
    { id: 'events', name: 'الفعاليات' },
    { id: 'achievements', name: 'الإنجازات' },
    { id: 'campaigns', name: 'الحملات' },
    { id: 'announcements', name: 'الإعلانات' }
  ];

  const newsItems = [
    {
      id: 1,
      title: 'نجاح حملة رمضان 2024',
      category: 'campaigns',
      categoryName: 'الحملات',
      date: '١٥ مارس ٢٠٢٤',
      author: 'الإدارة',
      image: '/images/news/ramadan-campaign.jpg',
      excerpt: 'نجحت حملتنا السنوية في شهر رمضان في توفير وجبات إفطار لأكثر من 1000 عائلة في أبو حماد.',
      content: `عمل متطوعونا المخلصون بلا كلل طوال الشهر الكريم لضمان حصول العائلات المحتاجة على وجبات إفطار مغذية. كما شملت الحملة توزيع حزم غذائية ومستلزمات أساسية.`,
    },
    {
      id: 2,
      title: 'إطلاق برنامج الدعم التعليمي',
      category: 'events',
      categoryName: 'الفعاليات',
      date: '١٠ مارس ٢٠٢٤',
      author: 'فريق التعليم',
      image: '/images/news/education-program.jpg',
      excerpt: 'تم إطلاق برنامج تعليمي جديد لدعم الطلاب في رحلتهم الأكاديمية.',
      content: `يهدف البرنامج إلى توفير خدمات تعليمية مجانية للطلاب من العائلات المحرومة، وتغطية مختلف المواد والمستويات الدراسية.`,
    },
    {
      id: 3,
      title: 'المخيم الطبي يخدم أكثر من 500 مريض',
      category: 'achievements',
      categoryName: 'الإنجازات',
      date: '٥ مارس ٢٠٢٤',
      author: 'الفريق الطبي',
      image: '/images/news/medical-camp.jpg',
      excerpt: 'قدم المخيم الطبي الأخير خدمات رعاية صحية مجانية لأكثر من 500 مريض.',
      content: `قدم المخيم الطبي خدمات متنوعة بما في ذلك الفحوصات العامة، ورعاية الأسنان، وفحوصات العيون. كما تم توفير الأدوية مجانًا للمرضى المحتاجين.`,
    },
    {
      id: 4,
      title: 'حفل تكريم المتطوعين',
      category: 'announcements',
      categoryName: 'الإعلانات',
      date: '١ مارس ٢٠٢٤',
      author: 'الإدارة',
      image: '/images/news/volunteer-ceremony.jpg',
      excerpt: 'الحفل السنوي للاعتراف بمتطوعينا المخلصين والاحتفال بهم.',
      content: `سلط الحفل الضوء على المساهمات البارزة لمتطوعينا وتأثيرهم على المجتمع طوال العام.`,
    },
  ];

  const filteredNews = newsItems
    .filter(item =>
      (selectedCategory === 'all' || item.category === selectedCategory) &&
      (item.title.includes(searchTerm) ||
       item.content.includes(searchTerm))
    );

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[var(--gradient-start)] to-[var(--gradient-end)]">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_800px_at_0%_200px,rgba(255,255,255,0.1),transparent)]" />
            <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_800px_at_100%_800px,rgba(255,255,255,0.1),transparent)]" />
          </div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.span
            className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider mb-4 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm text-white"
            {...fadeInUp}
          >
            ابق على اطلاع
          </motion.span>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 text-shadow"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            آخر الأخبار
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            ابق على اطلاع بأنشطتنا وإنجازاتنا والفعاليات القادمة
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8 md:-mt-16 relative z-10">
        {/* Search and Filter */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Search */}
            <div className="relative">
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="ابحث في الأخبار..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pr-12 pl-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[var(--gradient-start)] focus:ring-2 focus:ring-[var(--gradient-start)]/20 transition-all duration-300"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-end">
              {categories.map(category => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-xl text-sm md:text-base transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredNews.map((news, index) => (
              <motion.article
                key={news.id}
                className="card group transform hover:-translate-y-2 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative h-48 md:h-56 bg-gradient-to-br from-gray-900 via-[var(--gradient-start)] to-[var(--gradient-end)] rounded-t-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_400px_at_50%_50%,rgba(255,255,255,0.1),transparent)] group-hover:opacity-30 transition-opacity duration-300" />
                </div>
                <div className="p-6 md:p-8 bg-white rounded-b-2xl">
                  <div className="flex items-center gap-4 text-xs md:text-sm text-gray-500 mb-3 md:mb-4">
                    <span className="flex items-center">
                      <FaCalendar className="ml-2 text-[var(--gradient-start)]" />
                      {news.date}
                    </span>
                    <span className="flex items-center">
                      <FaUser className="ml-2 text-[var(--gradient-start)]" />
                      {news.author}
                    </span>
                  </div>
                  <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-3 group-hover:text-[var(--gradient-start)] transition-colors duration-300">
                    {news.title}
                  </h2>
                  <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base group-hover:text-gray-900 transition-colors duration-300">
                    {news.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <button className="flex items-center text-[var(--gradient-start)] font-semibold group text-sm md:text-base">
                      اقرأ المزيد
                      <FaArrowLeft className="mr-2 transform group-hover:-translate-x-1 transition-transform" />
                    </button>
                    <span className="flex items-center text-xs md:text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                      <FaTag className="ml-2 text-[var(--gradient-start)]" />
                      {news.categoryName}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* No Results */}
        <AnimatePresence>
          {filteredNews.length === 0 && (
            <motion.div
              className="text-center py-12 md:py-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <FaNewspaper className="text-4xl md:text-6xl text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">لم يتم العثور على أخبار</h3>
              <p className="text-gray-600 text-sm md:text-base">
                لم يتم العثور على أخبار تطابق معايير البحث. حاول تعديل البحث أو الفلاتر.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default News;
