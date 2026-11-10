with open('accretion_dump.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re

# Find all images in the entire HTML
imgs = re.findall(r'<img[^>]+>', html)
with open('all_images.txt', 'w', encoding='utf-8') as out:
    for img in imgs:
        out.write(img + '\n')

print(f"Total images written: {len(imgs)}")
