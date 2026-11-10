from PIL import Image

img = Image.open('C:/Users/Administrator/.gemini/antigravity/brain/a0f875ba-b80a-4f2b-a61a-09df8f0c4ea4/.user_uploaded/media_1794241817445_7dde391e.jpg')
print("Image size:", img.size)

# Sample colors from the center box and bottom glow
width, height = img.size
print("Sample center pixel:", img.getpixel((width // 2, height // 2)))
print("Sample box bottom pixel:", img.getpixel((width // 2, int(height * 0.63))))
print("Sample glow pixel below box:", img.getpixel((width // 2, int(height * 0.75))))
print("Sample bottom edge:", img.getpixel((width // 2, height - 10)))
