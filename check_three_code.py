with open('three_code.txt', 'r', encoding='utf-8') as f:
    text = f.read()

import re
print("Length of three_code:", len(text))
bgs = re.findall(r'backgroundColor:\s*[\'"][^\'"]+[\'"]', text)
print("Backgrounds in ThreeWaysToWorkSection:", set(bgs))
colors = re.findall(r'color:\s*[\'"][^\'"]+[\'"]', text)
print("Colors in ThreeWaysToWorkSection:", set(colors[:15]))
