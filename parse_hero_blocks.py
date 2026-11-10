import re

with open('hero_blocks.txt', 'r', encoding='utf-8') as f:
    text = f.read()

names = re.findall(r'data-framer-name="([^"]+)"', text)
print("Framer names:", set(names))
