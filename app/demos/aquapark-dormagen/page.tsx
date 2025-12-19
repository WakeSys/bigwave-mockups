import { Metadata } from 'next';
import Image from 'next/image';
import { Waves, Shield, Users, Clock, Sun, Droplets, PartyPopper } from 'lucide-react';
import { Hero, Features, Activities, Pricing, Gallery, Contact, Navbar, Footer, BookingPanelProvider } from '@/components';
import { BOOKING_BASE_URL } from '@/lib/config';

// Logo component using the Aquapark Dormagen logo
function AquaparkDormagenLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/demos/aquapark-dormagen/logo.png"
      alt="Aquapark Dormagen"
      width={180}
      height={50}
      className={`h-10 w-auto ${className || ''}`}
    />
  );
}

export const metadata: Metadata = {
  title: 'Aquapark Dormagen | Wasserspaß am Straberger See',
  description: 'Über 1.000 m² Wasserspaß in Dormagen! Aquapark mit Rutschen, Trampolinen und Hindernissen. Perfekt für Familien, Gruppen und Firmenevents.',
};

const navLinks = [
  { label: 'Über uns', href: '#about' },
  { label: 'Angebote', href: '#activities' },
  { label: 'Preise', href: '#pricing' },
  { label: 'Galerie', href: '#gallery' },
  { label: 'Kontakt', href: '#contact' },
];

const activities = [
  {
    name: 'Aqua Park',
    description: 'Über 1.000 m² Fläche laden zum Rutschen und Chillen ein, während unsere gemütlichen Lounges und die immer anwesende Aufsicht für ein rundum sicheres Erlebnis sorgen. Hier kannst du dich jederzeit wohlfühlen!',
    price: '15,90 €/Person',
    duration: '45 Minuten',
    capacity: 'Bis zu 50 Gäste',
    image: '/demos/aquapark-dormagen/aquapark-dormagen-aqua-park.jpg',
    features: ['Voller Aquapark-Zugang', 'Schwimmweste inklusive', 'Sessions: 10-17 Uhr (stündlich)', 'Aqua Socken erhältlich (2 €)'],
  },
  {
    name: 'Aqua Park Happy Hour',
    description: 'Genieße den Aquapark zum reduzierten Preis während unserer Happy Hour! Perfekt für einen spontanen Besuch am späten Nachmittag.',
    price: '9,90 €/Person',
    duration: '45 Minuten',
    capacity: 'Bis zu 50 Gäste',
    image: '/demos/aquapark-dormagen/aquapark-dormagen-happy-hour.jpg',
    features: ['Voller Aquapark-Zugang', 'Schwimmweste inklusive', 'Sessions: 15, 16 & 17 Uhr', 'Aqua Socken erhältlich (2 €)'],
  },
];

const features = [
  {
    icon: Waves,
    title: 'Über 1.000 m² Wasserspaß',
    description: 'Riesiger aufblasbarer Wasserpark mit Rutschen, Trampolinen und aufregenden Hindernissen.',
  },
  {
    icon: Droplets,
    title: 'Am Straberger See',
    description: 'Traumhafte Lage direkt am See mit klarem Wasser und natürlicher Umgebung.',
  },
  {
    icon: PartyPopper,
    title: 'Happy Hour Angebot',
    description: 'Ab 15 Uhr zum reduzierten Preis - perfekt für spontane Besuche!',
  },
  {
    icon: Shield,
    title: 'Sicherheit geht vor',
    description: 'Ausgebildete Aufsicht, Schwimmwesten und umfassende Sicherheitseinweisungen.',
  },
  {
    icon: Users,
    title: 'Gruppen willkommen',
    description: 'Perfekt für Geburtstage, Firmenausflüge, Schulklassen und Familientage.',
  },
  {
    icon: Sun,
    title: 'Gemütliche Lounges',
    description: 'Entspannungsbereiche zum Chillen zwischen den Sessions.',
  },
];

const pricing = [
  {
    name: 'Aqua Park Session',
    price: '15,90 €',
    duration: '45 Min',
    description: 'Volles Aquapark-Erlebnis',
    features: ['Alle Attraktionen inklusive', 'Schwimmweste inklusive', '50 Plätze pro Session', 'MwSt. inklusive'],
    highlighted: true,
  },
  {
    name: 'Happy Hour',
    price: '9,90 €',
    duration: '45 Min',
    description: 'Ab 15 Uhr zum Sparpreis',
    features: ['Alle Attraktionen inklusive', 'Schwimmweste inklusive', 'Sessions: 15, 16 & 17 Uhr', 'MwSt. inklusive'],
    highlighted: false,
  },
];

const extras = [
  {
    name: 'Aqua Socken',
    price: '2 €',
    duration: 'Paar',
    description: 'Für besseren Halt',
    features: ['Empfohlen für alle Besucher', 'Rutschfest', 'An der Kasse erhältlich', 'Auch eigene erlaubt'],
    highlighted: false,
  },
];

const galleryImages = [
  { src: '/demos/aquapark-dormagen/aquapark-dormagen-aqua-park.jpg', alt: 'Aquapark Dormagen Hauptattraktion' },
  { src: '/demos/aquapark-dormagen/aquapark-dormagen-happy-hour.jpg', alt: 'Happy Hour am Aquapark' },
];

