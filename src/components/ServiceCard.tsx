import { motion } from 'motion/react';
import type { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
}

export function ServiceCard({ icon: Icon, title, description, link }: ServiceCardProps) {
  const content = (
    <motion.div
      whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(212, 165, 116, 0.2)' }}
      className="bg-white p-8 2xl:p-10 rounded-2xl shadow-lg h-full transition-all duration-300 cursor-pointer flex flex-col"
      dir="rtl"
    >
      <div className="w-16 h-16 2xl:w-20 2xl:h-20 bg-gradient-to-br from-[var(--gold)] to-[var(--gold-light)] rounded-xl flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 2xl:w-10 2xl:h-10 text-[var(--navy-blue)]" />
      </div>
      <h3 className="text-2xl 2xl:text-3xl mb-4 text-[var(--navy-blue)] font-bold">{title}</h3>
      <p className="text-gray-600 2xl:text-lg leading-relaxed flex-grow">{description}</p>
      {link && (
        <div className="mt-6 text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors inline-flex items-center gap-2 2xl:text-lg font-medium">
          <span>عرض التفاصيل</span>
          <span>←</span>
        </div>
      )}
    </motion.div>
  );

  if (link) {
    return <Link to={link} className="block h-full">{content}</Link>;
  }

  return content;
}
