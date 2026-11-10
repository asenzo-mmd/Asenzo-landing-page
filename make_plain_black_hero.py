with open(r'c:\Users\Administrator\Asenzo landing page\src\App.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace AccretionHero to remove mesh and all background gradients
old_hero_start = content.find('function AccretionHero({ onOpenModal }) {')
old_hero_end = content.find('// ==========================================\n// 4. 4-COLUMN USP TEASERS')

new_hero = '''function AccretionHero({ onOpenModal }) {
  return (
    <section
      style={{
        backgroundColor: "#000000",
        color: "#ffffff",
        minHeight: "100vh",
        paddingTop: 165,
        paddingBottom: 90,
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

if old_hero_start != -1 and old_hero_end != -1:
    updated = content[:old_hero_start] + new_hero + content[old_hero_end:]
    with open(r'c:\Users\Administrator\Asenzo landing page\src\App.jsx', 'w', encoding='utf-8') as f:
        f.write(updated)
    print("Replaced AccretionHero with plain black hero (no gradients, no mesh)!")
else:
    print(f"Error finding positions: start={old_hero_start}, end={old_hero_end}")
