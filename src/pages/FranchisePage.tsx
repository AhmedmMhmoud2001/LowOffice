import { motion } from 'motion/react';
import { CheckCircle2, Send, FileCheck, Users, Building, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import heroBg from '../assets/hero-bg.png';

export function FranchisePage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    industry: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Franchise request:', formData);
    alert('تم إرسال طلبك بنجاح! سنتواصل معك قريباً.');
  };

  const steps = [
    {
      icon: FileCheck,
      title: 'التقييم الأولي',
      description: 'دراسة شاملة لنموذج عملك وإمكانيات التوسع عبر الفرنشايز',
    },
    {
      icon: Users,
      title: 'الصياغة القانونية',
      description: 'إعداد جميع المستندات والعقود القانونية للفرنشايز',
    },
    {
      icon: Building,
      title: 'حماية العلامة التجارية',
      description: 'تسجيل وحماية العلامة التجارية والملكية الفكرية',
    },
    {
      icon: TrendingUp,
      title: 'الدعم المستمر',
      description: 'دعم قانوني مستمر لضمان نجاح نموذج الفرنشايز',
    },
  ];

  return (
    <div className="min-h-screen" dir="rtl">
      {/* Hero Section */}
      <section className="relative bg-[var(--navy-blue)] text-white py-20 2xl:py-32 min-h-[700px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Background" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy-blue)]/50 via-[var(--navy-blue)]/20 to-[var(--charcoal-black)]/40"></div>
        </div>
        <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl 2xl:max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl mb-6 font-bold">خدمات الفرنشايز القانونية</h1>
            <p className="text-xl 2xl:text-2xl text-gray-300">
              نساعدك في توسيع نطاق عملك من خلال نموذج الفرنشايز بطريقة قانونية آمنة
            </p>
          </motion.div>
        </div>
      </section>

      {/* Explanation */}
      <section className="py-16 2xl:py-24 bg-white">
        <div className="max-w-4xl 2xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl 2xl:text-5xl text-center mb-8 text-[var(--navy-blue)] font-bold">لماذا تحتاج إلى خدماتنا القانونية للفرنشايز؟</h2>
          <div className="prose prose-lg 2xl:prose-xl max-w-none text-gray-700 text-right">
            <p className="text-lg 2xl:text-xl leading-relaxed mb-4">
              الفرنشايز هو نموذج عمل متميز يتيح لك التوسع السريع مع حماية علامتك التجارية وحقوقك. نحن نقدم خدمات قانونية شاملة تغطي جميع جوانب إنشاء وإدارة نظام الفرنشايز.
            </p>
            <p className="text-lg 2xl:text-xl leading-relaxed">
              من صياغة العقود إلى حماية الملكية الفكرية وحل النزاعات، نضمن لك بداية قوية ونموذج عمل قانوني محكم.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline/Steps */}
      <section className="py-20 2xl:py-32 bg-[var(--off-white)]">
        <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl 2xl:text-5xl text-center mb-16 text-[var(--navy-blue)] font-bold">مراحل إنشاء الفرنشايز</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 2xl:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 2xl:p-10 rounded-2xl shadow-lg relative h-full flex flex-col"
              >
                <div className="absolute -top-4 right-4 w-8 h-8 2xl:w-10 2xl:h-10 bg-[var(--gold)] text-[var(--navy-blue)] rounded-full flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <div className="w-16 h-16 2xl:w-20 2xl:h-20 bg-gradient-to-br from-[var(--gold)] to-[var(--gold-light)] rounded-xl flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 2xl:w-10 2xl:h-10 text-[var(--navy-blue)]" />
                </div>
                <h3 className="text-xl 2xl:text-2xl mb-3 text-[var(--navy-blue)] font-semibold">{step.title}</h3>
                <p className="text-gray-600 2xl:text-lg flex-grow">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise Request Form */}
      <section className="py-20 2xl:py-32 bg-white">
        <div className="max-w-3xl 2xl:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl 2xl:text-5xl text-center mb-12 text-[var(--navy-blue)] font-bold">طلب خدمات الفرنشايز</h2>
            <form onSubmit={handleSubmit} className="space-y-6 2xl:space-y-8">
              <div>
                <label className="block mb-2 text-[var(--navy-blue)] 2xl:text-lg font-medium">اسم الشركة</label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent outline-none transition-all 2xl:py-4 2xl:px-5 2xl:text-lg"
                  placeholder="أدخل اسم الشركة"
                />
              </div>

              <div>
                <label className="block mb-2 text-[var(--navy-blue)] 2xl:text-lg font-medium">اسم المسؤول</label>
                <input
                  type="text"
                  required
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent outline-none transition-all 2xl:py-4 2xl:px-5 2xl:text-lg"
                  placeholder="أدخل اسم المسؤول"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 2xl:gap-8">
                <div>
                  <label className="block mb-2 text-[var(--navy-blue)] 2xl:text-lg font-medium">البريد الإلكتروني</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent outline-none transition-all 2xl:py-4 2xl:px-5 2xl:text-lg"
                    placeholder="example@company.com"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-[var(--navy-blue)] 2xl:text-lg font-medium">رقم الهاتف</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent outline-none transition-all 2xl:py-4 2xl:px-5 2xl:text-lg"
                    placeholder="+966 5X XXX XXXX"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-[var(--navy-blue)] 2xl:text-lg font-medium">المجال الصناعي</label>
                <select
                  required
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent outline-none transition-all 2xl:py-4 2xl:px-5 2xl:text-lg"
                >
                  <option value="">اختر المجال</option>
                  <option value="food">الأغذية والمشروبات</option>
                  <option value="retail">التجزئة</option>
                  <option value="services">الخدمات</option>
                  <option value="education">التعليم</option>
                  <option value="health">الصحة واللياقة</option>
                  <option value="other">أخرى</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-[var(--navy-blue)] 2xl:text-lg font-medium">تفاصيل المشروع</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent outline-none transition-all resize-none 2xl:py-4 2xl:px-5 2xl:text-lg"
                  placeholder="اشرح تفاصيل مشروع الفرنشايز الخاص بك..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--gold)] text-[var(--navy-blue)] py-3 rounded-lg hover:bg-[var(--gold-light)] transition-all duration-300 flex items-center justify-center gap-2 2xl:py-4 2xl:text-xl font-bold"
              >
                <Send className="w-5 h-5 2xl:w-6 2xl:h-6" />
                <span>إرسال الطلب</span>
              </button>
            </form>

            {/* Trust Focused CTA */}
            <div className="mt-12 p-8 2xl:p-12 bg-gradient-to-br from-[var(--navy-blue)] to-[var(--charcoal-black)] text-white rounded-2xl shadow-xl">
              <div className="text-center">
                <h3 className="text-2xl 2xl:text-3xl mb-4 font-bold">لماذا تختارنا؟</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div>
                    <CheckCircle2 className="w-12 h-12 2xl:w-16 2xl:h-16 text-[var(--gold)] mx-auto mb-3" />
                    <p className="text-lg 2xl:text-xl">خبرة واسعة في الفرنشايز</p>
                  </div>
                  <div>
                    <CheckCircle2 className="w-12 h-12 2xl:w-16 2xl:h-16 text-[var(--gold)] mx-auto mb-3" />
                    <p className="text-lg 2xl:text-xl">حماية قانونية شاملة</p>
                  </div>
                  <div>
                    <CheckCircle2 className="w-12 h-12 2xl:w-16 2xl:h-16 text-[var(--gold)] mx-auto mb-3" />
                    <p className="text-lg 2xl:text-xl">دعم مستمر طويل الأمد</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
