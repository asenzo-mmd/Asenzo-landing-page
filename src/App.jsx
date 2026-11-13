import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Brain,
  Users,
  BarChart3,
  Settings2,
  Plus,
  Minus,
  Sparkles,
  Zap,
  Lock,
  Cpu,
  Box,
  Rocket,
  TrendingUp,
  Settings,
  Check,
  ShieldCheck,
  Handshake,
  Clock,
  DollarSign,
  PieChart,
  BarChart2,
  Crown,
  ChevronLeft,
  ChevronRight,
  Globe,
  ArrowUpRight,
  ChevronDown,
  Menu,
  X
} from "lucide-react";
import "./index.css";

// ==========================================
// ASENZO MASTER LANDING PAGE
// 1. Navbar: Grey Glassmorphism with Faded Bottom Outline, Fixed 14px Radius, Shorter Left on Scroll, User's Silver Logo
// 2. First Page: Completely Plain Black Hero (#000000, Zero Gradients, Zero Mesh, Solid Buttons)
// 3. Second Page: High-Fidelity 6-Group Integrations Section (Reduced Width, Increased Length, Center Power Box, Connecting Power Lines)
// 4. Old Design Sections: Core Engines, Benefits, Testimonials, Pricing, 30-Day Timeline, ROI Calculator, Guarantee, FAQ, Envelope Animation, Calendar Booking, Master Footer
// ==========================================

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToBooking = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById("booking");
    if (el) {
      const yOffset = -70; // offset for floating navbar
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      window.location.hash = "#booking";
    }
  };

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 120);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile scroll-stacking card animation visual scaling fallback
  useEffect(() => {
    if (typeof window === "undefined") return;

    let ticking = false;
    const handleStackScroll = () => {
      if (window.innerWidth >= 768) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          if (isReduced) {
            ticking = false;
            return;
          }

          const cardContainers = document.querySelectorAll(".stacking-cards-container");
          cardContainers.forEach((container) => {
            const cards = container.querySelectorAll(".sticky-stack-card");
            cards.forEach((card, idx) => {
              const nextCard = cards[idx + 1];
              if (!nextCard) return;

              const cardRect = card.getBoundingClientRect();
              const nextRect = nextCard.getBoundingClientRect();
              const overlap = cardRect.bottom - nextRect.top;

              if (overlap > 20) {
                const factor = Math.min(overlap / 180, 1);
                const scale = 1 - 0.04 * factor;
                const brightness = 1 - 0.3 * factor;
                card.style.transform = `scale(${scale})`;
                card.style.filter = `brightness(${brightness})`;
              } else {
                card.style.transform = "scale(1)";
                card.style.filter = "brightness(1)";
              }
            });
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleStackScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleStackScroll);
  }, []);

  // Mobile scroll-triggered fade entrance for key areas
  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;
    if (window.innerWidth >= 1024) return;

    document.documentElement.classList.add("mobile-anim-active");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("anim-in-view");
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const targets = document.querySelectorAll(
      ".integrations-card-responsive, .benefits-card-item, .pricing-package-card, .envelope-glass-card, #booking .mobile-only-block, .mobile-reveal-title, .mobile-anim-reveal"
    );
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="app-main-root"
      style={{
        backgroundColor: "#000000",
        minHeight: "100vh",
        color: "#F4F4F6",
        overflowX: "clip",
        position: "relative",
        fontFamily: "'Switzer', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
      }}
    >
      {/* 1. DARK GREY GLASSMORPHISM FLOATING NAVBAR */}
      <AccretionNavbar
        isScrolled={isScrolled}
        onOpenModal={scrollToBooking}
      />

      {/* 2. FIRST PAGE: COMPLETELY PLAIN BLACK HERO */}
      <AccretionHero onOpenModal={scrollToBooking} />

      {/* 3. SECOND PAGE: ASENZO 6-GROUP INTEGRATIONS SECTION WITH CENTER POWER HUB */}
      <AsenzoIntegrationsSection onOpenModal={scrollToBooking} />

      {/* 4. KEY BENEFITS OF AI FOR YOUR BUSINESS GROWTH (Requested section in clean white theme) */}
      <KeyBenefitsSection />

      {/* 5. OLD DESIGN: TESTIMONIAL QUOTE & HAND HOLDING PHONE */}
      <HandHoldingPhoneSection />

      {/* 8. OLD DESIGN: THREE WAYS TO WORK (PRICING TIERS) */}
      <ThreeWaysToWorkSection onAssessmentClick={scrollToBooking} />

      {/* 8. 100% RISK-FREE GUARANTEE BANNER */}
      <GuaranteeBanner onAssessmentClick={scrollToBooking} />

      {/* 9. CARD ENVELOPE SCROLL ANIMATION */}
      <FinalCTAHero onAssessmentClick={scrollToBooking} />

      {/* 10. FREQUENTLY ASKED QUESTIONS (Placed below the envelope page as requested) */}
      <FAQSection />

      {/* 11. CALENDAR BOOKING SECTION (With Cal.com real embed) */}
      <CalendarBookingSection onAssessmentClick={scrollToBooking} />

      {/* 15. OLD DESIGN: MASTER FOOTER */}
      <MasterFooter onAssessmentClick={scrollToBooking} />

      {/* INTERACTIVE ASSESSMENT MODAL */}
      <DiagnosticModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

// ==========================================
// 1. DARK GREY GLASSMORPHISM FLOATING NAVBAR
// - User's uploaded Silver Star/A logo on the left
// - Outline with faded transparency at the bottom
// - Fixed 14px box-curve in both states
// - Shorter left on scroll (text collapses to sleek icon), zero empty gaps!
// - Solid flat orange button (#f94500), no gradient, zero hover expansion
// ==========================================
function AccretionNavbar({ isScrolled, onOpenModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileScrolled, setMobileScrolled] = useState(false);

  // Monitor scroll for mobile compact state - triggers when reaching second page (#integrations)
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const intEl = document.getElementById("integrations");
          const threshold = intEl ? (intEl.offsetTop - 140) : 480;
          setMobileScrolled(window.scrollY >= threshold);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile full-screen menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinksDesktop = [
    { label: "The System", href: "#features" },
    { label: "Infrastructure", href: "#integrations" },
    { label: "Engagements", href: "#pricing" },
    { label: "FAQ", href: "#faq", hideOnScroll: true }
  ];

  const navLinksMobile = [
    { label: "The System", href: "#features" },
    { label: "Infrastructure", href: "#integrations" },
    { label: "Engagements", href: "#pricing" },
    { label: "Guarantee", href: "#guarantee" },
    { label: "FAQ", href: "#faq" }
  ];

  const handleMobileNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const el = document.getElementById(targetId);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleMobileCta = (e) => {
    setMobileMenuOpen(false);
    onOpenModal(e);
  };

  return (
    <>
      {/* ==================================================== */}
      {/* 1. DESKTOP NAVBAR (1024px and above) - PIXEL IDENTICAL */}
      {/* ==================================================== */}
      <header
        className="desktop-nav-root"
        style={{
          position: "fixed",
          top: isScrolled ? 12 : 20,
          left: 0,
          right: 0,
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pointerEvents: "none",
          padding: "0 16px"
        }}
      >
        <nav
          style={{
            pointerEvents: "auto",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: isScrolled ? 14 : 24,
            padding: isScrolled ? "6px 8px 6px 14px" : "8px 12px 8px 18px",
            borderRadius: 14,
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            backgroundColor: isScrolled ? "rgba(14, 16, 20, 0.88)" : "rgba(11, 12, 14, 0.78)",
            borderTop: "1px solid rgba(255, 255, 255, 0.18)",
            borderLeft: "1px solid rgba(255, 255, 255, 0.08)",
            borderRight: "1px solid rgba(255, 255, 255, 0.08)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.02)",
            boxShadow: "0 16px 40px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.12)",
            maxWidth: isScrolled ? 624 : 980,
            width: "100%",
            minHeight: 52,
            transition: "max-width 0.35s cubic-bezier(0.16, 1, 0.3, 1), padding 0.35s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease"
          }}
        >
          {/* Top-to-Bottom Fading Gradient Outline Overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 14,
              padding: 1,
              background: "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.03) 60%, transparent 100%)",
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              pointerEvents: "none"
            }}
          />

          {/* Brand: User's Silver Star/A Logo in Dark Emblem Badge + ASENZO text */}
          <a
            href="#"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 10,
              flexShrink: 0,
              zIndex: 2
            }}
          >
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: 7,
                backgroundColor: "#161820",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.4)"
              }}
            >
              <img
                src="/asenzo-logo.jpg"
                alt="Asenzo"
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 4,
                  objectFit: "cover",
                  mixBlendMode: "screen",
                  display: "block"
                }}
              />
            </div>
            <div
              style={{
                overflow: "hidden",
                maxWidth: isScrolled ? 0 : 100,
                opacity: isScrolled ? 0 : 1,
                transform: isScrolled ? "translateX(-6px)" : "translateX(0)",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                whiteSpace: "nowrap"
              }}
            >
              <span
                style={{
                  fontFamily: "'Switzer', 'Inter', sans-serif",
                  fontSize: 16.5,
                  fontWeight: 700,
                  letterSpacing: "-0.015em",
                  color: "#FFFFFF"
                }}
              >
                ASENZO
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: isScrolled ? 18 : 28,
              fontSize: 13.5,
              fontWeight: 500,
              color: "#949BA8",
              transition: "gap 0.3s ease",
              zIndex: 2
            }}
          >
            {navLinksDesktop.filter((item) => !isScrolled || !item.hideOnScroll).map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  color: "#949BA8",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  whiteSpace: "nowrap"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#949BA8")}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Right CTA Button */}
          <div style={{ display: "flex", alignItems: "center", flexShrink: 0, zIndex: 2 }}>
            <button
              onClick={onOpenModal}
              style={{
                height: 38,
                padding: isScrolled ? "0 18px" : "0 22px",
                borderRadius: 8,
                fontSize: 13.5,
                fontWeight: 600,
                cursor: "pointer",
                transition: "filter 0.2s ease",
                border: "none",
                backgroundColor: "#f94500",
                color: "#ffffff",
                boxShadow: "0 2px 10px rgba(249, 69, 0, 0.35)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                whiteSpace: "nowrap"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = "brightness(1.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = "brightness(1)";
              }}
            >
              Book a Review
            </button>
          </div>
        </nav>
      </header>

      {/* ==================================================== */}
      {/* 2. ACCRETION MOBILE FLOATING NAVBAR (< 1024px) */}
      {/* ==================================================== */}
      <div className="mobile-nav-root">
        {/* Top State: Floating Pill Bar (Full width inset 12px) */}
        {/* Scrolled State: Single Logo Icon Button in Corner (46x46px) with NO outer grid */}
        <div
          onClick={() => setMobileMenuOpen(true)}
          role="button"
          tabIndex={0}
          aria-label={mobileScrolled ? "Open navigation menu" : "Navigation bar with menu"}
          aria-expanded={mobileMenuOpen}
          style={{
            position: "fixed",
            top: "calc(env(safe-area-inset-top, 0px) + 12px)",
            right: 12,
            left: mobileScrolled ? "auto" : 12,
            width: mobileScrolled ? 46 : "calc(100% - 24px)",
            maxWidth: mobileScrolled ? 46 : 460,
            margin: mobileScrolled ? 0 : "0 auto",
            height: 46,
            borderRadius: 10,
            backgroundColor: "#0A0A0A",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid transparent",
            background: "linear-gradient(#0A0A0A, #0A0A0A) padding-box, linear-gradient(180deg, rgba(255, 255, 255, 0.85) 0%, rgba(200, 215, 235, 0.45) 35%, rgba(130, 145, 165, 0.12) 70%, transparent 100%) border-box",
            boxShadow: "0 10px 32px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.55)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: mobileScrolled ? "center" : "space-between",
            padding: mobileScrolled ? 0 : "0 12px 0 14px",
            cursor: "pointer",
            transition: "all 0.28s cubic-bezier(0.16, 1, 0.3, 1)",
            overflow: "hidden",
            boxSizing: "border-box"
          }}
        >
          {/* Scrolled state: ONLY the logo icon itself, no nested bordered box or outer grid */}
          {mobileScrolled ? (
            <img
              src="/asenzo-logo.jpg"
              alt="Asenzo"
              style={{
                width: 26,
                height: 26,
                borderRadius: 6,
                objectFit: "cover",
                mixBlendMode: "screen",
                display: "block"
              }}
            />
          ) : (
            <>
              {/* Brand Logo & Name */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 8,
                    backgroundColor: "#151515",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}
                >
                  <img
                    src="/asenzo-logo.jpg"
                    alt="Asenzo"
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 4,
                      objectFit: "cover",
                      mixBlendMode: "screen",
                      display: "block"
                    }}
                  />
                </div>

                <span
                  style={{
                    fontFamily: "'Switzer', 'Inter', sans-serif",
                    fontSize: 15.5,
                    fontWeight: 700,
                    letterSpacing: "-0.015em",
                    color: "#ffffff"
                  }}
                >
                  ASENZO
                </span>
              </div>

              {/* Right Text Label "Menu" with silver top outline */}
              <div
                style={{
                  height: 30,
                  padding: "0 12px",
                  borderRadius: 8,
                  backgroundColor: "#161616",
                  border: "1px solid transparent",
                  background: "linear-gradient(#161616, #161616) padding-box, linear-gradient(180deg, rgba(255, 255, 255, 0.75) 0%, rgba(190, 205, 225, 0.35) 45%, transparent 100%) border-box",
                  boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.45)",
                  color: "#ffffff",
                  fontSize: 12.5,
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  letterSpacing: "0.01em"
                }}
              >
                Menu
              </div>
            </>
          )}
        </div>

        {/* Half-Page Floating Menu Card on Tap */}
        {mobileMenuOpen && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99999,
              backgroundColor: "rgba(0, 0, 0, 0.65)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              animation: "menuFadeIn 0.2s ease forwards",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              padding: "calc(env(safe-area-inset-top, 0px) + 12px) 12px",
              boxSizing: "border-box"
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            {/* Half-Page Floating Rounded Menu Card */}
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "100%",
                maxWidth: 420,
                backgroundColor: "#141414",
                borderRadius: 22,
                border: "1px solid rgba(255, 255, 255, 0.12)",
                boxShadow: "0 24px 60px rgba(0, 0, 0, 0.8), 0 0 1px rgba(255, 255, 255, 0.2)",
                padding: "20px 20px 18px 20px",
                display: "flex",
                flexDirection: "column",
                boxSizing: "border-box",
                animation: "menuSlideDown 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards"
              }}
            >
              {/* Header: Brand on left, clean X close on right */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  marginBottom: 16
                }}
              >
                <span
                  style={{
                    fontFamily: "'Switzer', 'Inter', sans-serif",
                    fontSize: 16.5,
                    fontWeight: 700,
                    letterSpacing: "-0.015em",
                    color: "#ffffff"
                  }}
                >
                  Asenzo
                </span>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                  style={{
                    background: "none",
                    border: "none",
                    color: "#ffffff",
                    cursor: "pointer",
                    padding: 4,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <X size={20} strokeWidth={2.2} />
                </button>
              </div>

              {/* Centered Navigation Links */}
              <nav
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 12,
                  width: "100%",
                  margin: "6px 0 18px 0"
                }}
              >
                {[
                  { label: "Features", href: "#features" },
                  { label: "Integrations", href: "#integrations" },
                  { label: "Testimonials", href: "#guarantee" },
                  { label: "Pricing", href: "#pricing" },
                  { label: "FAQ", href: "#faq" }
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleMobileNavClick(e, item.href)}
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "center",
                      fontSize: 16.5,
                      fontWeight: 500,
                      color: "#ffffff",
                      textDecoration: "none",
                      letterSpacing: "-0.01em",
                      padding: "4px 0",
                      transition: "color 0.15s ease"
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* Bottom Orange Button: Get started */}
              <button
                onClick={handleMobileCta}
                style={{
                  width: "100%",
                  minHeight: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "radial-gradient(ellipse 90% 70% at 25% 15%, #FF6400 0%, #E63B00 45%, #BA1E00 100%)",
                  border: "1px solid rgba(255, 185, 130, 0.35)",
                  borderTop: "1px solid rgba(255, 255, 255, 0.6)",
                  color: "#ffffff",
                  fontSize: 15.5,
                  fontWeight: 700,
                  boxShadow: "0 4px 18px rgba(230, 60, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.5)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  letterSpacing: "0.01em",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "50%",
                    background: "linear-gradient(180deg, rgba(255, 255, 255, 0.22) 0%, transparent 100%)",
                    pointerEvents: "none"
                  }}
                />
                <span style={{ position: "relative", zIndex: 1 }}>Get started</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

