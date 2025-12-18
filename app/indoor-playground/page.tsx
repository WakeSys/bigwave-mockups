import { Metadata } from 'next';
import { Baby, Shield, Cake, Blocks, Coffee, Sparkles } from 'lucide-react';
import { Hero, Features, Activities, Pricing, Gallery, Contact, Navbar, Footer, BookingPanelProvider } from '@/components';
import { getBookingUrl } from '@/lib/config';

export const metadata: Metadata = {
  title: 'FunZone Kids | Indoor Playground & Play Center',
  description: 'The ultimate indoor playground for kids! Multi-level play structures, toddler zones, and birthday party packages.',
};

const navLinks = [
  { label: 'Play Areas', href: '#about' },
  { label: 'Activities', href: '#activities' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const activities = [
  {
    name: 'Indoor Playground',
    description: 'Multi-level adventure playground with slides, tunnels, ball pits, rope bridges, and climbing structures. Perfect for kids ages 4-12!',
    price: '$18/child',
    duration: '3 hours',
    capacity: 'Unlimited play',
    image: '/generated/indoor-playground/gallery-1.png',
    features: ['All play structures', 'Ball pit access', 'Parent supervision area', 'Socks required'],
  },
  {
    name: 'Toddler Zone',
    description: 'Safe, enclosed play space designed specifically for children under 4. Soft foam structures, sensory toys, and age-appropriate activities.',
    price: '$12/child',
    duration: '3 hours',
    capacity: 'Ages 0-4 only',
    image: '/generated/indoor-playground/gallery-2.png',
    features: ['Dedicated toddler area', 'Soft surfaces', 'Parent required', 'Sensory activities'],
  },
];

const features = [
  {
    icon: Blocks,
    title: 'Adventure Zone',
    description: 'Multi-level play structure with slides, tunnels, ball pits, and climbing walls for ages 4-12.',
  },
  {
    icon: Baby,
    title: 'Toddler Town',
    description: 'Safe, enclosed play area designed for little ones under 4. Soft surfaces and age-appropriate toys.',
  },
  {
    icon: Cake,
    title: 'Party Rooms',
    description: 'Private party rooms with themes to choose from. All-inclusive packages make celebrations easy!',
  },
  {
    icon: Coffee,
    title: 'Parent Lounge',
    description: 'Relax with free WiFi and coffee while keeping an eye on your kids. Comfortable seating throughout.',
  },
  {
    icon: Shield,
    title: 'Clean & Safe',
    description: 'Daily sanitization, security check-in system, and staff supervision for peace of mind.',
  },
  {
    icon: Sparkles,
    title: 'Sensory Room',
    description: 'Calming space with bubble tubes, fiber optics, and soft lighting for sensory play.',
  },
];

const pricing = [
  {
    name: 'Toddler Pass',
    price: '$12',
    duration: 'child',
    description: 'Under 4 years',
    features: ['Toddler Town access', 'Sensory room access', '1 free adult', 'Unlimited playtime'],
  },
  {
    name: 'All-Access Pass',
    price: '$18',
    duration: 'child',
    description: 'Ages 4-12',
    features: ['Full playground access', 'Sensory room access', '1 free adult', 'Unlimited playtime'],
    highlighted: true,
  },
  {
    name: 'Family Bundles',
    price: 'TBD',
    duration: 'visit',
    description: 'Multi-child discounts',
    features: ['Family pack pricing', 'Sibling discounts', 'Group rates'],
    comingSoon: true,
  },
];

const galleryImages = [
  { src: '/generated/indoor-playground/gallery-1.png', alt: 'Kids on slides' },
  { src: '/generated/indoor-playground/gallery-2.png', alt: 'Toddler play area' },
  { src: '/generated/indoor-playground/gallery-3.png', alt: 'Birthday party celebration' },
];

const contactInfo = {
  address: '321 Fun Street, Raleigh, NC 27601',
  phone: '(919) 555-0321',
  email: 'play@funzonekids.com',
  hours: [
    'Mon-Thu: 9am - 6pm',
    'Fri-Sat: 9am - 8pm',
    'Sun: 10am - 6pm',
  ],
};

export default function IndoorPlaygroundPage() {
  return (
    <main className="font-[family-name:var(--font-baloo)]">
      <BookingPanelProvider bookingUrl={getBookingUrl('indoor-playground')} />
      
      <Navbar
        logo="FunZone Kids"
        links={navLinks}
        backgroundColor="bg-white/90"
        textColor="text-purple-900"
        buttonClass="bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600"
      />
      
      <Hero
        title="Where Imagination Plays!"
        subtitle="Raleigh's favorite indoor playground. Climb, slide, bounce, and explore in our climate-controlled play paradise."
        backgroundImage="/generated/indoor-playground/hero.png"
        overlayColor="from-purple-600/60 via-pink-500/40 to-yellow-400/30"
        badge="Now with Sensory Room!"
        badgeClass="bg-gradient-to-r from-yellow-400 to-orange-500 text-white"
        primaryButtonText="Book Playtime"
        primaryButtonClass="bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600"
        secondaryButtonText="Plan a Party"
        secondaryButtonClass="border-2 border-white text-white hover:bg-white/20"
      />
      
      <Features
        title="Play Areas"
        subtitle="Fun for every age and energy level"
        features={features}
        backgroundColor="bg-gradient-to-b from-purple-50 to-white"
        textColor="text-purple-900"
        cardBackgroundColor="bg-white"
        cardTextColor="text-purple-900"
        iconColor="text-orange-500"
      />

      <Activities
        title="Book Your Play Session"
        subtitle="Choose the perfect play experience for your little ones"
        activities={activities}
        accentColor="text-orange-500"
        buttonClass="bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600"
        backgroundColor="bg-white"
      />
      
      <Pricing
        title="Play Passes"
        subtitle="Adults always play free! Socks required for all."
        tiers={pricing}
        backgroundColor="bg-white"
        textColor="text-purple-900"
        cardBackgroundColor="bg-purple-50"
        cardTextColor="text-purple-900"
        highlightColor="bg-gradient-to-br from-purple-500 to-pink-500"
        buttonClass="bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600"
      />
      
      <Gallery
        title="Happy Faces"
        subtitle="See the fun in action"
        images={galleryImages}
        backgroundColor="bg-gradient-to-b from-white to-purple-50"
        textColor="text-purple-900"
      />
      
      <Contact
        title="Visit Us"
        subtitle="Located in downtown Raleigh"
        contact={contactInfo}
        backgroundColor="bg-purple-50"
        textColor="text-purple-900"
        cardBackgroundColor="bg-white"
        cardTextColor="text-purple-900"
        iconColor="text-orange-500"
      />
      
      <Footer
        logo="FunZone Kids"
        tagline="Where every day is play day!"
        socialLinks={[
          { platform: 'facebook', url: '#' },
          { platform: 'instagram', url: '#' },
        ]}
        backgroundColor="bg-purple-900"
        textColor="text-white"
      />
    </main>
  );
}

