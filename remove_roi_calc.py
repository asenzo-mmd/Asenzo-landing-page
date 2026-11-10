import re

with open('src/App.jsx', 'r', encoding='utf-8') as f:
    code = f.read()

# 1. Remove call in App()
call_pattern = re.compile(
    r'\s*\{\/\*.*INTERACTIVE ROI CALCULATOR.*\*\/\}[\s\n]*<ClearROICalculator\s*\/>',
    re.IGNORECASE
)

if call_pattern.search(code):
    code = call_pattern.sub('', code)
    print("Removed ClearROICalculator call from App()!")
else:
    print("WARNING: call_pattern not found in App()")

# 2. Remove ClearROICalculator definition
def_pattern = re.compile(
    r'\/\/\s*7\.\s*Premium Apple-Style ROI Calculator[\s\S]*?(?=\/\/\s*8\.\s*1-to-1 Money Back Guarantee|const GuaranteeBanner)',
    re.MULTILINE
)

if def_pattern.search(code):
    code = def_pattern.sub('', code)
    print("Removed ClearROICalculator component definition!")
else:
    alt_pattern = re.compile(
        r'const ClearROICalculator\s*=[\s\S]*?(?=const GuaranteeBanner\s*=)',
        re.MULTILINE
    )
    if alt_pattern.search(code):
        code = alt_pattern.sub('', code)
        print("Removed ClearROICalculator via alt_pattern!")
    else:
        print("WARNING: Could not find ClearROICalculator definition to remove")

with open('src/App.jsx', 'w', encoding='utf-8') as f:
    f.write(code)

print("Saved updated src/App.jsx! Total characters:", len(code))
