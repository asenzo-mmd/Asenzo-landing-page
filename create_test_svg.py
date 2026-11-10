# Let's create an SVG test file to preview the exact curve and layered gradient
svg_content = '''<svg viewBox="0 0 1920 600" width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Layered Sunset Gradient: Warm Beige -> Orange -> Deep Red -> Black -->
    <linearGradient id="waveSunsetGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#D9C3AB" stop-opacity="0.95" />
      <stop offset="12%" stop-color="#F16001" stop-opacity="1" />
      <stop offset="32%" stop-color="#C10801" stop-opacity="1" />
      <stop offset="65%" stop-color="#140203" stop-opacity="1" />
      <stop offset="100%" stop-color="#000000" stop-opacity="1" />
    </linearGradient>

    <!-- Horizontal Edge Fade Gradient for the Rim Glow -->
    <linearGradient id="waveRimGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#F16001" stop-opacity="0" />
      <stop offset="15%" stop-color="#C10801" stop-opacity="0.4" />
      <stop offset="35%" stop-color="#F16001" stop-opacity="0.9" />
      <stop offset="50%" stop-color="#D9C3AB" stop-opacity="1" />
      <stop offset="65%" stop-color="#F16001" stop-opacity="0.9" />
      <stop offset="85%" stop-color="#C10801" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#F16001" stop-opacity="0" />
    </linearGradient>

    <!-- Gaussian Blurs for Multi-layer Atmospheric Illumination -->
    <filter id="softBeigeGlow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="35" result="blur" />
    </filter>
    <filter id="midOrangeGlow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="18" result="blur" />
    </filter>
    <filter id="tightRedGlow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="8" result="blur" />
    </filter>
  </defs>

  <g id="waveGroup">
    <!-- Layer 4: Soft Warm Beige Outer Ambient Illumination (#D9C3AB) -->
    <path d="M -50 580 C 420 560, 480 70, 960 60 C 1440 70, 1500 560, 1970 580"
          fill="none" stroke="#D9C3AB" stroke-width="28" opacity="0.45" filter="url(#softBeigeGlow)" />

    <!-- Layer 3: Bright Orange Illumination (#F16001) -->
    <path d="M -50 580 C 420 560, 480 70, 960 60 C 1440 70, 1500 560, 1970 580"
          fill="none" stroke="#F16001" stroke-width="16" opacity="0.85" filter="url(#midOrangeGlow)" />

    <!-- Layer 2: Deep Red Illumination (#C10801) -->
    <path d="M -50 580 C 420 560, 480 70, 960 60 C 1440 70, 1500 560, 1970 580"
          fill="none" stroke="#C10801" stroke-width="8" opacity="0.95" filter="url(#tightRedGlow)" />

    <!-- Layer 1: Solid Black Base & Sunset Body Transition -->
    <!-- Curve starts at (0, 580), rises to crest at (960, 60), descends to (1920, 580), then closes down into pure #000000 -->
    <path d="M 0 580 C 420 560, 480 60, 960 60 C 1440 60, 1500 560, 1920 580 L 1920 600 L 0 600 Z"
          fill="url(#waveSunsetGrad)" />

    <!-- Sharp Rim Highlight along the exact curve edge -->
    <path d="M 0 580 C 420 560, 480 60, 960 60 C 1440 60, 1500 560, 1920 580"
          fill="none" stroke="url(#waveRimGrad)" stroke-width="2.5" opacity="0.95" />
  </g>
</svg>'''

with open('public/test_wave.svg', 'w', encoding='utf-8') as f:
    f.write(svg_content)

print("Wrote public/test_wave.svg")
