with open('src/App.jsx.checkpoint1', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(560, 616):
    print(lines[i].rstrip())
