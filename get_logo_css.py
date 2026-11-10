with open('accretion_dump.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re

pos = html.find('framer-juuih0')
print("Position:", pos)
if pos != -1:
    css_matches = re.findall(r'\.framer-juuih0[^{]*\{[^}]+\}', html)
    for c in css_matches:
        print("CSS:", c)
    # also search for SVG with mask or background
    print(html[pos-100:pos+400])
