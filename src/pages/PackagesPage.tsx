import { useLanguage } from '../lib/LanguageContext';
import { packages } from '../lib/data';
import { CheckCircle2, Zap, ShieldCheck, Phone, Star } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

export default function PackagesPage() {
  const { locale, t } = useLanguage();

  return (
    <div className="pt-32 pb-40 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-24 text-center space-y-6">
          <span className="text-brand-cyan font-black uppercase tracking-[0.3em] text-xs">{locale === 'ar' ? 'خطط توفير هندسية' : 'ENGINEERING SAVING PLANS'}</span>
          <h1 className="text-5xl md:text-8xl font-black font-display text-brand-blue-deep tracking-tight leading-[1.1]">
            {locale === 'ar' ? 'باقات الصيانة السنوية' : 'Annual Maintenance Packages'}
          </h1>
          <p className="text-gray-500 text-xl max-w-3xl mx-auto leading-relaxed">
            {locale === 'ar' ? 'احمِ منزلك من الأعطال المفاجئة ووفر حتى 30% من تكلفة الفواتير مع الصيانة الدورية المنتظمة.' : 'Protect your home from sudden breakdowns and save up to 30% on bills with regular periodic maintenance.'}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-32">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "group relative p-12 rounded-[50px] bg-section-gray border-2 border-transparent transition-all duration-700 flex flex-col hover:-translate-y-4 hover:shadow-2xl",
                i === 1 && "border-brand-blue-deep bg-white scale-105 z-10"
              )}
            >
               {i === 1 && (
                 <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-brand-blue-deep text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full z-10 shadow-xl">
                   {locale === 'ar' ? 'الأكثر طلباً' : 'MOST POPULAR'}
                 </div>
               )}
               
               <div className="flex-grow space-y-10">
                  <div>
                     <h3 className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-2">{locale === 'ar' ? 'خطة' : 'PLAN'}</h3>
                     <h2 className="text-3xl font-black font-display text-brand-blue-deep">{locale === 'ar' ? pkg.name_ar : pkg.name_en}</h2>
                  </div>
                  
                  <div className="flex items-baseline gap-2">
                     <p className="text-5xl font-black font-display text-brand-blue-deep">{pkg.price}</p>
                     <p className="text-gray-400 font-bold">/ {locale === 'ar' ? 'سنوياً' : 'YEAR'}</p>
                  </div>

                  <p className="text-gray-500 font-medium leading-relaxed text-sm">
                     {locale === 'ar' ? pkg.description_ar : pkg.description_en}
                  </p>

                  <div className="space-y-4 pt-6 border-t border-gray-200">
                     <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6">{locale === 'ar' ? 'ماذا تشمل الخطة' : 'WHAT IS INCLUDED'}</p>
                     {(locale === 'ar' ? pkg.features_ar : pkg.features_en).map((f, idx) => (
                       <div key={idx} className="flex items-center gap-4 text-sm font-bold">
                          <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                          <span className="text-gray-600">{f}</span>
                       </div>
                     ))}
                  </div>
               </div>

               <button className={cn(
                 "mt-12 w-full py-6 rounded-2xl font-black text-lg transition-all active:scale-95",
                 i === 1 ? "bg-brand-blue-deep text-white shadow-xl shadow-brand-blue-deep/20 hover:bg-brand-cyan hover:text-brand-blue-deep" : "bg-white text-brand-blue-deep border border-gray-200 hover:bg-brand-blue-deep hover:text-white"
               )}>
                  {locale === 'ar' ? 'اشترك الآن' : 'Subscribe Now'}
               </button>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-brand-blue-deep p-10 md:p-32 rounded-[40px] md:rounded-[80px] text-white relative overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,180,216,0.1),transparent)]" />
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
              <div className="space-y-12">
                 <h2 className="text-5xl md:text-7xl font-black font-display tracking-tight leading-[1.1]">{locale === 'ar' ? 'لماذا تختار باقاتنا الحصرية؟' : 'Why Choose Our Exclusive Plans?'}</h2>
                 <div className="space-y-10">
                    {[
                      { t: locale === 'ar' ? 'توفير مالي حقيقي' : 'Real Financial Savings', d: locale === 'ar' ? 'أسعارنا في الباقات أقل بـ 40% من تكلفة الطلبات المنفردة على مدار العام.' : 'Our package prices are 40% lower than individual service costs throughout the year.', i: Zap },
                      { t: locale === 'ar' ? 'أولوية الاستجابة القصوى' : 'Maximum Priority Response', d: locale === 'ar' ? 'عملاء الباقات الذهبية والفضية يحصلون على فني في أقل من ساعتين.' : 'Gold and Silver clients get a technician dispatched in under 2 hours.', i: ShieldCheck },
                      { t: locale === 'ar' ? 'قطع غيار وضمان' : 'Parts & Labor Warranty', d: locale === 'ar' ? 'نحن نستخدم فقط قطع الغيار الأصلية ونقدم ضماناً ممتداً عليها.' : 'We exclusively use genuine parts and provide extended warranties on all structural repairs.', i: Phone },
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-8 group">
                         <div className="w-20 h-20 rounded-[32px] bg-white/10 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-brand-cyan group-hover:text-brand-blue-deep transition-all duration-500">
                            <item.i className="w-10 h-10" />
                         </div>
                         <div>
                            <h4 className="text-2xl font-black mb-2 text-white">{item.t}</h4>
                            <p className="text-white/50 text-lg leading-relaxed">{item.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="hidden lg:block relative">
                 <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl relative">
                    <img 
                      src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000" 
                      alt="Expert technician" 
                      className="w-full h-full object-cover grayscale opacity-50"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-deep via-transparent to-transparent" />
                 </div>
                 <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-brand-cyan/20 blur-3xl" />
                 <div className="absolute bottom-20 -left-12 p-10 rounded-[40px] bg-white text-brand-blue-deep shadow-2xl space-y-4">
                    <div className="flex items-center gap-3">
                       <Star className="w-6 h-6 text-yellow-500 fill-current" />
                       <span className="font-black">98% Retention Rate</span>
                    </div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{locale === 'ar' ? 'عملاء الباقات مستمرون معنا' : 'Package clients stay with us year after year'}</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
