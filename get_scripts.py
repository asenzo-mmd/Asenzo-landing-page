import re

with open('accretion_dump.html', 'r', encoding='utf-8') as f:
    html = f.read()

script_srcs = re.findall(r'<script[^>]*src=[\"\']([^\"\']+)[\"\']', html)
print(f"Total script tags with src: {len(script_srcs)}")
for s in script_srcs:
    print(s)
