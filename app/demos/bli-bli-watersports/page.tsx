import { Metadata } from 'next';
import Image from 'next/image';
import { Waves, Shield, Users, Clock, Sun, Fish, Droplets } from 'lucide-react';
import { Hero, Features, Activities, Pricing, Gallery, Contact, Navbar, Footer, BookingPanelProvider } from '@/components';
import { BOOKING_BASE_URL } from '@/lib/config';

// Logo component using the actual Bli Bli Watersports logo
function BliBliLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/demos/bli-bli-watersports/logo.png"
      alt="Bli Bli Watersports"
      width={180}
      height={50}
      className={`h-10 w-auto ${className || ''}`}
    />
  );
}

export const metadata: Metadata = {
  title: 'Bli Bli Watersports | Wake Park • Aqua Park • Barra Fishing',
  description: 'Queensland\'s premier watersports destination. Cable wakeboarding, inflatable aqua park, and barramundi fishing at Bli Bli, Sunshine Coast.',
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
    name: 'Aqua Park',
    description: 'Experience our massive inflatable water playground! With 200 spots per session, there\'s room for everyone to jump, climb, slide and splash across our exciting floating obstacle course.',
    price: '$28/person',
    duration: '1 hour session',
    capacity: 'Up to 200 guests',
    image: 'https://www.blibliwatersports.com.au/wp-content/uploads/2019/10/aquapark-banner.jpg',
    features: ['Full aqua park access', 'Life jacket included', 'Sessions: 10-11, 11-12, 1-2, 2-3, 3-4, 4-5pm', 'Aqua Socks available ($5)'],
  },
  {
    name: 'Wakeboard - Front Lake',
    description: 'Hit the cable on our main Front Lake! Perfect for beginners and intermediate riders, enjoy 2 hours of unlimited laps on our full-size cable system with up to 30 riders per session.',
    price: '$45/person',
    duration: '2 hour session',
    capacity: 'Up to 30 riders',
    image: 'https://www.blibliwatersports.com.au/wp-content/uploads/2019/10/aquapark-banner.jpg',
    features: ['Full cable access', 'Sessions: 10-12, 11-1, 12-2, 1-3, 2-4, 3-5pm', 'Obstacle Board Hire ($15)', 'Pro Board Hire ($15)'],
  },
  {
    name: 'Wakeboard - Back Lake',
    description: 'Our Back Lake offers a more intimate riding experience with 25 riders max. Perfect for those wanting more turns and a focused session on our secondary cable system.',
    price: '$45/person',
    duration: '2 hour session',
    capacity: 'Up to 25 riders',
    image: 'https://www.blibliwatersports.com.au/wp-content/uploads/elementor/thumbs/Kids-4-ojmw5dbn37b5wto124ctkxztd35bw6cv6rg4uphpn4.jpg',
    features: ['Full cable access', 'Sessions: 10-12, 11-1, 12-2, 1-3, 2-4, 3-5pm', 'Obstacle Board Hire ($15)', 'Pro Board Hire ($15)'],
  },
  {
    name: 'Barra Fishing',
    description: 'Cast a line in our stocked barramundi lake! Catch and release fishing in a beautiful, relaxed setting. Up to 40 anglers per 3-hour session for the ultimate fishing experience.',
    price: '$42/person',
    duration: '3 hour session',
    capacity: 'Up to 40 anglers',
    image: 'https://www.blibliwatersports.com.au/wp-content/uploads/2020/01/DJI_0069.jpg',
    features: ['Stocked barramundi lake', 'Sessions: 10am-1pm, 1:30-4:30pm', 'Catch & release', 'BYO gear or hire available'],
  },
];

const features = [
  {
    icon: Waves,
    title: 'Cable Wakeboarding',
    description: 'Two lakes with full-size cable systems for riders of all levels, from first-timers to pros.',
  },
  {
    icon: Droplets,
    title: 'Massive Aqua Park',
    description: 'Queensland\'s biggest inflatable water playground with slides, trampolines and obstacles.',
  },
  {
    icon: Fish,
    title: 'Barra Fishing',
    description: 'Catch trophy barramundi in our stocked lake - a fishing experience like no other.',
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Qualified lifeguards, safety briefings, and quality equipment for your peace of mind.',
  },
  {
    icon: Users,
    title: 'Groups Welcome',
    description: 'Perfect for birthday parties, corporate events, school groups and family outings.',
  },
  {
    icon: Sun,
    title: 'Sunshine Coast Location',
    description: 'Beautiful Bli Bli location, just minutes from the beach with all-day parking.',
  },
];

const pricing = [
  {
    name: 'Aqua Park Session',
    price: '$28',
    duration: '1 hour',
    description: 'Jump, climb & splash!',
    features: ['Full aqua park access', 'Life jacket included', '200 capacity per session', 'Aqua Socks +$5'],
    highlighted: true,
  },
  {
    name: '2 Hour Aqua Park',
    price: '$45',
    duration: '2 hours',
    description: 'Extended aqua fun',
    features: ['Double the splash time', 'Full aqua park access', 'Life jacket included', 'Best value for families'],
    comingSoon: true,
  },
  {
    name: 'Day Pass Barra',
    price: '$75',
    duration: 'full day',
    description: 'Fish all day long',
    features: ['Full day lake access', 'Catch & release', 'Multiple sessions', 'Serious angler special'],
    comingSoon: true,
  },
];

