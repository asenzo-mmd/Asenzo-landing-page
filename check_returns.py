with open('src/App.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

faq_start = text.find('const FAQSection')
print("FAQ return:", text[text.find('return', faq_start):text.find('return', faq_start) + 200])

cal_start = text.find('const CalendarBookingSection')
print("Calendar return:", text[text.find('return', cal_start):text.find('return', cal_start) + 200])
