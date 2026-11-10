from PIL import Image

path = r'C:\Users\Administrator\.gemini\antigravity\brain\a0f875ba-b80a-4f2b-a61a-09df8f0c4ea4\.user_uploaded\media_1794234201527_1cdfad3b.png'
im = Image.open(path)
w, h = im.size
print(f"Dimensions: {w} x {h}")

# Find where the sunset curve is (between y=100 and y=300)
for y in range(120, 220, 5):
    p = im.getpixel((w // 2, y))
    print(f"y={y:3d}: {p}")
