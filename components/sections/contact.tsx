import { clsx } from 'clsx';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string[];
}

interface ContactProps {
  title: string;
  subtitle?: string;
  contact: ContactInfo;
  mapEmbedUrl?: string;
  backgroundColor?: string;
  textColor?: string;
  cardBackgroundColor?: string;
  cardTextColor?: string;
  iconColor?: string;
  className?: string;
}

export function Contact({
  title,
  subtitle,
  contact,
  mapEmbedUrl,
  backgroundColor = 'bg-white',
  textColor = 'text-gray-900',
  cardBackgroundColor = 'bg-gray-50',
  cardTextColor = 'text-gray-900',
  iconColor = 'text-blue-600',
  className,
}: ContactProps) {
  return (
    <section id="contact" className={clsx('py-24 px-6', backgroundColor, className)}>
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
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className={clsx('p-8 rounded-2xl', cardBackgroundColor)}>
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className={clsx('w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0', iconColor, 'bg-current/10')}>
                  <MapPin className={clsx('w-6 h-6', iconColor)} />
                </div>
                <div className={cardTextColor}>
                  <h3 className="font-bold mb-1">Address</h3>
                  <p className="opacity-70">{contact.address}</p>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className={clsx('w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0', iconColor, 'bg-current/10')}>
                  <Phone className={clsx('w-6 h-6', iconColor)} />
                </div>
                <div className={cardTextColor}>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <a href={`tel:${contact.phone}`} className="opacity-70 hover:opacity-100 transition-opacity">
                    {contact.phone}
                  </a>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className={clsx('w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0', iconColor, 'bg-current/10')}>
                  <Mail className={clsx('w-6 h-6', iconColor)} />
                </div>
                <div className={cardTextColor}>
                  <h3 className="font-bold mb-1">Email</h3>
                  <a href={`mailto:${contact.email}`} className="opacity-70 hover:opacity-100 transition-opacity">
                    {contact.email}
                  </a>
                </div>
              </div>
              
              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className={clsx('w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0', iconColor, 'bg-current/10')}>
                  <Clock className={clsx('w-6 h-6', iconColor)} />
                </div>
                <div className={cardTextColor}>
                  <h3 className="font-bold mb-1">Hours</h3>
                  <div className="opacity-70 space-y-1">
                    {contact.hours.map((hour, index) => (
                      <p key={index}>{hour}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map */}
          <div className="rounded-2xl overflow-hidden h-[400px] lg:h-auto">
            {mapEmbedUrl ? (
              <iframe
                src={mapEmbedUrl}
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className={clsx('w-full h-full flex items-center justify-center', cardBackgroundColor, cardTextColor)}>
                <div className="text-center">
                  <MapPin className={clsx('w-16 h-16 mx-auto mb-4 opacity-30', iconColor)} />
                  <p className="opacity-50">Map coming soon</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

