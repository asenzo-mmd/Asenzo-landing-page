with open('src/App.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

import re

# Find all component names
comps = re.findall(r'(?:function|const)\s+([A-Za-z0-9_]+)\s*(?:=|\()', text)
print("Components in App.jsx:", comps)
