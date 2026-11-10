import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('src/App.jsx', 'r', encoding='utf-8') as f:
    app = f.read()

idx = app.find('Market Positioning & Authority')
row1_start = app.rfind('{/* Row 1:', 0, idx)
row2_start = app.find('{/* Row 2:', idx)
assert row1_start != -1 and row2_start != -1, "Row 1 boundaries not found"

clean_single_box = '''{/* Row 1: Layer 01 Unified Container (Clean Single Box) */}
          <div style={{
            backgroundColor: '#070709',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '16px',
            padding: '48px 40px',
            boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
            position: 'relative'
          }}>
            {/* Top Section: Eyebrow, Heading & Description */}
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

            {/* Divider Line */}
            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', marginBottom: '36px' }}></div>

            {/* Three Pillars (Clean editorial columns directly inside the one box - no nested mini boxes or animations) */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '40px'
            }}>
              {/* 01 — POSITIONING */}
              <div>
                <div style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: '#8A8A8E',
                  textTransform: 'uppercase',
                  marginBottom: '10px'
                }}>
                  01 — POSITIONING
                </div>
                <h4 style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  margin: '0 0 10px 0',
                  letterSpacing: '-0.02em'
                }}>
                  Positioning
                </h4>
                <p style={{
                  fontSize: '13.5px',
                  color: '#8A8A8E',
                  lineHeight: 1.55,
                  margin: 0
                }}>
                  Define how your business is perceived and where it belongs in the market.
                </p>
              </div>

              {/* 02 — DIFFERENTIATION */}
              <div>
                <div style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: '#8A8A8E',
                  textTransform: 'uppercase',
                  marginBottom: '10px'
                }}>
                  02 — DIFFERENTIATION
                </div>
                <h4 style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  margin: '0 0 10px 0',
                  letterSpacing: '-0.02em'
                }}>
                  Differentiation
                </h4>
                <p style={{
                  fontSize: '13.5px',
                  color: '#8A8A8E',
                  lineHeight: 1.55,
                  margin: 0
                }}>
                  Identify what makes your business distinct and why clients should choose you.
                </p>
              </div>

              {/* 03 — MESSAGING */}
              <div>
                <div style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: '#8A8A8E',
                  textTransform: 'uppercase',
                  marginBottom: '10px'
                }}>
                  03 — MESSAGING
                </div>
                <h4 style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  margin: '0 0 10px 0',
                  letterSpacing: '-0.02em'
                }}>
                  Messaging
                </h4>
                <p style={{
                  fontSize: '13.5px',
                  color: '#8A8A8E',
                  lineHeight: 1.55,
                  margin: 0
                }}>
                  Turn your expertise into clear communication that resonates with your ideal buyers.
                </p>
              </div>
            </div>
          </div>\n\n          '''

app = app[:row1_start] + clean_single_box + app[row2_start:]

with open('src/App.jsx', 'w', encoding='utf-8') as f:
    f.write(app)

print("Applied clean single box without animations or mini boxes successfully!")