// ==========================================
// 2. FIRST PAGE: COMPLETELY PLAIN BLACK HERO
// Plain black #000000, zero gradients, zero mesh, clean editorial typography, solid buttons
// ==========================================
function AccretionHero({ onOpenModal }) {
  // Dynamically calculate the booking quarter as per current month (1-3: Q1, 4-6: Q2, 7-9: Q3, 10-12: Q4)
  const bookingQuarter = React.useMemo(() => {
    const now = new Date();
    const currentMonth = now.getMonth(); // 0-indexed: 0=Jan..10=Nov, 11=Dec
    const currentYear = now.getFullYear();
    const quarter = Math.floor(currentMonth / 3) + 1; // 1, 2, 3, or 4
    return `Q${quarter} ${currentYear}`;
  }, []);

  return (
    <section
      className="hero-section-wrap section-spacious"
      style={{
        backgroundColor: "#000000",
        minHeight: "92vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        textAlign: "center",
        padding: "clamp(110px, 16vh, 150px) clamp(16px, 4vw, 24px) clamp(56px, 8vw, 90px) clamp(16px, 4vw, 24px)",
        overflow: "hidden"
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: 960,
          margin: "0 auto",
          position: "relative",
          zIndex: 5
        }}
      >
        {/* Booking Quarter Pill Badge */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
          <div
            className="hero-badge-pill"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "5px 14px",
              borderRadius: 20,
              backgroundColor: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              fontSize: 12.5,
              fontWeight: 600,
              color: "#E2E8F0",
              letterSpacing: "0.02em"
            }}
          >
            <span>Booking {bookingQuarter}</span>
          </div>
        </div>

        {/* Hero Title */}
        <h1
          className="mobile-h1"
          style={{
            fontFamily: "'Switzer', 'Inter', sans-serif",
            fontSize: "clamp(28px, 5.5vw, 72px)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.035em",
            color: "#FFFFFF",
            margin: "0 auto 24px auto",
            maxWidth: 960,
            wordBreak: "break-word"
          }}
        >
          <span className="hero-anim-line l1">We Build the </span>
          <span className="hero-anim-line l2">Authority Growth System </span>
          <span className="hero-anim-line l3">That Turns Your Attention </span>
          <span className="hero-anim-line l4">Into Qualified Sales Calls</span>
        </h1>

        {/* Supporting Description in JetBrains Mono Uppercase Monospace */}
        <p
          className="hero-mono-subtext"
          style={{
            fontFamily: "'JetBrains Mono', 'SF Mono', Consolas, monospace",
            fontSize: "clamp(12px, 1.25vw, 13.5px)",
            fontWeight: 600,
            lineHeight: 1.65,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "#CBD5E1",
            maxWidth: 760,
            margin: "0 auto 36px auto",
            padding: "0 4px"
          }}
        >
          ASENZO helps you build and operate the growth infrastructure that turns attention into sales calls through connected systems.
        </p>

        {/* Primary CTA Button: Radiant Orange Gradient with Specular Sheen */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            onClick={onOpenModal}
            className="mobile-btn-52"
            style={{
              minHeight: 48,
              height: 48,
              padding: "0 34px",
              borderRadius: 10,
              fontSize: 14.5,
              fontWeight: 700,
              cursor: "pointer",
              transition: "filter 0.2s ease, transform 0.15s ease",
              border: "1px solid rgba(255, 185, 130, 0.4)",
              borderTop: "1px solid rgba(255, 255, 255, 0.65)",
              background: "radial-gradient(ellipse 90% 70% at 25% 15%, #FF6400 0%, #E63B00 45%, #BA1E00 100%)",
              color: "#ffffff",
              boxShadow: "0 6px 24px rgba(241, 96, 1, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.55)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "min(100%, 280px)",
              position: "relative",
              overflow: "hidden"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = "brightness(1.1)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = "brightness(1)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Get started
          </button>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 3. SECOND PAGE: ASENZO 6-GROUP INTEGRATIONS SECTION
// - 6 Groups: 3 Left + 3 Right
// - Card width reduced slightly (maxWidth: 335px)
// - Card length increased slightly (minHeight: 140px, padding: 16px 20px)
// - Center Box: Covers the gap vertically, NO gradient inside logo box (solid dark #151515)
// - User's silver Star/A logo inside
// - Animated glowing orange gradient at bottom rim (bottomGlowPulse)
// - Ambient orange aura fanning downward
// - Power lines connecting ALL 6 boxes directly into the central power hub!
// ==========================================
// ==========================================
// 3. SECOND PAGE: ASENZO 6-GROUP INTEGRATIONS SECTION
// - Exact Architectural Alignment & Symmetrical Neat Spacing
// - 3 Solid lines from Left 3 boxes connected to Center Big Box
// - 3 Solid lines from Right 3 boxes connected to Center Big Box
// - Heavy & High Center Gradient Animation (Molten Sunrise Core, Radiating Volumetric Flare)
// ==========================================
function AsenzoIntegrationsSection({ onOpenModal }) {
  const leftGroups = [
    {
      id: "layer-1",
      layerNum: "LAYER 01",
      category: "Market Positioning & Authority",
      desc: "Establish how your business is understood and remembered in the market. Develop a distinctive position that communicates your expertise.",
      capabilities: ["Positioning", "Differentiation", "Buyer Messaging"]
    },
    {
      id: "layer-2",
      layerNum: "LAYER 02",
      category: "Demand Generation & Content",
      desc: "Turn your expertise, knowledge and perspectives into a structured content operation designed to attract relevant audiences and build trust.",
      capabilities: ["Research", "Content Strategy", "Production & Publishing"]
    },
    {
      id: "layer-3",
      layerNum: "LAYER 03",
      category: "Prospect Capture",
      desc: "Create clear entry points for interested people through your Instagram presence, content, resources and direct enquiries.",
      capabilities: ["Direct Enquiries", "Keyword Capture", "Resource Delivery"]
    }
  ];

  const rightGroups = [
    {
      id: "layer-4",
      layerNum: "LAYER 04",
      category: "Qualification & Booking",
      desc: "Organise prospect information and connect applications, diagnosis forms and your sales process into a structured booking path.",
      capabilities: ["Initial Information", "Application & Diagnosis", "Booking"]
    },
    {
      id: "layer-5",
      layerNum: "LAYER 05",
      category: "CRM & Workflow Infrastructure",
      desc: "Bring prospect information, enquiries, bookings and follow-up activity into one organised operational environment.",
      capabilities: ["Centralised CRM", "Automations & Workflows", "Reminders & Email Follow-up"]
    },
    {
      id: "layer-6",
      layerNum: "LAYER 06",
      category: "Reporting & Optimisation",
      desc: "Understand how your growth infrastructure performs, identify where opportunities are dropping off and prioritise improvements.",
      capabilities: ["Reporting & Analytics", "Acquisition Tracking", "Bottleneck Identification"]
    }
  ];

  return (
    <section
      id="integrations"
      className="section-spacious"
      style={{
        backgroundColor: "#000000",
        color: "#F4F4F6",
        paddingTop: "clamp(56px, 8vw, 90px)",
        paddingBottom: "clamp(64px, 10vw, 110px)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: 1220,
          margin: "0 auto",
          padding: "0 20px",
          position: "relative",
          zIndex: 10
        }}
      >
        {/* Section Eyebrow Badge */}
        <div style={{ textAlign: "center", marginBottom: 18 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "4px 12px",
              borderRadius: 20,
              backgroundColor: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              fontSize: 11.5,
              fontWeight: 700,
              color: "#E2E8F0",
              letterSpacing: "0.08em",
              textTransform: "uppercase"
            }}
          >
            <span>✦ CONNECTED GROWTH INFRASTRUCTURE</span>
          </div>
        </div>

        {/* Section Heading */}
        <h2
          className="mobile-h2"
          style={{
            fontFamily: "'Switzer', 'Inter', sans-serif",
            fontSize: "clamp(26px, 4.2vw, 48px)",
            fontWeight: 700,
            lineHeight: 1.12,
            letterSpacing: "-0.03em",
            textAlign: "center",
            color: "#FFFFFF",
            margin: "0 auto 12px auto",
            maxWidth: 820
          }}
        >
          Different functions. One connected growth infrastructure.
        </h2>

        {/* Mobile-only pill badge with icon and count */}
        <div className="mobile-only" style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "5px 14px",
              borderRadius: 20,
              backgroundColor: "#1C1C1C",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              fontSize: 12,
              fontWeight: 600,
              color: "#F5F5F5",
              letterSpacing: "0.02em"
            }}
          >
            <Zap size={13} color="#F16001" />
            <span>6 connected layers</span>
          </div>
        </div>

        {/* Supporting Description - HIDE on mobile only as requested */}
        <p
          className="mobile-intro-text desktop-only"
          style={{
            fontSize: "clamp(14px, 1.6vw, 16.5px)",
            lineHeight: 1.6,
            color: "#FFFFFF",
            textAlign: "center",
            maxWidth: 720,
            margin: "0 auto 40px auto"
          }}
        >
          ASENZO designs, builds, and operates the system connecting your positioning, content, and acquisition.
        </p>

        {/* DESKTOP 6-GROUP ECOSYSTEM: 3 Columns with SVG Cords & Center Big Box */}
        <div
          className="desktop-only"
          style={{
            maxWidth: 1140,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative"
          }}
        >
          {/* 3 SOLID LINES FROM LEFT & 3 SOLID LINES FROM RIGHT CONNECTED TO CENTER BIG BOX */}
          <svg
            viewBox="0 0 1140 438"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              zIndex: 3
            }}
          >
            <defs>
              <linearGradient id="solidLeftConduit" x1="320" y1="0" x2="430" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#C10801" />
                <stop offset="50%" stopColor="#F16001" />
                <stop offset="100%" stopColor="#FFA500" />
              </linearGradient>
              <linearGradient id="solidRightConduit" x1="820" y1="0" x2="710" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#C10801" />
                <stop offset="50%" stopColor="#F16001" />
                <stop offset="100%" stopColor="#FFA500" />
              </linearGradient>
            </defs>

            {/* --- LEFT 3 SOLID LINES --- */}
            <path d="M 320 65 C 375 65, 395 145, 430 145" stroke="rgba(241, 96, 1, 0.22)" strokeWidth="5" strokeLinecap="round" />
            <path d="M 320 65 C 375 65, 395 145, 430 145" stroke="url(#solidLeftConduit)" strokeWidth="2.2" strokeLinecap="round" />

            <path d="M 320 219 L 430 219" stroke="rgba(241, 96, 1, 0.22)" strokeWidth="5" strokeLinecap="round" />
            <path d="M 320 219 L 430 219" stroke="url(#solidLeftConduit)" strokeWidth="2.2" strokeLinecap="round" />

            <path d="M 320 373 C 375 373, 395 293, 430 293" stroke="rgba(241, 96, 1, 0.22)" strokeWidth="5" strokeLinecap="round" />
            <path d="M 320 373 C 375 373, 395 293, 430 293" stroke="url(#solidLeftConduit)" strokeWidth="2.2" strokeLinecap="round" />

            {/* --- RIGHT 3 SOLID LINES --- */}
            <path d="M 820 65 C 765 65, 745 145, 710 145" stroke="rgba(241, 96, 1, 0.22)" strokeWidth="5" strokeLinecap="round" />
            <path d="M 820 65 C 765 65, 745 145, 710 145" stroke="url(#solidRightConduit)" strokeWidth="2.2" strokeLinecap="round" />

            <path d="M 820 219 L 710 219" stroke="rgba(241, 96, 1, 0.22)" strokeWidth="5" strokeLinecap="round" />
            <path d="M 820 219 L 710 219" stroke="url(#solidRightConduit)" strokeWidth="2.2" strokeLinecap="round" />

            <path d="M 820 373 C 765 373, 745 293, 710 293" stroke="rgba(241, 96, 1, 0.22)" strokeWidth="5" strokeLinecap="round" />
            <path d="M 820 373 C 765 373, 745 293, 710 293" stroke="url(#solidRightConduit)" strokeWidth="2.2" strokeLinecap="round" />

            {/* Nodes */}
            <circle cx="320" cy="65" r="4" fill="#F16001" />
            <circle cx="320" cy="219" r="4" fill="#F16001" />
            <circle cx="320" cy="373" r="4" fill="#F16001" />
            <circle cx="820" cy="65" r="4" fill="#F16001" />
            <circle cx="820" cy="219" r="4" fill="#F16001" />
            <circle cx="820" cy="373" r="4" fill="#F16001" />
            <circle cx="430" cy="145" r="4" fill="#FFA500" />
            <circle cx="430" cy="219" r="4" fill="#FFA500" />
            <circle cx="430" cy="293" r="4" fill="#FFA500" />
            <circle cx="710" cy="145" r="4" fill="#FFA500" />
            <circle cx="710" cy="219" r="4" fill="#FFA500" />
            <circle cx="710" cy="293" r="4" fill="#FFA500" />
          </svg>

          {/* LEFT COLUMN: 3 NEATLY SPACED CARDS */}
          <div style={{ width: 320, display: "flex", flexDirection: "column", gap: 24, zIndex: 5, flexShrink: 0 }}>
            {leftGroups.map((group) => (
              <CompactIntegrationCard key={group.id} group={group} />
            ))}
          </div>

          {/* CENTER BIG BOX */}
          <AsenzoCenterPowerHub isMobile={false} />

          {/* RIGHT COLUMN: 3 NEATLY SPACED CARDS */}
          <div style={{ width: 320, display: "flex", flexDirection: "column", gap: 24, zIndex: 5, flexShrink: 0 }}>
            {rightGroups.map((group) => (
              <CompactIntegrationCard key={group.id} group={group} />
            ))}
          </div>
        </div>

        {/* MOBILE / TABLET 6-GROUP ECOSYSTEM: Hub graphic first, then all 6 layer cards stacked with 18px gaps */}
        <div
          className="mobile-only-block"
          style={{
            maxWidth: 480,
            margin: "0 auto",
            width: "100%"
          }}
        >
          {/* Phone graphic in large rounded visual card (border-radius 24px, 1px border, background #0B0B0B, zero outer shadow) */}
          <div style={{ display: "flex", justifyContent: "center", width: "100%", marginBottom: 32 }}>
            <AsenzoCenterPowerHub isMobile={true} />
          </div>

          {/* All six layer cards in one column with scroll-stacking */}
          <div className="stacking-cards-container" style={{ display: "flex", flexDirection: "column" }}>
            {[...leftGroups, ...rightGroups].map((group, idx) => (
              <CompactIntegrationCard key={group.id} group={group} index={idx} />
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="layers-closing-block" style={{ textAlign: "center", marginTop: 48, maxWidth: 640, marginLeft: "auto", marginRight: "auto", padding: "0 12px" }}>
          <p className="layers-closing-title" style={{ fontSize: 16, fontWeight: 700, color: "#FFFFFF", letterSpacing: "-0.01em", margin: "0 0 10px 0" }}>
            Different functions. One connected growth infrastructure.
          </p>
          <p className="layers-closing-desc" style={{ fontSize: 15, color: "#FFFFFF", lineHeight: 1.6, margin: 0 }}>
            ASENZO designs, builds, and operates the system connecting your positioning, content, and acquisition.
          </p>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// ASENZO CENTER POWER HUB (Reusable Desktop & Mobile)
// ==========================================
function AsenzoCenterPowerHub({ isMobile = false }) {
  return (
    <div
      className={isMobile ? "mobile-phone-card" : "desktop-power-hub"}
      style={{
        width: isMobile ? "100%" : 280,
        maxWidth: isMobile ? 380 : 280,
        height: isMobile ? 280 : 438,
        margin: isMobile ? "0 auto" : "0",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: isMobile ? "#0B0B0B" : "#0d0d0d",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderBottom: isMobile ? "1px solid rgba(255, 255, 255, 0.08)" : "2px solid #ff7700",
        borderRadius: 24,
        boxShadow: isMobile ? "none" : "0 24px 70px rgba(0, 0, 0, 0.85), inset 0 1px 0 rgba(255, 255, 255, 0.12), 0 15px 40px rgba(255, 85, 0, 0.35)",
        overflow: "hidden",
        zIndex: 4,
        flexShrink: 0
      }}
    >
      {/* Converging Subtle Background Perspective Filaments */}
      <img
        src="/accretion_lines.png"
        alt="Converging ecosystem filaments"
        style={{
          position: "absolute",
          top: "42%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: isMobile ? "100%" : 440,
          maxWidth: "100%",
          height: 260,
          objectFit: "contain",
          pointerEvents: "none",
          opacity: 0.45,
          zIndex: 1
        }}
      />

      {/* HEAVY & HIGH VOLUMETRIC GRADIENT BLOOM */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: isMobile ? "-2%" : "-15%",
          right: isMobile ? "-2%" : "-15%",
          height: isMobile ? 220 : 320,
          background: "radial-gradient(ellipse 95% 85% at 50% 100%, rgba(255, 85, 0, 0.88) 0%, rgba(241, 96, 1, 0.6) 28%, rgba(193, 8, 1, 0.32) 58%, rgba(15, 15, 15, 0) 88%)",
          pointerEvents: "none",
          zIndex: 2,
          animation: "heavyHighGlowPulse 3.2s ease-in-out infinite"
        }}
      />

      {/* INCANDESCENT GOLDEN SUNRISE HOT CORE */}
      <div
        style={{
          position: "absolute",
          bottom: -10,
          left: "5%",
          right: "5%",
          height: isMobile ? 120 : 165,
          background: "radial-gradient(ellipse 85% 95% at 50% 100%, #ffe066 0%, #ff8c00 35%, #ff3a00 68%, transparent 92%)",
          filter: "blur(12px)",
          pointerEvents: "none",
          zIndex: 3,
          animation: "heavyHorizonRise 3.2s ease-in-out infinite"
        }}
      />

      {/* RADIANT HORIZON EDGE HIGHLIGHT */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "linear-gradient(90deg, transparent 0%, #ff4500 15%, #ffaa00 48%, #ffffff 52%, #ffaa00 56%, #ff4500 85%, transparent 100%)",
          boxShadow: "0 0 16px #ff6600, 0 0 32px #ff9900",
          zIndex: 4
        }}
      />

      {/* CENTER LOGO BOX: Grey Glassmorphism on Mobile */}
      <div
        style={{
          width: isMobile ? 84 : 96,
          height: isMobile ? 84 : 96,
          borderRadius: 20,
          background: isMobile
            ? "linear-gradient(135deg, rgba(255, 255, 255, 0.24) 0%, rgba(150, 160, 175, 0.16) 45%, rgba(60, 65, 75, 0.35) 100%)"
            : "#151515",
          backdropFilter: isMobile ? "blur(24px) saturate(150%)" : "none",
          WebkitBackdropFilter: isMobile ? "blur(24px) saturate(150%)" : "none",
          border: isMobile ? "1px solid rgba(255, 255, 255, 0.32)" : "1px solid rgba(255, 255, 255, 0.14)",
          borderTop: isMobile ? "1px solid rgba(255, 255, 255, 0.75)" : "1px solid rgba(255, 255, 255, 0.14)",
          boxShadow: isMobile
            ? "0 18px 42px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.65), inset 0 -1px 2px rgba(0, 0, 0, 0.35)"
            : "0 14px 40px rgba(0, 0, 0, 0.9), 0 0 35px rgba(255, 85, 0, 0.4)",
          position: "relative",
          zIndex: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden"
        }}
      >
        <img
          src="/asenzo-logo.jpg"
          alt="Asenzo Core Logo"
          style={{
            width: isMobile ? 46 : 52,
            height: isMobile ? 46 : 52,
            objectFit: "cover",
            mixBlendMode: "screen",
            display: "block",
            position: "relative",
            zIndex: 4,
            filter: "drop-shadow(0 2px 10px rgba(0, 0, 0, 0.7))"
          }}
        />

        {/* Glowing Rim at Bottom of Logo Box */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "6%",
            right: "6%",
            height: 3,
            background: "linear-gradient(90deg, transparent 0%, #ff5500 20%, #ffaa00 50%, #ffffff 58%, #ffaa00 66%, #ff5500 80%, transparent 100%)",
            boxShadow: "0 0 14px #ff6207, 0 0 28px #ff9900",
            zIndex: 5,
            animation: "bottomGlowPulse 2.4s ease-in-out infinite"
          }}
        />
      </div>
    </div>
  );
}

// ==========================================
// COMPACT INTEGRATION CARD
// Neatly proportioned: responsive width (100% on mobile, max 360px; contained in 320px column on desktop)
// ==========================================
function CompactIntegrationCard({ group, index = 0 }) {
  return (
    <div
      className="integrations-card-responsive sticky-stack-card"
      style={{
        '--i': index,
        backgroundColor: "#13151B",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: 14,
        padding: "16px 18px",
        width: "100%",
        maxWidth: 360,
        margin: "0 auto",
        minHeight: 124,
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 10,
        transition: "border-color 0.2s ease, box-shadow 0.2s ease",
        position: "relative",
        boxSizing: "border-box"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(241, 96, 1, 0.5)";
        e.currentTarget.style.boxShadow = "0 8px 28px rgba(241, 96, 1, 0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.4)";
      }}
    >
      {/* Title & Layer Badge */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8 }}>
        <h3
          className="card-cat-title"
          style={{
            fontFamily: "'Switzer', 'Inter', sans-serif",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "-0.01em",
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.3
          }}
        >
          {group.category}
        </h3>
        {/* Desktop badge: LAYER 0X */}
        <span
          className="card-layer-badge desktop-only"
          style={{
            fontSize: 10,
            fontWeight: 700,
            color: "#F16001",
            backgroundColor: "rgba(241, 96, 1, 0.12)",
            border: "1px solid rgba(241, 96, 1, 0.3)",
            padding: "2px 7px",
            borderRadius: 5,
            letterSpacing: "0.04em",
            whiteSpace: "nowrap"
          }}
        >
          {group.layerNum}
        </span>
        {/* Mobile notched corner tab showing ONLY the number (1, 2, 3...) */}
        <span
          className="card-corner-num mobile-only"
          style={{
            fontSize: 15,
            fontWeight: 600,
            color: "#F5F5F5",
            backgroundColor: "#242424",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            width: 32,
            height: 32,
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0
          }}
        >
          {index + 1}
        </span>
      </div>

      {/* Description */}
      <p
        className="card-desc"
        style={{
          fontSize: 11.5,
          lineHeight: 1.45,
          color: "#CBD5E1",
          margin: 0
        }}
      >
        {group.desc}
      </p>

      {/* Capabilities Tags Row */}
      <div
        className="card-tags-row"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          flexWrap: "wrap",
          paddingTop: 8,
          borderTop: "1px solid rgba(255, 255, 255, 0.06)"
        }}
      >
        {group.capabilities.map((cap, i) => (
          <span
            key={i}
            className="card-tag-pill"
            style={{
              fontSize: 10,
              fontWeight: 600,
              color: "#D1D5DB",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              padding: "2px 7px",
              borderRadius: 4,
              letterSpacing: "0.01em"
            }}
          >
            {cap}
          </span>
        ))}
      </div>
    </div>
  );
}

