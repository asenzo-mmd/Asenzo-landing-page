with open('src/App.jsx.checkpoint1', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(1433, 1490):
    print(lines[i].rstrip())
