'use client';

import { clsx } from 'clsx';
import { BookNowButton } from '@/components/booking-panel';
import { Check, Clock } from 'lucide-react';

interface PricingTier {
  name: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  comingSoon?: boolean;
}

interface PricingProps {
  title: string;
  subtitle?: string;
  tiers: PricingTier[];
  backgroundColor?: string;
  textColor?: string;
  cardBackgroundColor?: string;
  cardTextColor?: string;
  highlightColor?: string;
  buttonClass?: string;
  comingSoonBadgeClass?: string;
  className?: string;
}

export function Pricing({
  title,
  subtitle,
  tiers,
  backgroundColor = 'bg-white',
  textColor = 'text-gray-900',
  cardBackgroundColor = 'bg-gray-50',
  cardTextColor = 'text-gray-900',
  highlightColor = 'bg-blue-600',
  buttonClass = 'bg-gray-900 text-white hover:bg-gray-800',
  comingSoonBadgeClass = 'bg-gray-200 text-gray-600',
  className,
}: PricingProps) {
  return (
    <section id="pricing" className={clsx('py-24 px-6', backgroundColor, className)}>
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
        
        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={clsx(
                'p-8 rounded-2xl transition-transform duration-300',
                tier.comingSoon ? 'opacity-75' : 'hover:-translate-y-1',
                tier.highlighted && !tier.comingSoon
                  ? `${highlightColor} text-white shadow-2xl scale-105` 
                  : `${cardBackgroundColor} ${cardTextColor} shadow-lg`
              )}
            >
              {/* Coming Soon Badge */}
              {tier.comingSoon && (
                <div className={clsx('inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4', comingSoonBadgeClass)}>
                  <Clock className="w-3 h-3" />
                  Coming Soon
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
              <p className={clsx('text-sm mb-4', tier.highlighted && !tier.comingSoon ? 'opacity-90' : 'opacity-70')}>
                {tier.description}
              </p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className={clsx('text-sm ml-2', tier.highlighted && !tier.comingSoon ? 'opacity-90' : 'opacity-70')}>
                  / {tier.duration}
                </span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className={clsx('w-5 h-5 flex-shrink-0', tier.highlighted && !tier.comingSoon ? 'text-white' : 'text-green-500')} />
                    <span className={tier.highlighted && !tier.comingSoon ? 'opacity-90' : 'opacity-80'}>{feature}</span>
                  </li>
                ))}
              </ul>
              
              {tier.comingSoon ? (
                <div className={clsx('w-full px-6 py-3 rounded-full font-semibold text-center', comingSoonBadgeClass)}>
                  Coming Very Soon
                </div>
              ) : (
                <BookNowButton
                  className={clsx(
                    'w-full px-6 py-3 rounded-full font-semibold transition-all duration-200',
                    tier.highlighted
                      ? 'bg-white text-gray-900 hover:bg-gray-100'
                      : buttonClass
                  )}
                >
                  Book Now
                </BookNowButton>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
