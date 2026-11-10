with open('src/App.jsx.checkpoint1', 'r', encoding='utf-8') as f:
    lines = f.readlines()

print(f"Total lines in checkpoint1: {len(lines)}")
# Check where DiagnosticModal ends
for i, l in enumerate(lines[1800:]):
    if 'export default function App' in l:
        print(f"export default App at line {1801 + i}")
