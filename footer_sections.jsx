function AccretionTestimonials({ onOpenModal }) {
  return (
    <section id="testimonials" style={{ backgroundColor: "#000000", padding: "100px 0" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "inline-flex", marginBottom: 16 }}>
            <div className="badge-pill-dark">
              <span style={{ color: "#ff6207" }}>✦</span>
              <span>TESTIMONIALS</span>
            </div>
          </div>
          <h2
            style={{
              fontFamily: "'Switzer', 'Inter', sans-serif",
              fontSize: "clamp(30px, 4.2vw, 52px)",
              fontWeight: 600,
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              maxWidth: 760,
              margin: "0 auto 16px auto"
            }}
          >
            See how ASENZO empowers teams to achieve more
          </h2>
          <p style={{ fontSize: 16, color: "#8e8e93", maxWidth: 540, margin: "0 auto" }}>
            Hear how our platform is helping teams deliver results faster, smarter, and efficiently.
          </p>
        </div>

        {/* Bento Columns */}
        <div
          className="desktop-grid-3"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            alignItems: "start"
          }}
        >
          {/* Column 1 */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {/* Rating Card */}
            <div className="bento-dark-card" style={{ padding: 32 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 12 }}>
                <span style={{ fontSize: 48, fontWeight: 700, fontFamily: "'Switzer', 'Inter', sans-serif", color: "#ffffff" }}>
                  4.9
                </span>
                <span style={{ fontSize: 20, color: "#8e8e93" }}>/5</span>
              </div>
              <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: "#faaf01", fontSize: 18 }}>★</span>
                ))}
              </div>
              <p style={{ fontSize: 14, color: "#8e8e93", marginBottom: 20 }}>
                + 82 Clients worldwide who love our service
              </p>
              <button
                onClick={onOpenModal}
                style={{
                  width: "100%",
                  height: 38,
                  borderRadius: 8,
                  backgroundColor: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "#ffffff",
                  fontSize: 13,
                  fontWeight: 500,
                  cursor: "pointer"
                }}
              >
                Leave a review
              </button>
            </div>

            {/* Testimonial Taylor S. */}
            <div className="bento-dark-card" style={{ padding: 28 }}>
              <p style={{ fontSize: 14.5, color: "#d1d1d6", lineHeight: 1.6, marginBottom: 20 }}>
                "What I love about ASENZO is that it doesn't force you into one rigid way of working. It molds around our actual operations."
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <img
                  src="/accretion/images/XzPqOpC1crNbh8XJC0EV4xhmE.png"
                  alt="Taylor S."
                  style={{ width: 36, height: 36, borderRadius: "50%" }}
                />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#ffffff" }}>Taylor S.</div>
                  <div style={{ fontSize: 12, color: "#8e8e93" }}>HorizonWorks</div>
                </div>
              </div>
            </div>

            {/* Testimonial Jonah P. */}
            <div className="bento-dark-card" style={{ padding: 28 }}>
              <p style={{ fontSize: 14.5, color: "#d1d1d6", lineHeight: 1.6, marginBottom: 20 }}>
                "It's like the noise has been stripped away. The interface is clean, the automations are smart, and I can finally focus on what matters."
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <img
                  src="/accretion/images/Zn78cweLmTcLcOuWTrjfpbaHTI.png"
                  alt="Jonah P."
                  style={{ width: 36, height: 36, borderRadius: "50%" }}
                />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#ffffff" }}>Jonah P.</div>
                  <div style={{ fontSize: 12, color: "#8e8e93" }}>Horizon Labs</div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {/* Testimonial Elena N. */}
            <div className="bento-dark-card" style={{ padding: 28 }}>
              <p style={{ fontSize: 14.5, color: "#d1d1d6", lineHeight: 1.6, marginBottom: 20 }}>
                "I love how easy it is to jump between projects. No more wasting time figuring out what's next."
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <img
                  src="/accretion/images/8jzU03uYomAhdoLFDzGYiN8OyE.png"
                  alt="Elena N."
                  style={{ width: 36, height: 36, borderRadius: "50%" }}
                />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#ffffff" }}>Elena N.</div>
                  <div style={{ fontSize: 12, color: "#8e8e93" }}>Studio Polaris</div>
                </div>
              </div>
            </div>

            {/* Testimonial David O. */}
            <div className="bento-dark-card" style={{ padding: 28 }}>
              <p style={{ fontSize: 14.5, color: "#d1d1d6", lineHeight: 1.6, marginBottom: 20 }}>
                "The mobile app is a game-changer. I can check in on projects, add updates, or review tasks while I'm commuting. It keeps me connected without slowing me down."
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <img
                  src="/accretion/images/Y1c6sZVk1PbgRVSJTtci732g8.png"
                  alt="David O."
                  style={{ width: 36, height: 36, borderRadius: "50%" }}
                />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#ffffff" }}>David O.</div>
                  <div style={{ fontSize: 12, color: "#8e8e93" }}>NimbusWorks</div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {/* Testimonial Hannah S. */}
            <div className="bento-dark-card" style={{ padding: 28 }}>
              <p style={{ fontSize: 14.5, color: "#d1d1d6", lineHeight: 1.6, marginBottom: 20 }}>
                "Our clients noticed the difference right away. Clear progress, better communication, and fewer delays—everything just feels smoother now."
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <img
                  src="/accretion/images/N5Gc89wmCNp1BVxJR8Q7TnmYWA.png"
                  alt="Hannah S."
                  style={{ width: 36, height: 36, borderRadius: "50%" }}
                />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#ffffff" }}>Hannah S.</div>
                  <div style={{ fontSize: 12, color: "#8e8e93" }}>Everpath</div>
                </div>
              </div>
            </div>

            {/* Radiant Orange Metric Card */}
            <div className="bento-orange-card">
              <div style={{ fontSize: 44, fontWeight: 800, fontFamily: "'Switzer', 'Inter', sans-serif", marginBottom: 6 }}>
                10x
              </div>
              <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 24 }}>
                Faster project handoffs & execution
              </div>
              <div style={{ height: 1, backgroundColor: "rgba(255, 255, 255, 0.2)", marginBottom: 24 }} />
              <div style={{ fontSize: 32, fontWeight: 700, fontFamily: "'Switzer', 'Inter', sans-serif", marginBottom: 6 }}>
                +85%
              </div>
              <div style={{ fontSize: 14, opacity: 0.9 }}>
                Increase in cross-functional team output
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 10. PRICING TIERS
// ==========================================
function AccretionPricing({ isYearly, setIsYearly, onOpenModal }) {
  const plans = [
    {
      name: "Starter",
      badge: "Free",
      price: "$0",
      period: "forever",
      desc: "For individuals and small experiments getting started with task management.",
      features: [
        "Up to 3 projects",
        "50 tasks per month",
        "Mobile & desktop access",
        "Basic checklists"
      ],
      isPopular: false,
      btnText: "Get started"
    },
    {
      name: "Basic",
      badge: "Popular",
      price: isYearly ? "$14" : "$18",
      period: "per month",
      desc: "Ideal for growing teams requiring continuous task automation and collaboration.",
      features: [
        "Unlimited projects",
        "Unlimited tasks",
        "Task due dates & reminders",
        "Share with up to 3 collaborators"
      ],
      isPopular: false,
      btnText: "Get started"
    },
    {
      name: "Pro",
      badge: "Recommended",
      price: isYearly ? "$26" : "$32",
      period: "per month",
      desc: "The complete productivity stack for fast-moving companies and operators.",
      features: [
        "Everything in Basic, plus:",
        "Unlimited personal tasks",
        "Basic projects & checklists",
        "Mobile & desktop access",
        "Share with up to 10 collaborators"
      ],
      isPopular: true,
      btnText: "Get started"
    },
    {
      name: "Enterprise",
      badge: "Custom",
      price: "Custom",
      period: "tailored billing",
      desc: "Dedicated infrastructure, SLA guarantees, and custom security integrations.",
      features: [
        "Custom workflows & automations",
        "Advanced reporting & insights",
        "Role-based permissions",
        "Integrations (Slack, Google, Notion, etc.)",
        "Dedicated SLA & 24/7 priority support"
      ],
      isPopular: false,
      btnText: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" style={{ backgroundColor: "#000000", padding: "100px 0" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ display: "inline-flex", marginBottom: 16 }}>
            <div className="badge-pill-dark">
              <span style={{ color: "#ff6207" }}>✦</span>
              <span>PRICING</span>
            </div>
          </div>
          <h2
            style={{
              fontFamily: "'Switzer', 'Inter', sans-serif",
              fontSize: "clamp(30px, 4.2vw, 52px)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              marginBottom: 16
            }}
          >
            Pricing
          </h2>
          <p style={{ fontSize: 16, color: "#8e8e93", maxWidth: 540, margin: "0 auto 32px auto" }}>
            Choose the plan that matches your workflow — no hidden fees, no surprises.
          </p>

          {/* Monthly / Yearly Toggle */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              padding: 4,
              borderRadius: 9999,
              backgroundColor: "#121214",
              border: "1px solid rgba(255, 255, 255, 0.08)"
            }}
          >
            <button
              onClick={() => setIsYearly(false)}
              style={{
                padding: "8px 18px",
                borderRadius: 9999,
                fontSize: 13,
                fontWeight: 500,
                cursor: "pointer",
                border: "none",
                backgroundColor: !isYearly ? "rgba(255, 255, 255, 0.12)" : "transparent",
                color: !isYearly ? "#ffffff" : "#8e8e93",
                transition: "all 0.2s"
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              style={{
                padding: "8px 18px",
                borderRadius: 9999,
                fontSize: 13,
                fontWeight: 500,
                cursor: "pointer",
                border: "none",
                backgroundColor: isYearly ? "#ff6207" : "transparent",
                color: isYearly ? "#ffffff" : "#8e8e93",
                transition: "all 0.2s"
              }}
            >
              Yearly (Save 20%)
            </button>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div
          className="desktop-grid-4"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 20
          }}
        >
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="bento-dark-card"
              style={{
                padding: "32px 24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderColor: plan.isPopular ? "#ff6207" : "rgba(255, 255, 255, 0.08)",
                boxShadow: plan.isPopular ? "0 0 35px rgba(255, 98, 7, 0.2)" : "none",
                position: "relative"
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 600, color: "#ffffff" }}>{plan.name}</h3>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      padding: "4px 10px",
                      borderRadius: 9999,
                      backgroundColor: plan.isPopular ? "rgba(255, 98, 7, 0.15)" : "rgba(255, 255, 255, 0.06)",
                      color: plan.isPopular ? "#ff6207" : "#8e8e93",
                      border: plan.isPopular ? "1px solid rgba(255, 98, 7, 0.3)" : "none"
                    }}
                  >
                    {plan.badge}
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 8 }}>
                  <span style={{ fontSize: 36, fontWeight: 700, fontFamily: "'Switzer', 'Inter', sans-serif", color: "#ffffff" }}>
                    {plan.price}
                  </span>
                  <span style={{ fontSize: 13, color: "#8e8e93" }}>{plan.period}</span>
                </div>

                <p style={{ fontSize: 13, color: "#8e8e93", lineHeight: 1.5, marginBottom: 24, minHeight: 40 }}>
                  {plan.desc}
                </p>

                <div style={{ height: 1, backgroundColor: "rgba(255, 255, 255, 0.06)", marginBottom: 20 }} />

                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13, color: "#d1d1d6" }}>
                      <span style={{ color: "#ff6207", fontSize: 14 }}>✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenModal}
                style={{
                  width: "100%",
                  height: 42,
                  borderRadius: 9999,
                  fontSize: 13.5,
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  border: plan.isPopular ? "1px solid rgba(255, 255, 255, 0.2)" : "1px solid rgba(255, 255, 255, 0.1)",
                  backgroundColor: plan.isPopular ? "#ff6207" : "rgba(255, 255, 255, 0.05)",
                  color: "#ffffff"
                }}
              >
                {plan.btnText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 11. FAQ ACCORDION
// ==========================================
function AccretionFAQ({ openIndex, setOpenIndex }) {
  const faqs = [
    {
      q: "Is there a free version?",
      a: "Yes! We offer a free plan designed to help individuals and small teams get started with task management. It includes essential features like creating tasks, assigning them, setting deadlines, and tracking progress. The free version is perfect for testing out the platform and seeing how it can fit into your workflow before committing to a paid plan."
    },
    {
      q: "Can I change my plan later?",
      a: "Absolutely. You have full flexibility to upgrade, downgrade, or switch between plans at any time. If your team grows or your needs change, you can easily adjust your plan without losing any of your data or progress. Changes are reflected immediately, so you'll always have the features you need."
    },
    {
      q: "Do you offer a mobile app?",
      a: "Yes! We provide mobile apps for both iOS and Android, allowing you to manage tasks, track progress, and collaborate with your team from anywhere. Whether you're commuting, traveling, or working remotely, the mobile app ensures your workflow stays seamless across all devices."
    },
    {
      q: "Do you offer discounts for yearly billing?",
      a: "Yes, we do! Choosing annual billing comes with a discount compared to monthly plans, allowing you to save while committing to a full year of productivity. It's a great option for teams or individuals who want to maximize value and minimize cost."
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept all major credit cards including Visa, Mastercard, and American Express, as well as digital wallets like Apple Pay and Google Pay. For enterprise annual plans, we also support direct bank transfers and invoicing."
    }
  ];

  return (
    <section id="faq" style={{ backgroundColor: "#000000", padding: "100px 0" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: 48,
            alignItems: "start"
          }}
          className="desktop-grid-3"
        >
          {/* Left Title */}
          <div>
            <div style={{ display: "inline-flex", marginBottom: 16 }}>
              <div className="badge-pill-dark">
                <span style={{ color: "#ff6207" }}>✦</span>
                <span>FAQ</span>
              </div>
            </div>
            <h2
              style={{
                fontFamily: "'Switzer', 'Inter', sans-serif",
                fontSize: "clamp(30px, 3.8vw, 48px)",
                fontWeight: 600,
                letterSpacing: "-0.03em",
                color: "#ffffff",
                marginBottom: 16
              }}
            >
              Frequently asked questions
            </h2>
            <p style={{ fontSize: 16, color: "#8e8e93", lineHeight: 1.6 }}>
              Get answers to commonly asked questions.
            </p>
          </div>

          {/* Right Accordions */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  style={{
                    borderRadius: 14,
                    backgroundColor: "#0d0d0e",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    padding: "24px 28px",
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h3
                      style={{
                        fontSize: 17,
                        fontWeight: 600,
                        color: isOpen ? "#ffffff" : "#d1d1d6",
                        letterSpacing: "-0.015em"
                      }}
                    >
                      {faq.q}
                    </h3>
                    <div
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: "50%",
                        backgroundColor: isOpen ? "#ff6207" : "rgba(255, 255, 255, 0.06)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 15,
                        fontWeight: 600,
                        color: isOpen ? "#ffffff" : "#8e8e93",
                        transition: "all 0.2s"
                      }}
                    >
                      {isOpen ? "−" : "+"}
                    </div>
                  </div>
                  {isOpen && (
                    <p
                      style={{
                        marginTop: 16,
                        fontSize: 14.5,
                        lineHeight: 1.65,
                        color: "#a1a1a6"
                      }}
                    >
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 12. SUNSET HORIZON WAVE BOTTOM (Inverted 180deg)
// ==========================================
function AccretionHorizonWaveBottom() {
  return (
    <div
      style={{
        backgroundColor: "#000000",
        position: "relative",
        overflow: "hidden",
        marginBottom: -2,
        paddingBottom: 0
      }}
    >
      <img
        src="/accretion/images/7JW5hiKTuIExiSp00XQILMZFt8.png"
        alt="Inverted Horizon Sunset Wave"
        style={{
          width: "100%",
          display: "block",
          transform: "rotate(180deg) scaleY(1.02)",
          marginBottom: -4
        }}
      />
    </div>
  );
}

// ==========================================
// 13. FINAL CTA & NEWSLETTER (Cream #f8f6f1)
// ==========================================
function AccretionFinalCTA({ email, setEmail, subscribed, setSubscribed, onOpenModal }) {
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <section
      style={{
        backgroundColor: "#f8f6f1",
        color: "#0a0a0a",
        padding: "100px 0 80px 0",
        position: "relative"
      }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        {/* Main CTA Block */}
        <h2
          style={{
            fontFamily: "'Switzer', 'Inter', sans-serif",
            fontSize: "clamp(34px, 5.2vw, 68px)",
            fontWeight: 700,
            lineHeight: 1.06,
            letterSpacing: "-0.035em",
            color: "#0a0a0a",
            maxWidth: 780,
            margin: "0 auto 20px auto"
          }}
        >
          Pull your team in with ASENZO
        </h2>
        <p
          style={{
            fontSize: "clamp(16px, 1.8vw, 19px)",
            lineHeight: 1.6,
            color: "#5f5f63",
            maxWidth: 560,
            margin: "0 auto 36px auto"
          }}
        >
          Fast to set up, effortless to use, and designed to keep everyone moving forward together.
        </p>
        <button
          onClick={onOpenModal}
          className="btn-accretion-black"
          style={{ height: 48, padding: "0 32px", fontSize: 15 }}
        >
          Get started
        </button>

        {/* Newsletter Box */}
        <div
          style={{
            marginTop: 90,
            maxWidth: 640,
            margin: "90px auto 0 auto",
            padding: "36px 32px",
            borderRadius: 20,
            backgroundColor: "#ffffff",
            border: "1px solid rgba(0, 0, 0, 0.08)",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.04)"
          }}
        >
          <h3
            style={{
              fontFamily: "'Switzer', 'Inter', sans-serif",
              fontSize: 22,
              fontWeight: 600,
              color: "#0a0a0a",
              marginBottom: 8
            }}
          >
            What's new, straight to you
          </h3>
          <p style={{ fontSize: 14, color: "#666666", marginBottom: 24 }}>
            Get our latest system releases, productivity frameworks, and team operational templates.
          </p>

          {subscribed ? (
            <div
              style={{
                padding: "12px 20px",
                borderRadius: 8,
                backgroundColor: "rgba(39, 201, 63, 0.1)",
                color: "#1c822e",
                fontSize: 14,
                fontWeight: 600
              }}
            >
              ✓ Thank you for subscribing! We'll keep you updated.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} style={{ display: "flex", gap: 10 }}>
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flex: 1,
                  height: 44,
                  padding: "0 16px",
                  borderRadius: 9999,
                  border: "1px solid rgba(0, 0, 0, 0.15)",
                  backgroundColor: "#fbfaf8",
                  fontSize: 14,
                  outline: "none"
                }}
              />
              <button
                type="submit"
                style={{
                  height: 44,
                  padding: "0 24px",
                  borderRadius: 9999,
                  backgroundColor: "#000000",
                  color: "#ffffff",
                  fontSize: 13.5,
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer"
                }}
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 14. FOOTER (Cream #f8f6f1)
// ==========================================
function AccretionFooter() {
  return (
    <footer
      style={{
        backgroundColor: "#f8f6f1",
        color: "#5f5f63",
        borderTop: "1px solid rgba(0, 0, 0, 0.08)",
        padding: "60px 0 40px 0"
      }}
    >
      <div className="container">
        <div
          className="desktop-grid-4"
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
            gap: 40,
            marginBottom: 60
          }}
        >
          {/* Brand Col */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 8,
                  background: "linear-gradient(135deg, #ff6207 0%, #df5b00 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <span style={{ fontSize: 13, fontWeight: 800, color: "#ffffff" }}>A</span>
              </div>
              <span
                style={{
                  fontFamily: "'Switzer', 'Inter', sans-serif",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#0a0a0a"
                }}
              >
                ASENZO
              </span>
            </div>
            <p style={{ fontSize: 13.5, lineHeight: 1.6, maxWidth: 260, marginBottom: 20 }}>
              The unified growth operating system powering high-output modern teams.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#27c93f" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#27c93f" }} />
              <span>All systems operational 99.99%</span>
            </div>
          </div>

          {/* Product Col */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, color: "#0a0a0a", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>
              Product
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 13.5 }}>
              <a href="#features" style={{ color: "inherit", textDecoration: "none" }}>Features</a>
              <a href="#how-it-works" style={{ color: "inherit", textDecoration: "none" }}>How it works</a>
              <a href="#integrations" style={{ color: "inherit", textDecoration: "none" }}>Integrations</a>
              <a href="#pricing" style={{ color: "inherit", textDecoration: "none" }}>Pricing</a>
              <a href="#faq" style={{ color: "inherit", textDecoration: "none" }}>Changelog</a>
            </div>
          </div>

          {/* Company Col */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, color: "#0a0a0a", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>
              Company
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 13.5 }}>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>About ASENZO</a>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Careers</a>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Press Kit</a>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Contact</a>
            </div>
          </div>

          {/* Legal / Social Col */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, color: "#0a0a0a", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>
              Resources
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 13.5 }}>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Documentation</a>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>API Reference</a>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Community</a>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Security & Privacy</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: 30,
            borderTop: "1px solid rgba(0, 0, 0, 0.06)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
            fontSize: 12.5
          }}
        >
          <div>
            © {new Date().getFullYear()} ASENZO Inc. All rights reserved.
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Privacy Policy</a>
            <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Terms of Service</a>
            <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ==========================================
// 15. INTERACTIVE DIAGNOSTIC & DEMO MODAL
// ==========================================
function DiagnosticModal({ onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    teamSize: "10-50",
    challenge: "Tool sprawl & siloed workflows",
    name: "",
    email: "",
    company: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleFinish = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 520,
          backgroundColor: "#111113",
          border: "1px solid rgba(255, 98, 7, 0.35)",
          borderRadius: 20,
          padding: 36,
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(255, 98, 7, 0.15)",
          color: "#ffffff",
          position: "relative"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            width: 32,
            height: 32,
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            border: "none",
            color: "#ffffff",
            fontSize: 16,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          ✕
        </button>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #ff6207 0%, #27c93f 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px auto",
                fontSize: 24
              }}
            >
              ✓
            </div>
            <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>
              Session Requested!
            </h3>
            <p style={{ fontSize: 14.5, color: "#8e8e93", lineHeight: 1.6, marginBottom: 28 }}>
              Thank you, {formData.name || "there"}. We've received your diagnostic details for {formData.company || "your team"}. Our principal solutions architect will reach out within 2 hours.
            </p>
            <button
              onClick={onClose}
              className="btn-accretion-orange"
              style={{ width: "100%" }}
            >
              Back to ASENZO
            </button>
          </div>
        ) : (
          <div>
            <div style={{ display: "inline-flex", marginBottom: 12 }}>
              <div className="badge-pill-dark">
                <span style={{ color: "#ff6207" }}>✦</span>
                <span>STEP {step} OF 3</span>
              </div>
            </div>

            <h3
              style={{
                fontFamily: "'Switzer', 'Inter', sans-serif",
                fontSize: 24,
                fontWeight: 700,
                marginBottom: 8
              }}
            >
              Book an ASENZO Architecture Call
            </h3>
            <p style={{ fontSize: 14, color: "#8e8e93", marginBottom: 24 }}>
              Diagnose bottlenecks, explore integrations, and test custom workflow automations.
            </p>

            {step === 1 && (
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#d1d1d6", marginBottom: 8 }}>
                  What is your team size?
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10, marginBottom: 24 }}>
                  {["1-10 members", "10-50 members", "50-200 members", "200+ enterprise"].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setFormData({ ...formData, teamSize: opt })}
                      style={{
                        padding: "12px",
                        borderRadius: 10,
                        backgroundColor: formData.teamSize === opt ? "rgba(255, 98, 7, 0.15)" : "rgba(255, 255, 255, 0.04)",
                        border: formData.teamSize === opt ? "1px solid #ff6207" : "1px solid rgba(255, 255, 255, 0.08)",
                        color: formData.teamSize === opt ? "#ffffff" : "#8e8e93",
                        fontSize: 13,
                        fontWeight: 500,
                        cursor: "pointer"
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="btn-accretion-orange"
                  style={{ width: "100%" }}
                >
                  Continue →
                </button>
              </div>
            )}

            {step === 2 && (
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#d1d1d6", marginBottom: 8 }}>
                  What is your primary operational objective?
                </label>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                  {[
                    "Tool sprawl & fragmented team context",
                    "Slow execution on cross-functional handoffs",
                    "Need automated reporting & analytics",
                    "Scaling acquisition and client onboarding"
                  ].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setFormData({ ...formData, challenge: opt })}
                      style={{
                        padding: "12px 16px",
                        borderRadius: 10,
                        textAlign: "left",
                        backgroundColor: formData.challenge === opt ? "rgba(255, 98, 7, 0.15)" : "rgba(255, 255, 255, 0.04)",
                        border: formData.challenge === opt ? "1px solid #ff6207" : "1px solid rgba(255, 255, 255, 0.08)",
                        color: formData.challenge === opt ? "#ffffff" : "#8e8e93",
                        fontSize: 13,
                        fontWeight: 500,
                        cursor: "pointer"
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    style={{
                      height: 44,
                      padding: "0 20px",
                      borderRadius: 9999,
                      backgroundColor: "rgba(255, 255, 255, 0.06)",
                      border: "none",
                      color: "#ffffff",
                      fontSize: 13,
                      cursor: "pointer"
                    }}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="btn-accretion-orange"
                    style={{ flex: 1 }}
                  >
                    Continue →
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <form onSubmit={handleFinish}>
                <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 24 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 12.5, color: "#a1a1a6", marginBottom: 6 }}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: "100%",
                        height: 42,
                        borderRadius: 8,
                        backgroundColor: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        padding: "0 14px",
                        color: "#ffffff",
                        fontSize: 14,
                        outline: "none"
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 12.5, color: "#a1a1a6", marginBottom: 6 }}>
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: "100%",
                        height: 42,
                        borderRadius: 8,
                        backgroundColor: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        padding: "0 14px",
                        color: "#ffffff",
                        fontSize: 14,
                        outline: "none"
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 12.5, color: "#a1a1a6", marginBottom: 6 }}>
                      Company Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Acme Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      style={{
                        width: "100%",
                        height: 42,
                        borderRadius: 8,
                        backgroundColor: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        padding: "0 14px",
                        color: "#ffffff",
                        fontSize: 14,
                        outline: "none"
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: "flex", gap: 10 }}>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    style={{
                      height: 44,
                      padding: "0 20px",
                      borderRadius: 9999,
                      backgroundColor: "rgba(255, 255, 255, 0.06)",
                      border: "none",
                      color: "#ffffff",
                      fontSize: 13,
                      cursor: "pointer"
                    }}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="btn-accretion-orange"
                    style={{ flex: 1 }}
                  >
                    Confirm & Schedule Call
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
