import re

def main():
    with open('c:\\Users\\Administrator\\Asenzo landing page\\src\\App.jsx', 'r', encoding='utf-8') as f:
        content = f.read()

    # We will carefully construct the replacement for ClearROICalculator
    new_component = '''// 7. Premium Apple-Style ROI Calculator
const ClearROICalculator = ({ onAssessmentClick }) => {
  const [currentCost, setCurrentCost] = useState(100000);

  const asenzoCost = currentCost * 0.10;
  const monthlySave = currentCost - asenzoCost;
  const yearlySave = monthlySave * 12;

  return (
    <section style={{
      backgroundColor: '#000000',
      padding: '100px 24px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 2 }}>

        <div style={{ textAlign: 'center', marginBottom: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{
            display: 'inline-flex',
            backgroundColor: '#0A0A0C',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '6px',
            padding: '6px 14px',
            fontSize: '11px',
            color: '#FFFFFF',
            fontWeight: 500,
            marginBottom: '24px'
          }}>
            Benefits
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 500, lineHeight: 1.15, color: '#FFFFFF', marginBottom: '16px', letterSpacing: '-0.02em', maxWidth: '800px', margin: '0 auto 16px auto' }}>
            You're Already Paying For This.<br />Just to the Wrong People.
          </h2>
          <p style={{ fontSize: '15px', color: '#8A8A8A', maxWidth: '640px', margin: '0 auto', lineHeight: 1.55 }}>
            Move the slider to see what you're actually burning on agencies, gurus, and courses — and what the same result costs with ASENZO.
          </p>
        </div>
        
        {/* Added Badge per request */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <span style={{ backgroundColor: 'rgba(245, 58, 20, 0.1)', border: '1px solid rgba(245, 58, 20, 0.2)', color: '#FF6B00', fontSize: '11px', fontWeight: 600, padding: '6px 14px', borderRadius: '4px', letterSpacing: '0.05em' }}>
            90% CHEAPER THAN AGENCIES & GURUS
          </span>
        </div>

        <div className="roi-glass-container" style={{
          backgroundColor: 'rgba(12, 12, 14, 0.65)',
          backdropFilter: 'blur(32px)',
          WebkitBackdropFilter: 'blur(32px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '32px',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          boxShadow: '0 30px 80px -20px rgba(0,0,0, 0.8), inset 0 1px 1px rgba(255,255,255,0.05)',
        }}>

          {/* Controls Side */}
          <div style={{ padding: '40px 32px', display: 'flex', flexDirection: 'column', gap: '48px', justifyContent: 'center' }}>

            {/* Combined Input and Slider Block */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <label style={{ fontSize: '15px', color: '#8A8A8A', fontWeight: 500, letterSpacing: '-0.01em' }}>What You're Paying Now</label>
              </div>
              <div style={{
                position: 'relative',
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)',
                borderRadius: '16px',
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '40px',
                transition: 'border-color 0.3s, background-color 0.3s',
              }} className="roi-apple-input">
                <span style={{ fontSize: '24px', color: '#555', fontWeight: 500 }}>₹</span>
                <input
                  type="text"
                  value={currentCost.toLocaleString('en-IN')}
                  onChange={(e) => {
                    const val = Number(e.target.value.replace(/[^0-9]/g, ''));
                    if (!isNaN(val) && val <= 5000000) setCurrentCost(val);
                  }}
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: '#FFFFFF',
                    fontSize: '28px',
                    fontWeight: 500,
                    width: '100%',
                    fontFamily: 'inherit',
                    letterSpacing: '-0.02em',
                    fontVariantNumeric: 'tabular-nums'
                  }}
                />
              </div>

              {/* Slider linked to same variable */}
              <div style={{ position: 'relative', height: '12px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '100px', display: 'flex', alignItems: 'center', boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.5)' }}>
                {/* Custom Track Fill */}
                <div style={{
                  position: 'absolute',
                  height: '100%',
                  background: 'linear-gradient(90deg, #F53A14 0%, #FF6B00 100%)',
                  boxShadow: '0 0 12px rgba(245, 58, 20, 0.4)',
                  borderRadius: '100px',
                  width: `${(currentCost / 500000) * 100}%`,
                  pointerEvents: 'none',
                  zIndex: 1,
                  transition: 'width 0.1s ease-out'
                }}></div>
                <input
                  type="range"
                  min="10000"
                  max="500000"
                  step="5000"
                  value={currentCost}
                  onChange={(e) => setCurrentCost(Number(e.target.value))}
                  className="roi-apple-slider"
                  style={{
                    width: '100%',
                    position: 'absolute',
                    margin: 0,
                    outline: 'none',
                    background: 'transparent',
                    zIndex: 2,
                    cursor: 'pointer'
                  }}
                />
              </div>
            </div>

          </div>

          {/* Outputs Side */}
          <div style={{
            padding: '40px 32px',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.04) 100%)',
            borderLeft: '1px solid rgba(255,255,255,0.05)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '32px',
            position: 'relative'
          }}>
            <div>
              <div style={{ fontSize: '12px', color: '#8A8A8A', fontWeight: 500, letterSpacing: '0.04em', marginBottom: '8px' }}>
                YOUR ASENZO COST
              </div>
              <div style={{
                fontSize: 'clamp(28px, 3vw, 40px)',
                fontWeight: 600,
                color: '#FFFFFF',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                fontVariantNumeric: 'tabular-nums',
                textShadow: '0 8px 16px rgba(0,0,0,0.4)'
              }}>
                ₹{asenzoCost.toLocaleString('en-IN')}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '12px', color: '#8A8A8A', fontWeight: 500, letterSpacing: '0.04em', marginBottom: '8px' }}>
                YOU SAVE MONTHLY
              </div>
              <div style={{
                fontSize: 'clamp(28px, 3vw, 40px)',
                fontWeight: 600,
                color: '#FFFFFF',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                fontVariantNumeric: 'tabular-nums'
              }}>
                ₹{monthlySave.toLocaleString('en-IN')}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '12px', color: '#FF6B00', fontWeight: 600, letterSpacing: '0.04em', marginBottom: '8px' }}>
                YOU SAVE YEARLY
              </div>
              <div style={{
                fontSize: 'clamp(28px, 3vw, 40px)',
                fontWeight: 600,
                // Apple-style gorgeous metallic gradient text
                background: 'linear-gradient(180deg, #FFFFFF 0%, #A0A0A0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                fontVariantNumeric: 'tabular-nums'
              }}>
                ₹{yearlySave.toLocaleString('en-IN')}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .roi-apple-slider {
            -webkit-appearance: none;
            width: 100%;
            height: 12px;
            background: transparent;
          }
          .roi-apple-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: #FFFFFF;
            cursor: pointer;
            box-shadow: 0 4px 16px rgba(0,0,0,0.3), inset 0 -2px 6px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.05);
            position: relative;
            z-index: 3;
            transition: transform 0.15s cubic-bezier(0.2, 0.8, 0.2, 1);
          }
          .roi-apple-slider::-webkit-slider-thumb:hover {
            transform: scale(1.05);
          }
          .roi-apple-slider::-webkit-slider-thumb:active {
            transform: scale(0.95);
          }
          .roi-apple-input:focus-within {
            background-color: rgba(255,255,255,0.05) !important;
            border-color: rgba(255,255,255,0.15) !important;
          }
          @media (max-width: 900px) {
            .roi-glass-container {
              grid-template-columns: 1fr !important;
            }
            .roi-glass-container > div:nth-child(2) {
              border-left: none !important;
              border-top: 1px solid rgba(255,255,255,0.08) !important;
              padding-top: 48px !important;
              padding-bottom: 48px !important;
            }
          }
        `}
      </style>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '48px', position: 'relative', zIndex: 2 }}>
        <button onClick={onAssessmentClick} style={{
          height: '48px',
          backgroundColor: '#FFFFFF',
          color: '#000000',
          border: 'none',
          borderRadius: '6px', // Standard rectangular box shape per user request
          padding: '0 32px',
          fontSize: '15px',
          fontWeight: 600,
          cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(255,255,255,0.15)',
          transition: 'transform 0.2s, box-shadow 0.2s'
        }}
          onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(255,255,255,0.25)' }}
          onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,255,255,0.15)' }}
        >
          See My Real Numbers →
        </button>
      </div>

    </section>
  );
};'''

    # Use regex to find and replace the component Definition
    pattern = r'// 7\. Premium Apple-Style ROI Calculator\nconst ClearROICalculator = \(\{ onAssessmentClick \}\) => \{.*?\}\;\n'
    content = re.sub(pattern, new_component + '\\n', content, flags=re.DOTALL)

    with open('c:\\Users\\Administrator\\Asenzo landing page\\src\\App.jsx', 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == '__main__':
    main()
