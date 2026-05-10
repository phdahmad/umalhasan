# 🍲 أم حسن للأكلات الشعبية

موقع MVP لاستقبال طلبات الأكلات الشعبية، **مربوط بـ Airtable** كقاعدة بيانات.

## 🚀 كيف تشغّل المشروع

### الطريقة الموصى بها: عبر خادم محلي

⚠️ **مهم:** بحكم أننا نتصل بـ Airtable API من المتصفح، **لازم تشغّله عبر خادم محلي** (مو بفتح الملف مباشرة بـ `file://`)، لأن المتصفح راح يمنع طلبات API بسبب CORS.

#### إذا عندك Python:
```bash
cd usra-app
python3 -m http.server 8000
```
ثم افتح: **http://localhost:8000**

#### إذا عندك Node.js:
```bash
cd usra-app
npx serve
```

#### إذا VS Code:
ثبّت إضافة **Live Server** → كليك يمين على `index.html` → **Open with Live Server**

## 📂 محتويات المشروع

```
usra-app/
├── index.html          ← الواجهة الرئيسية
├── config.js           ← إعدادات Airtable والحساب البنكي
├── airtable.js         ← دوال التواصل مع Airtable
├── images/             ← صور الأكلات
│   ├── jareesh.svg
│   ├── marqooq.svg
│   ├── areekah.svg
│   └── masabeeb.svg
└── README.md
```

## 🧪 تجربة التدفق الكامل

### 1️⃣ كعميل
1. تصفّح القائمة
2. أضف أكلات للسلة
3. ادخل بياناتك (اسم، جوال 05XXXXXXXX، عنوان)
4. اضغط "تأكيد الطلب"
5. **الطلب يُحفظ مباشرة في Airtable** ✨
6. شف صفحة التحويل البنكي

### 2️⃣ كمسؤول
1. اضغط أيقونة 🔒
2. كلمة السر: **`1234`**
3. **شف الطلبات تنزل من Airtable** (مع spinner أثناء التحميل)
4. غيّر حالة أي طلب — يتحدّث في Airtable مباشرة
5. زر 🔄 **تحديث** — يجلب آخر التحديثات
6. زر 🗑 **مسح الكل** — يمسح كل الطلبات (مفيد لمسح البيانات التجريبية)

### 3️⃣ تحقق من Airtable
افتح Base **Talabat** على [airtable.com](https://airtable.com) وشف الطلبات تنزل لحظياً.

## ⚙️ تعديل الإعدادات

كل الإعدادات في ملف `config.js` (سهل التعديل):

```javascript
const CONFIG = {
  AIRTABLE: {
    TOKEN: 'pat...',            // ← Airtable Personal Access Token
    BASE_ID: 'app...',          // ← Base ID
    TABLE_NAME: 'Orders'        // ← اسم الجدول
  },
  ADMIN_PASSWORD: '1234',       // ← كلمة سر لوحة المسؤول
  BANK_INFO: {
    bankName: 'مصرف الراجحي',
    accountName: 'أم حسن للأكلات الشعبية',
    iban: 'SA03 ...',           // ← غيّر للآيبان الفعلي
    accountNumber: '...'        // ← غيّر لرقم الحساب الفعلي
  },
  WHATSAPP_NUMBER: '+966 5X XXX XXXX'  // ← رقم استلام الإيصالات
};
```

## 🗂️ هيكل الجدول في Airtable

الـ Base اسمه **Talabat**، فيه جدول واحد اسمه **Orders** بالحقول:

| الحقل | النوع | استخدامه |
|-------|------|---------|
| `OrderID` | Text | معرّف الطلب (مثل `ORD-123456`) |
| `CustomerName` | Text | اسم العميل |
| `CustomerPhone` | Phone | جوال العميل |
| `CustomerAddress` | Long text | العنوان |
| `ItemsSummary` | Long text | ملخص الأصناف نصياً |
| `ItemsJSON` | Long text | JSON كامل بالأصناف |
| `Total` | Number | الإجمالي بالريال |
| `Status` | Single select | جديد / قيد التحضير / جاهز / تم التسليم |
| `Notes` | Long text | ملاحظات العميل |
| `CreatedAt` | Created time | وقت الإنشاء (تلقائي) |

## 🔥 الميزات المربوطة بـ Airtable

| الميزة | كيف تعمل |
|--------|---------|
| إنشاء طلب جديد | `POST` request لـ Airtable API |
| جلب الطلبات | `GET` request مرتب من الأحدث للأقدم |
| تحديث الحالة | `PATCH` request مع optimistic update |
| حذف طلب | `DELETE` request |
| حذف الكل | `DELETE` متعدد (10 سجلات في كل مرة) |
| Loading states | spinner أثناء أي عملية |
| Error handling | toast notification عند أي خطأ |
| Toast notifications | رسائل نجاح/فشل واضحة |

## ⚠️ تنبيهات أمنية

🚨 **هذه النسخة للتجربة فقط:**
- API token موجود في `config.js` ومرئي لأي زائر
- أي شخص يفتح كود الموقع يقدر يقرأ/يحذف/يضيف طلبات
- **لا ترفع المشروع على GitHub أو أي مكان عام** بهذا الشكل

### عندما تجهز للإطلاق الفعلي:
1. **انقل التوكن لـ backend** (Vercel Functions / Cloudflare Workers)
2. أو **استخدم Airtable Webhooks** عبر Make.com / n8n
3. أو **انتقل لـ Supabase** (لها Row Level Security مدمج)

## 🐛 استكشاف الأخطاء

### "تعذّر الاتصال بـ Airtable"
- تأكد من اتصال الإنترنت
- تحقق من صحة الـ TOKEN في `config.js`
- تأكد إن الـ TOKEN له صلاحيات `data.records:read` و `data.records:write`

### الطلبات ما تنزل في الجدول
- افتح **Developer Console** (F12) وشف الأخطاء
- تحقق إن أسماء الحقول في Airtable تطابق الكود (case-sensitive)

### "CORS error" عند الفتح
- شغّل المشروع عبر خادم محلي بدلاً من فتح الملف مباشرة

## 🎨 استبدال الصور

لما تجهز صور حقيقية لأكلاتك:

1. صوّر الأطباق (مفضّل 800×600 بكسل، إضاءة طبيعية)
2. احفظها في `images/` بأسماء جديدة
3. في `index.html` ابحث عن `images/jareesh.svg` وغيّرها لـ `images/jareesh.jpg` (مثلاً)

---

نطبخ بحب 🌿 • نوصل بأمانة
