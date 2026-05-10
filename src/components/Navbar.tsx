import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useLanguage } from '../lib/LanguageContext';
import { cn } from '../lib/utils';
import { Menu, X, Globe, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const { t, locale, dir } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { lang } = useParams();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, path: `/${locale}` },
    { name: t.nav.services, path: `/${locale}/services` },
    { name: t.nav.products, path: `/${locale}/products` },
    { name: t.nav.packages, path: `/${locale}/packages` },
    { name: t.nav.gallery, path: `/${locale}/gallery` },
    { name: t.nav.blog, path: `/${locale}/blog` },
    { name: t.nav.about, path: `/${locale}/about` },
    { name: t.nav.contact, path: `/${locale}/contact` },
  ];

  const switchLanguage = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    const currentPath = location.pathname.split('/').slice(2).join('/');
    navigate(`/${newLocale}/${currentPath}`);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-5',
        isScrolled ? 'bg-white/90 backdrop-blur-xl border-b border-gray-100 py-4 shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to={`/${locale}`} className="flex items-center gap-2 group">
          <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
             <img 
              src="https://i.postimg.cc/FsFpTytt/55bacbb3-1554-4123-b429-d53ae9d83c1f-removalai-preview-(1).png" 
              alt="Alwaad Logo" 
              className="w-12 h-12 object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-2xl font-black font-display tracking-tighter text-brand-blue-deep hidden sm:block">
            AL<span className="text-brand-cyan">WAAD</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'px-4 py-2 text-sm font-black transition-all rounded-xl relative',
                location.pathname === link.path ? 'text-brand-blue-deep bg-brand-cyan/10' : 'text-gray-500 hover:text-brand-blue-deep hover:bg-gray-50'
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-1 left-4 right-4 h-0.5 bg-brand-cyan rounded-full"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={switchLanguage}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 hover:border-brand-blue-deep transition-all text-xs font-black uppercase tracking-wider text-brand-blue-deep"
          >
            <Globe className="w-4 h-4" />
            {locale === 'en' ? 'بالعربية' : 'English'}
          </button>
          
          <a
            href="tel:+97450042274"
            className="hidden sm:flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-blue-deep text-white font-black text-sm hover:bg-brand-cyan hover:text-brand-blue-deep transition-all shadow-xl shadow-brand-blue-deep/10"
          >
            <Phone className="w-4 h-4" />
            <span dir="ltr">+974 50042274</span>
          </a>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-brand-blue-deep"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="lg:hidden absolute top-24 left-6 right-6 bg-white rounded-[40px] shadow-2xl p-8 space-y-4 border border-gray-100 z-50"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "p-4 rounded-2xl font-black text-xl transition-all",
                    location.pathname === link.path ? "bg-brand-cyan/10 text-brand-blue-deep" : "text-gray-500 hover:bg-gray-50"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="pt-4 border-t border-gray-100">
               <a
                href="tel:+97450042274"
                className="flex items-center justify-center gap-3 p-6 rounded-3xl bg-brand-blue-deep text-white font-black text-xl"
              >
                <Phone className="w-6 h-6" />
                <span>+974 50042274</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
