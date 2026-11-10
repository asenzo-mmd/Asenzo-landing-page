with open('src/App.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

import re

for comp in ['ThreeWaysToWorkSection', 'LiveIn30DaysTimeline', 'GuaranteeBanner', 'FAQSection', 'CalendarBookingSection', 'MasterFooter']:
    idx = text.find(f'const {comp}')
    if idx != -1:
        print(f"=== {comp} ===")
        print(text[idx:idx+400].encode('ascii', 'replace').decode('ascii'))
