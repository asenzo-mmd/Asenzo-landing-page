with open('src/App.jsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

with open('timeline_and_guarantee.txt', 'w', encoding='utf-8') as out:
    for i in range(1300, min(len(lines), 1600)):
        out.write(f"{i+1}: {lines[i]}")

print("Wrote timeline_and_guarantee.txt")
