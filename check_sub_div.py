with open('src/App.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find("Includes the latest product updates")
end_p = text.find('</p>', idx)
end_div = text.find('</div>', end_p)
print(text[108011:end_div + 6])
