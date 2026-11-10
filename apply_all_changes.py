with open(r'c:\Users\Administrator\Asenzo landing page\src\App.jsx', 'r', encoding='utf-8') as f:
    full_code = f.read()

# 1. Find AccretionUSPTeasers
pos_usp = full_code.find('function AccretionUSPTeasers')
pos_workflow = full_code.find('function AccretionWorkflowTabs')
pos_integ = full_code.find('function AccretionIntegrations')

# We keep from AccretionUSPTeasers up to AccretionWorkflowTabs
usp_code = full_code[pos_usp:pos_workflow]

# We keep from AccretionIntegrations to the end
after_integ_code = full_code[pos_integ:]

app_and_nav_and_hero = '''import React, { useState, useEffect } from "react";

// ==========================================
// ASENZO — PREMIUM MINIMALIST IMPLEMENTATION
// 1. Grey Glassmorphism Navbar (Fixed Box Curve Radius 12px, Left Shortens on Shrink)
// 2. Completely Plain Black Hero Page (#000000, Zero Gradients, Zero Mesh)
// 3. Clean Modular Sections (Workflow, Bento & AI Sections Removed)
// ==========================================

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIntegrationCategory, setActiveIntegrationCategory] = useState("All");
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
          setIsScrolled(window.scrollY > 140);
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
      {/* 1. GREY GLASSMORPHISM FLOATING NAVBAR */}
      <AccretionNavbar
        isScrolled={isScrolled}
        onOpenModal={() => setIsModalOpen(true)}
      />

      {/* 2. COMPLETELY PLAIN BLACK HERO PAGE (ZERO GRADIENTS) */}
      <AccretionHero onOpenModal={() => setIsModalOpen(true)} />

      {/* 3. 4-COLUMN USP TEASERS */}
      <AccretionUSPTeasers />

      {/* 4. CONNECT EFFORTLESSLY (Integrations) */}
      <AccretionIntegrations
        activeCategory={activeIntegrationCategory}
        setActiveCategory={setActiveIntegrationCategory}
        onOpenModal={() => setIsModalOpen(true)}
      />

      {/* 5. TESTIMONIALS BENTO GRID */}
      <AccretionTestimonials onOpenModal={() => setIsModalOpen(true)} />

      {/* 6. PRICING TIERS */}
      <AccretionPricing
        isYearly={isYearlyBilling}
        setIsYearly={setIsYearlyBilling}
        onOpenModal={() => setIsModalOpen(true)}
      />

      {/* 7. FAQ ACCORDION */}
      <AccretionFAQ
        openIndex={openFaqIndex}
        setOpenIndex={setOpenFaqIndex}
      />

      {/* 8. SUNSET HORIZON WAVE BOTTOM */}
      <AccretionHorizonWaveBottom />

      {/* 9. FINAL CTA & NEWSLETTER */}
      <AccretionFinalCTA
        email={newsletterEmail}
        setEmail={setNewsletterEmail}
        subscribed={newsletterSubscribed}
        setSubscribed={setNewsletterSubscribed}
        onOpenModal={() => setIsModalOpen(true)}
      />

      {/* 10. FOOTER */}
      <AccretionFooter />

      {/* 11. INTERACTIVE MODAL */}
      {isModalOpen && <DiagnosticModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

// ==========================================
// 1. GREY GLASSMORPHISM FLOATING NAVBAR
// Fixed box curve radius (12px) in both states
// When scrolled: Left side becomes shorter (logo collapses), maintaining the exact same curve radius
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
          padding: isScrolled ? "8px 10px 8px 20px" : "8px 10px 8px 24px",
          borderRadius: 12, // EXACT SAME BOX CURVE RADIUS in both normal and shrunk states!
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          backgroundColor: isScrolled ? "rgba(50, 50, 50, 0.72)" : "rgba(42, 42, 42, 0.78)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow: isScrolled
            ? "0 16px 40px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.15)"
            : "0 12px 35px rgba(0, 0, 0, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.12)",
          maxWidth: isScrolled ? 640 : 980,
          width: "100%",
          minHeight: 56,
          transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)"
        }}
      >
        {/* Brand Logo: When shrunk, the left becomes shorter (collapses smoothly) */}
        <div
          style={{
            overflow: "hidden",
            maxWidth: isScrolled ? 0 : 120,
            opacity: isScrolled ? 0 : 1,
            transform: isScrolled ? "scale(0.85) translateX(-10px)" : "scale(1) translateX(0)",
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

        {/* Right CTA Button (Box curve radius 8px) */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <button
            onClick={onOpenModal}
            style={{
              height: 40,
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
// 2. COMPLETELY PLAIN BLACK HERO SECTION
// Pure solid black background (#000000), zero background gradients, zero mesh
// Crisp typography & box-curved buttons
// ==========================================
function AccretionHero({ onOpenModal }) {
  return (
    <section
      style={{
        backgroundColor: "#000000",
        color: "#ffffff",
        minHeight: "100vh",
        paddingTop: 175,
        paddingBottom: 100,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start"
      }}
    >
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
              boxShadow: "0 4px 18px rgba(255, 255, 255, 0.12)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "0 6px 24px rgba(255, 255, 255, 0.22)";
              e.currentTarget.style.backgroundColor = "#f4f4f5";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 18px rgba(255, 255, 255, 0.12)";
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

'''

final_code = app_and_nav_and_hero + usp_code + after_integ_code

with open(r'c:\Users\Administrator\Asenzo landing page\src\App.jsx', 'w', encoding='utf-8') as f:
    f.write(final_code)

print("Generated clean App.jsx successfully, total lines:", len(final_code.splitlines()))
