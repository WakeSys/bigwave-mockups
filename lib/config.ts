// Booking system configuration
// Set NEXT_PUBLIC_BOOKING_BASE_URL in .env.local to override
// Default: localhost:3000 for local dev, staging.wakesys.app for production

const isDev = process.env.NODE_ENV === 'development';
export const BOOKING_BASE_URL = process.env.NEXT_PUBLIC_BOOKING_BASE_URL || 
  (isDev ? 'http://localhost:3000' : 'https://staging.wakesys.app');

export const parkSlugs = {
  'aqua-park': 'splash-bay',
  'trampoline-park': 'airzone', 
  'ropes-course': 'splash-bay',
  'indoor-playground': 'funzone-kids',
  'escape-room': 'enigma-escape',
  'climbing-gym': 'summit-climbing',
} as const;

// Demo park slugs for real customer demos
export const demoParkSlugs = {
  'bli-bli-watersports': 'bli-bli-watersports',
  'aqua-chimp-kent': 'aquachimpkent',
} as const;

export function getBookingUrl(vertical: keyof typeof parkSlugs): string {
  const parkSlug = parkSlugs[vertical];
  return `${BOOKING_BASE_URL}/${parkSlug}/booking`;
}

