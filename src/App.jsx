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
  ChevronDown
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

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        color: "#0f0f11",
        overflowX: "clip",
        position: "relative",
        fontFamily: "'Switzer', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
      }}
    >
      {/* 1. DARK GREY GLASSMORPHISM FLOATING NAVBAR */}
      <AccretionNavbar
        isScrolled={isScrolled}
        onOpenModal={() => setModalOpen(true)}
      />

      {/* 2. FIRST PAGE: COMPLETELY PLAIN BLACK HERO */}
      <AccretionHero onOpenModal={() => setModalOpen(true)} />

      {/* 3. SECOND PAGE: ASENZO 6-GROUP INTEGRATIONS SECTION WITH CENTER POWER HUB */}
      <AsenzoIntegrationsSection onOpenModal={() => setModalOpen(true)} />

      {/* 4. KEY BENEFITS OF AI FOR YOUR BUSINESS GROWTH (Requested section in clean white theme) */}
      <KeyBenefitsSection />

      {/* 5. OLD DESIGN: TESTIMONIAL QUOTE & HAND HOLDING PHONE */}
      <HandHoldingPhoneSection />

      {/* 8. OLD DESIGN: THREE WAYS TO WORK (PRICING TIERS) */}
      <ThreeWaysToWorkSection onAssessmentClick={() => setModalOpen(true)} />

      {/* 9. OLD DESIGN: BUILD, LAUNCH, SCALE IN 30 DAYS TIMELINE */}
      <LiveIn30DaysTimeline onAssessmentClick={() => setModalOpen(true)} />

      {/* 8. 100% RISK-FREE GUARANTEE BANNER */}
      <GuaranteeBanner onAssessmentClick={() => setModalOpen(true)} />

      {/* 9. CARD ENVELOPE SCROLL ANIMATION */}
      <FinalCTAHero onAssessmentClick={() => setModalOpen(true)} />

      {/* 10. FREQUENTLY ASKED QUESTIONS (Placed below the envelope page as requested) */}
      <FAQSection />

      {/* 11. CALENDAR BOOKING SECTION (With Cal.com real embed) */}
      <CalendarBookingSection onAssessmentClick={() => setModalOpen(true)} />

      {/* 15. OLD DESIGN: MASTER FOOTER */}
      <MasterFooter onAssessmentClick={() => setModalOpen(true)} />

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
  return (
    <header
      style={{
        position: "fixed",
        top: 20,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
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
          gap: isScrolled ? 18 : 28,
          padding: isScrolled ? "6px 8px 6px 14px" : "8px 12px 8px 20px",
          borderRadius: 14,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.94)" : "rgba(255, 255, 255, 0.88)",
          // Fading outline: Crisp top, subtle sides, transparent bottom
          borderTop: "1px solid rgba(0, 0, 0, 0.09)",
          borderLeft: "1px solid rgba(0, 0, 0, 0.05)",
          borderRight: "1px solid rgba(0, 0, 0, 0.05)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.01)",
          boxShadow: "0 12px 36px rgba(0, 0, 0, 0.07), inset 0 1px 0 rgba(255, 255, 255, 0.95)",
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
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.02) 60%, rgba(0, 0, 0, 0) 100%)",
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
              backgroundColor: "#111111",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)"
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
                color: "#0f0f11"
              }}
            >
              ASENZO
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <div
          className="desktop-only"
          style={{
            display: "flex",
            alignItems: "center",
            gap: isScrolled ? 18 : 28,
            fontSize: 13.5,
            fontWeight: 500,
            color: "#27272a",
            transition: "gap 0.3s ease",
            zIndex: 2
          }}
        >
          {[
            { label: "The System", href: "#features" },
            { label: "Infrastructure", href: "#integrations" },
            { label: "Engagements", href: "#pricing" },
            { label: "Implementation", href: "#timeline" },
            { label: "FAQ", href: "#faq", hideOnScroll: true }
          ].filter((item) => !isScrolled || !item.hideOnScroll).map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                color: "#27272a",
                textDecoration: "none",
                transition: "color 0.2s ease",
                whiteSpace: "nowrap"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#000000")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#27272a")}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right CTA Button: Solid flat orange (#f94500), no gradient, zero hover expansion */}
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
  );
}

