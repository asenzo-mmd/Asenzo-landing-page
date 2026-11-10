from PIL import Image

path = r'C:\Users\Administrator\.gemini\antigravity\brain\a0f875ba-b80a-4f2b-a61a-09df8f0c4ea4\.user_uploaded\media_1794234201527_1cdfad3b.png'
im = Image.open(path)
w, h = im.size

# Let's find the peak or boundary of the curve at each x
curve_y = []
for x in range(w):
    # look from y=120 to y=200 for where orange starts (e.g. red > 150 and green > 50)
    found_y = None
    for y in range(120, 200):
        r, g, b, a = im.getpixel((x, y))
        if r > 160 and g > 60:
            found_y = y
            break
    curve_y.append(found_y)

print("Curve Y positions across x (sampled every 10px):")
for x in range(0, w, 10):
    print(f"x={x:3d}: y={curve_y[x]}")
