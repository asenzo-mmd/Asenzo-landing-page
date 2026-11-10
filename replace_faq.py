with open('src/App.jsx', 'r', encoding='utf-8') as f:
    code = f.read()

with open('current_faq.txt', 'r', encoding='utf-8') as f:
    old_faq = f.read()

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
};\n\n"""

code = code.replace(old_faq, faq_new)

with open('src/App.jsx', 'w', encoding='utf-8') as f:
    f.write(code)

print("Replaced FAQSection with white mode!")
