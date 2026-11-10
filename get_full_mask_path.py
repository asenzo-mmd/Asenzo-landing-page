with open('accretion_dump.html', 'r', encoding='utf-8') as f:
    html = f.read()

pos = html.find('.framer-rFuua{-webkit-mask:url(')
print(html[pos:pos+1500])
