import { useLanguage } from '../lib/LanguageContext';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactPage() {
  const { locale, t } = useLanguage();

  const contactOptions = [
    { icon: Phone, title: locale === 'ar' ? 'اتصل بنا' : 'Call Us', value: '+974 50042274', href: 'tel:+97450042274' },
    { icon: MessageCircle, title: 'WhatsApp', value: '+974 50042274', href: 'https://wa.me/97450042274' },
    { icon: Mail, title: locale === 'ar' ? 'البريد الإلكتروني' : 'Email Address', value: 'info@alwaadservices.com', href: 'mailto:info@alwaadservices.com' },
    { icon: MapPin, title: locale === 'ar' ? 'المقر الرئيسي' : 'Office Headquarters', value: t.common.address, href: '#' },
  ];

  return (
    <div className="pt-32 pb-40 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Contact Info */}
          <div className="space-y-16">
            <div className="space-y-8">
              <span className="text-brand-cyan font-black uppercase tracking-[0.3em] text-xs">
                 {locale === 'ar' ? 'تواصل هندسي مباشر' : 'DIRECT ENGINEERING SUPPORT'}
              </span>
              <h1 className="text-5xl md:text-8xl font-black font-display tracking-tight text-brand-blue-deep leading-[1.05]">
                 {locale === 'ar' ? 'دعنا نبدأ حواراً هادفاً' : "Ready to Solve Your Issues?"}
              </h1>
              <p className="text-xl text-gray-500 leading-relaxed font-medium max-w-xl">
                 {locale === 'ar' 
                   ? 'فريق الدعم الهندسي لدينا متاح لمساعدتكم في أي وقت. تواصل معنا للحصول على فحص مجاني أو استشارة فنية متخصصة.' 
                   : 'Our certified engineering team is available 24/7. Contact us for a premium site inspection or professional technical consultation.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {contactOptions.map((opt, i) => (
                 <a 
                   key={i} 
                   href={opt.href} 
                   className="bg-section-gray p-10 rounded-[40px] hover:bg-brand-blue-deep hover:text-white transition-all duration-500 group border border-gray-100"
                 >
                    <opt.icon className="w-10 h-10 text-brand-cyan mb-8 group-hover:scale-110 transition-transform duration-500" />
                    <h4 className="font-black text-gray-400 text-[10px] uppercase tracking-widest mb-2 group-hover:text-white/50">{opt.title}</h4>
                    <p className="text-xl font-black font-display break-words" dir="ltr">{opt.value}</p>
                 </a>
               ))}
            </div>

            <div className="p-10 rounded-[40px] bg-brand-blue-deep text-white flex items-center gap-8 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/20 blur-3xl" />
               <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                  <Clock className="w-10 h-10 text-brand-cyan" />
               </div>
               <div className="relative z-10">
                  <h4 className="font-black text-2xl uppercase tracking-tighter mb-1">{locale === 'ar' ? 'دعم الطوارئ 24/7' : '24/7 Rapid Response'}</h4>
                  <p className="text-white/50 font-medium text-sm">{locale === 'ar' ? 'فريقنا مجهز للتحرك فوراً عند حالات الطوارئ.' : 'Our rapid response vehicles are stationed across Qatar for immediate dispatch.'}</p>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-section-gray p-8 md:p-20 rounded-[40px] md:rounded-[80px] border border-gray-100 relative group">
             <div className="relative z-10 space-y-10" >
                <div className="space-y-4">
                   <h3 className="text-4xl font-black text-brand-blue-deep">{locale === 'ar' ? 'أرسل طلباً' : 'Submit a Request'}</h3>
                   <p className="text-gray-500 font-medium">{locale === 'ar' ? 'سوف نتواصل معك في أقل من 30 دقيقة.' : "We'll get back to you in less than 30 minutes."}</p>
                </div>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">{locale === 'ar' ? 'الاسم بالكامل' : 'Full Name'}</label>
                        <input type="text" className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 focus:border-brand-blue-deep text-brand-blue-deep font-bold transition-all outline-none" required />
                     </div>
                     <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">{locale === 'ar' ? 'رقم الهاتف' : 'Phone Number'}</label>
                        <input type="tel" className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 focus:border-brand-blue-deep text-brand-blue-deep font-bold transition-all outline-none" required />
                     </div>
                  </div>
                  <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">{locale === 'ar' ? 'الخدمة المطلوبة' : 'Service Domain'}</label>
                      <select className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 focus:border-brand-blue-deep text-brand-blue-deep font-bold transition-all outline-none appearance-none">
                         <option>HVAC Maintenance</option>
                         <option>AC Installation</option>
                         <option>Industrial Cooling</option>
                         <option>Appliance Restoration</option>
                      </select>
                  </div>
                  <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">{locale === 'ar' ? 'تفاصيل المشكلة' : 'Project Details'}</label>
                      <textarea rows={4} className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 focus:border-brand-blue-deep text-brand-blue-deep font-bold transition-all outline-none resize-none"></textarea>
                  </div>
                  <button className="w-full py-6 rounded-2xl bg-brand-blue-deep text-white font-black text-xl hover:bg-brand-cyan hover:text-brand-blue-deep shadow-2xl shadow-brand-blue-deep/20 active:scale-95 transition-all flex items-center justify-center gap-3">
                     <Send className="w-6 h-6" />
                     {locale === 'ar' ? 'تأكيد الإرسال' : 'Confirm Dispatch'}
                  </button>
                </form>
                
                <div className="pt-10 border-t border-gray-200">
                  <iframe
                    title="Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115408.2458872583!2d51.455245!3d25.286106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce983%3A0xc414457a4128564e!2sDoha%2C%20Qatar!5e0!3m2!1sen!2sqa!4v1715200000000!5m2!1sen!2sqa"
                    className="w-full h-80 rounded-[40px] grayscale brightness-110 contrast-100 border border-gray-100 shadow-sm"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
