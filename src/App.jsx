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
          maxWidth: isScrolled ? 580 : 980,
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
            { label: "Features", href: "#features" },
            { label: "Integrations", href: "#integrations" },
            { label: "Pricing", href: "#pricing" },
            { label: "Timeline", href: "#timeline" },
            { label: "FAQ", href: "#faq" }
          ].map((item) => (
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
            Get started
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
        {/* Dynamic Booking Quarter Pill Badge (No Green Dot) */}
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
            <span>Booking {bookingQuarter}</span>
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
            margin: "0 auto 20px auto",
            maxWidth: 880
          }}
        >
          All your work pulled<br />into one powerful place
        </h1>

        {/* Supporting Description */}
        <p
          style={{
            fontSize: "clamp(16px, 1.8vw, 18px)",
            lineHeight: 1.6,
            color: "#52525b",
            maxWidth: 600,
            margin: "0 auto 36px auto"
          }}
        >
          Organize tasks and projects in one connected, accessible platform.
        </p>

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

        {/* Social Proof: Coded Component with High-Res Avatars & Crisp, Highly Readable Typography */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "18px",
            marginTop: "32px",
            flexWrap: "wrap"
          }}
        >
          {/* Exact Avatar Stack (3 Founders + 120+ Badge) */}
          <img
            src="/avatars-stack.png"
            alt="120+ Founders"
            style={{
              height: "46px",
              width: "auto",
              display: "block",
              objectFit: "contain"
            }}
          />

          {/* Crisp, Clear, Monospace Editorial Typography - Super Easy to Read! */}
          <div
            style={{
              fontFamily: "'JetBrains Mono', 'SF Mono', Consolas, monospace",
              fontSize: "12.5px",
              fontWeight: 600,
              color: "#27272a",
              letterSpacing: "0.06em",
              lineHeight: 1.45,
              textAlign: "left",
              textTransform: "uppercase"
            }}
          >
            <div>FOUNDERS AND MARKETING TEAMS</div>
            <div>WHO TRUST US WITH THEIR BRAND</div>
          </div>
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
      id: "content",
      category: "CONTENT & DISTRIBUTION",
      count: "6 tools",
      desc: "Connect content creation and publishing channels to your authority workflow.",
      tools: [
        { name: "YouTube", icon: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" },
        { name: "Instagram", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
        { name: "X (Twitter)", icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
        { name: "LinkedIn", icon: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" },
        { name: "Notion", icon: "M4.459 4.208c.746.606 1.026.56 2.428.466l11.455-.839c.373 0 .466-.28.373-.56L17.522 1.5c-.373-.373-.746-.466-1.306-.466L3.246 2.06c-.466 0-.653.28-.466.653zm14.367 15.207l1.026-11.455c.093-.746-.28-1.12-1.026-1.12l-14.739.933c-.746.093-1.026.56-1.026 1.213l.839 12.388c.093.84.56 1.213 1.306 1.12l13.619-.933c.746-.093 1.026-.56 1.026-1.213z" },
        { name: "Substack", icon: "M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" }
      ]
    },
    {
      id: "lead-capture",
      category: "LEAD CAPTURE",
      count: "5 tools",
      desc: "Bring inbound enquiries, forms, and lead information into one capture system.",
      tools: [
        { name: "Typeform", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-5H9V9h4v7z" },
        { name: "Webflow", icon: "M18.8 6.7c-.8 0-1.5.3-2 .8-.5-.5-1.2-.8-2-.8-1.3 0-2.4.9-2.7 2.1-.3-1.2-1.4-2.1-2.7-2.1-.8 0-1.5.3-2 .8-.5-.5-1.2-.8-2-.8C3.6 6.7 2 8.3 2 10.3v7h2.8v-7c0-.9.7-1.6 1.6-1.6s1.6.7 1.6 1.6v7h2.8v-7c0-.9.7-1.6 1.6-1.6s1.6.7 1.6 1.6v7h2.8v-7c0-.9.7-1.6 1.6-1.6s1.6.7 1.6 1.6v7H22v-7c0-2-1.6-3.6-3.2-3.6z" },
        { name: "Beehiiv", icon: "M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3zm0 2.5L6.5 8.6v6.8L12 18.5l5.5-3.1V8.6L12 5.5z" },
        { name: "Tally", icon: "M4 4h16v3H4V4zm0 6h16v3H4v-3zm0 6h10v3H4v-3z" },
        { name: "Framer", icon: "M4 2h16v8h-8zM4 10h8l8 7H4zm0 7h8v7z" }
      ]
    },
    {
      id: "crm",
      category: "CRM & PIPELINE",
      count: "6 tools",
      desc: "Organize prospect information, qualification, and pipeline visibility.",
      tools: [
        { name: "HubSpot", icon: "M18.5 7.5a2.5 2.5 0 1 0-2.5-2.5v1.2l-3.2 1.8a3.5 3.5 0 0 0-4.8 1.5L4.5 7.8A2.5 2.5 0 1 0 3 9.8l3.4 1.7a3.5 3.5 0 0 0 1.6 4.3v2.7a2.5 2.5 0 1 0 2 0v-2.7a3.5 3.5 0 0 0 4-2.8l3.5 2a2.5 2.5 0 1 0 1-1.7l-3.4-1.9a3.5 3.5 0 0 0-.1-3.6l3.4-1.9v1.6a2.5 2.5 0 0 0 0 0z" },
        { name: "Salesforce", icon: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" },
        { name: "Attio", icon: "M12 2L2 22h20L12 2zm0 6l5 10H7l5-10z" },
        { name: "Close", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" },
        { name: "Airtable", icon: "M12.5 2.5L2 7.8v8.4l10.5 5.3 10.5-5.3V7.8L12.5 2.5zm0 2.8l7.5 3.8-7.5 3.8-7.5-3.8 7.5-3.8z" },
        { name: "Pipedrive", icon: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 4a4 4 0 0 1 4 4c0 2.21-1.79 4-4 4h-2v4H8V6h4z" }
      ]
    }
  ];

  const rightGroups = [
    {
      id: "messaging",
      category: "MESSAGING & AUTOMATION",
      count: "6 tools",
      desc: "Connect messaging channels and automation to streamline lead handling.",
      tools: [
        { name: "Slack", icon: "M6 15a2 2 0 1 1-2-2h2v2zm1 0a2 2 0 1 1 2 2V9a2 2 0 1 1-2-2v8zm8-9a2 2 0 1 1 2 2h-2V6zm-1 0a2 2 0 1 1-2-2v8a2 2 0 1 1 2 2V6zm-8 8a2 2 0 1 1 2-2v2H6zm0-1a2 2 0 1 1-2-2h8a2 2 0 1 1 2 2H6zm9 8a2 2 0 1 1-2 2v-2h2zm0-1a2 2 0 1 1 2 2h-8a2 2 0 1 1-2-2h8z" },
        { name: "Zapier", icon: "M13 2L3 14h8v8l10-12h-8V2z" },
        { name: "Make", icon: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.93V15a1 1 0 0 0-2 0v1.93A8 8 0 0 1 4.07 13H6a1 1 0 0 0 0-2H4.07A8 8 0 0 1 11 4.07V6a1 1 0 0 0 2 0V4.07A8 8 0 0 1 19.93 11H18a1 1 0 0 0 0 2h1.93A8 8 0 0 1 13 16.93z" },
        { name: "WhatsApp", icon: "M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.19 8.19 0 0 1-5.82 2.42c-1.45 0-2.88-.38-4.14-1.11l-.3-.17-3.12.82.83-3.04-.19-.31a8.19 8.19 0 0 1-1.26-4.43c0-4.54 3.7-8.24 8.24-8.24" },
        { name: "ManyChat", icon: "M12 2a10 10 0 0 0-10 10c0 5.52 4.48 10 10 10s10-4.48 10-10A10 10 0 0 0 12 2zm-1 14H8v-2h3v2zm5 0h-3v-2h3v2zm-5-4H8v-2h3v2zm5 0h-3v-2h3v2z" },
        { name: "Discord", icon: "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028z" }
      ]
    },
    {
      id: "booking",
      category: "BOOKING & SALES",
      count: "5 tools",
      desc: "Connect scheduling, calendar management, and sales conversation workflows.",
      tools: [
        { name: "Calendly", icon: "M19.5 3h-1V1h-2v2h-9V1h-2v2h-1A2.5 2.5 0 0 0 2 5.5v14A2.5 2.5 0 0 0 4.5 22h15a2.5 2.5 0 0 0 2.5-2.5v-14A2.5 2.5 0 0 0 19.5 3zm.5 16.5a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-11h16v11zm0-13H4v-1a.5.5 0 0 1 .5-.5h1V6h2V5h9v1h2V5h1a.5.5 0 0 1 .5.5v1z" },
        { name: "Cal.com", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 11h-5V7h2v4h3v2z" },
        { name: "Stripe", icon: "M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.977 15.613.5 12.776.5 6.78.5 2.82 3.655 2.82 8.784c0 6.643 8.354 5.922 8.354 9.176 0 1.054-.925 1.493-2.222 1.493-2.508 0-5.308-1.157-7.248-2.227l-.925 5.584C3.032 23.957 6.064 24.5 8.91 24.5c6.262 0 10.39-3.084 10.39-8.406 0-6.953-8.324-6.138-8.324-9.944z" },
        { name: "Zoom", icon: "M18 4H6C4.9 4 4 4.9 4 6v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3 9.5l4 3V7.5l-4 3v3z" },
        { name: "Google Meet", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" }
      ]
    },
    {
      id: "analytics",
      category: "ANALYTICS & ATTRIBUTION",
      count: "6 tools",
      desc: "Bring acquisition and conversion data together to understand what drives sales.",
      tools: [
        { name: "PostHog", icon: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" },
        { name: "Google Analytics", icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" },
        { name: "Mixpanel", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" },
        { name: "Fathom", icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
        { name: "Segment", icon: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" },
        { name: "Plausible", icon: "M4 19h16v2H4v-2zm2-4h3v2H6v-2zm5-4h3v6h-3v-6zm5-6h3v12h-3V5z" }
      ]
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
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              fontSize: 11.5,
              fontWeight: 600,
              color: "#F16001",
              letterSpacing: "0.04em"
            }}
          >
            <span>✦ CONNECTED ECOSYSTEM</span>
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
            maxWidth: 720
          }}
        >
          Connect effortlessly to your workflow
        </h2>

        {/* Supporting Description */}
        <p
          style={{
            fontSize: "clamp(14px, 1.5vw, 16px)",
            lineHeight: 1.55,
            color: "#52525b",
            textAlign: "center",
            maxWidth: 580,
            margin: "0 auto 48px auto"
          }}
        >
          Over 50+ integrations connecting your content, capture, pipeline, and sales infrastructure into one unified system.
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
        padding: "15px 18px",
        width: 320,
        height: 130,
        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.04)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
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
      {/* Title & Count Badge */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
        <h3
          style={{
            fontFamily: "'Switzer', 'Inter', sans-serif",
            fontSize: 12.5,
            fontWeight: 700,
            letterSpacing: "0.02em",
            color: "#0f0f11",
            margin: 0
          }}
        >
          {group.category}
        </h3>
        <span
          style={{
            fontSize: 10.5,
            fontWeight: 600,
            color: "#F16001",
            backgroundColor: "rgba(241, 96, 1, 0.08)",
            padding: "2px 7px",
            borderRadius: 5,
            letterSpacing: "0.02em"
          }}
        >
          {group.count}
        </span>
      </div>

      {/* Concise Description */}
      <p
        style={{
          fontSize: 11.5,
          lineHeight: 1.4,
          color: "#52525b",
          margin: 0
        }}
      >
        {group.desc}
      </p>

      {/* Tool Logos Row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 7,
          flexWrap: "wrap",
          paddingTop: 2
        }}
      >
        {group.tools.map((tool) => (
          <div
            key={tool.name}
            title={tool.name}
            style={{
              width: 27,
              height: 27,
              borderRadius: 6,
              backgroundColor: "rgba(0, 0, 0, 0.03)",
              border: "1px solid rgba(0, 0, 0, 0.06)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background-color 0.15s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.07)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.03)";
            }}
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="rgba(0, 0, 0, 0.75)"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={tool.icon} />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// SECTIONS FROM ORIGINAL ASENZO DESIGN
// ==========================================


// ==========================================
// 4. KEY BENEFITS OF AI FOR YOUR BUSINESS GROWTH
// (Exact replica of user's reference image in clean white theme)
// ==========================================
function KeyBenefitsSection() {
  const benefits = [
    {
      icon: <Zap size={20} color="#F16001" strokeWidth={2.2} />,
      title: "Increased Productivity",
      desc: "Gain actionable insights with AI-driven analytics to improve decision-making and strategy."
    },
    {
      icon: <ShieldCheck size={20} color="#F16001" strokeWidth={2.2} />,
      title: "Better Customer Experience",
      desc: "Personalized AI interactions improve response times, customer engagement, and overall satisfaction."
    },
    {
      icon: <Clock size={20} color="#F16001" strokeWidth={2.2} />,
      title: "24/7 Availability",
      desc: "AI-powered systems operate around the clock, ensuring seamless support and execution without downtime."
    },
    {
      icon: <DollarSign size={20} color="#F16001" strokeWidth={2.2} />,
      title: "Cost Reduction",
      desc: "AI automation minimizes manual work, cuts operational costs, and optimizes resource allocation for better profitability."
    },
    {
      icon: <PieChart size={20} color="#F16001" strokeWidth={2.2} />,
      title: "Data-Driven Insights",
      desc: "Leverage AI to analyze vast data sets, identify trends, and make smarter, faster, and more accurate business decisions."
    },
    {
      icon: <BarChart3 size={20} color="#F16001" strokeWidth={2.2} />,
      title: "Scalability & Growth",
      desc: "AI adapts to your business needs, allowing you to scale efficiently without increasing workload or costs."
    }
  ];

  return (
    <section
      id="benefits"
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
              backgroundColor: "rgba(241, 96, 1, 0.08)",
              border: "1px solid rgba(241, 96, 1, 0.22)",
              fontSize: "12px",
              fontWeight: 600,
              color: "#F16001",
              letterSpacing: "0.04em"
            }}
          >
            <span>✦ Benefits</span>
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
          The Key Benefits of AI<br />for Your Business Growth
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "clamp(15px, 1.6vw, 16.5px)",
            lineHeight: 1.6,
            color: "#52525b",
            textAlign: "center",
            margin: "0 auto 64px auto",
            maxWidth: "640px"
          }}
        >
          Discover how AI automation enhances efficiency, reduces costs, and drives business growth with smarter, faster processes.
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
                borderRadius: "14px",
                padding: "36px 32px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.03)",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.borderColor = "rgba(241, 96, 1, 0.4)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(241, 96, 1, 0.08), 0 4px 12px rgba(0,0,0,0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "#e4e4e7";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.03)";
              }}
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(241, 96, 1, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px"
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  fontFamily: "'Switzer', 'Inter', sans-serif",
                  fontSize: "18px",
                  fontWeight: 600,
                  letterSpacing: "-0.015em",
                  color: "#0f0f11",
                  marginBottom: "10px"
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontSize: "13.5px",
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

      {/* Hand Holding Phone Image */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '48px' }}>
        <img
          src="/testimonial-hand.jpg"
          alt="Hand Holding Phone Mockup"
          style={{ maxWidth: '420px', width: '100%', height: 'auto', objectFit: 'contain' }}
        />
      </div>

      {/* Editorial Pull-Quote Block */}
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <img src="/logo-icon.png" alt="Icon" style={{ width: '32px', height: '32px', filter: 'invert(1)' }} onError={(e) => e.target.style.display = 'none'} />
        </div>
        <blockquote style={{
          fontSize: 'clamp(22px, 3.8vw, 42px)',
          fontWeight: 400,
          lineHeight: 1.25,
          letterSpacing: '-0.03em',
          color: '#0f0f11',
          margin: '0 0 32px 0',
          textAlign: 'center'
        }}>
          "Nathan and the ASENZO team are the best funnel builders we've ever worked with. They helped us go from $0 to $40k/month in just 27 days, and that momentum helped us scale to $230k/month."
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
            <div style={{ fontSize: '15px', fontWeight: 500, color: '#0f0f11', lineHeight: 1.2 }}>Max Perzon</div>
            <div style={{ fontSize: '14px', color: '#71717a', marginTop: '4px' }}>Founder, Kourse.com</div>
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
            {/* Grey Highlight Pill with Black Font (Zero Orange) */}
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
              <span>PRICING</span>
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
              Built to scale
            </h2>
          </div>

          <p style={{
            fontSize: '14.5px',
            color: '#52525b',
            lineHeight: 1.5,
            maxWidth: '380px',
            margin: 0
          }}>
            Clear subscription options, structured to support different needs while keeping scope, expectations, and delivery transparent.
          </p>
        </div>

        {/* 3-Box Technical Grid Layout from Reference */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          alignItems: 'stretch'
        }}>

          {/* Card 1: Core */}
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

            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#0f0f11', margin: '0 0 6px 0', letterSpacing: '-0.01em' }}>
                Core
              </h3>
              <p style={{ fontSize: '13px', color: '#71717a', margin: 0 }}>
                For teams with focused design needs.
              </p>
            </div>

            {/* What's included Checklist with (+) icons */}
            <div style={{ flex: 1, marginBottom: '36px' }}>
              <div style={{ fontSize: '12.5px', color: '#0f0f11', marginBottom: '16px', fontWeight: 600 }}>
                What's included
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  "Unlimited requests",
                  "One request at a time",
                  "Fixed monthly rate",
                  "Async communication",
                  "Flexible scope",
                  "Pause anytime"
                ].map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#27272a' }}>
                    <div style={{
                      width: '15px',
                      height: '15px',
                      borderRadius: '50%',
                      border: '1px solid #71717a',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Plus size={10} color="#0f0f11" strokeWidth={2.5} />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Start a project Button */}
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
                transition: 'background-color 0.2s ease, opacity 0.2s ease',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.12)'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#27272a'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#000000'; }}
            >
              Start a project
            </button>
          </div>

          {/* Card 2: Growth (POPULAR) - Matching Clean Border without Black Outline */}
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

            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '32px' }}>
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#0f0f11', margin: '0 0 6px 0', letterSpacing: '-0.01em' }}>
                  Growth
                </h3>
                <p style={{ fontSize: '13px', color: '#71717a', margin: 0 }}>
                  For teams scaling design output.
                </p>
              </div>
              {/* Clean POPULAR Badge without Black Border */}
              <div style={{
                border: '1px solid #e4e4e7',
                padding: '3px 9px',
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: '#0f0f11',
                textTransform: 'uppercase',
                borderRadius: '3px',
                backgroundColor: '#f4f4f5'
              }}>
                POPULAR
              </div>
            </div>

            {/* What's included Checklist with (+) icons */}
            <div style={{ flex: 1, marginBottom: '36px' }}>
              <div style={{ fontSize: '12.5px', color: '#0f0f11', marginBottom: '16px', fontWeight: 600 }}>
                What's included
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  "Unlimited requests",
                  "Two request at a time",
                  "Fixed monthly rate",
                  "Async communication",
                  "Flexible scope",
                  "Pause anytime"
                ].map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#27272a' }}>
                    <div style={{
                      width: '15px',
                      height: '15px',
                      borderRadius: '50%',
                      border: '1px solid #71717a',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Plus size={10} color="#0f0f11" strokeWidth={2.5} />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Start a project Button */}
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
              Start a project
            </button>
          </div>

          {/* Card 3: Custom work */}
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

            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#0f0f11', margin: '0 0 6px 0', letterSpacing: '-0.01em' }}>
                Custom work
              </h3>
              <p style={{ fontSize: '13px', color: '#71717a', margin: 0 }}>
                For one-off or specialised projects.
              </p>
            </div>

            {/* What's included Checklist with (+) icons */}
            <div style={{ flex: 1, marginBottom: '36px' }}>
              <div style={{ fontSize: '12.5px', color: '#0f0f11', marginBottom: '16px', fontWeight: 600 }}>
                What's included
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  "Dedicated team of experts",
                  "End-to-End Web Development",
                  "Fully Custom Timeline & Scope",
                  "Async communication",
                  "Advanced SEO & Marketing",
                  "Updates every 48 hours"
                ].map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#27272a' }}>
                    <div style={{
                      width: '15px',
                      height: '15px',
                      borderRadius: '50%',
                      border: '1px solid #71717a',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Plus size={10} color="#0f0f11" strokeWidth={2.5} />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Start a project Button */}
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
              Start a project
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

      {/* Header Grid matching Pricing Section layout */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        gap: '32px',
        marginBottom: '64px'
      }}>
        <div>
          {/* Grey Highlight Pill with Black Font (Zero Orange) */}
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
            <span>TIMELINE</span>
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
            Live in 30 Days.<br />
            Everything Done For You.
          </h2>
        </div>

        <p style={{
          fontSize: '14.5px',
          color: '#52525b',
          lineHeight: 1.5,
          maxWidth: '380px',
          margin: 0
        }}>
          The whole point is speed to a win. We get you live and bringing in leads fast, not stuck in a three-month build. Here's the path.
        </p>
      </div>

      {/* 3 Step Timeline Cards with Technical Design Rules */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '24px',
        alignItems: 'stretch',
        marginBottom: '28px'
      }}>

        {/* Step 1: Build */}
        <div style={{
          backgroundColor: '#ffffff',
          border: '1px solid #e4e4e7',
          borderRadius: '6px',
          padding: '36px 30px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: '230px',
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '36px' }}>
              {/* Technical Badge */}
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
                WEEK 1
              </div>
              {/* Technical Cube SVG */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="none">
                <path d="M12 2L2 7.5L12 13L22 7.5L12 2Z" fill="#18181b" />
                <path d="M2 7.5V16.5L12 22V13L2 7.5Z" fill="#71717a" />
                <path d="M22 7.5V16.5L12 22V13L22 7.5Z" fill="#a1a1aa" />
              </svg>
            </div>

            <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#0f0f11', marginBottom: '14px', letterSpacing: '-0.02em' }}>
              Build
            </h3>
            <p style={{ fontSize: '14px', color: '#52525b', lineHeight: 1.6, margin: 0 }}>
              Strategy call, then we build. We map your system, write the copy, design the pages, and wire up every automation to your brand.
            </p>
          </div>
        </div>

        {/* Step 2: Launch */}
        <div style={{
          backgroundColor: '#ffffff',
          border: '1px solid #e4e4e7',
          borderRadius: '6px',
          padding: '36px 30px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: '230px',
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '36px' }}>
              {/* Technical Badge */}
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
                WEEKS 2-3
              </div>
              {/* Technical Rocket SVG */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="none">
                <path d="M12 2C12 2 8 6.5 8 13C8 17.5 10.5 20 12 20C13.5 20 16 17.5 16 13C16 6.5 12 2 12 2Z" fill="#18181b" />
                <path d="M8 13C6.5 14.5 4 15 4 15L7.5 18L8 15Z" fill="#71717a" />
                <path d="M16 13C17.5 14.5 20 15 20 15L16.5 18L16 15Z" fill="#71717a" />
                <path d="M10.5 20L12 23L13.5 20H10.5Z" fill="#a1a1aa" />
              </svg>
            </div>

            <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#0f0f11', marginBottom: '14px', letterSpacing: '-0.02em' }}>
              Launch
            </h3>
            <p style={{ fontSize: '14px', color: '#52525b', lineHeight: 1.6, margin: 0 }}>
              The system goes live. Funnel deployed, follow-up switched on, traffic campaign launched. Leads start flowing in.
            </p>
          </div>
        </div>

        {/* Step 3: Scale */}
        <div style={{
          backgroundColor: '#ffffff',
          border: '1px solid #e4e4e7',
          borderRadius: '6px',
          padding: '36px 30px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: '230px',
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '36px' }}>
              {/* Technical Badge */}
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
                WEEK 4
              </div>
              {/* Technical Growth SVG */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="none">
                <rect x="2" y="16" width="4" height="6" fill="#d4d4d8" />
                <rect x="8" y="11" width="4" height="11" fill="#a1a1aa" />
                <rect x="14" y="6" width="4" height="16" fill="#71717a" />
                <rect x="20" y="2" width="4" height="20" fill="#18181b" />
              </svg>
            </div>

            <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#0f0f11', marginBottom: '14px', letterSpacing: '-0.02em' }}>
              Scale
            </h3>
            <p style={{ fontSize: '14px', color: '#52525b', lineHeight: 1.6, margin: 0 }}>
              We optimise on real data and hand you the keys. You're live, acquiring clients, and in full control of the machine.
            </p>
          </div>
        </div>

      </div>

      {/* Optional Management Banner styled with matching technical border & corner brackets */}
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
            AFTER LAUNCH, OPTIONAL
          </div>
          <p style={{ fontSize: '14px', color: '#52525b', lineHeight: 1.5, margin: 0 }}>
            <strong style={{ color: '#0f0f11', fontWeight: 600 }}>Want us to keep running it?</strong> Once you're live, you can keep us on for ongoing management and growth. We scale the traffic, sharpen the funnel, and push toward bigger months. Or take the keys and run it yourself. Your call.
          </p>
        </div>
        <div style={{ flexShrink: 0, opacity: 0.8 }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#71717a" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
            <circle cx="12" cy="12" r="3" fill="#71717a" stroke="none"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        </div>
      </div>

      {/* CTA Button & Microcopy */}
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
          Book Your Free Assessment Call
        </button>
        <div style={{ display: 'flex', gap: '16px', fontSize: '11px', color: '#52525b', marginTop: '16px', fontWeight: 600, letterSpacing: '0.05em' }}>
          <span>✓ ZERO-RISK GUARANTEE</span>
          <span>✓ SPLIT-PAY AVAILABLE</span>
          <span>✓ LIVE IN ~30 DAYS</span>
        </div>
      </div>

    </div>
  </section>
);

// 8. 1-to-1 Money Back Guarantee
const GuaranteeBanner = ({ onAssessmentClick }) => (
  <section style={{
    backgroundColor: '#ffffff',
    padding: '120px 24px',
    borderBottom: '1px solid #f0f0f0',
    display: 'flex',
    justifyContent: 'center'
  }}>
    <div style={{ maxWidth: '960px', width: '100%', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
        {/* Grey/black shield icon container */}
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
        marginBottom: '28px',
        letterSpacing: '-0.035em'
      }}>
        We Work With You 1-to-1 Until <br /> You Make Your Money Back.
      </h2>

      <p style={{
        fontSize: '16px',
        color: '#52525b',
        maxWidth: '740px',
        margin: '0 auto 48px auto',
        lineHeight: 1.6
      }}>
        We're confident this system will make you far more than it costs. But you carry none of the risk. If for any reason you haven't recouped your investment, <strong style={{ color: '#0f0f11', fontWeight: 600 }}>we keep consulting you one-to-one, adjusting and optimising, until you do.</strong> You don't build it alone, and you don't lose alone. That's the deal.
      </p>

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
          Book Your Free Assessment Call
        </button>
        <div style={{ display: 'flex', gap: '24px', fontSize: '11px', color: '#52525b', fontWeight: 600, letterSpacing: '0.05em' }}>
          <span>✓ ZERO-RISK GUARANTEE</span>
          <span>✓ SPLIT-PAY AVAILABLE</span>
          <span>✓ LIVE IN ~30 DAYS</span>
        </div>
      </div>
    </div>
  </section>
);

// 9. FAQ Section
const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    { num: "01", q: "What exactly does ASENZO do?", a: "We build complete done-for-you client generation systems, including high-converting websites, sales funnels, AI follow-up automations, and persuasive copywriting to turn your traffic into paying clients." },
    { num: "02", q: "Who is this for?", a: "This is built specifically for service-based businesses, agency owners, consultants, and enterprise founders doing over $10k/month who want an automated, predictable acquisition infrastructure." },
    { num: "03", q: "How long does implementation take?", a: "The entire system is completely designed, built, and launched live in 30 days flat. You'll see initial infrastructure within the first 10 days." },
    { num: "04", q: "What do you need from me?", a: "Only an initial 60-minute strategy call and access to your core brand assets. Our expert engineering team handles the rest entirely done-for-you." },
    { num: "05", q: "What if it doesn't work?", a: "You're backed by our 100% Risk-Free Guarantee: if you aren't thoroughly blown away by your new system in 30 days, you receive a full 100% immediate refund with zero questions asked." }
  ];

  return (
    <section id="faq" style={{ backgroundColor: '#ffffff', padding: '120px 24px', borderBottom: '1px solid #f0f0f0' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: '#0f0f11', marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ fontSize: '16px', color: '#52525b' }}>
            Everything you need to know about partnering with ASENZO.
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
                    <span style={{ fontSize: '13px', color: '#F16001', fontFamily: 'monospace', fontWeight: 600 }}>{faq.num}</span>
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
                fontSize: 'clamp(24px, 3.5vw, 32px)',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                color: '#FFFFFF',
                marginBottom: '16px',
                maxWidth: '460px',
                textAlign: 'center'
              }}
            >
              Let AI do the Work so you can Scale Faster.
            </h2>

            <p
              style={{
                fontSize: '14px',
                color: 'rgba(255,255,255,0.95)',
                marginBottom: '32px',
                lineHeight: 1.5,
                fontWeight: 400,
                maxWidth: '380px',
                textAlign: 'center'
              }}
            >
              Book a Call Today and Start Automating.
            </p>

            <button
              onClick={onAssessmentClick}
              style={{
                height: '48px',
                backgroundColor: '#FFFFFF',
                color: '#000000',
                border: 'none',
                borderRadius: '6px',
                padding: '0 28px',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s',
                pointerEvents: 'auto',
                boxShadow: '0 4px 14px rgba(0,0,0,0.15)'
              }}
              onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#E5E5E5'; }}
              onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#FFFFFF'; }}
            >
              Book a free call
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
// 11. Master Footer
const MasterFooter = ({ onAssessmentClick }) => (
  <footer style={{ backgroundColor: '#fafafa', borderTop: '1px solid #e4e4e7', paddingTop: '64px', paddingBottom: '32px', overflow: 'hidden' }}>
    <div className="mobile-container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '40px',
        alignItems: 'start',
        marginBottom: '48px'
      }}>
        {/* Brand Column with User's Asenzo Logo in Small Black Icon */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
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
              overflow: 'hidden'
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
            {/* Removed the (R) symbol as requested */}
            <span style={{ fontSize: '15px', fontWeight: 700, letterSpacing: '-0.02em', color: '#0f0f11' }}>Asenzo</span>
          </div>
          <p style={{ fontSize: '13px', color: '#71717a', margin: 0 }}>
            Proven Systems. Dedicated Service.
          </p>
          <button onClick={onAssessmentClick} style={{
            backgroundColor: '#000000',
            color: '#ffffff',
            border: 'none',
            borderRadius: '6px',
            padding: '8px 16px',
            fontSize: '12px',
            fontWeight: 600,
            cursor: 'pointer',
            alignSelf: 'flex-start',
            marginTop: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            Take Free Assessment
          </button>
        </div>

        {/* SOLUTIONS Column */}
        <div>
          <div style={{ fontSize: '11px', color: '#0f0f11', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>SOLUTIONS</div>
          <div style={{ fontSize: '13px', color: '#71717a', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a href="#buy" style={{ color: 'inherit', textDecoration: 'none' }}>Builder OS</a>
            <a href="#community" style={{ color: 'inherit', textDecoration: 'none' }}>Private Mastermind</a>
            <a href="#dfy" style={{ color: 'inherit', textDecoration: 'none' }}>Done For You</a>
          </div>
        </div>

        {/* NAVIGATION Column */}
        <div>
          <div style={{ fontSize: '11px', color: '#0f0f11', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>NAVIGATION</div>
          <div style={{ fontSize: '13px', color: '#71717a', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a href="#features" style={{ color: 'inherit', textDecoration: 'none' }}>Features</a>
            <a href="#integrations" style={{ color: 'inherit', textDecoration: 'none' }}>Integrations</a>
            <a href="#benefits" style={{ color: 'inherit', textDecoration: 'none' }}>Benefits</a>
            <a href="#pricing" style={{ color: 'inherit', textDecoration: 'none' }}>Pricing</a>
            <a href="#faq" style={{ color: 'inherit', textDecoration: 'none' }}>FAQ</a>
          </div>
        </div>

        {/* SOCIAL Column */}
        <div>
          <div style={{ fontSize: '11px', color: '#0f0f11', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>SOCIAL</div>
          <div style={{ fontSize: '13px', color: '#71717a', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span>Twitter</span>
            <span>LinkedIn</span>
            <span>Instagram</span>
          </div>
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
        <h2 style={{ fontSize: '24px', fontWeight: 600, color: '#FFF', marginBottom: '16px' }}>Start 2-Minute Assessment</h2>
        <p style={{ fontSize: '14px', color: '#888', marginBottom: '24px' }}>Analyze your conversion friction and acquisition bottlenecks.</p>
        <button onClick={onClose} style={{ width: '100%', height: '48px', backgroundColor: '#FFF', color: '#000', border: 'none', borderRadius: '6px', fontWeight: 600, cursor: 'pointer' }}>Begin Assessment Now →</button>
      </div>
    </div>
  );
};