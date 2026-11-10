from PIL import Image

im = Image.open('public/accretion_lines.png')
print(f"Format: {im.format}, Size: {im.size}, Mode: {im.mode}")
