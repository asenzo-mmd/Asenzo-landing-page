with open('src/App.jsx', 'r', encoding='utf-8') as f:
    code = f.read()

# 1. App wrapper: change backgroundColor to #ffffff, color to #0f0f11, overflowX to clip
code = code.replace(
    'backgroundColor: "#000000",\n        minHeight: "100vh",\n        color: "#ffffff",\n        overflowX: "hidden",',
    'backgroundColor: "#ffffff",\n        minHeight: "100vh",\n        color: "#0f0f11",\n        overflowX: "clip",'
)

# 2. AccretionNavbar:
navbar_old = """function AccretionNavbar({ isScrolled, onOpenModal }) {
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
}"""

navbar_new = """function AccretionNavbar({ isScrolled, onOpenModal }) {
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
}"""

if navbar_old in code:
    code = code.replace(navbar_old, navbar_new)
    print("Updated AccretionNavbar to light mode!")
else:
    print("WARNING: Could not find exact AccretionNavbar block")

# 3. AccretionHero:
hero_old = """function AccretionHero({ onOpenModal }) {
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
}"""

hero_new = """function AccretionHero({ onOpenModal }) {
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
        {/* Subtle Announcement Pill */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "5px 14px",
              borderRadius: 20,
              backgroundColor: "rgba(0, 0, 0, 0.04)",
              border: "1px solid rgba(0, 0, 0, 0.08)",
              fontSize: 12.5,
              fontWeight: 500,
              color: "#27272a"
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
      </div>
    </section>
  );
}"""

if hero_old in code:
    code = code.replace(hero_old, hero_new)
    print("Updated AccretionHero to light mode!")
else:
    print("WARNING: Could not find exact AccretionHero block")

# 4. AsenzoIntegrationsSection: update background to #ffffff, colors, card styling
code = code.replace(
    'backgroundColor: "#090909",\n        color: "#ffffff",\n        paddingTop: 90,',
    'backgroundColor: "#ffffff",\n        color: "#0f0f11",\n        paddingTop: 90,'
)
code = code.replace('color: "#F4F2ED",\n            margin: "0 auto 12px auto",', 'color: "#0f0f11",\n            margin: "0 auto 12px auto",')
code = code.replace('color: "#A5A39F",\n            textAlign: "center",\n            maxWidth: 580,', 'color: "#52525b",\n            textAlign: "center",\n            maxWidth: 580,')

# Update CompactIntegrationCard to white card styling
card_old = """function CompactIntegrationCard({ group }) {
  return (
    <div
      style={{
        backgroundColor: "#131313",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: 14,
        padding: "15px 18px",
        width: 320,
        height: 130,
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "border-color 0.2s ease",
        position: "relative",
        boxSizing: "border-box"
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
            fontSize: 12.5,
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
          fontSize: 11.5,
          lineHeight: 1.4,
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
              width: 27,
              height: 27,
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
              width="13"
              height="13"
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
}"""

card_new = """function CompactIntegrationCard({ group }) {
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
}"""

if card_old in code:
    code = code.replace(card_old, card_new)
    print("Updated CompactIntegrationCard to white card styling!")
else:
    print("WARNING: Could not find exact CompactIntegrationCard block")

# 5. HandHoldingPhoneSection:
code = code.replace(
    "const HandHoldingPhoneSection = () => (\n  <section style={{ backgroundColor: '#000000', padding: '100px 0', borderBottom: '1px solid #1A1A1A', overflow: 'hidden' }}>",
    "const HandHoldingPhoneSection = () => (\n  <section style={{ backgroundColor: '#ffffff', padding: '100px 0', borderBottom: '1px solid #f0f0f0', overflow: 'hidden' }}>"
)
code = code.replace("color: '#F5F5F5',\n          margin: '0 0 32px 0',", "color: '#0f0f11',\n          margin: '0 0 32px 0',")
code = code.replace("color: '#F5F5F5', lineHeight: 1.2 }}>Max Perzon</div>", "color: '#0f0f11', lineHeight: 1.2 }}>Max Perzon</div>")
code = code.replace("color: '#8A8A8A', marginTop: '4px' }}>Founder, Kourse.com</div>", "color: '#71717a', marginTop: '4px' }}>Founder, Kourse.com</div>")

