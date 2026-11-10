with open('full_integrations_section.html', 'r', encoding='utf-8') as f:
    text = f.read()

import re

# Find the div with data-framer-name="Intergrations Main Container"
pos = text.find('data-framer-name="Intergrations Main Container"')
print("Found at:", pos)
if pos != -1:
    # let's look at the direct children of this container
    sub = text[pos:pos+4000]
    # find all classes
    classes = re.findall(r'class="([^"]+)"', sub)
    print("Classes in container:", classes[:10])
    
    # print the direct children tags
    children = re.findall(r'<div[^>]*data-framer-name="([^"]+)"[^>]*>', sub)
    print("Children framer names:", children)
