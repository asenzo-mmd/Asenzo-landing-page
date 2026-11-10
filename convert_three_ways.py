with open('src/App.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

start = text.find('const ThreeWaysToWorkSection')
end = text.find('const LiveIn30DaysTimeline')
old_snippet = text[start:end]

new_snippet = old_snippet
# Replace dark backgrounds
new_snippet = new_snippet.replace("backgroundColor: '#050505'", "backgroundColor: '#ffffff'")
new_snippet = new_snippet.replace("backgroundColor: '#121212'", "backgroundColor: '#fafafa'")
new_snippet = new_snippet.replace("backgroundColor: '#1A1A1A'", "backgroundColor: '#f4f4f5'")
new_snippet = new_snippet.replace("border: '1px solid #1A1A1A'", "border: '1px solid #e4e4e7'")
new_snippet = new_snippet.replace("border: '1px solid #222222'", "border: '1px solid #e4e4e7'")
new_snippet = new_snippet.replace("border: '1px solid #2A2A2A'", "border: '1px solid #e4e4e7'")
new_snippet = new_snippet.replace("borderBottom: '1px solid #1A1A1A'", "borderBottom: '1px solid #f0f0f0'")
new_snippet = new_snippet.replace("color: '#FFFFFF'", "color: '#0f0f11'")
new_snippet = new_snippet.replace("color: '#F5F5F5'", "color: '#0f0f11'")
new_snippet = new_snippet.replace("color: '#EEEEEE'", "color: '#0f0f11'")
new_snippet = new_snippet.replace("color: '#8A8A8A'", "color: '#52525b'")
new_snippet = new_snippet.replace("color: '#8A8A8E'", "color: '#52525b'")
new_snippet = new_snippet.replace("color: '#A0A0A0'", "color: '#52525b'")
new_snippet = new_snippet.replace("color: '#CCCCCC'", "color: '#27272a'")
new_snippet = new_snippet.replace("color: '#E0E0E0'", "color: '#27272a'")

text = text[:start] + new_snippet + text[end:]

with open('src/App.jsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("Updated ThreeWaysToWorkSection cleanly!")
