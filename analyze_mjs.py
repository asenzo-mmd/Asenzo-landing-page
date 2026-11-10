import urllib.request
import re

url = 'https://framerusercontent.com/sites/6kCoSej0HV9SQN9QEtzeEy/script_main.2EtMYDza.mjs'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as resp:
    code = resp.read().decode('utf-8', errors='ignore')

print("Main mjs length:", len(code))
imports = re.findall(r'from\s*[\"\']([^\"\']+)[\"\']', code)
print("Imports in main mjs:", imports)

# Let's inspect the imported chunks
for imp in imports:
    if not imp.startswith('http'):
        imp = 'https://framerusercontent.com/sites/6kCoSej0HV9SQN9QEtzeEy/' + imp
    print("Checking import:", imp)
    try:
        req = urllib.request.Request(imp, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as resp:
            subcode = resp.read().decode('utf-8', errors='ignore')
        print(f"  Length: {len(subcode)}")
        sub_imports = re.findall(r'from\s*[\"\']([^\"\']+)[\"\']', subcode)
        for sub_imp in sub_imports:
            print("    Sub-import:", sub_imp)
    except Exception as e:
        print("  Error:", e)
