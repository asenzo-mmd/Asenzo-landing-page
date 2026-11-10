with open('src/App.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

faq_start = text.find('const FAQSection')
faq_end = text.find('const FinalCTAHero')
with open('faq_code.txt', 'w', encoding='utf-8') as f:
    f.write(text[faq_start:faq_end])

cal_start = text.find('const CalendarBookingSection')
cal_end = text.find('const MasterFooter')
with open('cal_code.txt', 'w', encoding='utf-8') as f:
    f.write(text[cal_start:cal_end])

three_start = text.find('const ThreeWaysToWorkSection')
three_end = text.find('const LiveIn30DaysTimeline')
with open('three_code.txt', 'w', encoding='utf-8') as f:
    f.write(text[three_start:three_end])

print("Saved code snippets!")
