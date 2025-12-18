import { Metadata } from 'next';
import Image from 'next/image';
import { Waves, Shield, Users, Sun, Droplets, Zap } from 'lucide-react';
import { Hero, Features, Activities, Pricing, Gallery, Contact, Navbar, Footer, BookingPanelProvider } from '@/components';
import { BOOKING_BASE_URL } from '@/lib/config';

// Logo component using the actual Hydrous Wake Parks logo
function HydrousLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/demos/hydrous-wakeparks/logo.png"
      alt="Hydrous Wake Parks"
      width={180}
      height={50}
      className={`h-10 w-auto ${className || ''}`}
    />
  );
}

export const metadata: Metadata = {
  title: 'Hydrous Wake Parks | Cable Wakeboarding & Aqua Park | Little Elm, TX',
  description: 'North Texas premier wake park destination. Cable wakeboarding and inflatable aqua park in Little Elm, just north of Dallas.',
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
    description: 'Experience our massive inflatable water playground! Jump, climb, slide and splash across our exciting floating obstacle course. Perfect for all ages and a great way to cool off on a hot Texas day.',
    price: '$36/person',
    duration: '2 hour session',
    capacity: 'Up to 70 guests',
    image: 'https://www.hydrouswakeparks.com/assets/img/team/01.jpg',
    features: ['Full aqua park access', 'Life jacket included', 'Sessions: 12-2pm, 2-4pm, 4-6pm, 6-8pm', '8.25% tax applies'],
  },
  {
    name: 'Beginners Slow Ride Session',
    description: 'New to wakeboarding? Start here! Our beginner-friendly slow ride sessions are perfect for first-timers. Learn the basics at a comfortable pace with our patient instructors on the main cable.',
    price: '$50/person',
    duration: '2 hour session',
    capacity: 'Up to 20 riders',
    image: 'https://www.hydrouswakeparks.com/assets/img/team/03.jpg',
    features: ['Perfect for first-timers', 'Sessions: 12-2pm, 2-4pm', 'Slower cable speed', 'Basic Rental Package available ($15)', 'Advanced Rentals available ($25)'],
  },
  {
    name: 'Main Cable',
    description: 'Hit our full-size cable system! Whether you\'re working on your fundamentals or throwing down advanced tricks, our main cable offers the perfect setup for riders of all skill levels.',
    price: '$50/person',
    duration: '2 hour session',
    capacity: 'Up to 20 riders',
    image: 'https://www.hydrouswakeparks.com/assets/img/team/04.jpg',
    features: ['Full cable access', 'Sessions: 12-2pm, 1-3pm, 2-4pm, 3-5pm, 5-7pm', 'Basic Rental Package available ($15)', 'Advanced Rentals available ($25)', '8.25% tax applies'],
  },
];

const features = [
  {
    icon: Waves,
    title: 'Cable Wakeboarding',
    description: 'Full-size cable system perfect for beginners through advanced riders. No boat needed!',
  },
  {
    icon: Droplets,
    title: 'Inflatable Aqua Park',
    description: 'Massive floating playground with slides, trampolines and obstacles for all ages.',
  },
  {
    icon: Zap,
    title: 'Beginner Friendly',
    description: 'Special slow ride sessions designed specifically for first-time riders to learn safely.',
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'All equipment provided, trained staff, and comprehensive safety briefings.',
  },
  {
    icon: Users,
    title: 'Groups Welcome',
    description: 'Perfect for birthday parties, corporate events, and group outings.',
  },
  {
    icon: Sun,
    title: 'North Texas Location',
    description: 'Conveniently located in Little Elm, just north of Dallas on Lewisville Lake.',
  },
];

const pricing = [
  {
    name: 'Aqua Park Session',
    price: '$36',
    duration: '2 hours',
    description: 'Jump, climb & splash!',
    features: ['Full aqua park access', 'Life jacket included', '70 capacity per session', '+ 8.25% tax'],
    highlighted: true,
  },
  {
    name: 'Main Cable Session',
    price: '$50',
    duration: '2 hours',
    description: 'Full cable access',
    features: ['Unlimited laps', '20 riders per session', 'All skill levels', '+ 8.25% tax'],
    highlighted: false,
  },
  {
    name: 'Beginners Slow Ride',
    price: '$50',
    duration: '2 hours',
    description: 'Learn to wakeboard',
    features: ['Slower cable speed', 'Perfect for first-timers', 'Patient instruction', '+ 8.25% tax'],
    highlighted: false,
  },
];

const rentals = [
  {
    name: 'Basic Rental Package',
    price: '$15',
    duration: 'session',
    description: 'Everything to get started',
    features: ['Helmet included', 'Life Vest included', 'Kneeboard or Beginner Wakeboard', 'Perfect for beginners'],
    highlighted: false,
  },
  {
    name: 'Advanced Rentals',
    price: '$25',
    duration: 'session',
    description: 'For experienced riders',
    features: ['Helmet included', 'Life Vest included', 'Advanced Wakeboard', 'High-performance gear'],
    highlighted: true,
  },
];

