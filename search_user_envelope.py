import json

with open('C:/Users/Administrator/.gemini/antigravity/brain/a0f875ba-b80a-4f2b-a61a-09df8f0c4ea4/.system_generated/logs/transcript.jsonl', 'r', encoding='utf-8') as f:
    for line_idx, line in enumerate(f):
        data = json.loads(line)
        if data.get('source') == 'USER_EXPLICIT' or data.get('type') == 'USER_INPUT':
            content = str(data.get('content', ''))
            if any(k in content.lower() for k in ['envelope', 'card', 'stop', 'animation']):
                print(f"User Request [{line_idx}]:")
                print(content.encode('ascii', 'replace').decode('ascii'))
                print("-" * 50)
