with open('wave_transition_inspect.html', 'r', encoding='utf-8') as f:
    text = f.read()

import re

# find all images, svgs, gradients, style attributes
svgs = re.findall(r'<svg[^>]*>.*?</svg>', text, re.DOTALL)
print("SVGs in wave snippet:", len(svgs))
for i, s in enumerate(svgs):
    print(f"SVG {i}:", s[:200])

imgs = re.findall(r'<img[^>]+>', text)
print("Images in wave snippet:", len(imgs))
for img in imgs:
    print("IMG:", img)

div_bgs = re.findall(r'style=[\"\'][^\"\']*(?:background|radial|linear|gradient|url|filter)[^\"\']*[\"\']', text)
print("Gradients/filters in wave snippet:", len(div_bgs))
for b in div_bgs:
    print("  STYLE:", b)

framer_names = re.findall(r'data-framer-name=[\"\']([^\"\']+)[\"\']', text)
print("Framer names:", framer_names)
