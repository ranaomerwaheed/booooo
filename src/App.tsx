import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Snowflake, 
  Wrench, 
  Settings, 
  ShieldCheck,
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  Check, 
  Globe, 
  ArrowRight,
  Shield,
  Clock,
  ThumbsUp,
  Facebook,
  Instagram,
  Star,
  ChevronDown,
  ChevronUp,
  Waves,
  Flame,
  ThermometerSnowflake,
  HandPlatter,
  BadgeCheck,
  Gem
} from 'lucide-react';
import { 
  PRODUCTS, 
  SERVICES, 
  MAINTENANCE_PLANS, 
  SOCIAL_LINKS,
  TESTIMONIALS,
  FAQS,
  WORK_PROCESS,
  type Language,
} from './types';

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = (text: { ar: string; en: string }) => text[lang];
  const ta = (text: { ar: string[]; en: string[] }) => text[lang];

  const toggleLang = () => setLang(prev => prev === 'ar' ? 'en' : 'ar');

  const contactOnWhatsApp = (message: string) => {
    const url = `https://wa.me/${SOCIAL_LINKS.whatsapp.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Snowflake': return <Snowflake className="w-8 h-8" />;
      case 'Wrench': return <Wrench className="w-8 h-8" />;
      case 'ThermometerSnowflake': return <ThermometerSnowflake className="w-8 h-8" />;
      case 'Waves': return <Waves className="w-8 h-8" />;
      case 'Flame': return <Flame className="w-8 h-8" />;
      default: return <Settings className="w-8 h-8" />;
    }
  };

  return (
    <div className={`min-h-screen text-slate-800 bg-white selection:bg-blue-100`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-xl py-2 md:py-3' : 'bg-transparent py-4 md:py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
              <Snowflake className="text-white w-8 h-8" />
            </div>
            <div>
              <span className="text-2xl font-display font-black tracking-tight block leading-none text-blue-600">ALWAAD</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-black">{lang === 'ar' ? 'للمقاولات' : 'CONTRACTING'}</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-10 text-xs font-black uppercase tracking-widest text-slate-600">
            {['Services', 'Products', 'Plans', 'Excellence', 'About'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-600 transition-colors border-b-2 border-transparent hover:border-blue-600 pb-1">
                {lang === 'ar' ? 
                  (item === 'Services' ? 'الخدمات' : item === 'Products' ? 'المنتجات' : item === 'Plans' ? 'العقود' : item === 'Excellence' ? 'التميز' : 'عن الشركة') : 
                  item}
              </a>
            ))}
            <div className="h-4 w-px bg-slate-200 mx-2" />
            <button onClick={toggleLang} className="hover:text-blue-600 flex items-center gap-2">
              <Globe className="w-4 h-4" />
              {lang === 'ar' ? 'ENGLISH' : 'عربي'}
            </button>
            <button 
              onClick={() => contactOnWhatsApp("General Inquiry")}
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 active:scale-95"
            >
              {lang === 'ar' ? 'احجز موعداً' : 'BOOK NOW'}
            </button>
          </div>

          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(true)}>
            <Menu className="w-7 h-7 text-slate-900" />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: lang === 'ar' ? '100%' : '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: lang === 'ar' ? '100%' : '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white p-8 flex flex-col shadow-2xl"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="text-2xl font-display font-black text-blue-600 tracking-tighter">ALWAAD</span>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col gap-8 text-2xl font-display font-bold">
              {['Services', 'Products', 'Plans', 'Excellence'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600 transition-colors">
                  {lang === 'ar' ? (item === 'Services' ? 'خدماتنا المميزة' : item === 'Products' ? 'كتالوج المنتجات' : item === 'Plans' ? 'عقود الصيانة' : 'معايير التميز') : item}
                </a>
              ))}
            </div>
            <div className="mt-auto pt-8 border-t border-slate-100 flex flex-col gap-4">
              <button onClick={() => { toggleLang(); setIsMenuOpen(false); }} className="flex items-center justify-center gap-2 p-5 bg-slate-50 rounded-2xl font-bold">
                <Globe className="w-5 h-5 text-blue-600" />
                {lang === 'ar' ? 'Switch to English' : 'التحويل للعربية'}
              </button>
              <button 
                onClick={() => contactOnWhatsApp("Mobile Inquiry")}
                className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold text-xl shadow-xl shadow-blue-500/20"
              >
                {lang === 'ar' ? 'تواصل واتساب' : 'WhatsApp Us'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden">
        {/* Background Decorative Circles */}
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-50 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[100px] -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: lang === 'ar' ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-black uppercase tracking-[0.2em] mb-10">
              <BadgeCheck className="w-4 h-4" />
              {lang === 'ar' ? 'المركز الأول في خدمات التكييف بقطر' : 'No. 1 AC Service in Qatar'}
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-black leading-[1] mb-10 text-slate-900 tracking-tight">
              {lang === 'ar' ? (
                <>تبريد مثالي <br /><span className="text-blue-600">صيانة احترافية</span></>
              ) : (
                <>Ultimate Cooling <br /><span className="text-blue-600">Expert Care</span></>
              )}
            </h1>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed max-w-xl">
              {lang === 'ar' ? 
                'الواد للمقاولات - نقدم حلول تكييف وصيانة متكاملة للمنازل والفلل والمشاريع التجارية في قطر. جودة نعتز بها وضمان حقيقي.' : 
                'Alwaad Contracting - Providing integrated cooling and maintenance solutions for homes, villas, and commercial projects in Qatar. Quality we take pride in and guaranteed satisfaction.'}
            </p>
            <div className="flex flex-wrap gap-5">
              <button 
                onClick={() => contactOnWhatsApp("Service Book")}
                className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-500/40 transition-all flex items-center gap-3"
              >
                {lang === 'ar' ? 'احجز فني الآن' : 'Book a Technician'}
                <Phone className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-4 px-8 py-5 bg-white shadow-xl shadow-slate-200/50 rounded-2xl border border-slate-100">
                <ShieldCheck className="w-8 h-8 text-green-500" />
                <div className="text-left rtl:text-right">
                  <p className="text-[10px] font-black uppercase text-slate-400 leading-none mb-1">{lang === 'ar' ? 'مرخص معتمد' : 'LICENSED & CERTIFIED'}</p>
                  <p className="font-bold text-slate-800">{lang === 'ar' ? 'دولة قطر' : 'State of Qatar'}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square relative rounded-[4rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1541888941293-1e8fbfefe3a4?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover" 
                alt="AC Professional Work"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
            </div>
            
            {/* Overlay Info Card */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-8 -left-8 md:-left-12 bg-white p-8 rounded-3xl shadow-2xl border border-slate-50 max-w-[280px]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                  <ThumbsUp className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-black text-slate-900">10k+</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{lang === 'ar' ? 'عميل راضٍ' : 'HAPPY CUSTOMERS'}</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 font-medium leading-relaxed">
                {lang === 'ar' ? 'نحن نخدم المجتمع القطري منذ أكثر من ١٥ عاماً بصدق وأمانة.' : 'Serving the Qatari community for over 15 years with honesty and integrity.'}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section - The Excellence */}
      <section id="excellence" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Clock, title: { ar: 'استجابة سريعة', en: 'Quick Response' }, desc: { ar: 'نصلك خلال ٦٠ دقيقة في حالات الطوارئ.', en: 'We reach you within 60 mins in emergencies.' } },
                  { icon: Shield, title: { ar: 'ضمان حقيقي', en: 'Real Warranty' }, desc: { ar: 'ضمان يصل إلى سنة على قطع الغيار.', en: 'Up to 1 year warranty on spare parts.' } },
                  { icon: Settings, title: { ar: 'فريق مختار', en: 'Expert Team' }, desc: { ar: 'فنيون مدربون على أحدث الأنواع.', en: 'Technicians trained on latest brands.' } },
                  { icon: HandPlatter, title: { ar: 'ثقة وأمانة', en: 'Trust & Honesty' }, desc: { ar: 'أسعار واضحة وبدون رسوم مخفية.', en: 'Clear pricing with no hidden fees.' } },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-lg mb-3">{t(item.title)}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">{t(item.desc)}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-blue-600 mb-6 block">{lang === 'ar' ? 'لماذا الواد؟' : 'WHY ALWAAD?'}</span>
              <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 mb-10 leading-tight">
                {lang === 'ar' ? 'نحن لا نصلح فقط، نحن نضمن راحتكم' : "We Don't Just Repair, We Ensure Your Comfort"}
              </h2>
              <p className="text-lg text-slate-500 mb-12 leading-relaxed">
                {lang === 'ar' ? 
                  'منذ تأسيسنا في قطر، وضعنا معايير عالية لخدمات التكييف. نحن ندرك أهمية الهواء النقي والبارد في مناخنا، لذا نكرس خبراتنا لنكون الأفضل دائماً.' : 
                  "Since our founding in Qatar, we have set high standards for AC services. We understand the importance of fresh, cool air in our climate, so we dedicate our expertise to always being the best."}
              </p>
              <button 
                onClick={() => contactOnWhatsApp("About Us Inquiry")}
                className="group flex items-center gap-4 text-blue-600 font-black uppercase tracking-widest text-sm"
              >
                {lang === 'ar' ? 'شاهد معرض أعمالنا' : 'View Our Portfolio'}
                <div className="w-12 h-12 rounded-full border border-blue-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <ArrowRight className={`w-5 h-5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-sm font-black uppercase tracking-[0.5em] text-blue-600 mb-6">{lang === 'ar' ? 'كيف نعمل؟' : 'HOW WE WORK'}</h2>
            <h3 className="text-4xl md:text-6xl font-display font-black text-slate-900">{lang === 'ar' ? 'خطوات عملنا الاحترافية' : 'Our Professional Workflow'}</h3>
          </div>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-slate-100 -z-10" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {WORK_PROCESS.map((p, i) => (
                <div key={i} className="relative bg-white p-10 rounded-[3rem] border border-slate-100 hover:shadow-2xl transition-all group">
                  <div className="text-6xl font-display font-black text-blue-50/50 absolute top-6 right-8 group-hover:text-blue-100 transition-colors">{p.step}</div>
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl shadow-blue-500/20">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-black text-slate-900 mb-4">{t(p.title)}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">{t(p.desc)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail - Full Section */}
      <section id="services" className="py-32 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-24">
            <h2 className="text-sm font-black uppercase tracking-[0.5em] text-blue-600 mb-6">{lang === 'ar' ? 'حلولنا المتكاملة' : 'OUR SOLUTIONS'}</h2>
            <h3 className="text-4xl md:text-7xl font-display font-black text-slate-900 mb-10 leading-none">{lang === 'ar' ? 'خدمات احترافية لراحة منزلك' : 'Professional Services for Your Home'}</h3>
            <div className="w-24 h-2 bg-blue-600 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((s) => (
              <div key={s.id} className="p-10 md:p-14 bg-slate-50 rounded-[3rem] border border-slate-100 flex flex-col hover:bg-white hover:shadow-2xl transition-all group overflow-hidden relative">
                <div className="absolute top-[-2rem] right-[-2rem] w-32 h-32 bg-blue-100/30 rounded-full blur-3xl -z-10" />
                <div className="flex justify-between items-start mb-10">
                  <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center text-blue-600 shadow-xl shadow-slate-200/50 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {getServiceIcon(s.icon)}
                  </div>
                  <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase bg-white px-3 py-1 rounded-full shadow-sm">SERVICE ID: {s.id.toUpperCase()}</span>
                </div>
                <h4 className="text-3xl font-display font-black text-slate-900 mb-6">{t(s.title)}</h4>
                <p className="text-slate-500 mb-10 leading-relaxed text-lg">{t(s.description)}</p>
                <div className="space-y-4 mb-12">
                  {ta(s.details).map((detail, i) => (
                    <div key={i} className="flex items-center gap-4 text-slate-700 font-bold">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      {detail}
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => contactOnWhatsApp(`Inquiry: ${s.title.en}`)}
                  className="mt-auto w-fit px-10 py-4 bg-white border border-slate-200 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all active:scale-95 flex items-center gap-3"
                >
                  {lang === 'ar' ? 'اطلب الفني الآن' : 'REQUEST SERVICE'}
                  <Phone className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Catalog - Detailed Section */}
      <section id="products" className="py-32 bg-slate-900 text-white scroll-mt-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-600/10 blur-[150px] -z-0" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24">
            <div className="max-w-2xl">
              <h2 className="text-sm font-black uppercase tracking-[0.4em] text-blue-500 mb-6">{lang === 'ar' ? 'كتالوج البيع' : 'SALES CATALOG'}</h2>
              <h3 className="text-4xl md:text-7xl font-display font-black leading-none">{lang === 'ar' ? 'أفضل أجهزة التكييف في قطر' : 'Top AC Brands in Qatar'}</h3>
            </div>
            <div className="px-10 py-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] text-center md:text-left rtl:md:text-right">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-500 mb-2">{lang === 'ar' ? 'ميزة حصرية' : 'EXCLUSIVE BENEFIT'}</p>
              <p className="text-xl font-bold">{lang === 'ar' ? 'توصيل وتركيب مجاني في الدوحة' : 'FREE DELIVERY & INSTALL IN DOHA'}</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {PRODUCTS.map((p) => (
              <div key={p.id} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[3rem] p-10 flex flex-col md:flex-row gap-10 hover:bg-white/10 transition-all group">
                <div className="w-full md:w-[45%] aspect-square rounded-[2rem] overflow-hidden">
                  <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={t(p.name)} referrerPolicy="no-referrer" />
                </div>
                <div className="flex-grow flex flex-col py-2">
                  <div className="inline-block px-3 py-1 bg-blue-600 rounded-lg text-[10px] font-black uppercase tracking-widest mb-4 w-fit">{p.type}</div>
                  <h4 className="text-3xl font-display font-black mb-4">{t(p.name)}</h4>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed font-medium">{t(p.description)}</p>
                  <div className="flex items-baseline gap-2 mb-8">
                    <span className="text-4xl font-display font-black text-blue-500">{p.price}</span>
                    <span className="text-xs font-bold text-slate-500">{lang === 'ar' ? 'ر.ق' : 'QAR'}</span>
                  </div>
                  <div className="space-y-3 mb-10">
                    {ta(p.features).map((f, i) => (
                      <div key={i} className="flex items-center gap-3 text-xs font-bold text-slate-200">
                        <Check className="w-4 h-4 text-blue-500" />
                        {f}
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={() => contactOnWhatsApp(`Order: ${p.name.en}`)}
                    className="mt-auto w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/20 active:scale-95"
                  >
                    {lang === 'ar' ? 'اطلب الآن' : 'ORDER NOW VIA WHATSAPP'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Maintenance Plans - Detailed Section */}
      <section id="plans" className="py-32 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-sm font-black uppercase tracking-[0.5em] text-blue-600 mb-6">{lang === 'ar' ? 'راحة بال دائمة' : 'ALWAYS PROTECTED'}</h2>
            <h3 className="text-4xl md:text-7xl font-display font-black text-slate-900 mb-10">{lang === 'ar' ? 'عقود الصيانة السنوية' : 'Annual Maintenance Plans'}</h3>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">{lang === 'ar' ? 'وفر ما يصل إلى ٤٠٪ من تكاليف الصيانة مع باقاتنا الذكية والمصممة لراحتك.' : 'Save up to 40% on maintenance costs with our smart packages designed for your comfort.'}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {MAINTENANCE_PLANS.map((plan) => (
              <div 
                key={plan.id}
                className={`p-12 md:p-16 rounded-[4rem] flex flex-col relative overflow-hidden group ${plan.id === 'gold' ? 'bg-blue-600 text-white shadow-2xl shadow-blue-500/30' : 'bg-slate-50 border border-slate-100 hover:shadow-2xl transition-all'}`}
              >
                {plan.id === 'gold' && (
                  <div className="absolute top-10 right-[-3rem] rotate-45 bg-white text-blue-600 px-14 py-2 text-xs font-black uppercase tracking-widest shadow-xl">
                    {lang === 'ar' ? 'الأكثر طلباً' : 'RECOMMENDED'}
                  </div>
                )}
                <h4 className={`text-2xl font-black mb-4 ${plan.id === 'gold' ? 'text-blue-100' : 'text-blue-600'}`}>{t(plan.name)}</h4>
                <div className="flex items-baseline gap-2 mb-10">
                  <span className="text-5xl md:text-7xl font-display font-black leading-none">{plan.price}</span>
                  <span className={`text-xs font-black uppercase tracking-widest ${plan.id === 'gold' ? 'text-blue-200' : 'text-slate-400'}`}>{lang === 'ar' ? 'ر.ق / سنة' : 'QAR / YEAR'}</span>
                </div>
                <div className="h-px w-full bg-current opacity-10 mb-10" />
                <div className="space-y-6 mb-12 flex-grow">
                  {ta(plan.features).map((feat, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className={`mt-1.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${plan.id === 'gold' ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'}`}>
                        <Check className="w-2.5 h-2.5 font-black" />
                      </div>
                      <span className={`text-sm font-bold leading-tight ${plan.id === 'gold' ? 'text-white' : 'text-slate-600'}`}>{feat}</span>
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => contactOnWhatsApp(`Plan Subscribe: ${plan.name.en}`)}
                  className={`w-full py-6 rounded-3xl font-black text-sm uppercase tracking-[0.2em] transition-all shadow-xl active:scale-95 ${plan.id === 'gold' ? 'bg-white text-blue-600 hover:shadow-white/20' : 'bg-slate-900 text-white hover:bg-blue-600 hover:shadow-blue-500/20'}`}
                >
                  {lang === 'ar' ? 'اشترك في الباقة' : 'SELECT PACKAGE'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-sm font-black uppercase tracking-[0.5em] text-blue-600 mb-6">{lang === 'ar' ? 'قالوا عنا' : 'TESTIMONIALS'}</h2>
            <h3 className="text-4xl md:text-6xl font-display font-black text-slate-900">{lang === 'ar' ? 'ثقة عملائنا هي سر نجاحنا' : 'Customer Trust is Our Success'}</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {TESTIMONIALS.map((test, i) => (
              <div key={i} className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-slate-100 relative quote-icon">
                <div className="flex gap-1 mb-8">
                  {[...Array(test.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-xl md:text-2xl text-slate-600 mb-10 font-bold leading-relaxed italic">"{t(test.text)}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center font-black text-blue-600 text-lg uppercase">
                    {t(test.name).charAt(0)}
                  </div>
                  <div>
                    <h5 className="text-lg font-black text-slate-900 tracking-tight">{t(test.name)}</h5>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{lang === 'ar' ? 'وكيل عقارات' : 'VILLA OWNER'}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 mb-8">{lang === 'ar' ? 'الأسئلة الشائعة' : 'Common Questions'}</h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">{lang === 'ar' ? 'كل ما تود معرفته عن خدماتنا' : 'EVERYTHING YOU NEED TO KNOW ABOUT OUR SERVICES'}</p>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-slate-100 rounded-3xl overflow-hidden glass">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-8 flex justify-between items-center text-left rtl:text-right hover:bg-slate-50 transition-all group"
                >
                  <span className="text-lg font-black text-slate-800">{t(faq.q)}</span>
                  {openFaq === i ? <ChevronUp className="w-6 h-6 text-blue-600" /> : <ChevronDown className="w-6 h-6 text-slate-400 group-hover:text-blue-600 transition-colors" />}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-8 pt-0 text-slate-600 font-medium leading-relaxed">
                        {t(faq.a)}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute top-[-50%] right-[-10%] w-full h-[200%] bg-white/5 skew-y-12 -z-0" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-8xl font-display font-black text-white mb-12 tracking-tight">
            {lang === 'ar' ? 'لا تدع الحر يحرمك الراحة' : "Don't Let the Heat Break Your Comfort"}
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button 
              onClick={() => contactOnWhatsApp("Emergency Call")}
              className="px-12 py-6 bg-white text-blue-600 rounded-3xl font-black text-xl hover:shadow-2xl hover:shadow-black/20 transition-all flex items-center justify-center gap-4 active:scale-95"
            >
              <MessageCircle className="w-7 h-7" />
              {lang === 'ar' ? 'تحدث معنا الآن' : 'CHAT WITH US NOW'}
            </button>
            <button 
              onClick={() => contactOnWhatsApp("Quote Request")}
              className="px-12 py-6 bg-slate-900 text-white rounded-3xl font-black text-xl hover:bg-slate-800 hover:shadow-2xl transition-all shadow-xl active:scale-95"
            >
              {lang === 'ar' ? 'اطلب تسعيرة مجانية' : 'GET FREE QUOTE'}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white pt-32 pb-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-20 mb-24">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <Snowflake className="text-white w-8 h-8" />
                </div>
                <span className="text-3xl font-display font-black text-slate-900 tracking-tighter">ALWAAD</span>
              </div>
              <p className="text-xl text-slate-500 mb-12 leading-relaxed max-w-lg">
                {lang === 'ar' ? 
                  'الواد للمقاولات - التميز في خدمات التكييف وتصليح الأجهزة المنزلية. نحن نخدم جميع مناطق دولة قطر بأمانة وإخلاص.' : 
                  'Alwaad Contracting - Excellence in AC services and home appliance repair. We serve all regions of Qatar with honesty and dedication.'}
              </p>
              <div className="flex gap-6">
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h5 className="font-black text-xs uppercase tracking-[0.4em] text-blue-600 mb-10">{lang === 'ar' ? 'روابط سريعة' : 'QUICK LINKS'}</h5>
              <ul className="space-y-6 text-sm font-black uppercase tracking-widest text-slate-600">
                <li><a href="#services" className="hover:text-blue-600 transition-colors">{lang === 'ar' ? 'خدماتنا' : 'OUR SERVICES'}</a></li>
                <li><a href="#products" className="hover:text-blue-600 transition-colors">{lang === 'ar' ? 'المتجر' : 'OUR STORE'}</a></li>
                <li><a href="#plans" className="hover:text-blue-600 transition-colors">{lang === 'ar' ? 'عقود الصيانة' : 'MAINTENANCE'}</a></li>
                <li><a href="#excellence" className="hover:text-blue-600 transition-colors">{lang === 'ar' ? 'لماذا نحن؟' : 'WHY US?'}</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-black text-xs uppercase tracking-[0.4em] text-blue-600 mb-10">{lang === 'ar' ? 'اتصل بنا' : 'CONTACT INFO'}</h5>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{lang === 'ar' ? 'الهاتف والواتساب' : 'PHONE & WHATSAPP'}</p>
                    <p className="font-bold text-slate-900">{SOCIAL_LINKS.whatsapp}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{lang === 'ar' ? 'الموقع' : 'LOCATION'}</p>
                    <p className="font-bold text-slate-900">DOHA, STATE OF QATAR</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-16 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
            <p>© {new Date().getFullYear()} ALWAAD CONTRACTING SERVICE QATAR. PROTECTED PROPERTY.</p>
            <div className="flex gap-12">
              <span className="hover:text-blue-600 cursor-pointer transition-colors">PRIVACY TERMS</span>
              <span className="hover:text-blue-600 cursor-pointer transition-colors">QUALITY GUARANTEE</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => contactOnWhatsApp("Fast Inquiry")}
        className="fixed bottom-10 right-10 z-[100] px-8 h-20 bg-[#25D366] text-white rounded-[2.5rem] flex items-center gap-4 shadow-2xl shadow-green-500/40 hover:shadow-green-500/60 transition-all group"
      >
        <MessageCircle className="w-10 h-10 group-hover:scale-110 transition-transform" />
        <div className="hidden sm:block text-left rtl:text-right">
          <p className="text-[10px] font-black uppercase tracking-widest opacity-80 leading-none mb-1">{lang === 'ar' ? 'تحدث معنا' : 'CHAT WITH US'}</p>
          <p className="text-lg font-black leading-none">{lang === 'ar' ? 'واتسـاب' : 'WHATSAPP'}</p>
        </div>
      </motion.button>
    </div>
  );
}
