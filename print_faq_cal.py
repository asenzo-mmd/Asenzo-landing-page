with open('src/App.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

faq_start = text.find('const FAQSection')
faq_end = text.find('const FinalCTAHero')
print("=== FAQSection ===")
print(text[faq_start:faq_start+300].encode('ascii', 'replace').decode('ascii'))

cal_start = text.find('const CalendarBookingSection')
cal_end = text.find('const MasterFooter')
print("=== CalendarBookingSection ===")
print(text[cal_start:cal_start+300].encode('ascii', 'replace').decode('ascii'))
