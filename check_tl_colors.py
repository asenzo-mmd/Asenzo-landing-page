with open('timeline_and_guarantee.txt', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = re.findall(r'color:\s*[\'"][^\'"]+[\'"]', text)
print("Color declarations in range 1300-1600:")
print(set(matches))
