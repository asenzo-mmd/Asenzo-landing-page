with open('src/index.css', 'r', encoding='utf-8') as f:
    text = f.read()

print("Length of index.css:", len(text))
for check in ['bottomGlowPulse', 'powerFlowLeft', 'mobile-container']:
    print(check, "in index.css?", check in text)
