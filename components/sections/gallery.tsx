import { clsx } from 'clsx';
import Image from 'next/image';

interface GalleryProps {
  title: string;
  subtitle?: string;
  images: { src: string; alt: string }[];
  backgroundColor?: string;
  textColor?: string;
  className?: string;
}

export function Gallery({
  title,
  subtitle,
  images,
  backgroundColor = 'bg-gray-50',
  textColor = 'text-gray-900',
  className,
}: GalleryProps) {
  return (
    <section id="gallery" className={clsx('py-24 px-6', backgroundColor, className)}>
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
        
        {/* Image Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-2xl overflow-hidden group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

