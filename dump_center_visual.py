with open('exact_integrations_section.html', 'r', encoding='utf-8') as f:
    text = f.read()

pos = text.find('zqhgN3PVfzbqecQwtwaBJ5c3YX0.png')
print("Position of image:", pos)
if pos != -1:
    with open('center_visual_exact.html', 'w', encoding='utf-8') as out:
        out.write(text[max(0, pos-1200):min(len(text), pos+4000)])
    print("Wrote center_visual_exact.html")
