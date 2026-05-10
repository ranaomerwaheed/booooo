export type Locale = 'en' | 'ar';

export interface TranslationModel {
  nav: {
    home: string;
    services: string;
    products: string;
    packages: string;
    about: string;
    blog: string;
    gallery: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta_whatsapp: string;
    cta_call: string;
    cta_inspection: string;
  };
  common: {
    learnMore: string;
    contactUs: string;
    whatsappInquiry: string;
    viewAll: string;
    emergency: string;
    hours: string;
    address: string;
  };
}

export const translations: Record<Locale, TranslationModel> = {
  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'الخدمات',
      products: 'المنتجات',
      packages: 'الباقات',
      about: 'عن الشركة',
      blog: 'المدونة',
      gallery: 'المعرض',
      contact: 'اتصل بنا',
    },
    hero: {
      title: 'أفضل خدمات التكييف والصيانة في قطر',
      subtitle: 'تركيب • فك • صيانة • بيع • تصليح الأجهزة المنزلية',
      cta_whatsapp: 'واتساب الآن',
      cta_call: 'اتصل بنا',
      cta_inspection: 'فحص مجاني',
    },
    common: {
      learnMore: 'اقرأ المزيد',
      contactUs: 'قم بالتواصل معنا',
      whatsappInquiry: 'استفسار عبر واتساب',
      viewAll: 'عرض الكل',
      emergency: 'خدمة الطوارئ',
      hours: 'ساعات العمل',
      address: 'الدوحة، قطر',
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      products: 'Products',
      packages: 'Packages',
      about: 'About',
      blog: 'Blog',
      gallery: 'Gallery',
      contact: 'Contact',
    },
    hero: {
      title: 'Professional AC & Appliance Services in Qatar',
      subtitle: 'Installation • Repair • Maintenance • Sales • Appliance Solutions',
      cta_whatsapp: 'WhatsApp Now',
      cta_call: 'Call Now',
      cta_inspection: 'Free Inspection',
    },
    common: {
      learnMore: 'Learn More',
      contactUs: 'Contact Us',
      whatsappInquiry: 'WhatsApp Inquiry',
      viewAll: 'View All',
      emergency: 'Emergency Support',
      hours: 'Working Hours',
      address: 'Doha, Qatar',
    },
  },
};