const galleryImages = [
  { src: 'https://www.hydrouswakeparks.com/assets/img/team/01.jpg', alt: 'Aqua Park fun' },
  { src: 'https://www.hydrouswakeparks.com/assets/img/team/03.jpg', alt: 'Beginner wakeboarding' },
  { src: 'https://www.hydrouswakeparks.com/assets/img/team/04.jpg', alt: 'Cable wakeboarding action' },
];

const contactInfo = {
  address: '280 E Eldorado Pkwy, Little Elm, TX 75068',
  phone: '(214) 310-1105',
  email: 'info@hydrouswakeparks.com',
  hours: [
    'Mon-Fri: 12pm - 8pm',
    'Sat-Sun: 10am - 8pm',
    'Hours vary by season',
  ],
};

export default function HydrousWakeParksPage() {
  const bookingUrl = `${BOOKING_BASE_URL}/hydrouswakeparks/booking`;

  return (
    <main className="font-[family-name:var(--font-quicksand)]">
      <BookingPanelProvider bookingUrl={bookingUrl} />
      
      <Navbar
        logo={<HydrousLogo />}
        links={navLinks}
        backgroundColor="bg-white/95"
        textColor="text-gray-700"
        buttonClass="bg-sky-500 text-white hover:bg-sky-600"
        alwaysShowBackground={true}
      />
      
      <Hero
        title="Wake Up Your Summer"
        subtitle="North Texas' premier wake park destination. Cable wakeboarding and inflatable aqua park action in Little Elm, just minutes from Dallas. No experience needed - we'll teach you!"
        backgroundImage="https://www.hydrouswakeparks.com/assets/img/team/04.jpg"
        overlayColor="from-sky-600/80 via-sky-500/60 to-sky-400/40"
        badge="Dallas-Fort Worth's #1 Wake Park"
        badgeClass="bg-sky-500/90 text-white"
        primaryButtonText="Book Your Session"
        primaryButtonClass="bg-sky-500 text-white hover:bg-sky-600"
        secondaryButtonText="Explore Activities"
        secondaryButtonClass="border-2 border-white text-white hover:bg-white/20"
      />
      
      <Features
        title="Why Hydrous Wake Parks?"
        subtitle="The ultimate water sports experience in North Texas"
        features={features}
        backgroundColor="bg-gradient-to-b from-white to-sky-50"
        textColor="text-gray-800"
        cardBackgroundColor="bg-white"
        cardTextColor="text-gray-800"
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
        subtitle="All prices plus 8.25% tax. Book online for guaranteed spots!"
        tiers={pricing}
        backgroundColor="bg-sky-50"
        textColor="text-gray-800"
        cardBackgroundColor="bg-white"
        cardTextColor="text-gray-800"
        highlightColor="bg-sky-500"
        buttonClass="bg-sky-500 text-white hover:bg-sky-600"
        comingSoonBadgeClass="bg-sky-100 text-sky-700"
      />

      {/* Rentals Section */}
      <Pricing
        title="Rental Packages"
        subtitle="Add-ons available for Main Cable and Beginners Slow Ride sessions"
        tiers={rentals}
        backgroundColor="bg-gradient-to-b from-sky-50 to-white"
        textColor="text-gray-800"
        cardBackgroundColor="bg-white"
        cardTextColor="text-gray-800"
        highlightColor="bg-sky-500"
        buttonClass="bg-sky-500 text-white hover:bg-sky-600"
        comingSoonBadgeClass="bg-sky-100 text-sky-700"
      />

      {/* Waiver Notice */}
      <section className="py-12 px-6 bg-sky-500">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">Waiver Required</h3>
          </div>
          <p className="text-white/90 mb-4">
            All participants must complete a waiver before their session. Save time by signing online before you arrive!
          </p>
          <a 
            href="https://staging.wakesys.app/hydrouswakeparks/auth/onsite-signup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-sky-600 rounded-full font-semibold hover:bg-sky-50 transition-colors"
          >
            Sign Waiver Online
          </a>
        </div>
      </section>
      
      <Gallery
        title="Life at Hydrous"
        subtitle="See what awaits you at North Texas' best wake park"
        images={galleryImages}
        backgroundColor="bg-white"
        textColor="text-gray-800"
      />
      
      <Contact
        title="Visit Us"
        subtitle="Located in Little Elm, just north of Dallas"
        contact={contactInfo}
        backgroundColor="bg-gradient-to-b from-white to-sky-50"
        textColor="text-gray-800"
        cardBackgroundColor="bg-white"
        cardTextColor="text-gray-800"
        iconColor="text-sky-500"
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3343.8!2d-96.9456!3d33.1634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3c1234567890%3A0x1234567890abcdef!2s280%20E%20Eldorado%20Pkwy%2C%20Little%20Elm%2C%20TX%2075068!5e0!3m2!1sen!2sus!4v1234567890"
      />
      
      <Footer
        logo={<HydrousLogo className="brightness-0 invert" />}
        tagline="Wake Up Your Summer - Since 2014"
        socialLinks={[
          { platform: 'facebook', url: 'https://www.facebook.com/hydrouswakeparks' },
          { platform: 'instagram', url: 'https://www.instagram.com/hydrouswakeparks' },
        ]}
        backgroundColor="bg-sky-500"
        textColor="text-white"
      />
    </main>
  );
}
