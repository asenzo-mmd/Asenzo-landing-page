with open('src/App.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find("What's new, straight to you")
if idx != -1:
    print(text[idx - 100:idx + 600])
