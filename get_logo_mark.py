import urllib.request
import re

# 1. Download lines image
img_url = 'https://framerusercontent.com/images/zqhgN3PVfzbqecQwtwaBJ5c3YX0.png?width=1200&height=540'
try:
    req = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as resp:
        data = resp.read()
    with open('public/accretion_lines.png', 'wb') as f:
        f.write(data)
    print(f"Downloaded accretion_lines.png, size: {len(data)} bytes")
except Exception as e:
    print("Error downloading lines image:", e)

# 2. Find SVG inside Logo Mark in center_visual_exact.html
with open('center_visual_exact.html', 'r', encoding='utf-8') as f:
    text = f.read()

pos_logo = text.find('data-framer-name="Logo Mark"')
if pos_logo != -1:
    snippet = text[pos_logo:pos_logo+2000]
    svg_m = re.search(r'<svg[^>]*>.*?</svg>', snippet, re.DOTALL)
    if svg_m:
        print("FOUND LOGO SVG:")
        print(svg_m.group(0))
    else:
        print("No SVG directly in snippet, printing snippet:")
        print(snippet[:600])
