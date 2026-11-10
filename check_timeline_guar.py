with open('src/App.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

import re
for comp in ['LiveIn30DaysTimeline', 'GuaranteeBanner']:
    start = text.find(f'const {comp}')
    end = text.find('const', start + 10)
    snippet = text[start:end]
    bgs = set(re.findall(r'backgroundColor:\s*[\'"][^\'"]+[\'"]', snippet))
    colors = set(re.findall(r'color:\s*[\'"][^\'"]+[\'"]', snippet))
    print(comp, "bgs:", bgs)
    print(comp, "colors:", list(colors)[:8])
