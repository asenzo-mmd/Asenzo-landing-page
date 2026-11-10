with open('src/App.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

start = text.find('return (\n    <section\n      id="integrations"')
end = text.find('function CompactIntegrationCard')
print(text[start:end].encode('ascii', 'replace').decode('ascii'))
