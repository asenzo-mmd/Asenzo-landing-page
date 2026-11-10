with open('src/App.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

faq_start = text.find('const FAQSection')
faq_end = text.find('const FinalCTAHero')
with open('current_faq.txt', 'w', encoding='utf-8') as f:
    f.write(text[faq_start:faq_end])

print("Wrote current_faq.txt with length:", faq_end - faq_start)
