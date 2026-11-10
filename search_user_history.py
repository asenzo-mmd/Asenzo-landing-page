import json

with open('C:/Users/Administrator/.gemini/antigravity/brain/a0f875ba-b80a-4f2b-a61a-09df8f0c4ea4/.system_generated/logs/transcript.jsonl', 'r', encoding='utf-8') as f:
    for line_idx, line in enumerate(f):
        data = json.loads(line)
        if data.get('source') == 'USER_EXPLICIT' or data.get('type') == 'USER_INPUT':
            content = str(data.get('content', ''))
            for phrase in ['scroll stop', 'envelope', 'enovlope', 'card', 'stop']:
                if phrase in content.lower():
                    print(f"[{line_idx}] matched '{phrase}': {content[:200]}")
                    break
