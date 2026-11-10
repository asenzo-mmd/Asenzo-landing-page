# Let's inspect the remaining sections in src/App.jsx after AccretionIntegrations
with open(r'c:\Users\Administrator\Asenzo landing page\src\App.jsx', 'r', encoding='utf-8') as f:
    code = f.read()

pos_testimonials = code.find('function AccretionTestimonials')
if pos_testimonials != -1:
    footer_sections = code[pos_testimonials:]
    with open('footer_sections.jsx', 'w', encoding='utf-8') as out:
        out.write(footer_sections)
    print("Extracted footer sections, length:", len(footer_sections))
else:
    print("Could not find AccretionTestimonials")
