with open('accretion_dump.html', 'r', encoding='utf-8') as f:
    html = f.read()

pos = html.find('All your work pulled')
with open('hero_surroundings.html', 'w', encoding='utf-8') as out:
    out.write(html[max(0, pos-1000):min(len(html), pos+15000)])

print("Wrote hero_surroundings.html successfully")
