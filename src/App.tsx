/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation, useParams } from 'react-router-dom';
import { LanguageContext, useLanguage } from './lib/LanguageContext';
import { Locale, translations } from './lib/i18n';
import SeoManager from './lib/SeoManager';
import AIChatbot from './components/AIChatbot';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductsPage from './pages/ProductsPage';
import PackagesPage from './pages/PackagesPage';
import GalleryPage from './pages/GalleryPage';
import BlogPage from './pages/BlogPage';

function LanguageRedirect() {
  const userLang = navigator.language.split('-')[0];
  const defaultLocale: Locale = userLang === 'ar' ? 'ar' : 'en';
  return <Navigate to={`/${defaultLocale}`} replace />;
}

export default function App() {
  const [locale, setLocale] = useState<Locale>('ar');

  const value = useMemo(() => ({
    locale,
    t: translations[locale],
    dir: (locale === 'ar' ? 'rtl' : 'ltr') as 'rtl' | 'ltr',
    setLocale
  }), [locale]);

  return (
    <LanguageContext.Provider value={value}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LanguageRedirect />} />
          <Route path="/:lang/*" element={<AppRoutes />} />
        </Routes>
      </BrowserRouter>
    </LanguageContext.Provider>
  );
}

function AppRoutes() {
  const { lang } = useParams();
  const { setLocale, locale } = useLanguage();
  
  useEffect(() => {
    if (lang && (lang === 'en' || lang === 'ar')) {
      setLocale(lang as Locale);
    }
  }, [lang, setLocale]);

  useEffect(() => {
     document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
     document.documentElement.lang = locale;
  }, [locale]);
  
  return (
    <div className={locale === 'ar' ? 'font-arabic-body bg-brand-blue-deep min-h-screen' : 'font-sans bg-brand-blue-deep min-h-screen'}>
      <SeoManager />
      <AIChatbot />
      <Routes>
        <Route element={<Layout locale={locale} />}>
          <Route index element={<Home />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="packages" element={<PackagesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="contact" element={<ContactPage />} />
          {/* Fallback to home if unknown route under lang */}
          <Route path="*" element={<Navigate to={`/${locale}`} replace />} />
        </Route>
      </Routes>
    </div>
  );
}
