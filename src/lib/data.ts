export interface Service {
  id: string;
  title_en: string;
  title_ar: string;
  description_en: string;
  description_ar: string;
  longDescription_en: string;
  longDescription_ar: string;
  features_en: string[];
  features_ar: string[];
  icon: string;
  image: string;
}

export const services: Service[] = [
  {
    id: 'ac-install',
    title_en: 'AC Installation',
    title_ar: 'تركيب مكيفات',
    description_en: 'Professional installation for all types of AC units.',
    description_ar: 'تركيب احترافي لجميع أنواع وحدات التكييف.',
    longDescription_en: 'We are the leading AC maintenance company in Qatar, providing precision installation for Split, Window, Central, and Duckless AC systems. Our technicians ensure optimal placement for maximum cooling efficiency and energy savings in the harsh Qatar climate.',
    longDescription_ar: 'نحن الشركة الرائدة في صيانة المكيفات في قطر، نوفر تركيباً دقيقاً لأنظمة التكييف المنفصلة (Split)، والنافذة (Window)، والمركزية. يضمن فنيونا الوضع الأمثل لضمان أداء فعال في مناخ قطر الحار وتوفير الطاقة.',
    features_en: ['Site survey included', 'Professional Bracket installation', 'Copper piping insulation', 'Full System testing'],
    features_ar: ['مسح الموقع متضمن', 'تركيب القواعد باحترافية', 'عزل الأنابيب النحاسية', 'اختبار شامل للنظام'],
    icon: 'Hammer',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'ac-repair',
    title_en: 'AC Repair & Deep Cleaning Doha',
    title_ar: 'تصليح وتنظيف المكيفات الدوحة',
    description_en: 'Fast AC troubleshooting, expert repair, and deep chemical cleaning services across Doha.',
    description_ar: 'أسرع خدمات الكشف عن أعظال التكييف، الإصلاح الخبير، والتنظيف الكيميائي العميق في الدوحة.',
    longDescription_en: 'Get 24/7 expert AC repair and deep cleaning in Doha. We specialize in split, window, and central AC systems. Our deep cleaning service includes coil chemical washing, drainage clearing, and filter sanitization to ensure 100% dust-free air and maximum cooling efficiency in Qatar\'s extreme heat.',
    longDescription_ar: 'احصل على صيانة مكيفات خبيرة وتنظيف عميق على مدار الساعة في الدوحة. متخصصون في أنظمة السبلت والنافذة والمركزية. تشمل خدمة التنظيف العميق غسيل الكويل كيميائياً، تسليك الصرف، وتعقيم الفلاتر لضمان هواء خالي من الغبار بنسبة 100% وأقصى كفاءة تبريد في حرارة قطر الشديدة.',
    features_en: ['Emergency AC repair Qatar', 'Chemical coil deep cleaning', 'Gas leak detection & refill', 'Anti-bacterial sanitization'],
    features_ar: ['تصليح مكيفات طارئ قطر', 'تنظيف كيميائي عميق للكويل', 'كشف تسريب الغاز وإعادة التعبئة', 'تعقيم مضاد للبكتيريا'],
    icon: 'Wrench',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'refrigerator',
    title_en: 'Fridge Repair & Sanitization Qatar',
    title_ar: 'تصليح وتعقيم الثلاجات قطر',
    description_en: 'Specialized refrigerator repair and professional deep cleaning in Qatar for all brands.',
    description_ar: 'متخصصون في تصليح الثلاجات والتعقيم الاحترافي العميق في قطر لجميع الماركات.',
    longDescription_en: 'Premium refrigerator repair and professional deep cleaning in Qatar. We handle cooling deficiency, gas refills, and seal replacements for Samsung, LG, and Whirlpool. Our cleaning service removes odors and bacteria from all compartments, ensuring food safety and appliance longevity.',
    longDescription_ar: 'خدمات متميزة في تصليح الثلاجات والتعقيم العميق في قطر. نتعامل مع نقص التبريد وشحن الغاز واستبدال السدادات لسامسونج وإل جي وويرلبول. خدمتنا في التنظيف تزيل الروائح والبكتيريا من كافة الأجزاء، مما يضمن سلامة الغذاء وإطالة عمر الجهاز.',
    features_en: ['Commercial & Domestic fridge repair', 'Internal deep cleaning & sanitization', 'PCB & Compressor expert fix', '12-Month warranty on parts'],
    features_ar: ['تصليح الثلاجات التجارية والمنزلية', 'تنظيف داخلي عميق وتعقيم', 'إصلاح خبير للوحة والضاغط', 'ضمان 12 شهراً على قطع الغيار'],
    icon: 'Snowflake',
    image: 'https://images.unsplash.com/photo-1571175432230-01c288a6c48a?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'washing-machine',
    title_en: 'Washing Machine Repair Doha',
    title_ar: 'تصليح غسالات الدوحة',
    description_en: 'Swift washing machine fixing in Doha for front & top load.',
    description_ar: 'إصلاح سريع للغسالات في الدوحة (أمامي وعلوي).',
    longDescription_en: 'Most trusted washing machine repair service in Doha. We provide professional diagnostics for all drum and motor issues. 100% genuine spare parts used with on-site fixing.',
    longDescription_ar: 'أكثر خدمة تصليح غسالات ثقة في الدوحة. نوفر تشخيصاً احترافياً لجميع أعطال الحوض والمحرك. نستخدم قطع غيار أصلية 100% مع الإصلاح في موقعك.',
    features_en: ['Drum & Bearing repair', 'Drain pump replacement', 'Industrial washer specialists', 'On-site service'],
    features_ar: ['إصلاح الحوض والرولمان بلي', 'استبدال مضخة التصريف', 'متخصصون في الغسالات الصناعية', 'خدمة منزلية في موقعك'],
    icon: 'RefreshCw',
    image: 'https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?auto=format&fit=crop&q=80&w=800',
  },
];

