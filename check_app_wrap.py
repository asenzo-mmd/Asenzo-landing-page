with open('src/App.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's see the main App wrapper
app_idx = text.find('export default function App()')
print(text[app_idx:app_idx+600].encode('ascii', 'replace').decode('ascii'))
