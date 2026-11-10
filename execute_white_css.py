import re

# 1. Update src/index.css
with open('src/index.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Replace root variables and body/html background for white mode
css_replacement = """@import "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap";

:root {
  /* ASENZO OFFICIAL WHITE DESIGN SYSTEM */
  --color-page-bg: #ffffff;
  --color-surface-dashboard: #ffffff;
  --color-surface-elevated: #f8f8fa;
  --color-surface-secondary: #f4f4f6;
  --color-border-graphite: #e4e4e7;
  --color-border-subtle: rgba(0, 0, 0, 0.08);
  --color-border-hover: rgba(0, 0, 0, 0.16);
  
  /* Typography */
  --color-text-warm-white: #0f0f11;
  --color-text-pure-white: #000000;
  --color-text-secondary: #52525b;
  --color-text-muted: #71717a;
  
  /* Brand Accents */
  --color-burnt-orange: #F16001;
  --color-burnt-orange-deep: #C10801;
  --color-champagne-gold: #F3AD42;
  
  /* Fonts */
  --font-display: "Switzer", "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-body: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: "JetBrains Mono", monospace;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  background-color: #ffffff;
}

body {
  background-color: #ffffff;
  color: #0f0f11;
  font-family: var(--font-body);
  font-size: 15px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  overflow-x: clip; /* NEVER breaks position: sticky! */
}
"""

# Replace the beginning of index.css up to body { ... }
start_body_end = css.find('/* Subtle Technical Perspective Grid */')
if start_body_end != -1:
    css = css_replacement + "\n" + css[start_body_end:]
    with open('src/index.css', 'w', encoding='utf-8') as f:
        f.write(css)
    print("Updated src/index.css to white mode with overflow-x: clip!")
else:
    print("WARNING: Could not find technical perspective grid in index.css")

