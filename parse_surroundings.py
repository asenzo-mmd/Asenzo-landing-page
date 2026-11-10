with open('hero_surroundings.html', 'r', encoding='utf-8') as f:
    content = f.read()

import re

# find all img, svg, div with background, etc.
imgs = re.findall(r'<img[^>]+>', content)
print(f"Images: {len(imgs)}")
for img in imgs:
    print("IMG:", img)

divs_with_bg = re.findall(r'<div[^>]*style=[\"\'][^\"\']*background[^\"\']*[\"\'][^>]*>', content)
print(f"Divs with bg: {len(divs_with_bg)}")
for d in divs_with_bg[:10]:
    print("DIV BG:", d)

# Let's search for any framer component names or data-framer-name
framer_names = re.findall(r'data-framer-name=[\"\']([^\"\']+)[\"\']', content)
print(f"Framer names: {set(framer_names)}")
