import os, re

for root, dirs, files in os.walk('.'):
    if 'node_modules' in root or '.git' in root or 'dist' in root:
        continue
    for f in files:
        if f.endswith(('.jsx', '.checkpoint1', '.full_clone_backup', '.py', '.html')):
            p = os.path.join(root, f)
            try:
                with open(p, 'r', encoding='utf-8') as fh:
                    content = fh.read()
                    if 'FinalCTA' in content or 'envelope' in content.lower():
                        # Find occurrences of scroll stop / pinned
                        matches = re.findall(r'.{0,50}(?:scrollProgress|sticky|pinning|scroll stop).{0,50}', content, re.IGNORECASE)
                        if matches:
                            print(f"=== {p} ({len(matches)} matches) ===")
                            for m in matches[:3]:
                                print("  ", m.strip().replace('\n', ' '))
            except Exception:
                pass
