import urllib.request

url = 'https://framerusercontent.com/images/7JW5hiKTuIExiSp00XQILMZFt8.png?width=1920&height=676'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as resp:
        data = resp.read()
    with open('public/accretion_wave.png', 'wb') as f:
        f.write(data)
    print(f"Downloaded accretion_wave.png, size: {len(data)} bytes")
except Exception as e:
    print("Error downloading:", e)
