with open('accretion_dump.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re

# find where 7JW5hiKTuIExiSp00XQILMZFt8 is referenced, along with its parent containers and CSS classes
matches = [m.start() for m in re.finditer('7JW5hiKTuIExiSp00XQILMZFt8', html)]
for idx in matches[:2]:
    print("MATCH AT", idx)
    # let's look up to 800 chars backwards and 400 forwards
    print(html[max(0, idx-800):min(len(html), idx+400)])
