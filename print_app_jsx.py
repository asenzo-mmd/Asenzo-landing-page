with open('src/App.jsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

in_app = False
for i, l in enumerate(lines):
    if 'export default function App' in l:
        in_app = True
    if in_app:
        print(f"{i+1}: {l.rstrip()}")
        if l.strip() == '}':
            break
