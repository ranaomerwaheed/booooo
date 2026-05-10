import { ReactNode, useEffect } from 'react';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../lib/LanguageContext';
import { Locale } from '../lib/i18n';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';
import { motion, AnimatePresence } from 'motion/react';

interface LayoutProps {
  locale: Locale;
}

export default function Layout({ locale }: LayoutProps) {
  const { setLocale } = useLanguage();
  const { lang } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (lang && (lang === 'en' || lang === 'ar')) {
      setLocale(lang as Locale);
    } else {
      // Handle invalid lang param if needed
    }
  }, [lang, setLocale]);

  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,229,255,0.05)_0%,transparent_50%)] pointer-events-none" />
      <Navbar />
      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={lang}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
