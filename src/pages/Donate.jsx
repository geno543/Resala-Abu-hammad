import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaCreditCard,
  FaMobileAlt,
  FaHandHoldingHeart,
  FaRegClock,
  FaShieldAlt,
  FaChartLine,
  FaUsers,
  FaCheckCircle,
  FaArrowLeft,
  FaHome
} from 'react-icons/fa';

const Donate = () => {
  const [donationType, setDonationType] = useState('one-time');
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  
  const predefinedAmounts = ['100', '200', '500', '1000'];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle donation submission
    console.log({ donationType, amount, paymentMethod });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const impactMetrics = [
    { icon: <FaUsers />, number: '+500', label: 'عائلة تم دعمها' },
    { icon: <FaHandHoldingHeart />, number: '+10', label: 'مشروع نشط' },
    { icon: <FaHome />, number: '+20', label: 'قرية مستفيدة من تبرعك' }
  ];

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
            كن ذا أثر
          </motion.span>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 text-shadow"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            أحدث فرقًا اليوم
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            كرمك يساعدنا على مواصلة مهمتنا في خدمة المحتاجين في مجتمعنا
          </motion.p>
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="container mx-auto px-4 -mt-8 md:-mt-16 relative z-10">
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.2 }}
              >
                <div className="text-3xl md:text-4xl text-[var(--gradient-start)] mb-3 md:mb-4">{metric.icon}</div>
                <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
                  {metric.number}
                </div>
                <div className="text-gray-600 text-sm md:text-base">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Donation Type Selection */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-6 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
              <motion.button
                className={`p-6 md:p-8 rounded-xl border-2 flex flex-col items-center group ${
                  donationType === 'one-time'
                    ? 'border-[var(--gradient-start)] bg-gradient-to-br from-[var(--gradient-start)]/5 to-[var(--gradient-end)]/5'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setDonationType('one-time')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaHandHoldingHeart className={`text-4xl md:text-5xl mb-3 md:mb-4 ${
                  donationType === 'one-time' ? 'text-[var(--gradient-start)]' : 'text-gray-400'
                } group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">تبرع لمرة واحدة</h3>
                <p className="text-gray-600 text-center text-sm md:text-base">
                  قم بتبرع واحد لدعم قضيتنا
                </p>
              </motion.button>

              <motion.button
                className={`p-6 md:p-8 rounded-xl border-2 flex flex-col items-center group ${
                  donationType === 'recurring'
                    ? 'border-[var(--gradient-start)] bg-gradient-to-br from-[var(--gradient-start)]/5 to-[var(--gradient-end)]/5'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setDonationType('recurring')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaRegClock className={`text-4xl md:text-5xl mb-3 md:mb-4 ${
                  donationType === 'recurring' ? 'text-[var(--gradient-start)]' : 'text-gray-400'
                } group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">تبرع شهري</h3>
                <p className="text-gray-600 text-center text-sm md:text-base">
                  ادعمنا بتبرع شهري متكرر
                </p>
              </motion.button>
            </div>

            {/* Donation Form */}
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              {/* Amount Selection */}
              <div>
                <label className="block text-lg md:text-xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
                  اختر المبلغ (جنيه مصري)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-3 md:mb-4">
                  {predefinedAmounts.map((preset) => (
                    <motion.button
                      key={preset}
                      type="button"
                      className={`py-3 md:py-4 rounded-xl border-2 group ${
                        amount === preset
                          ? 'border-[var(--gradient-start)] bg-gradient-to-br from-[var(--gradient-start)]/5 to-[var(--gradient-end)]/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setAmount(preset)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className={`text-base md:text-lg font-bold ${
                        amount === preset ? 'bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent' : 'text-gray-700'
                      }`}>
                        {preset} جنيه
                      </span>
                    </motion.button>
                  ))}
                </div>
                <input
                  type="number"
                  placeholder="أدخل مبلغ مخصص"
                  className="w-full p-3 md:p-4 rounded-xl border-2 border-gray-200 focus:border-[var(--gradient-start)] focus:ring-2 focus:ring-[var(--gradient-start)]/20 transition-all duration-300"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-lg md:text-xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
                  طريقة الدفع
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                  {[
                    { id: 'orange-cash', icon: <FaMobileAlt />, label: 'أورانج كاش' },
                    { id: 'card', icon: <FaCreditCard />, label: 'بطاقة ائتمان' },
                    { id: 'location', icon: <FaHandHoldingHeart />, label: 'في الموقع' }
                  ].map((method) => (
                    <motion.button
                      key={method.id}
                      type="button"
                      className={`p-4 md:p-6 rounded-xl border-2 flex items-center justify-center group ${
                        paymentMethod === method.id
                          ? 'border-[var(--gradient-start)] bg-gradient-to-br from-[var(--gradient-start)]/5 to-[var(--gradient-end)]/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setPaymentMethod(method.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className={`text-xl md:text-2xl ml-2 md:ml-3 ${
                        paymentMethod === method.id ? 'text-[var(--gradient-start)]' : 'text-gray-400'
                      } group-hover:scale-110 transition-transform duration-300`}>
                        {method.icon}
                      </span>
                      <span className={`text-base md:text-lg font-semibold ${
                        paymentMethod === method.id ? 'text-gray-900' : 'text-gray-600'
                      }`}>
                        {method.label}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className={`w-full py-3 md:py-4 px-6 md:px-8 rounded-xl text-base md:text-lg font-semibold flex items-center justify-center group ${
                  (!amount || !paymentMethod)
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'btn-primary'
                }`}
                whileHover={amount && paymentMethod ? { scale: 1.02 } : {}}
                whileTap={amount && paymentMethod ? { scale: 0.98 } : {}}
                disabled={!amount || !paymentMethod}
              >
                المتابعة للتبرع
                <FaArrowLeft className="mr-2 transform group-hover:-translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center mb-4 md:mb-6 justify-end">
              <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
                لماذا تتبرع لرسالة أبو حماد؟
              </h3>
              <FaShieldAlt className="text-2xl md:text-3xl text-[var(--gradient-start)] mr-4 ml-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {[
                'تبرعك آمن ومشفر',
                '100% من الأموال تذهب إلى برامج المجتمع',
                'تقارير وتحديثات منتظمة عن التأثير',
                'تبرعات معفاة من الضرائب'
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-end">
                  <span className="text-gray-600 text-sm md:text-base">{item}</span>
                  <FaCheckCircle className="text-[var(--gradient-start)] ml-3" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
