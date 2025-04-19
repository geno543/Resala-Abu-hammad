import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaArrowRight, FaPlay, FaImage } from 'react-icons/fa';

const Services = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);

  const activities = [
    {
      id: 1,
      title: 'Food Distribution',
      arabicTitle: 'توزيع الطعام',
      description: 'We provide food packages to families in need throughout the year, with special campaigns during Ramadan.',
      images: ['/images/food1.jpg', '/images/food2.jpg'],
      videos: ['/videos/food-distribution.mp4'],
    },
    {
      id: 2,
      title: 'Education Support',
      arabicTitle: 'دعم التعليم',
      description: 'Providing educational materials, tutoring services, and school supplies to students from low-income families.',
      images: ['/images/education1.jpg', '/images/education2.jpg'],
      videos: ['/videos/education-program.mp4'],
    },
    {
      id: 3,
      title: 'Medical Assistance',
      arabicTitle: 'المساعدة الطبية',
      description: 'Offering medical support, organizing health campaigns, and providing necessary medications to those in need.',
      images: ['/images/medical1.jpg', '/images/medical2.jpg'],
      videos: ['/videos/medical-camp.mp4'],
    },
  ];

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
            Our Services
          </motion.span>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6 text-shadow font-arabic"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            خدماتنا
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90 max-w-3xl mx-auto"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            Discover our various charitable activities and services that make a difference in our community
          </motion.p>
        </div>
      </div>

      {/* Activities Grid */}
      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              className="card group transform hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative h-56 bg-gradient-to-br from-gray-900 via-[var(--gradient-start)] to-[var(--gradient-end)] overflow-hidden rounded-t-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_400px_at_50%_50%,rgba(255,255,255,0.1),transparent)] group-hover:opacity-30 transition-opacity duration-300" />
              </div>
              <div className="p-8 bg-white rounded-b-2xl">
                <h3 className="text-2xl font-bold mb-2 font-arabic text-right bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
                  {activity.arabicTitle}
                </h3>
                <h4 className="text-xl mb-4 text-gray-800">{activity.title}</h4>
                <p className="text-gray-600 mb-6 group-hover:text-gray-900 transition-colors duration-300">
                  {activity.description}
                </p>
                <button
                  onClick={() => setSelectedActivity(activity)}
                  className="btn-primary w-full group"
                >
                  Learn More
                  <FaArrowRight className="ml-2 inline-block transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Activity Detail Modal */}
      <AnimatePresence>
        {selectedActivity && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedActivity(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h2 className="text-3xl font-bold font-arabic text-right mb-2 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
                      {selectedActivity.arabicTitle}
                    </h2>
                    <h3 className="text-2xl text-gray-800">{selectedActivity.title}</h3>
                  </div>
                  <motion.button
                    whileHover={{ rotate: 90 }}
                    onClick={() => setSelectedActivity(null)}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <FaTimes size={24} />
                  </motion.button>
                </div>

                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  {selectedActivity.description}
                </p>

                {/* Image Gallery */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <FaImage className="mr-2 text-[var(--gradient-start)]" />
                    Photo Gallery
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {selectedActivity.images.map((image, index) => (
                      <motion.div
                        key={index}
                        className="relative h-64 rounded-xl overflow-hidden group cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div
                          className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                          style={{ backgroundImage: `url(${image})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Video Gallery */}
                <div>
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <FaPlay className="mr-2 text-[var(--gradient-start)]" />
                    Video Gallery
                  </h3>
                  <div className="grid grid-cols-1 gap-6">
                    {selectedActivity.videos.map((video, index) => (
                      <div key={index} className="relative rounded-xl overflow-hidden shadow-lg">
                        <video
                          className="w-full aspect-video object-cover"
                          controls
                          poster={selectedActivity.images[0]}
                        >
                          <source src={video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;