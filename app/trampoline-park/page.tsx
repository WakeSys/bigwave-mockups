import { Metadata } from 'next';
import { Zap, Shield, Users, PartyPopper, Dumbbell, Star } from 'lucide-react';
import { Hero, Features, Activities, Pricing, Gallery, Contact, Navbar, Footer, BookingPanelProvider } from '@/components';
import { getBookingUrl } from '@/lib/config';

export const metadata: Metadata = {
  title: 'AirZone Trampoline Park | Jump Into Fun',
  description: 'The ultimate indoor trampoline experience. Wall-to-wall trampolines, foam pits, dodgeball courts, and more!',
};

const navLinks = [
  { label: 'Attractions', href: '#about' },
  { label: 'Activities', href: '#activities' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const activities = [
  {
    name: 'Trampoline Park Session',
    description: 'Bounce wall-to-wall in our massive trampoline arena! Access includes main court, dodgeball, basketball hoops, and foam pits.',
    price: '$22/person',
    duration: '60 minutes',
    capacity: 'Up to 150 guests',
    image: '/generated/trampoline-park/gallery-1.jpg',
    features: ['All trampoline zones', 'Grip socks included', 'Foam pit access', 'Dodgeball courts'],
  },
  {
    name: 'Ninja Warrior Course',
    description: 'Test your strength and agility on our American Ninja Warrior-inspired obstacle course. Compete against friends or beat your own time!',
    price: '$28/person',
    duration: '60 minutes',
    capacity: 'Up to 40 guests',
    image: '/generated/trampoline-park/gallery-3.jpg',
    features: ['Full obstacle course', 'Timed challenges', 'Leaderboard rankings', 'All skill levels'],
  },
];

const features = [
  {
    icon: Zap,
    title: 'Main Jump Arena',
    description: 'Over 10,000 sq ft of connected trampolines. Bounce wall-to-wall in our massive main court.',
  },
  {
    icon: Dumbbell,
    title: 'Ninja Warrior Course',
    description: 'Test your skills on our American Ninja Warrior-inspired obstacle course.',
  },
  {
    icon: Users,
    title: 'Dodgeball Courts',
    description: 'Challenge your friends to epic trampoline dodgeball battles.',
  },
  {
    icon: PartyPopper,
    title: 'Party Rooms',
    description: 'Private party rooms for birthdays and celebrations. Packages include jump time and food.',
  },
  {
    icon: Shield,
    title: 'Foam Pits',
    description: 'Practice your flips and tricks with soft landings in our foam pit zones.',
  },
  {
    icon: Star,
    title: 'Toddler Zone',
    description: 'Safe, enclosed jumping area designed specifically for our youngest bouncers.',
  },
];

const pricing = [
  {
    name: '60 Minutes',
    price: '$22',
    duration: 'jumper',
    description: 'Standard jump session',
    features: ['All attractions access', 'Grip socks included', 'Locker rental available'],
    highlighted: true,
  },
  {
    name: '90 Minutes',
    price: '$30',
    duration: 'jumper',
    description: 'Extended jump time',
    features: ['All attractions access', 'Grip socks included', 'Free locker rental'],
    comingSoon: true,
  },
  {
    name: 'Monthly Pass',
    price: '$79',
    duration: 'month',
    description: 'Unlimited jumping',
    features: ['Unlimited 90-min sessions', '2 guest passes/month', 'Member-only events'],
    comingSoon: true,
  },
];

const galleryImages = [
  { src: '/generated/trampoline-park/gallery-1.jpg', alt: 'Athlete doing backflip' },
  { src: '/generated/trampoline-park/gallery-2.jpg', alt: 'Birthday party fun' },
  { src: '/generated/trampoline-park/gallery-3.jpg', alt: 'Foam pit action' },
];

const contactInfo = {
  address: '456 Jump Street, Charlotte, NC 28202',
  phone: '(704) 555-0456',
  email: 'bounce@airzone.com',
  hours: [
    'Mon-Thu: 11am - 9pm',
    'Fri: 11am - 11pm',
    'Sat: 10am - 11pm',
    'Sun: 10am - 8pm',
  ],
};

export default function TrampolineParkPage() {
  return (
    <main className="font-[family-name:var(--font-orbitron)]">
      <BookingPanelProvider bookingUrl={getBookingUrl('trampoline-park')} />
      
      <Navbar
        logo="AIRZONE"
        links={navLinks}
        backgroundColor="bg-black/90"
        textColor="text-white"
        buttonClass="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700"
      />
      
      <Hero
        title="DEFY GRAVITY"
        subtitle="Charlotte's most extreme indoor trampoline park. Wall-to-wall trampolines, ninja courses, and epic foam pits."
        backgroundImage="/generated/trampoline-park/hero.jpg"
        backgroundColor="bg-black"
        overlayColor="from-black/80 via-purple-900/40 to-pink-900/30"
        badge="NOW WITH NINJA WARRIOR COURSE"
        badgeClass="bg-gradient-to-r from-pink-500 to-purple-600 text-white"
        primaryButtonText="BOOK NOW"
        primaryButtonClass="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700"
        secondaryButtonText="SEE ATTRACTIONS"
        secondaryButtonClass="border-2 border-pink-500 text-pink-400 hover:bg-pink-500/20"
      />
      
      <Features
        title="ATTRACTIONS"
        subtitle="Over 20,000 sq ft of adrenaline-pumping action"
        features={features}
        backgroundColor="bg-gradient-to-b from-gray-900 to-black"
        textColor="text-white"
        cardBackgroundColor="bg-gray-800/50"
        cardTextColor="text-white"
        iconColor="text-pink-500"
      />

      <Activities
        title="BOOK YOUR SESSION"
        subtitle="Choose your adventure and book online"
        activities={activities}
        accentColor="text-pink-500"
        buttonClass="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700"
        backgroundColor="bg-black"
      />
      
      <Pricing
        title="JUMP PASSES"
        subtitle="Grip socks required for all jumpers (included in first visit)"
        tiers={pricing}
        backgroundColor="bg-black"
        textColor="text-white"
        cardBackgroundColor="bg-gray-900"
        cardTextColor="text-white"
        highlightColor="bg-gradient-to-br from-pink-600 to-purple-700"
        buttonClass="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700"
      />
      
      <Gallery
        title="SEE THE ACTION"
        subtitle="Get hyped for your next visit"
        images={galleryImages}
        backgroundColor="bg-gradient-to-b from-black to-gray-900"
        textColor="text-white"
      />
      
      <Contact
        title="FIND US"
        subtitle="Located in Uptown Charlotte"
        contact={contactInfo}
        backgroundColor="bg-gray-900"
        textColor="text-white"
        cardBackgroundColor="bg-gray-800"
        cardTextColor="text-white"
        iconColor="text-pink-500"
      />
      
      <Footer
        logo="AIRZONE"
        tagline="Bounce higher. Land softer."
        socialLinks={[
          { platform: 'instagram', url: '#' },
          { platform: 'twitter', url: '#' },
          { platform: 'youtube', url: '#' },
        ]}
        backgroundColor="bg-black"
        textColor="text-white"
      />
    </main>
  );
}

