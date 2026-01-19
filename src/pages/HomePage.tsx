import { motion, useInView, animate } from 'motion/react';
import { useRef, useEffect } from 'react';
import { FileCheck, Users, Briefcase, Shield, Award, Clock } from 'lucide-react';
import { ServiceCard } from '../components/ServiceCard';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import video from '../assets/7841702-hd_1920_1080_30fps.mp4';
import 'swiper/css';
import 'swiper/css/pagination';


const AnimatedCounter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      const node = ref.current;
      const controls = animate(0, value, {
        duration: duration,
        onUpdate(value) {
          if (node) {
            node.textContent = Math.round(value).toString();
          }
        },
        ease: 'easeOut',
      });
      return () => controls.stop();
    }
  }, [value, duration, inView]);

  return <span ref={ref}>0</span>;
};

export function HomePage() {
  const services = [
    {
      icon: FileCheck,
      title: 'الاستشارات القانونية أونلاين',
      description: 'احصل على استشارة قانونية فورية من محامين متخصصين عبر الإنترنت في أي وقت ومن أي مكان.',
      link: '/consultation',
    },
    {
      icon: Briefcase,
      title: 'الخدمات القانونية',
      description: 'مجموعة شاملة من الخدمات القانونية لجميع احتياجاتك القانونية في مختلف المجالات.',
      link: '/services',
    },
    {
      icon: Users,
      title: 'الفرنشايز',
      description: 'خدمات قانونية متخصصة لإنشاء وإدارة الفرنشايز وحماية حقوق الملكية الفكرية.',
      link: '/franchise',
    },
    {
      icon: FileCheck,
      title: 'الاستشارات العقارية',
      description: 'نقدم استشارات قانونية متخصصة في مجال العقارات والملكية والتسجيل العقاري.',
      link: '/consultation',
    },
    {
      icon: Briefcase,
      title: 'تأسيس الشركات',
      description: 'إجراءات سريعة وقانونية لتأسيس الشركات بجميع أنواعها واستخراج التراخيص اللازمة.',
      link: '/services',
    },
    {
      icon: Shield,
      title: 'القضايا العمالية',
      description: 'حماية حقوق العمال وأصحاب العمل وحل النزاعات العمالية وفقاً لنظام العمل.',
      link: '/consultation',
    },
  ];



  const heroSlides = [
    {
      title: 'عمرو قطب للمحاماة والاستشارات القانونية',
      description: 'نقدم خدمات قانونية احترافية ومتميزة للأفراد والشركات مع ضمان السرية التامة والنزاهة',
      primaryBtn: { text: 'احجز استشارة الآن', link: '/consultation' },
      secondaryBtn: { text: 'تواصل معنا', link: '/contact' }
    },
    {
      title: 'تأسيس الشركات والفرنشايز',
      description: 'نساعدك في تأسيس شركتك وحماية علامتك التجارية وصياغة عقود الامتياز التجاري بكفاءة عالية وفقاً لأحدث الأنظمة',
      primaryBtn: { text: 'خدمات الشركات', link: '/services' },
      secondaryBtn: { text: 'طلب عرض سعر', link: '/contact' }
    },
    {
      title: 'نخبة من المستشارين القانونيين',
      description: 'فريق متكامل من المحامين والمستشارين ذوي الخبرة جاهزون للدفاع عن حقوقك وتقديم المشورة السديدة',
      primaryBtn: { text: 'فريق العمل', link: '/about' },
      secondaryBtn: { text: 'تحدث مع محامي', link: '/consultation' }
    }
  ];

  const trustPoints = [
    { icon: Award, value: 15, suffix: '+', extraText: ' سنة', description: 'من الخبرة القانونية' },
    { icon: Shield, value: 100, suffix: '%', description: 'سرية تامة' },
    { icon: Users, value: 50, suffix: '+', description: 'محامي محترف' },
  ];

  return (
    <div className="min-h-screen" dir="rtl">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative bg-[var(--navy-blue)] text-white py-20 md:py-32 xl:py-40 overflow-hidden min-h-[700px]">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={video} type="video/mp4" />
          </video>
          {/* Dynamic Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy-blue)]/95 via-[var(--navy-blue)]/80 to-[var(--charcoal-black)]/90"></div>
        </div>

        <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center">
          <Swiper
            modules={[Pagination, Autoplay, EffectFade]}
            effect={'fade'}
            fadeEffect={{ crossFade: true }}
            speed={1000}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            // pagination={{
            //   clickable: true,
            //   renderBullet: function (index, className) {
            //     return '<span class="' + className + ' bg-[var(--gold)]"></span>';
            //   }
            // }}
            // navigation
            loop={true}
            className="w-full"
          >
            {heroSlides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="text-center max-w-4xl 2xl:max-w-5xl mx-auto py-10">
                  <motion.h1
                    key={`title-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl mb-6 text-white leading-tight font-bold"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    key={`desc-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl 2xl:text-3xl mb-10 text-gray-300 leading-relaxed max-w-3xl mx-auto"
                  >
                    {slide.description}
                  </motion.p>
                  <motion.div
                    key={`btns-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                  >
                    <Link
                      to={slide.primaryBtn.link}
                      className="bg-[var(--gold)] text-[var(--navy-blue)] px-10 py-4 rounded-xl text-lg 2xl:text-xl font-semibold hover:bg-[var(--gold-light)] transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
                    >
                      {slide.primaryBtn.text}
                    </Link>
                    <Link
                      to={slide.secondaryBtn.link}
                      className="bg-white bg-opacity-10 backdrop-blur-sm text-[var(--navy-blue)] px-10 py-4 rounded-xl text-lg 2xl:text-xl font-semibold hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20 hover:scale-105"
                    >
                      {slide.secondaryBtn.text}
                    </Link>
                  </motion.div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 2xl:py-32 bg-[var(--off-white)]">
        <div className="max-w-[1920px] mx-auto overflow-hidden px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl mb-4 text-[var(--navy-blue)] font-bold">خدماتنا القانونية</h2>
            <p className="text-xl 2xl:text-2xl text-gray-600 max-w-3xl mx-auto">
              نوفر لك مجموعة شاملة من الخدمات القانونية المتخصصة لتلبية احتياجاتك
            </p>
          </motion.div>

          <div className="services-swiper-container py-10">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}

              breakpoints={{
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1536: {
                  slidesPerView: 3.5,
                  spaceBetween: 50,
                },
              }}
              className="!overflow-visible"
            >
              {services.map((service, index) => (
                <SwiperSlide key={index} className="h-auto">
                  {({ isActive }) => (
                    <motion.div
                      animate={{
                        scale: isActive ? 1.1 : 0.9,
                        opacity: isActive ? 1 : 0.6,
                        y: isActive ? -10 : 0
                      }}
                      transition={{ duration: 0.4 }}
                      className={`h-full transaction-all duration-300 ${isActive ? 'z-10 relative' : ''}`}
                    >
                      <div>
                        <ServiceCard {...service} />
                      </div>
                    </motion.div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 2xl:py-32 bg-white">
        <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 2xl:gap-16">
            {trustPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 2xl:w-24 2xl:h-24 bg-gradient-to-br from-[var(--gold)] to-[var(--gold-light)] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <point.icon className="w-10 h-10 2xl:w-12 2xl:h-12 text-[var(--navy-blue)]" />
                </div>
                <div className="text-3xl sm:text-4xl 2xl:text-5xl font-bold text-[var(--navy-blue)] mb-2" dir="ltr">
                  <span className="inline-flex items-center gap-1">
                    {point.extraText && <span>{point.extraText}</span>}
                    {point.suffix && <span>{point.suffix}</span>}
                    <AnimatedCounter value={point.value} />
                  </span>
                </div>
                <p className="text-gray-600 text-lg 2xl:text-xl">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 2xl:py-32 bg-[var(--off-white)]">
        <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl mb-4 text-[var(--navy-blue)] font-bold">لماذا تختار مكتبنا؟</h2>
            <p className="text-xl 2xl:text-2xl text-gray-600 max-w-3xl mx-auto">
              نتميز بالخبرة والكفاءة في تقديم الحلول القانونية التي تضمن حقوقك
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 2xl:gap-12">
            {[
              { title: 'خبرة طويلة', desc: 'أكثر من 20 عاماً من الخبرة في مختلف مجالات القانون.', icon: Award },
              { title: 'فريق متخصص', desc: 'نخبة من المحامين والمستشارين القانونيين في كافة التخصصات.', icon: Users },
              { title: 'تواجد دائم', desc: 'نحن هنا لخدمتكم والإجابة على استفساراتكم على مدار الساعة.', icon: Clock },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center border-t-4 border-[var(--gold)]"
              >
                <div className="w-16 h-16 bg-[var(--navy-blue)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--navy-blue)] mb-4">{item.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 2xl:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--off-white)] skew-x-12 opacity-50 z-0" />
        <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl mb-4 text-[var(--navy-blue)] font-bold">كيف نعمل؟</h2>
            <p className="text-xl 2xl:text-2xl text-gray-600 max-w-3xl mx-auto">
              خطوات بسيطة وواضحة للبدء في حل قضيتك القانونية
            </p>
          </motion.div>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="pb-12"
          >
            {[
              { step: '01', title: 'تواصل معنا', desc: 'اتصل بنا أو احجز استشارة عبر الموقع.' },
              { step: '02', title: 'دراسة القضية', desc: 'يقوم فريقنا بدراسة تفاصيل قضيتك بعناية.' },
              { step: '03', title: 'وضع الخطة', desc: 'نضع استراتيجية قانونية محكمة لضمان حقك.' },
              { step: '04', title: 'التنفيذ', desc: 'نبدأ في الإجراءات القانونية ونطلعك على المستجدات.' },
            ].map((item, index) => (
              <SwiperSlide key={index} className="h-full py-4">
                <div
                  className="relative p-6 bg-[var(--off-white)]/30 rounded-2xl h-full border border-gray-100 hover:shadow-lg transition-all"
                >
                  <div className="text-6xl font-black text-[var(--gold)] opacity-20 mb-[-20px] absolute top-0 right-4">{item.step}</div>
                  <div className="pt-8 relative z-10">
                    <h3 className="text-2xl font-bold text-[var(--navy-blue)] mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 2xl:py-32">
        <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl mb-4 font-bold text-[var(--navy-blue)]">ماذا يقول عملاؤنا؟</h2>
            <p className="text-xl 2xl:text-2xl text-gray-600 max-w-3xl mx-auto">
              نسعد دائماً بثقة عملائنا ورضاهم عن خدماتنا
            </p>
          </motion.div>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            // pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {[
              { name: 'أحمد محمد', role: 'رئيس تنفيذي', comment: 'خدمة ممتازة واحترافية عالية. ساعدوني في تأسيس شركتي وحماية حقوقي التجارية.' },
              { name: 'سارة العتيبي', role: 'عميلة', comment: 'تجربة رائعة مع مكتب عمرو قطب. استشارة دقيقة وسرعة في الإنجاز.' },
              { name: 'خالد عبدالله', role: 'مستثمر', comment: 'الفريق متعاون جداً ولديهم معرفة عميقة بالقوانين والأنظمة.' },
              { name: 'محمد علي', role: 'مدير شركة', comment: 'تعامل راقي ونتائج مبهرة. أنصح بالتعامل معهم بشدة.' },
              { name: 'فاطمة الزهراء', role: 'رائدة أعمال', comment: 'ساعدوني في صياغة عقود الشراكة وحماية الملكية الفكرية لمشروعي.' },
              { name: 'عبدالرحمن سالم', role: 'عميل', comment: 'شكراً لكم على جهودكم واهتمامكم بأدق التفاصيل في قضيتي.' },
              { name: 'نورة السعيد', role: 'مديرة تسويق', comment: 'الخدمة كانت فوق التوقعات، فريق عمل محترف جداً.' },
            ].map((client, index) => (
              <SwiperSlide key={index} className="h-full py-4">
                <div
                  className="bg-[var(--navy-blue)] text-white p-8 rounded-2xl border border-white/10 hover:bg-[var(--charcoal-black)] transition-colors h-auto min-h-[250px] flex flex-col"
                >
                  <div className="flex text-[var(--gold)] mb-4">
                    {'★★★★★'}
                  </div>
                  <p className="text-lg text-gray-200 mb-6 leading-relaxed flex-grow">"{client.comment}"</p>
                  <div>
                    <h4 className="font-bold text-xl">{client.name}</h4>
                    <span className="text-sm text-[var(--gold)]">{client.role}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="py-20 2xl:py-32 bg-gradient-to-br from-[var(--navy-blue)] to-[var(--charcoal-black)] text-white">
        <div className="max-w-4xl 2xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl mb-6 font-bold">هل تحتاج إلى استشارة قانونية؟</h2>
            <p className="text-xl 2xl:text-2xl mb-10 text-gray-300">
              فريقنا من المحامين المتخصصين جاهز لمساعدتك في جميع احتياجاتك القانونية
            </p>
            <Link
              to="/consultation"
              className="inline-block bg-[var(--gold)] text-[var(--navy-blue)] px-12 py-4 rounded-xl text-lg 2xl:text-xl font-semibold hover:bg-[var(--gold-light)] transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              احجز موعدك الآن
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
