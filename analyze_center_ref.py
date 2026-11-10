from PIL import Image

im = Image.open('public/center-ref.jpg')
w, h = im.size
print(f"Dimensions of center ref: {w} x {h}")

# Sample colors from top to bottom through the center
print("\nVertical strip through center (x = w // 2):")
for y in range(0, h, 30):
    p = im.getpixel((w // 2, y))
    hex_color = f"#{p[0]:02x}{p[1]:02x}{p[2]:02x}"
    print(f"y={y:3d}: rgb({p[0]:3d}, {p[1]:3d}, {p[2]:3d}) | {hex_color}")

# Find the center box bounds (y-range where the box sits)
# Box has brighter grey inside, surrounded by darker background
box_y = []
for y in range(h):
    p = im.getpixel((w // 2, y))
    # box center is around rgb(25..45)
    if 20 <= p[0] <= 55 and 20 <= p[1] <= 55 and 20 <= p[2] <= 55:
        box_y.append(y)

if box_y:
    print(f"\nBox vertical range: y={min(box_y)} to y={max(box_y)}, height={max(box_y) - min(box_y)}")
