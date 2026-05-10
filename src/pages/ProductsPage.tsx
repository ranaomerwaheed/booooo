import { useLanguage } from '../lib/LanguageContext';
import { products } from '../lib/data';
import { ShoppingCart, Star, MessageCircle, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export default function ProductsPage() {
  const { locale } = useLanguage();

  return (
    <div className="pt-32 pb-40 bg-section-gray min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-24 text-center space-y-6">
          <span className="text-brand-cyan font-black uppercase tracking-[0.3em] text-xs">{locale === 'ar' ? 'أفضل الماركات العالمية' : 'PREMIUM GLOBAL BRANDS'}</span>
          <h1 className="text-6xl md:text-8xl font-black font-display text-brand-blue-deep tracking-tight leading-[1.1]">
            {locale === 'ar' ? 'اكتشف مجموعتنا من أجهزة التكييف' : 'Premium AC Collection'}
          </h1>
          <p className="text-gray-500 text-xl max-w-3xl mx-auto leading-relaxed">
            {locale === 'ar' ? 'نوفر لك أفضل أجهزة التكييف الموفرة للطاقة مع ضمان حقيقي وخدمة تركيب احترافية.' : 'We provide top energy-efficient AC units with authentic warranty and professional installation.'}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-[60px] overflow-hidden flex flex-col md:flex-row hover:shadow-2xl transition-all duration-700 border border-gray-100"
            >
              <div className="md:w-1/2 relative overflow-hidden bg-brand-blue-light/20 p-10 flex items-center justify-center">
                 <img
                   src={product.image}
                   alt={product.brand}
                   className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 mix-blend-multiply"
                   referrerPolicy="no-referrer"
                 />
                 <div className="absolute top-8 left-8 px-4 py-2 bg-white rounded-full text-brand-blue-deep font-black text-xs uppercase tracking-widest shadow-sm border border-gray-100">
                   {product.brand}
                 </div>
              </div>

              <div className="md:w-1/2 p-12 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-3xl font-black text-brand-blue-deep mb-1">{product.model}</h3>
                      <p className="text-brand-cyan font-bold">{product.btu}</p>
                    </div>
                    <div className="bg-brand-blue-deep text-white px-3 py-1 rounded-lg text-xs font-black">
                      {product.energyRating}
                    </div>
                  </div>

                  <p className="text-gray-500 font-medium leading-relaxed text-sm">
                    {locale === 'ar' ? product.description_ar : product.description_en}
                  </p>

                  <div className="space-y-4">
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-2">{locale === 'ar' ? 'المواصفات التقنية' : 'TECHNICAL SPECS'}</p>
                    <ul className="grid grid-cols-1 gap-2">
                      {(locale === 'ar' ? (product as any).specs_ar : (product as any).specs_en).map((spec: string, idx: number) => (
                        <li key={idx} className="flex items-center gap-2 text-sm font-bold text-gray-600">
                           <Zap className="w-4 h-4 text-brand-cyan" />
                           {spec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-1 text-yellow-500">
                    {[1, 2, 3, 4, 5].map(j => <Star key={j} className="w-4 h-4 fill-current" />)}
                  </div>
                </div>

                <div className="mt-10 pt-10 border-t border-gray-100 flex items-end justify-between">
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{locale === 'ar' ? 'السعر' : 'PRICE'}</p>
                    <p className="text-4xl font-black text-brand-blue-deep">{product.price}</p>
                  </div>
                  <a
                    href={`https://wa.me/97450042274?text=${encodeURIComponent(locale === 'ar' ? `أنا مهتم بـ ${product.brand} ${product.model}` : `I am interested in ${product.brand} ${product.model}`)}`}
                    className="w-16 h-16 rounded-2xl bg-brand-blue-deep text-white flex items-center justify-center hover:bg-brand-cyan hover:text-brand-blue-deep transition-all shadow-xl shadow-brand-blue-deep/20"
                  >
                    <MessageCircle className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 p-16 rounded-[60px] bg-brand-blue-deep text-white text-center space-y-8 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(0,180,216,0.2),transparent)]" />
           <h2 className="text-4xl md:text-6xl font-black font-display relative z-10">{locale === 'ar' ? 'هل تبحث عن موديل محدد؟' : 'Looking for a Specific Model?'}</h2>
           <p className="text-white/60 text-xl relative z-10 max-w-2xl mx-auto">
             {locale === 'ar' ? 'نحن نتعامل مع جميع العلامات التجارية الكبرى. تواصل معنا وسنقوم بتوفير الموديل الذي تريده بأفضل سعر.' : 'We stock all major brands. Reach out and we will source exactly what you need at competitive prices.'}
           </p>
           <div className="relative z-10 flex justify-center">
              <a href="https://wa.me/97450042274" className="inline-flex items-center gap-3 px-12 py-6 rounded-2xl bg-brand-cyan text-brand-blue-deep font-black text-xl hover:scale-105 transition-all shadow-2xl">
                <ShoppingCart className="w-6 h-6" />
                {locale === 'ar' ? 'اطلب تسعيرة خاصة' : 'Request Custom Quote'}
              </a>
           </div>
        </div>
      </div>
    </div>
  );
}
