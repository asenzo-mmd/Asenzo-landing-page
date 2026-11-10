with open(r'c:\Users\Administrator\Asenzo landing page\src\App.jsx.full_clone_backup', 'r', encoding='utf-8') as f:
    text = f.read()

pos = text.find('function AccretionHorizonWaveTop')
with open('wave_component_backup.txt', 'w', encoding='utf-8') as out:
    out.write(text[pos:pos+3500])

print("Wrote wave_component_backup.txt")
