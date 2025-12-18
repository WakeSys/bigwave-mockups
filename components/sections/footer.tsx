import { clsx } from 'clsx';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

interface SocialLink {
  platform: 'facebook' | 'instagram' | 'twitter' | 'youtube';
  url: string;
}

interface FooterProps {
  logo: React.ReactNode;
  tagline?: string;
  socialLinks?: SocialLink[];
  backgroundColor?: string;
  textColor?: string;
  className?: string;
}

const socialIcons = {
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
  youtube: Youtube,
};

export function Footer({
  logo,
  tagline,
  socialLinks = [],
  backgroundColor = 'bg-gray-900',
  textColor = 'text-white',
  className,
}: FooterProps) {
  return (
    <footer className={clsx('py-12 px-6', backgroundColor, className)}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div className={clsx('text-center md:text-left', textColor)}>
            <div className="text-2xl font-bold mb-2">{logo}</div>
            {tagline && <p className="opacity-70">{tagline}</p>}
          </div>

          {/* Social Links */}
          {socialLinks.length > 0 && (
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.platform];
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={clsx(
                      'w-10 h-10 rounded-full flex items-center justify-center transition-opacity duration-200',
                      textColor,
                      'bg-white/10 hover:bg-white/20'
                    )}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          )}
        </div>

        {/* Bottom Bar */}
        <div className={clsx('mt-12 pt-8 border-t border-white/10 text-center', textColor)}>
          <p className="opacity-50 text-sm">
            © {new Date().getFullYear()} All rights reserved. Powered by{' '}
            <a
              href="https://bigwave.wakesys.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-100"
            >
              wakesys
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

