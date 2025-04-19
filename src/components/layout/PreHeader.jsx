import { motion } from 'framer-motion';
import { FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope } from 'react-icons/fa';

const PreHeader = () => {
  const contactInfo = [
    { icon: <FaPhone />, text: '+20 123 456 789', href: 'tel:+201234567890' },
    { icon: <FaEnvelope />, text: 'info@resala-abuhammad.org', href: 'mailto:info@resala-abuhammad.org' },
    { icon: <FaMapMarkerAlt />, text: 'Abu-Hammad, Sharqia, Egypt', href: 'https://goo.gl/maps/yourLocation' },
    { icon: <FaClock />, text: 'Sun-Thu 9:00 AM - 5:00 PM' }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="hidden lg:block fixed w-full z-50 bg-gray-900/80 backdrop-blur-md">
      <motion.div 
        className="container mx-auto px-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex justify-between items-center h-12 text-sm">
          <div className="flex items-center space-x-6">
            {contactInfo.slice(0, 2).map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 group"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <span className="mr-2 text-[var(--gradient-start)] group-hover:text-[var(--gradient-end)] transition-colors duration-300">
                  {item.icon}
                </span>
                <span>{item.text}</span>
              </motion.a>
            ))}
          </div>
          
          <div className="flex items-center space-x-6">
            {contactInfo.slice(2).map((item, index) => (
              <motion.div
                key={index}
                className={`flex items-center text-gray-300 ${item.href ? 'hover:text-white cursor-pointer' : ''} group`}
                variants={itemVariants}
                whileHover={item.href ? { scale: 1.02 } : {}}
              >
                <span className="mr-2 text-[var(--gradient-start)] group-hover:text-[var(--gradient-end)] transition-colors duration-300">
                  {item.icon}
                </span>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.text}
                  </a>
                ) : (
                  <span>{item.text}</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PreHeader;