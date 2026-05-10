import { useLanguage } from '../lib/LanguageContext';
import { services, products, packages } from '../lib/data';
import { motion } from 'motion/react';
import { Phone, CheckCircle2, Star, Zap, Clock, ShieldCheck, ArrowRight, MessageCircle, MapPin } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const { t, locale } = useLanguage();
  const heroRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Entrance
      gsap.from('.hero-content > *', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out',
      });

      // Scroll reveals
      gsap.from('.reveal-item', {
        scrollTrigger: {
          trigger: '.reveal-item',
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, [locale]);

  return (
    <div ref={containerRef} className="flex flex-col pb-0">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden bg-brand-blue-light/30">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/3 -right-48 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-brand-cyan/5 rounded-full blur-2xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 hero-content">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white border border-gray-100 text-brand-blue-deep text-[10px] font-black uppercase tracking-[0.2em] shadow-sm"
            >
              <Zap className="w-4 h-4 text-brand-cyan animate-pulse" />
              {locale === 'ar' ? 'الخيار الأول في قطر للصيانة' : 'Qatars #1 Choice for Maintenance'}
            </motion.div>
            
            <h1 className="text-4xl sm:text-6xl md:text-[5.5rem] font-black font-display leading-[1] md:leading-[0.95] text-brand-blue-deep tracking-tight">
              {locale === 'ar' ? (
                <>إتقان <span className="text-brand-cyan drop-shadow-[0_0_15px_rgba(0,229,255,0.3)]">هندسي</span> لراحة تدوم</>
              ) : (
                <>Engineering <span className="text-brand-cyan text-outline-thin drop-shadow-[0_0_15px_rgba(0,229,255,0.3)]">Precision</span> For Your Comfort</>
              )}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed font-medium">
              {t.hero.subtitle}. {locale === 'ar' ? 'حلول صيانة شاملة تضمن كفاءة أجهزتك طوال العام تحت إشراف نخبة من المهندسين المعتمدين في الدوحة.' : 'Top-rated AC repair and home maintenance in Doha. Full-scale solutions ensuring peak appliance performance under expert engineering supervision.'}
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-5 pt-4">
              <a
                href="https://wa.me/97450042274"
                className="px-8 md:px-12 py-5 md:py-6 rounded-3xl bg-green-500 text-white font-black text-lg md:text-xl hover:bg-green-600 transition-all flex items-center justify-center sm:justify-start gap-4 shadow-2xl shadow-green-500/20 active:scale-95 group"
              >
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <MessageCircle className="w-5 h-5 fill-white" />
                </div>
                {t.hero.cta_whatsapp}
              </a>
              <a
                href="tel:+97450042274"
                className="px-8 md:px-12 py-5 md:py-6 rounded-3xl border-2 border-brand-blue-deep/10 text-brand-blue-deep font-black text-lg md:text-xl hover:bg-brand-blue-deep hover:text-white transition-all flex items-center justify-center sm:justify-start gap-4 active:scale-95 bg-white/50 backdrop-blur-sm"
              >
                <Phone className="w-6 h-6" />
                {t.hero.cta_call}
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8 pt-12 border-t border-gray-200">
               <div className="space-y-4 w-full">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] text-center sm:text-left">
                    {locale === 'ar' ? 'مركز معتمد لقطع الغيار الأصلية' : 'AUTHORIZED SPARE PARTS SERVICE FOR'}
                  </p>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
                    <img src="https://i.postimg.cc/KvRbFJ3n/lg353l2fc-lg-logo-lg-logo-free-icon-of-vector-logo.png" className="h-6 md:h-8 object-contain" alt="LG" />
                    <img src="https://i.postimg.cc/cJvJr0b2/samsung-logo-png-1285.png" className="h-6 md:h-8 object-contain" alt="Samsung" />
                    <img src="https://i.postimg.cc/Pq8nZxQr/gr1601gc05-gree-logo-gree-logo-vector-free-download.png" className="h-6 md:h-8 object-contain" alt="Gree" />
                    <img src="https://i.postimg.cc/Gpnq7m19/mi1020mac9-midea-logo-midea-logo-vector-eps-388-29-kb-download.png" className="h-6 md:h-8 object-contain" alt="Midea" />
                    <img src="https://i.postimg.cc/KjT5r6sy/ca2915c79a-carrier-logo-carrier-logo-png-transparent-amp-svg-vector-freebie-supply.png" className="h-6 md:h-8 object-contain" alt="Carrier" />
                  </div>
               </div>
            </div>
          </div>

          <div className="relative group mt-12 lg:mt-0 lg:h-[700px] flex items-center lg:justify-end">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative w-full lg:w-[90%] aspect-[4/5] rounded-[60px] md:rounded-[80px] overflow-hidden shadow-[0_80px_150px_-30px_rgba(2,62,138,0.3)] border-4 md:border-8 border-white"
              >
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1200" 
                  alt="Engineering Excellence" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-deep/80 via-transparent to-transparent" />
                
                {/* Floating Info Card */}
                <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12 right-6 md:right-12 p-6 md:p-10 rounded-[30px] md:rounded-[40px] bg-white/90 backdrop-blur-xl shadow-2xl border border-white/50">
                    <div className="flex items-center gap-5 mb-4 md:mb-5">
                       <div className="w-12 h-12 md:w-16 md:h-16 rounded-[18px] md:rounded-[24px] bg-brand-blue-deep flex items-center justify-center shadow-xl shadow-brand-blue-deep/20">
                         <ShieldCheck className="w-7 h-7 md:w-9 md:h-9 text-brand-cyan" />
                       </div>
                       <div>
                         <h3 className="text-brand-blue-deep font-black text-xl md:text-2xl tracking-tighter leading-tight">{locale === 'ar' ? 'ضمان الصيانة المعتمد' : 'Certified Engineering Care'}</h3>
                         <p className="text-brand-cyan text-[10px] font-black uppercase tracking-[0.2em]">{locale === 'ar' ? 'خدمة متميزة 24/7' : '24/7 Premium Service'}</p>
                       </div>
                    </div>
                    <p className="text-gray-500 font-bold text-xs md:text-sm leading-relaxed">
                      {locale === 'ar' ? 'نحن الشركة الوحيدة التي توفر قطع غيار أصلية بضمان استبدال مباشر لمدة 12 شهراً.' : 'We are the only firm providing authentic spares with a direct 12-month replacement guarantee.'}
                    </p>
                </div>
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-cyan/20 blur-3xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-brand-blue-deep/10 rounded-full blur-xl" />
          </div>
        </div>
      </section>

      {/* Services Section - White Background */}
      <section className="bg-section-white py-32 reveal-item">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
            <div className="space-y-4 max-w-2xl">
               <span className="text-brand-cyan font-black uppercase tracking-[0.2em] text-sm flex items-center gap-3">
                  <div className="w-10 h-0.5 bg-brand-cyan" />
                  {locale === 'ar' ? 'خدماتنا الهندسية' : 'Engineering Services'}
               </span>
               <h2 className="text-5xl md:text-7xl font-black font-display text-brand-blue-deep tracking-tight">{locale === 'ar' ? 'حلول صيانة شاملة' : 'Complete Maintenance Solutions'}</h2>
            </div>
            <Link to={`/${locale}/services`} className="group flex items-center gap-3 text-brand-blue-deep font-black hover:text-brand-cyan transition-all text-lg">
              {t.common.viewAll}
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div key={service.id} className="group p-10 rounded-[40px] bg-section-gray hover:bg-white border border-transparent hover:border-brand-blue-deep/10 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-brand-blue-light/50 flex items-center justify-center text-brand-blue-deep group-hover:bg-brand-blue-deep group-hover:text-white transition-all duration-500 mb-8">
                   <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-brand-blue-deep">{locale === 'ar' ? service.title_ar : service.title_en}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                   {locale === 'ar' ? service.description_ar : service.description_en}
                </p>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">{locale === 'ar' ? 'مميزات الخدمة' : 'KEY FEATURES'}</h4>
                  <ul className="space-y-2">
                    {(locale === 'ar' ? service.features_ar : service.features_en).slice(0, 2).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-bold text-gray-600">
                        <CheckCircle2 className="w-3 h-3 text-brand-cyan" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Section - Cyan Gradient Background */}
      <section className="bg-gradient-to-br from-brand-blue-deep to-blue-900 py-32 relative overflow-hidden reveal-item">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-6">
             {[
               { val: '24/7', label: locale === 'ar' ? 'دعم مستمر' : 'Always Ready', color: 'bg-white/10' },
               { val: '45+', label: locale === 'ar' ? 'فني خبير' : 'Expert Techs', color: 'bg-brand-cyan/20' },
               { val: '60m', label: locale === 'ar' ? 'وقت الوصول' : 'Arrival Time', color: 'bg-white/10' },
               { val: 'ALL', label: locale === 'ar' ? 'مناطق قطر' : 'Areas Served', color: 'bg-white/10' },
             ].map((item, idx) => (
               <div key={idx} className={cn("p-10 rounded-[32px] backdrop-blur-md flex flex-col items-center justify-center text-center gap-2 border border-white/10", item.color)}>
                  <span className="text-4xl font-black font-display text-white">{item.val}</span>
                  <span className="text-xs font-bold text-white/60 uppercase tracking-widest">{item.label}</span>
               </div>
             ))}
          </div>
          <div className="order-1 lg:order-2 space-y-10">
             <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-red-500/20 text-red-400 text-xs font-black uppercase tracking-widest">
               <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
               {t.common.emergency}
             </div>
             <h2 className="text-5xl md:text-7xl font-black font-display text-white tracking-tight leading-tight">
               {locale === 'ar' ? 'خدمة التدخل السريع للحالات الطارئة' : 'Rapid Intervention for Emergencies'}
             </h2>
             <p className="text-xl text-white/70 leading-relaxed max-w-xl">
               {locale === 'ar' 
                 ? 'لا تترك عطل التكييف يفسد يومك. نحن نصل إليك في أقل من ساعة في أي مكان داخل الدوحة والوكرة.' 
                 : 'Dont let an AC breakdown ruin your day. We reach you in less than an hour anywhere in Doha and Wakrah.'}
             </p>
             <a href="tel:+97450042274" className="inline-flex items-center gap-4 px-12 py-6 rounded-[24px] bg-white text-brand-blue-deep font-black text-2xl hover:scale-105 transition-all shadow-2xl">
               <Phone className="w-7 h-7" />
               +974 5004 2274
             </a>
          </div>
        </div>
      </section>

      {/* Packages Section - Gray Background */}
      <section className="bg-section-gray py-32 reveal-item">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto space-y-6 mb-24">
            <span className="text-brand-cyan font-black uppercase tracking-[0.3em] text-xs">{locale === 'ar' ? 'استثمر في راحتك' : 'INVEST IN COMFORT'}</span>
            <h2 className="text-5xl md:text-7xl font-black font-display text-brand-blue-deep tracking-tight">{locale === 'ar' ? 'باقات حماية مخصصة' : 'Custom Protection Plans'}</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
               {locale === 'ar' ? 'وفر حتى 30٪ على تكاليف الصيانة السنوية مع باقاتنا المتميزة المصممة للفلل والمكاتب والمنازل.' : 'Save up to 30% on annual maintenance costs with our premium plans designed for villas, offices, and homes.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {packages.map((pkg, i) => (
              <div key={pkg.id} className={cn("relative group p-12 rounded-[48px] bg-white border-2 border-transparent transition-all duration-700 flex flex-col hover:-translate-y-4 hover:shadow-[0_40px_100px_-20px_rgba(2,62,138,0.15)]", i === 1 && "border-brand-blue-deep scale-105 z-10")}>
                 {i === 1 && (
                   <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-brand-blue-deep text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
                     {locale === 'ar' ? 'الأكثر طلباً' : 'MOST POPULAR'}
                   </div>
                 )}
                 <div className="flex-grow space-y-10">
                    <div className="space-y-2">
                       <h3 className="text-gray-400 font-bold uppercase tracking-widest text-xs">{locale === 'ar' ? 'باقة' : 'PACKAGE'}</h3>
                       <h2 className="text-3xl font-black text-brand-blue-deep">{locale === 'ar' ? pkg.name_ar : pkg.name_en}</h2>
                    </div>
                    
                    <div className="flex items-baseline gap-2">
                       <span className="text-5xl font-black font-display text-brand-blue-deep">{pkg.price}</span>
                       <span className="text-gray-400 text-sm font-bold">/ {locale === 'ar' ? 'سنوياً' : 'YEAR'}</span>
                    </div>

                    <div className="space-y-4">
                       <p className="text-sm font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-2">{locale === 'ar' ? 'مميزات الباقة' : 'WHAT IS INCLUDED'}</p>
                       <ul className="space-y-4">
                        {(locale === 'ar' ? pkg.features_ar : pkg.features_en).map((f, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-sm font-medium text-gray-600">
                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                            {f}
                          </li>
                        ))}
                       </ul>
                    </div>
                 </div>
                 
                 <button className={cn("mt-12 w-full py-5 rounded-[20px] font-black text-lg transition-all active:scale-95", i === 1 ? "bg-brand-blue-deep text-white shadow-xl shadow-brand-blue-deep/20 hover:bg-brand-blue-light hover:text-brand-blue-deep" : "bg-brand-blue-light/50 text-brand-blue-deep hover:bg-brand-blue-deep hover:text-white")}>
                    {locale === 'ar' ? 'اشترك الآن' : 'Subscribe Now'}
                 </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Brands - Grid Background */}
      <section className="bg-white py-32 reveal-item">
         <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
            <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.5em] mb-20 text-center opacity-60">
              {locale === 'ar' ? 'نحن الوكلاء المعتمدون لخدمات قطع الغيار' : 'AUTHORIZED SPARE PARTS SERVICE FOR'}
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-12 gap-y-16 items-center">
               {[
                 { name: 'LG', logo: 'https://i.postimg.cc/KvRbFJ3n/lg353l2fc-lg-logo-lg-logo-free-icon-of-vector-logo.png' },
                 { name: 'Samsung', logo: 'https://i.postimg.cc/cJvJr0b2/samsung-logo-png-1285.png' },
                 { name: 'Gree', logo: 'https://i.postimg.cc/Pq8nZxQr/gr1601gc05-gree-logo-gree-logo-vector-free-download.png' },
                 { name: 'Midea', logo: 'https://i.postimg.cc/Gpnq7m19/mi1020mac9-midea-logo-midea-logo-vector-eps-388-29-kb-download.png' },
                 { name: 'Daikin', logo: 'https://i.postimg.cc/Gpnq7m19/mi1020mac9-midea-logo-midea-logo-vector-eps-388-29-kb-download.png' },
                 { name: 'Carrier', logo: 'https://i.postimg.cc/KjT5r6sy/ca2915c79a-carrier-logo-carrier-logo-png-transparent-amp-svg-vector-freebie-supply.png' }
               ].map((brand, i) => (
                 <motion.div 
                   key={i}
                   whileHover={{ scale: 1.1 }}
                   className="flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                 >
                   <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="h-12 md:h-16 w-auto object-contain max-w-[140px]" 
                    referrerPolicy="no-referrer"
                   />
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Why Choose Us Detail Section - For SEO & Trust */}
      <section className="bg-white py-32 reveal-item border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <span className="text-brand-cyan font-black uppercase tracking-[0.3em] text-xs">CERTIFIED QUALITY</span>
              <h2 className="text-4xl md:text-6xl font-black text-brand-blue-deep font-display leading-tight">
                {locale === 'ar' ? 'لماذا تختار خدمات الوعد لصيانة المكيفات؟' : 'Why Choose Alwaad for AC Maintenance in Qatar?'}
              </h2>
              <div className="space-y-6 text-gray-600 font-medium leading-relaxed">
                <p>
                  {locale === 'ar' 
                    ? 'في خدمات الوعد، نحن لا نقوم فقط بالإصلاح، نحن نهتم بجودة الهواء الذي تتنفسه. فريقنا يتبع معايير هندسية دولية لضمان عمل نظام التكييف الخاص بك بأقصى درجات الكفاءة، مما يقلل من استهلاك الكهرباء ويطيل عمر الجهاز.'
                    : 'At Alwaad, we don’t just repair; we care for the air you breathe. Our engineers follow international standards to ensure your HVAC systems operate at peak efficiency, reducing electricity bills and extending appliance lifespan.'}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  <div className="p-6 rounded-2xl bg-section-gray border border-gray-200">
                    <h4 className="font-black text-brand-blue-deep mb-2">{locale === 'ar' ? 'فحص شامل بـ 25 نقطة' : '25-Point Comprehensive Check'}</h4>
                    <p className="text-sm opacity-80">{locale === 'ar' ? 'نقوم بفحص كل تفصيلة صغيرة لضمان الأمان التام.' : 'We inspect every minor detail for absolute system safety.'}</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-section-gray border border-gray-200">
                    <h4 className="font-black text-brand-blue-deep mb-2">{locale === 'ar' ? 'تغطية شاملة لقطر' : 'Full Qatar Coverage'}</h4>
                    <p className="text-sm opacity-80">{locale === 'ar' ? 'نغطي الدوحة، الوكرة، الخور، والريان.' : 'Serving Doha, Wakrah, Al Khor, and Al Rayyan.'}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-[60px] overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1517646280119-afb002194680?auto=format&fit=crop&q=80&w=1000" 
                  alt="Professional AC Cleaning" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 glass p-8 rounded-[40px] shadow-2xl max-w-xs hidden md:block">
                <p className="text-brand-blue-deep font-black text-lg mb-2">98%</p>
                <p className="text-gray-500 font-bold text-xs uppercase tracking-widest">{locale === 'ar' ? 'رضا العملاء في قطر' : 'Customer Satisfaction in Qatar'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Serve - Minimalist Grid for Local SEO */}
      <section className="bg-section-gray py-32 reveal-item">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-16">
            <div className="space-y-4">
              <span className="text-brand-cyan font-black uppercase tracking-[0.2em] text-xs leading-none">{locale === 'ar' ? 'تغطيتنا الجغرافية' : 'OUR GEOGRAPHIC COVERAGE'}</span>
              <h2 className="text-4xl md:text-5xl font-black text-brand-blue-deep font-display tracking-tight leading-tight">{locale === 'ar' ? 'نحن نصل إليك أينما كنت في قطر' : 'Expert Service Delivery Across Qatar'}</h2>
              <p className="text-gray-500 font-medium max-w-xl">{locale === 'ar' ? 'مهندسونا يغطون جميع مناطق الدوحة والمدن الرئيسية لضمان استجابة سريعة في أقل من 60 دقيقة للحالات الطارئة.' : 'Our specialized engineering vans are deployed across all major Qatar districts, ensuring a 60-minute emergency response time.'}</p>
            </div>
            <div className="flex items-center gap-4 text-sm font-bold text-brand-blue-deep bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-100">
               <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
               {locale === 'ar' ? 'متاحون الآن: 14 فريقاً في الميدان' : 'Currently Active: 14 Specialized Teams'}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { en: 'Doha', ar: 'الدوحة' }, 
              { en: 'Al Wakrah', ar: 'الوكرة' }, 
              { en: 'Al Rayyan', ar: 'الريان' }, 
              { en: 'Al Khor', ar: 'الخور' }, 
              { en: 'Umm Salal', ar: 'أم صلال' }, 
              { en: 'Mesaieed', ar: 'مسيعيد' }, 
              { en: 'Lusail', ar: 'لوسيل' }, 
              { en: 'The Pearl', ar: 'اللؤلؤة' },
              { en: 'Gharafa', ar: 'الغرافة' },
              { en: 'West Bay', ar: 'الخليج الغربي' },
              { en: 'Mansoura', ar: 'المنصورة' },
              { en: 'Dafna', ar: 'الدفنة' }
            ].map((area, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 text-center hover:border-brand-cyan transition-all cursor-default group hover:shadow-lg">
                <MapPin className="w-5 h-5 mx-auto mb-3 text-gray-300 group-hover:text-brand-cyan transition-colors" />
                <span className="text-brand-blue-deep font-black text-xs md:text-sm block mb-1">{area.en}</span>
                <span className="text-gray-300 font-bold text-[10px] uppercase tracking-widest">{area.ar}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Stats - Accent Background */}
      <section className="bg-section-accent py-32 reveal-item">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <h2 className="text-5xl md:text-7xl font-black font-display text-brand-blue-deep leading-[1.1] tracking-tight">{locale === 'ar' ? 'لماذا يثق بنا آلاف القطريين؟' : 'Why Thousands in Qatar Trust Us?'}</h2>
            <div className="space-y-8">
               {[
                 { t: locale === 'ar' ? 'دقة هندسية متناهية' : 'Precision Engineering', d: locale === 'ar' ? 'فريقنا ليس مجرد فنيين، بل مهندسون مدربون على أعلى مستوى.' : 'Our team consists of engineers trained to the highest standards.', i: Zap },
                 { t: locale === 'ar' ? 'أسعار شفافة ومباشرة' : 'Transparent Pricing', d: locale === 'ar' ? 'لا توجد تكاليف خفية. تحصل على السعر النهائي قبل بدء العمل.' : 'No hidden fees. You get the final price before we start.', i: ShieldCheck },
                 { t: locale === 'ar' ? 'ضمان ممتد حقيقي' : 'Extended Real Warranty', d: locale === 'ar' ? 'نحن مسؤولون عن كل قطعة غيار وكل دقيقة عمل.' : 'We are responsible for every spare part and every minute of work.', i: Star }
               ].map((item, idx) => (
                 <div key={idx} className="flex gap-8 group">
                    <div className="w-16 h-16 rounded-[24px] bg-white shadow-lg flex items-center justify-center shrink-0 group-hover:bg-brand-blue-deep transition-all duration-500">
                       <item.i className="w-8 h-8 text-brand-cyan group-hover:text-white" />
                    </div>
                    <div>
                       <h4 className="text-2xl font-black text-brand-blue-deep mb-2">{item.t}</h4>
                       <p className="text-gray-500 leading-relaxed">{item.d}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
             <div className="space-y-8 pt-12">
               <div className="glass p-10 rounded-[40px] text-center shadow-xl">
                 <h3 className="text-5xl font-black text-brand-cyan mb-2">15+</h3>
                 <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{locale === 'ar' ? 'سنة خبرة' : 'Years Success'}</p>
               </div>
               <div className="glass p-10 rounded-[40px] text-center shadow-xl">
                 <h3 className="text-5xl font-black text-brand-cyan mb-2">8k+</h3>
                 <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{locale === 'ar' ? 'مشروع منجز' : 'Projects Done'}</p>
               </div>
             </div>
             <div className="space-y-8">
               <div className="glass p-10 rounded-[40px] text-center shadow-xl bg-brand-blue-deep text-white">
                 <h3 className="text-5xl font-black text-white mb-2">45+</h3>
                 <p className="text-xs font-bold text-white/50 uppercase tracking-widest">{locale === 'ar' ? 'فني مختص' : 'Expert Techs'}</p>
               </div>
               <div className="glass p-10 rounded-[40px] text-center shadow-xl">
                 <h3 className="text-5xl font-black text-brand-cyan mb-2">1.2k</h3>
                 <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{locale === 'ar' ? 'تقييم ممتاز' : '5 Star Reviews'}</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Footer CTA - Deep Blue Background */}
      <section className="py-32 bg-brand-blue-deep relative overflow-hidden reveal-item mx-6 rounded-[100px] mb-20">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,180,216,0.15),transparent)]" />
         <div className="max-w-5xl mx-auto px-6 text-center space-y-12 relative z-10">
            <h2 className="text-5xl md:text-8xl font-black font-display text-white tracking-tight leading-[1] uppercase">
               {locale === 'ar' ? 'هل أنت مستعد لنقل راحتك لمستوى آخر؟' : 'Elevate Your Home Comfort'}
            </h2>
            <p className="text-xl text-white/50 leading-relaxed font-medium max-w-2xl mx-auto">
               {locale === 'ar' ? 'فريقنا مهيأ للبدء فوراً. تواصل معنا الآن للحصول على استشارة فنية مجانية.' : 'Our engineering team is ready to start immediately. Reach out for a premium inspection or specialized consultation.'}
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-6">
               <a href="https://wa.me/97450042274" className="px-12 py-6 rounded-[24px] bg-brand-cyan text-brand-blue-deep font-black text-2xl hover:scale-105 transition-all shadow-2xl flex items-center gap-3">
                  <MessageCircle className="w-8 h-8" />
                  {locale === 'ar' ? 'اطلب فحصاً الآن' : 'Request Inspection'}
               </a>
               <Link to={`/${locale}/contact`} className="px-12 py-6 rounded-[24px] bg-white/10 text-white border border-white/20 font-black text-2xl hover:bg-white transition-all hover:text-brand-blue-deep">
                  {t.nav.contact}
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