// ==========================================
// 2. FIRST PAGE: COMPLETELY PLAIN BLACK HERO
// Plain black #000000, zero gradients, zero mesh, clean editorial typography, solid buttons
// ==========================================
function AccretionHero({ onOpenModal }) {
  // Dynamically calculate the upcoming booking quarter & year (e.g. Booking Q1 2027)
  const bookingQuarter = React.useMemo(() => {
    const now = new Date();
    const currentMonth = now.getMonth(); // 0-11
    const currentYear = now.getFullYear();
    const currentQuarterIdx = Math.floor(currentMonth / 3);
    const nextQuarterIdx = (currentQuarterIdx + 1) % 4;
    const nextQuarterYear = currentQuarterIdx === 3 ? currentYear + 1 : currentYear;
    return `Q${nextQuarterIdx + 1} ${nextQuarterYear}`;
  }, []);

  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        minHeight: "92vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        textAlign: "center",
        padding: "140px 24px 90px 24px",
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
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "5px 14px",
              borderRadius: 20,
              backgroundColor: "#f4f4f5",
              border: "1px solid #e4e4e7",
              fontSize: 12.5,
              fontWeight: 600,
              color: "#0f0f11",
              letterSpacing: "0.02em"
            }}
          >
            <span>Booking Q4 2027</span>
          </div>
        </div>

        {/* Hero Title */}
        <h1
          style={{
            fontFamily: "'Switzer', 'Inter', sans-serif",
            fontSize: "clamp(42px, 6vw, 80px)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.038em",
            color: "#0f0f11",
            margin: "0 auto 32px auto",
            maxWidth: 920
          }}
        >
          Your Business Has the Expertise. Does It Have the Infrastructure to Turn It Into Growth?
        </h1>

        {/* Primary CTA Button: Solid flat black (#000000), white text, zero hover expansion */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            onClick={onOpenModal}
            style={{
              height: 46,
              padding: "0 30px",
              borderRadius: 8,
              fontSize: 14.5,
              fontWeight: 600,
              cursor: "pointer",
              transition: "filter 0.2s ease",
              border: "none",
              backgroundColor: "#000000",
              color: "#ffffff",
              boxShadow: "0 4px 18px rgba(0, 0, 0, 0.15)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = "brightness(1.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = "brightness(1)";
            }}
          >
            Get started
          </button>
        </div>

        {/* Supporting Brand Positioning Statement in Monospace Caps */}
        <div
          style={{
            marginTop: "26px",
            textAlign: "center",
            padding: "0 16px"
          }}
        >
          <p
            style={{
              fontFamily: "'JetBrains Mono', 'SF Mono', Consolas, monospace",
              fontSize: "12px",
              fontWeight: 600,
              color: "#52525b",
              letterSpacing: "0.06em",
              lineHeight: 1.55,
              textTransform: "uppercase",
              maxWidth: 720,
              margin: "0 auto"
            }}
          >
            ASENZO DESIGNS, BUILDS, AND OPERATES THE INFRASTRUCTURE CONNECTING THESE FUNCTIONS INTO ONE COORDINATED GROWTH SYSTEM.
          </p>
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
      desc: "Turn your expertise, knowledge, and perspectives into a structured content operation designed to attract relevant audiences and build trust.",
      capabilities: ["Research", "Content Strategy", "Production & Publishing"]
    },
    {
      id: "layer-3",
      layerNum: "LAYER 03",
      category: "Prospect Capture",
      desc: "Create clear entry points for interested people through your Instagram presence, content, resources, and direct enquiries.",
      capabilities: ["Direct Enquiries", "Keyword Capture", "Resource Delivery"]
    }
  ];

  const rightGroups = [
    {
      id: "layer-4",
      layerNum: "LAYER 04",
      category: "Qualification & Booking",
      desc: "Organise prospect information and connect applications, human qualification, and scheduling into a structured booking process.",
      capabilities: ["Initial Information", "Team Qualification", "Applications & Booking"]
    },
    {
      id: "layer-5",
      layerNum: "LAYER 05",
      category: "CRM & Workflow Infrastructure",
      desc: "Bring prospect information, enquiries, bookings, and follow-up activity into one organised operational environment.",
      capabilities: ["Centralised CRM", "Automations & Workflows", "Reminders & Follow-up"]
    },
    {
      id: "layer-6",
      layerNum: "LAYER 06",
      category: "Reporting & Optimisation",
      desc: "Understand how your growth infrastructure performs, identify where opportunities are dropping off, and prioritise improvements.",
      capabilities: ["Reporting & Analytics", "Acquisition Tracking", "Bottleneck ID"]
    }
  ];

  return (
    <section
      id="integrations"
      style={{
        backgroundColor: "#ffffff",
        color: "#0f0f11",
        paddingTop: 90,
        paddingBottom: 110,
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
              backgroundColor: "#f4f4f5",
              border: "1px solid #e4e4e7",
              fontSize: 11.5,
              fontWeight: 700,
              color: "#0f0f11",
              letterSpacing: "0.08em",
              textTransform: "uppercase"
            }}
          >
            <span>✦ CONNECTED GROWTH INFRASTRUCTURE</span>
          </div>
        </div>

        {/* Section Heading */}
        <h2
          style={{
            fontFamily: "'Switzer', 'Inter', sans-serif",
            fontSize: "clamp(30px, 3.8vw, 48px)",
            fontWeight: 700,
            lineHeight: 1.12,
            letterSpacing: "-0.03em",
            textAlign: "center",
            color: "#0f0f11",
            margin: "0 auto 12px auto",
            maxWidth: 780
          }}
        >
          Everything Behind Your Growth. Connected.
        </h2>

        {/* Supporting Description */}
        <p
          style={{
            fontSize: "clamp(14.5px, 1.5vw, 16.5px)",
            lineHeight: 1.6,
            color: "#52525b",
            textAlign: "center",
            maxWidth: 680,
            margin: "0 auto 48px auto"
          }}
        >
          Your positioning, content, prospect acquisition, and business operations should work as one connected system. ASENZO brings these essential functions together through one coordinated growth infrastructure.
        </p>

        {/* 6-GROUP ECOSYSTEM: NEATLY SPACED & PERFECTLY ALIGNED (Total height 438px) */}
        <div
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
            className="desktop-only"
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
              {/* userSpaceOnUse ensures the middle horizontal line (which has 0 height) renders the full rich gradient identically to the top and bottom paths! */}
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

            {/* --- LEFT 3 SOLID LINES (Connecting Left 3 Cards to Center Big Box) --- */}
            {/* Ambient Solid Halo 1: Left Card 1 (Top) */}
            <path
              d="M 320 65 C 375 65, 395 145, 430 145"
              stroke="rgba(241, 96, 1, 0.22)"
              strokeWidth="5"
              strokeLinecap="round"
            />
            {/* Solid Line 1: Left Card 1 (Top) -> Center Big Box */}
            <path
              d="M 320 65 C 375 65, 395 145, 430 145"
              stroke="url(#solidLeftConduit)"
              strokeWidth="2.2"
              strokeLinecap="round"
            />

            {/* Ambient Solid Halo 2: Left Card 2 (Mid) */}
            <path
              d="M 320 219 L 430 219"
              stroke="rgba(241, 96, 1, 0.22)"
              strokeWidth="5"
              strokeLinecap="round"
            />
            {/* Solid Line 2: Left Card 2 (Mid) -> Center Big Box */}
            <path
              d="M 320 219 L 430 219"
              stroke="url(#solidLeftConduit)"
              strokeWidth="2.2"
              strokeLinecap="round"
            />

            {/* Ambient Solid Halo 3: Left Card 3 (Bottom) */}
            <path
              d="M 320 373 C 375 373, 395 293, 430 293"
              stroke="rgba(241, 96, 1, 0.22)"
              strokeWidth="5"
              strokeLinecap="round"
            />
            {/* Solid Line 3: Left Card 3 (Bottom) -> Center Big Box */}
            <path
              d="M 320 373 C 375 373, 395 293, 430 293"
              stroke="url(#solidLeftConduit)"
              strokeWidth="2.2"
              strokeLinecap="round"
            />

            {/* --- RIGHT 3 SOLID LINES (Connecting Right 3 Cards to Center Big Box) --- */}
            {/* Ambient Solid Halo 4: Right Card 1 (Top) */}
            <path
              d="M 820 65 C 765 65, 745 145, 710 145"
              stroke="rgba(241, 96, 1, 0.22)"
              strokeWidth="5"
              strokeLinecap="round"
            />
            {/* Solid Line 4: Right Card 1 (Top) -> Center Big Box */}
            <path
              d="M 820 65 C 765 65, 745 145, 710 145"
              stroke="url(#solidRightConduit)"
              strokeWidth="2.2"
              strokeLinecap="round"
            />

            {/* Ambient Solid Halo 5: Right Card 2 (Mid) */}
            <path
              d="M 820 219 L 710 219"
              stroke="rgba(241, 96, 1, 0.22)"
              strokeWidth="5"
              strokeLinecap="round"
            />
            {/* Solid Line 5: Right Card 2 (Mid) -> Center Big Box */}
            <path
              d="M 820 219 L 710 219"
              stroke="url(#solidRightConduit)"
              strokeWidth="2.2"
              strokeLinecap="round"
            />

            {/* Ambient Solid Halo 6: Right Card 3 (Bottom) */}
            <path
              d="M 820 373 C 765 373, 745 293, 710 293"
              stroke="rgba(241, 96, 1, 0.22)"
              strokeWidth="5"
              strokeLinecap="round"
            />
            {/* Solid Line 6: Right Card 3 (Bottom) -> Center Big Box */}
            <path
              d="M 820 373 C 765 373, 745 293, 710 293"
              stroke="url(#solidRightConduit)"
              strokeWidth="2.2"
              strokeLinecap="round"
            />

            {/* Solid Terminal Nodes at Each Card Interface */}
            <circle cx="320" cy="65" r="4" fill="#F16001" />
            <circle cx="320" cy="219" r="4" fill="#F16001" />
            <circle cx="320" cy="373" r="4" fill="#F16001" />
            <circle cx="820" cy="65" r="4" fill="#F16001" />
            <circle cx="820" cy="219" r="4" fill="#F16001" />
            <circle cx="820" cy="373" r="4" fill="#F16001" />

            {/* Solid Terminal Nodes at Center Big Box Interfaces */}
            <circle cx="430" cy="145" r="4" fill="#FFA500" />
            <circle cx="430" cy="219" r="4" fill="#FFA500" />
            <circle cx="430" cy="293" r="4" fill="#FFA500" />
            <circle cx="710" cy="145" r="4" fill="#FFA500" />
            <circle cx="710" cy="219" r="4" fill="#FFA500" />
            <circle cx="710" cy="293" r="4" fill="#FFA500" />
          </svg>

          {/* LEFT COLUMN: 3 NEATLY SPACED CARDS (Width 320px, Height 130px each, Gap 24px) */}
          <div style={{ width: 320, display: "flex", flexDirection: "column", gap: 24, zIndex: 5, flexShrink: 0 }}>
            {leftGroups.map((group) => (
              <CompactIntegrationCard key={group.id} group={group} />
            ))}
          </div>

          {/* CENTER BIG BOX: EXACT HEIGHT (438px) MATCHING THE 3 CARDS
              Featuring HEAVY & HIGH Molten Orange Radiant Horizon Animation
          */}
          <div
            className="desktop-only"
            style={{
              width: 280,
              height: 438,
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#0d0d0d",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderBottom: "2px solid #ff7700",
              borderRadius: 24,
              boxShadow: "0 24px 70px rgba(0, 0, 0, 0.85), inset 0 1px 0 rgba(255, 255, 255, 0.12), 0 15px 40px rgba(255, 85, 0, 0.35)",
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
                width: 440,
                height: 260,
                objectFit: "contain",
                pointerEvents: "none",
                opacity: 0.45,
                zIndex: 1
              }}
            />

            {/* HEAVY & HIGH VOLUMETRIC GRADIENT BLOOM (Rises through 75% of the box height!) */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: "-15%",
                right: "-15%",
                height: 320,
                background: "radial-gradient(ellipse 95% 85% at 50% 100%, rgba(255, 85, 0, 0.88) 0%, rgba(241, 96, 1, 0.6) 28%, rgba(193, 8, 1, 0.32) 58%, rgba(15, 15, 15, 0) 88%)",
                pointerEvents: "none",
                zIndex: 2,
                animation: "heavyHighGlowPulse 3.2s ease-in-out infinite"
              }}
            />

            {/* INCANDESCENT GOLDEN SUNRISE HOT CORE AT THE BOTTOM */}
            <div
              style={{
                position: "absolute",
                bottom: -10,
                left: "5%",
                right: "5%",
                height: 165,
                background: "radial-gradient(ellipse 85% 95% at 50% 100%, #ffe066 0%, #ff8c00 35%, #ff3a00 68%, transparent 92%)",
                filter: "blur(12px)",
                pointerEvents: "none",
                zIndex: 3,
                animation: "heavyHorizonRise 3.2s ease-in-out infinite"
              }}
            />

            {/* RADIANT HORIZON EDGE HIGHLIGHT (Intense razor rim on bottom edge) */}
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

            {/* CENTER LOGO BOX:
                - STRICTLY SOLID DARK #151515 INSIDE (NO gradient inside the logo box per requirement)
                - Contains User's Silver Star/A Logo
                - Bottom Rim catches the heavy incandescent glow!
            */}
            <div
              style={{
                width: 96,
                height: 96,
                borderRadius: 20,
                backgroundColor: "#151515",
                border: "1px solid rgba(255, 255, 255, 0.14)",
                boxShadow: "0 14px 40px rgba(0, 0, 0, 0.9), 0 0 35px rgba(255, 85, 0, 0.4)",
                position: "relative",
                zIndex: 5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden"
              }}
            >
              {/* User's Uploaded Silver Star/A Logo */}
              <img
                src="/asenzo-logo.jpg"
                alt="Asenzo Core Logo"
                style={{
                  width: 52,
                  height: 52,
                  objectFit: "cover",
                  mixBlendMode: "screen",
                  display: "block",
                  position: "relative",
                  zIndex: 4,
                  filter: "drop-shadow(0 2px 10px rgba(0, 0, 0, 0.7))"
                }}
              />

              {/* Glowing Rim at Bottom of Logo Box catching the heavy illumination */}
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

          {/* RIGHT COLUMN: 3 NEATLY SPACED CARDS (Width 320px, Height 130px each, Gap 24px) */}
          <div style={{ width: 320, display: "flex", flexDirection: "column", gap: 24, zIndex: 5, flexShrink: 0 }}>
            {rightGroups.map((group) => (
              <CompactIntegrationCard key={group.id} group={group} />
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div style={{ textAlign: "center", marginTop: 56, maxWidth: 640, marginLeft: "auto", marginRight: "auto" }}>
          <p style={{ fontSize: 15, fontWeight: 700, color: "#0f0f11", letterSpacing: "-0.01em", margin: "0 0 8px 0" }}>
            Different functions. One connected growth infrastructure.
          </p>
          <p style={{ fontSize: 13.5, color: "#52525b", lineHeight: 1.5, margin: 0 }}>
            ASENZO designs, builds, and operates the system connecting your positioning, content, and customer acquisition.
          </p>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// COMPACT INTEGRATION CARD
// Neatly proportioned: width 320px, fixed height 130px for exact vertical alignment
// ==========================================
function CompactIntegrationCard({ group }) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid rgba(0, 0, 0, 0.08)",
        borderRadius: 14,
        padding: "16px 18px",
        width: 320,
        minHeight: 132,
        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.04)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 10,
        transition: "border-color 0.2s ease, box-shadow 0.2s ease",
        position: "relative",
        boxSizing: "border-box"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(241, 96, 1, 0.4)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(241, 96, 1, 0.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.08)";
        e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.04)";
      }}
    >
      {/* Title & Layer Badge */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8 }}>
        <h3
          style={{
            fontFamily: "'Switzer', 'Inter', sans-serif",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "-0.01em",
            color: "#0f0f11",
            margin: 0,
            lineHeight: 1.3
          }}
        >
          {group.category}
        </h3>
        <span
          style={{
            fontSize: 10,
            fontWeight: 700,
            color: "#F16001",
            backgroundColor: "rgba(241, 96, 1, 0.08)",
            padding: "2px 7px",
            borderRadius: 5,
            letterSpacing: "0.04em",
            whiteSpace: "nowrap"
          }}
        >
          {group.layerNum}
        </span>
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: 11.5,
          lineHeight: 1.45,
          color: "#52525b",
          margin: 0
        }}
      >
        {group.desc}
      </p>

      {/* Capabilities Tags Row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          flexWrap: "wrap",
          paddingTop: 8,
          borderTop: "1px solid #f4f4f5"
        }}
      >
        {group.capabilities.map((cap, i) => (
          <span
            key={i}
            style={{
              fontSize: 10,
              fontWeight: 600,
              color: "#3f3f46",
              backgroundColor: "#f4f4f5",
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
      icon: <Zap size={20} color="#F16001" strokeWidth={2.2} />,
      title: "Clear Market Positioning",
      desc: "Make your expertise, differentiation, and business value easier for the market to understand."
    },
    {
      icon: <ShieldCheck size={20} color="#F16001" strokeWidth={2.2} />,
      title: "Strategic Content Direction",
      desc: "Give your content a defined purpose in attracting, educating, and building buyer trust."
    },
    {
      icon: <Clock size={20} color="#F16001" strokeWidth={2.2} />,
      title: "Consistent Demand Generation",
      desc: "Build a structured content operation around your expertise and market."
    },
    {
      icon: <DollarSign size={20} color="#F16001" strokeWidth={2.2} />,
      title: "Structured Prospect Capture",
      desc: "Give interested prospects clear entry points through your content, resources, and enquiries."
    },
    {
      icon: <PieChart size={20} color="#F16001" strokeWidth={2.2} />,
      title: "Prepared Sales Conversations",
      desc: "Organise prospect information and give your team the context needed before calls."
    },
    {
      icon: <BarChart3 size={20} color="#F16001" strokeWidth={2.2} />,
      title: "Acquisition Visibility",
      desc: "Understand prospect sources, enquiries, qualification, bookings, and recorded sales outcomes."
    }
  ];

  return (
    <section
      id="features"
      style={{
        backgroundColor: "#ffffff",
        padding: "110px 24px",
        borderBottom: "1px solid #f0f0f0",
        position: "relative"
      }}
    >
      <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
        {/* Eyebrow Pill */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "5px 14px",
              borderRadius: "20px",
              backgroundColor: "#f4f4f5",
              border: "1px solid #e4e4e7",
              fontSize: "11.5px",
              fontWeight: 700,
              color: "#0f0f11",
              letterSpacing: "0.08em",
              textTransform: "uppercase"
            }}
          >
            <span>✦ THE ADVANTAGE</span>
          </div>
        </div>

        {/* Section Heading */}
        <h2
          style={{
            fontFamily: "'Switzer', 'Inter', sans-serif",
            fontSize: "clamp(32px, 4.4vw, 50px)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "#0f0f11",
            textAlign: "center",
            margin: "0 auto 16px auto",
            maxWidth: "760px"
          }}
        >
          Growth Works Better When Everything Connects.
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "clamp(15px, 1.6vw, 16.5px)",
            lineHeight: 1.6,
            color: "#52525b",
            textAlign: "center",
            margin: "0 auto 64px auto",
            maxWidth: "680px"
          }}
        >
          Give every part of your growth process a clear role, from how your business is positioned to how interested prospects enter your acquisition process.
        </p>

        {/* 6 Grid Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px"
          }}
        >
          {benefits.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e4e4e7",
                borderRadius: "12px",
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.03)",
                transition: "all 0.2s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#0f0f11";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#e4e4e7";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(241, 96, 1, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
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
                  color: "#0f0f11",
                  margin: 0
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: "14.5px",
                  lineHeight: 1.55,
                  color: "#52525b",
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
  <section style={{ backgroundColor: '#ffffff', padding: '100px 0', borderBottom: '1px solid #f0f0f0', overflow: 'hidden' }}>
    <div className="mobile-container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>

      {/* Client Story Eyebrow Pill */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '5px 14px',
            borderRadius: '20px',
            backgroundColor: '#f4f4f5',
            border: '1px solid #e4e4e7',
            fontSize: '11.5px',
            fontWeight: 700,
            color: '#0f0f11',
            letterSpacing: '0.08em',
            textTransform: 'uppercase'
          }}
        >
          <span>✦ CLIENT STORY</span>
        </div>
      </div>

      {/* Editorial Pull-Quote Block */}
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        <blockquote style={{
          fontSize: 'clamp(22px, 3.8vw, 42px)',
          fontWeight: 400,
          lineHeight: 1.25,
          letterSpacing: '-0.03em',
          color: '#0f0f11',
          margin: '0 0 32px 0',
          textAlign: 'center'
        }}>
          "From starting with zero to becoming impossible to ignore. Within one month, our following grew to 30,000 with 1.9M+ views, and we began receiving consistent, qualified enquiries far beyond our network."
        </blockquote>

        {/* Quiet Inline Avatar + Attribution Line */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', textAlign: 'center' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundImage: 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80")',
            backgroundSize: 'cover',
            filter: 'grayscale(100%)',
            border: '1px solid #222222',
            flexShrink: 0
          }}></div>
          <div>
            <div style={{ fontSize: '15px', fontWeight: 500, color: '#0f0f11', lineHeight: 1.2 }}>B2B Founder</div>
            <div style={{ fontSize: '14px', color: '#71717a', marginTop: '4px' }}>Client Story · 30,000 Followers & 1.9M+ Views</div>
          </div>
        </div>
      </div>

    </div>
  </section>
);

