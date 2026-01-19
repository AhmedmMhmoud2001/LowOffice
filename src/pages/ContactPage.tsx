import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const contactInfo = [
        {
            icon: Phone,
            title: 'اتصل بنا',
            details: ['+966 50 000 0000', '+966 11 000 0000'],
        },
        {
            icon: Mail,
            title: 'البريد الإلكتروني',
            details: ['info@lawfirm.com', 'contact@lawfirm.com'],
        },
        {
            icon: MapPin,
            title: 'موقعنا',
            details: ['الرياض، المملكة العربية السعودية', 'حي العليا، شارع التخصصي'],
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
                        <h1 className="text-5xl md:text-6xl 2xl:text-7xl mb-6 font-bold">تواصل معنا</h1>
                        <p className="text-xl 2xl:text-2xl text-gray-300">
                            نحن هنا لمساعدتك. تواصل معنا للحصول على استشارة قانونية أو لأي استفسار.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-20 2xl:py-32 bg-[var(--off-white)]">
                <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 2xl:gap-16">

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl 2xl:text-4xl font-bold text-[var(--navy-blue)] mb-8">معلومات التواصل</h2>
                            <div className="grid gap-8">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                        <div className="bg-[var(--gold)]/10 p-3 rounded-lg">
                                            <info.icon className="w-6 h-6 text-[var(--navy-blue)]" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-[var(--navy-blue)] mb-2">{info.title}</h3>
                                            {info.details.map((detail, idx) => (
                                                <p key={idx} className="text-gray-600 mb-1">{detail}</p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                        >
                            <h2 className="text-3xl 2xl:text-4xl font-bold text-[var(--navy-blue)] mb-8">أرسل لنا رسالة</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-700 mb-2 font-medium">الاسم</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] outline-none transition-all"
                                            placeholder="اسمك الكريم"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2 font-medium">البريد الإلكتروني</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] outline-none transition-all"
                                            placeholder="بريدك الإلكتروني"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2 font-medium">رقم الهاتف</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] outline-none transition-all"
                                        placeholder="رقم هاتفك"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2 font-medium">الموضوع</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] outline-none transition-all"
                                        placeholder="موضوع الرسالة"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2 font-medium">الرسالة</label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] outline-none transition-all resize-none"
                                        placeholder="كيف يمكننا مساعدتك؟"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-[var(--gold)] text-[var(--navy-blue)] py-4 rounded-xl text-lg font-bold hover:bg-[var(--gold-light)] transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg"
                                >
                                    <Send className="w-5 h-5" />
                                    إرسال الرسالة
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
