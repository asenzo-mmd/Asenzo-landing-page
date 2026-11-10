from PIL import Image
import numpy as np

im = Image.open('public/accretion/images/7JW5hiKTuIExiSp00XQILMZFt8.png').convert('RGBA')
w, h = im.size
print(f"Image size: {w}x{h}")

# The image has 1920 width, 676 height.
# Let's find for each x in [0, 1920] the y-coordinate of the boundary of the wave curve:
# The wave curve separates transparent / beige top from the black bottom.
# Let's find the peak (maximum height / minimum y) in the center, and how it curves down to the sides.
curve_points = []
for x in range(0, w, 20):
    # Find the first pixel with alpha > 128 or brightness transition
    found_y = None
    for y in range(0, h):
        r, g, b, a = im.getpixel((x, y))
        # Find where opacity and color starts
        if a > 80 and (r > 100 or g > 50):
            found_y = y
            break
    if found_y is None:
        found_y = h
    curve_points.append((x, found_y))

print("Sampled curve boundary (x, y):")
for pt in curve_points[::4]:
    print(f"x={pt[0]:4d}, y={pt[1]:4d}")

# Let's find min y (the crest in the middle) and max y at the edges (x=0, x=1920)
min_pt = min(curve_points, key=lambda p: p[1])
print(f"\nCrest (peak) of wave: at x={min_pt[0]}, y={min_pt[1]}")
print(f"Left edge (x=0): y={curve_points[0][1]}")
print(f"Right edge (x=1900): y={curve_points[-1][1]}")
