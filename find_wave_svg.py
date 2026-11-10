with open(r'c:\Users\Administrator\Asenzo landing page\src\App.jsx.full_clone_backup', 'r', encoding='utf-8') as f:
    text = f.read()

pos = text.find('function AccretionHorizonWaveTop')
print(text[pos+1000:pos+3000])
