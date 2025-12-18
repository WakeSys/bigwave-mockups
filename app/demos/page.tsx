import { Metadata } from 'next';
import Link from 'next/link';
import { Waves, Anchor, Lock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Park Demos | wakesys',
  description: 'Live demo websites for parks exploring wakesys booking solutions.',
};

const demoPark = [
  {
    slug: 'bli-bli-watersports',
    name: 'Bli Bli Watersports',
    location: 'Sunshine Coast, QLD, Australia',
    description: 'Cable wakeboarding, inflatable aqua park, and barramundi fishing at Queensland\'s premier watersports destination.',
    activities: ['Cable Wakeboarding', 'Aqua Park', 'Barra Fishing'],
    color: 'from-sky-500 to-sky-600',
    icon: Waves,
  },
  {
    slug: 'aqua-chimp-kent',
    name: 'Aqua Chimp Kent',
    location: 'Yalding, Maidstone, UK',
    description: 'A unique floating jungle ropes course with 28 fun and challenging elements - world\'s first harness-free water obstacle course.',
    activities: ['Floating Ropes Course', 'Ninja Course', 'Water Obstacles'],
    color: 'from-emerald-500 to-teal-600',
    icon: Anchor,
  },
];

export default function DemosPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-amber-500/20 rounded-lg">
              <Lock className="w-5 h-5 text-amber-400" />
            </div>
            <span className="text-amber-400 font-medium text-sm uppercase tracking-wider">
              Internal Demos
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Park Demo Sites
          </h1>
          
          <p className="text-xl text-slate-300 max-w-2xl">
            See how your brand could look with wakesys. 
            Each demo showcases a fully integrated booking experience tailored to your park.
          </p>
        </div>
      </div>

      {/* Demo Parks Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          {demoPark.map((park) => {
            const Icon = park.icon;
            return (
              <Link
                key={park.slug}
                href={`/demos/${park.slug}`}
                className="group relative bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-900/50"
              >
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${park.color}`} />
                
                <div className="p-8">
                  {/* Icon and name */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${park.color} shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                  
                  <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-slate-100">
                    {park.name}
                  </h2>
                  
                  <p className="text-slate-400 text-sm mb-4">
                    📍 {park.location}
                  </p>
                  
                  <p className="text-slate-300 mb-6">
                    {park.description}
                  </p>
                  
                  {/* Activities tags */}
                  <div className="flex flex-wrap gap-2">
                    {park.activities.map((activity) => (
                      <span
                        key={activity}
                        className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Footer note */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm">
            These demos are for internal use only. Each site connects to a staging booking environment.
          </p>
        </div>
      </div>
    </main>
  );
}
