with open('src/index.css', 'r', encoding='utf-8') as f:
    css = f.read()

extra_css = """
/* Responsive Mobile Container */
.mobile-container {
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Asenzo Power Hub Animations */
@keyframes bottomGlowPulse {
  0%, 100% {
    opacity: 0.85;
    filter: drop-shadow(0 0 6px #ff5500) drop-shadow(0 0 14px rgba(255, 85, 0, 0.5));
  }
  50% {
    opacity: 1;
    filter: drop-shadow(0 0 12px #ff8c00) drop-shadow(0 0 24px rgba(255, 140, 0, 0.85));
  }
}

@keyframes powerFlowLeft {
  from {
    stroke-dashoffset: 40;
  }
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes powerFlowRight {
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: 40;
  }
}

@keyframes centerAmbientAura {
  0%, 100% {
    opacity: 0.7;
    transform: scale(0.98);
  }
  50% {
    opacity: 0.95;
    transform: scale(1.03);
  }
}
"""

with open('src/index.css', 'w', encoding='utf-8') as f:
    f.write(css + '\n' + extra_css)

print("Updated index.css successfully!")
