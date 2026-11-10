with open('accretion_dump.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re

# Let's search for the text in the second section:
# In accretion, what are the headers?
# Let's look for h2, h3 tags in accretion_dump.html
headings = re.findall(r'<h[1-4][^>]*>(.*?)</h[1-4]>', html, re.DOTALL)
print(f"Found {len(headings)} headings:")
for h in headings[:15]:
    clean = re.sub(r'<[^>]+>', '', h).strip()
    if clean:
        print("  H:", clean[:80])
