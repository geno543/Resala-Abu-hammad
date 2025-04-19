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
  FaArrowRight
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
    { icon: <FaUsers />, number: '1000+', label: 'Families Supported' },
    { icon: <FaChartLine />, number: '95%', label: 'Funds to Programs' },
    { icon: <FaHandHoldingHeart />, number: '50+', label: 'Active Projects' }
  ];

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
            Support Our Cause
          </motion.span>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6 text-shadow"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Make a Difference Today
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90 max-w-3xl mx-auto"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            Your generosity helps us continue our mission of serving those in need in our community
          </motion.p>
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <motion.div 
          className="bg-white rounded-2xl shadow-xl p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.2 }}
              >
                <div className="text-4xl text-[var(--gradient-start)] mb-4">{metric.icon}</div>
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
                  {metric.number}
                </div>
                <div className="text-gray-600">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Donation Type Selection */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <motion.button
                className={`p-8 rounded-xl border-2 flex flex-col items-center group ${
                  donationType === 'one-time' 
                    ? 'border-[var(--gradient-start)] bg-gradient-to-br from-[var(--gradient-start)]/5 to-[var(--gradient-end)]/5' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setDonationType('one-time')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaHandHoldingHeart className={`text-5xl mb-4 ${
                  donationType === 'one-time' ? 'text-[var(--gradient-start)]' : 'text-gray-400'
                } group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="text-xl font-bold mb-2">One-Time Donation</h3>
                <p className="text-gray-600 text-center">
                  Make a single donation to support our cause
                </p>
              </motion.button>

              <motion.button
                className={`p-8 rounded-xl border-2 flex flex-col items-center group ${
                  donationType === 'recurring' 
                    ? 'border-[var(--gradient-start)] bg-gradient-to-br from-[var(--gradient-start)]/5 to-[var(--gradient-end)]/5' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setDonationType('recurring')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaRegClock className={`text-5xl mb-4 ${
                  donationType === 'recurring' ? 'text-[var(--gradient-start)]' : 'text-gray-400'
                } group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="text-xl font-bold mb-2">Monthly Donation</h3>
                <p className="text-gray-600 text-center">
                  Support us with a monthly recurring donation
                </p>
              </motion.button>
            </div>

            {/* Donation Form */}
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Amount Selection */}
              <div>
                <label className="block text-xl font-bold mb-4 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
                  Select Amount (EGP)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {predefinedAmounts.map((preset) => (
                    <motion.button
                      key={preset}
                      type="button"
                      className={`py-4 rounded-xl border-2 group ${
                        amount === preset 
                          ? 'border-[var(--gradient-start)] bg-gradient-to-br from-[var(--gradient-start)]/5 to-[var(--gradient-end)]/5' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setAmount(preset)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className={`text-lg font-bold ${
                        amount === preset ? 'bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent' : 'text-gray-700'
                      }`}>
                        {preset} EGP
                      </span>
                    </motion.button>
                  ))}
                </div>
                <input
                  type="number"
                  placeholder="Enter custom amount"
                  className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-[var(--gradient-start)] focus:ring-2 focus:ring-[var(--gradient-start)]/20 transition-all duration-300"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-xl font-bold mb-4 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
                  Payment Method
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { id: 'orange-cash', icon: <FaMobileAlt />, label: 'Orange Cash' },
                    { id: 'card', icon: <FaCreditCard />, label: 'Credit Card' },
                    { id: 'location', icon: <FaHandHoldingHeart />, label: 'At Location' }
                  ].map((method) => (
                    <motion.button
                      key={method.id}
                      type="button"
                      className={`p-6 rounded-xl border-2 flex items-center justify-center group ${
                        paymentMethod === method.id 
                          ? 'border-[var(--gradient-start)] bg-gradient-to-br from-[var(--gradient-start)]/5 to-[var(--gradient-end)]/5' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setPaymentMethod(method.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className={`text-2xl mr-3 ${
                        paymentMethod === method.id ? 'text-[var(--gradient-start)]' : 'text-gray-400'
                      } group-hover:scale-110 transition-transform duration-300`}>
                        {method.icon}
                      </span>
                      <span className={`text-lg font-semibold ${
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
                className={`w-full py-4 px-8 rounded-xl text-lg font-semibold flex items-center justify-center group ${
                  (!amount || !paymentMethod)
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'btn-primary'
                }`}
                whileHover={amount && paymentMethod ? { scale: 1.02 } : {}}
                whileTap={amount && paymentMethod ? { scale: 0.98 } : {}}
                disabled={!amount || !paymentMethod}
              >
                Proceed to Donate
                <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center mb-6">
              <FaShieldAlt className="text-3xl text-[var(--gradient-start)] mr-4" />
              <h3 className="text-xl font-bold bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
                Why Donate to Resala Abu-Hammad?
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Your donation is secure and encrypted',
                '100% of funds go to community programs',
                'Regular impact reports and updates',
                'Tax-deductible donations'
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <FaCheckCircle className="text-[var(--gradient-start)] mr-3" />
                  <span className="text-gray-600">{item}</span>
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