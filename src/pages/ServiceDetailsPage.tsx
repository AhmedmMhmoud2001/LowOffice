import { motion } from 'motion/react';
import { CheckCircle2, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import heroBg from '../assets/hero-bg.png';

export function ServiceDetailsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Service request:', formData);
    alert('تم إرسال طلبك بنجاح! سنتواصل معك قريباً.');
  };

  const processSteps = [
    'التواصل الأولي وتقييم الحالة',
    'جمع المعلومات والمستندات المطلوبة',
    'إعداد الخطة القانونية المناسبة',
    'تنفيذ الإجراءات القانونية اللازمة',
    'المتابعة والدعم المستمر',
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
            className="max-w-3xl 2xl:max-w-4xl mx-auto"
          >
            <a href="/services" className="inline-flex items-center gap-2 text-[var(--gold)] hover:text-[var(--gold-light)] mb-6 2xl:mb-8 text-lg 2xl:text-xl">
              <ArrowRight className="w-5 h-5 2xl:w-6 2xl:h-6" />
              <span>العودة إلى الخدمات</span>
            </a>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl mb-6 font-bold">القضايا المدنية</h1>
            <p className="text-xl 2xl:text-2xl text-gray-300">
              نقدم تمثيلاً قانونياً شاملاً في القضايا المدنية بما في ذلك النزاعات العقارية والتجارية
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="py-16 2xl:py-24 bg-white">
        <div className="max-w-4xl 2xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl 2xl:text-5xl mb-8 text-[var(--navy-blue)] font-bold">تفاصيل الخدمة</h2>
          <div className="prose prose-lg 2xl:prose-xl max-w-none text-gray-700 text-right">
            <p className="text-lg 2xl:text-xl leading-relaxed mb-6">
              نحن نتخصص في تقديم خدمات قانونية شاملة في القضايا المدنية. فريقنا من المحامين المتخصصين لديهم خبرة واسعة في التعامل مع مختلف أنواع النزاعات المدنية.
            </p>
            <p className="text-lg 2xl:text-xl leading-relaxed mb-6">
              نقدم استشارات قانونية دقيقة، تمثيل قضائي احترافي، وحلول فعالة تضمن حماية حقوقك ومصالحك.
            </p>
            <h3 className="text-2xl 2xl:text-3xl mb-4 text-[var(--navy-blue)] font-semibold">ما نقدمه:</h3>
            <ul className="space-y-3 mb-6 2xl:space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 2xl:w-7 2xl:h-7 text-[var(--gold)] flex-shrink-0 mt-1" />
                <span className="2xl:text-xl">استشارات قانونية مفصلة لتقييم القضية</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 2xl:w-7 2xl:h-7 text-[var(--gold)] flex-shrink-0 mt-1" />
                <span className="2xl:text-xl">صياغة ومراجعة جميع المستندات القانونية</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 2xl:w-7 2xl:h-7 text-[var(--gold)] flex-shrink-0 mt-1" />
                <span className="2xl:text-xl">التمثيل القانوني أمام المحاكم</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 2xl:w-7 2xl:h-7 text-[var(--gold)] flex-shrink-0 mt-1" />
                <span className="2xl:text-xl">التفاوض وحل النزاعات الودية</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 2xl:w-7 2xl:h-7 text-[var(--gold)] flex-shrink-0 mt-1" />
                <span className="2xl:text-xl">متابعة مستمرة حتى إنهاء القضية</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 2xl:py-24 bg-[var(--off-white)]">
        <div className="max-w-4xl 2xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl 2xl:text-5xl mb-12 text-center text-[var(--navy-blue)] font-bold">خطوات العمل</h2>
          <div className="space-y-6 2xl:space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-6 bg-white p-6 2xl:p-8 rounded-xl shadow-md"
              >
                <div className="w-12 h-12 2xl:w-16 2xl:h-16 bg-[var(--gold)] text-[var(--navy-blue)] rounded-full flex items-center justify-center text-xl 2xl:text-2xl font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-lg 2xl:text-xl text-gray-800">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Request Form & Contact */}
      <section className="py-20 2xl:py-32 bg-white">
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 2xl:gap-20">
            {/* Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl 2xl:text-4xl mb-8 text-[var(--navy-blue)] font-bold">طلب الخدمة</h2>
              <form onSubmit={handleSubmit} className="space-y-5 2xl:space-y-6">
                <div>
                  <label className="block mb-2 text-[var(--navy-blue)] 2xl:text-lg font-medium">الاسم الكامل</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent outline-none transition-all 2xl:py-4 2xl:px-5 2xl:text-lg"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-[var(--navy-blue)] 2xl:text-lg font-medium">البريد الإلكتروني</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent outline-none transition-all 2xl:py-4 2xl:px-5 2xl:text-lg"
                    placeholder="example@email.com"
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

                <div>
                  <label className="block mb-2 text-[var(--navy-blue)] 2xl:text-lg font-medium">وصف القضية</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent outline-none transition-all resize-none 2xl:py-4 2xl:px-5 2xl:text-lg"
                    placeholder="اشرح قضيتك بالتفصيل..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[var(--gold)] text-[var(--navy-blue)] py-3 rounded-lg hover:bg-[var(--gold-light)] transition-all duration-300 2xl:py-4 2xl:text-xl font-bold"
                >
                  إرسال الطلب
                </button>
              </form>
            </div>

            {/* Contact Options */}
            <div>
              <h2 className="text-2xl sm:text-3xl 2xl:text-4xl mb-8 text-[var(--navy-blue)] font-bold">تواصل معنا مباشرة</h2>
              <div className="space-y-6 2xl:space-y-8">
                <div className="bg-[var(--off-white)] p-8 2xl:p-10 rounded-2xl shadow-lg">
                  <h3 className="text-xl 2xl:text-2xl mb-4 text-[var(--navy-blue)] font-semibold">للاستفسارات العاجلة</h3>
                  <div className="space-y-4 2xl:space-y-6">
                    <a
                      href="tel:+966501234567"
                      className="flex items-center gap-3 bg-[var(--navy-blue)] text-white py-3 px-6 rounded-lg hover:bg-[var(--charcoal-black)] transition-all 2xl:py-4 2xl:text-lg"
                    >
                      <Phone className="w-5 h-5 2xl:w-6 2xl:h-6" />
                      <span>اتصل الآن: +966 50 123 4567</span>
                    </a>
                    <a
                      href="https://wa.me/966501234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-all 2xl:py-4 2xl:text-lg"
                    >
                      <MessageCircle className="w-5 h-5 2xl:w-6 2xl:h-6" />
                      <span>تواصل عبر واتساب</span>
                    </a>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[var(--navy-blue)] to-[var(--charcoal-black)] text-white p-8 2xl:p-10 rounded-2xl shadow-xl">
                  <h3 className="text-xl 2xl:text-2xl mb-4 font-semibold">لماذا تختارنا؟</h3>
                  <ul className="space-y-3 2xl:space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 2xl:w-6 2xl:h-6 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                      <span className="2xl:text-lg">خبرة قانونية تزيد عن 15 عاماً</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 2xl:w-6 2xl:h-6 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                      <span className="2xl:text-lg">فريق من المحامين المتخصصين</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 2xl:w-6 2xl:h-6 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                      <span className="2xl:text-lg">سجل حافل من القضايا الناجحة</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 2xl:w-6 2xl:h-6 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                      <span className="2xl:text-lg">سرية تامة ومصداقية عالية</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
