import { Metadata } from 'next';
import { Key, Clock, Users, Brain, Lock, Trophy } from 'lucide-react';
import { Hero, Features, Activities, Pricing, Gallery, Contact, Navbar, Footer, BookingPanelProvider } from '@/components';
import { getBookingUrl } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Enigma Escape | Immersive Escape Room Experience',
  description: 'Can you escape in 60 minutes? Immersive themed rooms, challenging puzzles, and unforgettable adventures await.',
};

const navLinks = [
  { label: 'Rooms', href: '#about' },
  { label: 'Book Room', href: '#activities' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const activities = [
  {
    name: "The Pharaoh's Tomb",
    description: 'Ancient Egypt awaits! Explore a forgotten pyramid, decipher hieroglyphics, and escape before the curse of the pharaoh seals you inside forever.',
    price: '$32/person',
    duration: '60 minutes',
    capacity: '2-8 players',
    image: '/generated/escape-room/hero.jpg',
    features: ['Difficulty: Intermediate', 'Egyptian theme', 'Physical puzzles', 'Hidden chambers'],
  },
  {
    name: 'Clockwork Conspiracy',
    description: "It's 1889 and a mad inventor threatens to destroy the city with his doomsday machine. Infiltrate his workshop and sabotage the device before midnight!",
    price: '$32/person',
    duration: '60 minutes',
    capacity: '2-6 players',
    image: '/generated/escape-room/gallery-1.jpg',
    features: ['Difficulty: Advanced', 'Steampunk theme', 'Mechanical puzzles', 'Time pressure'],
  },
  {
    name: 'The Asylum',
    description: 'Dr. Crane has gone too far with his experiments. Navigate the twisted corridors of the asylum and solve the psychological puzzles to escape.',
    price: '$38/person',
    duration: '60 minutes',
    capacity: '2-8 players',
    image: '/generated/escape-room/gallery-3.jpg',
    features: ['Difficulty: Expert', 'Horror theme', 'Immersive actors', 'Not for faint-hearted'],
  },
];

const features = [
  {
    icon: Key,
    title: "The Pharaoh's Tomb",
    description: 'Ancient Egypt awaits. Decipher hieroglyphics and uncover the secrets of the pyramid before the curse takes hold.',
  },
  {
    icon: Lock,
    title: 'Clockwork Conspiracy',
    description: 'Steampunk mystery set in 1889. Sabotage the mad inventor\'s machine before midnight strikes.',
  },
  {
    icon: Brain,
    title: 'The Asylum',
    description: 'Psychological horror experience. Solve the twisted puzzles of Dr. Crane before you become the next patient.',
  },
  {
    icon: Clock,
    title: '60 Minutes',
    description: 'Each room gives you exactly one hour. Work together, think fast, and escape before time runs out.',
  },
  {
    icon: Users,
    title: '2-8 Players',
    description: 'Perfect for friends, families, date nights, or team building. Private bookings available.',
  },
  {
    icon: Trophy,
    title: 'Hall of Fame',
    description: 'Beat the record time and cement your legacy on our leaderboard. Only the best escape artists qualify.',
  },
];

const pricing = [
  {
    name: 'Standard Room',
    price: '$32',
    duration: 'person',
    description: '2-6 players per room',
    features: ['60-minute experience', 'Game master support', 'Group photo', 'Escape certificate'],
    highlighted: true,
  },
  {
    name: 'Premium Rooms',
    price: '$38',
    duration: 'person',
    description: 'The Asylum & more',
    features: ['Live actor experience', 'Extreme difficulty', '18+ only', 'Special effects'],
  },
  {
    name: 'Private & Group',
    price: 'TBD',
    duration: 'room',
    description: 'Exclusive bookings',
    features: ['Full room buyout', 'Group discounts', 'Corporate packages'],
    comingSoon: true,
  },
];

const galleryImages = [
  { src: '/generated/escape-room/gallery-1.jpg', alt: 'Steampunk escape room' },
  { src: '/generated/escape-room/gallery-2.jpg', alt: 'Team solving puzzles' },
  { src: '/generated/escape-room/gallery-3.jpg', alt: 'Horror themed corridor' },
];

const contactInfo = {
  address: '666 Mystery Lane, Savannah, GA 31401',
  phone: '(912) 555-0666',
  email: 'escape@enigmaescape.com',
  hours: [
    'Mon-Thu: 4pm - 10pm',
    'Fri: 4pm - Midnight',
    'Sat: 12pm - Midnight',
    'Sun: 12pm - 9pm',
  ],
};

export default function EscapeRoomPage() {
  return (
    <main className="font-[family-name:var(--font-cinzel)]">
      <BookingPanelProvider bookingUrl={getBookingUrl('escape-room')} />
      
      <Navbar
        logo="ENIGMA"
        links={navLinks}
        backgroundColor="bg-black/90"
        textColor="text-amber-100"
        buttonClass="bg-amber-500 text-black hover:bg-amber-400"
      />
      
      <Hero
        title="Can You Escape?"
        subtitle="Immersive puzzle rooms where every detail matters. Solve the mysteries. Beat the clock. Escape before it's too late."
        backgroundImage="/generated/escape-room/hero.jpg"
        backgroundColor="bg-black"
        overlayColor="from-black/80 via-purple-900/50 to-amber-900/30"
        badge="New Room: The Asylum"
        badgeClass="bg-amber-500 text-black"
        primaryButtonText="Book Your Escape"
        primaryButtonClass="bg-amber-500 text-black hover:bg-amber-400"
        secondaryButtonText="View Rooms"
        secondaryButtonClass="border-2 border-amber-500 text-amber-500 hover:bg-amber-500/20"
      />
      
      <Features
        title="The Chambers"
        subtitle="Three unique worlds. Countless puzzles. One way out."
        features={features}
        backgroundColor="bg-gradient-to-b from-gray-900 to-black"
        textColor="text-amber-100"
        cardBackgroundColor="bg-gray-900/80"
        cardTextColor="text-amber-100"
        iconColor="text-amber-500"
      />

      <Activities
        title="Choose Your Challenge"
        subtitle="Select your room and book your escape attempt"
        activities={activities}
        accentColor="text-amber-500"
        buttonClass="bg-gradient-to-r from-amber-600 to-amber-700 text-white hover:from-amber-700 hover:to-amber-800"
        backgroundColor="bg-black"
      />
      
      <Pricing
        title="Book Your Challenge"
        subtitle="Minimum 2 players. Under 14 must be accompanied by adult."
        tiers={pricing}
        backgroundColor="bg-black"
        textColor="text-amber-100"
        cardBackgroundColor="bg-gray-900"
        cardTextColor="text-amber-100"
        highlightColor="bg-gradient-to-br from-amber-600 to-amber-800"
        buttonClass="bg-amber-500 text-black hover:bg-amber-400"
      />
      
      <Gallery
        title="Enter the Unknown"
        subtitle="A glimpse into our worlds"
        images={galleryImages}
        backgroundColor="bg-gray-900"
        textColor="text-amber-100"
      />
      
      <Contact
        title="Find Us If You Dare"
        subtitle="Located in historic downtown Savannah"
        contact={contactInfo}
        backgroundColor="bg-black"
        textColor="text-amber-100"
        cardBackgroundColor="bg-gray-900"
        cardTextColor="text-amber-100"
        iconColor="text-amber-500"
      />
      
      <Footer
        logo="ENIGMA ESCAPE"
        tagline="Every puzzle has a solution..."
        socialLinks={[
          { platform: 'facebook', url: '#' },
          { platform: 'instagram', url: '#' },
          { platform: 'twitter', url: '#' },
        ]}
        backgroundColor="bg-gray-900"
        textColor="text-amber-100"
      />
    </main>
  );
}

