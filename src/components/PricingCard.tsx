import { motion } from 'motion/react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  onSelect: () => void;
}

export function PricingCard({
  title,
  price,
  description,
  features,
  highlighted = false,
  onSelect,
}: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`bg-white p-8 2xl:p-10 rounded-2xl shadow-lg relative ${highlighted ? 'ring-2 ring-[var(--gold)] shadow-2xl' : ''
        }`}
      dir="rtl"
    >
      {highlighted && (
        <div className="absolute -top-4 right-1/2 translate-x-1/2 bg-[var(--gold)] text-[var(--navy-blue)] px-6 py-1 rounded-full text-sm 2xl:text-base font-bold">
          الأكثر طلباً
        </div>
      )}
      <div className="text-center mb-6 2xl:mb-8">
        <h3 className="text-2xl 2xl:text-3xl mb-2 text-[var(--navy-blue)] font-bold">{title}</h3>
        <p className="text-gray-600 mb-4 2xl:text-lg">{description}</p>
        <div className="text-5xl 2xl:text-6xl text-[var(--navy-blue)] mb-2 font-bold">{price}</div>
      </div>
      <ul className="space-y-4 2xl:space-y-5 mb-8 2xl:mb-10">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="w-6 h-6 2xl:w-8 2xl:h-8 bg-[var(--gold)] bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-4 h-4 2xl:w-5 2xl:h-5 text-[var(--gold)]" />
            </div>
            <span className="text-gray-700 2xl:text-lg">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={onSelect}
        className={`w-full py-3 2xl:py-4 rounded-lg transition-all duration-300 2xl:text-xl font-bold ${highlighted
            ? 'bg-[var(--gold)] text-[var(--navy-blue)] hover:bg-[var(--gold-light)] shadow-md hover:shadow-xl'
            : 'bg-[var(--navy-blue)] text-white hover:bg-[var(--charcoal-black)]'
          }`}
      >
        اختر هذه الخطة
      </button>
    </motion.div>
  );
}
