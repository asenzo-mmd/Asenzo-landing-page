with open('integrations_raw_snippet.html', 'r', encoding='utf-8') as f:
    text = f.read()

import re

# Let's inspect the entire structure inside Intergrations Main Container
pos = text.find('Intergrations Main Container')
print("Position of Intergrations Main Container:", pos)
if pos != -1:
    sub = text[pos:pos+10000]
    with open('integrations_center_inspect.html', 'w', encoding='utf-8') as out:
        out.write(sub)
    print("Wrote integrations_center_inspect.html")
