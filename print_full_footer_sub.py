with open('src/App.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find("What's new, straight to you")
start_div = text.rfind('<div', 0, idx)
end_div = text.find('</div>', idx + 500)
# Let's find the closing tag of that container
print("Start div index:", start_div)
print(text[start_div:start_div + 1200])
