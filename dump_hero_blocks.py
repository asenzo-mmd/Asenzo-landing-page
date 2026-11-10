with open('accretion_dump.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re

matches = [m.start() for m in re.finditer(r'data-framer-name=[\"\']Hero[\"\']', html)]
with open('hero_blocks.txt', 'w', encoding='utf-8') as out:
    for i, idx in enumerate(matches):
        out.write(f"\n\n==================== HERO {i} ====================\n\n")
        out.write(html[idx:idx+4000])

print("Wrote hero_blocks.txt")
