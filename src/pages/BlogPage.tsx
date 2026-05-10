import { useLanguage } from '../lib/LanguageContext';
import { blogPosts } from '../lib/data';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Share2, Search } from 'lucide-react';
import { formatDate } from '../lib/utils';
import { Link } from 'react-router-dom';

export default function BlogPage() {
  const { locale, t } = useLanguage();

  return (
    <div className="pt-32 pb-40 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
           <header className="space-y-6 max-w-2xl">
              <span className="text-brand-cyan font-black uppercase tracking-[0.3em] text-xs">
                 {locale === 'ar' ? 'المعرفة الفنية' : 'TECHNICAL KNOWLEDGE'}
              </span>
              <h1 className="text-6xl md:text-8xl font-black font-display tracking-tight text-brand-blue-deep leading-[1.05]">
                 {locale === 'ar' ? 'رؤى الخبراء من الميدان' : 'Engineering Insights & Tips'}
              </h1>
           </header>
           
           <div className="w-full lg:w-96">
              <div className="relative group">
                 <input
                   type="text"
                   placeholder={locale === 'ar' ? 'ابحث في المقالات...' : 'Search articles...'}
                   className="w-full bg-section-gray border border-gray-100 rounded-2xl px-12 py-5 focus:border-brand-blue-deep transition-all outline-none font-bold text-brand-blue-deep placeholder:text-gray-400"
                 />
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 group-focus-within:text-brand-blue-deep transition-colors" />
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col h-full rounded-[60px] overflow-hidden hover:shadow-2xl transition-all duration-700 bg-white border border-gray-50"
            >
              <Link to={`/${locale}/blog/${post.id}`} className="relative h-72 overflow-hidden block">
                <img
                  src={post.image}
                  alt={post.title_en}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-8 left-8">
                   <span className="px-4 py-2 rounded-xl bg-white/90 backdrop-blur-md text-brand-blue-deep text-xs font-black uppercase tracking-widest border border-white">
                     {locale === 'ar' ? post.category_ar : post.category_en}
                   </span>
                </div>
              </Link>
              
              <div className="p-10 flex-grow flex flex-col justify-between">
                 <div className="space-y-6">
                    <div className="flex items-center gap-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                       <div className="flex items-center gap-2">
                         <Calendar className="w-4 h-4 text-brand-cyan" />
                         {formatDate(post.date, locale)}
                       </div>
                       <div className="flex items-center gap-2">
                         <User className="w-4 h-4 text-brand-cyan" />
                         {post.author}
                       </div>
                    </div>
                    
                    <Link to={`/${locale}/blog/${post.id}`} className="block">
                       <h2 className="text-3xl font-black font-display text-brand-blue-deep group-hover:text-brand-cyan transition-colors leading-tight line-clamp-2">
                          {locale === 'ar' ? post.title_ar : post.title_en}
                       </h2>
                    </Link>
                    
                    <p className="text-gray-500 font-medium line-clamp-3 leading-relaxed">
                       {locale === 'ar' ? post.excerpt_ar : post.excerpt_en}
                    </p>
                 </div>

                 <div className="pt-8 mt-8 border-t border-gray-100 flex justify-between items-center">
                    <Link to={`/${locale}/blog/${post.id}`} className="flex items-center gap-2 text-brand-blue-deep font-black text-sm hover:gap-4 transition-all">
                      {t.common.learnMore}
                      <ArrowRight className="w-5 h-5 text-brand-cyan" />
                    </Link>
                    <button className="w-10 h-10 rounded-xl hover:bg-section-gray flex items-center justify-center text-gray-400 hover:text-brand-blue-deep transition-all">
                      <Share2 className="w-5 h-5" />
                    </button>
                 </div>
              </div>
            </motion.article>
          ))}
        </div>
        
        {/* Newsletter CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-32 p-16 md:p-32 rounded-[100px] bg-brand-blue-deep text-white flex flex-col md:flex-row items-center justify-between gap-16 relative overflow-hidden"
        >
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,180,216,0.1),transparent)]" />
           <div className="space-y-6 max-w-xl relative z-10">
              <h2 className="text-5xl md:text-7xl font-black font-display leading-tight">{locale === 'ar' ? 'ابق على اطلاع مع مهندسينا' : 'Technical Updates Inbox'}</h2>
              <p className="text-white/60 text-xl font-medium">{locale === 'ar' ? 'احصل على آخر النصائح والعروض الحصرية مباشرة إلى بريدك الإلكتروني.' : 'The best maintenance hacks and exclusive service discounts delivered directly to your desk.'}</p>
           </div>
           <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4 relative z-10">
              <input type="email" placeholder="mail@pro.qa" className="bg-white/10 border border-white/10 rounded-2xl px-8 py-6 outline-none focus:border-brand-cyan focus:bg-white/20 transition-all font-bold md:w-80" />
              <button className="px-12 py-6 rounded-2xl bg-brand-cyan text-brand-blue-deep font-black text-xl transition-all hover:scale-105 shadow-2xl">{locale === 'ar' ? 'اشترك' : 'Secure Updates'}</button>
           </div>
        </motion.div>
      </div>
    </div>
  );
}
