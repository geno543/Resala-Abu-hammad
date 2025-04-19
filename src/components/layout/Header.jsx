import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact Us' },
    { path: '/services', label: 'خدماتنا' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg' 
          : 'bg-black/20 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="relative z-50">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-3xl font-bold"
            >
              <span className={`bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent ${
                isScrolled ? '' : 'drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]'
              }`}>
                RESALA
              </span>
            </motion.div>
          </Link>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden relative z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <span className={`text-2xl ${isMenuOpen ? 'text-black' : (isScrolled ? 'text-gray-800' : 'text-black')}`}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </span>
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.li
                  key={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Link
                    to={item.path}
                    className={`relative py-2 px-1 text-lg font-medium transition-colors duration-300 ${
                      isScrolled ? 'text-gray-800' : 'text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]'
                    } hover:text-[var(--gradient-start)]`}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] transform scale-x-0 transition-transform duration-300 origin-left hover:scale-x-100" />
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Link to="/volunteer" className="btn-primary px-8">
                  Volunteer
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Link to="/donate" className="btn-secondary px-8">
                  Donate
                </Link>
              </motion.li>
            </ul>
          </nav>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] md:hidden"
              >
                <motion.nav
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'tween', duration: 0.3 }}
                  className="h-full flex flex-col justify-center"
                >
                  <ul className="flex flex-col items-center space-y-8 p-4">
                    {navItems.map((item) => (
                      <motion.li
                        key={item.path}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Link
                          to={item.path}
                          className="text-white text-2xl font-medium hover:text-white/80 transition-colors"
                        >
                          {item.label}
                        </Link>
                      </motion.li>
                    ))}
                    <motion.li
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="w-full"
                    >
                      <Link to="/volunteer" className="btn-primary bg-white text-gray-800 hover:bg-gray-100 w-full text-center text-xl">
                        Volunteer
                      </Link>
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="w-full"
                    >
                      <Link to="/donate" className="btn-secondary border-2 border-black text-black hover:bg-black/10 w-full text-center text-xl">
                        Donate
                      </Link>
                    </motion.li>
                  </ul>
                </motion.nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Header;