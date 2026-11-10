with open(r'c:\Users\Administrator\Asenzo landing page\src\App.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

pos = content.find('function AccretionUSPTeasers')
print("Position of AccretionUSPTeasers:", pos)
if pos != -1:
    print(content[pos-200:pos+100])
