from PIL import Image

path = r'C:\Users\Administrator\.gemini\antigravity\brain\a0f875ba-b80a-4f2b-a61a-09df8f0c4ea4\.user_uploaded\media_1794235676324_8738e875.jpg'
im = Image.open(path)
w, h = im.size
print(f"Full page screenshot dimensions: {w} x {h}")

# In this full page screenshot, let's find where the transition from light/cream to black happens
# Sample every 100 pixels vertically in the center
for y in range(0, h, 100):
    p = im.getpixel((w // 2, y))
    print(f"y={y:4d}: {p}")
