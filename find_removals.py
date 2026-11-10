with open('src/App.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

import re

queries = ["Our Services", "DIAGNOSIS", "DiagnosticModal", "AIBenefitsSection", "What's new", "straight to you", "Subscribe"]
for q in queries:
    matches = [m.start() for m in re.finditer(re.escape(q), text, re.IGNORECASE)]
    print(f"'{q}': {len(matches)} occurrences")
    for idx in matches[:3]:
        snippet = text[max(0, idx - 40):min(len(text), idx + 100)].replace('\n', ' ')
        print(f"   [{idx}]: ...{snippet}...")
