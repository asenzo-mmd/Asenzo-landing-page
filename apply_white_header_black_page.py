with open('remaining_components.jsx', 'r', encoding='utf-8') as f:
    remaining_code = f.read()

app_code = '''import React, { useState, useEffect } from "react";

// ==========================================
// ASENZO — PREMIUM IMPLEMENTATION
// 1. White Floating Navbar with Box-Curve CTA & Morphing Glassmorphism
// 2. Completely Black Hero Page (#000000) with 3D Gravitational Perspective Mesh
// 3. Clean Seamless Continuation into Subsequent Sections (Wave Removed)
// ==========================================

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeWorkflowTab, setActiveWorkflowTab] = useState(0);
  const [activeIntegrationCategory, setActiveIntegrationCategory] = useState("All");
  const [isYearlyBilling, setIsYearlyBilling] = useState(true);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // AI Prompt cycling
  const aiPrompts = [
    "Design onboarding flow",
    "Write product launch announcement",
    "Review customer support tickets and identify recurring issues",
    "Update pricing page layout",
    "Synthesize weekly executive summary"
  ];
  const [currentAiPromptIndex, setCurrentAiPromptIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAiPromptIndex((prev) => (prev + 1) % aiPrompts.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  // Scroll Tracking for Morphing Navbar
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 150);
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
      {/* 1. WHITE FLOATING NAVBAR */}
      <AccretionNavbar
        isScrolled={isScrolled}
        onOpenModal={() => setIsModalOpen(true)}
      />

      {/* 2. COMPLETELY BLACK FIRST PAGE (HERO SECTION) */}
      <AccretionHero onOpenModal={() => setIsModalOpen(true)} />

      {/* 3. 4-COLUMN USP TEASERS (BLACK BACKGROUND #000000) */}
      <AccretionUSPTeasers />

      {/* 4. WORKFLOW TABS (How It Works) */}
      <AccretionWorkflowTabs
        activeTab={activeWorkflowTab}
        setActiveTab={setActiveWorkflowTab}
      />

      {/* 5. MOBILE BENTO & SCALABILITY */}
      <AccretionMobileBento />

      {/* 6. ASENZO AI COMMAND CENTER */}
      <AccretionAISection
        currentPrompt={aiPrompts[currentAiPromptIndex]}
        setPromptIndex={setCurrentAiPromptIndex}
        prompts={aiPrompts}
      />

      {/* 7. CONNECT EFFORTLESSLY (Integrations) */}
      <AccretionIntegrations
        activeCategory={activeIntegrationCategory}
        setActiveCategory={setActiveIntegrationCategory}
        onOpenModal={() => setIsModalOpen(true)}
      />

      {/* 8. TESTIMONIALS BENTO GRID */}
      <AccretionTestimonials onOpenModal={() => setIsModalOpen(true)} />

      {/* 9. PRICING TIERS */}
      <AccretionPricing
        isYearly={isYearlyBilling}
        setIsYearly={setIsYearlyBilling}
        onOpenModal={() => setIsModalOpen(true)}
      />

      {/* 10. FAQ ACCORDION */}
      <AccretionFAQ
        openIndex={openFaqIndex}
        setOpenIndex={setOpenFaqIndex}
      />

      {/* 11. SUNSET HORIZON WAVE BOTTOM */}
      <AccretionHorizonWaveBottom />

      {/* 12. FINAL CTA & NEWSLETTER */}
      <AccretionFinalCTA
        email={newsletterEmail}
        setEmail={setNewsletterEmail}
        subscribed={newsletterSubscribed}
        setSubscribed={setNewsletterSubscribed}
        onOpenModal={() => setIsModalOpen(true)}
      />

      {/* 13. FOOTER */}
      <AccretionFooter />

      {/* 14. INTERACTIVE MODAL */}
      {isModalOpen && <DiagnosticModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

// ==========================================
// 1. WHITE FLOATING NAVBAR
// Crisp white background, dark typography, box-curved orange CTA button
// Shrinks smoothly into a compact glassmorphism capsule pill on scroll
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
          gap: isScrolled ? 36 : 28,
          padding: isScrolled ? "6px 8px 6px 26px" : "8px 10px 8px 24px",
          borderRadius: isScrolled ? 9999 : 12,
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.92)" : "#ffffff",
          border: "1px solid rgba(0, 0, 0, 0.08)",
          boxShadow: isScrolled
            ? "0 18px 45px rgba(0, 0, 0, 0.35), 0 2px 8px rgba(0, 0, 0, 0.06)"
            : "0 12px 35px rgba(0, 0, 0, 0.28), 0 2px 6px rgba(0, 0, 0, 0.05)",
          maxWidth: isScrolled ? 680 : 980,
          width: "100%",
          minHeight: isScrolled ? 48 : 56,
          transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)"
        }}
      >
        {/* Brand Logo (Dark text on white header) */}
        <div
          style={{
            overflow: "hidden",
            maxWidth: isScrolled ? 0 : 120,
            opacity: isScrolled ? 0 : 1,
            transform: isScrolled ? "scale(0.85) translateX(-8px)" : "scale(1) translateX(0)",
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
              color: "#0a0a0a",
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
                color: "#0a0a0a"
              }}
            >
              Accretion
            </span>
          </a>
        </div>

        {/* Navigation Links (Dark text on white header) */}
        <div
          className="desktop-only"
          style={{
            display: "flex",
            alignItems: "center",
            gap: isScrolled ? 26 : 30,
            fontSize: 14,
            fontWeight: 500,
            color: "#262626",
            transition: "gap 0.35s ease"
          }}
        >
          {["Features", "Integrations", "Testimonials", "Pricing", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                color: "#262626",
                textDecoration: "none",
                transition: "color 0.2s ease, opacity 0.2s ease",
                whiteSpace: "nowrap"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#000000";
                e.currentTarget.style.opacity = "0.7";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#262626";
                e.currentTarget.style.opacity = "1";
              }}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right CTA Button (Vibrant Orange on White Header, box curve radius 8px) */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <button
            onClick={onOpenModal}
            style={{
              height: isScrolled ? 36 : 40,
              padding: isScrolled ? "0 18px" : "0 22px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
              border: "none",
              backgroundColor: "#f94500",
              color: "#ffffff",
              boxShadow: "0 2px 14px rgba(249, 69, 0, 0.38)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              whiteSpace: "nowrap"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.filter = "brightness(1.08)";
              e.currentTarget.style.boxShadow = "0 4px 18px rgba(249, 69, 0, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.filter = "brightness(1)";
              e.currentTarget.style.boxShadow = "0 2px 14px rgba(249, 69, 0, 0.38)";
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
// 2. COMPLETELY BLACK FIRST PAGE (HERO SECTION)
// Deep black background (#000000), crisp white typography, 3D gravitational mesh with amber glow
// ==========================================
function AccretionHero({ onOpenModal }) {
  return (
    <section
      style={{
        backgroundColor: "#000000",
        color: "#ffffff",
        minHeight: "100vh",
        paddingTop: 155,
        paddingBottom: 80,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start"
      }}
    >
      {/* 3D Gravitational Accretion Mesh Funnel Background */}
      <div
        style={{
          position: "absolute",
          top: 130,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: 1870,
          height: 840,
          pointerEvents: "none",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden"
        }}
      >
        {/* Warm Ambient Orange Glow at Vortex Center */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(36% 28% at 50% 64%, rgba(250, 234, 205, 0.12) 0%, rgba(250, 175, 1, 0.3) 48%, rgba(222, 89, 0, 0.45) 100%)",
            opacity: 0.65,
            zIndex: 1
          }}
        />

        {/* Real Gravitational Perspective Wireframe Mesh SVG */}
        <img
          src="/accretion/hero-mesh.svg"
          alt="Gravitational Accretion Mesh"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "relative",
            zIndex: 2,
            opacity: 0.85,
            filter: "drop-shadow(0 0 15px rgba(249, 69, 0, 0.25))"
          }}
        />
      </div>

      {/* Foreground Content */}
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
        <div style={{ display: "inline-flex", marginBottom: 26 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              padding: "4px 14px 4px 5px",
              borderRadius: 28,
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.14)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)"
            }}
          >
            {/* Left Orange NEW Tag */}
            <div
              style={{
                background: "linear-gradient(112deg, rgb(206, 48, 0) 0%, rgb(255, 133, 47) 100%)",
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
            margin: "0 auto 18px auto",
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
            margin: "0 auto 34px auto"
          }}
        >
          Organize tasks and projects in one connected, accessible platform.
        </p>

        {/* Primary Call-To-Action Button (Box curve radius 8px) */}
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
              transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
              border: "none",
              background: "#ffffff",
              color: "#0a0a0a",
              boxShadow: "0 4px 20px rgba(255, 255, 255, 0.16)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "0 6px 26px rgba(255, 255, 255, 0.26)";
              e.currentTarget.style.backgroundColor = "#f4f4f5";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(255, 255, 255, 0.16)";
              e.currentTarget.style.backgroundColor = "#ffffff";
            }}
          >
            Get started
          </button>
        </div>
      </div>
    </section>
  );
}

''' + remaining_code

with open(r'c:\Users\Administrator\Asenzo landing page\src\App.jsx', 'w', encoding='utf-8') as f:
    f.write(app_code)

print("Updated src/App.jsx successfully, total lines:", len(app_code.splitlines()))
