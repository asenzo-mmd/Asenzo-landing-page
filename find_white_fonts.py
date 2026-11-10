with open('src/App.jsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

import re

white_font_patterns = [
    r"color:\s*['\"]#(?:fff|ffffff|f5f5f5|eeeeee|e0e0e0|cccccc)['\"]",
    r"color:\s*['\"]rgba\(255,\s*255,\s*255"
]

print("Scanning for white font colors...")
found = []
for i, l in enumerate(lines):
    # Skip buttons with black/orange backgrounds or cards with orange/dark background like the envelope card
    for pat in white_font_patterns:
        if re.search(pat, l, re.IGNORECASE):
            found.append((i + 1, l.strip()))

print(f"Found {len(found)} lines with white font colors:")
for line_no, text in found[:30]:
    print(f"Line {line_no}: {text}")
