from PIL import Image

path = r'C:\Users\Administrator\.gemini\antigravity\brain\a0f875ba-b80a-4f2b-a61a-09df8f0c4ea4\.user_uploaded\media_1794234201527_1cdfad3b.png'
im = Image.open(path)
w, h = im.size

# crop y from 110 to 220
cropped = im.crop((0, 110, w, 220))
cropped.save('public/wave_crop_reference.png')
print("Saved public/wave_crop_reference.png")
