with open('accretion_dump.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re

pos = html.find('id="integrations"')
print("pos of id=integrations:", pos)
if pos != -1:
    with open('integrations_raw_snippet.html', 'w', encoding='utf-8') as out:
        out.write(html[max(0, pos-200):min(len(html), pos+12000)])
    print("Wrote integrations_raw_snippet.html")
else:
    # search for integrations in headings
    matches = [m.start() for m in re.finditer(r'<section[^>]*id=[\"\']integrations', html, re.I)]
    print("section matches:", matches)
