with open('src/App.jsx', 'r', encoding='utf-8') as f:
    code = f.read()

with open('current_envelope.txt', 'r', encoding='utf-8') as f:
    old_envelope = f.read()

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
};\n\n"""

code = code.replace(old_envelope, envelope_new)

with open('src/App.jsx', 'w', encoding='utf-8') as f:
    f.write(code)

print("Successfully replaced FinalCTAHero in App.jsx!")
