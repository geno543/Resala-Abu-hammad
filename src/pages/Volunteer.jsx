import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaHeart, 
  FaBook, 
  FaHandHoldingMedical, 
  FaUsers, 
  FaCheck, 
  FaArrowRight,
  FaStar,
  FaQuoteRight
} from 'react-icons/fa';

const Volunteer = () => {
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    address: '',
    experience: '',
  });

  const activities = [
    {
      id: 'food',
      icon: <FaHeart />,
      title: 'Food Distribution',
      description: 'Help distribute food packages to families in need',
      impact: '1000+ meals distributed monthly',
    },
    {
      id: 'education',
      icon: <FaBook />,
      title: 'Education Support',
      description: 'Provide tutoring and educational assistance',
      impact: '200+ students supported',
    },
    {
      id: 'medical',
      icon: <FaHandHoldingMedical />,
      title: 'Medical Assistance',
      description: 'Support in medical camps and health initiatives',
      impact: '500+ patients served',
    },
    {
      id: 'community',
      icon: <FaUsers />,
      title: 'Community Events',
      description: 'Help organize and manage community events',
      impact: '50+ events annually',
    },
  ];

  const testimonials = [
    {
      name: "Ahmed Hassan",
      role: "Food Distribution Volunteer",
      quote: "Volunteering at Resala has been one of the most rewarding experiences of my life.",
    },
    {
      name: "Fatima Ali",
      role: "Education Program Volunteer",
      quote: "Seeing the impact we make in students' lives is incredibly fulfilling.",
    },
    {
      name: "Omar Mohamed",
      role: "Medical Camp Volunteer",
      quote: "The team spirit and dedication to helping others is truly inspiring.",
    },
  ];

  const toggleActivity = (activityId) => {
    setSelectedActivities(prev => 
      prev.includes(activityId)
        ? prev.filter(id => id !== activityId)
        : [...prev, activityId]
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ ...formData, selectedActivities });
  };

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
            Join Our Team
          </motion.span>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6 text-shadow"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Become a Volunteer
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90 max-w-3xl mx-auto"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            Join our dedicated team of volunteers and help make a positive impact in our community
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Activities Selection */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
              Select Activities You're Interested In
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activities.map((activity) => (
                <motion.button
                  key={activity.id}
                  className={`p-6 rounded-xl border-2 text-left group transition-all duration-300 ${
                    selectedActivities.includes(activity.id)
                      ? 'border-[var(--gradient-start)] bg-gradient-to-br from-[var(--gradient-start)]/5 to-[var(--gradient-end)]/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => toggleActivity(activity.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start">
                    <div className={`text-3xl mr-4 transition-all duration-300 ${
                      selectedActivities.includes(activity.id)
                        ? 'text-[var(--gradient-start)]'
                        : 'text-gray-400'
                    } group-hover:scale-110`}>
                      {activity.icon}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold mb-2">{activity.title}</h3>
                      <p className="text-gray-600 mb-2">{activity.description}</p>
                      <p className="text-sm text-[var(--gradient-start)]">{activity.impact}</p>
                    </div>
                    <AnimatePresence>
                      {selectedActivities.includes(activity.id) && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          className="bg-[var(--gradient-start)] text-white p-2 rounded-full"
                        >
                          <FaCheck />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
              Volunteer Testimonials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl p-6 relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <FaQuoteRight className="absolute top-4 right-4 text-2xl text-[var(--gradient-start)]/10" />
                  <p className="text-gray-600 mb-4 italic">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] flex items-center justify-center text-white">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Registration Form */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
              Personal Information
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: 'name', label: 'Full Name', type: 'text' },
                  { name: 'email', label: 'Email', type: 'email' },
                  { name: 'phone', label: 'Phone Number', type: 'tel' },
                  { name: 'age', label: 'Age', type: 'number' }
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-gray-700 font-semibold mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-[var(--gradient-start)] focus:ring-2 focus:ring-[var(--gradient-start)]/20 transition-all duration-300"
                      required
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-[var(--gradient-start)] focus:ring-2 focus:ring-[var(--gradient-start)]/20 transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Previous Volunteer Experience (Optional)
                </label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-[var(--gradient-start)] focus:ring-2 focus:ring-[var(--gradient-start)]/20 transition-all duration-300 h-32"
                />
              </div>

              <motion.button
                type="submit"
                className={`w-full py-4 px-8 rounded-xl text-lg font-semibold flex items-center justify-center group ${
                  selectedActivities.length === 0
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'btn-primary'
                }`}
                whileHover={selectedActivities.length > 0 ? { scale: 1.02 } : {}}
                whileTap={selectedActivities.length > 0 ? { scale: 0.98 } : {}}
                disabled={selectedActivities.length === 0}
              >
                Submit Application
                <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;