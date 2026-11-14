<div dir="rtl">

# ✨ موسوعة شخصيات الكتاب المقدس — صفحة الهبوط والديمو

**نسخة ويب خفيفة من التطبيق، مصمَّمة خصيصاً كصفحة هبوط دعائية — ببيانات حقيقية من قاعدة بيانات التطبيق، وبأربع لغات كاملة.**

[![Languages](https://img.shields.io/badge/لغات-4%20(عربي%20·%20EN%20·%20FR%20·%20ES)-C9A75B?style=flat-square)](#)
[![Characters](https://img.shields.io/badge/شخصيات%20موثَّقة-3%2C026-8A6D2F?style=flat-square)](#)
[![Offline](https://img.shields.io/badge/يعمل%20دون%20اتصال-100%25-2A7B7E?style=flat-square)](#)
[![License](https://img.shields.io/badge/ترخيص-MIT-C9A75B?style=flat-square)](LICENSE)

</div>

---

**A lightweight web edition of the app, purpose-built as an advertising landing page — with real data from the app's actual database, in four complete languages.**

[![Next.js](https://img.shields.io/badge/Next.js-16-14110B?style=flat-square&logo=nextdotjs&logoColor=C9A75B)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-14110B?style=flat-square&logo=react&logoColor=C9A75B)](https://react.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind-4-14110B?style=flat-square&logo=tailwindcss&logoColor=C9A75B)](https://tailwindcss.com)
[![Deploy](https://img.shields.io/badge/نشر-GitHub%20Pages%20تلقائي-8A6D2F?style=flat-square)](.github/workflows/deploy.yml)

---

<div dir="rtl">

## 🕊️ ما هذه الصفحة؟

هذه هي **الصفحة الدعائية الرسمية** لتطبيق **«موسوعة شخصيات الكتاب المقدس»** (الإصدار 14.4) — أضخم موسوعة كتابية تفاعلية تعمل دون اتصال: **3,026 شخصية ورمزاً** بسِيَر كاملة موثَّقة، بأربع لغات.

الصفحة ليست صوراً ثابتة — إنها **نسخة مصغَّرة حيَّة من التطبيق نفسه**:

| في الصفحة | في التطبيق الكامل |
|---|---|
| 43 شخصية مختارة ببيانات حقيقية | 3,026 شخصية ورمزاً |
| بحث فوري + فلاتر عهد وفئات | بحث فوق فهرس 83,000+ مدخل |
| سيرة مصغَّرة (نبذة، معنى الاسم، أحداث، دروس، عائلة) | سيرة كاملة + شجرة عائلة + قراءة صوتية + مساعد ذكي |
| 4 لغات بتبديل لحظي | 4 لغات بضغطة واحدة من أي شاشة |

> 📊 **كل الأرقام موثَّقة** من ملفات قاعدة البيانات الفعلية للتطبيق (3026 ملف شخصية، 82 سفراً، 65 فئة، 103 رموز، 23 قسم المسيح).

## 🎯 أقسام الصفحة

- **الهيرو** — شعار النجمة القبطية، عدّادات متحركة، محاكاة هاتف بلقطات حقيقية تتناوب
- **شريط الأسفار** — أسماء الأسفار الـ79 الموثَّقة تتحرك بلا نهاية
- **الديمو الحي** — ابحث («موسى»، «David»، «Ruth»…)، صفِّ بحسب الفئة والعهد، وافتح السيرة الكاملة
- **12 ميزة رئيسية** — من المساعد الذكي المحلي إلى شجرة العائلة التفاعلية
- **جولة باللقطات** — 8 لقطات حقيقية تتبدل تلقائياً مع لغة الزائر
- **قسم السيد المسيح والرموز** — 23 قسماً و103 رموز في 8 مجموعات حقيقية
- **الجمهور والخصوصية والتنزيل** — بأزرار المتاجر الرسمية

## 🌍 اللغات الأربع

| اللغة | الاتجاه | الخطوط |
|---|---|---|
| العربية | RTL كامل | Amiri (عناوين) + Readex Pro (نصوص) — مدمجة ذاتياً |
| English | LTR | Readex Pro |
| Français | LTR | Readex Pro |
| Español | LTR | Readex Pro |

التبديل لحظي من أي مكان في الصفحة، مع حفظ التفضيل، وتحويل كامل للاتجاه والمحاذاة واللقطات.

## 🚀 التشغيل محلياً

```bash
bun install        # أو: npm install
bun run dev        # أو: npm run dev
# افتح http://localhost:3000
```

## 📦 النشر على GitHub Pages

المستودع يتضمن workflow جاهزاً (`.github/workflows/deploy.yml`) — النشر **تلقائي عند كل دفع**:

1. ارفع المستودع إلى حسابك (انظر `publish.sh` أدناه)
2. من إعدادات المستودع: **Settings → Pages → Source: GitHub Actions**
3. ستُبنى الصفحة تلقائياً وتُنشر على `https://<username>.github.io/bible-characters-landing/`

للنشر اليدوي في أي استضافة ثابتة:

```bash
bun run build:static   # ينتج مجلد out/ كاملاً وجاهزاً
```

### النشر إلى حسابك بأمر واحد

```bash
bash publish.sh            # يتطلب gh CLI مسجَّل الدخول
bash publish.sh USERNAME   # أو بدون gh بعد إنشاء مستودع فارغ
```

## 🗂️ بنية المشروع

```
├── .github/workflows/deploy.yml   # نشر GitHub Pages تلقائياً
├── src/
│   ├── app/                       # الصفحة الوحيدة (layout + page + globals.css)
│   ├── components/landing/        # 10 مكونات: هيدر، هيرو، ديمو، مزايا، لقطات…
│   ├── data/landing-data.json     # 🔥 بيانات حقيقية (43 شخصية × 4 لغات)
│   └── lib/landing/               # الترجمات (4 لغات) + طبقة البيانات + الروابط
├── public/
│   ├── screenshots/               # 32 لقطة حقيقية (4 لغات × 8)
│   └── fonts/                     # خطوط عربية مدمجة مضغوطة (woff2)
├── scripts/                       # توليد البيانات والأصول من التطبيق الأصلي
└── docs/screenshots/              # لقطات للتوثيق
```

## 🔧 التخصيص

| ماذا | أين |
|---|---|
| روابط المتاجر ومعرّف التطبيق | `src/lib/landing/links.ts` |
| رابط GitHub (زر الهيدر/الفوتر) | `src/lib/landing/links.ts` — استبدل `USERNAME` |
| نصوص الواجهة (4 لغات) | `src/lib/landing/i18n.ts` |
| الألوان والثيمات | `src/app/globals.css` (متغيرات `--gold-*`) |
| إعادة توليد البيانات من التطبيق | `scripts/gen_landing_data.py` (يحتاج مجلد بيانات التطبيق) |

## 🔒 الخصوصية

الصفحة ثابتة بالكامل: لا تتبع، لا تحليلات، لا كوكيز — وحتى تفضيل اللغة والثيم يُحفظ محلياً على جهاز الزائر فقط.

## 📄 الترخيص

[MIT](LICENSE) — استخدم وعدِّل بحرية.

---

صُنعت بعناية فائقة لتسبيح اسم الله 🕊️

</div>
