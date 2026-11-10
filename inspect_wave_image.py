from PIL import Image

im = Image.open('public/accretion_wave.png')
print(f"Format: {im.format}, Size: {im.size}, Mode: {im.mode}")

# Inspect center column pixel colors from top to bottom
width, height = im.size
print("Center vertical strip colors (every 20 pixels):")
for y in range(0, height, 30):
    pixel = im.getpixel((width // 2, y))
    print(f"y={y}: {pixel}")

# Inspect horizontal strip across the middle
print("\nHorizontal strip at y = height // 2:")
for x in range(0, width, 150):
    pixel = im.getpixel((x, height // 2))
    print(f"x={x}: {pixel}")
