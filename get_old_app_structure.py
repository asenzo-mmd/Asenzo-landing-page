with open('src/App.jsx.checkpoint1', 'r', encoding='utf-8') as f:
    text = f.read()

import re
app_pos = text.rfind('export default function App')
if app_pos != -1:
    print(text[app_pos:])
