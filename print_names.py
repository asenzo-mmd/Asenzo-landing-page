import re

with open('sections_list.txt', 'r', encoding='utf-8') as f:
    lines = f.readlines()

print(f"Total entries: {len(lines)}")
seen = set()
for l in lines:
    m = re.search(r'data-framer-name="([^"]+)"', l)
    if m:
        name = m.group(1)
        if name not in seen and len(name) > 3 and not name.startswith('framer-'):
            seen.add(name)
            print("Name:", name)
