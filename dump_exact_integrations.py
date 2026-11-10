with open('accretion_dump.html', 'r', encoding='utf-8') as f:
    html = f.read()

pos1 = html.find('id="integrations"')
pos2 = html.find('id="testimonials"')
print(f"integrations pos: {pos1}, testimonials pos: {pos2}, length: {pos2 - pos1}")

with open('exact_integrations_section.html', 'w', encoding='utf-8') as out:
    out.write(html[pos1:pos2])

print("Wrote exact_integrations_section.html")