# 6. ThreeWaysToWorkSection:
code = code.replace(
    "const ThreeWaysToWorkSection = ({ onAssessmentClick }) => (\n  <section style={{\n    backgroundColor: '#000000',\n    padding: '120px 24px',\n    borderBottom: '1px solid #1A1A1A'\n  }}>",
    "const ThreeWaysToWorkSection = ({ onAssessmentClick }) => (\n  <section style={{\n    backgroundColor: '#ffffff',\n    padding: '120px 24px',\n    borderBottom: '1px solid #f0f0f0'\n  }}>"
)
code = code.replace("color: '#FFFFFF',\n        marginBottom: '20px',", "color: '#0f0f11',\n        marginBottom: '20px',")
code = code.replace("color: '#8A8A8A',\n        marginBottom: '80px',", "color: '#52525b',\n        marginBottom: '80px',")

# Update cards inside ThreeWaysToWorkSection:
# Standard cards:
code = code.replace("backgroundColor: '#0A0A0C',\n        border: '1px solid #1F1F1F',", "backgroundColor: '#ffffff',\n        border: '1px solid #e4e4e7', boxShadow: '0 8px 30px rgba(0,0,0,0.04)',")
code = code.replace("backgroundColor: '#0D0D10',\n        border: '1px solid #2A2A2A',", "backgroundColor: '#ffffff',\n        border: '2px solid #F16001', boxShadow: '0 12px 36px rgba(241,96,1,0.12)',")
code = code.replace("color: '#F5F5F5',", "color: '#0f0f11',")
code = code.replace("color: '#E0E0E0',", "color: '#27272a',")
code = code.replace("color: '#CCCCCC',", "color: '#3f3f46',")

# 7. LiveIn30DaysTimeline:
code = code.replace(
    "const LiveIn30DaysTimeline = ({ onAssessmentClick }) => (\n  <section style={{ backgroundColor: '#000000', padding: '120px 24px', borderBottom: '1px solid #1A1A1A' }}>",
    "const LiveIn30DaysTimeline = ({ onAssessmentClick }) => (\n  <section style={{ backgroundColor: '#ffffff', padding: '120px 24px', borderBottom: '1px solid #f0f0f0' }}>"
)
code = code.replace("backgroundColor: '#0A0A0C',\n            border: '1px solid #1F1F1F',", "backgroundColor: '#fafafa',\n            border: '1px solid #e4e4e7',")

# 8. GuaranteeBanner:
code = code.replace(
    "const GuaranteeBanner = ({ onAssessmentClick }) => (\n  <section style={{\n    backgroundColor: '#000000',\n    padding: '120px 24px',\n    borderBottom: '1px solid #1C1C1E',",
    "const GuaranteeBanner = ({ onAssessmentClick }) => (\n  <section style={{\n    backgroundColor: '#ffffff',\n    padding: '120px 24px',\n    borderBottom: '1px solid #f0f0f0',"
)
code = code.replace("backgroundColor: '#0D0D0F',\n        border: '1px solid #242426',", "backgroundColor: '#fafafa',\n        border: '1px solid #e4e4e7', boxShadow: '0 8px 30px rgba(0,0,0,0.03)',")

# 9. FAQSection:
code = code.replace(
    "const FAQSection = () => {\n  const [openIdx, setOpenIdx] = useState(null);",
    "const FAQSection = () => {\n  const [openIdx, setOpenIdx] = useState(null);"
)
code = code.replace(
    "<section style={{ backgroundColor: '#000000', padding: '120px 24px', borderBottom: '1px solid #1A1A1A' }}>",
    "<section style={{ backgroundColor: '#ffffff', padding: '120px 24px', borderBottom: '1px solid #f0f0f0' }}>"
)