const contactInfo = {
  address: 'Am Straberger See 16, 41542 Dormagen',
  phone: '+49 (0) 2133 123456',
  email: 'info@wakebeach.de',
  hours: [
    'Mo-Fr: 10:00 - 18:00 Uhr',
    'Sa-So: 10:00 - 19:00 Uhr',
    'Öffnungszeiten saisonabhängig',
  ],
};

export default function AquaparkDormagenPage() {
  const bookingUrl = `${BOOKING_BASE_URL}/aquapark-dormagen/booking`;

  return (
    <main className="font-[family-name:var(--font-quicksand)]">
      <BookingPanelProvider bookingUrl={bookingUrl} />
      
      <Navbar
        logo={<AquaparkDormagenLogo />}
        links={navLinks}
        backgroundColor="bg-white/95"
        textColor="text-gray-700"
        buttonClass="bg-cyan-500 text-white hover:bg-cyan-600"
        alwaysShowBackground={true}
      />
      
      <Hero
        title="Wasserspaß am Straberger See"
        subtitle="Über 1.000 m² aufblasbarer Wasserpark mit Rutschen, Trampolinen und Hindernissen. Das perfekte Erlebnis für die ganze Familie - direkt vor den Toren von Düsseldorf und Köln!"
        backgroundImage="/demos/aquapark-dormagen/aquapark-dormagen-aqua-park.jpg"
        overlayColor="from-cyan-600/80 via-cyan-500/60 to-cyan-400/40"
        badge="Jetzt Buchen - Happy Hour ab 9,90 €"
        badgeClass="bg-amber-500/90 text-white"
        primaryButtonText="Jetzt Buchen"
        primaryButtonClass="bg-cyan-500 text-white hover:bg-cyan-600"
        secondaryButtonText="Mehr erfahren"
        secondaryButtonClass="border-2 border-white text-white hover:bg-white/20"
      />
      
      <Features
        title="Warum Aquapark Dormagen?"
        subtitle="Dein Sommer-Highlight am Straberger See"
        features={features}
        backgroundColor="bg-gradient-to-b from-white to-cyan-50"
        textColor="text-gray-800"
        cardBackgroundColor="bg-white"
        cardTextColor="text-gray-800"
        iconColor="text-cyan-500"
      />

      <Activities
        title="Unsere Angebote"
        subtitle="Wähle dein Erlebnis und buche online - sofortige Bestätigung"
        activities={activities}
        accentColor="text-cyan-600"
        buttonClass="bg-cyan-500 text-white hover:bg-cyan-600"
        backgroundColor="bg-white"
      />
      
      <Pricing
        title="Preise"
        subtitle="Alle Preise inkl. 19% MwSt. Online buchen und Platz sichern!"
        tiers={pricing}
        backgroundColor="bg-cyan-50"
        textColor="text-gray-800"
        cardBackgroundColor="bg-white"
        cardTextColor="text-gray-800"
        highlightColor="bg-cyan-500"
        buttonClass="bg-cyan-500 text-white hover:bg-cyan-600"
        comingSoonBadgeClass="bg-cyan-100 text-cyan-700"
      />

      {/* Extras Section */}
      <Pricing
        title="Extras"
        subtitle="Zusatzangebote für dein Erlebnis"
        tiers={extras}
        backgroundColor="bg-gradient-to-b from-cyan-50 to-white"
        textColor="text-gray-800"
        cardBackgroundColor="bg-white"
        cardTextColor="text-gray-800"
        highlightColor="bg-amber-500"
        buttonClass="bg-cyan-500 text-white hover:bg-cyan-600"
        comingSoonBadgeClass="bg-cyan-100 text-cyan-700"
      />
      
      <Gallery
        title="Impressionen"
        subtitle="Erlebe den Aquapark Dormagen in Bildern"
        images={galleryImages}
        backgroundColor="bg-white"
        textColor="text-gray-800"
      />
      
      <Contact
        title="Anfahrt & Kontakt"
        subtitle="Direkt am Straberger See in Dormagen"
        contact={contactInfo}
        backgroundColor="bg-gradient-to-b from-white to-cyan-50"
        textColor="text-gray-800"
        cardBackgroundColor="bg-white"
        cardTextColor="text-gray-800"
        iconColor="text-cyan-500"
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.5!2d6.8456!3d51.1134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8a1234567890%3A0x1234567890abcdef!2sAm%20Straberger%20See%2016%2C%2041542%20Dormagen!5e0!3m2!1sde!2sde!4v1234567890"
      />
      
      <Footer
        logo={<AquaparkDormagenLogo className="brightness-0 invert" />}
        tagline="Wasserspaß am Straberger See"
        socialLinks={[
          { platform: 'facebook', url: 'https://www.facebook.com/aquaparkdormagen' },
          { platform: 'instagram', url: 'https://www.instagram.com/aquaparkdormagen' },
        ]}
        backgroundColor="bg-cyan-600"
        textColor="text-white"
      />
    </main>
  );
}
