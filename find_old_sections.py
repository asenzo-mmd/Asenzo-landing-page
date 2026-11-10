with open('src/App.jsx.checkpoint1', 'r', encoding='utf-8') as f:
    text = f.read()

import re

# Look for functions, component names, headers, comments
for m in re.finditer(r'(function\s+[A-Za-z0-9_]+|const\s+[A-Za-z0-9_]+\s*=\s*\(|\/\*\s*===+|\/\/\s*===+)', text):
    start = max(0, m.start() - 20)
    print(text[start:m.start()+80].strip())
    print("-" * 40)
