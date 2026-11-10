with open('accretion_dump.html', 'r', encoding='utf-8') as f:
    html = f.read()

keywords = ['Home Scroll Section', 'Hero animation', 'Background gradient']
with open('hero_animation_inspect.html', 'w', encoding='utf-8') as out:
    for kw in keywords:
        pos = html.find(kw)
        out.write(f"\n\n==================== KEYWORD: {kw} (pos: {pos}) ====================\n\n")
        if pos != -1:
            out.write(html[max(0, pos-500):min(len(html), pos+6000)])

print("Wrote hero_animation_inspect.html")
