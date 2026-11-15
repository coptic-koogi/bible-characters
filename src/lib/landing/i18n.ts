/**
 * Landing-page copy — four complete languages (ar · en · fr · es).
 * Marketing copy is adapted from the app's verified store listings
 * (store_package/store_texts) — every figure is real.
 */

export type Lang = 'ar' | 'en' | 'fr' | 'es';

export const LANGS: { code: Lang; native: string; short: string; dir: 'rtl' | 'ltr' }[] = [
  { code: 'ar', native: 'العربية', short: 'ع', dir: 'rtl' },
  { code: 'en', native: 'English', short: 'EN', dir: 'ltr' },
  { code: 'fr', native: 'Français', short: 'FR', dir: 'ltr' },
  { code: 'es', native: 'Español', short: 'ES', dir: 'ltr' },
];

export interface FeatureItem {
  icon: string;
  title: string;
  text: string;
}

export interface AudienceItem {
  icon: string;
  title: string;
  text: string;
}

export interface LandingCopy {
  htmlLang: string;
  meta: { title: string; description: string };
  nav: { demo: string; features: string; screenshots: string; download: string; github: string };
  common: {
    language: string;
    themeToLight: string;
    themeToDark: string;
    skip: string;
    menu: string;
    close: string;
    playStore: string;
    appStore: string;
    appStoreSoon: string;
    soon: string;
    free: string;
  };
  hero: {
    chip: string;
    title: string;
    tagline: string;
    sub: string;
    ctaDemo: string;
    chips: { offline: string; langs: string; verified: string };
    stats: { profiles: string; books: string; categories: string; symbols: string };
    verifiedNote: string;
    phoneCaption: string;
    scroll: string;
  };
  marquee: { label: string };
  demo: {
    eyebrow: string;
    title: string;
    subtitle: string;
    liveBadge: string;
    searchPlaceholder: string;
    clearSearch: string;
    filterAll: string;
    filterOT: string;
    filterNT: string;
    results: string;
    noResults: string;
    noResultsHint: string;
    openProfile: string;
    refsCount: string;
    detail: {
      about: string;
      meaning: string;
      era: string;
      firstMention: string;
      scene: string;
      events: string;
      lessons: string;
      legacy: string;
      family: string;
      father: string;
      mother: string;
      spouse: string;
      children: string;
      siblings: string;
      ot: string;
      nt: string;
      refsNote: string;
      ctaFull: string;
      categories: string;
    };
    footnote: string;
  };
  features: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: FeatureItem[];
  };
  shots: {
    eyebrow: string;
    title: string;
    subtitle: string;
    captions: string[];
    hint: string;
    prev: string;
    next: string;
  };
  christ: {
    eyebrow: string;
    title: string;
    text: string;
    chips: string[];
    cta: string;
  };
  symbols: {
    eyebrow: string;
    title: string;
    text: string;
    cta: string;
    unit: string;
  };
  audience: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: AudienceItem[];
  };
  privacy: {
    eyebrow: string;
    title: string;
    subtitle: string;
    points: { icon: string; title: string; text: string }[];
  };
  download: {
    eyebrow: string;
    title: string;
    subtitle: string;
    note: string;
    platforms: string;
  };
  footer: {
    tagline: string;
    appCol: string;
    links: { demo: string; features: string; screenshots: string; download: string };
    resources: string;
    github: string;
    privacy: string;
    version: string;
    rights: string;
    crafted: string;
  };
}

export const APP_NAME: Record<Lang, string> = {
  ar: 'موسوعة شخصيات الكتاب المقدس',
  en: 'Bible Characters Encyclopedia',
  fr: "L'Encyclopédie des Personnages de la Bible",
  es: 'Enciclopedia de Personajes Bíblicos',
};

