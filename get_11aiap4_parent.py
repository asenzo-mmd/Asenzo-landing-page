with open('accretion_dump.html', 'r', encoding='utf-8') as f:
    html = f.read()

pos = html.find('framer-11aiap4-container')
print("Position:", pos)
print(html[pos-800:pos+300])
