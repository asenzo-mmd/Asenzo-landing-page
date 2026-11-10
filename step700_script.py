import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('src/App.jsx', 'r', encoding='utf-8') as f:
    app = f.read()

# 1. Remove the old standalone MarketAuthorityAnimation definition
anim_marker = '// Strategic Information Cards: Market Positioning & Authority (Layer 01)'
ey_marker = 'const EverythingYouNeed = ({ onAssessmentClick }) => {'
anim_start = app.find(anim_marker)
ey_start = app.find(ey_marker)
assert anim_start != -1 and ey_start != -1, "Animation component boundaries not found"

app = app[:anim_start] + app[ey_start:]

# 2. Locate Row 1 inside EverythingYouNeed
idx = app.find('Layer 01')
row1_start = app.rfind('{/* Row 1: Left visual, Right text */}', 0, idx)
row2_start = app.find('{/* Row 2: Left text, Right visual */}', idx)
assert row1_start != -1 and row2_start != -1, "Row 1 boundaries not found"

unified_layer01 = '''{/* Row 1: Layer 01 Unified Container (Full-Width Editorial Panel) */}
          <div style={{
            backgroundColor: '#070709',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '16px',
            padding: '48px 40px',
            boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <style>{`
              @keyframes cardFadeIn1 {
                0%, 6% { opacity: 0; transform: translateY(10px); }
                16%, 86% { opacity: 1; transform: translateY(0); }
                95%, 100% { opacity: 0; transform: translateY(-6px); }
              }
              @keyframes cardFadeIn2 {
                0%, 14% { opacity: 0; transform: translateY(10px); }
                24%, 86% { opacity: 1; transform: translateY(0); }
                95%, 100% { opacity: 0; transform: translateY(-6px); }
              }
              @keyframes cardFadeIn3 {
                0%, 22% { opacity: 0; transform: translateY(10px); }
                32%, 86% { opacity: 1; transform: translateY(0); }
                95%, 100% { opacity: 0; transform: translateY(-6px); }
              }
              @keyframes miniPulse {
                0%, 100% { opacity: 0.6; transform: scale(1); }
                50% { opacity: 1; transform: scale(1.15); }
              }
              @keyframes barGrow {
                0%, 20% { width: 0%; opacity: 0.2; }
                40%, 86% { width: 100%; opacity: 1; }
                94%, 100% { width: 0%; opacity: 0.2; }
              }
              @media (prefers-reduced-motion: reduce) {
                .layer01-card {
                  animation: none !important;
                  opacity: 1 !important;
                  transform: none !important;
                }
              }
            `}</style>

            {/* TOP SECTION: Hierarchy & Overview */}
            <div style={{ marginBottom: '40px' }}>
              <div style={{
                display: 'inline-block',
                backgroundColor: '#0A0A0C',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '8px',
                padding: '7px 16px',
                fontSize: '12px',
                color: '#FFFFFF',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '20px'
              }}>
                LAYER 01
              </div>

              <h3 style={{
                fontSize: 'clamp(28px, 3.5vw, 40px)',
                fontWeight: 600,
                color: '#FFFFFF',
                marginBottom: '16px',
                letterSpacing: '-0.03em',
                lineHeight: 1.15
              }}>
                Market Positioning & Authority
              </h3>

              <p style={{
                fontSize: '15px',
                color: '#8A8A8E',
                lineHeight: 1.6,
                maxWidth: '780px',
                margin: 0
              }}>
                Establish how your business is understood and remembered in the market. We develop your positioning, differentiation, buyer messaging, and content direction so your expertise communicates its value clearly.
              </p>
            </div>

            {/* BELOW THE DESCRIPTION: THREE INFORMATION CARDS */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
              alignItems: 'stretch'
            }}>

              {/* CARD 01 — POSITIONING */}
              <div
                className="layer01-card"
                style={{
                  backgroundColor: '#0D0D10',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '10px',
                  padding: '24px 22px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  animation: 'cardFadeIn1 12s cubic-bezier(0.16, 1, 0.3, 1) infinite',
                  minHeight: '180px',
                  position: 'relative'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <span style={{
                      fontSize: '10.5px',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      color: '#FFFFFF',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      padding: '2px 7px',
                      borderRadius: '4px'
                    }}>
                      01
                    </span>
                    <span style={{ fontSize: '16px', fontWeight: 600, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
                      Positioning
                    </span>
                  </div>
                  <p style={{ fontSize: '13px', color: '#8A8A8E', margin: '0 0 20px 0', lineHeight: 1.55 }}>
                    Define how your business is perceived and where it belongs in the market.
                  </p>
                </div>

                {/* Minimal Positioning Interface Detail */}
                <div style={{
                  height: '48px',
                  backgroundColor: '#050506',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  borderRadius: '6px',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}>
                  {/* Subtle field grid */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)',
                    backgroundSize: '12px 12px',
                    opacity: 0.45
                  }}></div>
                  {/* Subdued competing signal */}
                  <div style={{ position: 'absolute', top: '10px', left: '20px', width: '3px', height: '3px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.25)' }}></div>
                  <div style={{ position: 'absolute', bottom: '10px', right: '24px', width: '3px', height: '3px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.25)' }}></div>
                  {/* Central established brand signal */}
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#FFFFFF',
                    boxShadow: '0 0 12px rgba(255,255,255,0.8)',
                    position: 'relative',
                    zIndex: 1,
                    animation: 'miniPulse 3s ease-in-out infinite'
                  }}></div>
                </div>
              </div>

              {/* CARD 02 — DIFFERENTIATION */}
              <div
                className="layer01-card"
                style={{
                  backgroundColor: '#0D0D10',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '10px',
                  padding: '24px 22px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  animation: 'cardFadeIn2 12s cubic-bezier(0.16, 1, 0.3, 1) infinite',
                  minHeight: '180px',
                  position: 'relative'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <span style={{
                      fontSize: '10.5px',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      color: '#FFFFFF',
                      backgroundColor: 'rgba(255, 255, 255, 0.12)',
                      border: '1px solid rgba(255, 255, 255, 0.18)',
                      padding: '2px 7px',
                      borderRadius: '4px'
                    }}>
                      02
                    </span>
                    <span style={{ fontSize: '16px', fontWeight: 600, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
                      Differentiation
                    </span>
                  </div>
                  <p style={{ fontSize: '13px', color: '#8A8A8E', margin: '0 0 20px 0', lineHeight: 1.55 }}>
                    Identify what makes your business distinct and why clients should choose you.
                  </p>
                </div>

                {/* Minimal Differentiation Interface Detail */}
                <div style={{
                  height: '48px',
                  backgroundColor: '#050506',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  borderRadius: '6px',
                  padding: '10px 14px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  {/* Subdued baseline option 1 */}
                  <div style={{ height: '4px', width: '55%', backgroundColor: 'rgba(255, 255, 255, 0.15)', borderRadius: '2px' }}></div>
                  {/* Distinct Highlighted Option (The ASENZO Position) */}
                  <div style={{
                    height: '5px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '2px',
                    boxShadow: '0 0 8px rgba(255, 255, 255, 0.45)',
                    animation: 'barGrow 12s ease-in-out infinite'
                  }}></div>
                  {/* Subdued baseline option 2 */}
                  <div style={{ height: '4px', width: '40%', backgroundColor: 'rgba(255, 255, 255, 0.15)', borderRadius: '2px' }}></div>
                </div>
              </div>

              {/* CARD 03 — MESSAGING */}
              <div
                className="layer01-card"
                style={{
                  backgroundColor: '#0D0D10',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '10px',
                  padding: '24px 22px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  animation: 'cardFadeIn3 12s cubic-bezier(0.16, 1, 0.3, 1) infinite',
                  minHeight: '180px',
                  position: 'relative'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <span style={{
                      fontSize: '10.5px',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      color: '#FFFFFF',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      padding: '2px 7px',
                      borderRadius: '4px'
                    }}>
                      03
                    </span>
                    <span style={{ fontSize: '16px', fontWeight: 600, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
                      Messaging
                    </span>
                  </div>
                  <p style={{ fontSize: '13px', color: '#8A8A8E', margin: '0 0 20px 0', lineHeight: 1.55 }}>
                    Turn your expertise into clear communication that resonates with your ideal buyers.
                  </p>
                </div>

                {/* Minimal Structured Messaging Interface Detail */}
                <div style={{
                  height: '48px',
                  backgroundColor: '#050506',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  borderRadius: '6px',
                  padding: '8px 14px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: '6px'
                }}>
                  {/* Tier 1: Core Value Proposition */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#FFFFFF', flexShrink: 0 }}></div>
                    <div style={{ height: '3px', width: '82%', backgroundColor: '#FFFFFF', borderRadius: '1.5px', opacity: 0.9 }}></div>
                  </div>
                  {/* Tier 2: Pillar Transmission */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', paddingLeft: '8px' }}>
                    <div style={{ width: '3px', height: '3px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.4)', flexShrink: 0 }}></div>
                    <div style={{ height: '3px', width: '68%', backgroundColor: 'rgba(255,255,255,0.4)', borderRadius: '1.5px' }}></div>
                  </div>
                  {/* Tier 3: Proof / Validation */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', paddingLeft: '8px' }}>
                    <div style={{ width: '3px', height: '3px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.4)', flexShrink: 0 }}></div>
                    <div style={{ height: '3px', width: '52%', backgroundColor: 'rgba(255,255,255,0.4)', borderRadius: '1.5px' }}></div>
                  </div>
                </div>
              </div>

            </div>
          </div>\n\n          '''

app = app[:row1_start] + unified_layer01 + app[row2_start:]

with open('src/App.jsx', 'w', encoding='utf-8') as f:
    f.write(app)

print("Unified Layer 01 single container successfully created!")