export const products = [
  {
    id: 'midea-mission-x',
    brand: 'Midea',
    model: 'Mission X Inverter',
    btu: '18,500 BTU',
    energyRating: '5 Star',
    price: '2,400 QAR',
    description_en: 'Advanced inverter technology specifically designed for the high-temperature climate of Qatar. Provides rapid cooling and significant energy savings.',
    description_ar: 'تقنية إنفرتر متطورة مصممة خصيصاً لمناخ قطر شديد الحرارة. توفر تبريداً سريعاً وتوفيراً كبيراً في الطاقة.',
    specs_en: ['Inverter Technology', 'High-Density Dust Filter', 'Super Quiet Operation', 'Self-Cleaning Mode'],
    specs_ar: ['تكنولوجيا الإنفرتر', 'فلتر غبار عالي الكثافة', 'تشغيل فائق الهدوء', 'وضع التنظيف الذاتي'],
    image: 'https://images.unsplash.com/photo-1621905181591-13589b9175d9?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'gree-pular-inverter',
    brand: 'Gree',
    model: 'Pular Eco Inverter',
    btu: '24,000 BTU',
    energyRating: '4 Star',
    price: '3,200 QAR',
    description_en: 'Eco-friendly refrigerant with I-Feel sensor remote for personalized cooling comfort. Features anti-corrosive golden fin coating.',
    description_ar: 'سائل تبريد صديق للبيئة مع جهاز تحكم عن بعد مستشعر I-Feel لراحة تبريد شخصية. يتميز بطلاء الزعانف الذهبي المضاد للتآكل.',
    specs_en: ['Golden Fin Coating', 'I-Feel Remote Control', 'Rapid Cooling Turbo Mod', 'Cold Plasma Filter'],
    specs_ar: ['طلاء الزعانف الذهبي', 'تحكم استشعار ذكي I-Feel', 'وضع التبريد السريع تيربو', 'فلتر بلازما بارد'],
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'samsung-oven-chef',
    brand: 'Samsung',
    model: 'Chef Edition Built-in Oven',
    btu: '75L Capacity',
    energyRating: 'A+',
    price: '1,850 QAR',
    description_en: 'Professional-grade built-in oven with dual fan technology for even cooking. Easy-clean ceramic interior and smart touch controls.',
    description_ar: 'فرن بيلت-إن بمستوى احترافي مع تقنية المروحة المزدوجة للطهي المتساوي. تصميم داخلي من السيراميك سهل التنظيف وعناصر تحكم ذكية تعمل باللمس.',
    specs_en: ['Dual Fan Technology', 'Ceramic Inside', 'Smart Touch Control', 'Self-Cleaning Catalytic'],
    specs_ar: ['تقنية المروحة المزدوجة', 'سيراميك داخلي', 'تحكم ذكي باللمس', 'تنظيف ذاتي تحفيزي'],
    image: 'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'lg-fridge-instaview',
    brand: 'LG',
    model: 'InstaView Door-in-Door',
    btu: '650L Capacity',
    energyRating: 'A+++',
    price: '5,900 QAR',
    description_en: 'Knock twice and see inside without losing cooling. Features Linear Inverter Compressor for 32% energy savings.',
    description_ar: 'اطرق مرتين وشاهد ما بداخل الثلاجة دون فقدان التبريد. تتميز بضاغط إنفرتر خطي لتوفير الطاقة بنسبة 32%.',
    specs_en: ['InstaView Glass Panel', 'Linear Cooling', 'Hygiene Fresh+ Filter', 'Smart ThinQ WiFi'],
    specs_ar: ['لوحة InstaView زجاجية', 'تبريد خطي', 'فلتر Hygiene Fresh+', 'اتصال WiFi ذكي'],
    image: 'https://images.unsplash.com/photo-1571175432230-01c288a6c48a?auto=format&fit=crop&q=80&w=800',
  }
];