// 6. Built to Scale (Pricing Section - Clean, No Pricing Numbers, No Development Box, No Black Border on Popular)
const ThreeWaysToWorkSection = ({ onAssessmentClick }) => {
  return (
    <section id="pricing" style={{
      backgroundColor: '#ffffff',
      padding: '120px 24px',
      borderBottom: '1px solid #f0f0f0'
    }}>
      <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
        
        {/* Top Header Grid: Left Title + Right Description */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '24px',
          marginBottom: '56px'
        }}>
          <div>
            {/* Technical Eyebrow Pill */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '4px 12px',
              borderRadius: '4px',
              backgroundColor: '#f4f4f5',
              border: '1px solid #e4e4e7',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              color: '#0f0f11',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              <span style={{ letterSpacing: '-1px', color: '#71717a', fontSize: '11px', fontWeight: 900 }}>|||||||</span>
              <span>ENGAGEMENT OPTIONS</span>
            </div>

            <h2 style={{
              fontFamily: "'Switzer', 'Inter', sans-serif",
              fontSize: 'clamp(36px, 4.5vw, 56px)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.035em',
              color: '#0f0f11',
              margin: 0
            }}>
              Built Around Your Growth.
            </h2>
          </div>

          <p style={{
            fontSize: '14.5px',
            color: '#52525b',
            lineHeight: 1.5,
            maxWidth: '420px',
            margin: 0
          }}>
            Clear engagement structures. Defined scope. A connected approach to building your growth infrastructure.
          </p>
        </div>

        {/* 3-Box Technical Grid Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          alignItems: 'stretch'
        }}>

          {/* Card 1: CORE */}
          <div style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e4e4e7',
            borderRadius: '6px',
            padding: '38px 30px',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.03)',
            transition: 'all 0.2s ease'
          }}>
            {/* Technical Corner Brackets */}
            <div style={{ position: 'absolute', top: 8, left: 8, width: 8, height: 8, borderTop: '1.5px solid #a1a1aa', borderLeft: '1.5px solid #a1a1aa', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: 8, right: 8, width: 8, height: 8, borderTop: '1.5px solid #a1a1aa', borderRight: '1.5px solid #a1a1aa', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: 8, left: 8, width: 8, height: 8, borderBottom: '1.5px solid #a1a1aa', borderLeft: '1.5px solid #a1a1aa', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: 8, right: 8, width: 8, height: 8, borderBottom: '1.5px solid #a1a1aa', borderRight: '1.5px solid #a1a1aa', pointerEvents: 'none' }} />

            <div style={{ marginBottom: '28px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', color: '#71717a', textTransform: 'uppercase', marginBottom: '6px' }}>
                Growth Foundation
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#0f0f11', margin: '0 0 10px 0', letterSpacing: '-0.02em' }}>
                CORE
              </h3>
              <p style={{ fontSize: '13.5px', color: '#52525b', lineHeight: 1.5, margin: 0 }}>
                Establish the essential foundations connecting your online presence to prospect enquiries.
              </p>
            </div>

            {/* Scope Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '4px 10px',
              borderRadius: '4px',
              backgroundColor: '#f4f4f5',
              border: '1px solid #e4e4e7',
              fontSize: '11px',
              fontWeight: 600,
              color: '#27272a',
              marginBottom: '28px',
              width: 'fit-content'
            }}>
              Scoped to requirements
            </div>

            {/* What's included Checklist with (+) icons */}
            <div style={{ flex: 1, marginBottom: '36px' }}>
              <div style={{ fontSize: '12px', color: '#0f0f11', marginBottom: '16px', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                What's included
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
                {[
                  "Content and acquisition funnel review",
                  "Instagram profile optimisation",
                  "Foundational keyword based DM automations",
                  "Prospect capture workflows",
                  "Resource delivery setup"
                ].map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: '#27272a' }}>
                    <div style={{
                      width: '15px',
                      height: '15px',
                      borderRadius: '50%',
                      border: '1px solid #71717a',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}>
                      <Plus size={10} color="#0f0f11" strokeWidth={2.5} />
                    </div>
                    <span style={{ lineHeight: 1.4 }}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Explore Core Button */}
            <button
              onClick={onAssessmentClick}
              style={{
                width: '100%',
                height: '42px',
                backgroundColor: '#000000',
                color: '#ffffff',
                border: '1px solid #000000',
                borderRadius: '4px',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.12)'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#27272a'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#000000'; }}
            >
              Explore Core
            </button>
          </div>

          {/* Card 2: GROWTH (FLAGSHIP ENGAGEMENT) */}
          <div style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e4e4e7',
            borderRadius: '6px',
            padding: '38px 30px',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            boxShadow: '0 6px 28px rgba(0, 0, 0, 0.05)',
            transition: 'all 0.2s ease'
          }}>
            {/* Technical Corner Brackets */}
            <div style={{ position: 'absolute', top: 8, left: 8, width: 8, height: 8, borderTop: '1.5px solid #a1a1aa', borderLeft: '1.5px solid #a1a1aa', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: 8, right: 8, width: 8, height: 8, borderTop: '1.5px solid #a1a1aa', borderRight: '1.5px solid #a1a1aa', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: 8, left: 8, width: 8, height: 8, borderBottom: '1.5px solid #a1a1aa', borderLeft: '1.5px solid #a1a1aa', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: 8, right: 8, width: 8, height: 8, borderBottom: '1.5px solid #a1a1aa', borderRight: '1.5px solid #a1a1aa', pointerEvents: 'none' }} />

            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '28px' }}>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', color: '#71717a', textTransform: 'uppercase', marginBottom: '6px' }}>
                  Authority Growth System
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#0f0f11', margin: '0 0 10px 0', letterSpacing: '-0.02em' }}>
                  GROWTH
                </h3>
                <p style={{ fontSize: '13.5px', color: '#52525b', lineHeight: 1.5, margin: 0 }}>
                  The complete ASENZO engagement connecting positioning, demand gen, content, and acquisition infrastructure.
                </p>
              </div>
              {/* Flagship Badge */}
              <div style={{
                border: '1px solid #e4e4e7',
                padding: '4px 8px',
                fontSize: '9.5px',
                fontWeight: 800,
                letterSpacing: '0.08em',
                color: '#0f0f11',
                textTransform: 'uppercase',
                borderRadius: '3px',
                backgroundColor: '#f4f4f5',
                whiteSpace: 'nowrap'
              }}>
                FLAGSHIP
              </div>
            </div>

            {/* Scope Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '4px 10px',
              borderRadius: '4px',
              backgroundColor: '#f4f4f5',
              border: '1px solid #e4e4e7',
              fontSize: '11px',
              fontWeight: 600,
              color: '#27272a',
              marginBottom: '28px',
              width: 'fit-content'
            }}>
              90 Day Build and Operate
            </div>

            {/* What's included Checklist with (+) icons */}
            <div style={{ flex: 1, marginBottom: '36px' }}>
              <div style={{ fontSize: '12px', color: '#0f0f11', marginBottom: '16px', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                What's included
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
                {[
                  "Market positioning and buyer messaging",
                  "15 researched & scripted videos monthly",
                  "15 professionally edited videos monthly",
                  "Multi-platform publishing (IG, FB, YT Shorts)",
                  "Eight educational PDF resources & Story sequences",
                  "Four prospect entry routes & keyword capture",
                  "Public VSL & qualification application page",
                  "Centralised CRM & booking diagnostics",
                  "Acquisition tracking & monthly performance review"
                ].map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: '#27272a' }}>
                    <div style={{
                      width: '15px',
                      height: '15px',
                      borderRadius: '50%',
                      border: '1px solid #71717a',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}>
                      <Plus size={10} color="#0f0f11" strokeWidth={2.5} />
                    </div>
                    <span style={{ lineHeight: 1.4 }}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Explore Growth Button */}
            <button
              onClick={onAssessmentClick}
              style={{
                width: '100%',
                height: '42px',
                backgroundColor: '#000000',
                color: '#ffffff',
                border: '1px solid #000000',
                borderRadius: '4px',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.12)'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#27272a'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#000000'; }}
            >
              Explore Growth
            </button>
          </div>

          {/* Card 3: CUSTOM */}
          <div style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e4e4e7',
            borderRadius: '6px',
            padding: '38px 30px',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.03)',
            transition: 'all 0.2s ease'
          }}>
            {/* Technical Corner Brackets */}
            <div style={{ position: 'absolute', top: 8, left: 8, width: 8, height: 8, borderTop: '1.5px solid #a1a1aa', borderLeft: '1.5px solid #a1a1aa', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: 8, right: 8, width: 8, height: 8, borderTop: '1.5px solid #a1a1aa', borderRight: '1.5px solid #a1a1aa', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: 8, left: 8, width: 8, height: 8, borderBottom: '1.5px solid #a1a1aa', borderLeft: '1.5px solid #a1a1aa', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: 8, right: 8, width: 8, height: 8, borderBottom: '1.5px solid #a1a1aa', borderRight: '1.5px solid #a1a1aa', pointerEvents: 'none' }} />

            <div style={{ marginBottom: '28px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', color: '#71717a', textTransform: 'uppercase', marginBottom: '6px' }}>
                Custom Infrastructure
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#0f0f11', margin: '0 0 10px 0', letterSpacing: '-0.02em' }}>
                CUSTOM
              </h3>
              <p style={{ fontSize: '13.5px', color: '#52525b', lineHeight: 1.5, margin: 0 }}>
                Specialised growth and operational systems developed around individual business requirements.
              </p>
            </div>

            {/* Scope Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '4px 10px',
              borderRadius: '4px',
              backgroundColor: '#f4f4f5',
              border: '1px solid #e4e4e7',
              fontSize: '11px',
              fontWeight: 600,
              color: '#27272a',
              marginBottom: '28px',
              width: 'fit-content'
            }}>
              Custom Scope
            </div>

            {/* What's included Checklist with (+) icons */}
            <div style={{ flex: 1, marginBottom: '36px' }}>
              <div style={{ fontSize: '12px', color: '#0f0f11', marginBottom: '16px', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                What's included
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
                {[
                  "Custom CRM architecture",
                  "Advanced operational workflows",
                  "Internal business tools",
                  "Custom integrations",
                  "Bespoke data and reporting systems",
                  "Tailored automation infrastructure"
                ].map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: '#27272a' }}>
                    <div style={{
                      width: '15px',
                      height: '15px',
                      borderRadius: '50%',
                      border: '1px solid #71717a',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}>
                      <Plus size={10} color="#0f0f11" strokeWidth={2.5} />
                    </div>
                    <span style={{ lineHeight: 1.4 }}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Discuss a Custom Project Button */}
            <button
              onClick={onAssessmentClick}
              style={{
                width: '100%',
                height: '42px',
                backgroundColor: '#000000',
                color: '#ffffff',
                border: '1px solid #000000',
                borderRadius: '4px',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.12)'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#27272a'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#000000'; }}
            >
              Discuss a Custom Project
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

// 7. Live In 30 Days Timeline (Matching Pricing Section Grid & Technical Style)
const LiveIn30DaysTimeline = ({ onAssessmentClick }) => (
  <section id="timeline" style={{ backgroundColor: '#ffffff', padding: '120px 24px', borderBottom: '1px solid #f0f0f0' }}>
    <div style={{ maxWidth: '1140px', margin: '0 auto' }}>

      {/* Header Grid */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        gap: '32px',
        marginBottom: '64px'
      }}>
        <div>
          {/* Eyebrow Pill */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '4px 12px',
            borderRadius: '4px',
            backgroundColor: '#f4f4f5',
            border: '1px solid #e4e4e7',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            color: '#0f0f11',
            textTransform: 'uppercase',
            marginBottom: '16px'
          }}>
            <span style={{ letterSpacing: '-1px', color: '#71717a', fontSize: '11px', fontWeight: 900 }}>|||||||</span>
            <span>IMPLEMENTATION</span>
          </div>

          <h2 style={{
            fontFamily: "'Switzer', 'Inter', sans-serif",
            fontSize: 'clamp(36px, 4.5vw, 56px)',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-0.035em',
            color: '#0f0f11',
            margin: 0
          }}>
            From Strategy to a<br />
            Connected Growth System.
          </h2>
        </div>

        <p style={{
          fontSize: '14.5px',
          color: '#52525b',
          lineHeight: 1.55,
          maxWidth: '400px',
          margin: 0
        }}>
          A structured 90 day implementation that establishes your foundation, builds the infrastructure, and improves its operation.
        </p>
      </div>

      {/* 3 Step Timeline Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '24px',
        alignItems: 'stretch',
        marginBottom: '28px'
      }}>

        {/* Step 1: DAYS 01 TO 15 */}
        <div style={{
          backgroundColor: '#ffffff',
          border: '1px solid #e4e4e7',
          borderRadius: '6px',
          padding: '36px 30px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: '260px',
          position: 'relative',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.03)',
          transition: 'all 0.2s ease'
        }}>
          {/* Technical Corner Brackets */}
          <div style={{ position: 'absolute', top: 8, left: 8, width: 8, height: 8, borderTop: '1.5px solid #a1a1aa', borderLeft: '1.5px solid #a1a1aa', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: 8, right: 8, width: 8, height: 8, borderTop: '1.5px solid #a1a1aa', borderRight: '1.5px solid #a1a1aa', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: 8, left: 8, width: 8, height: 8, borderBottom: '1.5px solid #a1a1aa', borderLeft: '1.5px solid #a1a1aa', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: 8, right: 8, width: 8, height: 8, borderBottom: '1.5px solid #a1a1aa', borderRight: '1.5px solid #a1a1aa', pointerEvents: 'none' }} />

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
              <div style={{
                border: '1px solid #e4e4e7',
                padding: '3px 10px',
                fontSize: '10.5px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: '#0f0f11',
                textTransform: 'uppercase',
                borderRadius: '3px',
                backgroundColor: '#f4f4f5'
              }}>
                DAYS 01 TO 15
              </div>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="none">
                <path d="M12 2L2 7.5L12 13L22 7.5L12 2Z" fill="#18181b" />
                <path d="M2 7.5V16.5L12 22V13L2 7.5Z" fill="#71717a" />
                <path d="M22 7.5V16.5L12 22V13L22 7.5Z" fill="#a1a1aa" />
              </svg>
            </div>

            <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f0f11', marginBottom: '12px', letterSpacing: '-0.02em' }}>
              Strategy and Foundation
            </h3>
            <p style={{ fontSize: '13.5px', color: '#52525b', lineHeight: 1.55, margin: '0 0 20px 0' }}>
              We understand your business, offer, audience, and existing acquisition process. We establish your positioning, messaging, audience strategy, content direction, and Instagram profile foundations.
            </p>
          </div>

          <div style={{
            padding: '10px 14px',
            backgroundColor: '#fafafa',
            border: '1px solid #e4e4e7',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: 600,
            color: '#27272a'
          }}>
            <span style={{ color: '#71717a', fontSize: '11px', textTransform: 'uppercase', display: 'block', marginBottom: '2px', fontWeight: 700 }}>Milestone</span>
            Strategic foundation completed and approved.
          </div>
        </div>

        {/* Step 2: DAYS 15 TO 60 */}
        <div style={{
          backgroundColor: '#ffffff',
          border: '1px solid #e4e4e7',
          borderRadius: '6px',
          padding: '36px 30px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: '260px',
          position: 'relative',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.03)',
          transition: 'all 0.2s ease'
        }}>
          {/* Technical Corner Brackets */}
          <div style={{ position: 'absolute', top: 8, left: 8, width: 8, height: 8, borderTop: '1.5px solid #a1a1aa', borderLeft: '1.5px solid #a1a1aa', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: 8, right: 8, width: 8, height: 8, borderTop: '1.5px solid #a1a1aa', borderRight: '1.5px solid #a1a1aa', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: 8, left: 8, width: 8, height: 8, borderBottom: '1.5px solid #a1a1aa', borderLeft: '1.5px solid #a1a1aa', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: 8, right: 8, width: 8, height: 8, borderBottom: '1.5px solid #a1a1aa', borderRight: '1.5px solid #a1a1aa', pointerEvents: 'none' }} />

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
              <div style={{
                border: '1px solid #e4e4e7',
                padding: '3px 10px',
                fontSize: '10.5px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: '#0f0f11',
                textTransform: 'uppercase',
                borderRadius: '3px',
                backgroundColor: '#f4f4f5'
              }}>
                DAYS 15 TO 60
              </div>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="none">
                <path d="M12 2C12 2 8 6.5 8 13C8 17.5 10.5 20 12 20C13.5 20 16 17.5 16 13C16 6.5 12 2 12 2Z" fill="#18181b" />
                <path d="M8 13C6.5 14.5 4 15 4 15L7.5 18L8 15Z" fill="#71717a" />
                <path d="M16 13C17.5 14.5 20 15 20 15L16.5 18L16 15Z" fill="#71717a" />
                <path d="M10.5 20L12 23L13.5 20H10.5Z" fill="#a1a1aa" />
              </svg>
            </div>

            <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f0f11', marginBottom: '12px', letterSpacing: '-0.02em' }}>
              Build and Implementation
            </h3>
            <p style={{ fontSize: '13.5px', color: '#52525b', lineHeight: 1.55, margin: '0 0 20px 0' }}>
              We develop the content operation and install the central CRM, prospect capture, resource delivery, applications, VSL, booking, and preparation workflows.
            </p>
          </div>

          <div style={{
            padding: '10px 14px',
            backgroundColor: '#fafafa',
            border: '1px solid #e4e4e7',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: 600,
            color: '#27272a'
          }}>
            <span style={{ color: '#71717a', fontSize: '11px', textTransform: 'uppercase', display: 'block', marginBottom: '2px', fontWeight: 700 }}>Milestone</span>
            Core acquisition path by day 30. Full trust layer by day 60.
          </div>
        </div>

        {/* Step 3: DAYS 60 TO 90 */}
        <div style={{
          backgroundColor: '#ffffff',
          border: '1px solid #e4e4e7',
          borderRadius: '6px',
          padding: '36px 30px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: '260px',
          position: 'relative',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.03)',
          transition: 'all 0.2s ease'
        }}>
          {/* Technical Corner Brackets */}
          <div style={{ position: 'absolute', top: 8, left: 8, width: 8, height: 8, borderTop: '1.5px solid #a1a1aa', borderLeft: '1.5px solid #a1a1aa', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: 8, right: 8, width: 8, height: 8, borderTop: '1.5px solid #a1a1aa', borderRight: '1.5px solid #a1a1aa', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: 8, left: 8, width: 8, height: 8, borderBottom: '1.5px solid #a1a1aa', borderLeft: '1.5px solid #a1a1aa', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: 8, right: 8, width: 8, height: 8, borderBottom: '1.5px solid #a1a1aa', borderRight: '1.5px solid #a1a1aa', pointerEvents: 'none' }} />

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
              <div style={{
                border: '1px solid #e4e4e7',
                padding: '3px 10px',
                fontSize: '10.5px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: '#0f0f11',
                textTransform: 'uppercase',
                borderRadius: '3px',
                backgroundColor: '#f4f4f5'
              }}>
                DAYS 60 TO 90
              </div>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="none">
                <rect x="2" y="16" width="4" height="6" fill="#d4d4d8" />
                <rect x="8" y="11" width="4" height="11" fill="#a1a1aa" />
                <rect x="14" y="6" width="4" height="16" fill="#71717a" />
                <rect x="20" y="2" width="4" height="20" fill="#18181b" />
              </svg>
            </div>

            <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f0f11', marginBottom: '12px', letterSpacing: '-0.02em' }}>
              Operation and Optimisation
            </h3>
            <p style={{ fontSize: '13.5px', color: '#52525b', lineHeight: 1.55, margin: '0 0 20px 0' }}>
              We continue content production, monitor performance, review acquisition activity, identify bottlenecks, and improve relevant workflows.
            </p>
          </div>

          <div style={{
            padding: '10px 14px',
            backgroundColor: '#fafafa',
            border: '1px solid #e4e4e7',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: 600,
            color: '#27272a'
          }}>
            <span style={{ color: '#71717a', fontSize: '11px', textTransform: 'uppercase', display: 'block', marginBottom: '2px', fontWeight: 700 }}>Milestone</span>
            Performance review and complete handover documentation.
          </div>
        </div>

      </div>

      {/* After the Initial Engagement Banner */}
      <div style={{
        backgroundColor: '#fafafa',
        border: '1px solid #e4e4e7',
        borderRadius: '6px',
        padding: '28px 30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '24px',
        marginBottom: '40px',
        position: 'relative',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)'
      }}>
        {/* Technical Corner Brackets */}
        <div style={{ position: 'absolute', top: 8, left: 8, width: 8, height: 8, borderTop: '1.5px solid #a1a1aa', borderLeft: '1.5px solid #a1a1aa', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 8, right: 8, width: 8, height: 8, borderTop: '1.5px solid #a1a1aa', borderRight: '1.5px solid #a1a1aa', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: 8, left: 8, width: 8, height: 8, borderBottom: '1.5px solid #a1a1aa', borderLeft: '1.5px solid #a1a1aa', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: 8, right: 8, width: 8, height: 8, borderBottom: '1.5px solid #a1a1aa', borderRight: '1.5px solid #a1a1aa', pointerEvents: 'none' }} />

        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '10px', letterSpacing: '0.12em', color: '#71717a', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>
            AFTER THE INITIAL ENGAGEMENT
          </div>
          <div style={{ fontSize: '16px', fontWeight: 700, color: '#0f0f11', marginBottom: '6px' }}>
            Continue With ASENZO
          </div>
          <p style={{ fontSize: '14px', color: '#52525b', lineHeight: 1.55, margin: 0 }}>
            Continue with ASENZO for recurring content operation, monitoring, reporting, and optimisation. Or take the handover and operate the infrastructure with your team. Your decision. No automatic renewal.
          </p>
        </div>
        <div style={{ flexShrink: 0, opacity: 0.8 }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#71717a" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
            <circle cx="12" cy="12" r="3" fill="#71717a" stroke="none"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        </div>
      </div>

      {/* CTA Button & Defined Milestones */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <button onClick={onAssessmentClick} style={{
          height: '46px',
          backgroundColor: '#000000',
          color: '#ffffff',
          border: 'none',
          borderRadius: '4px',
          padding: '0 28px',
          fontSize: '13.5px',
          fontWeight: 600,
          cursor: 'pointer',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
          transition: 'background-color 0.2s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#27272a'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#000000'}
        >
          Book a Growth Infrastructure Review
        </button>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '11px', color: '#52525b', marginTop: '16px', fontWeight: 700, letterSpacing: '0.05em' }}>
          <span>✓ DEFINED DELIVERY COMMITMENTS</span>
          <span>✓ CLEAR IMPLEMENTATION MILESTONES</span>
          <span>✓ 90 DAY ENGAGEMENT</span>
        </div>
      </div>

    </div>
  </section>
);

const GuaranteeBanner = ({ onAssessmentClick }) => (
  <section style={{
    backgroundColor: '#ffffff',
    padding: '120px 24px',
    borderBottom: '1px solid #f0f0f0',
    display: 'flex',
    justifyContent: 'center'
  }}>
    <div style={{ maxWidth: '1000px', width: '100%', textAlign: 'center' }}>
      
      {/* Grey/black shield icon container from previous */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '16px',
          backgroundColor: '#f4f4f5',
          border: '1px solid #e4e4e7',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            <path d="m9 12 2 2 4-4"></path>
          </svg>
        </div>
      </div>

      <h2 style={{
        fontSize: 'clamp(36px, 5vw, 60px)',
        fontWeight: 700,
        color: '#0f0f11',
        lineHeight: 1.08,
        marginBottom: '24px',
        letterSpacing: '-0.035em'
      }}>
        We Stand Behind the Infrastructure We Build.
      </h2>

      <p style={{
        fontSize: '16px',
        color: '#52525b',
        maxWidth: '740px',
        margin: '0 auto 48px auto',
        lineHeight: 1.6
      }}>
        Your engagement has defined delivery milestones and clear responsibilities.
      </p>

      {/* 3 Reference-Styled Boxes (Horizontal Layout) */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px',
        textAlign: 'left',
        marginBottom: '44px'
      }}>
        {/* Card 1: CORE DELIVERY */}
        <div style={{
          backgroundColor: '#ffffff',
          border: '1px solid #e5e7eb',
          borderRadius: '16px',
          padding: '28px 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)',
          transition: 'all 0.2s ease'
        }}>
          <Zap size={22} color="#0f0f11" strokeWidth={1.8} />
          <h3 style={{
            fontFamily: "'Switzer', 'Inter', sans-serif",
            fontSize: '18px',
            fontWeight: 700,
            color: '#0f0f11',
            letterSpacing: '-0.015em',
            margin: '16px 0 8px 0'
          }}>
            CORE DELIVERY
          </h3>
          <p style={{
            fontSize: '14.5px',
            color: '#52525b',
            lineHeight: 1.55,
            margin: 0
          }}>
            The agreed core acquisition path and first 15 videos are targeted for day 30.
          </p>
        </div>

        {/* Card 2: FULL INFRASTRUCTURE */}
        <div style={{
          backgroundColor: '#ffffff',
          border: '1px solid #e5e7eb',
          borderRadius: '16px',
          padding: '28px 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)',
          transition: 'all 0.2s ease'
        }}>
          <Rocket size={22} color="#0f0f11" strokeWidth={1.8} />
          <h3 style={{
            fontFamily: "'Switzer', 'Inter', sans-serif",
            fontSize: '18px',
            fontWeight: 700,
            color: '#0f0f11',
            letterSpacing: '-0.015em',
            margin: '16px 0 8px 0'
          }}>
            FULL INFRASTRUCTURE
          </h3>
          <p style={{
            fontSize: '14.5px',
            color: '#52525b',
            lineHeight: 1.55,
            margin: 0
          }}>
            The full agreed trust layer is targeted for day 60.
          </p>
        </div>

        {/* Card 3: PERFORMANCE REVIEW */}
        <div style={{
          backgroundColor: '#ffffff',
          border: '1px solid #e5e7eb',
          borderRadius: '16px',
          padding: '28px 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)',
          transition: 'all 0.2s ease'
        }}>
          <Clock size={22} color="#0f0f11" strokeWidth={1.8} />
          <h3 style={{
            fontFamily: "'Switzer', 'Inter', sans-serif",
            fontSize: '18px',
            fontWeight: 700,
            color: '#0f0f11',
            letterSpacing: '-0.015em',
            margin: '16px 0 8px 0'
          }}>
            PERFORMANCE REVIEW
          </h3>
          <p style={{
            fontSize: '14.5px',
            color: '#52525b',
            lineHeight: 1.55,
            margin: 0
          }}>
            Your starting organic performance and day 90 results are reviewed using the agreed measurement method.
          </p>
        </div>
      </div>

      {/* Closing Commitment Statement */}
      <p style={{
        fontSize: '15px',
        color: '#52525b',
        maxWidth: '740px',
        margin: '0 auto 40px auto',
        lineHeight: 1.6
      }}>
        If an agreed workflow is non functional because of our delivery, we fix it without an additional service fee. Applicable refund conditions, responsibilities, and measurement definitions are documented in the signed agreement. We commit to our delivery.
      </p>

      {/* Previous Black Button & Trust Badges */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <button onClick={onAssessmentClick} style={{
          backgroundColor: '#000000',
          color: '#ffffff',
          border: 'none',
          borderRadius: '8px',
          padding: '0 34px',
          height: '50px',
          fontSize: '14px',
          fontWeight: 600,
          cursor: 'pointer',
          boxShadow: '0 4px 18px rgba(0, 0, 0, 0.15)',
          transition: 'background-color 0.2s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#27272a'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#000000'}
        >
          Book a Growth Infrastructure Review
        </button>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px', fontSize: '11px', color: '#52525b', fontWeight: 600, letterSpacing: '0.05em' }}>
          <span>✓ DEFINED DELIVERY COMMITMENTS</span>
          <span>✓ CLEAR IMPLEMENTATION MILESTONES</span>
          <span>✓ 90 DAY ENGAGEMENT</span>
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
      q: "What exactly does ASENZO do?",
      a: "ASENZO designs, builds, and operates growth infrastructure connecting market positioning, content production, prospect capture, CRM, and booking workflows."
    },
    {
      num: "02",
      q: "Who is this for?",
      a: "The Authority Growth System is designed for businesses with established expertise and an offer that want their positioning, content, and acquisition process to work together. Fit is established during the booking process."
    },
    {
      num: "03",
      q: "How long does implementation take?",
      a: "The core acquisition path is targeted for day 30. The full trust infrastructure is targeted for day 60. The initial engagement continues through day 90 for operation and optimisation."
    },
    {
      num: "04",
      q: "What do you need from us?",
      a: "We need business information, account access, recordings, timely approvals, and a designated person to handle incoming enquiries and sales conversations."
    },
    {
      num: "05",
      q: "What if something does not work?",
      a: "If an agreed workflow is non functional because of our delivery, we fix it without an additional service fee. Applicable refund provisions are documented in your signed agreement."
    }
  ];

  return (
    <section id="faq" style={{ backgroundColor: '#ffffff', padding: '120px 24px', borderBottom: '1px solid #f0f0f0' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Eyebrow Pill */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '4px 14px',
              borderRadius: '20px',
              backgroundColor: '#f4f4f5',
              border: '1px solid #e4e4e7',
              fontSize: '11.5px',
              fontWeight: 700,
              color: '#0f0f11',
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }}
          >
            <span>✦ FREQUENTLY ASKED QUESTIONS</span>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: '#0f0f11', marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Clear Answers. Before We Begin.
          </h2>
          <p style={{ fontSize: '16px', color: '#52525b' }}>
            Everything you need to understand about working with ASENZO.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={faq.num}
                style={{
                  borderBottom: '1px solid #e4e4e7',
                  padding: '28px 0',
                  cursor: 'pointer'
                }}
                onClick={() => setOpenIdx(isOpen ? null : i)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                    <span style={{ fontSize: '13px', color: '#F16001', fontFamily: 'monospace', fontWeight: 700 }}>{faq.num}</span>
                    <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#0f0f11', margin: 0 }}>{faq.q}</h3>
                  </div>
                  <div style={{ color: '#0f0f11' }}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </div>

                {isOpen && (
                  <div style={{ paddingTop: '16px', paddingLeft: '44px', paddingRight: '24px' }}>
                    <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#52525b', margin: 0 }}>
                      {faq.a}
                    </p>
                  </div>
                )}
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

  React.useEffect(() => {
    let animationFrame;
    const handleScroll = () => {
      animationFrame = requestAnimationFrame(() => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();

        // Pinning scroll trigger logic:
        // When section reaches viewport top (rect.top <= 0), it locks in place.
        // Over the 300vh height, progress maps from 0 to 1.
        if (rect.top <= 0) {
          const maxScroll = rect.height - window.innerHeight;
          let progress = -rect.top / maxScroll;
          progress = Math.min(Math.max(progress, 0), 1);
          setScrollProgress(progress);
        } else if (rect.top > 0) {
          setScrollProgress(0);
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
    <section
      ref={containerRef}
      style={{
        backgroundColor: '#ffffff',
        height: '300vh', // 300vh scroll height for smooth, locked scroll stop animation!
        position: 'relative',
        zIndex: 200
      }}
    >
      {/* Sticky container: Locks cleanly at viewport top while user scrolls through the 300vh distance */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingTop: '80px',
          zIndex: 1,
          overflow: 'hidden'
        }}
      >
        {/* Soft Warm Radial Aura behind the envelope */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 50% 55%, rgba(255, 110, 0, 0.14) 0%, rgba(255, 255, 255, 0) 65%)',
            zIndex: 0
          }}
        />

        <div
          style={{
            width: '100%',
            maxWidth: '640px',
            position: 'relative',
            height: '620px',
            clipPath: 'inset(-1000px -100px 0px -100px)',
            zIndex: 1
          }}
        >
          {/* Top Flap (Behind the card) */}
          <svg style={{ position: 'absolute', bottom: '378px', left: 0, right: 0, zIndex: 1 }} width="100%" height="240" viewBox="0 0 640 240" preserveAspectRatio="none">
            <defs>
              <linearGradient id="topFlapGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="rgba(255, 69, 0, 0.18)" />
                <stop offset="100%" stopColor="#18181b" />
              </linearGradient>
            </defs>
            <polygon points="320,0 0,240 640,240" fill="url(#topFlapGrad)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          </svg>

          {/* Envelope Back Base */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '380px',
              backgroundColor: '#111113',
              borderRadius: '6px',
              zIndex: 1
            }}
          />

          {/* The Glowing Card:
              - First 40% of scroll: Smoothly pulls up by 160px
              - Remaining 60% of scroll: Completely FROZEN & LOCKED ("scroll stop dwell time")
          */}
          <div
            style={{
              position: 'absolute',
              bottom: '-40px',
              left: '32px',
              right: '32px',
              height: '380px',
              backgroundColor: '#D83300',
              borderRadius: '12px',
              padding: '60px 32px 32px 32px',
              boxShadow: '0 -20px 60px rgba(255, 69, 0, 0.45)',
              transform: `translateY(${0 - (Math.min(scrollProgress * 2.5, 1) * 160)}px)`,
              transition: 'transform 0.05s linear',
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
              borderTop: '1px solid rgba(255,200,150,0.5)',
              borderLeft: '1px solid rgba(255,100,50,0.2)',
              borderRight: '1px solid rgba(255,100,50,0.2)'
            }}
          >
            {/* Accent corners */}
            <div style={{ position: 'absolute', top: '24px', left: '24px', width: '12px', height: '12px', borderTop: '2px solid rgba(255,255,255,0.5)', borderLeft: '2px solid rgba(255,255,255,0.5)' }} />
            <div style={{ position: 'absolute', top: '24px', right: '24px', width: '12px', height: '12px', borderTop: '2px solid rgba(255,255,255,0.5)', borderRight: '2px solid rgba(255,255,255,0.5)' }} />

            <div style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF', marginBottom: '24px', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '22px', height: '22px', backgroundColor: '#FFF', borderRadius: '4px', color: '#CC2200', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 800 }}>✦</div>
              ASENZO
            </div>

            <h2
              style={{
                fontSize: 'clamp(22px, 3.2vw, 30px)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                color: '#FFFFFF',
                marginBottom: '14px',
                maxWidth: '480px',
                textAlign: 'center'
              }}
            >
              The Infrastructure Behind Business Growth.
            </h2>

            <p
              style={{
                fontSize: '13.5px',
                color: 'rgba(255,255,255,0.95)',
                marginBottom: '28px',
                lineHeight: 1.5,
                fontWeight: 400,
                maxWidth: '420px',
                textAlign: 'center'
              }}
            >
              We design, build, and operate the systems connecting market positioning, demand generation, and customer acquisition.
            </p>

            <button
              onClick={onAssessmentClick}
              style={{
                height: '46px',
                backgroundColor: '#FFFFFF',
                color: '#000000',
                border: 'none',
                borderRadius: '6px',
                padding: '0 28px',
                fontSize: '13.5px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s',
                pointerEvents: 'auto',
                boxShadow: '0 4px 14px rgba(0,0,0,0.15)'
              }}
              onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#E5E5E5'; }}
              onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#FFFFFF'; }}
            >
              Book a Growth Infrastructure Review
            </button>
          </div>

          {/* Envelope Front SVG */}
          <svg style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 3, pointerEvents: 'none' }} width="100%" height="380" viewBox="0 0 640 380" preserveAspectRatio="none">
            <defs>
              <filter id="envelopeShadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="-4" stdDeviation="6" floodColor="#000000" floodOpacity="0.4" />
              </filter>
            </defs>
            <polygon points="0,0 320,280 640,0 640,380 0,380" fill="#141416" stroke="rgba(255,255,255,0.06)" strokeWidth="1" filter="url(#envelopeShadow)" />
            <polygon points="0,380 320,280 640,380" fill="#1a1a1e" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </section>
  );
};

const CalendarBookingSection = ({ onAssessmentClick }) => {
  useEffect(() => {
    (function (C, A, L) {
      let p = function (a, ar) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    const calNamespace = import.meta.env.VITE_CAL_NAMESPACE || "brandgrowth-strategy-call";
    const calOrigin = import.meta.env.VITE_CAL_ORIGIN || "https://app.cal.com";
    const calLink = import.meta.env.VITE_CAL_LINK || "mmd-asenzo/brandgrowth-strategy-call";

    if (window.Cal) {
      window.Cal("init", calNamespace, { origin: calOrigin });
      window.Cal.config = window.Cal.config || {};
      window.Cal.config.forwardQueryParams = true;

      window.Cal.ns[calNamespace]("inline", {
        elementOrSelector: "#my-cal-inline-brandgrowth-strategy-call",
        config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
        calLink: calLink
      });

      window.Cal.ns[calNamespace]("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#000000" },
          dark: { "cal-brand": "#ffffff" }
        },
        hideEventTypeDetails: true,
        layout: "month_view"
      });
    }
  }, []);

  return (
    <section id="booking" style={{ backgroundColor: '#ffffff', padding: '120px 24px', borderBottom: '1px solid #f0f0f0' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '60px', alignItems: 'center' }}>
        
        {/* Left Column: Context & Proof */}
        <div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '4px 12px',
            borderRadius: '4px',
            backgroundColor: '#f4f4f5',
            border: '1px solid #e4e4e7',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            color: '#0f0f11',
            textTransform: 'uppercase',
            marginBottom: '24px'
          }}>
            <span style={{ color: '#0f0f11', fontSize: '11px' }}>✦</span>
            <span>PRIVATE ACCESS</span>
          </div>

          <h2 style={{ fontSize: 'clamp(36px, 4.5vw, 56px)', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-0.03em', color: '#0f0f11', marginBottom: '24px' }}>
            We Install It. You Grow. Live In 30 Days.
          </h2>

          <p style={{ fontSize: '17px', lineHeight: 1.6, color: '#52525b', marginBottom: '32px', maxWidth: '500px' }}>
            Schedule an executive onboarding review. We'll map your complete pipeline, diagnose conversion leaks, and design your bespoke operating system live on the call.
          </p>
        </div>

        {/* Right Column: Real Cal.com Inline Booking Container */}
        <div style={{
          backgroundColor: '#ffffff',
          border: '1px solid #e4e4e7',
          borderRadius: '16px',
          padding: '16px',
          boxShadow: '0 16px 48px rgba(0, 0, 0, 0.06)',
          minHeight: '620px',
          overflow: 'hidden'
        }}>
          <div style={{ width: '100%', height: '100%', minHeight: '580px', overflow: 'auto' }} id="my-cal-inline-brandgrowth-strategy-call"></div>
        </div>

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
        height: '40px',
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
  <footer style={{ backgroundColor: '#fafafa', borderTop: '1px solid #e4e4e7', paddingTop: '72px', paddingBottom: '32px', overflow: 'hidden', width: '100%' }}>
    <div style={{ width: '100%', maxWidth: '100%', padding: '0 clamp(24px, 5vw, 80px)', margin: '0 auto', boxSizing: 'border-box' }}>
      
      {/* Top Flex Container: Stretches across the full website width */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: '48px',
        marginBottom: '48px',
        width: '100%'
      }}>
        {/* Left Side: Brand & Connect Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '420px', flex: '1 1 320px' }}>
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
            <span style={{ fontSize: '17px', fontWeight: 700, letterSpacing: '-0.02em', color: '#0f0f11' }}>
              Have a cool idea?
            </span>
          </div>
          <p style={{ fontSize: '14px', color: '#71717a', lineHeight: 1.6, margin: 0 }}>
            We love talking with ambitious founders who are ready to take action. Whether you have a project in mind or just want to say hello.
          </p>
          <div style={{ fontSize: '12px', fontWeight: 600, color: '#0f0f11', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            Growth Infrastructure · Design. Build. Operate.
          </div>
          <div style={{ marginTop: '4px', width: 'fit-content' }}>
            <LetsConnectSwipeButton onClick={onAssessmentClick} />
          </div>
        </div>

        {/* Right Side: Columns stretched across to the right edge */}
        <div style={{
          display: 'flex',
          gap: 'clamp(40px, 8vw, 120px)',
          flexWrap: 'wrap',
          justifyContent: 'flex-end',
          flex: '2 1 480px'
        }}>
          {/* SOLUTIONS Column */}
          <div>
            <div style={{ fontSize: '11px', color: '#0f0f11', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>SOLUTIONS</div>
            <div style={{ fontSize: '13.5px', color: '#71717a', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="#pricing" style={{ color: 'inherit', textDecoration: 'none' }}>Core</a>
              <a href="#pricing" style={{ color: 'inherit', textDecoration: 'none' }}>Growth</a>
              <a href="#pricing" style={{ color: 'inherit', textDecoration: 'none' }}>Custom</a>
            </div>
          </div>

          {/* NAVIGATION Column */}
          <div>
            <div style={{ fontSize: '11px', color: '#0f0f11', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>NAVIGATION</div>
            <div style={{ fontSize: '13.5px', color: '#71717a', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="#features" style={{ color: 'inherit', textDecoration: 'none' }}>The System</a>
              <a href="#integrations" style={{ color: 'inherit', textDecoration: 'none' }}>Infrastructure</a>
              <a href="#pricing" style={{ color: 'inherit', textDecoration: 'none' }}>Engagements</a>
              <a href="#timeline" style={{ color: 'inherit', textDecoration: 'none' }}>Implementation</a>
              <a href="#faq" style={{ color: 'inherit', textDecoration: 'none' }}>FAQ</a>
            </div>
          </div>

          {/* SOCIAL Column */}
          <div>
            <div style={{ fontSize: '11px', color: '#0f0f11', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>SOCIAL</div>
            <div style={{ fontSize: '13.5px', color: '#71717a', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <span>Twitter</span>
              <span>LinkedIn</span>
              <span>Instagram</span>
            </div>
          </div>
        </div>
      </div>

      {/* Small Section: Bottom Bar stretched to full width */}
      <div
        style={{
          width: '100%',
          paddingTop: '28px',
          borderTop: '1px solid #e4e4e7',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '12.5px',
          color: '#71717a'
        }}
      >
        <div>
          <span>© {new Date().getFullYear()} Asenzo Inc. All rights reserved.</span>
        </div>
        <div style={{ display: 'flex', gap: '24px' }}>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Cookie Settings</a>
        </div>
      </div>
    </div>

    {/* Full-Width Giant Asenzo Watermark - Pure Grey Font with Soft Bottom Vertical Fade via CSS Mask */}
    <div style={{
      width: '100%',
      marginTop: '60px',
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
      <span style={{
        display: 'block',
        fontFamily: "'Switzer', 'Inter', -apple-system, sans-serif",
        fontSize: 'clamp(100px, 22vw, 360px)',
        fontWeight: 800,
        letterSpacing: '-0.045em',
        lineHeight: 0.82,
        width: '100%',
        whiteSpace: 'nowrap',
        color: '#a1a1aa',
        textAlign: 'center'
      }}>
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