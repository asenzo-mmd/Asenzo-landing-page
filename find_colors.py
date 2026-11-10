import re
import urllib.request

with open('accretion_dump.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Find all script src in html
scripts = re.findall(r'https://[^\"]*framerusercontent\.com[^\"]*\.js', html)
print(f"Found {len(scripts)} framer scripts")

for s in scripts:
    # let's download and search for 'wave' or colors
    try:
        req = urllib.request.Request(s, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as resp:
            code = resp.read().decode('utf-8', errors='ignore')
        if any(c in code for c in ['C10801', 'c10801', 'F16001', 'f16001', 'D9C3AB', 'd9c3ab']) or ('193, 8, 1' in code) or ('bezier' in code and 'path' in code and 'M ' in code):
            print("MATCH in script:", s)
            for kw in ['c10801', 'f16001', 'd9c3ab', 'C10801', 'F16001', 'D9C3AB']:
                pos = code.find(kw)
                if pos != -1:
                    print(f"  Found {kw} at {pos}:", code[max(0, pos-200):min(len(code), pos+300)])
    except Exception as e:
        pass
