'use client';

import { BookNowButton } from '@/components/booking-panel';
import { clsx } from 'clsx';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  backgroundColor?: string;
  overlayColor?: string;
  textColor?: string;
  primaryButtonText?: string;
  primaryButtonClass?: string;
  secondaryButtonText?: string;
  secondaryButtonClass?: string;
  secondaryButtonHref?: string;
  badge?: string;
  badgeClass?: string;
  className?: string;
}

export function Hero({
  title,
  subtitle,
  backgroundImage,
  backgroundColor = 'bg-gray-900',
  overlayColor = 'from-black/60 to-black/40',
  textColor = 'text-white',
  primaryButtonText = 'Book Now',
  primaryButtonClass = 'bg-white text-gray-900 hover:bg-gray-100',
  secondaryButtonText,
  secondaryButtonClass = 'border-2 border-white text-white hover:bg-white/10',
  secondaryButtonHref = '#about',
  badge,
  badgeClass = 'bg-white/20 text-white',
  className,
}: HeroProps) {
  return (
    <section
      className={clsx(
        'relative min-h-screen flex items-center justify-center overflow-hidden',
        backgroundColor,
        className
      )}
    >
      {/* Background Image */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      {/* Overlay */}
      <div className={clsx('absolute inset-0 bg-gradient-to-b', overlayColor)} />
      
      {/* Content */}
      <div className={clsx('relative z-10 text-center px-6 max-w-4xl mx-auto', textColor)}>
        {badge && (
          <span className={clsx('inline-block px-4 py-2 rounded-full text-sm font-medium mb-6', badgeClass)}>
            {badge}
          </span>
        )}
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl opacity-90 mb-10 max-w-2xl mx-auto">
          {subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <BookNowButton
            className={clsx(
              'px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200',
              primaryButtonClass
            )}
          >
            {primaryButtonText}
          </BookNowButton>
          
          {secondaryButtonText && (
            <a
              href={secondaryButtonHref}
              className={clsx(
                'px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200',
                secondaryButtonClass
              )}
            >
              {secondaryButtonText}
            </a>
          )}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className={clsx('absolute bottom-8 left-1/2 -translate-x-1/2', textColor, 'opacity-60')}>
        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
          <div className="w-1 h-3 bg-current rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}


