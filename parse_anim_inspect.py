with open('hero_animation_inspect.html', 'r', encoding='utf-8') as f:
    text = f.read()

import re

# Look for SVGs or images or styles in hero_animation_inspect.html
svgs = re.findall(r'<svg[^>]*>.*?</svg>', text, re.DOTALL)
print("SVGs found in hero_animation_inspect:", len(svgs))
for s in svgs:
    print("SVG:", s[:200])

imgs = re.findall(r'<img[^>]+>', text)
print("Images found:", len(imgs))
for img in imgs:
    print("IMG:", img)

divs = re.findall(r'<div[^>]*data-framer-name="([^"]+)"[^>]*>', text)
print("Div framer names:", divs)
