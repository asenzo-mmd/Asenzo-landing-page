with open('src/App.jsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(42, 125):
    print(f"{i+1}: {lines[i].rstrip()}")
