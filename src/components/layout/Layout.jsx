import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';
// import PreHeader from './PreHeader';

const Layout = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-cairo">
      {/* <PreHeader /> */}
      <Header />
      
      {/* Main Content */}
      <main className="flex-grow pt-4 md:pt-6 lg:pt-8">
        <Outlet />
      </main>

      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 z-30 p-4 rounded-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </div>
  );
};

export default Layout;