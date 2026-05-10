/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'ar' | 'en';

export interface Product {
  id: string;
  name: { ar: string; en: string };
  price: number;
  features: { ar: string[]; en: string[] };
  type: 'Split' | 'Window' | 'Tower';
  image: string;
  description: { ar: string; en: string };
}

export interface Service {
  id: string;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  icon: string;
  details: { ar: string[]; en: string[] };
}

export interface MaintenancePlan {
  id: string;
  name: { ar: string; en: string };
  price: string;
  features: { ar: string[]; en: string[] };
  color: string;
}

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/share/179A4gnSWJ/',
  instagram: 'https://www.instagram.com/all_waad_service_qt',
  whatsapp: '+97450042274'
};

export const PRODUCTS: Product[] = [
  {
    id: 'split-1',
    name: { ar: 'مكيف سبليت جري إنفرتر 1.5 طن', en: 'Gree Inverter Split AC 1.5 Ton' },
    price: 1850,
    description: { ar: 'أداء تبريد قوي مع تقنية الإنفرتر الموفرة للطاقة.', en: 'Powerful cooling performance with energy-saving inverter technology.' },
    features: {
      ar: ['توفير طاقة حتى 60%', 'تبريد توربو', 'فلتر بلازما لتنقية الهواء'],
      en: ['Up to 60% Energy Saving', 'Turbo Cooling', 'Plasma Air Purifying Filter'],
    },
    type: 'Split',
    image: 'https://tse2.mm.bing.net/th/id/OIP.C7_tnfUKlzguPj73oul_dgHaNy?rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    id: 'split-2',
    name: { ar: 'مكيف ميتسوبيشي دايموند 2 طن', en: 'Mitsubishi Diamond Split 2 Ton' },
    price: 3450,
    description: { ar: 'أعلى معايير الجودة اليابانية مع تبريد صامت تماماً.', en: 'Highest Japanese quality standards with whisper-quiet cooling.' },
    features: {
      ar: ['صناعة يابانية أصلية', 'مستشعر حركة ذكي', 'تنظيف ذاتي آلي'],
      en: ['Authentic Japanese Build', 'Smart Motion Sensor', 'Automatic Self-Cleaning'],
    },
    type: 'Split',
    image: 'https://5.imimg.com/data5/SELLER/PDFImage/2023/6/316732525/LJ/SU/JW/11095590/2-ton-mitsubishi-split-air-conditioner--1000x1000.png',
  },
  {
    id: 'split-3',
    name: { ar: 'مكيف كارير أوبتيماكس 2.5 طن', en: 'Carrier Optimax Split 2.5 Ton' },
    price: 2950,
    description: { ar: 'قوة تبريد جبارة مصممة لأقسى درجات الحرارة في قطر.', en: 'Immense cooling power designed for Qatar\'s extreme desert heat.' },
    features: {
      ar: ['تبريد محيطي شديد', 'حماية ضد الصدأ والملوحة', 'شاشة رقمية مخفية'],
      en: ['Extreme Ambient Cooling', 'Anti-Corrosion Protection', 'Hidden Digital Display'],
    },
    type: 'Split',
    image: '',
  },
  {
    id: 'window-1',
    name: { ar: 'مكيف شباك إل جي 2 طن', en: 'LG Window AC 2 Ton' },
    price: 1450,
    description: { ar: 'متانة عالية وتبريد فعال للغرف المتوسطة والكبيرة.', en: 'High durability and effective cooling for medium to large rooms.' },
    features: {
      ar: ['كمبروسر دوار مزدوج', 'تبريد سريع ومستقر', 'سهل الصيانة'],
      en: ['Dual Inverter Compressor', 'Fast & Stable Cooling', 'Easy to Maintain'],
    },
    type: 'Window',
    image: 'https://tse1.mm.bing.net/th/id/OIP.mibSwSxv68_8X08oiMDqOAHaKd?rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    id: 'window-2',
    name: { ar: 'مكيف شباك ميديا 1.5 طن', en: 'Midea Window AC 1.5 Ton' },
    price: 1250,
    description: { ar: 'حل اقتصادي وعملي لغرف النوم والمكاتب الصغيرة.', en: 'Economical and practical solution for bedrooms and small offices.' },
    features: {
      ar: ['توزيع هواء رباعي الاتجاهات', 'تشغيل هادئ', 'مؤقت تشغيل ذكي'],
      en: ['4-Way Air Distribution', 'Quiet Operation', 'Smart Sleep Timer'],
    },
    type: 'Window',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'tower-1',
    name: { ar: 'مكيف عمودي دايجين 4 طن', en: 'Daikin Tower AC 4 Ton' },
    price: 5200,
    description: { ar: 'مكيف عمودي احترافي للمساحات الشاسعة والمجالس الفخمة.', en: 'Professional tower AC for vast spaces and luxury Majlis.' },
    features: {
      ar: ['تدفق هواء طويل المدى', 'تحكم ذكي دقيق', 'تصميم انسيابي فاخر'],
      en: ['Long-Distance Airflow', 'Precise Smart Control', 'Luxury Slim Design'],
    },
    type: 'Tower',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'tower-2',
    name: { ar: 'مكيف عمودي هايير 3 طن', en: 'Haier Tower AC 3 Ton' },
    price: 3800,
    description: { ar: 'مثالي للمجالس الواسعة والصالات التجارية.', en: 'Ideal for spacious Majlis and commercial halls.' },
    features: {
      ar: ['توزيع هواء ثلاثي الأبعاد', 'شاشة عرض LED', 'تصميم عصري وجذاب'],
      en: ['3D Air Distribution', 'LED Display Screen', 'Modern Attractive Design'],
    },
    type: 'Tower',
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=600',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'ac-sales',
    title: { ar: 'بيع وتركيب المكيفات', en: 'AC Sales & Installation' },
    description: { ar: 'نقدم لك أفضل ماركات المكيفات مع خدمة تركيب احترافية تضمن لك أفضل أداء.', en: 'We offer the best AC brands with professional installation service ensuring top performance.' },
    icon: 'Snowflake',
    details: {
      ar: ['استشارات لاختيار الجهاز المناسب', 'تركيب دقيق للوحدات الداخلية والخارجية', 'اتقان في تمديد النحاس'],
      en: ['Consultation for choosing right unit', 'Precise indoor/outdoor installation', 'Professional copper piping'],
    }
  },
  {
    id: 'ac-maintenance',
    title: { ar: 'صيانة المكيفات الدورية', en: 'Regular AC Maintenance' },
    description: { ar: 'خدمات تنظيف وصيانة شاملة لضمان كفاءة التبريد وإطالة عمر الجهاز.', en: 'Comprehensive cleaning and maintenance to ensure cooling efficiency and long life.' },
    icon: 'Wrench',
    details: {
      ar: ['تنظيف الفلاتر والمبخر', 'فحص ضغط الغاز', 'فحص القطع الكهربائية'],
      en: ['Filter & evaporator cleaning', 'Gas pressure checking', 'Electrical parts inspection'],
    }
  },
  {
    id: 'fridge-repair',
    title: { ar: 'تصليح الثلاجات والفريزر', en: 'Fridge & Freezer Repair' },
    description: { ar: 'إصلاح جميع أعطال الثلاجات المنزلية والتجارية بدقة وسرعة.', en: 'Expert repair for domestic and commercial fridges with speed and accuracy.' },
    icon: 'ThermometerSnowflake',
    details: {
      ar: ['إصلاح تسريب الغاز', 'تبديل الكمبروسر', 'إصلاح أعطال الثرموستات'],
      en: ['Gas leak repair', 'Compressor replacement', 'Thermostat fault repair'],
    }
  },
  {
    id: 'washer-repair',
    title: { ar: 'تصليح الغسالات والنشافات', en: 'Washer & Dryer Repair' },
    description: { ar: 'خدمة صيانة فورية للغسالات الأوتوماتيكية والنشافات لضمان عودة عملها.', en: 'Immediate maintenance for automatic washers and dryers to get them running again.' },
    icon: 'Waves',
    details: {
      ar: ['إصلاح مشاكل التصريف', 'تبديل رمان المحرك', 'إصلاح اللوحات الإلكترونية'],
      en: ['Drainage issue repair', 'Motor bearing replacement', 'Mainboard/PCB repair'],
    }
  },
  {
    id: 'oven-repair',
    title: { ar: 'تصليح الأفران والمواقد', en: 'Oven & Stove Repair' },
    description: { ar: 'صيانة وإصلاح أفران الغاز والكهرباء بمختلف أنواعها لضمان سلامتك.', en: 'Maintenance and repair of gas and electric ovens of all types for your safety.' },
    icon: 'Flame',
    details: {
      ar: ['تنظيف العيون النحاسية', 'إصلاح نظام الإشعال', 'تبديل مفاتيح الحرارة'],
      en: ['Copper burner cleaning', 'Ignition system repair', 'Heat switch replacement'],
    }
  }
];

