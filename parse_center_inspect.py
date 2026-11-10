with open('integrations_center_inspect.html', 'r', encoding='utf-8') as f:
    text = f.read()

import re

# find all images in the center inspect
imgs = re.findall(r'<img[^>]+>', text)
print("Images found:", len(imgs))
for img in imgs:
    print("IMG:", img[:200])

# find all SVGs
svgs = re.findall(r'<svg[^>]*>.*?</svg>', text, re.DOTALL)
print("SVGs found:", len(svgs))
for s in svgs:
    print("SVG:", s[:200])

# find framer names
names = re.findall(r'data-framer-name="([^"]+)"', text)
print("Framer names:", set(names))

# Let's search for styles with background, gradient, border, etc.
bgs = re.findall(r'style="[^"]*(?:background|radial|linear|gradient|box-shadow)[^"]*"', text)
print(f"BGs found: {len(bgs)}")
for b in bgs[:10]:
    print("  STYLE:", b)
