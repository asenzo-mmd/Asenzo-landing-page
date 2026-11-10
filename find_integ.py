with open(r'c:\Users\Administrator\Asenzo landing page\src\App.jsx', 'r', encoding='utf-8') as f:
    code = f.read()

pos_integ = code.find('function AccretionIntegrations')
print("Position of AccretionIntegrations:", pos_integ)
