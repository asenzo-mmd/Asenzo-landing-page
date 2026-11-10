import re

with open('remaining_components.jsx', 'r', encoding='utf-8') as f:
    remaining_code = f.read()

app_code = '''import React, { useState, useEffect, useRef } from "react";

// ==========================================
// ASENZO — PREMIUM EXPERT IMPLEMENTATION
// 1. Morphing Glassmorphism Floating Navbar
// 2. Exact Accretion Hero (3D Gravitational Mesh, #FFFFFF Background)
// 3. Signature Scroll-Linked Horizon Wave Transition (Exact 4 Colors, SVG Geometry & Motion)
// 4. Seamless Continuation into Black Sections
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

  // Scroll Tracking for Morphing Navbar and Global Parallax
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
      {/* 1. MORPHING GLASSMORPHISM FLOATING NAVBAR */}
      <AccretionNavbar
        isScrolled={isScrolled}
        onOpenModal={() => setIsModalOpen(true)}
      />

      {/* 2. EXACT HERO SECTION WITH 3D GRAVITATIONAL MESH (WHITE BACKGROUND #FFFFFF) */}
      <AccretionHero onOpenModal={() => setIsModalOpen(true)} />

      {/* 3. SIGNATURE SCROLL-LINKED HORIZON WAVE TRANSITION */}
      <SignatureScrollWaveTransition />

      {/* 4. 4-COLUMN USP TEASERS (BLACK BACKGROUND #000000) */}
      <AccretionUSPTeasers />

      {/* 5. WORKFLOW TABS (How It Works) */}
      <AccretionWorkflowTabs
        activeTab={activeWorkflowTab}
        setActiveTab={setActiveWorkflowTab}
      />

      {/* 6. MOBILE BENTO & SCALABILITY */}
      <AccretionMobileBento />

      {/* 7. ASENZO AI COMMAND CENTER */}
      <AccretionAISection
        currentPrompt={aiPrompts[currentAiPromptIndex]}
        setPromptIndex={setCurrentAiPromptIndex}
        prompts={aiPrompts}
      />

      {/* 8. CONNECT EFFORTLESSLY (Integrations) */}
      <AccretionIntegrations
        activeCategory={activeIntegrationCategory}
        setActiveCategory={setActiveIntegrationCategory}
        onOpenModal={() => setIsModalOpen(true)}
      />

      {/* 9. TESTIMONIALS BENTO GRID */}
      <AccretionTestimonials onOpenModal={() => setIsModalOpen(true)} />

      {/* 10. PRICING TIERS */}
      <AccretionPricing
        isYearly={isYearlyBilling}
        setIsYearly={setIsYearlyBilling}
        onOpenModal={() => setIsModalOpen(true)}
      />

      {/* 11. FAQ ACCORDION */}
      <AccretionFAQ
        openIndex={openFaqIndex}
        setOpenIndex={setOpenFaqIndex}
      />

      {/* 12. SUNSET HORIZON WAVE BOTTOM */}
      <AccretionHorizonWaveBottom />

      {/* 13. FINAL CTA & NEWSLETTER */}
      <AccretionFinalCTA
        email={newsletterEmail}
        setEmail={setNewsletterEmail}
        subscribed={newsletterSubscribed}
        setSubscribed={setNewsletterSubscribed}
        onOpenModal={() => setIsModalOpen(true)}
      />

      {/* 14. FOOTER */}
      <AccretionFooter />

      {/* 15. INTERACTIVE MODAL */}
      {isModalOpen && <DiagnosticModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

// ==========================================
// 1. MORPHING GLASSMORPHISM FLOATING NAVBAR
// Transitions between full 980px bar (top) and compact 680px blurred glass capsule (scrolled)
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
          gap: isScrolled ? 36 : 24,
          padding: isScrolled ? "6px 8px 6px 26px" : "8px 10px 8px 24px",
          borderRadius: isScrolled ? 9999 : 12,
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          backgroundColor: isScrolled ? "rgba(55, 55, 55, 0.74)" : "rgba(23, 23, 23, 0.95)",
          border: isScrolled ? "1px solid rgba(255, 255, 255, 0.16)" : "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: isScrolled
            ? "0 18px 42px rgba(0, 0, 0, 0.55), inset 0 1px 1px rgba(255, 255, 255, 0.18)"
            : "0 12px 35px rgba(0, 0, 0, 0.45)",
          maxWidth: isScrolled ? 680 : 980,
          width: "100%",
          minHeight: isScrolled ? 48 : 56,
          transition: "all 0.38s cubic-bezier(0.16, 1, 0.3, 1)"
        }}
      >
        {/* Brand Logo (Smoothly fades out and collapses when scrolled) */}
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
            gap: isScrolled ? 26 : 30,
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

        {/* Right CTA Button */}
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
              boxShadow: "0 2px 14px rgba(249, 69, 0, 0.4)",
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
              e.currentTarget.style.boxShadow = "0 2px 14px rgba(249, 69, 0, 0.4)";
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
// 2. HERO SECTION (100% Exact White Background with 3D Gravitational Mesh)
// ==========================================
function AccretionHero({ onOpenModal }) {
  return (
    <section
      style={{
        backgroundColor: "#FFFFFF",
        color: "#0a0a0a",
        minHeight: "100vh",
        paddingTop: 145,
        paddingBottom: 60,
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
            background: "radial-gradient(36% 28% at 50% 64%, #faeacd 0%, #faaf01 48%, #de5900 100%)",
            opacity: 0.35,
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
            opacity: 0.95
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
              background: "radial-gradient(50% 10% at 50% 100%, rgb(255, 234, 210) 0%, rgb(255, 255, 255) 100%)",
              border: "1px solid rgba(0, 0, 0, 0.12)",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.03)"
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
                color: "#404040",
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
            color: "#0a0a0a",
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
            color: "#525252",
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
              background: "linear-gradient(180deg, rgb(38, 38, 38) 0%, rgb(15, 15, 15) 100%)",
              color: "#ffffff",
              boxShadow: "0 4px 18px rgba(0, 0, 0, 0.2)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "0 6px 22px rgba(0, 0, 0, 0.28)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 18px rgba(0, 0, 0, 0.2)";
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
// 3. SIGNATURE SCROLL-LINKED HORIZON WAVE TRANSITION
// Exact 4 Colors: #000000 (Black), #C10801 (Deep Red), #F16001 (Orange), #D9C3AB (Warm Beige)
// Smooth continuous scroll tracking, upward motion, organic SVG geometry, and layered illumination
// ==========================================
function SignatureScrollWaveTransition() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Transition spans as the transition enters viewport:
            // Starts when top of section is at windowHeight
            // Completes when top of section has moved up through windowHeight * 0.75
            const totalDistance = windowHeight * 0.85;
            const currentDistance = windowHeight - rect.top;
            const rawProgress = currentDistance / totalDistance;
            const clamped = Math.max(0, Math.min(1, rawProgress));

            setProgress(clamped);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Motion physics tied directly to scroll progress:
  // - Initial state (progress = 0): wave is translated down by 140px, sitting at the bottom boundary
  // - Scroll downward (progress -> 1): wave glides smoothly upward to 0px
  // - Slight organic crest surge (scaleY increases from 0.90 to 1.04)
  // - Glow illumination intensity expands from 0.7 to 1.0
  const translateY = (1 - progress) * 140;
  const scaleY = 0.90 + progress * 0.14;
  const glowOpacity = 0.65 + progress * 0.35;

  return (
    <div
      ref={containerRef}
      style={{
        backgroundColor: "#000000",
        position: "relative",
        marginTop: -60,
        zIndex: 20,
        overflow: "visible",
        pointerEvents: "none"
      }}
    >
      {/* Scroll-Driven Wave Layer */}
      <div
        style={{
          transform: `translateY(${translateY}px) scaleY(${scaleY})`,
          transformOrigin: "bottom center",
          willChange: "transform, opacity",
          transition: "transform 0.08s linear",
          width: "100%",
          position: "relative"
        }}
      >
        {/* Floating Centered Accent Badge */}
        <div
          style={{
            position: "absolute",
            top: 24,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 30,
            opacity: Math.max(0, (progress - 0.2) * 1.25),
            transition: "opacity 0.2s ease"
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
              borderRadius: 20,
              backgroundColor: "rgba(18, 18, 18, 0.88)",
              border: "1px solid rgba(241, 96, 1, 0.3)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.5), 0 0 16px rgba(241, 96, 1, 0.2)",
              fontSize: 12.5,
              fontWeight: 600,
              color: "#F16001",
              letterSpacing: "0.02em"
            }}
          >
            <span>✦ Everything in one connected system</span>
          </div>
        </div>

        {/* Master SVG Horizon Wave with Exact 4-Color Gradient & Multi-Layer Glow */}
        <div
          style={{
            width: "100%",
            height: "clamp(240px, 24vw, 420px)",
            position: "relative"
          }}
        >
          <svg
            viewBox="0 0 1920 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{
              width: "100%",
              height: "100%",
              display: "block",
              overflow: "visible"
            }}
          >
            <defs>
              {/* Blur Filters for the Multi-Layer Atmospheric Illumination */}
              <filter id="softBeigeGlow" x="-20%" y="-40%" width="140%" height="180%">
                <feGaussianBlur stdDeviation="34" result="blur" />
              </filter>
              <filter id="brightOrangeGlow" x="-20%" y="-40%" width="140%" height="180%">
                <feGaussianBlur stdDeviation="18" result="blur" />
              </filter>
              <filter id="deepRedGlow" x="-20%" y="-40%" width="140%" height="180%">
                <feGaussianBlur stdDeviation="8" result="blur" />
              </filter>

              {/* Exact Vertical Color Progression:
                  Warm Beige (#D9C3AB) -> Bright Orange (#F16001) -> Deep Red (#C10801) -> Black (#000000) */}
              <linearGradient id="waveSunsetGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#D9C3AB" stopOpacity="0.95" />
                <stop offset="14%" stopColor="#F16001" stopOpacity="1" />
                <stop offset="38%" stopColor="#C10801" stopOpacity="1" />
                <stop offset="72%" stopColor="#120203" stopOpacity="1" />
                <stop offset="100%" stopColor="#000000" stopOpacity="1" />
              </linearGradient>

              {/* Horizontal Gradient along the curved crest for organic lighting falloff at edges */}
              <linearGradient id="crestRimGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C10801" stopOpacity="0" />
                <stop offset="18%" stopColor="#C10801" stopOpacity="0.4" />
                <stop offset="36%" stopColor="#F16001" stopOpacity="0.88" />
                <stop offset="50%" stopColor="#D9C3AB" stopOpacity="1" />
                <stop offset="64%" stopColor="#F16001" stopOpacity="0.88" />
                <stop offset="82%" stopColor="#C10801" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#C10801" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* LAYER 4: Soft Warm Beige Outer Ambient Illumination (#D9C3AB) */}
            <path
              d="M -40 420 C 440 400, 480 48, 960 45 C 1440 48, 1480 400, 1960 420"
              fill="none"
              stroke="#D9C3AB"
              strokeWidth="34"
              opacity={0.48 * glowOpacity}
              filter="url(#softBeigeGlow)"
            />

            {/* LAYER 3: Bright Orange Illumination (#F16001) */}
            <path
              d="M -30 420 C 440 400, 480 46, 960 45 C 1440 46, 1480 400, 1950 420"
              fill="none"
              stroke="#F16001"
              strokeWidth="20"
              opacity={0.82 * glowOpacity}
              filter="url(#brightOrangeGlow)"
            />

            {/* LAYER 2: Deep Red Illumination (#C10801) */}
            <path
              d="M -20 420 C 440 400, 480 45, 960 45 C 1440 45, 1480 400, 1940 420"
              fill="none"
              stroke="#C10801"
              strokeWidth="10"
              opacity={0.95 * glowOpacity}
              filter="url(#deepRedGlow)"
            />

            {/* LAYER 1: Deep Black Base with Multi-Stop Sunset Color Progression */}
            <path
              d="M 0 420 C 440 400, 480 45, 960 45 C 1440 45, 1480 400, 1920 420 L 1920 440 L 0 440 Z"
              fill="url(#waveSunsetGradient)"
            />

            {/* Crisp 2.5px Rim Highlight Stroke along the curve crest */}
            <path
              d="M 0 420 C 440 400, 480 45, 960 45 C 1440 45, 1480 400, 1920 420"
              fill="none"
              stroke="url(#crestRimGradient)"
              strokeWidth="2.5"
              opacity={0.96 * glowOpacity}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

''' + remaining_code

with open(r'c:\Users\Administrator\Asenzo landing page\src\App.jsx', 'w', encoding='utf-8') as f:
    f.write(app_code)

print("Updated src/App.jsx successfully, total lines:", len(app_code.splitlines()))
