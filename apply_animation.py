import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('src/App.jsx', 'r', encoding='utf-8') as f:
    app = f.read()

# Define the MarketAuthorityAnimation component
component_code = '''// Motion Component: Market Positioning & Authority (Layer 01)
const MarketAuthorityAnimation = () => {
  return (
    <div style={{
      width: '100%',
      height: '380px',
      backgroundColor: '#0A0A0C',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      borderRadius: '12px',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.05)'
    }}>
      <style>{`
        @keyframes subtlePulse {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.28; transform: scale(1.08); }
        }
        @keyframes centralBeacon {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.15); opacity: 1; }
        }
        @keyframes ringExpand1 {
          0%, 12% { transform: scale(0.65); opacity: 0; }
          22% { opacity: 0.8; }
          45%, 72% { transform: scale(1); opacity: 0.6; }
          86%, 100% { transform: scale(1.1); opacity: 0; }
        }
        @keyframes ringExpand2 {
          0%, 20% { transform: scale(0.65); opacity: 0; }
          32% { opacity: 0.7; }
          52%, 72% { transform: scale(1); opacity: 0.45; }
          88%, 100% { transform: scale(1.12); opacity: 0; }
        }
        @keyframes ringExpand3 {
          0%, 28% { transform: scale(0.65); opacity: 0; }
          40% { opacity: 0.6; }
          58%, 72% { transform: scale(1); opacity: 0.35; }
          90%, 100% { transform: scale(1.14); opacity: 0; }
        }
        @keyframes lineDeploy {
          0%, 35% { stroke-dashoffset: 160; opacity: 0; }
          48% { opacity: 0.8; }
          58%, 76% { stroke-dashoffset: 0; opacity: 0.55; }
          88%, 100% { stroke-dashoffset: -160; opacity: 0; }
        }
        @keyframes nodeReveal {
          0%, 46% { opacity: 0; transform: scale(0.4); }
          56%, 76% { opacity: 0.9; transform: scale(1); }
          88%, 100% { opacity: 0; transform: scale(0.6); }
        }
        @keyframes noiseDrift {
          0% { opacity: 0.15; transform: translate(0, 0); }
          25% { opacity: 0.4; transform: translate(-3px, 4px); }
          50% { opacity: 0.15; transform: translate(4px, -3px); }
          75% { opacity: 0.35; transform: translate(-2px, -2px); }
          100% { opacity: 0.15; transform: translate(0, 0); }
        }
        @keyframes convergingMotion {
          0%, 10% { transform: scale(1.28); opacity: 0.18; }
          32%, 74% { transform: scale(1); opacity: 0.55; }
          90%, 100% { transform: scale(1.22); opacity: 0.18; }
        }
        @media (prefers-reduced-motion: reduce) {
          .market-anim * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      {/* SVG Motion Canvas */}
      <svg
        className="market-anim"
        viewBox="0 0 460 380"
        preserveAspectRatio="xMidYMid meet"
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        <defs>
          {/* Subtle Radial Atmosphere */}
          <radialGradient id="centerAmbience" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.12" />
            <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          {/* Grid Pattern */}
          <pattern id="subtleGrid" width="36" height="36" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="36" y2="0" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            <line x1="0" y1="0" x2="0" y2="36" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          </pattern>
        </defs>

        {/* 1. Underlying Precision Architectural Grid */}
        <rect width="460" height="380" fill="url(#subtleGrid)" />

        {/* Architectural Framing Coordinate Crosshairs (Swiss Typography Aesthetic) */}
        <g stroke="rgba(255,255,255,0.18)" strokeWidth="1">
          {/* Top Left */}
          <line x1="28" y1="28" x2="40" y2="28" />
          <line x1="28" y1="28" x2="28" y2="40" />
          {/* Bottom Right */}
          <line x1="432" y1="352" x2="420" y2="352" />
          <line x1="432" y1="352" x2="432" y2="340" />
          {/* Subtle coordinate ticks */}
          <line x1="230" y1="32" x2="230" y2="38" stroke="rgba(255,255,255,0.22)" />
          <line x1="230" y1="342" x2="230" y2="348" stroke="rgba(255,255,255,0.22)" />
          <line x1="32" y1="190" x2="38" y2="190" stroke="rgba(255,255,255,0.22)" />
          <line x1="422" y1="190" x2="428" y2="190" stroke="rgba(255,255,255,0.22)" />
        </g>

        {/* Background Ambient Glow centered on authority beacon */}
        <circle cx="230" cy="190" r="140" fill="url(#centerAmbience)" style={{ animation: 'subtlePulse 12s ease-in-out infinite' }} />

        {/* 2. STAGE 01 — THE SCATTERED MARKET SIGNALS (Background noise converging to order) */}
        <g style={{ animation: 'noiseDrift 14s ease-in-out infinite' }}>
          {/* Outer diffuse market points */}
          <circle cx="70" cy="80" r="1.5" fill="#FFFFFF" opacity="0.25" />
          <circle cx="95" cy="150" r="1" fill="#FFFFFF" opacity="0.18" />
          <circle cx="60" cy="270" r="1.5" fill="#FFFFFF" opacity="0.2" />
          <circle cx="110" cy="310" r="1.5" fill="#FFFFFF" opacity="0.25" />
          <circle cx="130" cy="90" r="1.5" fill="#FFFFFF" opacity="0.3" />
          <circle cx="370" cy="75" r="1.5" fill="#FFFFFF" opacity="0.22" />
          <circle cx="400" cy="160" r="1.5" fill="#FFFFFF" opacity="0.25" />
          <circle cx="360" cy="280" r="1.5" fill="#FFFFFF" opacity="0.3" />
          <circle cx="390" cy="315" r="1" fill="#FFFFFF" opacity="0.18" />
          <circle cx="330" cy="100" r="1.5" fill="#FFFFFF" opacity="0.28" />

          {/* Micro geometric noise ticks */}
          <line x1="75" y1="210" x2="83" y2="210" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <line x1="380" y1="220" x2="388" y2="220" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <line x1="160" y1="55" x2="160" y2="63" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <line x1="300" y1="330" x2="300" y2="338" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        </g>

        {/* Converging Inward Market Signals (Stage 01 to 02 Transition) */}
        <g style={{ transformOrigin: '230px 190px', animation: 'convergingMotion 12s cubic-bezier(0.4, 0, 0.2, 1) infinite' }}>
          {/* Inner ring of competing signals that organize toward center */}
          <circle cx="160" cy="140" r="1.5" fill="#FFFFFF" opacity="0.4" />
          <circle cx="300" cy="140" r="1.5" fill="#FFFFFF" opacity="0.4" />
          <circle cx="160" cy="240" r="1.5" fill="#FFFFFF" opacity="0.4" />
          <circle cx="300" cy="240" r="1.5" fill="#FFFFFF" opacity="0.4" />
          <circle cx="230" cy="115" r="1.5" fill="#FFFFFF" opacity="0.45" />
          <circle cx="230" cy="265" r="1.5" fill="#FFFFFF" opacity="0.45" />
          <circle cx="145" cy="190" r="1.5" fill="#FFFFFF" opacity="0.45" />
          <circle cx="315" cy="190" r="1.5" fill="#FFFFFF" opacity="0.45" />

          {/* Faint radial alignment rays */}
          <line x1="180" y1="160" x2="210" y2="178" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" strokeDasharray="2 3" />
          <line x1="280" y1="160" x2="250" y2="178" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" strokeDasharray="2 3" />
          <line x1="180" y1="220" x2="210" y2="202" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" strokeDasharray="2 3" />
          <line x1="280" y1="220" x2="250" y2="202" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" strokeDasharray="2 3" />
        </g>

        {/* 3. STAGE 02 — DIFFERENTIATION (Concentric geometric outlines forming distinction) */}
        {/* Ring 3 (Outer precision dashed contour) */}
        <circle
          cx="230"
          cy="190"
          r="84"
          fill="none"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="0.8"
          strokeDasharray="4 6"
          style={{ transformOrigin: '230px 190px', animation: 'ringExpand3 12s cubic-bezier(0.25, 1, 0.5, 1) infinite' }}
        />

        {/* Ring 2 (Middle fine hairline contour) */}
        <circle
          cx="230"
          cy="190"
          r="54"
          fill="none"
          stroke="rgba(255,255,255,0.38)"
          strokeWidth="1"
          style={{ transformOrigin: '230px 190px', animation: 'ringExpand2 12s cubic-bezier(0.25, 1, 0.5, 1) infinite' }}
        />

        {/* Ring 1 (Inner core definition diamond & ring) */}
        <rect
          x="202"
          y="162"
          width="56"
          height="56"
          fill="none"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="0.8"
          transform="rotate(45 230 190)"
          style={{ transformOrigin: '230px 190px', animation: 'ringExpand1 12s cubic-bezier(0.25, 1, 0.5, 1) infinite' }}
        />
        <circle
          cx="230"
          cy="190"
          r="26"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.2"
          style={{ transformOrigin: '230px 190px', animation: 'ringExpand1 12s cubic-bezier(0.25, 1, 0.5, 1) infinite' }}
        />

        {/* 4. STAGE 03 — MESSAGING HIERARCHY (Structured directional communication pathways) */}
        {/* Pathway 1: North-East (Strategic Positioning) */}
        <line
          x1="248"
          y1="172"
          x2="335"
          y2="108"
          stroke="#FFFFFF"
          strokeWidth="1"
          strokeDasharray="160"
          style={{ animation: 'lineDeploy 12s cubic-bezier(0.4, 0, 0.2, 1) infinite' }}
        />
        <g style={{ transformOrigin: '335px 108px', animation: 'nodeReveal 12s ease-out infinite' }}>
          <circle cx="335" cy="108" r="3.5" fill="#FFFFFF" />
          <circle cx="335" cy="108" r="7.5" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="0.8" />
          <line x1="344" y1="108" x2="368" y2="108" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
        </g>

        {/* Pathway 2: South-East (Differentiation Vector) */}
        <line
          x1="248"
          y1="208"
          x2="335"
          y2="272"
          stroke="#FFFFFF"
          strokeWidth="1"
          strokeDasharray="160"
          style={{ animation: 'lineDeploy 12s cubic-bezier(0.4, 0, 0.2, 1) infinite' }}
        />
        <g style={{ transformOrigin: '335px 272px', animation: 'nodeReveal 12s ease-out infinite' }}>
          <circle cx="335" cy="272" r="3.5" fill="#FFFFFF" />
          <circle cx="335" cy="272" r="7.5" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="0.8" />
          <line x1="344" y1="272" x2="368" y2="272" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
        </g>

        {/* Pathway 3: West-South-West (Buyer Alignment) */}
        <line
          x1="212"
          y1="198"
          x2="125"
          y2="242"
          stroke="#FFFFFF"
          strokeWidth="1"
          strokeDasharray="160"
          style={{ animation: 'lineDeploy 12s cubic-bezier(0.4, 0, 0.2, 1) infinite' }}
        />
        <g style={{ transformOrigin: '125px 242px', animation: 'nodeReveal 12s ease-out infinite' }}>
          <circle cx="125" cy="242" r="3.5" fill="#FFFFFF" />
          <circle cx="125" cy="242" r="7.5" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="0.8" />
          <line x1="95" y1="242" x2="117" y2="242" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
        </g>

        {/* Pathway 4: West-North-West (Market Authority) */}
        <line
          x1="212"
          y1="182"
          x2="125"
          y2="138"
          stroke="#FFFFFF"
          strokeWidth="1"
          strokeDasharray="160"
          style={{ animation: 'lineDeploy 12s cubic-bezier(0.4, 0, 0.2, 1) infinite' }}
        />
        <g style={{ transformOrigin: '125px 138px', animation: 'nodeReveal 12s ease-out infinite' }}>
          <circle cx="125" cy="138" r="3.5" fill="#FFFFFF" />
          <circle cx="125" cy="138" r="7.5" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="0.8" />
          <line x1="95" y1="138" x2="117" y2="138" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
        </g>

        {/* 5. THE CENTRAL AUTHORITY BEACON (Primary focal anchor) */}
        <g style={{ transformOrigin: '230px 190px', animation: 'centralBeacon 12s ease-in-out infinite' }}>
          {/* Subtle outer solid micro-ring */}
          <circle cx="230" cy="190" r="10" fill="none" stroke="#FFFFFF" strokeWidth="1.2" />
          {/* Concentric solid core anchor */}
          <circle cx="230" cy="190" r="4.5" fill="#FFFFFF" />
          {/* Vertical and horizontal central cross-hairs */}
          <line x1="230" y1="172" x2="230" y2="178" stroke="#FFFFFF" strokeWidth="1" />
          <line x1="230" y1="202" x2="230" y2="208" stroke="#FFFFFF" strokeWidth="1" />
          <line x1="212" y1="190" x2="218" y2="190" stroke="#FFFFFF" strokeWidth="1" />
          <line x1="242" y1="190" x2="248" y2="190" stroke="#FFFFFF" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
};
'''

# Check where to insert MarketAuthorityAnimation
# Insert it right before const EverythingYouNeed
ey_idx = app.find('const EverythingYouNeed')
assert ey_idx != -1, "const EverythingYouNeed not found"
app = app[:ey_idx] + component_code + '\n\n' + app[ey_idx:]

# Now replace the empty container in Row 1:
old_empty_container = '<div style={{ height: \'380px\', backgroundColor: \'#0A0A0C\', borderRadius: \'12px\' }}></div>'
new_container = '<MarketAuthorityAnimation />'

assert old_empty_container in app, "old_empty_container not found"
# Replace only the first occurrence (Row 1)
app = app.replace(old_empty_container, new_container, 1)

with open('src/App.jsx', 'w', encoding='utf-8') as f:
    f.write(app)

print("Successfully injected MarketAuthorityAnimation into Layer 01!")
