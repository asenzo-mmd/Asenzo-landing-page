with open('integrations_raw_snippet.html', 'r', encoding='utf-8') as f:
    text = f.read()

import re

# find headings
headings = re.findall(r'<h[1-4][^>]*>(.*?)</h[1-4]>', text)
for h in headings:
    print("Heading:", re.sub(r'<[^>]+>', '', h).strip())

# find paragraphs
ps = re.findall(r'<p[^>]*>(.*?)</p>', text)
for p in ps[:10]:
    clean = re.sub(r'<[^>]+>', '', p).strip()
    if len(clean) > 5:
        print("P:", clean[:80])

# find framer names
names = re.findall(r'data-framer-name="([^"]+)"', text)
print("Framer names:", set(names))
