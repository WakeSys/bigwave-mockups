'use client';

import { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { Menu, X } from 'lucide-react';
import { BookNowButton } from '@/components/booking-panel';

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  logo: React.ReactNode;
  links: NavLink[];
  backgroundColor?: string;
  textColor?: string;
  buttonClass?: string;
  className?: string;
  /** Invert logo colors when scrolled (useful for white logos on light backgrounds) */
  invertLogoOnScroll?: boolean;
  /** Invert logo colors on hero/transparent state (useful for dark logos on dark backgrounds) */
  invertLogoOnHero?: boolean;
  /** Always show background (useful when logo doesn't work well on transparent) */
  alwaysShowBackground?: boolean;
}

export function Navbar({
  logo,
  links,
  backgroundColor = 'bg-white/90',
  textColor = 'text-gray-900',
  buttonClass = 'bg-gray-900 text-white hover:bg-gray-800',
  className,
  invertLogoOnScroll = false,
  invertLogoOnHero = false,
  alwaysShowBackground = false,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use scrolled styling when actually scrolled, alwaysShowBackground is true, OR mobile menu is open
  const showBackground = isScrolled || alwaysShowBackground || isMobileMenuOpen;

  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        showBackground ? `${backgroundColor} backdrop-blur-lg shadow-lg` : 'bg-transparent',
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="#" 
            className={clsx(
              'text-2xl font-bold transition-all duration-300',
              showBackground ? textColor : 'text-white',
              invertLogoOnScroll && showBackground && 'invert',
              invertLogoOnHero && !showBackground && 'invert brightness-0'
            )}
          >
            {logo}
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={clsx(
                  'font-medium transition-colors duration-200',
                  showBackground ? `${textColor} hover:opacity-70` : 'text-white hover:opacity-80'
                )}
              >
                {link.label}
              </a>
            ))}
            <BookNowButton
              className={clsx(
                'px-6 py-2.5 rounded-full font-semibold transition-all duration-200',
                buttonClass
              )}
            >
              Book Now
            </BookNowButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={clsx('md:hidden p-2', showBackground ? textColor : 'text-white')}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={clsx('md:hidden py-4 border-t', showBackground ? 'border-gray-200' : 'border-white/20')}>
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    'font-medium py-2',
                    showBackground ? textColor : 'text-white'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <BookNowButton
                className={clsx(
                  'px-6 py-3 rounded-full font-semibold text-center',
                  buttonClass
                )}
              >
                Book Now
              </BookNowButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

