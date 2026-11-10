with open('src/App.jsx', 'r', encoding='utf-8') as f:
    code = f.read()

# 1. Update FAQSection
faq_old = """const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    { num: "01", q: "What exactly does Havstock do?", a: "We build complete done-for-you client generation systems, including high-converting websites, sales funnels, AI follow-up automations, and persuasive copywriting to turn your traffic into paying clients." },
    { num: "02", q: "Who is this for?", a: "This is built specifically for service-based businesses, agency owners, consultants, and enterprise founders doing over $10k/month who want an automated, predictable acquisition infrastructure." },
    { num: "03", q: "How long does implementation take?", a: "The entire system is completely designed, built, and launched live in 30 days flat. You'll see initial infrastructure within the first 10 days." },
    { num: "04", q: "What do you need from me?", a: "Only an initial 60-minute strategy call and access to your core brand assets. Our expert engineering team handles the rest entirely done-for-you." },
    { num: "05", q: "What if it doesn't work?", a: "You're backed by our 100% Risk-Free Guarantee: if you aren't thoroughly blown away by your new system in 30 days, you receive a full 100% immediate refund with zero questions asked." }
  ];

  return (
    <section id="faq" style={{ backgroundColor: '#000000', padding: '120px 24px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 500, color: '#FFFFFF', marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ fontSize: '16px', color: '#888888' }}>
            Everything you need to know about partnering with ASENZO.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={faq.num}
                style={{
                  borderBottom: '1px solid #1F1F1F',
                  padding: '28px 0',
                  cursor: 'pointer'
                }}
                onClick={() => setOpenIdx(isOpen ? null : i)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                    <span style={{ fontSize: '13px', color: '#555555', fontFamily: 'monospace' }}>{faq.num}</span>
                    <h3 style={{ fontSize: '18px', fontWeight: 500, color: '#EEEEEE', margin: 0 }}>{faq.q}</h3>
                  </div>
                  <div style={{ color: '#888888' }}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </div>

                {isOpen && (
                  <div style={{ paddingTop: '16px', paddingLeft: '44px', paddingRight: '24px' }}>
                    <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#888888', margin: 0 }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};"""

faq_new = """const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    { num: "01", q: "What exactly does ASENZO do?", a: "We build complete done-for-you client generation systems, including high-converting websites, sales funnels, AI follow-up automations, and persuasive copywriting to turn your traffic into paying clients." },
    { num: "02", q: "Who is this for?", a: "This is built specifically for service-based businesses, agency owners, consultants, and enterprise founders doing over $10k/month who want an automated, predictable acquisition infrastructure." },
    { num: "03", q: "How long does implementation take?", a: "The entire system is completely designed, built, and launched live in 30 days flat. You'll see initial infrastructure within the first 10 days." },
    { num: "04", q: "What do you need from me?", a: "Only an initial 60-minute strategy call and access to your core brand assets. Our expert engineering team handles the rest entirely done-for-you." },
    { num: "05", q: "What if it doesn't work?", a: "You're backed by our 100% Risk-Free Guarantee: if you aren't thoroughly blown away by your new system in 30 days, you receive a full 100% immediate refund with zero questions asked." }
  ];

  return (
    <section id="faq" style={{ backgroundColor: '#ffffff', padding: '120px 24px', borderBottom: '1px solid #f0f0f0' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: '#0f0f11', marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ fontSize: '16px', color: '#52525b' }}>
            Everything you need to know about partnering with ASENZO.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={faq.num}
                style={{
                  borderBottom: '1px solid #e4e4e7',
                  padding: '28px 0',
                  cursor: 'pointer'
                }}
                onClick={() => setOpenIdx(isOpen ? null : i)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                    <span style={{ fontSize: '13px', color: '#F16001', fontFamily: 'monospace', fontWeight: 600 }}>{faq.num}</span>
                    <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#0f0f11', margin: 0 }}>{faq.q}</h3>
                  </div>
                  <div style={{ color: '#0f0f11' }}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </div>

                {isOpen && (
                  <div style={{ paddingTop: '16px', paddingLeft: '44px', paddingRight: '24px' }}>
                    <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#52525b', margin: 0 }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};"""

if faq_old in code:
    code = code.replace(faq_old, faq_new)
    print("Updated FAQSection to white mode!")
else:
    print("WARNING: Could not find exact FAQSection block")

# 2. Update CalendarBookingSection
with open('cal_code.txt', 'r', encoding='utf-8') as f:
    cal_old = f.read().strip()

