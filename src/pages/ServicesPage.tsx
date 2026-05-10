import { useLanguage } from '../lib/LanguageContext';
import { services } from '../lib/data';
import { motion } from 'motion/react';
import { MessageCircle, Zap, CheckCircle2, Phone } from 'lucide-react';
import { cn } from '../lib/utils';

export default function ServicesPage() {
  const { t, locale } = useLanguage();

  return (
    <div className="pt-32 pb-40 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-24 text-center space-y-6">
          <span className="text-brand-cyan font-black uppercase tracking-[0.3em] text-xs">{locale === 'ar' ? 'خبرتنا الهندسية' : 'OUR ENGINEERING EXPERTISE'}</span>
          <h1 className="text-6xl md:text-8xl font-black font-display text-brand-blue-deep tracking-tight leading-[1.1]">
            {locale === 'ar' ? 'حلول تبريد وصيانة متكاملة للمنازل والمشاريع' : 'Complete Cooling & Maintenance Solutions'}
          </h1>
          <p className="text-gray-500 text-xl max-w-3xl mx-auto leading-relaxed">
            {locale === 'ar' ? 'حلول هندسية متكاملة لجميع احتياجات التكييف والأجهزة المنزلية في قطر.' : 'Integrated engineering solutions for all your HVAC and home appliance needs in Qatar.'}
          </p>
        </header>

        <div className="grid grid-cols-1 gap-24">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(
                "flex flex-col lg:flex-row gap-16 items-center bg-section-gray p-10 lg:p-20 rounded-[80px] transition-all duration-700 hover:shadow-xl",
                i % 2 === 1 && "lg:flex-row-reverse bg-brand-blue-light/30"
              )}
            >
              <div className="lg:w-1/2 relative group">
                <div className="absolute -inset-4 bg-brand-cyan/20 rounded-[60px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <img
                  src={service.image}
                  alt={service.title_en}
                  className="w-full h-[600px] object-cover rounded-[50px] shadow-2xl relative z-10 group-hover:scale-[1.02] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="lg:w-1/2 space-y-10 relative z-10">
                <div className="w-20 h-20 rounded-3xl bg-brand-blue-deep text-brand-cyan flex items-center justify-center shadow-2xl shadow-brand-blue-deep/20">
                   <Zap className="w-10 h-10" />
                </div>
                <div className="space-y-4">
                   <h2 className="text-4xl md:text-6xl font-black font-display text-brand-blue-deep tracking-tight">
                     {locale === 'ar' ? service.title_ar : service.title_en}
                   </h2>
                   <p className="text-xl text-gray-600 leading-relaxed font-medium">
                     {locale === 'ar' ? (service as any).longDescription_ar : (service as any).longDescription_en}
                   </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {(locale === 'ar' ? (service as any).features_ar : (service as any).features_en).map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-4 p-5 rounded-3xl bg-white/60 border border-white shadow-sm hover:shadow-md transition-all">
                      <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      </div>
                      <span className="text-base font-bold text-brand-blue-deep">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-8 flex flex-wrap gap-6">
                   <a
                    href={`https://wa.me/97450042274?text=${encodeURIComponent(locale === 'ar' ? `استفسار عن ${service.title_ar}` : `Inquiry about ${service.title_en}`)}`}
                    className="inline-flex items-center gap-4 px-12 py-6 rounded-[24px] bg-brand-blue-deep text-white font-black text-xl hover:bg-brand-cyan hover:text-brand-blue-deep hover:scale-105 transition-all shadow-2xl shadow-brand-blue-deep/20"
                  >
                    <MessageCircle className="w-7 h-7" />
                    {locale === 'ar' ? 'اطلب الخدمة الآن' : 'Book Engineering Service'}
                  </a>
                  <a
                    href="tel:+97450042274"
                    className="inline-flex items-center gap-4 px-12 py-6 rounded-[24px] border-2 border-brand-blue-deep text-brand-blue-deep font-black text-xl hover:bg-brand-blue-deep hover:text-white transition-all"
                  >
                    <Phone className="w-6 h-6" />
                    {locale === 'ar' ? 'اتصل بنا' : 'Call Now'}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
