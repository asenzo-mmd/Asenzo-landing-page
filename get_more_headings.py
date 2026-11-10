with open('accretion_dump.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re

headings = re.findall(r'<h[1-4][^>]*>(.*?)</h[1-4]>', html, re.DOTALL)
for i, h in enumerate(headings[14:35]):
    clean = re.sub(r'<[^>]+>', '', h).strip()
    if clean:
        print(f"  H{i+15}:", clean[:100])
