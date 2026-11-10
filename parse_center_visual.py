with open('center_visual_exact.html', 'r', encoding='utf-8') as f:
    text = f.read()

import re

# print all divs with data-framer-name and styles
matches = re.findall(r'<div[^>]*data-framer-name="([^"]+)"[^>]*style="([^"]*)"[^>]*>', text)
for name, style in matches:
    print(f"NAME: {name}")
    print(f"  STYLE: {style}\n")
