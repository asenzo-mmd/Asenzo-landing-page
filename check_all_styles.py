with open('src/App.jsx.checkpoint1', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if '<style' in l:
        print(f"Line {i+1}: {l.strip()}")
