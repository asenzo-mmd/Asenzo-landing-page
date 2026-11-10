with open('src/App.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

start = text.find('function AsenzoIntegrationsSection')
end = text.find('function CompactIntegrationCard')
print(text[start:start+1200])