export const COPY: Record<Lang, LandingCopy> = {
  /* ------------------------------------------------------------------ */
  /* العربية                                                              */
  /* ------------------------------------------------------------------ */
  ar: {
    htmlLang: 'ar',
    meta: {
      title: 'موسوعة شخصيات الكتاب المقدس — 3,026 شخصية بأربع لغات',
      description:
        'أضخم موسوعة كتابية تفاعلية تعمل دون اتصال: 3,026 شخصية ورمزاً بسِيَر كاملة موثَّقة، بأربع لغات (العربية · English · Français · Español). جرّب عيّنة حقيقية من قاعدة البيانات.',
    },
    nav: { demo: 'الديمو', features: 'المزايا', screenshots: 'اللقطات', download: 'التنزيل', github: 'GitHub' },
    common: {
      language: 'تغيير اللغة',
      themeToLight: 'الوضع الفاتح',
      themeToDark: 'الوضع الليلي',
      skip: 'تخطَّ إلى المحتوى',
      menu: 'القائمة',
      close: 'إغلاق',
      playStore: 'احصل عليه من Google Play',
      appStore: 'حمّله من App Store',
      appStoreSoon: 'قريباً على آب ستور',
      soon: 'قريباً',
      free: 'مجاني',
    },
    hero: {
      chip: 'الإصدار 14.4 — المراجعة الذهبية',
      title: 'موسوعة شخصيات الكتاب المقدس',
      tagline: 'كل شخصية وردت في الكتاب المقدس… قصتها كاملة بين يديك',
      sub: 'من آدم في الفردوس إلى سفر الرؤيا: 3,026 شخصية ورمزاً بسيرة موثَّقة كاملة — الهوية والنسب والعصر، الأحداث والدروس والإرث، وكل حدث مقترن بسفره وفصله وآيته. بأربع لغات، وتعمل بالكامل دون اتصال.',
      ctaDemo: 'جرّب الديمو الآن',
      chips: { offline: 'يعمل دون إنترنت 100%', langs: '4 لغات بضغطة واحدة', verified: 'أرقام موثَّقة من قاعدة البيانات' },
      stats: { profiles: 'شخصية ورمزاً', books: 'سفراً موثَّقاً', categories: 'فئة', symbols: 'رمزاً كتابياً' },
      verifiedNote: 'جميع الأرقام مستخرجة من قاعدة بيانات التطبيق الفعلية',
      phoneCaption: 'واجهة التطبيق',
      scroll: 'اكتشف المزيد',
    },
    marquee: { label: 'الأسفار الموثَّقة في الموسوعة' },
    demo: {
      eyebrow: 'عيّنة حقيقية من قاعدة البيانات',
      title: 'جرّب الموسوعة بنفسك',
      subtitle: 'ليست صوراً ثابتة — تصفَّح 43 من أشهر الشخصيات ببياناتها الحقيقية من التطبيق: ابحث، صفِّ بحسب الفئة والعهد، وافتح السيرة الكاملة.',
      liveBadge: 'بيانات حقيقية · {n} من 3,026',
      searchPlaceholder: 'ابحث بالاسم أو اللقب… موسى، داود، بولس…',
      clearSearch: 'مسح البحث',
      filterAll: 'الكل',
      filterOT: 'العهد القديم',
      filterNT: 'العهد الجديد',
      results: '{n} نتيجة',
      noResults: 'لا توجد نتائج مطابقة في العيّنة',
      noResultsHint: 'جرّب اسماً آخر أو أزل المرشِّحات — التطبيق الكامل يضم 3,026 شخصية ورمزاً.',
      openProfile: 'افتح السيرة',
      refsCount: '{n} مرجعاً كتابياً',
      detail: {
        about: 'نبذة',
        meaning: 'معنى الاسم',
        era: 'العصر والتاريخ',
        firstMention: 'أول ذكر',
        scene: 'المشهد المميَّز',
        events: 'أحداث بارزة',
        lessons: 'دروس مستفادة',
        legacy: 'الإرث',
        family: 'العائلة',
        father: 'الأب',
        mother: 'الأم',
        spouse: 'الزوجة',
        children: 'الأبناء',
        siblings: 'الأشقاء',
        ot: 'العهد القديم',
        nt: 'العهد الجديد',
        refsNote: 'مذكور في {refs} موضعاً عبر {books} سفراً في قاعدة بيانات التطبيق',
        ctaFull: 'حمّل التطبيق مجاناً واقرأ السيرة كاملة',
        categories: 'الفئات',
      },
      footnote: 'في التطبيق الكامل: السيرة الكاملة بكل أقسامها، شجرة العائلة التفاعلية، القراءة الصوتية المتزامنة، المساعد الذكي، شخصية اليوم — كل ذلك دون اتصال.',
    },
    features: {
      eyebrow: 'المزايا',
      title: 'موسوعة كاملة… بين يديك',
      subtitle: 'كل ما تحتاجه لدراسة الكتاب المقدس وتدريسه — في تطبيق واحد يعمل في أي مكان.',
      items: [
        { icon: 'bot', title: 'مساعد ذكي محلي', text: 'يعمل دون إنترنت ويرافقك في كل شاشة: اسأله «من هو؟»، قارن بين شخصيتين، أو اطلب قائمة الملوك والأنبياء — ويجيبك من قاعدة البيانات نفسها.' },
        { icon: 'volume', title: 'قراءة صوتية متزامنة', text: 'استمع لسِيَر الآباء بأربع لغات مع تمييز متزامن للكلمات، مشغّل عائم، ومؤقت نوم، وإعدادات إتاحة كاملة — أغمض عينيك واستمع.' },
        { icon: 'palette', title: 'محرك مشاهد بصري فريد', text: 'لكل شخصية ورمز مشهده المرئي المؤلَّف بعناية، مع مئات المشاهد المنسَّقة يدوياً لأعظم القصص: الفلك، عبور البحر، جُبّ دانيال…' },
        { icon: 'tree', title: 'شجرة عائلة تفاعلية', text: '15 بيت نسب موثَّقاً يربط 307 أعضاء عبر عمق يصل إلى 9 أجيال — من بيت آدم إلى بيت داود (69 عضواً) والعائلة المقدسة.' },
        { icon: 'zap', title: 'بحث ذكي فوري', text: 'فوق فهرس يضم أكثر من 83,000 مدخل — نتائج لحظية في الأسماء والألقاب والأوصاف والفئات أثناء الكتابة.' },
        { icon: 'library', title: 'مكتبتك الشخصية', text: 'مفضلة وعلامات مرجعية ومجلدات ووسوم وملاحظات — مع حذف ناعم قابل للتراجع، ونسخ احتياطي واستعادة بملف واحد بين أجهزتك.' },
        { icon: 'cross', title: 'قسم السيد المسيح الكامل', text: '23 قسماً موثَّقاً من التنبؤات إلى المجيء الثاني: الميلاد والتجسد، الرحلات والمعجزات والأمثال، أقواله السبعة، أسبوع الآلام، القيامة والصعود.' },
        { icon: 'flame', title: 'الرموز الكتابية', text: '103 رموز في 8 مجموعات: رموز الرؤيا والسماء، ورموز المسيح والكنيسة، وآلهة الأمم، وأرواح الظلمة — كل رمز بدلالته اللاهوتية.' },
        { icon: 'calendar', title: 'شخصية اليوم', text: 'تقويم قبطي قابل للتخصيص مع أعياد السنكسار (الميلاد، الغطاس…) وإشعار يومي لطيف — شخصية جديدة كل يوم.' },
        { icon: 'phone', title: 'ودجات واختصارات', text: 'ودجات للشاشة الرئيسية: شخصية اليوم، ومتابعة القراءة من حيث توقفت، والمفضلة — مع روابط عميقة تقفز مباشرة لأي شخصية.' },
        { icon: 'organize', title: 'تنظيم لا مثيل له', text: '65 فئة و15 حقبة زمنية، وفهارس جاهزة: الرسل، التلاميذ، النساء، غير المسماة، الترتيب الكتابي والزمني، وحسب السفر والفئة.' },
        { icon: 'moon', title: '11 ثيماً و10 خطوط', text: 'ثيمات إبداعية فاتحة وداكنة ووضع ليلي صارم، مع 10 خطوط عربية مدمجة بعناية — اقرأ بالشكل الذي تحبه عيناك.' },
      ],
    },
    shots: {
      eyebrow: 'من داخل التطبيق',
      title: 'جولة باللقطات',
      subtitle: 'لقطات حقيقية من التطبيق — تتبدل تلقائياً تبعاً للغة التي تتصفح بها.',
      captions: ['الموسوعة الرئيسية', 'مشاهد مصوَّرة', 'سِيَر كاملة', 'قسم السيد المسيح', 'شجرة العائلة', 'بحث ذكي', 'المساعد الذكي', 'الوضع الليلي'],
      hint: 'اسحب أو استخدم الأسهم للاستعراض',
      prev: 'السابق',
      next: 'التالي',
    },
    christ: {
      eyebrow: 'قسم متكامل',
      title: 'السيد المسيح — 23 قسماً موثَّقاً',
      text: 'من نبوءات العهد القديم إلى المجيء الثاني: التجسد والميلاد، الرحلات والمعجزات والأمثال، أقواله السبعة من على الصليب، أسبوع الآلام، القيامة والظهورات والصعود، وحضوره في كل أسفار الكتاب.',
      chips: ['النبوءات', 'الميلاد والتجسد', 'المعجزات', 'الأمثال', 'أقواله السبعة', 'أسبوع الآلام', 'القيامة', 'الصعود'],
      cta: 'اكتشف القسم كاملاً داخل التطبيق',
    },
    symbols: {
      eyebrow: 'قسم الرموز',
      title: '103 رموز في 8 مجموعات',
      text: 'قسم خاص بالشخصيات والرموز الإعلانية والنبوية والتشبيهية — من التنين الأحمر وبابل العظيمة إلى الحية النحاسية والعذراء ابنة بابل — كل رمز بمعناه ودلالته اللاهوتية.',
      cta: 'استكشف الرموز داخل التطبيق',
      unit: 'رمزاً',
    },
    audience: {
      eyebrow: 'لمن؟',
      title: 'تطبيق لكل قارئ للكتاب المقدس',
      subtitle: 'من الفضول اليومي إلى البحث اللاهوتي العميق.',
      items: [
        { icon: 'cap', title: 'طلبة مدارس الأحد والمعاهد', text: 'مرجع جاهز لكل بحث وواجب ودرس — بمرجع كتابي لكل حدث.' },
        { icon: 'book', title: 'الخدام والمُعدّون للعظات', text: 'مادة موثَّقة بين يديك: سيرة، وأحداث، ودروس، وأقوال، جاهزة للاقتباس.' },
        { icon: 'users', title: 'العائلات في السهرات', text: 'قصص مشوّقة تحبها العائلة كلها — مع مشاهد مصوَّرة تُروى بها الحكايات.' },
        { icon: 'search', title: 'كل قارئ يسأل «من هذا؟»', text: 'عند كل اسم يمرّ في قراءتك اليومية — إجابة كاملة على بُعد لمسة واحدة.' },
      ],
    },
    privacy: {
      eyebrow: 'خصوصيتك',
      title: 'خصوصيتك خطٌّ أحمر',
      subtitle: 'صُمِّم التطبيق ليعمل على جهازك وحدك — لا شيء غير ذلك.',
      points: [
        { icon: 'shield', title: 'بلا حساب ولا تتبع', text: 'لا تسجيل، لا جمع بيانات، لا تتبع — كل بياناتك تعيش على جهازك وحدك.' },
        { icon: 'wifi', title: 'دون اتصال 100%', text: 'المحتوى والفهارس والبحث والقراءة الصوتية والمساعد الذكي — كل شيء يعمل على جهازك، في الكنيسة والطائرة وأي مكان.' },
        { icon: 'badge', title: 'شراء واحد، للأبد', text: 'منتج واحد فقط: إزالة الإعلانات نهائياً — لا اشتراكات ولا دفع متكرر أبداً.' },
      ],
    },
    download: {
      eyebrow: 'ابدأ الآن',
      title: '3,026 قصة موثَّقة تنتظر أن تُقرأ',
      subtitle: 'كاملة، دقيقة، بأربع لغات، وتعمل في أي مكان دون اتصال.',
      note: 'التنزيل مجاني · يدعم العربية والإنجليزية والفرنسية والإسبانية',
      platforms: 'متوفر لأندرويد و iOS',
    },
    footer: {
      tagline: 'أضخم موسوعة كتابية تفاعلية — تعمل بالكامل دون اتصال.',
      appCol: 'الصفحة',
      links: { demo: 'الديمو', features: 'المزايا', screenshots: 'اللقطات', download: 'التنزيل' },
      resources: 'مصادر',
      github: 'مستودع GitHub',
      privacy: 'الخصوصية',
      version: 'الإصدار 14.4.0',
      rights: '© 2026 موسوعة شخصيات الكتاب المقدس — جميع الحقوق محفوظة',
      crafted: 'صُنعت بعناية فائقة لتسبيح اسم الله',
    },
  },

  /* ------------------------------------------------------------------ */
  /* English                                                             */
  /* ------------------------------------------------------------------ */
  en: {
    htmlLang: 'en',
    meta: {
      title: 'Bible Characters Encyclopedia — 3,026 profiles in four languages',
      description:
        'The largest fully-offline Bible encyclopedia of people: 3,026 characters & symbols with complete documented profiles in four languages (العربية · English · Français · Español). Try a real sample of the database.',
    },
    nav: { demo: 'Demo', features: 'Features', screenshots: 'Screenshots', download: 'Download', github: 'GitHub' },
    common: {
      language: 'Change language',
      themeToLight: 'Light mode',
      themeToDark: 'Night mode',
      skip: 'Skip to content',
      menu: 'Menu',
      close: 'Close',
      playStore: 'Get it on Google Play',
      appStore: 'Download on the App Store',
      appStoreSoon: 'Coming soon to the App Store',
      soon: 'Coming soon',
      free: 'Free',
    },
    hero: {
      chip: 'v14.4 — The Golden Review',
      title: 'Bible Characters Encyclopedia',
      tagline: 'Every person in the Bible — their complete story, in your hands',
      sub: 'From Adam in Eden to Revelation: 3,026 characters & symbols with complete documented profiles — identity, lineage and era, events, lessons and legacy — every event cited by book, chapter and verse. In four languages, fully offline.',
      ctaDemo: 'Try the live demo',
      chips: { offline: '100% offline', langs: '4 languages, one tap', verified: 'Figures verified from the database' },
      stats: { profiles: 'characters & symbols', books: 'documented books', categories: 'categories', symbols: 'biblical symbols' },
      verifiedNote: 'Every figure is drawn from the app’s actual database',
      phoneCaption: 'App interface',
      scroll: 'Discover more',
    },
    marquee: { label: 'Books documented in the encyclopedia' },
    demo: {
      eyebrow: 'A real sample of the database',
      title: 'Try the encyclopedia yourself',
      subtitle: 'Not static screenshots — browse 43 of the most famous characters with their real data from the app: search, filter by category and testament, and open full profiles.',
      liveBadge: 'Real data · {n} of 3,026',
      searchPlaceholder: 'Search by name or epithet… Moses, David, Paul…',
      clearSearch: 'Clear search',
      filterAll: 'All',
      filterOT: 'Old Testament',
      filterNT: 'New Testament',
      results: '{n} results',
      noResults: 'No matching results in the sample',
      noResultsHint: 'Try another name or clear the filters — the full app holds 3,026 characters & symbols.',
      openProfile: 'Open profile',
      refsCount: '{n} scripture references',
      detail: {
        about: 'Overview',
        meaning: 'Name meaning',
        era: 'Era & dating',
        firstMention: 'First mention',
        scene: 'Featured scene',
        events: 'Key events',
        lessons: 'Lessons',
        legacy: 'Legacy',
        family: 'Family',
        father: 'Father',
        mother: 'Mother',
        spouse: 'Spouse',
        children: 'Children',
        siblings: 'Siblings',
        ot: 'Old Testament',
        nt: 'New Testament',
        refsNote: 'Cited in {refs} places across {books} books of the app database',
        ctaFull: 'Get the app free and read the full profile',
        categories: 'Categories',
      },
      footnote: 'In the full app: the complete profile, the interactive family tree, synchronized text-to-speech, the AI assistant, Character of the Day — all offline.',
    },
    features: {
      eyebrow: 'Features',
      title: 'A complete encyclopedia, in your hands',
      subtitle: 'Everything you need to study and teach the Bible — in one app that works anywhere.',
      items: [
        { icon: 'bot', title: 'A local AI assistant', text: 'Works offline on every screen — ask “who is…?”, compare two characters, or list the kings and prophets, answered from the database itself.' },
        { icon: 'volume', title: 'Synchronized text-to-speech', text: 'Listen to the patriarchs’ stories in four languages with word-by-word highlighting, a floating player, and a sleep timer — close your eyes and listen.' },
        { icon: 'palette', title: 'A unique scene engine', text: 'Every character and symbol gets its own carefully composed scene, plus hundreds of hand-curated scenes: the Ark, the Crossing, Daniel’s den…' },
        { icon: 'tree', title: 'The interactive family tree', text: '15 documented houses linking 307 members across up to 9 generations — from Adam’s house to David’s (69 members) and the Holy Family.' },
        { icon: 'zap', title: 'Instant smart search', text: 'Over an 83,000+ entry index — live results across names, epithets, descriptions and categories as you type.' },
        { icon: 'library', title: 'Your personal library', text: 'Favorites, bookmarks, folders, tags and notes — soft-delete undo, plus one-file backup & restore across your devices.' },
        { icon: 'cross', title: 'The complete Christ section', text: '23 documented parts, prophecy to Second Coming: the incarnation, journeys, miracles, parables, His seven sayings, Passion Week, the resurrection and ascension.' },
        { icon: 'flame', title: 'The symbols module', text: '103 symbols in 8 groups: Revelation and heaven, Christ and the Church, gods of the nations, spirits of darkness — each with its theological meaning.' },
        { icon: 'calendar', title: 'Character of the Day', text: 'A customizable Coptic calendar with Synaxarium feasts (Nativity, Epiphany…) and a gentle daily notification — a new character every day.' },
        { icon: 'phone', title: 'Widgets & shortcuts', text: 'Home-screen widgets: daily character, continue reading, favorites — plus shortcuts and deep links that jump straight to any profile.' },
        { icon: 'organize', title: 'Organization without equal', text: '65 categories, 15 time periods, ready indexes: apostles, disciples, women, the unnamed, biblical & chronological order, by book and category.' },
        { icon: 'moon', title: '11 themes, 10 Arabic fonts', text: 'Creative light & dark themes plus a strict night mode, with 10 carefully embedded Arabic fonts — read the way your eyes love.' },
      ],
    },
    shots: {
      eyebrow: 'Inside the app',
      title: 'A tour in screenshots',
      subtitle: 'Real screenshots from the app — they switch automatically to match your language.',
      captions: ['The encyclopedia', 'Illustrated scenes', 'Complete stories', 'The Christ section', 'Family tree', 'Smart search', 'AI assistant', 'Night mode'],
      hint: 'Drag or use the arrows to browse',
      prev: 'Previous',
      next: 'Next',
    },
    christ: {
      eyebrow: 'A complete section',
      title: 'Christ — 23 documented parts',
      text: 'From Old Testament prophecy to the Second Coming: the incarnation and nativity, journeys, miracles and parables, His seven sayings from the cross, Passion Week, the resurrection and appearances, the ascension, and His presence in every book.',
      chips: ['Prophecies', 'Nativity', 'Miracles', 'Parables', 'Seven sayings', 'Passion Week', 'Resurrection', 'Ascension'],
      cta: 'Explore the full section in the app',
    },
    symbols: {
      eyebrow: 'The symbols module',
      title: '103 symbols in 8 groups',
      text: 'A dedicated section for apocalyptic, prophetic and figurative figures — from the Red Dragon and Babylon the Great to the bronze serpent and the Virgin daughter of Babylon — each with its theological meaning.',
      cta: 'Explore the symbols in the app',
      unit: 'symbols',
    },
    audience: {
      eyebrow: 'Who is it for?',
      title: 'An app for every Bible reader',
      subtitle: 'From daily curiosity to deep theological study.',
      items: [
        { icon: 'cap', title: 'Sunday school & seminary students', text: 'A ready reference for every study and assignment — with a scripture reference for every event.' },
        { icon: 'book', title: 'Preachers & study leaders', text: 'Documented material at hand: profiles, events, lessons and quotes, ready to cite.' },
        { icon: 'users', title: 'Families at gatherings', text: 'Gripping stories the whole family loves — with illustrated scenes to tell them by.' },
        { icon: 'search', title: 'Every reader asking “who is this?”', text: 'At every name in your daily reading — a complete answer, one tap away.' },
      ],
    },
    privacy: {
      eyebrow: 'Your privacy',
      title: 'Privacy is a red line',
      subtitle: 'The app is designed to run on your device alone — nothing else.',
      points: [
        { icon: 'shield', title: 'No account, no tracking', text: 'No sign-up, no data collection, no tracking — your data stays on your device.' },
        { icon: 'wifi', title: '100% offline', text: 'Content, indexes, search, text-to-speech and the AI assistant — everything runs on your device: at church, on a plane, anywhere.' },
        { icon: 'badge', title: 'One purchase, forever', text: 'One product only: remove ads forever with a single purchase — no subscriptions, no recurring payments, ever.' },
      ],
    },
    download: {
      eyebrow: 'Start today',
      title: '3,026 documented stories are waiting to be read',
      subtitle: 'Complete, precise, in four languages, and working anywhere without a connection.',
      note: 'Free download · Arabic, English, French & Spanish',
      platforms: 'Available on Android & iOS',
    },
    footer: {
      tagline: 'The largest interactive Bible encyclopedia — fully offline.',
      appCol: 'Page',
      links: { demo: 'Demo', features: 'Features', screenshots: 'Screenshots', download: 'Download' },
      resources: 'Resources',
      github: 'GitHub repository',
      privacy: 'Privacy',
      version: 'Version 14.4.0',
      rights: '© 2026 Bible Characters Encyclopedia — All rights reserved',
      crafted: 'Crafted with utmost care',
    },
  },

  /* ------------------------------------------------------------------ */
  /* Français                                                            */
  /* ------------------------------------------------------------------ */
  fr: {
    htmlLang: 'fr',
    meta: {
      title: "L'Encyclopédie des Personnages de la Bible — 3,026 profils en quatre langues",
      description:
        "La plus grande encyclopédie biblique de personnages, 100% hors ligne : 3,026 personnages et symboles aux profils complets et documentés, en quatre langues (العربية · English · Français · Español). Essayez un échantillon réel de la base.",
    },
    nav: { demo: 'Démo', features: 'Fonctionnalités', screenshots: 'Captures', download: 'Télécharger', github: 'GitHub' },
    common: {
      language: 'Changer de langue',
      themeToLight: 'Mode clair',
      themeToDark: 'Mode nuit',
      skip: 'Aller au contenu',
      menu: 'Menu',
      close: 'Fermer',
      playStore: 'Disponible sur Google Play',
      appStore: 'Télécharger sur l’App Store',
      appStoreSoon: 'Bientôt sur l’App Store',
      soon: 'Bientôt',
      free: 'Gratuit',
    },
    hero: {
      chip: 'v14.4 — La Révision d’Or',
      title: 'L’Encyclopédie des Personnages de la Bible',
      tagline: 'Chaque personnage de la Bible — son histoire complète entre vos mains',
      sub: 'D’Adam jusqu’à l’Apocalypse : 3,026 personnages et symboles aux profils complets et documentés — identité, lignée et époque, événements, leçons et héritage — tout cité par livre, chapitre et verset. En quatre langues, 100% hors ligne.',
      ctaDemo: 'Essayer la démo',
      chips: { offline: '100% hors ligne', langs: '4 langues d’un geste', verified: 'Chiffres vérifiés depuis la base' },
      stats: { profiles: 'personnages et symboles', books: 'livres documentés', categories: 'catégories', symbols: 'symboles bibliques' },
      verifiedNote: 'Chaque chiffre provient de la base de données réelle de l’application',
      phoneCaption: 'Interface de l’application',
      scroll: 'Découvrir',
    },
    marquee: { label: 'Livres documentés dans l’encyclopédie' },
    demo: {
      eyebrow: 'Un échantillon réel de la base',
      title: 'Essayez l’encyclopédie vous-même',
      subtitle: 'Pas de captures statiques — parcourez 43 des personnages les plus célèbres avec leurs données réelles : cherchez, filtrez par catégorie et par testament, ouvrez les profils complets.',
      liveBadge: 'Données réelles · {n} sur 3,026',
      searchPlaceholder: 'Chercher par nom ou épithète… Moïse, David, Paul…',
      clearSearch: 'Effacer la recherche',
      filterAll: 'Tous',
      filterOT: 'Ancien Testament',
      filterNT: 'Nouveau Testament',
      results: '{n} résultats',
      noResults: 'Aucun résultat dans l’échantillon',
      noResultsHint: 'Essayez un autre nom ou effacez les filtres — l’application complète contient 3,026 personnages et symboles.',
      openProfile: 'Ouvrir le profil',
      refsCount: '{n} références bibliques',
      detail: {
        about: 'Aperçu',
        meaning: 'Sens du nom',
        era: 'Époque et datation',
        firstMention: 'Première mention',
        scene: 'Scène vedette',
        events: 'Événements clés',
        lessons: 'Leçons',
        legacy: 'Héritage',
        family: 'Famille',
        father: 'Père',
        mother: 'Mère',
        spouse: 'Épouse',
        children: 'Enfants',
        siblings: 'Frères et sœurs',
        ot: 'Ancien Testament',
        nt: 'Nouveau Testament',
        refsNote: 'Cité dans {refs} passages sur {books} livres de la base de l’application',
        ctaFull: 'Téléchargez l’app gratuitement et lisez le profil complet',
        categories: 'Catégories',
      },
      footnote: 'Dans l’app complète : le profil entier, l’arbre généalogique interactif, la lecture texte-voix synchronisée, l’assistant IA, le Personnage du jour — le tout hors ligne.',
    },
    features: {
      eyebrow: 'Fonctionnalités',
      title: 'Une encyclopédie complète, entre vos mains',
      subtitle: 'Tout ce qu’il faut pour étudier et enseigner la Bible — dans une seule application, partout.',
      items: [
        { icon: 'bot', title: 'Un assistant IA local', text: 'Sans internet, sur chaque écran — demandez « qui est… ? », comparez deux personnages ou réclamez les rois et prophètes : il répond depuis la base elle-même.' },
        { icon: 'volume', title: 'Lecture texte-voix synchronisée', text: 'Écoutez les récits des patriarches en quatre langues, surlignage des mots synchronisé, lecteur flottant et minuteur de sommeil — fermez les yeux et écoutez.' },
        { icon: 'palette', title: 'Un moteur visuel de scènes unique', text: 'Chaque personnage et symbole a sa scène composée avec soin, plus des centaines curatorées à la main : l’Arche, la Traversée, la fosse de Daniel…' },
        { icon: 'tree', title: 'L’arbre généalogique interactif', text: '15 maisons documentées reliant 307 membres sur jusqu’à 9 générations — de la maison d’Adam à celle de David (69 membres) et la Sainte Famille.' },
        { icon: 'zap', title: 'Recherche intelligente instantanée', text: 'Un index de plus de 83,000 entrées — résultats en direct sur les noms, épithètes, descriptions et catégories, pendant la frappe.' },
        { icon: 'library', title: 'Votre bibliothèque personnelle', text: 'Favoris, marque-pages, dossiers, étiquettes et notes — annulation de suppression, sauvegarde et restauration en un seul fichier.' },
        { icon: 'cross', title: 'La section complète du Christ', text: '23 parties documentées, de la prophétie au Second Avènement : incarnation, voyages, miracles, paraboles, Ses sept paroles, la Semaine Sainte, la résurrection et l’ascension.' },
        { icon: 'flame', title: 'Le module des symboles', text: '103 symboles en 8 groupes : Apocalypse et ciel, Christ et l’Église, dieux des nations, esprits des ténèbres — chacun avec son sens théologique.' },
        { icon: 'calendar', title: 'Personnage du jour', text: 'Un calendrier copte personnalisable avec les fêtes du Synaxaire (Nativité, Épiphanie…) et une notification quotidienne discrète.' },
        { icon: 'phone', title: 'Widgets et raccourcis', text: 'Widgets d’accueil : personnage du jour, reprendre la lecture, favoris — plus raccourcis et liens profonds vers chaque profil.' },
        { icon: 'organize', title: 'Organisation sans égale', text: '65 catégories, 15 époques, index prêts : apôtres, disciples, femmes, les anonymes, ordre biblique et chronologique, par livre et catégorie.' },
        { icon: 'moon', title: '11 thèmes, 10 polices arabes', text: 'Des thèmes clair et sombre plus un mode nuit strict, avec 10 polices arabes intégrées — lisez comme aiment vos yeux.' },
      ],
    },
    shots: {
      eyebrow: 'Dans l’application',
      title: 'Une visite en captures d’écran',
      subtitle: 'De vraies captures de l’application — elles changent automatiquement selon votre langue.',
      captions: ['L’encyclopédie', 'Scènes illustrées', 'Récits complets', 'La section du Christ', 'Arbre généalogique', 'Recherche intelligente', 'Assistant IA', 'Mode nuit'],
      hint: 'Faites glisser ou utilisez les flèches',
      prev: 'Précédent',
      next: 'Suivant',
    },
    christ: {
      eyebrow: 'Une section complète',
      title: 'Le Christ — 23 parties documentées',
      text: 'Des prophéties de l’Ancien Testament au Second Avènement : l’incarnation et la nativité, les voyages, miracles et paraboles, Ses sept paroles depuis la croix, la Semaine Sainte, la résurrection et les apparitions, l’ascension, et Sa présence dans chaque livre.',
      chips: ['Prophéties', 'Nativité', 'Miracles', 'Paraboles', 'Sept paroles', 'Semaine Sainte', 'Résurrection', 'Ascension'],
      cta: 'Explorez la section complète dans l’app',
    },
    symbols: {
      eyebrow: 'Le module des symboles',
      title: '103 symboles en 8 groupes',
      text: 'Une section dédiée aux figures apocalyptiques, prophétiques et figuratives — du Dragon rouge à Babylone la Grande, jusqu’au serpent d’airain et à la Vierge fille de Babylone — chaque symbole avec son sens théologique.',
      cta: 'Explorez les symboles dans l’app',
      unit: 'symboles',
    },
    audience: {
      eyebrow: 'Pour qui ?',
      title: 'Une application pour chaque lecteur de la Bible',
      subtitle: 'De la curiosité quotidienne à l’étude théologique profonde.',
      items: [
        { icon: 'cap', title: 'Élèves et séminaristes', text: 'Une référence prête pour chaque recherche et devoir — avec une référence biblique pour chaque événement.' },
        { icon: 'book', title: 'Prédicateurs et animateurs', text: 'Une matière documentée à portée de main : profils, événements, leçons et citations, prêts à citer.' },
        { icon: 'users', title: 'Les familles en soirée', text: 'Des récits captivants que toute la famille aime — avec des scènes illustrées pour les raconter.' },
        { icon: 'search', title: 'Chaque lecteur qui demande « qui est-ce ? »', text: 'À chaque nom de votre lecture quotidienne — une réponse complète, à un geste.' },
      ],
    },
    privacy: {
      eyebrow: 'Votre vie privée',
      title: 'La vie privée est une ligne rouge',
      subtitle: 'L’application est conçue pour fonctionner sur votre appareil seul — rien d’autre.',
      points: [
        { icon: 'shield', title: 'Sans compte, sans traçage', text: 'Pas d’inscription, pas de collecte de données, pas de traçage — vos données restent sur votre appareil.' },
        { icon: 'wifi', title: '100% hors ligne', text: 'Contenu, index, recherche, lecture voix et assistant IA — tout fonctionne sur votre appareil : à l’église, dans l’avion, partout.' },
        { icon: 'badge', title: 'Un achat, pour toujours', text: 'Un seul produit : supprimer les publicités pour toujours — aucun abonnement, aucun paiement récurrent.' },
      ],
    },
    download: {
      eyebrow: 'Commencez aujourd’hui',
      title: '3,026 récits documentés attendent d’être lus',
      subtitle: 'Complets, précis, en quatre langues, et fonctionnant partout sans connexion.',
      note: 'Téléchargement gratuit · Arabe, anglais, français et espagnol',
      platforms: 'Disponible sur Android et iOS',
    },
    footer: {
      tagline: 'La plus grande encyclopédie biblique interactive — 100% hors ligne.',
      appCol: 'Page',
      links: { demo: 'Démo', features: 'Fonctionnalités', screenshots: 'Captures', download: 'Télécharger' },
      resources: 'Ressources',
      github: 'Dépôt GitHub',
      privacy: 'Confidentialité',
      version: 'Version 14.4.0',
      rights: '© 2026 Encyclopédie des Personnages de la Bible — Tous droits réservés',
      crafted: 'Confectionné avec le plus grand soin',
    },
  },

  /* ------------------------------------------------------------------ */
  /* Español                                                             */
  /* ------------------------------------------------------------------ */
  es: {
    htmlLang: 'es',
    meta: {
      title: 'Enciclopedia de Personajes Bíblicos — 3,026 perfiles en cuatro idiomas',
      description:
        'La mayor enciclopedia bíblica de personajes, 100% sin conexión: 3,026 personajes y símbolos con perfiles completos y documentados, en cuatro idiomas (العربية · English · Français · Español). Prueba una muestra real de la base de datos.',
    },
    nav: { demo: 'Demo', features: 'Funciones', screenshots: 'Capturas', download: 'Descargar', github: 'GitHub' },
    common: {
      language: 'Cambiar idioma',
      themeToLight: 'Modo claro',
      themeToDark: 'Modo nocturno',
      skip: 'Ir al contenido',
      menu: 'Menú',
      close: 'Cerrar',
      playStore: 'Disponible en Google Play',
      appStore: 'Descárgala en el App Store',
      appStoreSoon: 'Próximamente en el App Store',
      soon: 'Próximamente',
      free: 'Gratis',
    },
    hero: {
      chip: 'v14.4 — La Revisión Dorada',
      title: 'Enciclopedia de Personajes Bíblicos',
      tagline: 'Cada personaje de la Biblia — su historia completa en tus manos',
      sub: 'Desde Adán hasta Apocalipsis: 3,026 personajes y símbolos con perfiles completos y documentados — identidad, linaje y época, eventos, lecciones y legado — todo citado por libro, capítulo y versículo. En cuatro idiomas, 100% sin conexión.',
      ctaDemo: 'Prueba la demo',
      chips: { offline: '100% sin conexión', langs: '4 idiomas, un toque', verified: 'Cifras verificadas de la base' },
      stats: { profiles: 'personajes y símbolos', books: 'libros documentados', categories: 'categorías', symbols: 'símbolos bíblicos' },
      verifiedNote: 'Cada cifra proviene de la base de datos real de la aplicación',
      phoneCaption: 'Interfaz de la aplicación',
      scroll: 'Descubre más',
    },
    marquee: { label: 'Libros documentados en la enciclopedia' },
    demo: {
      eyebrow: 'Una muestra real de la base de datos',
      title: 'Prueba la enciclopedia tú mismo',
      subtitle: 'No son capturas estáticas — recorre 43 de los personajes más célebres con sus datos reales: busca, filtra por categoría y testamento, y abre los perfiles completos.',
      liveBadge: 'Datos reales · {n} de 3,026',
      searchPlaceholder: 'Busca por nombre o epíteto… Moisés, David, Pablo…',
      clearSearch: 'Borrar búsqueda',
      filterAll: 'Todos',
      filterOT: 'Antiguo Testamento',
      filterNT: 'Nuevo Testamento',
      results: '{n} resultados',
      noResults: 'Sin resultados en la muestra',
      noResultsHint: 'Prueba otro nombre o quita los filtros — la app completa contiene 3,026 personajes y símbolos.',
      openProfile: 'Abrir perfil',
      refsCount: '{n} referencias bíblicas',
      detail: {
        about: 'Resumen',
        meaning: 'Significado del nombre',
        era: 'Época y datación',
        firstMention: 'Primera mención',
        scene: 'Escena destacada',
        events: 'Eventos clave',
        lessons: 'Lecciones',
        legacy: 'Legado',
        family: 'Familia',
        father: 'Padre',
        mother: 'Madre',
        spouse: 'Esposa',
        children: 'Hijos',
        siblings: 'Hermanos',
        ot: 'Antiguo Testamento',
        nt: 'Nuevo Testamento',
        refsNote: 'Citado en {refs} pasajes a lo largo de {books} libros de la base de la app',
        ctaFull: 'Descarga la app gratis y lee el perfil completo',
        categories: 'Categorías',
      },
      footnote: 'En la app completa: el perfil entero, el árbol genealógico interactivo, la lectura texto-voz sincronizada, el asistente de IA, el Personaje del día — todo sin conexión.',
    },
    features: {
      eyebrow: 'Funciones',
      title: 'Una enciclopedia completa, en tus manos',
      subtitle: 'Todo lo que necesitas para estudiar y enseñar la Biblia — en una sola app que funciona en cualquier lugar.',
      items: [
        { icon: 'bot', title: 'Un asistente de IA local', text: 'Sin internet, en cada pantalla — pregúntale «¿quién es…?», compara dos personajes o pide los reyes y profetas: responde desde la base misma.' },
        { icon: 'volume', title: 'Lectura texto-voz sincronizada', text: 'Escucha las historias de los patriarcas en cuatro idiomas con resaltado sincronizado, reproductor flotante y temporizador de sueño — cierra los ojos y escucha.' },
        { icon: 'palette', title: 'Un motor visual de escenas único', text: 'Cada personaje y símbolo tiene su escena compuesta con esmero, más cientos curadas a mano: el Arca, el Cruce, el foso de Daniel…' },
        { icon: 'tree', title: 'El árbol genealógico interactivo', text: '15 casas documentadas que enlazan 307 miembros hasta 9 generaciones — de la casa de Adán a la de David (69 miembros) y la Sagrada Familia.' },
        { icon: 'zap', title: 'Búsqueda inteligente instantánea', text: 'Sobre un índice de más de 83,000 entradas — resultados en vivo en nombres, epítetos, descripciones y categorías mientras escribes.' },
        { icon: 'library', title: 'Tu biblioteca personal', text: 'Favoritos, marcadores, carpetas, etiquetas y notas — deshacer en el borrado, copia de seguridad y restauración en un solo archivo.' },
        { icon: 'cross', title: 'La sección completa de Cristo', text: '23 partes documentadas, de la profecía a la Segunda Venida: encarnación, viajes, milagros, parábolas, sus siete palabras, la Semana Santa, la resurrección y la ascensión.' },
        { icon: 'flame', title: 'El módulo de símbolos', text: '103 símbolos en 8 grupos: Apocalipsis y cielo, Cristo y la Iglesia, dioses de las naciones, espíritus de tinieblas — cada uno con su significado teológico.' },
        { icon: 'calendar', title: 'Personaje del día', text: 'Un calendario copto personalizable con fiestas del Sinaxario (Natividad, Epifanía…) y una notificación diaria discreta.' },
        { icon: 'phone', title: 'Widgets y atajos', text: 'Widgets de inicio: personaje del día, seguir leyendo, favoritos — más atajos y enlaces profundos a cada perfil.' },
        { icon: 'organize', title: 'Organización sin igual', text: '65 categorías, 15 épocas, índices listos: apóstoles, discípulos, mujeres, sin nombre, orden bíblico y cronológico, por libro y categoría.' },
        { icon: 'moon', title: '11 temas, 10 fuentes árabes', text: 'Temas creativos claros y oscuros más un modo nocturno estricto, con 10 fuentes árabes incrustadas — lee como les gusta a tus ojos.' },
      ],
    },
    shots: {
      eyebrow: 'Dentro de la app',
      title: 'Un recorrido en capturas',
      subtitle: 'Capturas reales de la aplicación — cambian automáticamente según tu idioma.',
      captions: ['La enciclopedia', 'Escenas ilustradas', 'Historias completas', 'La sección de Cristo', 'Árbol genealógico', 'Búsqueda inteligente', 'Asistente de IA', 'Modo nocturno'],
      hint: 'Desliza o usa las flechas para navegar',
      prev: 'Anterior',
      next: 'Siguiente',
    },
    christ: {
      eyebrow: 'Una sección completa',
      title: 'Cristo — 23 partes documentadas',
      text: 'De las profecías del Antiguo Testamento a la Segunda Venida: la encarnación y natividad, los viajes, milagros y parábolas, sus siete palabras desde la cruz, la Semana Santa, la resurrección y apariciones, la ascensión, y su presencia en cada libro.',
      chips: ['Profecías', 'Natividad', 'Milagros', 'Parábolas', 'Siete palabras', 'Semana Santa', 'Resurrección', 'Ascensión'],
      cta: 'Explora la sección completa en la app',
    },
    symbols: {
      eyebrow: 'El módulo de símbolos',
      title: '103 símbolos en 8 grupos',
      text: 'Una sección dedicada a las figuras apocalípticas, proféticas y figurativas — del Dragón rojo y Babilonia la Grande a la serpiente de bronce y la Virgen hija de Babilonia — cada símbolo con su significado teológico.',
      cta: 'Explora los símbolos en la app',
      unit: 'símbolos',
    },
    audience: {
      eyebrow: '¿Para quién?',
      title: 'Una app para cada lector de la Biblia',
      subtitle: 'De la curiosidad diaria al estudio teológico profundo.',
      items: [
        { icon: 'cap', title: 'Alumnos de escuela dominical y seminarios', text: 'Una referencia lista para cada estudio y tarea — con referencia bíblica para cada evento.' },
        { icon: 'book', title: 'Predicadores y líderes de estudio', text: 'Material documentado a mano: perfiles, eventos, lecciones y dichos, listos para citar.' },
        { icon: 'users', title: 'Las familias en las veladas', text: 'Historias cautivadoras que ama toda la familia — con escenas ilustradas para contarlas.' },
        { icon: 'search', title: 'Cada lector que pregunta «¿quién es?»', text: 'Ante cada nombre de tu lectura diaria — una respuesta completa, a un toque.' },
      ],
    },
    privacy: {
      eyebrow: 'Tu privacidad',
      title: 'La privacidad es una línea roja',
      subtitle: 'La app está diseñada para funcionar solo en tu dispositivo — nada más.',
      points: [
        { icon: 'shield', title: 'Sin cuenta ni rastreo', text: 'Sin registro, sin recolección de datos, sin rastreo — tus datos viven solo en tu dispositivo.' },
        { icon: 'wifi', title: '100% sin conexión', text: 'Contenido, índices, búsqueda, voz y asistente de IA — todo corre en tu dispositivo: en la iglesia, en el avión, en cualquier lugar.' },
        { icon: 'badge', title: 'Una compra, para siempre', text: 'Un solo producto: elimina los anuncios para siempre — sin suscripciones ni pagos recurrentes, jamás.' },
      ],
    },
    download: {
      eyebrow: 'Empieza hoy',
      title: '3,026 historias documentadas esperan ser leídas',
      subtitle: 'Completas, precisas, en cuatro idiomas, y funcionando en cualquier lugar sin conexión.',
      note: 'Descarga gratuita · Árabe, inglés, francés y español',
      platforms: 'Disponible en Android e iOS',
    },
    footer: {
      tagline: 'La mayor enciclopedia bíblica interactiva — 100% sin conexión.',
      appCol: 'Página',
      links: { demo: 'Demo', features: 'Funciones', screenshots: 'Capturas', download: 'Descargar' },
      resources: 'Recursos',
      github: 'Repositorio de GitHub',
      privacy: 'Privacidad',
      version: 'Versión 14.4.0',
      rights: '© 2026 Enciclopedia de Personajes Bíblicos — Todos los derechos reservados',
      crafted: 'Elaborado con sumo cuidado',
    },
  },
};
