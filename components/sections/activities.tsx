'use client';

import Image from 'next/image';
import { Clock, Users, DollarSign } from 'lucide-react';
import clsx from 'clsx';
import { BookNowButton } from '../booking-panel';

export interface Activity {
  name: string;
  description: string;
  price: string;
  duration: string;
  capacity?: string;
  image: string;
  features?: string[];
}

interface ActivitiesProps {
  title?: string;
  subtitle?: string;
  activities: Activity[];
  accentColor?: string;
  buttonClass?: string;
  backgroundColor?: string;
}

export function Activities({
  title = 'Our Activities',
  subtitle = 'Choose your adventure',
  activities,
  accentColor = 'text-blue-600',
  buttonClass = 'bg-blue-600 text-white hover:bg-blue-700',
  backgroundColor = 'bg-gray-50',
}: ActivitiesProps) {
  return (
    <section id="activities" className={`py-20 ${backgroundColor}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Activity Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={activity.image}
                  alt={activity.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white">{activity.name}</h3>
                </div>
              </div>

              {/* Activity Details */}
              <div className="p-6">
                <p className="text-gray-600 mb-4">{activity.description}</p>

                {/* Quick Info */}
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <DollarSign className={clsx('w-4 h-4', accentColor)} />
                    <span className="font-semibold">{activity.price}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{activity.duration}</span>
                  </div>
                  {activity.capacity && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>{activity.capacity}</span>
                    </div>
                  )}
                </div>

                {/* Features */}
                {activity.features && activity.features.length > 0 && (
                  <ul className="mb-6 space-y-1">
                    {activity.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className={clsx('w-1.5 h-1.5 rounded-full', accentColor.replace('text-', 'bg-'))} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Book Button */}
                <BookNowButton
                  className={clsx(
                    'w-full px-6 py-3 rounded-full font-semibold transition-all duration-200',
                    buttonClass
                  )}
                >
                  Book {activity.name}
                </BookNowButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

