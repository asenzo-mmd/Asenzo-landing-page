with open('accretion_dump.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re

pos = html.find('class="framer-11aiap4-container"')
print("Found at:", pos)
if pos != -1:
    print(html[pos-300:pos+1500])
