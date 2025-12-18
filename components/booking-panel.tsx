'use client';

import { useEffect, useCallback, useRef, useState } from 'react';
import { X, CreditCard, ChevronDown, ChevronUp } from 'lucide-react';

interface BookingPanelProps {
  bookingUrl?: string;
  mobileBreakpoint?: number;
  showTestNotice?: boolean;
}

interface BookingPanelState {
  isOpen: boolean;
  lastFocusedEl: HTMLElement | null;
}

const DEFAULT_BOOKING_URL = 'https://staging.wakesys.app/bigwave-us/booking';
const DEFAULT_MOBILE_BREAKPOINT = 768;

export function BookingPanelProvider({ 
  bookingUrl = DEFAULT_BOOKING_URL,
  mobileBreakpoint = DEFAULT_MOBILE_BREAKPOINT,
  showTestNotice = true
}: BookingPanelProps) {
  const [state, setState] = useState<BookingPanelState>({
    isOpen: false,
    lastFocusedEl: null,
  });
  const [testNoticeExpanded, setTestNoticeExpanded] = useState(false);
  
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const isMobile = useCallback(() => {
    if (typeof window === 'undefined') return false;
    return Math.min(window.innerWidth, window.innerHeight) < mobileBreakpoint;
  }, [mobileBreakpoint]);

  const openPanel = useCallback((url?: string) => {
    const targetUrl = url || bookingUrl;
    
    // On mobile, navigate directly
    if (isMobile()) {
      window.location.href = targetUrl;
      return;
    }

    // Set iframe src
    if (iframeRef.current) {
      iframeRef.current.src = targetUrl;
    }

    setState({
      isOpen: true,
      lastFocusedEl: document.activeElement as HTMLElement,
    });

    document.body.classList.add('bp-lock');
    
    // Focus close button for accessibility
    setTimeout(() => {
      closeButtonRef.current?.focus({ preventScroll: true });
    }, 100);
  }, [bookingUrl, isMobile]);

  const closePanel = useCallback(() => {
    setState(prev => {
      if (prev.lastFocusedEl) {
        prev.lastFocusedEl.focus({ preventScroll: true });
      }
      return { ...prev, isOpen: false };
    });
    
    document.body.classList.remove('bp-lock');
  }, []);

  // Keyboard handling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!state.isOpen) return;
      
      if (e.key === 'Escape') {
        closePanel();
      }
      
      // Focus trap
      if (e.key === 'Tab' && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables.length) return;
        
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        
        if (e.shiftKey && document.activeElement === first) {
          last.focus();
          e.preventDefault();
        } else if (!e.shiftKey && document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [state.isOpen, closePanel]);

  // Expose to window for button clicks
  useEffect(() => {
    (window as Window & { BookingPanel?: { open: typeof openPanel; close: typeof closePanel } }).BookingPanel = {
      open: openPanel,
      close: closePanel,
    };
  }, [openPanel, closePanel]);

  // Listen for custom book-now events
  useEffect(() => {
    const handleBookNow = (e: CustomEvent<{ url?: string }>) => {
      openPanel(e.detail?.url);
    };

    window.addEventListener('book-now' as keyof WindowEventMap, handleBookNow as EventListener);
    return () => window.removeEventListener('book-now' as keyof WindowEventMap, handleBookNow as EventListener);
  }, [openPanel]);


  return (
    <>
      {/* Overlay */}
      <div 
        className={`bp-overlay ${state.isOpen ? 'bp-show' : ''}`}
        onClick={closePanel}
        aria-hidden="true"
      />
      
      {/* Panel */}
      <aside
        ref={panelRef}
        className={`bp-panel ${state.isOpen ? 'bp-show' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="bp-title"
      >
        <div className="bp-header">
          <div className="bp-title" id="bp-title">Booking</div>
          <button
            ref={closeButtonRef}
            className="bp-close"
            onClick={closePanel}
            aria-label="Close booking"
          >
            <X />
          </button>
        </div>
        
        {/* Test Payment Notice */}
        {showTestNotice && (
          <div className="bp-test-notice">
            <button 
              className="bp-test-notice-toggle"
              onClick={() => setTestNoticeExpanded(!testNoticeExpanded)}
              aria-expanded={testNoticeExpanded}
            >
              <CreditCard className="bp-test-notice-icon" />
              <span className="bp-test-notice-title">
                {testNoticeExpanded ? 'Demo Mode' : 'Demo Mode — Click for Test Card Info'}
              </span>
              {testNoticeExpanded ? (
                <ChevronUp className="bp-test-notice-chevron" />
              ) : (
                <ChevronDown className="bp-test-notice-chevron" />
              )}
            </button>
            
            {testNoticeExpanded && (
              <div className="bp-test-notice-content">
                <p className="bp-test-notice-desc">
                  This is a demo environment. No real charges will be made.
                </p>
                <div className="bp-test-notice-cards">
                  <div className="bp-test-card">
                    <div className="bp-test-card-title">Use This Test Card</div>
                    <div className="bp-test-card-number">4242 4242 4242 4242</div>
                    <div className="bp-test-card-details">
                      <span>Exp: 12/29</span>
                      <span>CVC: 123</span>
                      <span>ZIP: 12345</span>
                    </div>
                  </div>
                </div>
                <p className="bp-test-notice-wallet">
                  ✓ Apple Pay & Google Pay work — no real charges!
                </p>
              </div>
            )}
          </div>
        )}
        
        <iframe
          ref={iframeRef}
          className="bp-frame"
          title="Booking"
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
          allow="payment *; geolocation *"
        />
      </aside>
    </>
  );
}

// Button component that triggers the booking panel
interface BookNowButtonProps {
  children: React.ReactNode;
  className?: string;
  url?: string;
}

export function BookNowButton({ children, className, url }: BookNowButtonProps) {
  const handleClick = () => {
    const event = new CustomEvent('book-now', { detail: { url } });
    window.dispatchEvent(event);
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}

