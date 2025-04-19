import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendar, FaUser, FaTag, FaSearch, FaArrowRight, FaNewspaper } from 'react-icons/fa';

const News = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'all',
    'events',
    'achievements',
    'campaigns',
    'announcements'
  ];

  const newsItems = [
    {
      id: 1,
      title: 'Successful Ramadan Campaign 2024',
      category: 'campaigns',
      date: 'March 15, 2024',
      author: 'Admin',
      image: '/images/news/ramadan-campaign.jpg',
      excerpt: 'Our annual Ramadan campaign successfully provided iftar meals to over 1000 families in Abu-Hammad.',
      content: `Our dedicated volunteers worked tirelessly throughout the holy month to ensure that families in need received nutritious iftar meals. The campaign also included distribution of food packages and essential supplies.`,
    },
    {
      id: 2,
      title: 'Educational Support Program Launches',
      category: 'events',
      date: 'March 10, 2024',
      author: 'Education Team',
      image: '/images/news/education-program.jpg',
      excerpt: 'New tutoring program launched to support students in their academic journey.',
      content: `The program aims to provide free tutoring services to students from underprivileged families, covering various subjects and grade levels.`,
    },
    {
      id: 3,
      title: 'Medical Camp Serves 500+ Patients',
      category: 'achievements',
      date: 'March 5, 2024',
      author: 'Medical Team',
      image: '/images/news/medical-camp.jpg',
      excerpt: 'Recent medical camp provided free healthcare services to over 500 patients.',
      content: `The medical camp offered various services including general check-ups, dental care, and eye examinations. Medications were also provided free of charge to patients in need.`,
    },
    {
      id: 4,
      title: 'Volunteer Recognition Ceremony',
      category: 'announcements',
      date: 'March 1, 2024',
      author: 'Admin',
      image: '/images/news/volunteer-ceremony.jpg',
      excerpt: 'Annual ceremony to recognize and celebrate our dedicated volunteers.',
      content: `The ceremony highlighted the outstanding contributions of our volunteers and their impact on the community throughout the year.`,
    },
  ];

  const filteredNews = newsItems
    .filter(item => 
      (selectedCategory === 'all' || item.category === selectedCategory) &&
      (item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       item.content.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[var(--gradient-start)] to-[var(--gradient-end)]">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_800px_at_100%_200px,rgba(255,255,255,0.1),transparent)]" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_800px_at_0%_800px,rgba(255,255,255,0.1),transparent)]" />
          </div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.span 
            className="inline-block text-sm font-semibold uppercase tracking-wider mb-4 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm text-white"
            {...fadeInUp}
          >
            Stay Updated
          </motion.span>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6 text-shadow"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Latest News
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90 max-w-3xl mx-auto"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            Stay updated with our activities, achievements, and upcoming events
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-16 relative z-10">
        {/* Search and Filter */}
        <motion.div 
          className="bg-white rounded-2xl shadow-xl p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Search */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search news..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[var(--gradient-start)] focus:ring-2 focus:ring-[var(--gradient-start)]/20 transition-all duration-300"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl capitalize transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="relative h-56 bg-gradient-to-br from-gray-900 via-[var(--gradient-start)] to-[var(--gradient-end)] rounded-t-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_400px_at_50%_50%,rgba(255,255,255,0.1),transparent)] group-hover:opacity-30 transition-opacity duration-300" />
                </div>
                <div className="p-8 bg-white rounded-b-2xl">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center">
                      <FaCalendar className="mr-2 text-[var(--gradient-start)]" />
                      {news.date}
                    </span>
                    <span className="flex items-center">
                      <FaUser className="mr-2 text-[var(--gradient-start)]" />
                      {news.author}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 group-hover:text-[var(--gradient-start)] transition-colors duration-300">
                    {news.title}
                  </h2>
                  <p className="text-gray-600 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                    {news.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                      <FaTag className="mr-2 text-[var(--gradient-start)]" />
                      {news.category}
                    </span>
                    <button className="flex items-center text-[var(--gradient-start)] font-semibold group">
                      Read More
                      <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </button>
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
              className="text-center py-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <FaNewspaper className="text-6xl text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No News Found</h3>
              <p className="text-gray-600">
                No news items found matching your criteria. Try adjusting your search or filters.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default News;