import urllib.request

try:
    with urllib.request.urlopen('http://localhost:5173/') as resp:
        content = resp.read().decode('utf-8', errors='ignore')
    print("Dev server responded with HTTP 200!")
    print("HTML length:", len(content))
except Exception as e:
    print("Error:", e)
