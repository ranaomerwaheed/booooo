import { useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { useLocation } from 'react-router-dom';

export default function SeoManager() {
  const { locale } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const defaultMeta = {
      en: {
        title: "Alwaad Services | Premium AC Repair & Home Maintenance in Qatar",
        description: "Qatar's #1 Home Maintenance specialists. Certified AC repair, electrical, plumbing, and appliance services in Doha. 24/7 Emergency support.",
        keywords: "AC repair Qatar, home maintenance Doha, electrical repair Qatar, plumbing services Doha, Alwaad services"
      },
      ar: {
        title: "خدمات الوعد | صيانة مكيفات وخدمات منزلية متميزة في قطر",
        description: "الخيار الأول للصيانة المنزلية في قطر. متخصصون في إصلاح المكيفات، الكهرباء، السباكة والأجهزة المنزلية في الدوحة. دعم طوارئ 24/7.",
        keywords: "تصليح مكيفات قطر, صيانة منزلية الدوحة, تصليح كهرباء قطر, خدمات سباكة الدوحة, خدمات الوعد"
      }
    };

    const pageMetaMap: Record<string, any> = {
      'services': {
        en: { title: "Doha AC Repair & Cleaning Services | Alwaad", description: "Professional AC maintenance, fridge repair, and washing machine services in Doha. Certified engineering team." },
        ar: { title: "خدمات تصليح وتنظيف المكيفات في الدوحة | الوعد", description: "صيانة مكيفات احترافية، تصليح ثلاجات، وخدمات غسالات في الدوحة. فريق هندسي معتمد." }
      },
      'products': {
        en: { title: "Buy Energy Efficient AC Units in Qatar | Alwaad", description: "Explore premium AC units from Gree, Midea, and Samsung. Best prices in Qatar with professional installation." },
        ar: { title: "شراء مكيفات موفرة للطاقة في قطر | الوعد", description: "استكشف أفضل أجهزة التكييف من جري، ميديا، وسامسونج. أفضل الأسعار في قطر مع تركيب احترافي." }
      },
      'blog': {
        en: { title: "Maintenance Tips & Engineering Insights | Alwaad Blog", description: "Expert advice on AC efficiency, electricity saving, and home appliance maintenance in Qatar." },
        ar: { title: "نصائح الصيانة ورؤى هندسية | مدونة الوعد", description: "نصائح الخبراء حول كفاءة التكييف، توفير الكهرباء، وصيانة الأجهزة المنزلية في قطر." }
      },
      'contact': {
        en: { title: "Contact Alwaad Support | 24/7 Maintenance Qatar", description: "Need urgent AC repair in Doha? Contact Alwaad engineering support now for fast assistance." },
        ar: { title: "تواصل مع دعم الوعد | صيانة 24/7 قطر", description: "هل تحتاج تصليح مكيفات عاجل في الدوحة؟ تواصل مع الدعم الهندسي للوعد الآن للمساعدة السريعة." }
      }
    };

    const path = location.pathname.split('/').pop() || 'home';
    const meta = (pageMetaMap[path] && pageMetaMap[path][locale as 'en' | 'ar']) || defaultMeta[locale as 'en' | 'ar'];
    
    document.title = meta.title;

    // Update tags
    const updateOrCreateMeta = (name: string, content: string, attr: string = 'name') => {
      let tag = document.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateOrCreateMeta('description', meta.description);
    updateOrCreateMeta('og:title', meta.title, 'property');
    updateOrCreateMeta('og:description', meta.description, 'property');
    updateOrCreateMeta('og:image', "https://i.postimg.cc/FsFpTytt/55bacbb3-1554-4123-b429-d53ae9d83c1f-removalai-preview-(1).png", 'property');
    updateOrCreateMeta('keywords', meta.keywords || defaultMeta[locale as 'en' | 'ar'].keywords);

    // Schema.org LD+JSON
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Alwaad Maintenance Services",
      "image": "https://i.postimg.cc/FsFpTytt/55bacbb3-1554-4123-b429-d53ae9d83c1f-removalai-preview-(1).png",
      "url": window.location.origin,
      "telephone": "+974 50042274",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Doha",
        "addressLocality": "Doha",
        "addressCountry": "QA"
      }
    };

    let schemaTag = document.getElementById('seo-schema');
    if (!schemaTag) {
      schemaTag = document.createElement('script');
      schemaTag.id = 'seo-schema';
      schemaTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaTag);
    }
    schemaTag.textContent = JSON.stringify(schema);
  }, [locale, location.pathname]);

  return null;
}
