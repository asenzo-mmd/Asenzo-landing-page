import re

with open('footer_sections.jsx', 'r', encoding='utf-8') as f:
    footer_code = f.read()

# Remove gradients in footer buttons and remove expanding transforms
footer_code = re.sub(r'background:\s*"linear-gradient\([^"]+\)"', 'background: "#f94500"', footer_code)
footer_code = re.sub(r'backgroundColor:\s*"linear-gradient\([^"]+\)"', 'backgroundColor: "#f94500"', footer_code)
footer_code = re.sub(r'e\.currentTarget\.style\.transform\s*=\s*"[^"]*"', '// no expand', footer_code)

integrations_and_header_code = '''import React, { useState, useEffect } from "react";

// ==========================================
// ASENZO — PREMIUM EXPERT CODEBASE
// 1. Header: Dark Grey Glassmorphism with Inset Top Rim, Fixed 14px Box-Curve, Left Shortens on Scroll
// 2. First Page: Completely Plain Black Hero (#000000, Zero Gradients, Zero Mesh, Solid Buttons)
// 3. Second Page: High-Fidelity 6-Group Integrations Section (Accretion Architecture, Central Visual)
// 4. Strict Button Rules: Solid flat colors only (zero gradients), zero hover expansion
// ==========================================

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isYearlyBilling, setIsYearlyBilling] = useState(true);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Scroll Tracking for Morphing Navbar
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
        onOpenModal={() => setIsModalOpen(true)}
      />

      {/* 2. FIRST PAGE: COMPLETELY PLAIN BLACK HERO */}
      <AccretionHero onOpenModal={() => setIsModalOpen(true)} />

      {/* 3. SECOND PAGE: ASENZO 6-GROUP INTEGRATIONS SECTION */}
      <AsenzoIntegrationsSection onOpenModal={() => setIsModalOpen(true)} />

      {/* 4. TESTIMONIALS BENTO GRID */}
      <AccretionTestimonials onOpenModal={() => setIsModalOpen(true)} />

      {/* 5. PRICING TIERS */}
      <AccretionPricing
        isYearly={isYearlyBilling}
        setIsYearly={setIsYearlyBilling}
        onOpenModal={() => setIsModalOpen(true)}
      />

      {/* 6. FAQ ACCORDION */}
      <AccretionFAQ
        openIndex={openFaqIndex}
        setOpenIndex={setOpenFaqIndex}
      />

      {/* 7. SUNSET HORIZON WAVE BOTTOM */}
      <AccretionHorizonWaveBottom />

      {/* 8. FINAL CTA & NEWSLETTER */}
      <AccretionFinalCTA
        email={newsletterEmail}
        setEmail={setNewsletterEmail}
        subscribed={newsletterSubscribed}
        setSubscribed={setNewsletterSubscribed}
        onOpenModal={() => setIsModalOpen(true)}
      />

      {/* 9. FOOTER */}
      <AccretionFooter />

      {/* 10. INTERACTIVE MODAL */}
      {isModalOpen && <DiagnosticModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

// ==========================================
// 1. DARK GREY GLASSMORPHISM FLOATING NAVBAR
// Exact reference finishing: Dark charcoal frosted glass, top inset rim highlight, fixed 14px box-curve
// When scrolled: Left side becomes shorter, corner radius remains identical, button never expands
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
          display: "flex",
          alignItems: "center",
          justifyContent: isScrolled ? "center" : "space-between",
          gap: isScrolled ? 32 : 28,
          padding: isScrolled ? "7px 8px 7px 18px" : "8px 10px 8px 24px",
          borderRadius: 14, // Exact box curve in both normal and shrunk states!
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          backgroundColor: isScrolled ? "rgba(18, 18, 18, 0.82)" : "rgba(22, 22, 22, 0.78)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow: "inset 0 1px 0 0 rgba(255, 255, 255, 0.16), 0 16px 36px rgba(0, 0, 0, 0.65)",
          maxWidth: isScrolled ? 640 : 980,
          width: "100%",
          minHeight: 52,
          transition: "max-width 0.35s cubic-bezier(0.16, 1, 0.3, 1), padding 0.35s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease"
        }}
      >
        {/* Brand Logo: Shorter on scroll */}
        <div
          style={{
            overflow: "hidden",
            maxWidth: isScrolled ? 0 : 120,
            opacity: isScrolled ? 0 : 1,
            transform: isScrolled ? "translateX(-10px)" : "translateX(0)",
            transition: "all 0.32s cubic-bezier(0.16, 1, 0.3, 1)",
            display: "flex",
            alignItems: "center",
            whiteSpace: "nowrap"
          }}
        >
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#ffffff",
              display: "flex",
              alignItems: "center"
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
              Accretion
            </span>
          </a>
        </div>

        {/* Navigation Links */}
        <div
          className="desktop-only"
          style={{
            display: "flex",
            alignItems: "center",
            gap: isScrolled ? 24 : 28,
            fontSize: 14,
            fontWeight: 500,
            color: "#ffffff",
            transition: "gap 0.35s ease"
          }}
        >
          {["Features", "Integrations", "Testimonials", "Pricing", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                color: "#ffffff",
                textDecoration: "none",
                transition: "opacity 0.2s ease",
                whiteSpace: "nowrap"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right CTA Button: Solid flat orange (#f94500), no gradient, zero hover expansion */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <button
            onClick={onOpenModal}
            style={{
              height: 38,
              padding: isScrolled ? "0 18px" : "0 22px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              transition: "filter 0.2s ease",
              border: "none",
              backgroundColor: "#f94500", // Solid flat color, NO gradient
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
// 2. FIRST PAGE: COMPLETELY PLAIN BLACK HERO SECTION
// Pure solid black background (#000000), zero background gradients, zero mesh
// Solid white button, zero hover expansion
// ==========================================
function AccretionHero({ onOpenModal }) {
  return (
    <section
      style={{
        backgroundColor: "#000000",
        color: "#ffffff",
        minHeight: "100vh",
        paddingTop: 180,
        paddingBottom: 110,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start"
      }}
    >
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          maxWidth: 920,
          margin: "0 auto",
          padding: "0 20px"
        }}
      >
        {/* Announcement Pill Badge */}
        <div style={{ display: "inline-flex", marginBottom: 28 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              padding: "4px 14px 4px 5px",
              borderRadius: 28,
              background: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              boxShadow: "0 2px 12px rgba(0, 0, 0, 0.5)"
            }}
          >
            {/* Left Orange NEW Tag (Solid flat orange, no gradient) */}
            <div
              style={{
                backgroundColor: "#f94500",
                borderRadius: 13,
                padding: "2px 8px",
                color: "#ffffff",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.04em",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              NEW
            </div>

            {/* Right Text */}
            <span
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: "#e4e4e7",
                letterSpacing: "-0.01em"
              }}
            >
              Now with brand new AI integration
            </span>
          </div>
        </div>

        {/* Main Headline (Exact 2 lines) */}
        <h1
          style={{
            fontFamily: "'Switzer', 'Inter', sans-serif",
            fontSize: "clamp(44px, 6.4vw, 84px)",
            fontWeight: 700,
            lineHeight: 1.04,
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
              backgroundColor: "#ffffff", // Solid flat white, NO gradient
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
// Accretion Visual Language & Architecture
// Left Column: 3 Groups | Central Symmetrical Connecting Visual | Right Column: 3 Groups
// Design Tokens: #090909 background, #141414 graphite cards, #F4F2ED headings, #A5A39F body
// ==========================================
function AsenzoIntegrationsSection({ onOpenModal }) {
  const leftGroups = [
    {
      id: "content",
      category: "CONTENT & DISTRIBUTION",
      count: "6 tools",
      desc: "Connect content creation and publishing channels to your authority-building workflow.",
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
      desc: "Bring inbound enquiries, forms, and lead information into one connected capture system.",
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
      desc: "Connect messaging channels and automation workflows to streamline lead handling.",
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
      desc: "Bring acquisition and conversion data together to understand what drives sales conversations.",
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
        paddingTop: 110,
        paddingBottom: 130,
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Subtle Ambient Glow behind central connecting visual */}
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 720,
          height: 600,
          background: "radial-gradient(circle at center, rgba(241, 96, 1, 0.08) 0%, rgba(243, 173, 66, 0.03) 45%, transparent 75%)",
          pointerEvents: "none",
          zIndex: 1
        }}
      />

      <div
        className="container"
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 10
        }}
      >
        {/* Section Eyebrow Badge */}
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "5px 14px",
              borderRadius: 20,
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              fontSize: 12,
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
            fontSize: "clamp(34px, 4.2vw, 54px)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            textAlign: "center",
            color: "#F4F2ED",
            margin: "0 auto 16px auto",
            maxWidth: 780
          }}
        >
          Connect effortlessly to your workflow
        </h2>

        {/* Supporting Description */}
        <p
          style={{
            fontSize: "clamp(15px, 1.6vw, 17px)",
            lineHeight: 1.6,
            color: "#A5A39F",
            textAlign: "center",
            maxWidth: 620,
            margin: "0 auto 64px auto"
          }}
        >
          Over 50+ integrations connecting your content, capture, pipeline, and sales infrastructure into one unified system.
        </p>

        {/* SIX-GROUP COMPOSITION WITH CENTRAL CONNECTING VISUAL */}
        <div
          className="integrations-six-layout"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            gap: 28,
            alignItems: "center",
            position: "relative"
          }}
        >
          {/* LEFT COLUMN: 3 GROUPS */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24, zIndex: 5 }}>
            {leftGroups.map((group) => (
              <IntegrationCard key={group.id} group={group} align="left" />
            ))}
          </div>

          {/* CENTRAL CONNECTING VISUAL (Symmetrical SVG Lines Converging to ASENZO Hub) */}
          <div
            className="desktop-only"
            style={{
              width: 140,
              height: "100%",
              minHeight: 580,
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 3
            }}
          >
            {/* SVG Connecting Circuit Paths */}
            <svg
              viewBox="0 0 140 580"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none"
              }}
            >
              {/* Left Top to Center */}
              <path
                d="M 0 100 C 50 100, 40 290, 70 290"
                stroke="rgba(241, 96, 1, 0.45)"
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />
              {/* Left Mid to Center */}
              <path
                d="M 0 290 L 70 290"
                stroke="rgba(241, 96, 1, 0.6)"
                strokeWidth="1.5"
              />
              {/* Left Bottom to Center */}
              <path
                d="M 0 480 C 50 480, 40 290, 70 290"
                stroke="rgba(241, 96, 1, 0.45)"
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />

              {/* Right Top to Center */}
              <path
                d="M 140 100 C 90 100, 100 290, 70 290"
                stroke="rgba(241, 96, 1, 0.45)"
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />
              {/* Right Mid to Center */}
              <path
                d="M 140 290 L 70 290"
                stroke="rgba(241, 96, 1, 0.6)"
                strokeWidth="1.5"
              />
              {/* Right Bottom to Center */}
              <path
                d="M 140 480 C 90 480, 100 290, 70 290"
                stroke="rgba(241, 96, 1, 0.45)"
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />
            </svg>

            {/* Glowing Central Hub Node */}
            <div
              style={{
                width: 68,
                height: 68,
                borderRadius: "50%",
                backgroundColor: "#111111",
                border: "1.5px solid rgba(241, 96, 1, 0.5)",
                boxShadow: "0 0 30px rgba(241, 96, 1, 0.35), inset 0 0 14px rgba(241, 96, 1, 0.2)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                zIndex: 10
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: "#F16001",
                  boxShadow: "0 0 10px #F16001",
                  marginBottom: 3
                }}
              />
              <span
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  color: "#F4F2ED"
                }}
              >
                CORE
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: 3 GROUPS */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24, zIndex: 5 }}>
            {rightGroups.map((group) => (
              <IntegrationCard key={group.id} group={group} align="right" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// INTEGRATION CARD COMPONENT
// Follows Accretion proportions, dark graphite card surface, warm white titles, real tool icons
// ==========================================
function IntegrationCard({ group, align }) {
  return (
    <div
      style={{
        backgroundColor: "#141414",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: 14,
        padding: "24px 26px",
        boxShadow: "0 10px 28px rgba(0, 0, 0, 0.4)",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        transition: "border-color 0.2s ease"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(241, 96, 1, 0.35)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
      }}
    >
      {/* Card Header: Category Title & Tool Count Badge */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <h3
          style={{
            fontFamily: "'Switzer', 'Inter', sans-serif",
            fontSize: 14.5,
            fontWeight: 700,
            letterSpacing: "0.03em",
            color: "#F4F2ED",
            margin: 0
          }}
        >
          {group.category}
        </h3>
        <span
          style={{
            fontSize: 11.5,
            fontWeight: 600,
            color: "#F16001",
            backgroundColor: "rgba(241, 96, 1, 0.1)",
            padding: "2px 8px",
            borderRadius: 6,
            letterSpacing: "0.02em"
          }}
        >
          {group.count}
        </span>
      </div>

      {/* Supporting Description */}
      <p
        style={{
          fontSize: 13,
          lineHeight: 1.55,
          color: "#A5A39F",
          margin: 0
        }}
      >
        {group.desc}
      </p>

      {/* Integration Logos Row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          flexWrap: "wrap",
          paddingTop: 4
        }}
      >
        {group.tools.map((tool) => (
          <div
            key={tool.name}
            title={tool.name}
            style={{
              width: 38,
              height: 38,
              borderRadius: 8,
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background-color 0.2s ease, border-color 0.2s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.12)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="#F4F2ED"
              style={{ display: "block" }}
            >
              <path d={tool.icon} />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}

'''

full_source = integrations_and_header_code + footer_code

with open(r'c:\Users\Administrator\Asenzo landing page\src\App.jsx', 'w', encoding='utf-8') as f:
    f.write(full_source)

print("Generated App.jsx with 6-group integrations and updated header, lines:", len(full_source.splitlines()))
