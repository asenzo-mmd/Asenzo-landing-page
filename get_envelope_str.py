with open('src/App.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

start = text.find('const FinalCTAHero')
end = text.find('const CalendarBookingSection')
print("FinalCTAHero in App.jsx length:", end - start)
with open('current_envelope.txt', 'w', encoding='utf-8') as out:
    out.write(text[start:end])
print("Wrote current_envelope.txt")
