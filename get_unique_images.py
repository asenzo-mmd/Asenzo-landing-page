import re

with open('all_images.txt', 'r', encoding='utf-8') as f:
    lines = f.readlines()

srcs = set()
for l in lines:
    m = re.search(r'src="([^"]+)"', l)
    if m:
        srcs.add(m.group(1))

with open('unique_images.txt', 'w', encoding='utf-8') as out:
    for s in sorted(srcs):
        out.write(s + '\n')

print(f"Unique images: {len(srcs)}")
