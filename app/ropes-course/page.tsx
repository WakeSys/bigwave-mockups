import { Metadata } from 'next';
import { TreePine, Shield, Users, Map, Compass, Mountain } from 'lucide-react';
import { Hero, Features, Activities, Pricing, Gallery, Contact, Navbar, Footer, BookingPanelProvider } from '@/components';
import { getBookingUrl } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Treeline Adventures | Aerial Ropes Course',
  description: 'Explore the forest from above. Zip lines, rope bridges, and aerial challenges through the canopy.',
};

const navLinks = [
  { label: 'Courses', href: '#about' },
  { label: 'Activities', href: '#activities' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const activities = [
  {
    name: 'Aerial Adventure Course',
    description: 'Explore 50+ elements across 3 difficulty levels! Rope bridges, cargo nets, zip lines, and balance challenges through the treetops.',
    price: '$45/person',
    duration: '2-3 hours',
    capacity: 'Self-paced',
    image: '/generated/ropes-course/gallery-1.jpg',
    features: ['All 3 course levels', 'Harness & helmet', 'Safety briefing', 'Continuous belay system'],
  },
  {
    name: 'Kids Adventure (ages 5-11)',
    description: 'Lower-height course designed just for young adventurers. All the fun with age-appropriate challenges and closer-to-ground elements.',
    price: '$35/child',
    duration: '1.5-2 hours',
    capacity: 'Ages 5-11 only',
    image: '/generated/ropes-course/gallery-2.jpg',
    features: ['Junior course only', 'Child-sized harness', 'Guide assistance', 'Parent can accompany'],
  },
];

const features = [
  {
    icon: TreePine,
    title: '3 Course Levels',
    description: 'Beginner, intermediate, and advanced courses ranging from 15 to 60 feet in the air.',
  },
  {
    icon: Map,
    title: '50+ Elements',
    description: 'Rope bridges, cargo nets, balance beams, swinging logs, and zip lines throughout.',
  },
  {
    icon: Shield,
    title: 'Continuous Belay',
    description: 'State-of-the-art safety system keeps you connected from start to finish.',
  },
  {
    icon: Compass,
    title: 'Self-Guided',
    description: 'After a safety briefing, explore at your own pace. Challenge yourself on any course.',
  },
  {
    icon: Mountain,
    title: 'Giant Swing',
    description: 'Experience the thrill of our 40-foot giant swing - the ultimate adrenaline rush.',
  },
  {
    icon: Users,
    title: 'Team Building',
    description: 'Perfect for corporate groups, scouts, and team outings. Custom packages available.',
  },
];

const pricing = [
  {
    name: 'Junior Course',
    price: '$35',
    duration: '2 hours',
    description: 'Ages 4-7, ground level',
    features: ['Low elements only', 'Parent supervision', 'Harness included', 'Safety briefing'],
  },
  {
    name: 'Full Adventure',
    price: '$55',
    duration: '3 hours',
    description: 'All courses, ages 8+',
    features: ['All 3 course levels', 'Zip line finale', 'Harness included', 'Photo spots'],
    highlighted: true,
  },
  {
    name: 'Add-ons & Bundles',
    price: 'TBD',
    duration: 'varies',
    description: 'Giant swing, photos & more',
    features: ['Giant swing add-on', 'Photo packages', 'Bundle discounts'],
    comingSoon: true,
  },
];

const galleryImages = [
  { src: '/generated/ropes-course/gallery-1.jpg', alt: 'Climber on high ropes' },
  { src: '/generated/ropes-course/gallery-2.jpg', alt: 'Family adventure' },
  { src: '/generated/ropes-course/gallery-3.jpg', alt: 'Zipline through forest' },
];

const contactInfo = {
  address: '789 Forest Trail Road, Asheville, NC 28801',
  phone: '(828) 555-0789',
  email: 'adventure@treelineadventures.com',
  hours: [
    'Daily: 9am - Sunset',
    'Last entry 2 hours before close',
    'Closed during lightning',
  ],
};

export default function RopesCoursePage() {
  return (
    <main className="font-[family-name:var(--font-cabin)]">
      <BookingPanelProvider bookingUrl={getBookingUrl('ropes-course')} />
      
      <Navbar
        logo="Treeline Adventures"
        links={navLinks}
        backgroundColor="bg-amber-50/90"
        textColor="text-emerald-900"
        buttonClass="bg-emerald-600 text-white hover:bg-emerald-700"
      />
      
      <Hero
        title="Adventure Awaits Above"
        subtitle="Soar through the treetops on rope bridges, zip lines, and aerial challenges. Over 50 elements set among the beautiful Blue Ridge Mountains."
        backgroundImage="/generated/ropes-course/hero.jpg"
        overlayColor="from-emerald-900/70 via-emerald-800/40 to-transparent"
        badge="Open Year-Round"
        badgeClass="bg-emerald-600/90 text-white"
        primaryButtonText="Book Adventure"
        primaryButtonClass="bg-emerald-600 text-white hover:bg-emerald-700"
        secondaryButtonText="View Courses"
        secondaryButtonClass="border-2 border-amber-100 text-amber-100 hover:bg-amber-100/20"
      />
      
      <Features
        title="The Experience"
        subtitle="Challenge yourself in nature's playground"
        features={features}
        backgroundColor="bg-gradient-to-b from-amber-50 to-white"
        textColor="text-emerald-900"
        cardBackgroundColor="bg-white"
        cardTextColor="text-emerald-900"
        iconColor="text-emerald-600"
      />

      <Activities
        title="Book Your Adventure"
        subtitle="Choose your experience and book your climb"
        activities={activities}
        accentColor="text-emerald-600"
        buttonClass="bg-emerald-600 text-white hover:bg-emerald-700"
        backgroundColor="bg-white"
      />
      
      <Pricing
        title="Adventure Packages"
        subtitle="Height and weight requirements apply. Closed-toe shoes required."
        tiers={pricing}
        backgroundColor="bg-emerald-900"
        textColor="text-white"
        cardBackgroundColor="bg-emerald-800"
        cardTextColor="text-white"
        highlightColor="bg-amber-500"
        buttonClass="bg-amber-500 text-emerald-900 hover:bg-amber-400"
      />
      
      <Gallery
        title="Life in the Trees"
        subtitle="Capture your adventure"
        images={galleryImages}
        backgroundColor="bg-amber-50"
        textColor="text-emerald-900"
      />
      
      <Contact
        title="Find the Trail"
        subtitle="Nestled in the Blue Ridge foothills"
        contact={contactInfo}
        backgroundColor="bg-white"
        textColor="text-emerald-900"
        cardBackgroundColor="bg-amber-50"
        cardTextColor="text-emerald-900"
        iconColor="text-emerald-600"
      />
      
      <Footer
        logo="Treeline Adventures"
        tagline="Where adventure grows"
        socialLinks={[
          { platform: 'facebook', url: '#' },
          { platform: 'instagram', url: '#' },
        ]}
        backgroundColor="bg-emerald-900"
        textColor="text-white"
      />
    </main>
  );
}

