with open('accretion_dump.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re

# In Framer, look for "Hero" container
matches = [m.start() for m in re.finditer(r'data-framer-name=[\"\']Hero[\"\']', html)]
print(f"Matches for Hero: {len(matches)}")
for idx in matches:
    print("--- HERO CONTAINER ---")
    snippet = html[idx:idx+4000]
    # find where the hero container ends or next sibling
    print(snippet[:1500])