// ==========================================
function KeyBenefitsSection() {
  const benefits = [
    {
      icon: <Zap size={24} color="#F16001" strokeWidth={2.2} />,
      title: "Clear Market Positioning",
      desc: "Make your expertise, differentiation, and business value easier for the market to understand."
    },
    {
      icon: <ShieldCheck size={24} color="#F16001" strokeWidth={2.2} />,
      title: "Strategic Content Direction",
      desc: "Give your content a defined purpose in attracting, educating, and building buyer trust."
    },
    {
      icon: <Clock size={24} color="#F16001" strokeWidth={2.2} />,
      title: "Consistent Demand Generation",
      desc: "Build a structured content operation around your expertise and market."
    },
    {
      icon: <DollarSign size={24} color="#F16001" strokeWidth={2.2} />,
      title: "Structured Prospect Capture",
      desc: "Give interested prospects clear entry points through your content, resources, and enquiries."
    },
    {
      icon: <PieChart size={24} color="#F16001" strokeWidth={2.2} />,
      title: "Prepared Sales Conversations",
      desc: "Organise prospect information and give your team the context needed before calls."
    },
    {
      icon: <BarChart3 size={24} color="#F16001" strokeWidth={2.2} />,
      title: "Acquisition Visibility",
      desc: "Understand prospect sources, enquiries, qualification, bookings, and recorded sales outcomes."
    }
  ];

  return (
    <section
      id="features"
      style={{
        backgroundColor: "#000000",
        padding: "clamp(56px, 8vw, 110px) clamp(16px, 4vw, 24px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
        position: "relative"
      }}
    >
      <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
        {/* Eyebrow Pill */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <div
            className="section-eyebrow-badge"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "5px 14px",
              borderRadius: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              fontSize: "11.5px",
              fontWeight: 700,
              color: "#E2E8F0",
              letterSpacing: "0.08em",
              textTransform: "uppercase"
            }}
          >
            <span>✦ THE ADVANTAGE</span>
          </div>
        </div>

        {/* Section Heading */}
        <h2
          className="mobile-h2"
          style={{
            fontFamily: "'Switzer', 'Inter', sans-serif",
            fontSize: "clamp(26px, 4.4vw, 50px)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "#FFFFFF",
            textAlign: "center",
            margin: "0 auto 16px auto",
            maxWidth: "760px"
          }}
        >
          Growth Works Better When Everything Connects.
        </h2>

        {/* Subtitle */}
        <p
          className="mobile-intro-text"
          style={{
            fontSize: "clamp(14px, 1.6vw, 16.5px)",
            lineHeight: 1.6,
            color: "#949BA8",
            textAlign: "center",
            margin: "0 auto clamp(32px, 5vw, 64px) auto",
            maxWidth: "680px"
          }}
        >
          Give every part of your growth process a clear role, from how your business is positioned to how interested prospects enter your acquisition process.
        </p>

        {/* 6 Grid Items */}
        <div className="benefits-grid">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="benefits-card-item"
              style={{
                background: "linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(19, 21, 27, 0.6) 100%)",
                backdropFilter: "blur(18px) saturate(140%)",
                WebkitBackdropFilter: "blur(18px) saturate(140%)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderTop: "1px solid rgba(255, 255, 255, 0.28)",
                borderRadius: "14px",
                padding: "clamp(24px, 3.5vw, 32px) clamp(20px, 3vw, 28px)",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                boxShadow: "0 12px 32px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.12)",
                transition: "all 0.25s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(241, 96, 1, 0.55)";
                e.currentTarget.style.boxShadow = "0 14px 36px rgba(241, 96, 1, 0.18), inset 0 1px 1px rgba(255, 255, 255, 0.2)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.12)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                className="benefit-icon-tile"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "16px",
                  backgroundColor: "#0c0c0c",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  boxShadow: "inset 0 -12px 20px rgba(241, 96, 1, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}
              >
                {item.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Switzer', 'Inter', sans-serif",
                  fontSize: "19px",
                  fontWeight: 600,
                  letterSpacing: "-0.015em",
                  color: "#FFFFFF",
                  margin: 0
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: "14.5px",
                  lineHeight: 1.55,
                  color: "#E2E8F0",
                  margin: 0
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const HandHoldingPhoneSection = () => (
  <section className="section-spacious" style={{ backgroundColor: '#000000', padding: 'clamp(56px, 8vw, 100px) 0', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', overflow: 'hidden' }}>
    <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>

      {/* Client Story Eyebrow Pill */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '28px' }}>
        <div
          className="section-eyebrow-badge"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '5px 14px',
            borderRadius: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            fontSize: '11.5px',
            fontWeight: 700,
            color: '#E2E8F0',
            letterSpacing: '0.08em',
            textTransform: 'uppercase'
          }}
        >
          <span>✦ CLIENT STORY</span>
        </div>
      </div>

      {/* Editorial Pull-Quote Block */}
      <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        <blockquote className="client-story-quote" style={{
          fontSize: 'clamp(16px, 1.9vw, 21px)',
          fontWeight: 400,
          lineHeight: 1.75,
          letterSpacing: '-0.015em',
          color: '#FFFFFF',
          margin: '0 0 28px 0',
          textAlign: 'center'
        }}>
          “A month ago, nobody outside our circle knew we existed. Every client came through referrals. We even tried ads, but nothing turned into real sales, and the market kept asking, ‘Why should we choose you?’ We were always compared on price. Then Anas helped us diagnose our real business problem. It wasn’t visibility. It was our positioning and authority. I liked his approach and the way he showed us the path. Once we worked with Asenzo, everything flipped. We went from invisible to impossible to ignore. We generated lakhs of views, but that’s not what mattered. What mattered was that the attention turned into qualified leads, booked calls, and real sales. Decision-makers we’d never met reached out, already knowing who we were. Within a month, we closed a high-ticket corporate deal, powered by our brand and Asenzo’s systems.”
        </blockquote>

        {/* Quiet Inline Avatar + Attribution Line with 20px gap */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', textAlign: 'center', marginTop: '20px' }}>
          <img
            src="/b2b-founder.jpg"
            alt="B2B Founder"
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              objectFit: 'cover',
              objectPosition: 'center 20%',
              border: '1.5px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 2px 12px rgba(0, 0, 0, 0.4)',
              flexShrink: 0,
              display: 'block'
            }}
          />
          <div>
            <div className="client-author-name" style={{ fontSize: '15px', fontWeight: 600, color: '#FFFFFF', lineHeight: 1.2 }}>B2B Founder</div>
            <div className="client-author-role" style={{ fontSize: '13px', color: '#949BA8', marginTop: '4px' }}>CEO of Alarsh</div>
          </div>
        </div>
      </div>

    </div>
  </section>
);

// 6. Built to Scale (Pricing Section - Clean, No Pricing Numbers, No Development Box, No Black Border on Popular)
const ThreeWaysToWorkSection = ({ onAssessmentClick }) => {
  return (
    <section id="pricing" className="section-spacious" style={{
      backgroundColor: '#000000',
      padding: 'clamp(56px, 8vw, 120px) clamp(16px, 4vw, 24px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
    }}>
      <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
        
        {/* Top Header Grid: Left Title + Right Description */}
        <div className="pricing-header-wrap" style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '20px',
          marginBottom: 'clamp(32px, 5vw, 56px)'
        }}>
          <div className="pricing-header-left">
            {/* Technical Eyebrow Pill */}
            <div
              className="section-eyebrow-badge pricing-eyebrow-pill"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 12px',
                borderRadius: '4px',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                color: '#E2E8F0',
                textTransform: 'uppercase',
                marginBottom: '16px'
              }}
            >
              <span className="pricing-barcode" style={{ display: 'inline-flex', alignItems: 'center', gap: '1.5px' }}>
                <span style={{ width: '1.5px', height: '10px', backgroundColor: 'currentColor', display: 'inline-block' }}></span>
                <span style={{ width: '2.5px', height: '10px', backgroundColor: 'currentColor', display: 'inline-block' }}></span>
                <span style={{ width: '1px', height: '10px', backgroundColor: 'currentColor', display: 'inline-block' }}></span>
                <span style={{ width: '2px', height: '10px', backgroundColor: 'currentColor', display: 'inline-block' }}></span>
                <span style={{ width: '1px', height: '10px', backgroundColor: 'currentColor', display: 'inline-block' }}></span>
                <span style={{ width: '2.5px', height: '10px', backgroundColor: 'currentColor', display: 'inline-block' }}></span>
                <span style={{ width: '1.5px', height: '10px', backgroundColor: 'currentColor', display: 'inline-block' }}></span>
              </span>
              <span>ENGAGEMENT OPTIONS</span>
            </div>

            <h2 className="mobile-h2" style={{
              fontFamily: "'Switzer', 'Inter', sans-serif",
              fontSize: 'clamp(28px, 4.8vw, 56px)',
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: '-0.035em',
              color: '#FFFFFF',
              margin: 0
            }}>
              Built Around Your Growth.
            </h2>
          </div>

          <p className="mobile-intro-text" style={{
            fontSize: '14.5px',
            color: '#949BA8',
            lineHeight: 1.5,
            maxWidth: '420px',
            margin: 0
          }}>
            Clear engagement structures. Defined scope. A connected approach to building your growth infrastructure.
          </p>
        </div>

        {/* 3-Box Technical Grid Layout */}
        <div className="pricing-grid">

          {/* Card 1: CORE */}
          <div className="pricing-card-item mobile-card-24" style={{
            background: "linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(19, 21, 27, 0.6) 100%)",
            backdropFilter: "blur(18px) saturate(140%)",
            WebkitBackdropFilter: "blur(18px) saturate(140%)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            borderTop: "1px solid rgba(255, 255, 255, 0.28)",
            borderRadius: "14px",
            padding: "clamp(26px, 3.5vw, 38px) clamp(18px, 3vw, 30px)",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            boxShadow: "0 12px 32px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.12)",
            transition: "all 0.25s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.35)";
            e.currentTarget.style.boxShadow = "0 14px 36px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.2)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
            e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.12)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
          >
            {/* Technical Corner Brackets (Desktop Only) */}
            <div className="desktop-only" style={{ position: 'absolute', top: 8, left: 8, width: 8, height: 8, borderTop: '1.5px solid rgba(255, 255, 255, 0.2)', borderLeft: '1.5px solid rgba(255, 255, 255, 0.2)', pointerEvents: 'none' }} />
            <div className="desktop-only" style={{ position: 'absolute', top: 8, right: 8, width: 8, height: 8, borderTop: '1.5px solid rgba(255, 255, 255, 0.2)', borderRight: '1.5px solid rgba(255, 255, 255, 0.2)', pointerEvents: 'none' }} />
            <div className="desktop-only" style={{ position: 'absolute', bottom: 8, left: 8, width: 8, height: 8, borderBottom: '1.5px solid rgba(255, 255, 255, 0.2)', borderLeft: '1.5px solid rgba(255, 255, 255, 0.2)', pointerEvents: 'none' }} />
            <div className="desktop-only" style={{ position: 'absolute', bottom: 8, right: 8, width: 8, height: 8, borderBottom: '1.5px solid rgba(255, 255, 255, 0.2)', borderRight: '1.5px solid rgba(255, 255, 255, 0.2)', pointerEvents: 'none' }} />

            <div className="pricing-card-header" style={{ marginBottom: '28px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', color: '#949BA8', textTransform: 'uppercase', marginBottom: '6px' }}>
                Growth Foundation
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#FFFFFF', margin: '0 0 10px 0', letterSpacing: '-0.02em' }}>
                CORE
              </h3>
              <p style={{ fontSize: '14.5px', color: '#949BA8', lineHeight: 1.55, margin: 0 }}>
                Establish the essential foundations connecting your online presence to prospect enquiries, built through focused, project-based work.
              </p>
            </div>

            {/* Scope Badge */}
            <div className="pricing-card-scope" style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '4px 10px',
              borderRadius: '4px',
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              fontSize: '11px',
              fontWeight: 600,
              color: '#E2E8F0',
              marginBottom: '28px',
              width: 'fit-content'
            }}>
              Scoped to requirements
            </div>

            {/* Explore Core Button */}
            <button
              onClick={onAssessmentClick}
              className="pricing-btn-action mobile-btn-52"
              style={{
                width: '100%',
                minHeight: '48px',
                height: '48px',
                marginTop: '24px',
                backgroundColor: '#FFFFFF',
                color: '#000000',
                border: 'none',
                borderRadius: '6px',
                fontSize: '13.5px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'filter 0.2s ease',
                boxShadow: '0 2px 10px rgba(255, 255, 255, 0.1)'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.filter = 'brightness(0.92)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.filter = 'brightness(1)'; }}
            >
              Explore Core
            </button>

            <div className="pricing-card-divider" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', margin: '20px 0 18px 0' }} />

            <div className="pricing-card-included" style={{ flex: 1, marginBottom: '24px' }}>
              <div className="pricing-included-title" style={{ fontSize: '12px', color: '#FFFFFF', marginBottom: '16px', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                What's included
              </div>
              <div className="pricing-items-col" style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
                {[
                  "Content and acquisition funnel review",
                  "Strategic growth playbook",
                  "Funnel strategy and planning",
                  "Landing page design and development",
                  "VSL strategy and integration",
                  "Conversion-focused page structure"
                ].map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: '#D1D5DB' }}>
                    <div className="pricing-check-icon-wrap" style={{
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      border: '1.5px solid rgba(255, 255, 255, 0.22)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}>
                      <Check size={10} color="#FFFFFF" strokeWidth={3.5} />
                    </div>
                    <span className="pricing-item-text" style={{ lineHeight: 1.45 }}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: GROWTH (FLAGSHIP ENGAGEMENT) */}
          <div className="pricing-card-item pricing-card-growth mobile-card-24" style={{
            background: "linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(19, 21, 27, 0.6) 100%)",
            backdropFilter: "blur(18px) saturate(140%)",
            WebkitBackdropFilter: "blur(18px) saturate(140%)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            borderTop: "1px solid rgba(255, 255, 255, 0.28)",
            borderRadius: "14px",
            padding: "clamp(26px, 3.5vw, 38px) clamp(18px, 3vw, 30px)",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            boxShadow: "0 12px 32px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.12)",
            transition: "all 0.25s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.35)";
            e.currentTarget.style.boxShadow = "0 14px 36px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.2)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
            e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.12)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
          >
            {/* Technical Corner Brackets (Desktop Only) */}
            <div className="desktop-only" style={{ position: 'absolute', top: 8, left: 8, width: 8, height: 8, borderTop: '1.5px solid rgba(255, 255, 255, 0.2)', borderLeft: '1.5px solid rgba(255, 255, 255, 0.2)', pointerEvents: 'none' }} />
            <div className="desktop-only" style={{ position: 'absolute', top: 8, right: 8, width: 8, height: 8, borderTop: '1.5px solid rgba(255, 255, 255, 0.2)', borderRight: '1.5px solid rgba(255, 255, 255, 0.2)', pointerEvents: 'none' }} />
            <div className="desktop-only" style={{ position: 'absolute', bottom: 8, left: 8, width: 8, height: 8, borderBottom: '1.5px solid rgba(255, 255, 255, 0.2)', borderLeft: '1.5px solid rgba(255, 255, 255, 0.2)', pointerEvents: 'none' }} />
            <div className="desktop-only" style={{ position: 'absolute', bottom: 8, right: 8, width: 8, height: 8, borderBottom: '1.5px solid rgba(255, 255, 255, 0.2)', borderRight: '1.5px solid rgba(255, 255, 255, 0.2)', pointerEvents: 'none' }} />

            <div className="pricing-card-header" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '28px' }}>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', color: '#949BA8', textTransform: 'uppercase', marginBottom: '6px' }}>
                  Authority Growth System
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#FFFFFF', margin: '0 0 10px 0', letterSpacing: '-0.02em' }}>
                  GROWTH
                </h3>
                <p style={{ fontSize: '14.5px', color: '#949BA8', lineHeight: 1.55, margin: 0 }}>
                  The complete ASENZO engagement connecting positioning, demand gen, content, and acquisition infrastructure.
                </p>
              </div>
              {/* Flagship Badge */}
              <div
                className="pricing-flagship-badge"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  padding: '4px 8px',
                  fontSize: '9.5px',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                  borderRadius: '3px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  whiteSpace: 'nowrap'
                }}
              >
                FLAGSHIP
              </div>
            </div>

            {/* Scope Badge */}
            <div className="pricing-card-scope" style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '4px 10px',
              borderRadius: '4px',
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              fontSize: '11px',
              fontWeight: 600,
              color: '#E2E8F0',
              marginBottom: '28px',
              width: 'fit-content'
            }}>
              Build and Operate
            </div>

            {/* Explore Growth Button */}
            <button
              onClick={onAssessmentClick}
              className="pricing-btn-action mobile-btn-52"
              style={{
                width: '100%',
                minHeight: '48px',
                height: '48px',
                marginTop: '24px',
                backgroundColor: '#FFFFFF',
                color: '#000000',
                border: 'none',
                borderRadius: '6px',
                fontSize: '13.5px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'filter 0.2s ease',
                boxShadow: '0 2px 10px rgba(255, 255, 255, 0.1)'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.filter = 'brightness(0.92)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.filter = 'brightness(1)'; }}
            >
              Explore Growth
            </button>

            <div className="pricing-card-divider" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', margin: '20px 0 18px 0' }} />

            <div className="pricing-card-included" style={{ flex: 1, marginBottom: '24px' }}>
              <div className="pricing-included-title" style={{ fontSize: '12px', color: '#FFFFFF', marginBottom: '16px', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                What's included
              </div>
              <div className="pricing-items-col" style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
                {[
                  "Market positioning and buyer messaging",
                  "Intensive audience research",
                  "Clear, tailored scripts engineered to hold attention",
                  "Professionally edited videos built to perform",
                  "Guided shoots, directed by us, so you show up as the expert you are",
                  "Multi-platform Distribution (IG, FB, YT Shorts)",
                  "Educational PDF resources & Story sequences that build trust",
                  "Prospect entry routes & keyword capture",
                  "Public VSL & qualification application page",
                  "Post-booking pages that prepare prospects before the call",
                  "Centralised CRM & booking diagnostics",
                  "Acquisition tracking & monthly performance review",
                  "Full handover of everything we build"
                ].map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: '#D1D5DB' }}>
                    <div className="pricing-check-icon-wrap" style={{
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      border: '1.5px solid rgba(255, 255, 255, 0.22)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}>
                      <Check size={10} color="#FFFFFF" strokeWidth={3.5} />
                    </div>
                    <span className="pricing-item-text" style={{ lineHeight: 1.45 }}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: CUSTOM */}
          <div className="pricing-card-item mobile-card-24" style={{
            background: "linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(19, 21, 27, 0.6) 100%)",
            backdropFilter: "blur(18px) saturate(140%)",
            WebkitBackdropFilter: "blur(18px) saturate(140%)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            borderTop: "1px solid rgba(255, 255, 255, 0.28)",
            borderRadius: "14px",
            padding: "clamp(26px, 3.5vw, 38px) clamp(18px, 3vw, 30px)",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            boxShadow: "0 12px 32px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.12)",
            transition: "all 0.25s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.35)";
            e.currentTarget.style.boxShadow = "0 14px 36px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.2)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
            e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.12)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
          >
            {/* Technical Corner Brackets (Desktop Only) */}
            <div className="desktop-only" style={{ position: 'absolute', top: 8, left: 8, width: 8, height: 8, borderTop: '1.5px solid rgba(255, 255, 255, 0.2)', borderLeft: '1.5px solid rgba(255, 255, 255, 0.2)', pointerEvents: 'none' }} />
            <div className="desktop-only" style={{ position: 'absolute', top: 8, right: 8, width: 8, height: 8, borderTop: '1.5px solid rgba(255, 255, 255, 0.2)', borderRight: '1.5px solid rgba(255, 255, 255, 0.2)', pointerEvents: 'none' }} />
            <div className="desktop-only" style={{ position: 'absolute', bottom: 8, left: 8, width: 8, height: 8, borderBottom: '1.5px solid rgba(255, 255, 255, 0.2)', borderLeft: '1.5px solid rgba(255, 255, 255, 0.2)', pointerEvents: 'none' }} />
            <div className="desktop-only" style={{ position: 'absolute', bottom: 8, right: 8, width: 8, height: 8, borderBottom: '1.5px solid rgba(255, 255, 255, 0.2)', borderRight: '1.5px solid rgba(255, 255, 255, 0.2)', pointerEvents: 'none' }} />

            <div className="pricing-card-header" style={{ marginBottom: '28px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', color: '#949BA8', textTransform: 'uppercase', marginBottom: '6px' }}>
                Custom Infrastructure
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#FFFFFF', margin: '0 0 10px 0', letterSpacing: '-0.02em' }}>
                CUSTOM
              </h3>
              <p style={{ fontSize: '14.5px', color: '#949BA8', lineHeight: 1.55, margin: 0 }}>
                Specialised growth and operational systems developed around individual business requirements.
              </p>
            </div>

            {/* Scope Badge */}
            <div className="pricing-card-scope" style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '4px 10px',
              borderRadius: '4px',
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              fontSize: '11px',
              fontWeight: 600,
              color: '#E2E8F0',
              marginBottom: '28px',
              width: 'fit-content'
            }}>
              Custom Scope
            </div>

            {/* Discuss a Custom Project Button */}
            <button
              onClick={onAssessmentClick}
              className="pricing-btn-action mobile-btn-52"
              style={{
                width: '100%',
                minHeight: '48px',
                height: '48px',
                marginTop: '24px',
                backgroundColor: '#FFFFFF',
                color: '#000000',
                border: 'none',
                borderRadius: '6px',
                fontSize: '13.5px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'filter 0.2s ease',
                boxShadow: '0 2px 10px rgba(255, 255, 255, 0.1)'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.filter = 'brightness(0.92)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.filter = 'brightness(1)'; }}
            >
              Discuss a Custom Project
            </button>

            <div className="pricing-card-divider" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', margin: '20px 0 18px 0' }} />

            <div className="pricing-card-included" style={{ flex: 1, marginBottom: '24px' }}>
              <div className="pricing-included-title" style={{ fontSize: '12px', color: '#FFFFFF', marginBottom: '16px', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                What's included
              </div>
              <div className="pricing-items-col" style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
                {[
                  "Custom CRM architecture",
                  "Advanced operational workflows",
                  "Internal business tools",
                  "Custom integrations",
                  "Bespoke data and reporting systems",
                  "Tailored automation infrastructure"
                ].map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: '#D1D5DB' }}>
                    <div className="pricing-check-icon-wrap" style={{
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      border: '1.5px solid rgba(255, 255, 255, 0.22)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}>
                      <Check size={10} color="#FFFFFF" strokeWidth={3.5} />
                    </div>
                    <span className="pricing-item-text" style={{ lineHeight: 1.45 }}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const GuaranteeBanner = ({ onAssessmentClick }) => (
  <section id="guarantee" className="section-spacious" style={{
    backgroundColor: '#000000',
    padding: 'clamp(56px, 8vw, 120px) clamp(16px, 4vw, 24px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
    display: 'flex',
    justifyContent: 'center'
  }}>
    <div style={{ maxWidth: '1000px', width: '100%', textAlign: 'center' }}>
      
      {/* Shield icon container */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '28px' }}>
        <div
          className="section-eyebrow-badge"
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '16px',
            background: "linear-gradient(145deg, rgba(255, 255, 255, 0.08) 0%, rgba(19, 21, 27, 0.6) 100%)",
            backdropFilter: "blur(18px) saturate(140%)",
            WebkitBackdropFilter: "blur(18px) saturate(140%)",
            border: "1px solid rgba(255, 255, 255, 0.14)",
            borderTop: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: "0 10px 28px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.15)",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            <path d="m9 12 2 2 4-4"></path>
          </svg>
        </div>
      </div>

      <h2 className="mobile-h2" style={{
        fontSize: 'clamp(26px, 4.8vw, 60px)',
        fontWeight: 700,
        color: '#FFFFFF',
        lineHeight: 1.1,
        marginBottom: '20px',
        letterSpacing: '-0.035em'
      }}>
        We Stand Behind the Infrastructure We Build.
      </h2>

      <p className="mobile-intro-text" style={{
        fontSize: 'clamp(14px, 1.6vw, 16px)',
        color: '#949BA8',
        maxWidth: '740px',
        margin: '0 auto 40px auto',
        lineHeight: 1.6
      }}>
        Your engagement has defined delivery milestones and clear responsibilities.
      </p>

      {/* 3 Reference-Styled Boxes (Horizontal Layout on desktop, single column on mobile) */}
      <div className="guarantee-grid">
        {/* Card 1: CORE DELIVERY */}
        <div
          className="guarantee-card-item"
          style={{
            background: "linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(19, 21, 27, 0.6) 100%)",
            backdropFilter: "blur(18px) saturate(140%)",
            WebkitBackdropFilter: "blur(18px) saturate(140%)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            borderTop: "1px solid rgba(255, 255, 255, 0.28)",
            borderRadius: "14px",
            padding: "clamp(24px, 3.5vw, 32px) clamp(20px, 3vw, 28px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            boxShadow: "0 12px 32px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.12)",
            transition: "all 0.25s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.35)";
            e.currentTarget.style.boxShadow = "0 14px 36px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.2)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
            e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.12)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <div className="guarantee-card-header">
            <div
              className="desktop-only"
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                backgroundColor: "rgba(241, 96, 1, 0.12)",
                border: "1px solid rgba(241, 96, 1, 0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              }}
            >
              <Zap size={20} color="#FF6400" strokeWidth={2} />
            </div>
            <Zap className="mobile-only" size={20} color="#FF6400" strokeWidth={2} />
            <h3 style={{
              fontFamily: "'Switzer', 'Inter', sans-serif",
              fontSize: '18px',
              fontWeight: 700,
              color: '#FFFFFF',
              letterSpacing: '-0.015em',
              margin: '14px 0 8px 0'
            }}>
              CORE DELIVERY
            </h3>
          </div>
          <p style={{
            fontSize: "14.5px",
            color: "#E2E8F0",
            lineHeight: 1.55,
            margin: 0
          }}>
            The agreed core acquisition path and deliverables are targeted for day 30.
          </p>
        </div>

        {/* Card 2: FULL INFRASTRUCTURE */}
        <div
          className="guarantee-card-item"
          style={{
            background: "linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(19, 21, 27, 0.6) 100%)",
            backdropFilter: "blur(18px) saturate(140%)",
            WebkitBackdropFilter: "blur(18px) saturate(140%)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            borderTop: "1px solid rgba(255, 255, 255, 0.28)",
            borderRadius: "14px",
            padding: "clamp(24px, 3.5vw, 32px) clamp(20px, 3vw, 28px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            boxShadow: "0 12px 32px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.12)",
            transition: "all 0.25s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.35)";
            e.currentTarget.style.boxShadow = "0 14px 36px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.2)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
            e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.12)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <div className="guarantee-card-header">
            <div
              className="desktop-only"
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                backgroundColor: "rgba(241, 96, 1, 0.12)",
                border: "1px solid rgba(241, 96, 1, 0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              }}
            >
              <Rocket size={20} color="#FF6400" strokeWidth={2} />
            </div>
            <Rocket className="mobile-only" size={20} color="#FF6400" strokeWidth={2} />
            <h3 style={{
              fontFamily: "'Switzer', 'Inter', sans-serif",
              fontSize: '18px',
              fontWeight: 700,
              color: '#FFFFFF',
              letterSpacing: '-0.015em',
              margin: '14px 0 8px 0'
            }}>
              FULL INFRASTRUCTURE
            </h3>
          </div>
          <p style={{
            fontSize: "14.5px",
            color: "#E2E8F0",
            lineHeight: 1.55,
            margin: 0
          }}>
            The full agreed trust layer is targeted for day 60.
          </p>
        </div>

        {/* Card 3: PERFORMANCE REVIEW */}
        <div
          className="guarantee-card-item"
          style={{
            background: "linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(19, 21, 27, 0.6) 100%)",
            backdropFilter: "blur(18px) saturate(140%)",
            WebkitBackdropFilter: "blur(18px) saturate(140%)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            borderTop: "1px solid rgba(255, 255, 255, 0.28)",
            borderRadius: "14px",
            padding: "clamp(24px, 3.5vw, 32px) clamp(20px, 3vw, 28px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            boxShadow: "0 12px 32px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.12)",
            transition: "all 0.25s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.35)";
            e.currentTarget.style.boxShadow = "0 14px 36px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.2)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
            e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.12)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <div className="guarantee-card-header">
            <div
              className="desktop-only"
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                backgroundColor: "rgba(241, 96, 1, 0.12)",
                border: "1px solid rgba(241, 96, 1, 0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              }}
            >
              <Clock size={20} color="#FF6400" strokeWidth={2} />
            </div>
            <Clock className="mobile-only" size={20} color="#FF6400" strokeWidth={2} />
            <h3 style={{
              fontFamily: "'Switzer', 'Inter', sans-serif",
              fontSize: '18px',
              fontWeight: 700,
              color: '#FFFFFF',
              letterSpacing: '-0.015em',
              margin: '14px 0 8px 0'
            }}>
              PERFORMANCE REVIEW
            </h3>
          </div>
          <p style={{
            fontSize: "14.5px",
            color: "#E2E8F0",
            lineHeight: 1.55,
            margin: 0
          }}>
            Your starting organic performance and day 90 results are reviewed using the agreed measurement method.
          </p>
        </div>
      </div>

      {/* Closing Commitment Statement */}
      <p className="guarantee-commitment-text" style={{
        fontSize: '15px',
        color: '#CBD5E1',
        maxWidth: '740px',
        margin: '0 auto 36px auto',
        lineHeight: 1.6
      }}>
        If an agreed workflow is non functional because of our delivery, we fix it without an additional service fee. Applicable refund conditions, responsibilities, and measurement definitions are documented in the signed agreement. We commit to our delivery.
      </p>

      {/* CTA Button & Trust Badges */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <button onClick={onAssessmentClick} className="guarantee-btn-action mobile-btn-52" style={{
          background: 'radial-gradient(ellipse 90% 70% at 25% 15%, #FF6400 0%, #E63B00 45%, #BA1E00 100%)',
          color: '#ffffff',
          border: '1px solid rgba(255, 185, 130, 0.4)',
          borderTop: '1px solid rgba(255, 255, 255, 0.65)',
          borderRadius: '10px',
          padding: '0 32px',
          minHeight: '52px',
          height: '52px',
          width: 'min(100%, 360px)',
          fontSize: '14.5px',
          fontWeight: 700,
          cursor: 'pointer',
          boxShadow: '0 6px 20px rgba(241, 96, 1, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.55)',
          transition: 'filter 0.2s ease, transform 0.15s ease',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
        onMouseEnter={(e) => { e.currentTarget.style.filter = 'brightness(1.1)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.filter = 'brightness(1)'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          Book a Growth Infrastructure Review
        </button>
        <div className="guarantee-ticks-row" style={{ color: '#CBD5E1' }}>
          <span>✓ WORKING BY DAY 30 OR WE FIX IT FREE</span>
          <span>✓ FULL REFUND IF DELIVERY FAILS</span>
          <span>✓ YOU KEEP EVERYTHING WE BUILD</span>
        </div>
      </div>
    </div>
  </section>
);

// 9. FAQ Section
const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      num: "01",
      q: "What does ASENZO do, and how is it different from others?",
      a: "ASENZO designs, builds and operates the growth infrastructure behind your content. Most agencies deliver videos and stop. We build the full path from first view to booked call: positioning, content, funnel, automations, VSL, booking page, CRM and tracking. You can see where prospects drop off, and we fix it using your real data."
    },
    {
      num: "02",
      q: "Will this get me clients?",
      a: "That depends on your offer, your sales process and your expertise, so we don’t promise bookings or revenue. We find where you’re losing prospects, fix those gaps and position your expertise so the right buyers see you as the obvious choice. It works best when the expertise is real. What we do guarantee is delivery, and it’s written in your agreement."
    },
    {
      num: "03",
      q: "Who is this for, and how do I know it’s right for me?",
      a: "The Authority Growth System is for experts with an established offer who want their positioning, content and acquisition to work together. Fit is confirmed on a Growth Infrastructure Diagnostic call. We audit your brand first, then give you a personalised breakdown, a walkthrough of the system and a roadmap, with no obligation."
    },
    {
      num: "04",
      q: "What do you need from us, and how much of my time does it take?",
      a: "We need your business information, account access, a named person to handle enquiries and sales conversations, and your approvals on time. Your time is higher in the first six weeks, then around 4 to 6 hours a month. You join a 45-minute kickoff, record two VSLs and attend a guided shoot that we direct. We handle the research, scripts, editing and posting."
    },
    {
      num: "05",
      q: "How long does it take?",
      a: "Your acquisition path is built and working by day 30, and your first 15 videos are delivered for approval by day 45. After that, we keep operating and improving the system."
    },
    {
      num: "06",
      q: "What happens if something doesn’t work?",
      a: "If something we built isn’t working, we fix it free. If your system still isn’t working by day 45, you get a full refund of what you paid, and you keep what we delivered. Refund terms are in your signed agreement."
    }
  ];

  return (
    <section id="faq" style={{ backgroundColor: '#000000', padding: 'clamp(56px, 8vw, 120px) clamp(16px, 4vw, 24px)', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Eyebrow Pill */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <div
            className="section-eyebrow-badge"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '4px 14px',
              borderRadius: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              fontSize: '11.5px',
              fontWeight: 700,
              color: '#E2E8F0',
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }}
          >
            <span>✦ FREQUENTLY ASKED QUESTIONS</span>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: 'clamp(32px, 5vw, 64px)' }}>
          <h2 style={{ fontSize: 'clamp(26px, 4.2vw, 48px)', fontWeight: 700, color: '#FFFFFF', marginBottom: '14px', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
            Clear Answers. Before We Begin.
          </h2>
          <p style={{ fontSize: 'clamp(14px, 1.6vw, 16px)', color: '#CBD5E1', margin: 0 }}>
            Everything you need to understand about working with ASENZO.
          </p>
        </div>

        <div className="faq-list-container" style={{ display: 'flex', flexDirection: 'column' }}>
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={faq.num}
                className="faq-row-item"
                style={{
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: 'clamp(20px, 3vw, 28px) 0',
                  cursor: 'pointer'
                }}
                onClick={() => setOpenIdx(isOpen ? null : i)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <span className="faq-num" style={{ fontSize: '14px', color: '#F16001', fontFamily: 'monospace', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>{faq.num}</span>
                    <h3 className="faq-q-text" style={{ fontSize: 'clamp(16.5px, 2.4vw, 19px)', fontWeight: 600, color: '#FFFFFF', margin: 0, lineHeight: 1.35 }}>{faq.q}</h3>
                  </div>
                  <div
                    className="faq-icon-holder"
                    style={{
                      color: '#E2E8F0',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'transform 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)'
                    }}
                  >
                    <Plus size={18} />
                  </div>
                </div>

                <div
                  className="faq-ans-wrap"
                  style={{
                    display: 'grid',
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    transition: 'grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease',
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{ paddingTop: '14px', paddingLeft: 'clamp(0px, 3vw, 36px)', paddingRight: '8px' }}>
                      <p className="faq-ans-text" style={{ fontSize: '15px', lineHeight: 1.6, color: '#D1D5DB', margin: 0 }}>
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const FinalCTAHero = ({ onAssessmentClick }) => {
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const containerRef = React.useRef(null);
  const [mobileProgress, setMobileProgress] = React.useState(1);
  const mobileContainerRef = React.useRef(null);

  React.useEffect(() => {
    let animationFrame;
    const handleScroll = () => {
      animationFrame = requestAnimationFrame(() => {
        // Desktop scroll logic
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          if (rect.top <= 0) {
            const maxScroll = rect.height - window.innerHeight;
            let progress = -rect.top / maxScroll;
            progress = Math.min(Math.max(progress, 0), 1);
            setScrollProgress(progress);
          } else if (rect.top > 0) {
            setScrollProgress(0);
          }
        }

        // Mobile scroll-stop reveal logic
        if (mobileContainerRef.current) {
          const isReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          if (isReduced) {
            setMobileProgress(1);
            return;
          }
          const mRect = mobileContainerRef.current.getBoundingClientRect();
          const startOffset = 80;
          const totalDist = mRect.height - window.innerHeight;
          if (mRect.top <= startOffset && totalDist > 0) {
            const p = (startOffset - mRect.top) / (totalDist * 0.65);
            setMobileProgress(Math.min(Math.max(p, 0), 1));
          } else if (mRect.top > startOffset) {
            setMobileProgress(0);
          } else {
            setMobileProgress(1);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      {/* 1. DESKTOP ENVELOPE (1024px+): LUXURY CREAM WHITE ENVELOPE WITH SHINY GLASSY ORANGE CARD */}
      <section
        ref={containerRef}
        className="envelope-outer-section desktop-only"
        style={{
          backgroundColor: '#000000',
          height: '135vh',
          position: 'relative',
          zIndex: 200
        }}
      >
        <div
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingTop: 'clamp(95px, 12vh, 110px)',
            zIndex: 1,
            overflow: 'hidden'
          }}
        >
          <div
            className="envelope-mobile-wrap"
            style={{
              width: '100%',
              maxWidth: '640px',
              position: 'relative',
              height: '620px',
              clipPath: 'inset(-1000px -100px 0px -100px)',
              zIndex: 1,
              padding: '0 clamp(8px, 2vw, 16px)',
              boxSizing: 'border-box'
            }}
          >
            {/* Top Flap (Behind the card) - Warm Cream Paper */}
            <svg style={{ position: 'absolute', bottom: '378px', left: 0, right: 0, zIndex: 1 }} width="100%" height="240" viewBox="0 0 640 240" preserveAspectRatio="none">
              <defs>
                <linearGradient id="topFlapCreamGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#DFD8CC" />
                  <stop offset="45%" stopColor="#ECE6DC" />
                  <stop offset="100%" stopColor="#FAF7F2" />
                </linearGradient>
              </defs>
              <polygon points="320,0 0,240 640,240" fill="url(#topFlapCreamGrad)" stroke="rgba(0, 0, 0, 0.08)" strokeWidth="1" />
            </svg>

            {/* Envelope Back Base - Cream White Paper Pocket Interior */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '380px',
                backgroundColor: '#F3EFE7',
                backgroundImage: 'linear-gradient(180deg, #E4DED2 0%, #F3EFE7 35%, #FAF7F2 100%)',
                borderRadius: '8px',
                boxShadow: 'inset 0 10px 24px rgba(0, 0, 0, 0.08)',
                zIndex: 1
              }}
            />

            {/* The Shiny Glassy Orange Card (Emerges out on scroll) */}
            <div
              style={{
                position: 'absolute',
                bottom: '-50px',
                left: 'clamp(10px, 2.5vw, 24px)',
                right: 'clamp(10px, 2.5vw, 24px)',
                minHeight: '390px',
                backgroundColor: '#E53B00',
                background: 'radial-gradient(ellipse 90% 70% at 25% 15%, #FF6400 0%, #E63B00 45%, #BA1E00 100%)',
                backdropFilter: 'blur(28px) saturate(180%)',
                WebkitBackdropFilter: 'blur(28px) saturate(180%)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 185, 130, 0.4)',
                borderTop: '1px solid rgba(255, 255, 255, 0.75)',
                borderLeft: '1px solid rgba(255, 255, 255, 0.4)',
                padding: 'clamp(24px, 3.5vw, 36px) clamp(16px, 3vw, 30px) clamp(20px, 2.8vw, 28px) clamp(16px, 3vw, 30px)',
                boxShadow: '0 24px 60px rgba(0, 0, 0, 0.45), 0 0 45px rgba(255, 85, 0, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.65), inset 0 -1px 1px rgba(0, 0, 0, 0.25)',
                transform: `translateY(${0 - (Math.min(scrollProgress * 1.15, 1) * 155)}px)`,
                transition: 'transform 0.05s linear',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                overflow: 'hidden'
              }}
            >
              {/* Fine Luminous Micro-Dot Grid */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.14) 1px, transparent 1px)',
                  backgroundSize: '14px 14px',
                  maskImage: 'linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 65%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 65%, transparent 100%)',
                  pointerEvents: 'none',
                  zIndex: 1
                }}
              />

              {/* Glossy Specular Glass Reflection Sheen */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '55%',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0.08) 35%, transparent 65%)',
                  pointerEvents: 'none',
                  zIndex: 1
                }}
              />

              {/* Radiant Ambient Orb */}
              <div
                style={{
                  position: 'absolute',
                  top: '-20%',
                  left: '-15%',
                  width: '340px',
                  height: '340px',
                  background: 'radial-gradient(circle, rgba(255, 175, 70, 0.45) 0%, rgba(255, 100, 0, 0.15) 50%, transparent 75%)',
                  filter: 'blur(35px)',
                  pointerEvents: 'none',
                  zIndex: 1
                }}
              />

              <h2
                className="envelope-card-headline"
                style={{
                  fontFamily: "'Switzer', 'Inter', sans-serif",
                  fontSize: 'clamp(14px, 2.2vw, 20px)',
                  fontWeight: 800,
                  letterSpacing: '0.02em',
                  lineHeight: 1.25,
                  color: '#FFFFFF',
                  marginBottom: '12px',
                  maxWidth: '520px',
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  position: 'relative',
                  zIndex: 2
                }}
              >
                NOT EVERYONE IS WILLING TO CHOOSE GREATNESS. YOU AREN'T EVERYONE.
              </h2>

              <p
                className="envelope-card-body"
                style={{
                  fontSize: 'clamp(11.5px, 1.5vw, 13px)',
                  color: 'rgba(255, 255, 255, 0.95)',
                  marginBottom: '14px',
                  lineHeight: 1.5,
                  fontWeight: 400,
                  maxWidth: '510px',
                  textAlign: 'center',
                  position: 'relative',
                  zIndex: 2
                }}
              >
                You know there's a difference between what is comfortable and what you're capable of. You don't wait for certainty, follow the familiar, or settle for standards set by others. You have the courage to take action, the conviction to think differently, and the ambition to become the exception.
              </p>

              <button
                onClick={onAssessmentClick}
                className="envelope-card-btn"
                style={{
                  minHeight: '44px',
                  height: '44px',
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '0 clamp(20px, 3vw, 32px)',
                  fontSize: '13.5px',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  cursor: 'pointer',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  pointerEvents: 'auto',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.25)',
                  textTransform: 'uppercase',
                  position: 'relative',
                  zIndex: 2
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#F4F4F5';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                I CHOOSE GREATNESS.
              </button>

              <span
                style={{
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  marginTop: '10px',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                  textAlign: 'center',
                  position: 'relative',
                  zIndex: 2
                }}
              >
                The next move is yours.
              </span>
            </div>

            {/* Envelope Front SVG - Cream White Paper Fold Shapes */}
            <svg style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 3, pointerEvents: 'none', filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.6))' }} width="100%" height="380" viewBox="0 0 640 380" preserveAspectRatio="none">
              <defs>
                <linearGradient id="frontSidesCreamGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FAF8F3" />
                  <stop offset="100%" stopColor="#ECE6DC" />
                </linearGradient>
                <linearGradient id="frontBottomCreamGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#E5DFD3" />
                  <stop offset="55%" stopColor="#F5F1E8" />
                  <stop offset="100%" stopColor="#FAF8F4" />
                </linearGradient>
                <filter id="envelopeFrontShadow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="-4" stdDeviation="7" floodColor="#000000" floodOpacity="0.16" />
                </filter>
              </defs>
              <polygon points="0,0 320,280 640,0 640,380 0,380" fill="url(#frontSidesCreamGrad)" stroke="rgba(0, 0, 0, 0.08)" strokeWidth="1" filter="url(#envelopeFrontShadow)" />
              <polygon points="0,380 320,280 640,380" fill="url(#frontBottomCreamGrad)" stroke="rgba(0, 0, 0, 0.08)" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </section>

      {/* 2. MOBILE CARD SECTION (< 1024px): ULTRA-PREMIUM SHINY SLEEK GLASSY ORANGE CARD */}
      <section
        id="mobile-envelope-section"
        className="mobile-only-block"
        style={{
          backgroundColor: '#000000',
          padding: '56px 20px',
          width: '100%',
          boxSizing: 'border-box',
          position: 'relative'
        }}
      >
        <div style={{ maxWidth: '440px', margin: '0 auto', width: '100%', position: 'relative' }}>
          {/* Shiny Glassy Orange Card */}
          <div
            className="envelope-glass-card mobile-anim-reveal"
            style={{
              width: '100%',
              backgroundColor: '#E53B00',
              background: 'radial-gradient(ellipse 90% 70% at 25% 15%, #FF6400 0%, #E63B00 45%, #BA1E00 100%)',
              backdropFilter: 'blur(28px) saturate(180%)',
              WebkitBackdropFilter: 'blur(28px) saturate(180%)',
              borderRadius: '26px',
              border: '1px solid rgba(255, 185, 130, 0.35)',
              borderTop: '1px solid rgba(255, 255, 255, 0.65)',
              borderLeft: '1px solid rgba(255, 255, 255, 0.35)',
              padding: '32px 24px 28px 24px',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              textAlign: 'left',
              boxShadow: '0 24px 64px rgba(0, 0, 0, 0.7), 0 0 45px rgba(255, 85, 0, 0.32), inset 0 1px 1px rgba(255, 255, 255, 0.55), inset 0 -1px 1px rgba(0, 0, 0, 0.25)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Fine Luminous Micro-Dot Grid (matching premium reference) */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.14) 1px, transparent 1px)',
                backgroundSize: '14px 14px',
                maskImage: 'linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 65%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 65%, transparent 100%)',
                pointerEvents: 'none',
                zIndex: 1
              }}
            />

            {/* Glossy Specular Glass Reflection Sheen */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '55%',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0.08) 35%, transparent 65%)',
                pointerEvents: 'none',
                zIndex: 1
              }}
            />

            {/* Radiant Ambient Orb in Top-Left */}
            <div
              style={{
                position: 'absolute',
                top: '-20%',
                left: '-15%',
                width: '320px',
                height: '320px',
                background: 'radial-gradient(circle, rgba(255, 175, 70, 0.45) 0%, rgba(255, 100, 0, 0.15) 50%, transparent 75%)',
                filter: 'blur(35px)',
                pointerEvents: 'none',
                zIndex: 1
              }}
            />

            {/* Headline */}
            <h2
              style={{
                fontFamily: "'Switzer', 'Inter', sans-serif",
                fontSize: 'clamp(21px, 5.6vw, 25px)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                lineHeight: 1.18,
                color: '#FFFFFF',
                textTransform: 'uppercase',
                margin: '0 0 16px 0',
                textAlign: 'left',
                width: '100%',
                position: 'relative',
                zIndex: 2
              }}
            >
              NOT EVERYONE IS WILLING TO CHOOSE GREATNESS. YOU AREN'T EVERYONE.
            </h2>

            {/* Body */}
            <p
              style={{
                fontSize: '14.5px',
                lineHeight: 1.55,
                color: 'rgba(255, 255, 255, 0.95)',
                margin: '0 0 18px 0',
                textAlign: 'left',
                fontWeight: 400,
                position: 'relative',
                zIndex: 2
              }}
            >
              You know there's a difference between what is comfortable and what you're capable of. You don't wait for certainty, follow the familiar, or settle for standards set by others. You have the courage to take action, the conviction to think differently, and the ambition to become the exception.
            </p>

            {/* Full-width 52px button */}
            <button
              onClick={onAssessmentClick}
              className="mobile-btn-52"
              style={{
                width: '100%',
                minHeight: '52px',
                height: '52px',
                backgroundColor: '#FFFFFF',
                color: '#000000',
                border: 'none',
                borderRadius: '14px',
                fontSize: '15px',
                fontWeight: 700,
                letterSpacing: '0.04em',
                cursor: 'pointer',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                whiteSpace: 'nowrap',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.35)',
                position: 'relative',
                zIndex: 2
              }}
            >
              I CHOOSE GREATNESS.
            </button>

            {/* Small line below */}
            <span
              style={{
                fontSize: '13px',
                color: 'rgba(255, 255, 255, 0.88)',
                marginTop: '12px',
                fontWeight: 500,
                letterSpacing: '0.02em',
                textAlign: 'center',
                display: 'block',
                width: '100%',
                position: 'relative',
                zIndex: 2
              }}
            >
              The next move is yours.
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

const CalendarBookingSection = ({ onAssessmentClick }) => {
  return (
    <section id="booking" className="section-spacious" style={{ backgroundColor: '#000000', padding: 'clamp(56px, 8vw, 120px) clamp(16px, 4vw, 24px)', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
      {/* DESKTOP VIEW (1024px+) - Centered Text with Button (No Calendar) */}
      <div className="desktop-only" style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '5px 14px',
            borderRadius: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.1em',
            color: '#E2E8F0',
            textTransform: 'uppercase'
          }}>
            <span style={{ color: '#FF6400', fontSize: '11px' }}>✦</span>
            <span>PRIVATE ACCESS</span>
          </div>
        </div>

        <h2 style={{
          fontFamily: "'Switzer', 'Inter', sans-serif",
          fontSize: 'clamp(36px, 4.5vw, 54px)',
          fontWeight: 700,
          lineHeight: 1.15,
          letterSpacing: '-0.03em',
          color: '#FFFFFF',
          margin: '0 0 20px 0',
          textAlign: 'center'
        }}>
          We Install It. You Own It.
        </h2>

        <p style={{
          fontSize: 'clamp(16px, 1.6vw, 18px)',
          lineHeight: 1.6,
          color: '#CBD5E1',
          maxWidth: '520px',
          margin: '0 auto 36px auto',
          textAlign: 'center'
        }}>
          Book a free Diagnostic call. We’ll find where you’re losing prospects, walk you through the system and give you a clear roadmap for your business.
        </p>

        <button
          onClick={() => {
            window.open("https://app.cal.com/mmd-asenzo/brandgrowth-strategy-call", "_blank") || (window.location.href = "https://app.cal.com/mmd-asenzo/brandgrowth-strategy-call");
          }}
          className="desktop-booking-btn"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '56px',
            height: '56px',
            padding: '0 38px',
            borderRadius: '14px',
            background: 'radial-gradient(ellipse 90% 70% at 25% 15%, #FF6400 0%, #E63B00 45%, #BA1E00 100%)',
            color: '#ffffff',
            fontSize: '16px',
            fontWeight: 700,
            border: '1px solid rgba(255, 185, 130, 0.4)',
            borderTop: '1px solid rgba(255, 255, 255, 0.65)',
            boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.55)',
            cursor: 'pointer',
            letterSpacing: '0.02em',
            position: 'relative',
            overflow: 'hidden',
            transition: 'transform 0.15s ease, opacity 0.15s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 12px 28px rgba(230, 60, 0, 0.28), inset 0 1px 1px rgba(255, 255, 255, 0.55)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'inset 0 1px 1px rgba(255, 255, 255, 0.55)';
          }}
        >
          {/* Subtle glossy sheen reflection */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '50%',
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.22) 0%, transparent 100%)',
              pointerEvents: 'none'
            }}
          />
          <span style={{ position: 'relative', zIndex: 1 }}>Book a Free Diagnostic Call</span>
        </button>
      </div>

      {/* MOBILE CALL-TO-ACTION LAYOUT (< 1024px) - Accretion CTA Style */}
      <div className="mobile-only-block" style={{ maxWidth: '520px', margin: '0 auto', textAlign: 'center', padding: '0 16px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '4px 12px',
              borderRadius: '20px',
              backgroundColor: '#1C1C1C',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              color: '#F5F5F5',
              textTransform: 'uppercase'
            }}
          >
            <span style={{ color: '#F16001', fontSize: '11px' }}>✦</span>
            <span>PRIVATE ACCESS</span>
          </div>
        </div>

        <h2
          className="mobile-h2"
          style={{
            fontFamily: "'Switzer', 'Inter', sans-serif",
            fontSize: 'clamp(28px, 6.2vw, 34px)',
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: '-0.025em',
            color: '#F5F5F5',
            margin: '0 0 16px 0',
            textAlign: 'center'
          }}
        >
          We Install It. You Own It.
        </h2>

        <p
          className="mobile-intro-text"
          style={{
            fontSize: '15.5px',
            lineHeight: 1.6,
            color: '#CBD5E1',
            maxWidth: '460px',
            margin: '0 auto 28px auto',
            textAlign: 'center'
          }}
        >
          Book a free Diagnostic call. We’ll find where you’re losing prospects, walk you through the system and give you a clear roadmap for your business.
        </p>

        <button
          onClick={() => {
            window.location.href = "https://app.cal.com/mmd-asenzo/brandgrowth-strategy-call";
          }}
          className="mobile-btn-52"
          style={{
            width: '100%',
            minHeight: '56px',
            height: '56px',
            borderRadius: '14px',
            background: 'radial-gradient(ellipse 90% 70% at 25% 15%, #FF6400 0%, #E63B00 45%, #BA1E00 100%)',
            color: '#ffffff',
            fontSize: '15.5px',
            fontWeight: 700,
            border: '1px solid rgba(255, 185, 130, 0.4)',
            borderTop: '1px solid rgba(255, 255, 255, 0.65)',
            boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.55)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            letterSpacing: '0.02em',
            margin: '0 auto',
            maxWidth: '420px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Subtle glossy sheen reflection */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '50%',
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.22) 0%, transparent 100%)',
              pointerEvents: 'none'
            }}
          />
          <span style={{ position: 'relative', zIndex: 1 }}>Book a Free Diagnostic Call</span>
        </button>
      </div>
    </section>
  );
};

