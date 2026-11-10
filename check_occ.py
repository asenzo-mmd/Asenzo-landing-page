with open('accretion_dump.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re

pos_list = [m.start() for m in re.finditer('7JW5hiKTuIExiSp00XQILMZFt8', html)]
print(f"Found {len(pos_list)} occurrences of 7JW5hiKTuIExiSp00XQILMZFt8")
for i, pos in enumerate(pos_list):
    print(f"\n--- OCCURRENCE {i} ---")
    print(html[max(0, pos-300):min(len(html), pos+400)])
