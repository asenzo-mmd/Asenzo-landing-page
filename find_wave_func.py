with open(r'c:\Users\Administrator\Asenzo landing page\src\App.jsx.full_clone_backup', 'r', encoding='utf-8') as f:
    text = f.read()

pos = text.find('function AccretionHorizonWaveTop')
print(f"Pos of AccretionHorizonWaveTop: {pos}")
if pos != -1:
    print(text[pos:pos+1500])
