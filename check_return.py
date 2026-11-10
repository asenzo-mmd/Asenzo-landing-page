with open(r'c:\Users\Administrator\Asenzo landing page\src\App.jsx', 'r', encoding='utf-8') as f:
    code = f.read()

# Let's inspect what is currently rendered in App()
pos_return = code.find('return (')
pos_return_end = code.find(');', pos_return)
print("Current return statement in App():")
print(code[pos_return:pos_return_end+2])