export const blogPosts = [
  {
    id: 1,
    title_en: 'Doha AC Maintenance: Why Deep Cleaning Matters',
    title_ar: 'صيانة المكيفات في الدوحة: لماذا التنظيف العميق مهم؟',
    excerpt_en: 'In the dusty environment of Qatar, standard filter cleaning isn\'t enough. Discover why chemical deep cleaning is essential for your health and AC longevity.',
    excerpt_ar: 'في بيئة قطر المليئة بالغبار، تنظيف الفلاتر العادي لا يكفي. اكتشف لماذا التنظيف الكيميائي العميق ضروري لصحتك وطول عمر المكيف.',
    content_en: 'The extreme temperatures in Doha can put immense pressure on your HVAC system. To maintain 100% efficiency, we recommend professional deep cleaning twice a year. Regular filter cleaning by the user is also critical. Our engineering team explains how dust accumulation in Qatar can lead to compressor failure and high electricity bills if not addressed promptly.',
    content_ar: 'درجات الحرارة القصوى في الدوحة يمكن أن تضع ضغطاً هائلاً على نظام التكييف الخاص بك. من أجل الحفاظ على كفاءة 100%، نوصي بالتنظيف العميق المحترف مرتين سنوياً. كما أن تنظيف الفلاتر بانتظام من قبل المستخدم أمر بالغ الأهمية. يوضح فريقنا الهندسي كيف يمكن لتراكم الغبار في قطر أن يؤدي إلى تعطل الضاغط وارتفاع فواتير الكهرباء إذا لم يتم معالجته فوراً.',
    date: '2024-03-24',
    author: 'Eng. Ahmed',
    category_en: 'Maintenance Guide',
    category_ar: 'دليل الصيانة',
    image: 'https://images.unsplash.com/photo-1599394022918-6c276a570aba?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    title_en: 'How to Choose the Right AC Unit for Your Villa',
    title_ar: 'كيفية اختيار وحدة التكييف المناسبة لفيلاك',
    excerpt_en: 'Choosing between Split, Ducted, or Central AC in Qatar? Our engineers provide a comprehensive guide on tonnage and energy ratings.',
    excerpt_ar: 'الاختيار بين مكيفات السبلت أو الدكت أو المركزي في قطر؟ مهندسونا يقدمون دليلاً شاملاً عن سعة التبريد وتقييمات الطاقة.',
    content_en: 'Selecting the right tonnage is crucial. Under-sized units work too hard, while over-sized units cycle too often. In Qatar, we factor in window orientation and wall insulation. Always look for inverter-based systems for modern villas to reduce long-term costs.',
    content_ar: 'اختيار سعة التبريد الصحيحة أمر بالغ الأهمية. الوحدات صغيرة الحجم تعمل بجهد زائد، بينما الوحدات كبيرة الحجم تفصل كثيراً. في قطر، نأخذ في الاعتبار اتجاه النوافذ وعزل الجدران. ابحث دائماً عن الأنظمة المعتمدة على الإنفرتر للفيلات الحديثة لتقليل التكاليف على المدى الطويل.',
    date: '2024-03-20',
    author: 'Eng. Faisal',
    category_en: 'Engineering Advice',
    category_ar: 'نصائح هندسية',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    title_en: 'Washing Machine Errors: When to Call a Pro?',
    title_ar: 'أخطاء الغسالات: متى يجب الاتصال بالمحترفين؟',
    excerpt_en: 'E1, OE, or LE errors flashing on your display? Learn common washing machine codes in Qatar and how to troubleshoot them.',
    excerpt_ar: 'هل تظهر أخطاء E1 أو OE أو LE على شاشتك؟ تعرف على أكواد الغسالات الشائعة في قطر وكيفية إصلاحها.',
    content_en: 'Modern washing machines are complex. While some draining issues can be fixed by cleaning the pump filter, electronic board issues require certified tools. We cover top tips for maintaining Samsung and LG washing machines in the Qatar region.',
    content_ar: 'الغسالات الحديثة معقدة. في حين أن بعض مشاكل التصريف يمكن حلها بتنظيف فلتر المضخة، إلا أن مشاكل اللوحة الإلكترونية تتطلب أدوات معتمدة. نغطي أهم النصائح لصيانة غسالات سامسونج وإل جي في منطقة قطر.',
    date: '2024-03-15',
    author: 'Eng. Omar',
    category_en: 'Home Care',
    category_ar: 'العناية بالمنزل',
    image: 'https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?auto=format&fit=crop&q=80&w=800',
  }
];