// Interactive Swipe Button for "Lets connect" in Footer
const LetsConnectSwipeButton = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const [maxSlide, setMaxSlide] = useState(115);

  useEffect(() => {
    const updateSlide = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        // 26px cube width + 12px padding margin = 38px offset
        setMaxSlide(Math.max(0, width - 38));
      }
    };
    updateSlide();
    window.addEventListener('resize', updateSlide);
    return () => window.removeEventListener('resize', updateSlide);
  }, []);

  return (
    <button
      ref={containerRef}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: '100%',
        minWidth: '150px',
        height: '42px',
        backgroundColor: '#f94500',
        borderRadius: '7px',
        border: 'none',
        padding: '0 6px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        cursor: 'pointer',
        boxShadow: isHovered
          ? '0 6px 18px rgba(249, 69, 0, 0.35)'
          : '0 2px 10px rgba(249, 69, 0, 0.22)',
        overflow: 'hidden',
        transition: 'box-shadow 0.25s ease, background-color 0.2s ease',
        userSelect: 'none'
      }}
    >
      {/* Background track text: "Lets connect" without >> arrow */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        color: '#ffffff',
        fontSize: '13px',
        fontWeight: 600,
        letterSpacing: '0.01em',
        transition: 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.25s ease',
        transform: isHovered ? 'translateX(-10px)' : 'translateX(10px)',
        opacity: isHovered ? 0.85 : 1
      }}>
        <span>Lets connect</span>
      </div>

      {/* Reduced-size White Mini Cube with Black Plus Icon - Swipes smoothly to the Right */}
      <div style={{
        width: '26px',
        height: '26px',
        backgroundColor: '#ffffff',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
        transform: `translateX(${isHovered ? maxSlide : 0}px)`,
        transition: 'transform 0.38s cubic-bezier(0.22, 1, 0.36, 1)',
        zIndex: 2,
        flexShrink: 0
      }}>
        <Plus size={13} color="#0f0f11" strokeWidth={2.8} />
      </div>
    </button>
  );
};

