import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Waves, Zap, TreePine, Baby, Key, Mountain, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'wakesys Vertical Demos | Booking System Mockups',
  description: 'Explore how wakesys booking system integrates with different entertainment verticals. Demo sites for aqua parks, trampoline parks, and more.',
};

const verticals = [
  {
    name: 'Aqua Park',
    slug: 'aqua-park',
    description: 'Ocean blues, summer vibes. Perfect for inflatable water parks and outdoor aqua attractions.',
    icon: Waves,
    gradient: 'from-cyan-500/80 to-blue-600/80',
    heroImage: '/generated/aqua-park/hero.png',
  },
  {
    name: 'Trampoline Park',
    slug: 'trampoline-park',
    description: 'Neon energy, urban edge. Bold design for indoor trampoline and ninja warrior facilities.',
    icon: Zap,
    gradient: 'from-pink-500/80 to-purple-600/80',
    heroImage: '/generated/trampoline-park/hero.png',
  },
  {
    name: 'Ropes Course',
    slug: 'ropes-course',
    description: 'Forest adventure, natural tones. Earthy design for aerial parks and zip line experiences.',
    icon: TreePine,
    gradient: 'from-emerald-500/80 to-green-600/80',
    heroImage: '/generated/ropes-course/hero.png',
  },
  {
    name: 'Indoor Playground',
    slug: 'indoor-playground',
    description: 'Playful colors, family friendly. Fun design for kids play centers and family entertainment.',
    icon: Baby,
    gradient: 'from-yellow-400/80 to-orange-500/80',
    heroImage: '/generated/indoor-playground/hero.png',
  },
  {
    name: 'Escape Room',
    slug: 'escape-room',
    description: 'Dark mystery, golden accents. Atmospheric design for immersive escape room experiences.',
    icon: Key,
    gradient: 'from-amber-500/80 to-amber-700/80',
    heroImage: '/generated/escape-room/hero.png',
  },
  {
    name: 'Climbing Gym',
    slug: 'climbing-gym',
    description: 'Bold typography, athletic vibe. Strong design for indoor climbing and bouldering facilities.',
    icon: Mountain,
    gradient: 'from-orange-500/80 to-red-600/80',
    heroImage: '/generated/climbing-gym/hero.png',
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            wakesys Booking Integration Demos
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            One Booking System,{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Endless Possibilities
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Explore how wakesys seamlessly integrates with different entertainment verticals. 
            Each demo showcases a unique design while sharing the same powerful booking engine.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wakesys.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors"
            >
              Learn About wakesys
            </a>
            <a
              href="#verticals"
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-gray-400 transition-colors"
            >
              View Demos
            </a>
          </div>
        </div>
      </section>

      {/* Verticals Grid */}
      <section id="verticals" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose a Vertical
            </h2>
            <p className="text-lg text-gray-600">
              Click on any demo to see the full mockup website with booking integration
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {verticals.map((vertical) => (
              <Link
                key={vertical.slug}
                href={`/${vertical.slug}`}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Card Header with Image */}
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={vertical.heroImage}
                    alt={vertical.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${vertical.gradient} mix-blend-multiply`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <vertical.icon className="w-12 h-12 text-white drop-shadow-lg" />
                  </div>
                </div>
                
                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {vertical.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {vertical.description}
                  </p>
                  
                  <div className="flex items-center text-blue-600 font-medium text-sm">
                    View Demo
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Info */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Booking Panel Integration
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Every demo site uses the same booking panel component. Click any &quot;Book Now&quot; button 
            to see the slide-in panel in action. On mobile, it redirects to the full booking flow.
          </p>
          
          <div className="bg-gray-800 rounded-xl p-6 text-left">
            <code className="text-sm text-green-400">
              {`// Integration is simple:`}<br/>
              {`<BookingPanelProvider`}<br/>
              {`  bookingUrl="https://staging.wakesys.app/[park]/booking"`}<br/>
              {`/>`}
            </code>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-100 border-t border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} wakesys. Demo sites for illustration purposes.
          </p>
          <a
            href="https://wakesys.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            Visit wakesys.com →
          </a>
        </div>
      </footer>
    </main>
  );
}
