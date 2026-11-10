import os

for root, dirs, files in os.walk('.'):
    if 'node_modules' in root or '.git' in root or 'dist' in root:
        continue
    for f in files:
        if f.endswith(('.css', '.jsx', '.html', '.checkpoint1', '.js')):
            p = os.path.join(root, f)
            try:
                with open(p, 'r', encoding='utf-8') as fh:
                    if 'roi-apple-input' in fh.read():
                        print("Found roi-apple-input in:", p)
            except Exception:
                pass
