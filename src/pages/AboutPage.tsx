import { useLanguage } from '../lib/LanguageContext';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Users, Target, Star } from 'lucide-react';

export default function AboutPage() {
  const { locale } = useLanguage();

  const stats = [
    { label: locale === 'ar' ? 'سنوات الخبرة' : 'Years Experience', value: '15+' },
    { label: locale === 'ar' ? 'فني معتمد' : 'Certified Techs', value: '45+' },
    { label: locale === 'ar' ? 'عميل نشط' : 'Active Clients', value: '3,000+' },
    { label: locale === 'ar' ? 'مشروع مكتمل' : 'Projects Done', value: '8,000+' },
  ];

  return (
    <div className="pt-32 pb-40 bg-white">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <span className="text-brand-cyan font-black uppercase tracking-[0.3em] text-xs">
               {locale === 'ar' ? 'من صميم تميزنا' : 'THE CORE OF EXCELLENCE'}
            </span>
            <h1 className="text-6xl md:text-8xl font-black font-display tracking-tight leading-[1.05] text-brand-blue-deep">
              {locale === 'ar' ? 'نحن الوعد للتميز الهندسي' : 'ALWAAD Engineering Excellence'}
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed max-w-xl">
              {locale === 'ar' 
                ? 'تأسست شركة الوعد للخدمات والمقاولات في قطر لتكون الشريك الأمثل في خدمات التكييف وتصليح الأجهزة. نحن نجمع بين التكنولوجيا الحديثة والخبرة الطويلة لنقدم لكم حلولاً تدوم طويلاً.'
                : 'Alwaad Contracting Service was established in Qatar to be the premier partner for HVAC and appliance repair services. We combine modern technology with extensive engineering expertise.'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-gray-100">
               {[
                 { icon: ShieldCheck, title: locale === 'ar' ? 'موثوقية تامة' : 'Total Reliability', desc: locale === 'ar' ? 'نحن نلتزم بأعلى معايير الجودة القطرية.' : 'We adhere to the highest Qatari construction standards.' },
                 { icon: Award, title: locale === 'ar' ? 'جودة معتمدة' : 'Certified Quality', desc: locale === 'ar' ? 'نستخدم أفضل قطع الغيار الأصلية فقط.' : 'We use strictly original and certified spare parts.' },
               ].map((item, i) => (
                 <div key={i} className="flex gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-section-gray shrink-0 flex items-center justify-center text-brand-cyan shadow-sm">
                       <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-black text-brand-blue-deep mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
          <div className="relative">
             <motion.div 
               initial={{ rotate: 0 }}
               whileInView={{ rotate: 3 }}
               transition={{ duration: 1 }}
               className="rounded-[80px] overflow-hidden bg-brand-blue-light/20 p-4 border border-gray-100"
             >
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000" 
                  alt="Engineering Excellence" 
                  className="rounded-[60px] w-full aspect-[4/5] object-cover mix-blend-multiply"
                  referrerPolicy="no-referrer"
                />
             </motion.div>
             <div className="absolute -bottom-12 -left-12 bg-brand-blue-deep p-10 rounded-[50px] shadow-2xl text-white">
                <p className="text-brand-cyan text-5xl font-black font-display mb-1">100%</p>
                <p className="text-[10px] font-black uppercase tracking-[0.2em]">{locale === 'ar' ? 'ضمان رضا العملاء' : 'Customer Satisfaction'}</p>
             </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-section-gray py-32 rounded-[100px] mx-6">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12">
           {stats.map((stat, i) => (
             <div key={i} className="text-center space-y-4">
                <h3 className="text-6xl md:text-8xl font-black font-display text-brand-blue-deep tracking-tighter">{stat.value}</h3>
                <p className="text-gray-400 text-xs font-black uppercase tracking-[0.3em]">{stat.label}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="max-w-7xl mx-auto px-6 py-40 grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-16 rounded-[80px] space-y-8 border-2 border-brand-cyan/20 group hover:border-brand-cyan transition-all duration-700 shadow-xl shadow-brand-cyan/5"
          >
            <div className="w-20 h-20 rounded-3xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan">
               <Target className="w-10 h-10" />
            </div>
            <h3 className="text-4xl font-black text-brand-blue-deep">{locale === 'ar' ? 'رؤيتنا الاستراتيجية' : 'Strategic Vision'}</h3>
            <p className="text-gray-500 text-lg leading-relaxed font-medium">
               {locale === 'ar' 
                 ? 'أن نكون الشركة الرائدة عالمياً في تقديم خدمات صيانة التكييف المبتكرة في قطر والمنطقة، من خلال دمج الذكاء الاصطناعي في عمليات الصيانة الاستباقية.' 
                 : 'To be the leading global provider of innovative HVAC maintenance in Qatar by integrating predictive technology into every home.'}
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-brand-blue-deep p-16 rounded-[80px] space-y-8 text-white hover:scale-[1.02] transition-all duration-700 shadow-2xl shadow-brand-blue-deep/20"
          >
            <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center text-brand-cyan">
               <Users className="w-10 h-10" />
            </div>
            <h3 className="text-4xl font-black">{locale === 'ar' ? 'مهمتنا تجاه العملاء' : 'Mission to Clients'}</h3>
            <p className="text-white/60 text-lg leading-relaxed font-medium">
               {locale === 'ar' 
                 ? 'توفير الراحة والرفاهية لعملائنا من خلال خدمات صيانة سريعة، احترافية، وبأسعار معقولة، مع الحفاظ على التميز التقني المطلق.' 
                 : 'Providing comfort and well-being for our customers through rapid, professional, and affordable services while maintaining technical excellence.'}
            </p>
          </motion.div>
      </section>

      {/* Trust Section */}
      <section className="max-w-7xl mx-auto px-6">
         <div className="p-16 md:p-32 rounded-[80px] bg-brand-cyan text-brand-blue-deep text-center space-y-12 shadow-2xl">
            <div className="flex justify-center gap-3">
               {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-8 h-8 fill-brand-blue-deep" />)}
            </div>
            <h2 className="text-5xl md:text-8xl font-black font-display tracking-tighter leading-[0.9]">{locale === 'ar' ? 'ثقة أكثر من 8000 عميل' : 'Trusted by Over 8000+ Clients'}</h2>
            <p className="text-brand-blue-deep/60 text-xl font-black uppercase tracking-widest">{locale === 'ar' ? 'شريككم الموثوق في صيانة قطر' : 'YOUR TRUSTED PARTNER IN QATAR MAINTENANCE'}</p>
         </div>
      </section>
    </div>
  );
}
