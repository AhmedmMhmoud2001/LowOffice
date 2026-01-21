import { motion } from 'motion/react';
import { Target, Eye, Award, Shield, Users, Globe, CheckCircle } from 'lucide-react';

import heroBg from '../assets/hero-bg.png';

export function AboutPage() {
    const values = [
        {
            icon: Shield,
            title: 'النزاهة والشفافية',
            description: 'نلتزم بأعلى معايير الأخلاق المهنية والصدق في جميع تعاملاتنا مع العملاء.',
        },
        {
            icon: Award,
            title: 'التميز والاحترافية',
            description: 'نسعى دائمًا لتقديم خدمات قانونية ذات جودة عالية تفوق توقعات عملائنا.',
        },
        {
            icon: Users,
            title: 'السرية والخصوصية',
            description: 'نضمن سرية جميع المعلومات والبيانات الخاصة بعملائنا وقضاياهم.',
        },
        {
            icon: Target,
            title: 'تحقيق النتائج',
            description: 'نركز جهودنا على تحقيق أفضل النتائج الممكنة لموكلنا وحماية مصالحهم.',
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
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl 2xl:max-w-5xl mx-auto"
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl mb-6 text-white leading-tight font-bold">
                            من نحن
                        </h1>
                        <p className="text-xl md:text-2xl 2xl:text-3xl mb-10 text-gray-300 leading-relaxed max-w-3xl mx-auto">
                            شريككم القانوني الموثوق لتحقيق العدالة وحماية الحقوق
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* About Content */}
            <section className="py-20 2xl:py-32 bg-white">
                <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 2xl:gap-16 items-center">

                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-2xl sm:text-3xl 2xl:text-4xl font-bold text-[var(--navy-blue)] mb-6">نبذة عن المكتب</h2>
                            <p className="text-lg 2xl:text-xl text-gray-600 mb-6 leading-relaxed">
                                مكتب عمرو قطب للمحاماة والاستشارات القانونية هو أحد المكاتب الرائدة في مجال المحاماة، حيث يضم نخبة من المحامين والمستشارين القانونيين ذوي الخبرة والكفاءة العالية.
                            </p>
                            <p className="text-lg 2xl:text-xl text-gray-600 mb-6 leading-relaxed">
                                نحن نفخر بتقديم حلول قانونية مبتكرة وفعالة لعملائنا، سواء كانوا أفرادًا أو شركات، في مختلف المجالات القانونية. نسعى جاهدين لبناء علاقات طويلة الأمد مع عملائنا مبنية على الثقة والاحترام المتبادل.
                            </p>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
                                <div className="flex items-start gap-4">
                                    <div className="bg-[var(--gold)]/10 p-2 rounded-lg mt-1">
                                        <CheckCircle className="w-5 h-5 text-[var(--navy-blue)]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[var(--navy-blue)] mb-1">خبرة واسعة</h3>
                                        <p className="text-gray-600">سنوات من الخبرة في التعامل مع القضايا المعقدة والمتنوعة.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-[var(--gold)]/10 p-2 rounded-lg mt-1">
                                        <Globe className="w-5 h-5 text-[var(--navy-blue)]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[var(--navy-blue)] mb-1">تغطية شاملة</h3>
                                        <p className="text-gray-600">خدماتنا تغطي كافة أنحاء المملكة ونقدم استشارات دولية.</p>
                                    </div>
                                </div>
                            </div>

                        </motion.div>

                        {/* Vision & Mission Cards */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="bg-[var(--off-white)] p-8 rounded-2xl border-r-4 border-[var(--gold)]"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="bg-white p-3 rounded-full shadow-sm">
                                        <Eye className="w-6 h-6 text-[var(--navy-blue)]" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[var(--navy-blue)]">رؤيتنا</h3>
                                </div>
                                <p className="text-gray-600 text-lg">
                                    أن نكون الخيار الأول والمرجع القانوني الأوثق لتقديم الخدمات القانونية المتميزة، والمساهمة في تحقيق العدالة ونشر الثقافة القانونية في المجتمع.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="bg-[var(--off-white)] p-8 rounded-2xl border-r-4 border-[var(--navy-blue)]"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="bg-white p-3 rounded-full shadow-sm">
                                        <Target className="w-6 h-6 text-[var(--navy-blue)]" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[var(--navy-blue)]">رسالتنا</h3>
                                </div>
                                <p className="text-gray-600 text-lg">
                                    تقديم خدمات قانونية تتسم بالجودة والاحترافية، والدفاع عن حقوق موكلينا بكل أمانة وإخلاص، مع الالتزام بقيم العدالة والنزاهة.
                                </p>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 2xl:py-32 bg-[var(--off-white)]">
                <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl mb-4 text-[var(--navy-blue)] font-bold">قيمنا ومبادئنا</h2>
                        <p className="text-xl 2xl:text-2xl text-gray-600 max-w-3xl mx-auto">
                            نستند في عملنا إلى مجموعة من القيم الراسخة التي تحكم أداءنا وتعاملاتنا
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-8 rounded-xl shadow-lg text-center hover:-translate-y-2 transition-transform duration-300"
                            >
                                <div className="w-16 h-16 bg-[var(--gold)]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-[var(--navy-blue)]">
                                    <value.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-[var(--navy-blue)] mb-3">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
