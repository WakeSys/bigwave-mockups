import { Metadata } from 'next';
import Image from 'next/image';
import { TreePine, Shield, Users, Clock, Waves, Heart, Ruler, Award } from 'lucide-react';
import { Hero, Features, Pricing, Contact, Navbar, Footer, BookingPanelProvider } from '@/components';
import { BOOKING_BASE_URL } from '@/lib/config';

// Logo component using the actual Aqua Chimp Kent logo
function AquaChimpLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/demos/aqua-chimp-kent/logo.svg"
      alt="Aqua Chimp Kent"
      width={140}
      height={100}
      className={`h-12 w-auto ${className || ''}`}
    />
  );
}

export const metadata: Metadata = {
  title: 'Aqua Chimp Kent | Floating Jungle Ropes Course | Yalding, UK',
  description: 'A unique floating ropes course with 28 fun and challenging elements. World\'s first harness-free water obstacle course in Yalding, Maidstone, UK.',
};

const navLinks = [
  { label: 'The Experience', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Requirements', href: '#requirements' },
  { label: 'Contact', href: '#contact' },
];

const features = [
  {
    icon: TreePine,
    title: '28 Obstacles',
    description: 'Navigate the Ninja Course, cross Water Lillies, tackle the climbing wall, balance on Lemur Tail and finish with a splash on Monkey Plank!',
  },
  {
    icon: Waves,
    title: 'World First',
    description: 'No safety harness or restrictions - just the water below. A truly unique floating jungle experience suitable for all abilities.',
  },
  {
    icon: Shield,
    title: 'Full Kit Included',
    description: 'Your session includes wetsuit, helmet and buoyancy aid. Just bring your swimsuit, towel and water shoes!',
  },
  {
    icon: Clock,
    title: '60 Minute Sessions',
    description: 'A full hour of adventure on the water. Plenty of time to conquer every obstacle and make a splash.',
  },
  {
    icon: Users,
    title: 'Family Friendly',
    description: 'Perfect for ages 6+. Family tickets available for 2 adults and 2 children at a special rate.',
  },
  {
    icon: Heart,
    title: 'All Abilities Welcome',
    description: 'Whether you\'re a first-timer or seasoned adventurer, our course offers fun challenges for everyone.',
  },
];

const pricing = [
  {
    name: 'Standard Session',
    price: '£25',
    duration: 'person',
    description: '60 minutes of adventure',
    features: ['Full course access', 'Wetsuit included', 'Helmet included', 'Buoyancy aid included'],
    highlighted: true,
  },
  {
    name: 'Family Ticket',
    price: '£80',
    duration: 'family',
    description: '2 adults + 2 children',
    features: ['4 people included', 'All hire kit included', 'Save £20', 'Same time slot'],
    comingSoon: true,
  },
  {
    name: 'Group Booking',
    price: 'From £20',
    duration: 'person',
    description: 'Parties & groups',
    features: ['10+ participants', 'Exclusive sessions available', 'Party packages', 'Corporate events'],
    comingSoon: true,
  },
];

const requirements = [
  {
    name: 'Grip Socks',
    price: '£3',
    duration: 'pair',
    description: 'Essential footwear',
    features: ['Available at reception', 'Or bring closed-toe shoes', 'Crocs not suitable', 'Must get wet'],
    highlighted: false,
  },
];

const contactInfo = {
  address: 'Unit B16, Yalding Enterprise Park, Hampstead Lane, Yalding ME18 6FN',
  phone: '01622 934416',
  email: 'info@aquachimpkent.co.uk',
  hours: [
    'Friday: 9am - 6pm',
    'Saturday: 9am - 6pm',
    'Sunday: 9am - 6pm',
    'Mon-Thu: Closed',
  ],
};

export default function AquaChimpKentPage() {
  const bookingUrl = `${BOOKING_BASE_URL}/aquachimpkent/booking`;

  return (
    <main className="font-[family-name:var(--font-quicksand)]">
      <BookingPanelProvider bookingUrl={bookingUrl} />
      
      <Navbar
        logo={<AquaChimpLogo className="brightness-0 invert" />}
        links={navLinks}
        backgroundColor="bg-cyan-600/95"
        textColor="text-white"
        buttonClass="bg-orange-500 text-white hover:bg-orange-600"
        alwaysShowBackground={true}
      />
      
      <Hero
        title="A Floating Jungle Ropes Course"
        subtitle="World's first harness-free water obstacle course! Navigate 28 fun and challenging elements with nothing but the water below. Suitable for all abilities, ages 6+."
        backgroundImage="https://static.wixstatic.com/media/ad8a10_8032e65fc4ca4b9aaaa09f3bd33e7bf7~mv2.jpg/v1/fill/w_2015,h_985,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/ad8a10_8032e65fc4ca4b9aaaa09f3bd33e7bf7~mv2.jpg"
        overlayColor="from-cyan-900/70 via-cyan-800/50 to-transparent"
        badge="Now Open in Kent!"
        badgeClass="bg-orange-500/90 text-white"
        primaryButtonText="Book Your Session"
        primaryButtonClass="bg-orange-500 text-white hover:bg-orange-600"
        secondaryButtonText="Learn More"
        secondaryButtonClass="border-2 border-white text-white hover:bg-white/20"
      />
      
      <Features
        title="The Aqua Chimp Experience"
        subtitle="28 obstacles of pure jungle adventure on the water"
        features={features}
        backgroundColor="bg-gradient-to-b from-white to-cyan-50"
        textColor="text-cyan-900"
        cardBackgroundColor="bg-white"
        cardTextColor="text-cyan-900"
        iconColor="text-orange-500"
      />
      
      <Pricing
        title="Session Pricing"
        subtitle="All sessions include full hire kit - wetsuit, helmet & buoyancy aid"
        tiers={pricing}
        backgroundColor="bg-cyan-50"
        textColor="text-cyan-900"
        cardBackgroundColor="bg-white"
        cardTextColor="text-cyan-900"
        highlightColor="bg-orange-500"
        buttonClass="bg-orange-500 text-white hover:bg-orange-600"
        comingSoonBadgeClass="bg-cyan-100 text-cyan-700"
      />

      {/* Requirements Section */}
      <section id="requirements" className="py-24 px-6 bg-gradient-to-b from-cyan-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-900 mb-4">
              Before You Visit
            </h2>
            <p className="text-lg text-cyan-700 opacity-80">
              Everything you need to know for your adventure
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Requirements Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-cyan-100 rounded-xl">
                  <Ruler className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-cyan-900">Requirements</h3>
              </div>
              <ul className="space-y-3 text-cyan-800">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full" />
                  <span><strong>Minimum Age:</strong> 6 years old</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full" />
                  <span><strong>Minimum Height:</strong> 1.2m</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full" />
                  <span><strong>Swimming:</strong> 25m unaided</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full" />
                  <span><strong>Under 16s:</strong> Adult on site required</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full" />
                  <span><strong>Ages 6-8:</strong> Adult on activity (1:3 ratio)</span>
                </li>
              </ul>
            </div>
            
            {/* What to Bring Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-cyan-100 rounded-xl">
                  <Award className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-cyan-900">What to Bring</h3>
              </div>
              <ul className="space-y-3 text-cyan-800">
                <li className="flex items-center gap-3">
                  <span className="text-orange-500">✓</span>
                  <span>Swimming costume</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-orange-500">✓</span>
                  <span>Towel</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-orange-500">✓</span>
                  <span>Closed-toe shoes (can get wet) or buy Grip Socks (£3)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">✗</span>
                  <span className="text-cyan-600">Crocs are not suitable</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500">✗</span>
                  <span className="text-cyan-600">Leave valuables in car</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Included Kit Banner */}
          <div className="mt-8 bg-orange-500 rounded-2xl p-6 text-white text-center">
            <p className="text-lg font-semibold">
              🎉 All sessions include: Wetsuit • Helmet • Buoyancy Aid
            </p>
          </div>
        </div>
      </section>
      
      <Contact
        title="Find Us"
        subtitle="Located at Yalding Enterprise Park, Maidstone"
        contact={contactInfo}
        backgroundColor="bg-white"
        textColor="text-cyan-900"
        cardBackgroundColor="bg-cyan-50"
        cardTextColor="text-cyan-900"
        iconColor="text-orange-500"
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.5!2d0.4356!3d51.2192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47df4a1234567890%3A0x1234567890abcdef!2sYalding%20Enterprise%20Park!5e0!3m2!1sen!2suk!4v1234567890"
      />
      
      <Footer
        logo={<AquaChimpLogo className="brightness-0 invert" />}
        tagline="A Floating Jungle Ropes Course"
        socialLinks={[
          { platform: 'facebook', url: 'https://www.facebook.com/aquachimpkent' },
          { platform: 'instagram', url: 'https://www.instagram.com/aquachimpkent' },
        ]}
        backgroundColor="bg-cyan-900"
        textColor="text-white"
      />
    </main>
  );
}
