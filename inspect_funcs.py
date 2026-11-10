with open(r'c:\Users\Administrator\Asenzo landing page\src\App.jsx', 'r', encoding='utf-8') as f:
    code = f.read()

import re

# Find all function names
funcs = re.findall(r'function\s+([A-Za-z0-9_]+)', code)
print("Functions in App.jsx:", funcs)
