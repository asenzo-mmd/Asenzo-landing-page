import re

# Read backup to get the remaining sections (USP, Workflow, Bento, AI, Integrations, Testimonials, Pricing, FAQ, Bottom Wave, Footer, Modal)
with open(r'c:\Users\Administrator\Asenzo landing page\src\App.jsx.full_clone_backup', 'r', encoding='utf-8') as f:
    backup = f.read()

# Extract components from backup
usp_pos = backup.find('function AccretionUSPTeasers')
if usp_pos == -1:
    print("Could not find AccretionUSPTeasers in backup")
else:
    remaining_code = backup[usp_pos:]
    with open('remaining_components.jsx', 'w', encoding='utf-8') as out:
        out.write(remaining_code)
    print("Extracted remaining components successfully, length:", len(remaining_code))
