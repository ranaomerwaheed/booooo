import { useLanguage } from '../lib/LanguageContext';
import { Facebook, Instagram, Phone, Mail, MapPin, Clock, Zap, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t, locale } = useLanguage();

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/share/179A4gnSWJ/' },
    { icon: Linkedin, href: 'https://linkedin.com/alwaad' },
    { icon: Instagram, href: 'https://www.instagram.com/all_waad_service_qt' },
    // Snapchat & TikTok
    { icon: () => <svg className="w-5 h-5 fill-current" viewBox="0 0 512 512"><path d="M480 320c-11.23 0-20.93-9.53-22.33-20.73-1.42-11.2-12.78-19.27-23.95-19.27h-4.22c-11.17 0-22.53 8.07-23.95 19.27-1.4 11.2-11.1 20.73-22.33 20.73h-1.44c-11.23 0-20.93 9.53-22.33 20.73-1.42 11.2-12.78 19.27-23.95 19.27h-4.22c-11.17 0-22.53 8.07-23.95 19.27-1.4 11.2-11.1 20.73-22.33 20.73-12.16 0-23.47-5.07-31.42-13.91C250.36 317.06 244 300 244 280c0-66.27 53.73-120 120-120s120 53.73 120 120c0 20-6.36 37.06-17.58 49.09-7.95 8.84-19.26 13.91-31.42 13.91h-5zm-116-41.9c13.25 0 24-10.75 24-24s-10.75-24-24-24-24 10.75-24 24 10.75 24 24 24zm-14.86 166.43c-36.95 15.17-76.84 21.47-123.14 21.47-46.3 0-86.19-6.3-123.14-21.47-38.3-15.72-68.86-53.11-68.86-104.06 0-5.46.22-10.83.67-16.14.73-8.68-4.57-16.71-12.78-19.46C7.57 299.78 0 286.73 0 272.93c0-11 5.92-21.73 16.59-29.35 15.63-11.16 19.34-31.18 8.18-46.8-11.16-15.62-10.22-37.14 2.1-51.42 22.82-26.47 62.45-66.08 62.45-66.08a80.6 80.6 0 0 1 20.94-14.75C136.03 52.89 194.24 32 256 32s119.97 20.89 145.74 32.53a80.6 80.6 0 0 1 20.94 14.75s39.63 39.61 62.45 66.08c12.32 14.28 13.26 35.8 2.1 51.42-11.16 15.62-7.45 35.64 8.18 46.8 10.67 7.62 16.59 18.35 16.59 29.35 0 13.8-7.57 26.85-21.29 31.42-8.21 2.75-13.51 10.78-12.78 19.46.45 5.31.67 10.68.67 16.14 0 50.95-30.56 88.34-68.86 104.06z"/></svg>, href: 'https://snapchat.com/add/alwaad' },
    { icon: () => <svg className="w-5 h-5 fill-current" viewBox="0 0 448 512"><path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A164.94 164.94 0 1 1 160.33 184.45c4.35 0 8.61.39 12.74 1.12v84.06a80.7 80.7 0 0 0-12.74-1c-44.17 0-80 35.83-80 80s35.83 80 80 80 80-35.83 80-80V0h84.06a121.5 121.5 0 0 0 10.45 22.47 121.2 121.2 0 0 0 16.5 21.05 121.56 121.56 0 0 0 21.05 16.5A121.14 121.14 0 0 0 448 70.09v139.82z"/></svg>, href: 'https://tiktok.com/@alwaad_contracting_qatar' },
  ];

  return (
    <footer className="relative mt-20 border-t border-gray-100 bg-section-gray pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        {/* Info */}
        <div className="space-y-8">
          <Link to={`/${locale}`} className="flex items-center gap-3">
            <div className="flex items-center justify-center">
               <img 
                src="https://i.postimg.cc/FsFpTytt/55bacbb3-1554-4123-b429-d53ae9d83c1f-removalai-preview-(1).png" 
                alt="Alwaad Logo" 
                className="w-12 h-12 object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-2xl font-black font-display text-brand-blue-deep">AL<span className="text-brand-cyan">WAAD</span></span>
          </Link>
          <p className="text-gray-500 text-base leading-relaxed font-medium">
            {locale === 'ar' 
              ? 'شركة الوعد للمقاولات تقدم خدمات احترافية في مجال التكييف وصيانة الأجهزة المنزلية في قطر بأعلى جودة وأسعار منافسة.'
              : 'Alwaad Contracting Service provides professional HVAC and home appliance solutions across Qatar with trusted technicians and premium service quality.'}
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-brand-blue-deep hover:bg-brand-blue-deep hover:text-white hover:-translate-y-1 transition-all shadow-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-black mb-8 text-brand-blue-deep">{locale === 'ar' ? 'روابط سريعة' : 'Quick Links'}</h4>
          <ul className="space-y-4 text-gray-500 font-bold text-sm">
            <li><Link to={`/${locale}/services`} className="hover:text-brand-cyan transition-colors">{t.nav.services}</Link></li>
            <li><Link to={`/${locale}/products`} className="hover:text-brand-cyan transition-colors">{t.nav.products}</Link></li>
            <li><Link to={`/${locale}/packages`} className="hover:text-brand-cyan transition-colors">{t.nav.packages}</Link></li>
            <li><Link to={`/${locale}/gallery`} className="hover:text-brand-cyan transition-colors">{t.nav.gallery}</Link></li>
            <li><Link to={`/${locale}/blog`} className="hover:text-brand-cyan transition-colors">{t.nav.blog}</Link></li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-xl font-black mb-8 text-brand-blue-deep">{locale === 'ar' ? 'معلومات الاتصال' : 'Contact Info'}</h4>
          <ul className="space-y-6 text-gray-500 font-bold text-sm">
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center shadow-sm shrink-0">
                <Phone className="w-5 h-5 text-brand-cyan" />
              </div>
              <div>
                <p className="text-[10px] uppercase text-gray-400 tracking-widest mb-1">{locale === 'ar' ? 'رقم الهاتف' : 'Phone Number'}</p>
                <span dir="ltr" className="text-brand-blue-deep">+974 5004 2274</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center shadow-sm shrink-0">
                <Mail className="w-5 h-5 text-brand-cyan" />
              </div>
              <div>
                <p className="text-[10px] uppercase text-gray-400 tracking-widest mb-1">{locale === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}</p>
                <span className="text-brand-blue-deep">info@alwaadservices.com</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center shadow-sm shrink-0">
                <MapPin className="w-5 h-5 text-brand-cyan" />
              </div>
              <div>
                <p className="text-[10px] uppercase text-gray-400 tracking-widest mb-1">{locale === 'ar' ? 'الموقع' : 'Office Location'}</p>
                <span className="text-brand-blue-deep">{t.common.address}</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Areas & Call */}
        <div className="space-y-8">
          <div>
            <h4 className="text-xl font-black mb-6 text-brand-blue-deep">{locale === 'ar' ? 'مناطق الخدمة' : 'Service Areas'}</h4>
            <div className="flex flex-wrap gap-2">
              {['Doha', 'Al Wakrah', 'Lusail', 'The Pearl', 'Al Khor'].map(city => (
                <span key={city} className="px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-gray-500 text-xs font-black">
                  {city}
                </span>
              ))}
            </div>
          </div>
          <div className="p-8 rounded-3xl bg-brand-blue-deep text-white shadow-xl">
            <div className="flex items-center gap-3 mb-4">
               <Zap className="w-5 h-5 text-brand-cyan animate-pulse" />
               <span className="text-sm font-black tracking-widest uppercase">{locale === 'ar' ? 'دعم الطوارئ' : 'Emergency Support'}</span>
            </div>
            <p className="text-xs text-white/50 mb-6 leading-relaxed uppercase tracking-tighter">Professional care available 24/7 across Qatar mainland.</p>
            <a href="tel:+97450042274" className="block text-center py-3 rounded-xl bg-brand-cyan text-brand-blue-deep font-black hover:scale-105 transition-transform">
               Call +974 5004 2274
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-24 pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-black text-gray-400 tracking-widest">
        <p>© {new Date().getFullYear()} ALWAAD CONTRACTING SERVICE. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-brand-blue-deep transition-colors">PRIVACY POLICY</a>
          <a href="#" className="hover:text-brand-blue-deep transition-colors">TERMS OF SERVICE</a>
        </div>
      </div>
    </footer>
  );
}