# 10. FinalCTAHero (Scroll Stop Envelope Card Animation):
envelope_old = """const FinalCTAHero = ({ onAssessmentClick }) => {
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    let animationFrame;
    const handleScroll = () => {
      animationFrame = requestAnimationFrame(() => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();

        // Pinning scroll trigger logic.
        // Triggers exactly when section's top touches viewport top, scrolling OVER the header!
        if (rect.top <= 0) {
          const maxScroll = rect.height - window.innerHeight; // Using viewport math for safe locking duration
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
    <section ref={containerRef} style={{
      background: 'linear-gradient(to bottom, transparent 0%, #000000 15vh, #000000 100%)', // Fades gently over the previous sections instead of an unnatural hard cut
      height: '300vh', // Massive scroll area to deeply isolate this CTA experience
      position: 'relative',
      zIndex: 200 // Paints natively completely ON TOP of the sticky header to swallow it!
    }}>
      {/* Sticky container -> This locks at the viewport roof, creating a 100% immersive fullscreen takeover */}
      <div style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start', // Anchors layout from the top, guaranteeing the top flap is never hidden
        paddingTop: '80px', // Perfect consistent gap from the physical screen top
        zIndex: 1
      }}>
        {/* Background ambient dark gradient modified to 'center' so the glowing aura floats beautifully around the envelope instead of chopping abruptly at the ceiling! */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at center, rgba(30, 10, 0, 0.4) 0%, #000000 65%)', zIndex: 0 }}></div>

        <div style={{
          width: '100%',
          maxWidth: '640px',
          position: 'relative',
          height: '620px', // Exact physical height of envelope base (380) + top flap (240) so Flexbox calculates center gravity accurately
          clipPath: 'inset(-1000px -100px 0px -100px)', // HARD CLIPS bottom edge so the card NEVER leaks below the envelope!
          zIndex: 1
        }}>

          {/* Top Flap (Behind the card) */}
          <svg style={{ position: 'absolute', bottom: '378px', left: 0, right: 0, zIndex: 1 }} width="100%" height="240" viewBox="0 0 640 240" preserveAspectRatio="none">
            <defs>
              <linearGradient id="topFlapGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="rgba(255, 69, 0, 0.12)" />
                <stop offset="100%" stopColor="#0B0B0B" />
              </linearGradient>
            </defs>
            <polygon points="320,0 0,240 640,240" fill="url(#topFlapGrad)" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
          </svg>

          {/* Envelope Back Base */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '380px',
            backgroundColor: '#0B0B0B',
            zIndex: 1
          }}></div>

          {/* The Glowing Card */}
          <div style={{
            position: 'absolute',
            bottom: '-40px', // Exact mathematical placement to sink the card below the top envelope bounds
            left: '32px',
            right: '32px',
            height: '380px', // Ultra dense, deeply embedded layout
            backgroundColor: '#D83300',
            borderRadius: '12px',
            padding: '60px 32px 32px 32px', // Pushes text down perfectly into the visual envelope window
            boxShadow: '0 -20px 60px rgba(255, 69, 0, 0.4)',
            // DWELL TIME LOGIC: card fully pulls out in the first ~40% of the long scrolling journey, leaving 60% of purely frozen dead-scroll to comfortably read it.
            transform: `translateY(${0 - (Math.min(scrollProgress * 2.5, 1) * 140)}px)`,
            transition: 'transform 0.05s linear',

            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            borderTop: '1px solid rgba(255,200,150,0.5)',
            borderLeft: '1px solid rgba(255,100,50,0.2)',
            borderRight: '1px solid rgba(255,100,50,0.2)'
          }}>
            {/* Accent corners */}
            <div style={{ position: 'absolute', top: '24px', left: '24px', width: '12px', height: '12px', borderTop: '2px solid rgba(255,255,255,0.5)', borderLeft: '2px solid rgba(255,255,255,0.5)' }}></div>
            <div style={{ position: 'absolute', top: '24px', right: '24px', width: '12px', height: '12px', borderTop: '2px solid rgba(255,255,255,0.5)', borderRight: '2px solid rgba(255,255,255,0.5)' }}></div>

            <div style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF', marginBottom: '24px', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '22px', height: '22px', backgroundColor: '#FFF', borderRadius: '4px', color: '#CC2200', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 800 }}>H✦</div>
              asenzo
            </div>

            <h2 style={{
              fontSize: 'clamp(24px, 3.5vw, 32px)',
              fontWeight: 500,
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              color: '#FFFFFF',
              marginBottom: '16px',
              maxWidth: '460px',
              textAlign: 'center'
            }}>
              Let AI do the Work so you can Scale Faster.
            </h2>

            <p style={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.95)',
              marginBottom: '32px',
              lineHeight: 1.5,
              fontWeight: 400,
              maxWidth: '380px',
              textAlign: 'center'
            }}>
              Book a Call Today and Start Automating.
            </p>

            <button onClick={onAssessmentClick} style={{
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
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }} onMouseOver={(e) => { e.target.style.backgroundColor = '#E5E5E5'; }} onMouseOut={(e) => { e.target.style.backgroundColor = '#FFFFFF'; }}>
              Book a free call
            </button>
          </div>

          {/* Envelope Front SVG */}
          <svg style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 3, pointerEvents: 'none' }} width="100%" height="380" viewBox="0 0 640 380" preserveAspectRatio="none">
            <defs>
              <filter id="envelopeShadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="-4" stdDeviation="6" floodColor="#000000" floodOpacity="0.5" />
              </filter>
            </defs>
            <polygon points="0,0 320,280 640,0 640,380 0,380" fill="#0C0C0C" stroke="rgba(255,255,255,0.06)" strokeWidth="1" filter="url(#envelopeShadow)" />
            <polygon points="0,380 320,280 640,380" fill="#111111" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          </svg>

        </div>
      </div>
    </section>
  );
};"""

