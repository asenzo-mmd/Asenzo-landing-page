with open('accretion_dump.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re

for cls in ['framer-t1cbn2', 'framer-151z206', 'framer-ghv5fp', 'framer-11aiap4']:
    pos = html.find(cls)
    print(f"Class '{cls}': pos={pos}")
    if pos != -1:
        # search for CSS rules mentioning this class
        css_matches = re.findall(r'\.' + cls + r'[^\{]*\{[^\}]+\}', html)
        for c in css_matches:
            print("  CSS:", c)
