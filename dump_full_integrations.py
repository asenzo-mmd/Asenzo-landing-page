with open('accretion_dump.html', 'r', encoding='utf-8') as f:
    html = f.read()

pos = html.find('id="integrations"')
snippet = html[pos:pos+35000]

with open('full_integrations_section.html', 'w', encoding='utf-8') as out:
    out.write(snippet)

print("Wrote full_integrations_section.html, length:", len(snippet))
