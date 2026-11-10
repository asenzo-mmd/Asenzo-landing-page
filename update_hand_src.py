with open('src/App.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace(
    'src="/handimage.png"',
    'src="/testimonial-hand.jpg"'
)

with open('src/App.jsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("Updated image src to /testimonial-hand.jpg in App.jsx!")
