with open('full_integrations_section.html', 'r', encoding='utf-8') as f:
    text = f.read()

import re

# find all occurrences of data-framer-name="Column" or siblings
cols = [m.start() for m in re.finditer(r'data-framer-name="Column"', text)]
print("Column occurrences:", cols)
for i in range(len(cols)):
    start = cols[i]
    end = cols[i+1] if i+1 < len(cols) else start + 3000
    print(f"\n--- Between column {i} and {i+1} ---")
    snippet = text[start:end]
    # what is inside?
    titles = re.findall(r'<p[^>]*class="[^"]*preset-fc9p0v"[^>]*>(.*?)</p>', snippet)
    print("Titles:", titles)
    # is there anything between columns that isn't a column?
