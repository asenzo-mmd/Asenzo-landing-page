with open('integrations_raw_snippet.html', 'r', encoding='utf-8') as f:
    text = f.read()

import re

# find SVGs in the snippet (e.g. connecting lines)
svgs = re.findall(r'<svg[^>]*>.*?</svg>', text, re.DOTALL)
print(f"Total SVGs in snippet: {len(svgs)}")
for i, s in enumerate(svgs[:5]):
    print(f"SVG {i}:", s[:250])

# let's look for categories in text
divs = re.findall(r'data-framer-name="([^"]+)"', text)
for d in divs:
    if d not in ['Container', 'Background', 'Default', 'Variant 1', 'Column']:
        print("Category/Element:", d)
