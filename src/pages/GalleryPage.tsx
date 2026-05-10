import { useLanguage } from '../lib/LanguageContext';
import { motion } from 'motion/react';
import { Image as ImageIcon, ZoomIn, Camera, Phone } from 'lucide-react';

const galleryItems = [
  { id: 1, title: 'Commercial VRF AC Installation - West Bay', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Inverter Split AC Repair - Pearl Qatar', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Industrial Washing Machine Overhaul', image: 'https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Central Chiller Chemical Cleaning', image: 'https://images.unsplash.com/photo-1595433707802-6806f39f500e?auto=format&fit=crop&q=80&w=800' },
  { id: 5, title: 'Luxury Villa HVAC Smart Integration', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000' },
  { id: 6, title: 'Professional Fridge Gas Refill - Lusail', image: 'https://images.unsplash.com/photo-1599394022918-6c276a570aba?auto=format&fit=crop&q=80&w=1000' },
  { id: 7, title: 'Ducted AC Duct Cleaning & Sanitization', image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=800' },
  { id: 8, title: 'Outdoor Condenser Coil Washing', image: 'https://images.unsplash.com/photo-1605202353347-19598007a10f?auto=format&fit=crop&q=80&w=800' },
  { id: 9, title: 'Smart Thermostat Installation', image: 'https://images.unsplash.com/photo-1567928223631-c06830571060?auto=format&fit=crop&q=80&w=800' },
  { id: 10, title: 'Commercial Kitchen Exhaust Maintenance', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800' },
  { id: 11, title: 'Water Leakage Detection & Repair', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800' },
  { id: 12, title: 'Circuit Breaker Box Upgrade', image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=800' }
];

export default function GalleryPage() {
  const { locale } = useLanguage();

  return (
    <div className="pt-32 pb-40 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
           <header className="space-y-6 max-w-3xl">
              <span className="text-brand-cyan font-black uppercase tracking-[0.3em] text-xs">
                 {locale === 'ar' ? 'معرض المشاريع' : 'PROJECT SHOWCASE'}
              </span>
              <h1 className="text-6xl md:text-8xl font-black font-display tracking-tight text-brand-blue-deep leading-[1.05]">
                 {locale === 'ar' ? 'إتقان هندسي ملموس' : 'Witness Our Technical Mastery'}
              </h1>
           </header>
           <div className="flex items-center gap-4 text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] shrink-0 border-b-2 border-brand-cyan/20 pb-2">
             <Camera className="w-5 h-5 text-brand-cyan" />
             <span>{locale === 'ar' ? 'توثيق حي للمشاريع' : 'LIVE PROJECT DOCUMENTATION'}</span>
           </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-12 space-y-12">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-[60px] overflow-hidden bg-section-gray border border-gray-100 break-inside-avoid shadow-sm hover:shadow-2xl transition-all duration-700"
            >
               <div className="relative rounded-[60px] overflow-hidden aspect-[4/5] bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-deep/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-12 translate-y-12 group-hover:translate-y-0 transition-transform duration-700 opacity-0 group-hover:opacity-100">
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-cyan mb-3">STATE OF QATAR</p>
                      <h3 className="text-3xl font-black text-white font-display tracking-tight leading-tight">{item.title}</h3>
                      <div className="mt-8 flex justify-between items-center">
                         <div className="h-0.5 w-12 bg-brand-cyan" />
                         <button className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-brand-cyan hover:text-brand-blue-deep transition-all">
                           <ZoomIn className="w-6 h-6" />
                         </button>
                      </div>
                  </div>
               </div>
            </motion.div>
          ))}
        </div>

        {/* Gallery CTA */}
        <div className="mt-32 p-12 md:p-20 rounded-[60px] border-2 border-gray-100 flex flex-col items-center text-center space-y-10 relative overflow-hidden bg-section-accent">
           <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 blur-[100px]" />
           <div className="space-y-4 relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-brand-blue-deep font-display uppercase tracking-tighter">{locale === 'ar' ? 'هل تحتاج لخدمة متميزة لمشروعك؟' : 'Premium Service For Your Asset'}</h2>
              <p className="text-gray-500 font-medium text-xl max-w-2xl mx-auto">{locale === 'ar' ? 'انضم لقائمة عملائنا المتميزين واحصل على أفضل خدمات الصيانة المعتمدة في قطر.' : 'Join our high-tier client list and experience the best certified maintenance services in Qatar.'}</p>
           </div>
           <a href="tel:+97450042274" className="bg-brand-blue-deep text-white px-12 py-6 rounded-3xl font-black text-xl hover:bg-brand-cyan hover:text-brand-blue-deep transition-all relative z-10 flex items-center gap-4 group">
             <Phone className="w-6 h-6 group-hover:animate-bounce" />
             {locale === 'ar' ? 'احجز موعداً للمعاينة' : 'Schedule Site Visit'}
           </a>
        </div>
      </div>
    </div>
  );
}
