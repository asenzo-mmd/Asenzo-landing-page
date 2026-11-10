with open('src/App.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

start = text.find('const LiveIn30DaysTimeline')
end = text.find('const GuaranteeBanner')
print(text[start:end].encode('ascii', 'replace').decode('ascii'))