const memberships = [
  {
    name: 'Wake Pass Monthly',
    price: '$199',
    duration: 'month',
    description: 'Unlimited wakeboarding',
    features: ['Unlimited cable sessions', 'Both lakes included', 'Priority booking', '10% off gear hire'],
    comingSoon: true,
  },
  {
    name: 'Aqua Season Pass',
    price: '$299',
    duration: 'season',
    description: 'Splash all summer',
    features: ['Unlimited aqua park', 'Guest discounts', 'Early access', 'Member events'],
    comingSoon: true,
  },
  {
    name: 'Ultimate Pass',
    price: '$449',
    duration: 'season',
    description: 'All activities included',
    features: ['Aqua Park unlimited', 'Cable unlimited', 'Barra fishing included', 'VIP member perks'],
    comingSoon: true,
  },
];

const galleryImages = [
  { src: 'https://www.blibliwatersports.com.au/wp-content/uploads/2019/10/aquapark-banner.jpg', alt: 'Aqua Park action' },
  { src: 'https://www.blibliwatersports.com.au/wp-content/uploads/2020/01/DJI_0069.jpg', alt: 'Aerial view of Bli Bli Watersports' },
  { src: 'https://www.blibliwatersports.com.au/wp-content/uploads/elementor/thumbs/Kids-4-ojmw5dbn37b5wto124ctkxztd35bw6cv6rg4uphpn4.jpg', alt: 'Kids wakeboarding' },
];

const contactInfo = {
  address: '77 Lefoes Road, Bli Bli QLD 4560, Australia',
  phone: '+61 7 5448 7811',
  email: 'info@blibliwatersports.com.au',
  hours: [
    'Mon-Fri: 10am - 5pm',
    'Sat-Sun: 9am - 6pm',
    'School Holidays: Extended hours',
  ],
};

export default function BliBliWatersportsPage() {
  const bookingUrl = `${BOOKING_BASE_URL}/blibliwatersports/booking`;

  return (
    <main className="font-[family-name:var(--font-quicksand)]">
      <BookingPanelProvider bookingUrl={bookingUrl} />
      
      <Navbar
        logo={<BliBliLogo />}
        links={navLinks}
        backgroundColor="bg-sky-50/95"
        textColor="text-sky-900"
        buttonClass="bg-sky-500 text-white hover:bg-sky-600"
        alwaysShowBackground={true}
      />
      
      <Hero
        title="Where Adventure Meets Water"
        subtitle="Queensland's ultimate watersports destination. Cable wakeboarding, Australia's biggest aqua park, and trophy barramundi fishing - all in one stunning Sunshine Coast location."
        backgroundImage="https://www.blibliwatersports.com.au/wp-content/uploads/2019/10/aquapark-banner.jpg"
        overlayColor="from-sky-900/80 via-sky-800/60 to-sky-700/40"
        badge="Sunshine Coast's #1 Water Park"
        badgeClass="bg-sky-500/90 text-white"
        primaryButtonText="Book Your Session"
        primaryButtonClass="bg-sky-500 text-white hover:bg-sky-600"
        secondaryButtonText="Explore Activities"
        secondaryButtonClass="border-2 border-white text-white hover:bg-white/20"
      />
      
      <Features
        title="Why Bli Bli Watersports?"
        subtitle="Three incredible experiences in one location - wake, splash, fish!"
        features={features}
        backgroundColor="bg-gradient-to-b from-white to-sky-50"
        textColor="text-sky-900"
        cardBackgroundColor="bg-white"
        cardTextColor="text-sky-900"
        iconColor="text-sky-500"
      />

      <Activities
        title="Book Your Adventure"
        subtitle="Choose your activity and book online - instant confirmation"
        activities={activities}
        accentColor="text-sky-600"
        buttonClass="bg-sky-500 text-white hover:bg-sky-600"
        backgroundColor="bg-white"
      />
      
      <Pricing
        title="Session Pricing"
        subtitle="All prices include GST. Book online for guaranteed spots!"
        tiers={pricing}
        backgroundColor="bg-sky-50"
        textColor="text-sky-900"
        cardBackgroundColor="bg-white"
        cardTextColor="text-sky-900"
        highlightColor="bg-sky-500"
        buttonClass="bg-sky-500 text-white hover:bg-sky-600"
        comingSoonBadgeClass="bg-sky-100 text-sky-700"
      />

      {/* Memberships Section */}
      <Pricing
        title="Memberships"
        subtitle="Coming soon - get unlimited access with our membership passes"
        tiers={memberships}
        backgroundColor="bg-gradient-to-b from-sky-50 to-white"
        textColor="text-sky-900"
        cardBackgroundColor="bg-white"
        cardTextColor="text-sky-900"
        highlightColor="bg-sky-500"
        buttonClass="bg-sky-500 text-white hover:bg-sky-600"
        comingSoonBadgeClass="bg-amber-100 text-amber-700"
      />
      
      <Gallery
        title="Life at Bli Bli"
        subtitle="See what awaits you at Queensland's best watersports park"
        images={galleryImages}
        backgroundColor="bg-white"
        textColor="text-sky-900"
      />
      
      <Contact
        title="Visit Us"
        subtitle="Located in beautiful Bli Bli on the Sunshine Coast"
        contact={contactInfo}
        backgroundColor="bg-gradient-to-b from-white to-sky-50"
        textColor="text-sky-900"
        cardBackgroundColor="bg-white"
        cardTextColor="text-sky-900"
        iconColor="text-sky-500"
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3545.8726!2d153.0356!3d-26.6192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b937a1234567890%3A0x1234567890abcdef!2sBli%20Bli%20Watersports!5e0!3m2!1sen!2sau!4v1234567890"
      />
      
      <Footer
        logo={<BliBliLogo />}
        tagline="Wake • Splash • Fish - Since 2005"
        socialLinks={[
          { platform: 'facebook', url: 'https://www.facebook.com/blibliwatersports' },
          { platform: 'instagram', url: 'https://www.instagram.com/blibliwatersports' },
        ]}
        backgroundColor="bg-sky-900"
        textColor="text-white"
      />
    </main>
  );
}

