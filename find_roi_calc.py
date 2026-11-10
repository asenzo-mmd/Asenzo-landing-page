with open('src/App.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = [m.start() for m in re.finditer(r'ClearROICalculator', text)]
print("ClearROICalculator matches:", matches)
for m in matches:
    print(text[max(0, m - 60):min(len(text), m + 120)].replace('\n', ' '))
