with open('full_integrations_section.html', 'r', encoding='utf-8') as f:
    text = f.read()

import re

# Look for all data-framer-name in this section
names = re.findall(r'data-framer-name="([^"]+)"', text)
print("All framer names in integrations section:")
seen = []
for n in names:
    if n not in seen:
        seen.append(n)
        print("  -", n)

# Look for SVGs or images or logos
imgs = re.findall(r'<img[^>]+>', text)
print(f"\nImages in section: {len(imgs)}")
for img in imgs:
    print("  IMG:", img[:200])

svgs = re.findall(r'<svg[^>]*>.*?</svg>', text, re.DOTALL)
print(f"\nSVGs in section: {len(svgs)}")
for s in svgs:
    print("  SVG:", s[:200])
