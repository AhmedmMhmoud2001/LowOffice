import { motion } from 'motion/react';
import { useState } from 'react';
import { PricingCard } from '../components/PricingCard';
import { Phone, MessageCircle, Send } from 'lucide-react';
import heroBg from '../assets/hero-bg.png';

export function ConsultationPage() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    consultationType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (API integration would go here)
    console.log('Form submitted:', formData);
    alert('تم إرسال طلبك بنجاح! سنتواصل معك قريباً.');
  };

  return (
    <div className="min-h-screen" dir="rtl">
      {/* Hero Section */}
      <section className="relative bg-[var(--navy-blue)] text-white py-20 2xl:py-32 min-h-[700px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Background" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy-blue)]/95 via-[var(--navy-blue)]/85 to-[var(--charcoal-black)]/90"></div>
        </div>
        <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl 2xl:max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl mb-6 font-bold">الاستشارات القانونية أونلاين</h1>
            <p className="text-xl 2xl:text-2xl text-gray-300">
              احصل على استشارة قانونية احترافية من محامين متخصصين في دقائق معدودة
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Explanation */}
      <section className="py-16 2xl:py-24 bg-white">
        <div className="max-w-4xl 2xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl mb-6 text-[var(--navy-blue)] font-bold">كيف تعمل الخدمة؟</h2>
          <p className="text-lg 2xl:text-xl text-gray-600 leading-relaxed">
            نقدم استشارات قانونية فورية عبر الإنترنت تشمل جميع المجالات القانونية. يمكنك الاختيار بين استشارة مجانية أولية أو استشارة مدفوعة مفصلة مع خطة عمل كاملة.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 2xl:py-32 bg-[var(--off-white)]">
        <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl 2xl:text-5xl text-center mb-12 text-[var(--navy-blue)] font-bold">اختر الخطة المناسبة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 2xl:gap-16 max-w-5xl 2xl:max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <PricingCard
                title="استشارة مجانية"
                price="مجاناً"
                description="استشارة أولية لمدة 15 دقيقة"
                features={[
                  'استشارة قانونية أولية',
                  'تقييم سريع للحالة',
                  'توجيه قانوني عام',
                  'عبر الهاتف أو البريد',
                ]}
                onSelect={() => {
                  setFormData({ ...formData, consultationType: 'free' });
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <PricingCard
                title="استشارة مدفوعة"
                price="500 ريال"
                description="استشارة مفصلة لمدة 60 دقيقة"
                features={[
                  'استشارة قانونية شاملة',
                  'تحليل مفصل للحالة',
                  'خطة عمل قانونية',
                  'متابعة لمدة أسبوع',
                  'مستندات قانونية',
                ]}
                highlighted
                onSelect={() => {
                  setFormData({ ...formData, consultationType: 'paid' });
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 2xl:py-32 bg-white">
        <div className="max-w-3xl 2xl:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl 2xl:text-5xl text-center mb-12 text-[var(--navy-blue)] font-bold">احجز استشارتك الآن</h2>
            <form onSubmit={handleSubmit} className="space-y-6 2xl:space-y-8">
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
                <label className="block mb-2 text-[var(--navy-blue)] 2xl:text-lg font-medium">نوع الاستشارة</label>
                <select
                  required
                  value={formData.consultationType}
                  onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent outline-none transition-all 2xl:py-4 2xl:px-5 2xl:text-lg"
                >
                  <option value="">اختر نوع الاستشارة</option>
                  <option value="free">استشارة مجانية</option>
                  <option value="paid">استشارة مدفوعة</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-[var(--navy-blue)] 2xl:text-lg font-medium">تفاصيل الاستشارة</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent outline-none transition-all resize-none 2xl:py-4 2xl:px-5 2xl:text-lg"
                  placeholder="اشرح حالتك القانونية بالتفصيل..."
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-[var(--gold)] text-[var(--navy-blue)] py-3 rounded-lg hover:bg-[var(--gold-light)] transition-all duration-300 flex items-center justify-center gap-2 2xl:py-4 2xl:text-xl font-bold"
                >
                  <Send className="w-5 h-5 2xl:w-6 2xl:h-6" />
                  <span>إرسال الطلب</span>
                </button>
              </div>
            </form>

            {/* Quick Contact */}
            <div className="mt-12 p-8 2xl:p-12 bg-[var(--off-white)] rounded-2xl shadow-lg">
              <h3 className="text-2xl 2xl:text-3xl mb-6 text-[var(--navy-blue)] text-center font-bold">أو تواصل معنا مباشرة</h3>
              <div className="flex flex-col sm:flex-row gap-4 2xl:gap-8">
                <a
                  href="tel:+966501234567"
                  className="flex-1 bg-[var(--navy-blue)] text-white py-3 px-6 rounded-lg hover:bg-[var(--charcoal-black)] transition-all flex items-center justify-center gap-2 2xl:py-4 2xl:text-xl"
                >
                  <Phone className="w-5 h-5 2xl:w-6 2xl:h-6" />
                  <span>اتصل الآن</span>
                </a>
                <a
                  href="https://wa.me/966501234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-all flex items-center justify-center gap-2 2xl:py-4 2xl:text-xl"
                >
                  <MessageCircle className="w-5 h-5 2xl:w-6 2xl:h-6" />
                  <span>واتساب</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
