with open('hero_animation_inspect.html', 'r', encoding='utf-8') as f:
    text = f.read()

import re

# find the block with data-framer-name="Home Scroll Section"
pos = text.find('Home Scroll Section')
if pos != -1:
    snippet = text[max(0, pos-200):min(len(text), pos+3000)]
    with open('home_scroll_section_snippet.html', 'w', encoding='utf-8') as out:
        out.write(snippet)
    print("Wrote home_scroll_section_snippet.html")