export const TESTIMONIALS = [
  {
    name: { ar: 'أحمد الكواري', en: 'Ahmed Al-Kuwari' },
    text: { ar: 'خدمة سريعة ومحترفة جداً. قاموا بتركيب مكيفات منزلي في وقت قياسي وبجودة عالية.', en: 'Very fast and professional service. They installed my home ACs in record time with high quality.' },
    rating: 5
  },
  {
    name: { ar: 'سارة محمد', en: 'Sarah Mohammed' },
    text: { ar: 'أفضل شركة صيانة تعاملت معها في قطر. الفنيون مهذبون جداً وعملهم دقيق.', en: 'Best maintenance company I have dealt with in Qatar. Technicians are very polite and their work is precise.' },
    rating: 5
  }
];

export const FAQS = [
  {
    q: { ar: 'كم مرة يجب أن أقوم بصيانة المكيف؟', en: 'How often should I maintain my AC?' },
    a: { ar: 'ننصح بصيانة المكيف مرتين سنوياً على الأقل، قبل بداية الصيف وقبل الشتاء.', en: 'We recommend maintenance at least twice a year, before summer starts and before winter.' }
  },
  {
    q: { ar: 'هل تقدمون ضماناً على الإصلاح؟', en: 'Do you provide a warranty on repairs?' },
    a: { ar: 'نعم، نقدم ضماناً على جميع أعمال الإصلاح وقطع الغيار التي نقوم بتركيبها.', en: 'Yes, we provide a warranty on all repair work and the spare parts we install.' }
  }
];

