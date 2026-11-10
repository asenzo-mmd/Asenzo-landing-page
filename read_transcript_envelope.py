import json

with open('C:/Users/Administrator/.gemini/antigravity/brain/a0f875ba-b80a-4f2b-a61a-09df8f0c4ea4/.system_generated/logs/transcript.jsonl', 'r', encoding='utf-8') as f:
    for line_idx, line in enumerate(f):
        data = json.loads(line)
        content = str(data.get('content', ''))
        thinking = str(data.get('thinking', ''))
        combined = content + " " + thinking
        if line_idx in [230, 407, 488, 517]:
            print(f"--- Line {line_idx} ---")
            print(content[:500].encode('ascii', 'replace').decode('ascii'))
            print("="*40)
