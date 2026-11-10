with open('src/App.jsx.checkpoint1', 'r', encoding='utf-8') as f:
    lines = f.readlines()

comps = []
for i, l in enumerate(lines):
    if l.startswith('const ') and ('=>' in l or '{' in l):
        name = l.split()[1]
        comps.append((i, name))

for idx, name in comps:
    print(f"Line {idx+1}: {name}")
