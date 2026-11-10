with open('accretion_dump.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re

# Search for integration keywords in accretion_dump.html
matches = [m.start() for m in re.finditer(r'Connect effortlessly|Integrations', html, re.IGNORECASE)]
print(f"Matches: {len(matches)}")
for idx in matches[:5]:
    print("--- SNIPPET AT", idx, "---")
    snippet = html[max(0, idx-200):min(len(html), idx+1500)]
    print(snippet[:600])
