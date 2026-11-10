with open(r'c:\Users\Administrator\Asenzo landing page\src\App.jsx', 'r', encoding='utf-8') as f:
    code = f.read()

import re
pos_app = code.find('export default function App()')
pos_jsx_return = code.find('return (', pos_app + 100)
pos_jsx_end = code.find(');', pos_jsx_return)
print("App JSX return:")
print(code[pos_jsx_return:pos_jsx_end+2])
