import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    ArrowUp,
    MessageCircle,
    Plus,
    X,
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Youtube,
    Mail,
    Share2
} from 'lucide-react';

export function FloatingActions() {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Handle Scroll to Top visibility
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        { icon: Facebook, color: '#1877F2', href: '#', label: 'Facebook' },
        { icon: Twitter, color: '#1DA1F2', href: '#', label: 'Twitter' },
        { icon: Linkedin, color: '#0A66C2', href: '#', label: 'LinkedIn' },
        { icon: Instagram, color: '#E4405F', href: '#', label: 'Instagram' },
        { icon: Youtube, color: '#FF0000', href: '#', label: 'Youtube' },
        { icon: Mail, color: '#EA4335', href: 'mailto:info@lawfirm.com', label: 'Email' },
    ];

    return (
        <>
            {/* Scroll To Top Button - Bottom Left */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        onClick={scrollToTop}
                        className="fixed bottom-8 left-8 z-50 p-3 bg-[var(--navy-blue)] text-white rounded-full shadow-lg hover:bg-[var(--charcoal-black)] transition-colors"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp className="w-6 h-6" />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Social Media Menu - Bottom Right */}
            <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-4">

                {/* Social Icons List */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <div className="flex flex-col gap-3 mb-2">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 20, scale: 0.8 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="p-3 rounded-full text-white shadow-md hover:scale-110 transition-transform flex items-center justify-center"
                                    style={{ backgroundColor: social.color }}
                                    title={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    )}
                </AnimatePresence>

                {/* Toggle Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={`p-3 rounded-full text-white shadow-lg transition-all duration-300 transform hover:scale-105 ${isMenuOpen ? 'bg-gray-600 rotate-45' : 'bg-blue-600'
                        }`}
                    aria-label="Toggle social menu"
                >
                    {isMenuOpen ? <Plus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                </button>

                {/* WhatsApp Button - Fixed */}
                <a
                    href="https://wa.me/966500000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20bd5a] transition-colors hover:scale-110"
                    aria-label="Contact on WhatsApp"
                >
                    <MessageCircle className="w-6 h-6" />
                </a>
            </div>
        </>
    );
}
