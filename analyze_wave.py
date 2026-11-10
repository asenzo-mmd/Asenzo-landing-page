import re

with open('accretion_dump.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Let's search for keywords: C10801, F16001, D9C3AB, wave, curve, sunset, horizon, etc.
keywords = ['C10801', 'F16001', 'D9C3AB', 'c10801', 'f16001', 'd9c3ab', '193, 8, 1', '241, 96, 1', '217, 195, 171']
for kw in keywords:
    matches = [m.start() for m in re.finditer(kw, html, re.IGNORECASE)]
    print(f"Keyword '{kw}': {len(matches)} matches")
    for idx in matches[:3]:
        start = max(0, idx - 150)
        end = min(len(html), idx + 200)
        print("--- SNIPPET ---")
        print(html[start:end])

# Also search for SVGs or images or styles around the transition
svg_matches = re.findall(r'<svg[^>]+>.*?</svg>', html, re.DOTALL)
print(f"Total SVGs in HTML: {len(svg_matches)}")
for i, s in enumerate(svg_matches):
    if 'path' in s and ('curve' in s or 'wave' in s or 'gradient' in s or 'C' in s or 'M' in s):
        print(f"SVG {i} snippet:", s[:300])
