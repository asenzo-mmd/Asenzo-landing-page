import os
from PIL import Image

dirpath = r'C:\Users\Administrator\.gemini\antigravity\brain\a0f875ba-b80a-4f2b-a61a-09df8f0c4ea4\.user_uploaded'
for fname in os.listdir(dirpath):
    fpath = os.path.join(dirpath, fname)
    try:
        im = Image.open(fpath)
        print(f"{fname}: {im.size} {im.format}")
    except Exception as e:
        print(f"{fname}: {e}")
