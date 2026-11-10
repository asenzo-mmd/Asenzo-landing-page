with open('src/App.jsx.checkpoint1', 'r', encoding='utf-8') as f:
    text = f.read()

import re
classes = set(re.findall(r'className=["\']([^"\']+)["\']', text))
print("Classes in checkpoint1:", classes)
