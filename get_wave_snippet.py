with open('accretion_dump.html', 'r', encoding='utf-8') as f:
    html = f.read()

pos1 = html.find('All the essentials for modern productivity')
print(f"Position of 'All the essentials': {pos1}")
if pos1 != -1:
    snippet = html[max(0, pos1-6000):pos1+1000]
    with open('wave_transition_inspect.html', 'w', encoding='utf-8') as out:
        out.write(snippet)
    print("Wrote wave_transition_inspect.html")
