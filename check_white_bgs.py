with open('src/App.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

import re

# Check for #000000 or #0A0A or #0D0D across sections
for comp in ['HandHoldingPhoneSection', 'ThreeWaysToWorkSection', 'LiveIn30DaysTimeline', 'GuaranteeBanner', 'FAQSection', 'CalendarBookingSection', 'MasterFooter']:
    idx = text.find(f'const {comp}')
    if idx != -1:
        snippet = text[idx:idx+1500]
        # Find any background colors
        bgs = re.findall(r'backgroundColor:\s*[\'"][^\'"]+[\'"]', snippet)
        print(f"=== {comp} backgrounds ===")
        print(set(bgs))