envelope_new = """const FinalCTAHero = ({ onAssessmentClick }) => {
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
};"""

if envelope_old in code:
    code = code.replace(envelope_old, envelope_new)
    print("Updated FinalCTAHero with verified scroll stop animation!")
else:
    print("WARNING: Could not find exact FinalCTAHero block")

# 11. CalendarBookingSection:
code = code.replace(
    "const CalendarBookingSection = ({ onAssessmentClick }) => {\n  const [selectedDate, setSelectedDate] = useState(20);",
    "const CalendarBookingSection = ({ onAssessmentClick }) => {\n  const [selectedDate, setSelectedDate] = useState(20);"
)
code = code.replace(
    "<section style={{ backgroundColor: '#000000', padding: '120px 24px', borderBottom: '1px solid #1A1A1A' }}>",
    "<section style={{ backgroundColor: '#ffffff', padding: '120px 24px', borderBottom: '1px solid #f0f0f0' }}>"
)
code = code.replace("backgroundColor: '#0D0D10',\n        border: '1px solid #222222',", "backgroundColor: '#ffffff',\n        border: '1px solid #e4e4e7', boxShadow: '0 10px 40px rgba(0,0,0,0.05)',")

# 12. MasterFooter:
code = code.replace(
    "const MasterFooter = ({ onAssessmentClick }) => (\n  <footer style={{ backgroundColor: '#000000', borderTop: '1px solid #1A1A1A', paddingTop: '64px', paddingBottom: '32px', overflow: 'hidden' }}>",
    "const MasterFooter = ({ onAssessmentClick }) => (\n  <footer style={{ backgroundColor: '#fafafa', borderTop: '1px solid #e4e4e7', paddingTop: '64px', paddingBottom: '32px', overflow: 'hidden' }}>"
)
code = code.replace("color: '#1A1A1A',", "color: 'rgba(0, 0, 0, 0.05)',")
code = code.replace("color: '#A0A0A0',", "color: '#52525b',")

with open('src/App.jsx', 'w', encoding='utf-8') as f:
    f.write(code)

print("Saved updated src/App.jsx for white mode! Total length:", len(code))
