import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaStar, FaHandHoldingHeart, FaQuoteLeft } from 'react-icons/fa';

const About = () => {
  const achievements = [
    {
      id: 1,
      volunteer: 'Ahmed Mohamed',
      role: 'Food Distribution Lead',
      achievement: 'Successfully coordinated the distribution of 1000+ food packages during Ramadan 2024',
      timing: 'March 2024',
      image: '/images/achievements/food-distribution.jpg',
    },
    {
      id: 2,
      volunteer: 'Fatima Ali',
      role: 'Education Program Coordinator',
      achievement: 'Established a tutoring program helping 50+ students improve their academic performance',
      timing: 'February 2024',
      image: '/images/achievements/education.jpg',
    },
    {
      id: 3,
      volunteer: 'Omar Hassan',
      role: 'Medical Camp Organizer',
      achievement: 'Organized medical camps serving 500+ patients in underserved areas',
      timing: 'January 2024',
      image: '/images/achievements/medical.jpg',
    },
  ];

  const impactAreas = [
    {
      title: 'Education',
      description: 'Supporting students with resources and tutoring',
      icon: <FaStar className="text-4xl" />,
      stats: '200+ Students Supported',
    },
    {
      title: 'Healthcare',
      description: 'Providing medical assistance and health camps',
      icon: <FaMedal className="text-4xl" />,
      stats: '1000+ Patients Served',
    },
    {
      title: 'Food Security',
      description: 'Distributing food packages to families in need',
      icon: <FaHandHoldingHeart className="text-4xl" />,
      stats: '500+ Families Helped',
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
            Our Story
          </motion.span>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6 text-shadow"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            About Resala Abu-Hammad
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90 max-w-3xl mx-auto"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            We are a charitable organization dedicated to serving the community of Abu-Hammad
            through various humanitarian initiatives and programs.
          </motion.p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="card group p-8 hover:bg-gradient-to-br hover:from-[var(--gradient-start)] hover:to-[var(--gradient-end)] transition-all duration-500"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative z-10 transition-colors duration-500 group-hover:text-white">
                <FaQuoteLeft className="text-3xl mb-6 text-[var(--gradient-start)] group-hover:text-white/80" />
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="group-hover:text-white/90">
                  To provide comprehensive support to underprivileged communities through sustainable
                  programs in education, healthcare, and social welfare, ensuring dignity and
                  opportunity for all.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="card group p-8 hover:bg-gradient-to-br hover:from-[var(--gradient-start)] hover:to-[var(--gradient-end)] transition-all duration-500"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative z-10 transition-colors duration-500 group-hover:text-white">
                <FaQuoteLeft className="text-3xl mb-6 text-[var(--gradient-start)] group-hover:text-white/80" />
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="group-hover:text-white/90">
                  To create a community where every individual has access to basic necessities,
                  quality education, and healthcare, fostering a society of mutual support and
                  sustainable development.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="section-title text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Impact Areas
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactAreas.map((area, index) => (
              <motion.div
                key={area.title}
                className="impact-card group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-[var(--gradient-start)] group-hover:scale-110 transition-transform duration-300">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold mt-4 mb-2">{area.title}</h3>
                <p className="text-gray-600 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                  {area.description}
                </p>
                <div className="text-lg font-bold bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
                  {area.stats}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="section-title text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Volunteer Achievements
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                className="news-card group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="h-56 bg-gradient-to-br from-gray-900 via-[var(--gradient-start)] to-[var(--gradient-end)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_400px_at_50%_50%,rgba(255,255,255,0.1),transparent)] group-hover:opacity-30 transition-opacity duration-300" />
                </div>
                <div className="p-8 bg-white group-hover:bg-gray-50 transition-colors duration-300">
                  <div className="flex items-center mb-4">
                    <FaTrophy className="text-2xl text-[var(--gradient-start)] mr-2" />
                    <h3 className="text-xl font-bold group-hover:text-[var(--gradient-start)] transition-colors duration-300">
                      {achievement.volunteer}
                    </h3>
                  </div>
                  <p className="font-bold mb-2 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
                    {achievement.role}
                  </p>
                  <p className="text-gray-600 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                    {achievement.achievement}
                  </p>
                  <p className="text-sm text-gray-500">{achievement.timing}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;