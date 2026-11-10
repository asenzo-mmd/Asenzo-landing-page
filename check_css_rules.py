import os

for fname in ['src/index.css', 'src/App.css']:
    if os.path.exists(fname):
        with open(fname, 'r', encoding='utf-8') as f:
            c = f.read()
        print(fname, 'roi-apple-input in file?', 'roi-apple-input' in c)