cal_new = """const CalendarBookingSection = ({ onAssessmentClick }) => {
  const [selectedDate, setSelectedDate] = useState(20);
  const days = [
    { num: '', avail: false }, { num: '', avail: false }, { num: '', avail: false }, { num: '', avail: false }, { num: '', avail: false }, { num: 1, avail: false }, { num: 2, avail: false },
    { num: 3, avail: false }, { num: 4, avail: false }, { num: 5, avail: false }, { num: 6, avail: false }, { num: 7, avail: false }, { num: 8, avail: false }, { num: 9, avail: false },
    { num: 10, avail: false }, { num: 11, avail: false }, { num: 12, avail: false }, { num: 13, avail: false }, { num: 14, avail: false }, { num: 15, avail: false }, { num: 16, avail: false },
    { num: 17, avail: false }, { num: 18, avail: false }, { num: 19, avail: true }, { num: 20, avail: true }, { num: 21, avail: true }, { num: 22, avail: true }, { num: 23, avail: false },
    { num: 24, avail: true }, { num: 25, avail: true }, { num: 26, avail: true }, { num: 27, avail: true }, { num: 28, avail: true }, { num: 29, avail: false }, { num: 30, avail: false }
  ];

  return (
    <section style={{ backgroundColor: '#ffffff', padding: '120px 48px', borderBottom: '1px solid #f0f0f0' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '80px', alignItems: 'center' }}>
        
        {/* Left Column: Context & Proof */}
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '20px', backgroundColor: 'rgba(241, 96, 1, 0.08)', border: '1px solid rgba(241, 96, 1, 0.2)', color: '#F16001', fontSize: '12px', fontWeight: 600, marginBottom: '24px' }}>
            <span>✦ PRIVATE ACCESS</span>
          </div>

          <h2 style={{ fontSize: 'clamp(36px, 4.5vw, 56px)', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-0.03em', color: '#0f0f11', marginBottom: '24px' }}>
            We Install It. You Grow. Live In 30 Days.
          </h2>

          <p style={{ fontSize: '17px', lineHeight: 1.6, color: '#52525b', marginBottom: '40px', maxWidth: '500px' }}>
            Schedule an executive onboarding review. We'll map your complete pipeline, diagnose conversion leaks, and design your bespoke operating system live on the call.
          </p>

          {/* Social Proof Metric */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '18px 20px', backgroundColor: '#fafafa', borderRadius: '12px', border: '1px solid #e4e4e7', maxWidth: '420px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#22c55e', boxShadow: '0 0 10px #22c55e' }} />
            <div style={{ fontSize: '13.5px', color: '#27272a', fontWeight: 500 }}>
              <span style={{ color: '#0f0f11', fontWeight: 700 }}>2 spots available</span> for this month's sprint
            </div>
          </div>
        </div>

        {/* Right Column: Calendar Widget */}
        <div style={{ backgroundColor: '#ffffff', border: '1px solid #e4e4e7', borderRadius: '20px', padding: '36px', boxShadow: '0 16px 48px rgba(0, 0, 0, 0.06)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f0f11', margin: 0 }}>Select a Date & Time</h3>
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#52525b' }}>November 2026</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '10px', textAlign: 'center', marginBottom: '28px' }}>
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, idx) => (
              <span key={idx} style={{ fontSize: '12px', fontWeight: 600, color: '#71717a', paddingBottom: '6px' }}>{day}</span>
            ))}
            {days.map((day, idx) => {
              if (!day.num) return <div key={idx} />;
              const isSelected = selectedDate === day.num;
              return (
                <button
                  key={idx}
                  disabled={!day.avail}
                  onClick={() => setSelectedDate(day.num)}
                  style={{
                    height: '40px',
                    borderRadius: '8px',
                    border: isSelected ? '1px solid #F16001' : '1px solid #f0f0f0',
                    backgroundColor: isSelected ? '#F16001' : day.avail ? '#f4f4f5' : '#ffffff',
                    color: isSelected ? '#ffffff' : day.avail ? '#0f0f11' : '#d4d4d8',
                    fontSize: '13.5px',
                    fontWeight: day.avail ? 600 : 400,
                    cursor: day.avail ? 'pointer' : 'default',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {day.num}
                </button>
              );
            })}
          </div>

          <button
            onClick={onAssessmentClick}
            style={{
              width: '100%',
              height: '46px',
              backgroundColor: '#000000',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14.5px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'opacity 0.2s',
              boxShadow: '0 4px 16px rgba(0,0,0,0.15)'
            }}
            onMouseOver={(e) => e.currentTarget.style.opacity = '0.88'}
            onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
          >
            Confirm Date & Time →
          </button>
        </div>

      </div>
    </section>
  );
};"""

if cal_old in code:
    code = code.replace(cal_old, cal_new)
    print("Updated CalendarBookingSection to white mode!")
else:
    print("WARNING: Could not find exact CalendarBookingSection block")

# 3. Clean up any remaining #050505 or dark sections in ThreeWaysToWorkSection
code = code.replace("backgroundColor: '#050505',", "backgroundColor: '#ffffff',")

with open('src/App.jsx', 'w', encoding='utf-8') as f:
    f.write(code)

print("Saved updated src/App.jsx cleanly!")
