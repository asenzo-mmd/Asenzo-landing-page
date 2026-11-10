with open('accretion_dump.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re

# Find all section or main tags or major div containers
sections = re.findall(r'<section[^>]*>|<div[^>]*data-framer-name=[\"\'][^\"\']+[\"\'][^>]*>', html)
with open('sections_list.txt', 'w', encoding='utf-8') as out:
    for s in sections:
        out.write(s + '\n')

print("Wrote sections_list.txt")
