import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import logo from "../assets/WhatsApp_Image_2026-01-14_at_5.01.35_PM-removebg-preview.png"
// import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'الرئيسية', path: '/' },
    { label: 'الاستشارات القانونية', path: '/consultation' },
    { label: 'الخدمات القانونية', path: '/services' },
    { label: 'الفرنشايز', path: '/franchise' },
    { label: 'من نحن', path: '/about' },
    { label: 'تواصل معنا', path: '/contact' },
  ];

  return (
    <header
      className={`w-full fixed top-0 z-50 bg-[var(--navy-blue)] shadow-lg transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      dir="rtl"
    >
      <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-0 sm:px-6 lg:px-8">
        <div className="flex items-center justify-around h-20 2xl:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1">
            <img alt="AMR SAIED KOTB Logo" className="w-20 h-20 object-contain" src={logo} />
            <span className=" hidden sm:flex text-xl xl:text-2xl font-bold text-white">عمرو قطب للمحاماة</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 2xl:gap-12 ">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-white hover:text-[var(--gold)] transition-colors duration-300 2xl:text-lg font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/consultation"
              className="bg-[var(--gold)] text-[var(--navy-blue)] px-6 py-2.5 rounded-lg hover:bg-[var(--gold-light)] transition-all duration-300 hover:shadow-lg 2xl:px-8 2xl:py-3 2xl:text-lg font-bold"
            >
              احجز استشارة
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[100] lg:hidden">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Sidebar */}
            <div className="absolute top-0 right-0 w-72 h-full bg-[var(--navy-blue)] shadow-2xl p-6 flex flex-col gap-6 overflow-y-auto transform transition-transform duration-300">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-bold text-white">القائمة</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white hover:text-[var(--gold)] transition-colors p-2"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-lg text-white hover:text-[var(--gold)] transition-colors border-b border-white/10 pb-3"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/consultation"
                  className="mt-4 bg-[var(--gold)] text-[var(--navy-blue)] px-6 py-3 rounded-xl text-center font-bold hover:bg-[var(--gold-light)] transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  احجز استشارة
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