export const WORK_PROCESS = [
  {
    step: "01",
    title: { ar: 'حجز الموعد', en: 'Book Appointment' },
    desc: { ar: 'تواصل معنا عبر الواتساب أو الهاتف لتحديد موعد يناسبك.', en: 'Contact us via WhatsApp or phone to schedule a time that suits you.' }
  },
  {
    step: "02",
    title: { ar: 'الفحص والتشخيص', en: 'Inspection & Diagnosis' },
    desc: { ar: 'يصل فنيونا للموقع ويقومون بفحص الجهاز بدقة لتحديد العطل.', en: 'Our technicians arrive and thoroughly inspect the unit to find the fault.' }
  },
  {
    step: "03",
    title: { ar: 'تقديم التسعيرة', en: 'Transparent Quote' },
    desc: { ar: 'نشرح لك المشكلة ونقدم عرض سعر شفاف قبل البدء في أي عمل.', en: 'We explain the issue and provide a transparent quote before starting any work.' }
  },
  {
    step: "04",
    title: { ar: 'الإصلاح والاختبار', en: 'Repair & Testing' },
    desc: { ar: 'نقوم بالإصلاح باستخدام قطع غيار أصلية ثم نختبر كفاءة التبريد.', en: 'We repair using genuine parts then test the cooling efficiency.' }
  }
];

export const MAINTENANCE_PLANS: MaintenancePlan[] = [
  {
    id: 'silver',
    name: { ar: 'الباقة الفضية', en: 'Silver Package' },
    price: '499',
    color: 'from-gray-300 to-gray-100',
    features: {
      ar: ['زيارتين صيانة سنوية', 'تنظيف الفلاتر', 'فحص الغاز', 'خصم 5% على قطع الغيار'],
      en: ['2 Maintenance Visits/Year', 'Filter Cleaning', 'Gas Check', '5% Spare Parts Discount'],
    },
  },
  {
    id: 'gold',
    name: { ar: 'الباقة الذهبية', en: 'Gold Package' },
    price: '899',
    color: 'from-blue-500 to-blue-200',
    features: {
      ar: ['4 زيارات صيانة سنوية', 'تنظيف كامل للوحدات', 'خصم 15% على قطع الغيار', 'أولوية في حجز المواعيد'],
      en: ['4 Maintenance Visits/Year', 'Full Unit Cleaning', '15% Spare Parts Discount', 'Priority Booking'],
    },
  },
  {
    id: 'platinum',
    name: { ar: 'الباقة البلاتينية', en: 'Platinum Package' },
    price: '1499',
    color: 'from-blue-700 to-blue-400',
    features: {
      ar: ['صيانة غير محدودة', 'أولوية قصوى للطوارئ', 'قطع غيار مختارة مجاناً', 'فحص شامل للأجهزة المنزلية'],
      en: ['Unlimited Maintenance', 'Highest Emergency Priority', 'Selected Free Spare Parts', 'Full Home Appliance Check'],
    },
  },
];
