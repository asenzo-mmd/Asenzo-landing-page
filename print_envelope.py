with open('src/App.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

start = text.find('const FinalCTAHero')
end = text.find('const CalendarBookingSection')
print(text[start:end].encode('ascii', 'replace').decode('ascii'))
