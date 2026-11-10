import urllib.request
import re

url = 'https://accretion.framer.ai/'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
try:
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
    print('Fetched HTML, length:', len(html))
    
    with open('accretion_dump.html', 'w', encoding='utf-8') as out:
        out.write(html)
    print('Saved accretion_dump.html')
except Exception as e:
    print('Error:', e)
