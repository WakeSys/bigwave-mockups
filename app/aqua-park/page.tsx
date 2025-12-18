import { Metadata } from 'next';
import { Waves, Shield, Users, Clock, Smartphone, Sun } from 'lucide-react';
import { Hero, Features, Activities, Pricing, Gallery, Contact, Navbar, Footer, BookingPanelProvider } from '@/components';
import { getBookingUrl } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Splash Bay Aqua Park | Fun for the Whole Family',
  description: 'Experience the ultimate summer adventure at Splash Bay Aqua Park. Book your session online and skip the lines!',
};

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Activities', href: '#activities' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const activities = [
  {
    name: 'Aqua Park Session',
    description: 'Experience our massive inflatable water park with 30+ obstacles including slides, trampolines, climbing walls, and balance challenges. Perfect for thrill-seekers of all ages!',
    price: '$25/person',
    duration: '45 minutes',
    capacity: 'Up to 100 guests',
    image: '/generated/aqua-park/gallery-1.jpg',
    features: ['Full obstacle course access', 'Life jacket included', 'Safety briefing', 'Locker rental available'],
  },
  {
    name: 'Ropes Course Adventure',
    description: 'Challenge yourself on our aerial ropes course set among the trees. Navigate rope bridges, zip lines, and suspended obstacles high above the ground.',
    price: '$35/person',
    duration: '60 minutes',
    capacity: 'Up to 30 guests',
    image: '/generated/ropes-course/gallery-1.jpg',
    features: ['All difficulty levels', 'Harness & helmet included', 'Trained guides', 'Photos available'],
  },
];

const features = [
  {
    icon: Waves,
    title: 'World-Class Obstacles',
    description: 'Over 30 inflatable obstacles including slides, trampolines, climbing walls, and balance beams.',
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Certified lifeguards on duty, Coast Guard approved life jackets, and comprehensive safety briefings.',
  },
  {
    icon: Users,
    title: 'Perfect for Groups',
    description: 'Birthday parties, corporate events, and group outings. Accommodates up to 50 guests per session.',
  },
  {
    icon: Clock,
    title: '45-Minute Sessions',
    description: 'Action-packed sessions give you plenty of time to conquer every obstacle on the course.',
  },
  {
    icon: Smartphone,
    title: 'Digital Waivers',
    description: 'Sign your waiver before you arrive and skip the check-in line. More time for fun!',
  },
  {
    icon: Sun,
    title: 'Open All Summer',
    description: 'May through September, seven days a week. Weather permitting.',
  },
];

const pricing = [
  {
    name: 'Single Session',
    price: '$25',
    duration: 'person',
    description: '45 minutes of unlimited fun',
    features: ['Full aqua park access', 'Life jacket included', 'Locker rental available', 'Shower facilities'],
    highlighted: true,
  },
  {
    name: 'Double Session',
    price: '$40',
    duration: 'person',
    description: 'Extended adventure time',
    features: ['90 minutes total', 'Full aqua park access', 'Life jacket included', 'Locker rental included'],
    comingSoon: true,
  },
  {
    name: 'Season Pass',
    price: '$199',
    duration: 'season',
    description: 'Unlimited summer fun',
    features: ['Unlimited sessions', 'Priority booking', 'Guest discounts', 'Exclusive events'],
    comingSoon: true,
  },
];

const galleryImages = [
  { src: '/generated/aqua-park/gallery-1.jpg', alt: 'Families enjoying the aqua park' },
  { src: '/generated/aqua-park/gallery-2.jpg', alt: 'Action shot on inflatable obstacles' },
  { src: '/generated/aqua-park/gallery-3.jpg', alt: 'Sunset at the aqua park' },
];

const contactInfo = {
  address: '123 Lakeside Drive, Charleston, SC 29418',
  phone: '(843) 555-0123',
  email: 'hello@splashbay.com',
  hours: [
    'Mon-Fri: 10am - 7pm',
    'Sat-Sun: 9am - 8pm',
  ],
};

export default function AquaParkPage() {
  return (
    <main className="font-[family-name:var(--font-quicksand)]">
      <BookingPanelProvider bookingUrl={getBookingUrl('aqua-park')} />
      
      <Navbar
        logo="Splash Bay"
        links={navLinks}
        backgroundColor="bg-cyan-50/90"
        textColor="text-cyan-900"
        buttonClass="bg-cyan-500 text-white hover:bg-cyan-600"
      />
      
      <Hero
        title="Make a Splash This Summer"
        subtitle="Charleston's premier inflatable water park. Jump, climb, slide, and splash your way through 30+ obstacles on the lake."
        backgroundImage="/generated/aqua-park/hero.jpg"
        overlayColor="from-cyan-900/70 via-cyan-800/50 to-transparent"
        badge="Now Open for 2025 Season"
        badgeClass="bg-cyan-500/90 text-white"
        primaryButtonText="Book Your Session"
        primaryButtonClass="bg-cyan-500 text-white hover:bg-cyan-600"
        secondaryButtonText="Learn More"
        secondaryButtonClass="border-2 border-white text-white hover:bg-white/20"
      />
      
      <Features
        title="Why Splash Bay?"
        subtitle="The ultimate aqua park experience for adventurers of all ages"
        features={features}
        backgroundColor="bg-gradient-to-b from-white to-cyan-50"
        textColor="text-cyan-900"
        cardBackgroundColor="bg-white"
        cardTextColor="text-cyan-900"
        iconColor="text-cyan-500"
      />

      <Activities
        title="Book Your Adventure"
        subtitle="Choose from our exciting activities and book your session online"
        activities={activities}
        accentColor="text-cyan-600"
        buttonClass="bg-cyan-500 text-white hover:bg-cyan-600"
        backgroundColor="bg-white"
      />
      
      <Pricing
        title="Simple Pricing"
        subtitle="No hidden fees. Just pure aquatic fun."
        tiers={pricing}
        backgroundColor="bg-cyan-50"
        textColor="text-cyan-900"
        cardBackgroundColor="bg-white"
        cardTextColor="text-cyan-900"
        highlightColor="bg-cyan-500"
        buttonClass="bg-cyan-500 text-white hover:bg-cyan-600"
      />
      
      <Gallery
        title="See the Action"
        subtitle="Check out what awaits you at Splash Bay"
        images={galleryImages}
        backgroundColor="bg-white"
        textColor="text-cyan-900"
      />
      
      <Contact
        title="Find Us"
        subtitle="Located on beautiful Trophy Lakes"
        contact={contactInfo}
        backgroundColor="bg-gradient-to-b from-cyan-50 to-white"
        textColor="text-cyan-900"
        cardBackgroundColor="bg-white"
        cardTextColor="text-cyan-900"
        iconColor="text-cyan-500"
      />
      
      <Footer
        logo="Splash Bay"
        tagline="Splashing fun since 2018"
        socialLinks={[
          { platform: 'facebook', url: '#' },
          { platform: 'instagram', url: '#' },
        ]}
        backgroundColor="bg-cyan-900"
        textColor="text-white"
      />
    </main>
  );
}

