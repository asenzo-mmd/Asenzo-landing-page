import os

for fname in ['src/App.jsx.checkpoint1', 'src/App.jsx.full_clone_backup']:
    if os.path.exists(fname):
        with open(fname, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        print(f"=== {fname} ({len(lines)} lines) ===")
        for i, l in enumerate(lines[:25]):
            print(f"{i+1}: {l.rstrip()}")
