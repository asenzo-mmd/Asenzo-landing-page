with open('src/App.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

import re

# Find all <button elements and their styling
buttons = re.findall(r'<button[\s\S]*?>', text)
print(f"Total buttons found: {len(buttons)}")
for idx, b in enumerate(buttons):
    print(f"--- Button {idx+1} ---")
    print(b.replace('\n', ' '))
