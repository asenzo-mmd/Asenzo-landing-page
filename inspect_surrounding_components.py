with open('src/App.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

import re

for label, query in [("Our Services", "Our Services"), ("DIAGNOSIS", "DIAGNOSIS"), ("Subscribe", "What's new, straight to you")]:
    idx = text.find(query)
    if idx != -1:
        # Find preceding function or const declaration
        prefix = text[:idx]
        func_match = list(re.finditer(r'(const\s+([A-Za-z0-9_]+)\s*=\s*\(|function\s+([A-Za-z0-9_]+))', prefix))
        if func_match:
            last_func = func_match[-1].group(0)
            print(f"{label} is inside component: {last_func}")
            print("Lines around match:")
            lines = text[max(0, idx - 150):min(len(text), idx + 250)]
            print(lines)
            print("=" * 60)