export const packages = [
  {
    id: 'bronze',
    name_en: 'Bronze - Essential Care',
    name_ar: 'البرونزية - العناية الأساسية',
    price: '299 QAR',
    description_en: 'Perfect for standard apartment units. Includes professional visual inspection and filter sanitization.',
    description_ar: 'مثالية لشقق السكن العادية. تشمل الفحص البصري الاحترافي وتعقيم الفلاتر.',
    features_en: ['Single Unit Service', 'Bacterial Filter Cleaning', 'Gas Pressure Analysis', 'Electrical Connection Check'],
    features_ar: ['خدمة وحدة واحدة', 'تنظيف الفلاتر من البكتيريا', 'تحليل ضغط الغاز', 'فحص التوصيلات الكهربائية'],
    color: 'from-orange-700/10 to-orange-400/10',
    accentColor: 'border-orange-500/30',
  },
  {
    id: 'silver',
    name_en: 'Silver - Deep Performance',
    name_ar: 'الفضية - الأداء العميق',
    price: '599 QAR',
    description_en: 'Recommended for families. Includes deep chemical cleaning to ensure healthy indoor air quality.',
    description_ar: 'موصى بها للعائلات. تتضمن تنظيفاً كيميائياً عميقاً لضمان جودة هواء صحي في الداخل.',
    features_en: ['Up to 3 Units', 'Chemical Deep Coil Cleaning', 'Gas Topping (Up to 15%)', 'Condensate Drain Clearing', 'Priority Scheduling'],
    features_ar: ['حتى 3 وحدات', 'تنظيف كيميائي عميق للكويل', 'إكمال الغاز (حتى 15%)', 'تسليك مجرى التصريف', 'جدولة ذات أولوية'],
    color: 'from-slate-400/10 to-slate-200/10',
    accentColor: 'border-slate-500/30',
  },
  {
    id: 'gold',
    name_en: 'Gold - Engineering Shield',
    name_ar: 'الذهبية - الدرع الهندسي',
    price: '999 QAR',
    description_en: 'Complete peace of mind for villas and high-end residences. 24/7 unlimited emergency support.',
    description_ar: 'راحة بال تامة للفلل والمساكن الفاخرة. دعم طوارئ غير محدود على مدار الساعة.',
    features_en: ['Unlimited HVAC Units', '2-Hour Response Time', 'Full Year Service Guarantee', 'Zero Charge Emergency Calls', 'Dedicated Engineering Manager'],
    features_ar: ['وحدات تكييف غير محدودة', 'وقت استجابة في ساعتين', 'ضمان الخدمة لمدة عام كامل', 'مكالمات طوارئ بدون رسوم', 'مدير هندسي مخصص'],
    color: 'from-yellow-600/10 to-yellow-300/10',
    accentColor: 'border-yellow-500/30',
  }
];
