import shutil, os
from PIL import Image

src_path = 'C:/Users/Administrator/.gemini/antigravity/brain/a0f875ba-b80a-4f2b-a61a-09df8f0c4ea4/.user_uploaded/media_1794249127836_710fa859.jpg'
dest_path = 'public/testimonial-hand.jpg'

if os.path.exists(src_path):
    shutil.copy2(src_path, dest_path)
    # Also backup to handimage.png if desired
    shutil.copy2(src_path, 'public/handimage.png')
    img = Image.open(dest_path)
    print(f"Copied image successfully! Dimensions: {img.size}, format: {img.format}")
else:
    print(f"Error: {src_path} does not exist!")
