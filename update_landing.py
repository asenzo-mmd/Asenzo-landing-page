import sys

def main():
    with open('c:\\Users\\Administrator\\Asenzo landing page\\src\\App.jsx', 'r', encoding='utf-8') as f:
        content = f.read()

    replacements = [
        # NAV
        ('The Problem</a>', 'The Problem</a>'), # No change
        ('>The System</a>', '>The System</a>'),
        ('>The Install</a>', '>The Waitlist</a>'),
        ('>Enterprise</a>', '>Custom Build</a>'),
        ('Diagnose My Bottleneck →', 'Join the Waitlist →'),
        
        # HERO
        ('Build the Infrastructure Behind Market Authority.', 'The Operating System Behind Founder-Led Growth.'),
        ('Your expertise may already be valuable. But without a system that converts authority into demand, demand into revenue, and revenue into repeatable operations, your growth remains fragile.', "You're good at the work. But your content, leads, sales, and delivery still run through you — which means your business can only grow as fast as you can personally hold it together."),
        ('ASENZO architects and installs a Founder Growth Operating System—aligning your positioning, personal brand, content, conversion, sales, and operating workflows into one business asset built to compound.', "The Founder Growth OS is a done-for-you system that turns your expertise into authority, authority into demand, and demand into a business that runs without your constant hand on it."),
        ('Diagnose Your Growth Architecture →', 'Join the Growth OS Waitlist →'),
        ('Private Growth Infrastructure Assessment · 15 minutes · For established founders and expert-led businesses', 'Founder Growth OS · Opening to a limited group first · For founder-led businesses, 1–10 people'),
        ('BUILT FOR FOUNDERS TURNING EXPERTISE INTO ENDURING MARKET POSITION', 'BUILT FOR FOUNDERS WHO ARE TIRED OF BEING THE BOTTLENECK'),

        # OUR SYSTEM
        ('Stop Running Your Business. Build One That Runs Without You.', 'Stop Being the Bottleneck. Start Being the Owner.'),
        ('We build the systems that turn your content, leads, sales, delivery, and operations into a connected growth engine you own.', 'We install the system that turns your content, leads, sales, and delivery into one engine — one you own, not one that owns you.'),
        ('Turn founder-dependent processes into systems that keep your business moving without you managing every step.', 'Turn founder-dependent work into a system that keeps moving — content, leads, and sales — without you managing every step.'),
        ('Automate the daily work that keeps pulling you back into the business—without losing your voice, standards, or control.', 'Automate the daily work that keeps pulling you back in — without losing your voice, your standards, or your control.'),
        ('Build systems that consistently move prospects from attention → conversation → qualified lead → client without relying on you to push every step.', 'Build a system that moves people from attention → conversation → qualified lead → client — without you personally pushing every step.'),
        ('No generic templates. We design and install the infrastructure around your business, your process, and your way of operating.', 'No generic templates. We design and install infrastructure around your business, your process, and how you actually work.'),

        # BENEFITS SECTION
        ('Stop being involved in every task, decision, and handoff.', 'Stop being the one every task, decision, and handoff runs through.'),
        ('Keep content, leads, sales, and operations moving without constant manual effort.', 'Keep content, leads, sales, and delivery moving without constant manual effort.'),
        ('Reduce your dependence on agencies, operators, and repetitive manual work.', 'Reduce your dependence on scattered tools, freelancers, and repetitive manual work.'),
        ('Turn slow, scattered processes into connected systems that move automatically.', 'Turn slow, scattered processes into connected systems that move on their own.'),
        ('Grow your revenue and client volume without multiplying your workload.', 'Grow your revenue and client volume without multiplying your own workload.'),
        ("Replace founder-dependent work with systems that create <strong style={{ color: '#F5F5F5', fontWeight: 500 }}>more freedom, consistency, and capacity to grow.</strong>", "Replace founder-dependent work with systems that create <strong style={{ color: '#F5F5F5', fontWeight: 500 }}>real freedom, consistency, and room to grow.</strong>"),

        # 3 WAYS TO WORK -> WAITLIST SECTION
        ('Three Ways To Work', 'The Waitlist'),
        ('Simple, transparent pricing', "The Growth OS Isn't Open Yet. Here's How to Get In."),
        ("Choose the plan that's right for your business. No hidden fees or surprise charges.", "We're finishing the system with a small group of founders first. You've got two ways in."),
        ('Starter', 'Founder Growth OS — Waitlist'),
        ('Perfect for small businesses starting with AI automation.', 'Be first in line when we open the next cohort.'),
        ('Choose this plan', 'Join the Waitlist →'),
        ('"Basic workflow automation",\n                "AI-powered personal assistant",\n                "Standard analytics & reporting",\n                "Email & chat support",\n                "Up to 3 AI integrations"', '"Free 15-minute Growth Diagnostic to map your constraint now",\n                "Priority access when your spot opens",\n                "Locked-in founding pricing before public launch",\n                "No payment required to join"'),
        ('Professional', 'Custom Build — Skip the Wait'),
        ('>Popular<', '>Fast-track<'),
        ('"Advanced workflow automation",\n                "AI-driven sales & marketing tools",\n                "Enhanced data analytics & insights",\n                "Priority customer support",\n                "Up to 10 AI integrations"', '"Full Growth Constraint Diagnostic on a live call",\n                "Custom scoped build, starting within days, not months",\n                "Same core system, built around your business first",\n                "For businesses doing ₹20L–₁Cr+/year with an active team"'),

        # LIVE IN 30 DAYS -> PROCESS SECTION
        ('Live in 30 Days.<br />\n            Everything Done For You.', "Here's Exactly What Happens Next."),
        ("The whole point is speed to a win. We get you live and bringing in leads fast, not stuck in a three-month build. Here's the path.", "Whether you join the waitlist or book a custom build, the path is the same — we just move at a different speed."),
        ('>Week 1<', '>Step 1<'),
        ('>Build<', '>Diagnose<'),
        ("Strategy call, then we build. We map your system, write the copy, design the pages, and wire up every automation to your brand.", "You get a live Growth Constraint Diagnostic — the exact thing quietly capping your growth, in writing, in one session."),
        ('>Weeks 2-3<', '>Step 2<'),
        ('>Launch<', '>Design<'),
        ("The system goes live. Funnel deployed, follow-up switched on, traffic campaign launched. Leads start flowing in.", "We map the specific system your business needs — content, leads, sales, and operations — no generic template."),
        ('>Week 4<', '>Step 3<'),
        ('>Scale<', '>Install / Build<'),
        ("We optimise on real data and hand you the keys. You're live, acquiring clients, and in full control of the machine.", "Waitlist members get priority access as cohorts open. Custom Build clients start immediately, live in weeks."),
        ('AFTER LAUNCH, OPTIONAL', 'WANT TO SKIP THE LINE?'),
        ("<strong style={{ color: '#FFFFFF', fontWeight: 500 }}>Want us to keep running it?</strong> Once you're live, you can keep us on for ongoing management and growth. We scale the traffic, sharpen the funnel, and push toward bigger months. Or take the keys and run it yourself. Your call.", "<strong style={{ color: '#FFFFFF', fontWeight: 500 }}>Want in now instead of later?</strong> Book a Custom Build Call — same system, no wait."),
        (">Book Your Free Assessment Call<", ">Book Your Free Diagnostic Call<"),
        (">✓ ZERO-RISK GUARANTEE<", ">✓ No cost to join the waitlist<"),
        (">✓ SPLIT-PAY AVAILABLE<", ">✓ Founding pricing locked in<"),
        (">✓ LIVE IN ~30 DAYS<", ">✓ Custom build available now<"),

        # CLEAR ROI CALCULATOR
        ("The Key Benefits of AI<br />for Your Business Growth", "What a Working Growth System<br />Is Actually Worth to You"),
        ("Discover how AI automation enhances efficiency, reduces costs, and drives<br />business growth with smarter, faster processes.", "Move the sliders to see what fixing your lead and sales bottleneck<br />is worth to your business this year."),
        (">Design Your System →<", ">See Where I'm Stuck →<"),

        # GUARANTEE SECTION
        ("We're confident this system will make you far more than it costs. But you carry none of the risk. If for any reason you haven't recouped your investment, <strong style={{ color: '#F5F5F5', fontWeight: 500 }}>we keep consulting you one-to-one, adjusting and optimising, until you do.</strong> You don't build it alone, and you don't lose alone. That's the deal.", "We're confident this system pays for itself. But you carry none of the risk. If you haven't recouped your investment, <strong style={{ color: '#F5F5F5', fontWeight: 500 }}>we keep working with you one-to-one, adjusting and refining, until you do.</strong> You don't build it alone, and you don't lose alone."),

        # EMAIL WAITLIST (FinalCTAHero)
        ("Let AI do the Work so you can Scale Faster.", "Stop Carrying the Whole Business Alone."),
        ("Book a Call Today and Start Automating.", "Join the waitlist and get your free diagnostic."),
        (">Book a free call<", ">Join the Waitlist<"),

        # CALENDAR BOOKING
        ("We Install It, You Get <br /> Clients. A Full <br /> Acquisition System & AI <br /> COO, Live In 30 Days.", "We Install It. <br /> You Get a Business <br /> That Runs Without <br /> You."),
        ("For coaches, consultants, and agency owners who are posting, spending, and hustling but have no system turning that attention into booked calls and paying clients.", "For coaches, consultants, and agency owners who are posting, selling, and hustling — but have no system turning that effort into a business that runs itself."),
        ("Assessment Call w/ Nathan or Taylor", "Diagnostic Call w/ [Your Name]"),

        # MASTER FOOTER
        ('Buy Builder OS', 'Founder Growth OS'),
        ('Join Our Skool', 'Custom Build'),
        ('Done For You', 'Free Diagnostic'),
        ('>Features<', '>The Problem<'),
        ('>Integrations<', '>The System<'),
        ('>Testimonials<', '>Proof<'),
        ('>Take Free Assessment<', '>Join the Waitlist<')
    ]

    for old, new in replacements:
        if old in content:
            content = content.replace(old, new)
        else:
            print(f"WARNING: Could not find '{old}'")

    # Add FAQ Section replacement
    import re
    faq_replacement = '''const faqs = [
    { num: "01", q: "What exactly does the Founder Growth OS do?", a: "It's a done-for-you system that installs your positioning, content engine, lead and sales pipeline, and core operating workflows — so your business runs on systems, not just your memory." },
    { num: "02", q: "Who is this for?", a: "Founder-led coaches, consultants, agencies, and B2B service businesses doing roughly ₹20L–₁Cr/year with a small team (1–10 people) who are the bottleneck holding everything together." },
    { num: "03", q: "Why is it a waitlist right now?", a: "We're building the Growth OS around a small group of founders first, so every install is genuinely custom-fit — not a rushed, generic rollout. If you need this running sooner, book a Custom Build call instead." },
    { num: "04", q: "What's the difference between the Waitlist and a Custom Build?", a: "The Waitlist gets you a free diagnostic now and priority access plus founding pricing when your cohort opens. Custom Build starts the full engagement immediately for founders who don't want to wait." },
    { num: "05", q: "How fast can I see results?", a: "Custom Build clients typically go live within weeks of their diagnostic call. Waitlist members get their diagnostic immediately and full access as cohorts open." }
  ];'''
    content = re.sub(r'const faqs = \[.*?\];', faq_replacement, content, flags=re.DOTALL)
    
    # Hide the 3rd Pricing Card (Enterprise)
    content = content.replace('{/* Card 3: Enterprise */}', '{/* Card 3: Enterprise (Hidden) */} {false && (')
    content = content.replace('Unlimited AI integrations"\\n              ].map((feat, idx) => (\\n                <div key={idx} style={{ display: \\\'flex\\\', alignItems: \\\'flex-start\\\', gap: \\\'12px\\\', fontSize: \\\'13px\\\', color: \\\'#FFFFFF\\\' }}>\\n                  <Check size={16} color="#FFFFFF" style={{ flexShrink: 0, marginTop: \\\'2px\\\' }} />\\n                  <span style={{ lineHeight: 1.4 }}>{feat}</span>\\n                </div>\\n              ))}\\n            </div>\\n          </div>\\n        </div>', 'Unlimited AI integrations"\\n              ].map((feat, idx) => (\\n                <div key={idx} style={{ display: \\\'flex\\\', alignItems: \\\'flex-start\\\', gap: \\\'12px\\\', fontSize: \\\'13px\\\', color: \\\'#FFFFFF\\\' }}>\\n                  <Check size={16} color="#FFFFFF" style={{ flexShrink: 0, marginTop: \\\'2px\\\' }} />\\n                  <span style={{ lineHeight: 1.4 }}>{feat}</span>\\n                </div>\\n              ))}\\n            </div>\\n          </div>\\n        </div>\\n        )}')
    # Let's write a safer way to hide the 3rd card
    # I'll just use re.sub for it
    content = re.sub(r'\{\/\* Card 3: Enterprise \*\/\}.*?</div>\s*</div>\s*</div>', '', content, flags=re.DOTALL)

    # 2.5 What's inside section
    new_section = '''
// 2.5 What's Inside Growth OS
const WhatsInsideSection = ({ onAssessmentClick }) => {
  const cards = [
    { head: "1:1 Growth Constraint Diagnostic", body: "A live session with us mapping the exact thing capping your growth — before we build anything.", tag: "Diagnostic Session" },
    { head: "Positioning & Authority System", body: "Your specific market position and content system, drafted with you — so you stop sounding like everyone else in your niche.", badge: "BUILT WITH YOU, NOT A TEMPLATE", isHero: true },
    { head: "Growth OS Playbooks", body: "Your SOPs, scripts, and standards — extracted from how you actually work, fully mapped for your team." },
    { head: "Team Ownership Installation", body: "Clear roles and approval boundaries so your team runs the work without escalating everything to you." },
    { head: "Growth OS Dashboard", body: "See your leads, pipeline, and client health in one place — instead of flying blind between five tools." }
  ];
  return (
    <section style={{ backgroundColor: '#000000', padding: '120px 24px', borderBottom: '1px solid #1A1A1A' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 500, color: '#FFFFFF', marginBottom: '16px', letterSpacing: '-0.02em' }}>
              What's Inside the Founder Growth OS
            </h2>
            <p style={{ fontSize: '15px', color: '#8A8A8A', lineHeight: 1.55 }}>
              Five installs. One system. Everything mapped to your business, not a template.
            </p>
          </div>
          <button onClick={onAssessmentClick} style={{ backgroundColor: '#F5F5F5', color: '#000000', border: 'none', borderRadius: '4px', padding: '0 24px', height: '44px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' }}>
            Join the Waitlist →
          </button>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {cards.map((c, i) => (
            <div key={i} style={{ gridColumn: c.isHero ? '1 / -1' : 'auto', backgroundColor: '#050505', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '32px', display: 'flex', flexDirection: 'column' }}>
              {c.badge && <div style={{ fontSize: '11px', color: '#F5F5F5', backgroundColor: '#1A1A1A', padding: '4px 10px', borderRadius: '4px', alignSelf: 'flex-start', marginBottom: '16px', fontWeight: 600, letterSpacing: '0.05em' }}>{c.badge}</div>}
              {c.tag && <div style={{ fontSize: '12px', color: '#8A8A8A', marginBottom: '12px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{c.tag}</div>}
              <h3 style={{ fontSize: '20px', fontWeight: 500, color: '#FFFFFF', marginBottom: '16px', letterSpacing: '-0.01em' }}>{c.head}</h3>
              <p style={{ fontSize: '14px', color: '#8A8A8A', lineHeight: 1.6, margin: 0 }}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
'''
    # Replace ProblemLeakSection Definition
    pb_idx = content.find('// Problem Leak Section')
    pb_end = content.find('// 5. 3rd Section: Hand Holding Phone')
    if pb_idx != -1 and pb_end != -1:
        content = content[:pb_idx] + new_section + content[pb_end:]
        # Replace tag in App
        content = content.replace('<ProblemLeakSection />', '<WhatsInsideSection onAssessmentClick={() => setModalOpen(true)} />')
    
    # Hide TopBanner content to match "Join our Skool" replacement instruction 
    # Actually wait, instruction was "Footer nav — corrected to match your actual offer: Solutions: Founder Growth OS · Custom Build · Free Diagnostic". It didn't mention changing TopBanner, it mentioned the footer skool link.
    # We replaced 'Join Our Skool' with 'Custom Build' in Footer.
    
    with open('c:\\Users\\Administrator\\Asenzo landing page\\src\\App.jsx', 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == '__main__':
    main()