// 11. Master Footer
const MasterFooter = ({ onAssessmentClick }) => (
  <footer style={{ backgroundColor: '#000000', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: 'clamp(48px, 6vw, 72px)', paddingBottom: '32px', overflow: 'hidden', width: '100%' }}>
    <div style={{ width: '100%', maxWidth: '100%', padding: '0 clamp(16px, 4vw, 80px)', margin: '0 auto', boxSizing: 'border-box' }}>
      
      {/* Top Flex Container: Stretches across the full website width */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: 'clamp(32px, 5vw, 48px)',
        marginBottom: '36px',
        width: '100%'
      }}>
        {/* Left Side: Brand & Connect Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '420px', flex: '1 1 300px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '30px',
              height: '30px',
              backgroundColor: '#111111',
              borderRadius: '7px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
              overflow: 'hidden',
              flexShrink: 0
            }}>
              <img
                src="/asenzo-logo.jpg"
                alt="Asenzo"
                style={{
                  width: '22px',
                  height: '22px',
                  borderRadius: '4px',
                  objectFit: 'cover',
                  mixBlendMode: 'screen',
                  display: 'block'
                }}
              />
            </div>
            <span className="footer-idea-title" style={{ fontSize: '17px', fontWeight: 700, letterSpacing: '-0.02em', color: '#FFFFFF' }}>
              Have a cool idea?
            </span>
          </div>
          <p className="footer-idea-desc" style={{ fontSize: '14px', color: '#949BA8', lineHeight: 1.6, margin: 0 }}>
            We love talking with ambitious founders who are ready to take action. Whether you have a project in mind or just want to say hello.
          </p>
          <div className="footer-arch-tag" style={{ fontSize: '12px', fontWeight: 600, color: '#E2E8F0', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            Growth Infrastructure · Design. Build. Operate.
          </div>
          <div style={{ marginTop: '4px', width: 'fit-content' }}>
            <LetsConnectSwipeButton onClick={() => {
              window.open("https://app.cal.com/mmd-asenzo/brandgrowth-strategy-call", "_blank") || (window.location.href = "https://app.cal.com/mmd-asenzo/brandgrowth-strategy-call");
            }} />
          </div>
          <div className="footer-copy-text" style={{ fontSize: '12px', color: '#94A3B8', marginTop: '12px' }}>
            © 2026 Asenzo. All rights reserved.
          </div>
        </div>

        {/* Right Side: Columns stretched across to the right edge */}
        <div className="footer-links-grid">
          {/* SOLUTIONS Column */}
          <div>
            <div className="footer-col-heading" style={{ fontSize: '11px', color: '#FFFFFF', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>SOLUTIONS</div>
            <div className="footer-nav-col" style={{ fontSize: '13.5px', color: '#949BA8', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a className="footer-nav-link" href="#pricing" style={{ color: 'inherit', textDecoration: 'none' }}>Core</a>
              <a className="footer-nav-link" href="#pricing" style={{ color: 'inherit', textDecoration: 'none' }}>Growth</a>
              <a className="footer-nav-link" href="#pricing" style={{ color: 'inherit', textDecoration: 'none' }}>Custom</a>
            </div>
          </div>

          {/* NAVIGATION Column */}
          <div>
            <div className="footer-col-heading" style={{ fontSize: '11px', color: '#FFFFFF', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>NAVIGATION</div>
            <div className="footer-nav-col" style={{ fontSize: '13.5px', color: '#949BA8', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a className="footer-nav-link" href="#features" style={{ color: 'inherit', textDecoration: 'none' }}>The System</a>
              <a className="footer-nav-link" href="#integrations" style={{ color: 'inherit', textDecoration: 'none' }}>Infrastructure</a>
              <a className="footer-nav-link" href="#pricing" style={{ color: 'inherit', textDecoration: 'none' }}>Engagements</a>
              <a className="footer-nav-link" href="#faq" style={{ color: 'inherit', textDecoration: 'none' }}>FAQ</a>
            </div>
          </div>
        </div>
      </div>

    </div>

    {/* Full-Width Giant Asenzo Watermark - Pure Grey Font with Soft Bottom Vertical Fade via CSS Mask */}
    <div style={{
      width: '100%',
      marginTop: '40px',
      marginBottom: '-10px',
      textAlign: 'center',
      userSelect: 'none',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      WebkitMaskImage: 'linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.85) 45%, rgba(0, 0, 0, 0) 100%)',
      maskImage: 'linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.85) 45%, rgba(0, 0, 0, 0) 100%)'
    }}>
      <span
        className="footer-watermark-text"
        style={{
          display: 'block',
          fontFamily: "'Switzer', 'Inter', -apple-system, sans-serif",
          fontSize: 'clamp(48px, 17vw, 360px)',
          fontWeight: 800,
          letterSpacing: '-0.045em',
          lineHeight: 0.85,
          width: '100%',
          maxWidth: '100%',
          whiteSpace: 'nowrap',
          color: 'rgba(255, 255, 255, 0.08)',
          textAlign: 'center'
        }}
      >
        Asenzo
      </span>
    </div>
  </footer>
);

// Modal
const DiagnosticModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.85)', backdropFilter: 'blur(10px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ maxWidth: '500px', width: '90%', backgroundColor: '#0A0A0A', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '12px', padding: '40px', position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: '#FFF', fontSize: '20px', cursor: 'pointer' }}>✕</button>
        <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', color: '#F16001', textTransform: 'uppercase', marginBottom: '10px' }}>PRIVATE REVIEW</div>
        <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#FFF', marginBottom: '14px', letterSpacing: '-0.02em' }}>Book a Growth Infrastructure Review</h2>
        <p style={{ fontSize: '14px', color: '#a1a1aa', lineHeight: 1.55, marginBottom: '24px' }}>Let's understand how your positioning, content, and acquisition process currently work, identify the biggest gaps, and explore how ASENZO would connect them.</p>
        <button onClick={() => { onClose(); window.location.hash = "#booking"; }} style={{ width: '100%', height: '46px', backgroundColor: '#FFF', color: '#000', border: 'none', borderRadius: '6px', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>Schedule 30-Minute Review</button>
      </div>
    </div>
  );
};