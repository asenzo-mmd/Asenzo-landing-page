with open('src/index.css', 'r', encoding='utf-8') as f:
    css = f.read()

new_animations = """
/* Heavy and High Center Power Hub Glow Pulse */
@keyframes heavyHighGlowPulse {
  0%, 100% {
    opacity: 0.85;
    transform: scale(0.98);
    filter: drop-shadow(0 0 30px rgba(255, 85, 0, 0.75)) drop-shadow(0 0 60px rgba(255, 140, 0, 0.45));
  }
  50% {
    opacity: 1;
    transform: scale(1.04);
    filter: drop-shadow(0 0 45px rgba(255, 95, 0, 0.95)) drop-shadow(0 0 90px rgba(255, 150, 0, 0.7));
  }
}

@keyframes heavyHorizonRise {
  0%, 100% {
    opacity: 0.88;
    transform: translateY(0) scaleY(1);
  }
  50% {
    opacity: 1;
    transform: translateY(-8px) scaleY(1.06);
  }
}
"""

if 'heavyHighGlowPulse' not in css:
    with open('src/index.css', 'w', encoding='utf-8') as f:
        f.write(css + '\n' + new_animations)
    print("Added heavyHighGlowPulse to index.css")
else:
    print("heavyHighGlowPulse already in index.css")
