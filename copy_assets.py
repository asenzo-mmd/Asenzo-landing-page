import shutil
import os
from PIL import Image

logo_src = r'C:/Users/Administrator/.gemini/antigravity/brain/a0f875ba-b80a-4f2b-a61a-09df8f0c4ea4/.user_uploaded/media_1794241789810_5e19471e.jpg'
center_src = r'C:/Users/Administrator/.gemini/antigravity/brain/a0f875ba-b80a-4f2b-a61a-09df8f0c4ea4/.user_uploaded/media_1794241817445_7dde391e.jpg'

im_logo = Image.open(logo_src)
print(f"Logo size: {im_logo.size}, mode: {im_logo.mode}")

im_center = Image.open(center_src)
print(f"Center ref size: {im_center.size}, mode: {im_center.mode}")

# Copy logo to public
shutil.copyfile(logo_src, 'public/asenzo-logo.jpg')
shutil.copyfile(center_src, 'public/center-ref.jpg')
print("Copied public/asenzo-logo.jpg and public/center-ref.jpg")
