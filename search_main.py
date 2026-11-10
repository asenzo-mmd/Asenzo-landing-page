import urllib.request
import re

url = 'https://framerusercontent.com/sites/6kCoSej0HV9SQN9QEtzeEy/script_main.2EtMYDza.mjs'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
with urllib.request.urlopen(req) as resp:
    code = resp.read().decode('utf-8', errors='ignore')

# Search for colors or wave or framer- motion in code
for kw in ['193, 8, 1', 'C10801', 'F16001', 'D9C3AB', 'wave', 'gradient', 'sunset', 'horizon', 'curve']:
    matches = [m.start() for m in re.finditer(kw, code, re.IGNORECASE)]
    print(f"Keyword '{kw}': {len(matches)} matches")
    for idx in matches[:5]:
        print(code[max(0, idx-100):min(len(code), idx+150)])
        print("-" * 40)
