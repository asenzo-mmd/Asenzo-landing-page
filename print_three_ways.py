with open('src/App.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

start = text.find('const ThreeWaysToWorkSection')
end = text.find('const LiveIn30DaysTimeline')
print(text[start:end].encode('ascii', 'replace').decode('ascii'))
