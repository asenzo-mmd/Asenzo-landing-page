with open('accretion_dump.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re

for phrase in ['fast on any device', 'limitation to how you can work', 'All your work pulled']:
    pos = html.find(phrase)
    print(f"Phrase '{phrase}': pos = {pos}")
    if pos != -1:
        print("--- CONTEXT ---")
        print(html[max(0, pos-400):min(len(html), pos+600)])
