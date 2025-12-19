import { clsx } from 'clsx';
import { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeaturesProps {
  title: string;
  subtitle?: string;
  features: Feature[];
  backgroundColor?: string;
  textColor?: string;
  cardBackgroundColor?: string;
  cardTextColor?: string;
  iconColor?: string;
  className?: string;
}

export function Features({
  title,
  subtitle,
  features,
  backgroundColor = 'bg-gray-50',
  textColor = 'text-gray-900',
  cardBackgroundColor = 'bg-white',
  cardTextColor = 'text-gray-900',
  iconColor = 'text-blue-600',
  className,
}: FeaturesProps) {
  return (
    <section id="about" className={clsx('py-24 px-6', backgroundColor, className)}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={clsx('text-center mb-16', textColor)}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg opacity-70 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        
        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={clsx(
                'p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300',
                cardBackgroundColor
              )}
            >
              <div className={clsx('w-14 h-14 rounded-xl flex items-center justify-center mb-6', iconColor, 'bg-current/10')}>
                <feature.icon className={clsx('w-7 h-7', iconColor)} />
              </div>
              <h3 className={clsx('text-xl font-bold mb-3', cardTextColor)}>
                {feature.title}
              </h3>
              <p className={clsx('opacity-70', cardTextColor)}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


