import { motion } from 'motion/react';
import { Scale, Building, FileText, Users, Home, Banknote, Gavel, ShieldCheck, Briefcase } from 'lucide-react';
import { ServiceCard } from '../components/ServiceCard';

export function ServicesPage() {
  const services = [
    {
      icon: Scale,
      title: 'القضايا المدنية',
      description: 'تمثيل قانوني شامل في القضايا المدنية بما في ذلك النزاعات العقارية والتجارية.',
    },
    {
      icon: Building,
      title: 'القضايا التجارية',
      description: 'استشارات وتمثيل قانوني في القضايا التجارية وحل النزاعات التجارية.',
    },
    {
      icon: FileText,
      title: 'صياغة العقود',
      description: 'صياغة ومراجعة جميع أنواع العقود والاتفاقيات القانونية بدقة واحترافية.',
    },
    {
      icon: Users,
      title: 'قضايا الأسرة',
      description: 'تقديم المشورة القانونية والتمثيل في قضايا الأسرة مع الحفاظ على السرية.',
    },
    {
      icon: Home,
      title: 'القضايا العقارية',
      description: 'خدمات قانونية متكاملة للمعاملات العقارية والنزاعات المتعلقة بالعقارات.',
    },
    {
      icon: Banknote,
      title: 'القضايا المالية',
      description: 'استشارات قانونية في القضايا المالية والمصرفية وحل النزاعات المالية.',
    },
    {
      icon: Gavel,
      title: 'التحكيم والوساطة',
      description: 'حل النزاعات عن طريق التحكيم والوساطة بطريقة سريعة وفعالة.',
    },
    {
      icon: ShieldCheck,
      title: 'الملكية الفكرية',
      description: 'حماية حقوق الملكية الفكرية والعلامات التجارية وبراءات الاختراع.',
    },
    {
      icon: Briefcase,
      title: 'قانون العمل',
      description: 'استشارات وتمثيل في قضايا العمل والنزاعات بين أصحاب العمل والموظفين.',
    },
  ];

  return (
    <div className="min-h-screen" dir="rtl">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--navy-blue)] to-[var(--charcoal-black)] text-white py-20 2xl:py-32">
        <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl 2xl:max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl 2xl:text-7xl mb-6 font-bold">الخدمات القانونية</h1>
            <p className="text-xl 2xl:text-2xl text-gray-300">
              نقدم مجموعة شاملة من الخدمات القانونية المتخصصة لتلبية احتياجاتك
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 2xl:py-32 bg-[var(--off-white)]">
        <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 2xl:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <ServiceCard {...service} link="/service-details" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 2xl:py-32 bg-white">
        <div className="max-w-4xl 2xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl 2xl:text-5xl mb-6 text-[var(--navy-blue)] font-bold">هل تحتاج إلى خدمة قانونية؟</h2>
          <p className="text-xl 2xl:text-2xl text-gray-600 mb-8">
            فريقنا من المحامين المتخصصين جاهز لمساعدتك في جميع احتياجاتك القانونية
          </p>
          <a
            href="/consultation"
            className="inline-block bg-[var(--gold)] text-[var(--navy-blue)] px-10 py-4 rounded-xl text-lg 2xl:text-xl font-semibold hover:bg-[var(--gold-light)] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            احجز استشارة مجانية
          </a>
        </div>
      </section>
    </div>
  );
}
