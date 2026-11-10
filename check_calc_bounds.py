with open('src/App.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

start = text.find('// 7. Premium Apple-Style ROI Calculator')
if start == -1:
    start = text.find('const ClearROICalculator')
end = text.find('const GuaranteeBanner')
print("Start:", start, "End:", end)
print(text[start:start+300].encode('ascii', 'replace').decode('ascii'))
print("...")
print(text[end-200:end].encode('ascii', 'replace').decode('ascii'))
