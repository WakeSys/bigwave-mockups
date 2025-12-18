import { Metadata } from 'next';
import { Mountain, Award, Users, Dumbbell, GraduationCap, Timer } from 'lucide-react';
import { Hero, Features, Activities, Pricing, Gallery, Contact, Navbar, Footer, BookingPanelProvider } from '@/components';
import { getBookingUrl } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Summit Climbing Gym | Indoor Rock Climbing',
  description: 'Premier indoor climbing facility with lead walls, bouldering, and training facilities. Classes for all levels.',
};

const navLinks = [
  { label: 'Climbing', href: '#about' },
  { label: 'Activities', href: '#activities' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const activities = [
  {
    name: 'Climbing Gym Day Pass',
    description: 'Full access to our 50ft lead walls, top-rope stations, and auto-belay routes. Routes range from 5.6 to 5.14 for all skill levels.',
    price: '$24/person',
    duration: 'All day',
    capacity: 'Unlimited access',
    image: '/generated/climbing-gym/gallery-3.jpg',
    features: ['All climbing walls', 'Auto-belay access', 'Fitness area included', 'Belay certification required'],
  },
  {
    name: 'Bouldering Session',
    description: 'Explore our 5,000 sq ft bouldering cave with problems from V0 to V12. No ropes needed - just chalk, shoes, and determination!',
    price: '$18/person',
    duration: 'All day',
    capacity: 'Drop-in anytime',
    image: '/generated/climbing-gym/gallery-1.jpg',
    features: ['Full bouldering access', 'Training boards', 'New problems monthly', 'No belay needed'],
  },
];

const features = [
  {
    icon: Mountain,
    title: '50ft Lead Walls',
    description: 'Our main climbing area features routes from 5.6 to 5.14. Auto-belays available on select walls.',
  },
  {
    icon: Dumbbell,
    title: 'Bouldering Cave',
    description: '5,000 sq ft of bouldering terrain with problems from V0 to V12. New sets monthly.',
  },
  {
    icon: GraduationCap,
    title: 'Learn to Climb',
    description: 'Intro classes, belay certification, and technique clinics. Perfect for beginners.',
  },
  {
    icon: Award,
    title: 'Youth Programs',
    description: 'Competitive team, recreational clubs, and summer camps for young climbers.',
  },
  {
    icon: Timer,
    title: 'Fitness Area',
    description: 'Campus boards, hangboards, free weights, and cardio. Train like a pro.',
  },
  {
    icon: Users,
    title: 'Community Events',
    description: 'Weekly meetups, competitions, and social climbs. Join the Summit family.',
  },
];

const pricing = [
  {
    name: 'Day Pass',
    price: '$24',
    duration: 'visit',
    description: 'Full facility access',
    features: ['All climbing areas', 'Fitness center', 'Shoe rental +$6', 'Harness rental +$4'],
    highlighted: true,
  },
  {
    name: 'Monthly',
    price: '$89',
    duration: 'month',
    description: 'Best for regulars',
    features: ['Unlimited climbing', 'Fitness center', 'Guest passes (2/mo)', '10% gear discount'],
    comingSoon: true,
  },
  {
    name: 'Annual',
    price: '$799',
    duration: 'year',
    description: 'Committed climber',
    features: ['Unlimited climbing', 'Free gear rentals', 'Guest passes (4/mo)', '20% gear discount'],
    comingSoon: true,
  },
];

const galleryImages = [
  { src: '/generated/climbing-gym/gallery-1.jpg', alt: 'Climber on overhang' },
  { src: '/generated/climbing-gym/gallery-2.jpg', alt: 'Youth climbing class' },
  { src: '/generated/climbing-gym/gallery-3.jpg', alt: 'Lead climbing wall' },
];

const contactInfo = {
  address: '500 Boulder Road, Denver, CO 80202',
  phone: '(303) 555-0500',
  email: 'climb@summitgym.com',
  hours: [
    'Mon-Fri: 6am - 10pm',
    'Sat-Sun: 8am - 8pm',
    'Holidays: 9am - 6pm',
  ],
};

export default function ClimbingGymPage() {
  return (
    <main className="font-[family-name:var(--font-bebas)] tracking-wide">
      <BookingPanelProvider bookingUrl={getBookingUrl('climbing-gym')} />
      
      <Navbar
        logo="SUMMIT"
        links={navLinks}
        backgroundColor="bg-slate-900/90"
        textColor="text-white"
        buttonClass="bg-orange-500 text-white hover:bg-orange-600"
      />
      
      <Hero
        title="REACH NEW HEIGHTS"
        subtitle="Denver's premier indoor climbing facility. 50-foot walls, massive bouldering cave, and world-class training."
        backgroundImage="/generated/climbing-gym/hero.jpg"
        overlayColor="from-slate-900/80 via-slate-800/50 to-orange-900/30"
        badge="NEW ROUTES SET WEEKLY"
        badgeClass="bg-orange-500 text-white"
        primaryButtonText="GET A DAY PASS"
        primaryButtonClass="bg-orange-500 text-white hover:bg-orange-600"
        secondaryButtonText="VIEW MEMBERSHIP"
        secondaryButtonClass="border-2 border-orange-500 text-orange-400 hover:bg-orange-500/20"
      />
      
      <Features
        title="THE FACILITY"
        subtitle="EVERYTHING YOU NEED TO SEND YOUR PROJECT"
        features={features}
        backgroundColor="bg-gradient-to-b from-slate-100 to-white"
        textColor="text-slate-900"
        cardBackgroundColor="bg-white"
        cardTextColor="text-slate-900"
        iconColor="text-orange-500"
      />

      <Activities
        title="CHOOSE YOUR CLIMB"
        subtitle="Book your session and start climbing today"
        activities={activities}
        accentColor="text-orange-500"
        buttonClass="bg-orange-500 text-white hover:bg-orange-600"
        backgroundColor="bg-white"
      />
      
      <Pricing
        title="MEMBERSHIP"
        subtitle="FIRST-TIMERS: INTRO PACKAGE $35 (DAY PASS + GEAR + BELAY LESSON)"
        tiers={pricing}
        backgroundColor="bg-slate-900"
        textColor="text-white"
        cardBackgroundColor="bg-slate-800"
        cardTextColor="text-white"
        highlightColor="bg-orange-500"
        buttonClass="bg-orange-500 text-white hover:bg-orange-600"
      />
      
      <Gallery
        title="THE SEND"
        subtitle="CAPTURE YOUR CLIMB"
        images={galleryImages}
        backgroundColor="bg-white"
        textColor="text-slate-900"
      />
      
      <Contact
        title="FIND THE GYM"
        subtitle="DOWNTOWN DENVER, EASY PARKING"
        contact={contactInfo}
        backgroundColor="bg-slate-100"
        textColor="text-slate-900"
        cardBackgroundColor="bg-white"
        cardTextColor="text-slate-900"
        iconColor="text-orange-500"
      />
      
      <Footer
        logo="SUMMIT CLIMBING"
        tagline="THE MOUNTAIN IS CALLING"
        socialLinks={[
          { platform: 'instagram', url: '#' },
          { platform: 'youtube', url: '#' },
          { platform: 'facebook', url: '#' },
        ]}
        backgroundColor="bg-slate-900"
        textColor="text-white"
      />
    </main>
  );
}

