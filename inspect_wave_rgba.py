from PIL import Image

im = Image.open('public/accretion_wave.png').convert('RGBA')
width, height = im.size
print("Center vertical strip RGBA:")
for y in range(0, height, 30):
    r, g, b, a = im.getpixel((width // 2, y))
    hex_color = f"#{r:02x}{g:02x}{b:02x}"
    print(f"y={y:3d}: rgba({r:3d}, {g:3d}, {b:3d}, {a:3d}) | {hex_color}")
