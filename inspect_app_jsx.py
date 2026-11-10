with open(r'c:\Users\Administrator\Asenzo landing page\src\App.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

import re

# Let's inspect the return statement of App()
m = re.search(r'return\s*\(\s*<div[^>]*>(.*?)</div>\s*\);', content, re.DOTALL)
if m:
    print("App() JSX elements:")
    for line in m.group(1).splitlines():
        if '<' in line:
            print(" ", line.strip())
