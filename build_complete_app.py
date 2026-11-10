# Read the old components from src/App.jsx.checkpoint1
with open('src/App.jsx.checkpoint1', 'r', encoding='utf-8') as f:
    old_code = f.read()

# Extract from EverythingYouNeed down to the end of DiagnosticModal
start_idx = old_code.find('const EverythingYouNeed')
end_idx = old_code.find('export default function App()')

if start_idx == -1 or end_idx == -1:
    raise Exception("Could not locate indices in checkpoint1")

old_components_body = old_code[start_idx:end_idx].strip()

top_code = """import React, { useState, useEffect, useRef } from "react";
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
        backgroundColor: "#000000",
        minHeight: "100vh",
        color: "#ffffff",
        overflowX: "hidden",
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

      {/* 4. OLD DESIGN: ARCHITECTURE CORE ENGINES */}
      <EverythingYouNeed onAssessmentClick={() => setModalOpen(true)} />

      {/* 5. OLD DESIGN: DIRECT BENEFITS TO YOUR REVENUE (6 CARDS GRID) */}
      <AIBenefitsSection />

      {/* 6. OLD DESIGN: PROBLEM LEAK SECTION */}
      <ProblemLeakSection />

      {/* 7. OLD DESIGN: TESTIMONIAL QUOTE & HAND HOLDING PHONE */}
      <HandHoldingPhoneSection />

      {/* 8. OLD DESIGN: THREE WAYS TO WORK (PRICING TIERS) */}
      <ThreeWaysToWorkSection onAssessmentClick={() => setModalOpen(true)} />

      {/* 9. OLD DESIGN: BUILD, LAUNCH, SCALE IN 30 DAYS TIMELINE */}
      <LiveIn30DaysTimeline onAssessmentClick={() => setModalOpen(true)} />

      {/* 10. OLD DESIGN: INTERACTIVE ROI CALCULATOR */}
      <ClearROICalculator />

      {/* 11. OLD DESIGN: 100% RISK-FREE GUARANTEE BANNER */}
      <GuaranteeBanner onAssessmentClick={() => setModalOpen(true)} />

      {/* 12. OLD DESIGN: FAQ ACCORDION */}
      <FAQSection />

      {/* 13. OLD DESIGN: CARD ENVELOPE SCROLL ANIMATION */}
      <FinalCTAHero onAssessmentClick={() => setModalOpen(true)} />

      {/* 14. OLD DESIGN: CALENDAR BOOKING SECTION */}
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
          backgroundColor: isScrolled ? "rgba(18, 18, 18, 0.88)" : "rgba(22, 22, 22, 0.82)",
          // Fading outline: Crisp at top, fading sides, completely transparent at bottom
          borderTop: "1px solid rgba(255, 255, 255, 0.22)",
          borderLeft: "1px solid rgba(255, 255, 255, 0.08)",
          borderRight: "1px solid rgba(255, 255, 255, 0.08)",
          borderBottom: "1px solid rgba(255, 255, 255, 0)",
          boxShadow: "inset 0 1px 0 0 rgba(255, 255, 255, 0.22), 0 16px 36px rgba(0, 0, 0, 0.65)",
          maxWidth: isScrolled ? 580 : 980,
          width: "100%",
          minHeight: 52,
          transition: "max-width 0.35s cubic-bezier(0.16, 1, 0.3, 1), padding 0.35s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease"
        }}
      >
        {/* Subtle Top-to-Bottom Fading Gradient Outline Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 14,
            padding: 1,
            background: "linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.06) 60%, rgba(255, 255, 255, 0) 100%)",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            pointerEvents: "none"
          }}
        />

        {/* Brand: User's Silver Star/A Logo + ASENZO text */}
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
          <img
            src="/asenzo-logo.jpg"
            alt="Asenzo"
            style={{
              width: 28,
              height: 28,
              borderRadius: 6,
              objectFit: "cover",
              mixBlendMode: "screen",
              display: "block"
            }}
          />
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
                color: "#ffffff"
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
            color: "#ffffff",
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
                color: "#ffffff",
                textDecoration: "none",
                transition: "opacity 0.2s ease",
                whiteSpace: "nowrap",
                opacity: 0.9
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.9")}
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
  return (
    <section
      style={{
        backgroundColor: "#000000",
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
        {/* Subtle Announcement Pill */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "5px 14px",
              borderRadius: 20,
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              fontSize: 12.5,
              fontWeight: 500,
              color: "#e4e4e7"
            }}
          >
            <span style={{ color: "#F16001", fontWeight: 700 }}>✦</span>
            <span>Next-Gen Enterprise Workflow Operating System</span>
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
            color: "#ffffff",
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
            color: "#a1a1aa",
            maxWidth: 600,
            margin: "0 auto 36px auto"
          }}
        >
          Organize tasks and projects in one connected, accessible platform.
        </p>

        {/* Primary CTA Button: Solid flat white (#ffffff), NO gradient, zero hover expansion */}
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
              backgroundColor: "#ffffff",
              color: "#0a0a0a",
              boxShadow: "0 4px 18px rgba(255, 255, 255, 0.12)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = "brightness(0.92)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = "brightness(1)";
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
        backgroundColor: "#090909",
        color: "#ffffff",
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
            color: "#F4F2ED",
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
            color: "#A5A39F",
            textAlign: "center",
            maxWidth: 580,
            margin: "0 auto 48px auto"
          }}
        >
          Over 50+ integrations connecting your content, capture, pipeline, and sales infrastructure into one unified system.
        </p>

        {/* 6-GROUP ECOSYSTEM WITH CONNECTING POWER CONDUITS */}
        <div
          className="integrations-six-layout"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            gap: 20,
            alignItems: "center",
            position: "relative"
          }}
        >
          {/* SVG POWER CIRCUIT LINES CONNECTING ALL 6 BOXES TO THE CENTER HUB */}
          <svg
            className="desktop-only"
            viewBox="0 0 1180 460"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              zIndex: 2
            }}
          >
            {/* Circuit Line 1: Left Card 1 (Top) -> Center Power Box */}
            <path
              d="M 335 70 C 430 70, 480 180, 535 200"
              stroke="rgba(255, 255, 255, 0.12)"
              strokeWidth="1.5"
            />
            <path
              d="M 335 70 C 430 70, 480 180, 535 200"
              stroke="#ff6207"
              strokeWidth="2"
              strokeDasharray="6 26"
              style={{ animation: "powerFlowLeft 2.2s linear infinite" }}
            />

            {/* Circuit Line 2: Left Card 2 (Mid) -> Center Power Box */}
            <path
              d="M 335 225 C 410 225, 470 225, 535 225"
              stroke="rgba(255, 255, 255, 0.12)"
              strokeWidth="1.5"
            />
            <path
              d="M 335 225 C 410 225, 470 225, 535 225"
              stroke="#ff8c00"
              strokeWidth="2"
              strokeDasharray="6 26"
              style={{ animation: "powerFlowLeft 1.8s linear infinite" }}
            />

            {/* Circuit Line 3: Left Card 3 (Bottom) -> Center Power Box */}
            <path
              d="M 335 380 C 430 380, 480 270, 535 250"
              stroke="rgba(255, 255, 255, 0.12)"
              strokeWidth="1.5"
            />
            <path
              d="M 335 380 C 430 380, 480 270, 535 250"
              stroke="#ff6207"
              strokeWidth="2"
              strokeDasharray="6 26"
              style={{ animation: "powerFlowLeft 2.5s linear infinite" }}
            />

            {/* Circuit Line 4: Right Card 1 (Top) -> Center Power Box */}
            <path
              d="M 845 70 C 750 70, 700 180, 645 200"
              stroke="rgba(255, 255, 255, 0.12)"
              strokeWidth="1.5"
            />
            <path
              d="M 845 70 C 750 70, 700 180, 645 200"
              stroke="#ff6207"
              strokeWidth="2"
              strokeDasharray="6 26"
              style={{ animation: "powerFlowRight 2.2s linear infinite" }}
            />

            {/* Circuit Line 5: Right Card 2 (Mid) -> Center Power Box */}
            <path
              d="M 845 225 C 770 225, 710 225, 645 225"
              stroke="rgba(255, 255, 255, 0.12)"
              strokeWidth="1.5"
            />
            <path
              d="M 845 225 C 770 225, 710 225, 645 225"
              stroke="#ff8c00"
              strokeWidth="2"
              strokeDasharray="6 26"
              style={{ animation: "powerFlowRight 1.8s linear infinite" }}
            />

            {/* Circuit Line 6: Right Card 3 (Bottom) -> Center Power Box */}
            <path
              d="M 845 380 C 750 380, 700 270, 645 250"
              stroke="rgba(255, 255, 255, 0.12)"
              strokeWidth="1.5"
            />
            <path
              d="M 845 380 C 750 380, 700 270, 645 250"
              stroke="#ff6207"
              strokeWidth="2"
              strokeDasharray="6 26"
              style={{ animation: "powerFlowRight 2.5s linear infinite" }}
            />

            {/* Connection Dots on Left & Right Card Interfaces */}
            <circle cx="335" cy="70" r="3.5" fill="#ff6207" />
            <circle cx="335" cy="225" r="3.5" fill="#ff8c00" />
            <circle cx="335" cy="380" r="3.5" fill="#ff6207" />
            <circle cx="845" cy="70" r="3.5" fill="#ff6207" />
            <circle cx="845" cy="225" r="3.5" fill="#ff8c00" />
            <circle cx="845" cy="380" r="3.5" fill="#ff6207" />
          </svg>

          {/* LEFT COLUMN: 3 PROPORTIONED CARDS */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16, zIndex: 5 }}>
            {leftGroups.map((group) => (
              <CompactIntegrationCard key={group.id} group={group} />
            ))}
          </div>

          {/* CENTER PANEL: COVERS THE GAP VERTICALLY WITH INNER SOLID DARK BOX & ANIMATED BOTTOM GLOW */}
          <div
            className="desktop-only"
            style={{
              width: 250,
              height: 440,
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(14, 14, 14, 0.85)",
              border: "1px solid rgba(255, 255, 255, 0.06)",
              borderRadius: 22,
              boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 20px 50px rgba(0, 0, 0, 0.7)",
              overflow: "hidden",
              zIndex: 4
            }}
          >
            {/* Background Converging Subtle Filaments */}
            <img
              src="/accretion_lines.png"
              alt="Converging ecosystem filaments"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 440,
                height: 260,
                objectFit: "contain",
                pointerEvents: "none",
                opacity: 0.5,
                zIndex: 1
              }}
            />

            {/* Soft Ambient Radiating Warm Orange Light Fanning Downward */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 180,
                background: "radial-gradient(ellipse at 50% 100%, rgba(255, 85, 0, 0.35) 0%, rgba(255, 120, 0, 0.12) 50%, transparent 80%)",
                pointerEvents: "none",
                zIndex: 2,
                animation: "centerAmbientAura 3.5s ease-in-out infinite"
              }}
            />

            {/* INNER LOGO BOX:
                - NO GRADIENT INSIDE (Solid dark #151515 per strict requirement)
                - Contains User's Silver Star/A Logo
                - Animated Glowing Gradient at the bottom of the box
            */}
            <div
              style={{
                width: 90,
                height: 90,
                borderRadius: 20,
                backgroundColor: "#151515",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.7)",
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
                  width: 50,
                  height: 50,
                  objectFit: "cover",
                  mixBlendMode: "screen",
                  display: "block",
                  position: "relative",
                  zIndex: 4,
                  filter: "drop-shadow(0 2px 10px rgba(0, 0, 0, 0.6))"
                }}
              />

              {/* Animated Glowing Orange Gradient at the Bottom of the Box */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "8%",
                  right: "8%",
                  height: 2.5,
                  background: "linear-gradient(90deg, transparent 0%, #ff5500 20%, #ff8c00 50%, #ffc000 65%, #ff5500 80%, transparent 100%)",
                  borderRadius: 2,
                  zIndex: 5,
                  animation: "bottomGlowPulse 2.5s ease-in-out infinite"
                }}
              />
            </div>
          </div>

          {/* RIGHT COLUMN: 3 PROPORTIONED CARDS */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16, zIndex: 5 }}>
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
// Slightly reduced width (maxWidth: 335px), slightly increased length (minHeight: 140px, padding: 16px 20px)
// ==========================================
function CompactIntegrationCard({ group }) {
  return (
    <div
      style={{
        backgroundColor: "#131313",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: 14,
        padding: "16px 20px",
        maxWidth: 335,
        minHeight: 136,
        width: "100%",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 8,
        transition: "border-color 0.2s ease",
        position: "relative"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(241, 96, 1, 0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
      }}
    >
      {/* Title & Count Badge */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
        <h3
          style={{
            fontFamily: "'Switzer', 'Inter', sans-serif",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.02em",
            color: "#F4F2ED",
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
            backgroundColor: "rgba(241, 96, 1, 0.1)",
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
          fontSize: 12,
          lineHeight: 1.45,
          color: "#A5A39F",
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
              width: 28,
              height: 28,
              borderRadius: 6,
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.07)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background-color 0.15s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.14)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="rgba(255, 255, 255, 0.7)"
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
"""

full_content = top_code + "\n\n" + old_components_body

with open('src/App.jsx', 'w', encoding='utf-8') as f:
    f.write(full_content)

print("Successfully written combined App.jsx! Total characters:", len(full_content))
