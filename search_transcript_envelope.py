import json, re

with open('C:/Users/Administrator/.gemini/antigravity/brain/a0f875ba-b80a-4f2b-a61a-09df8f0c4ea4/.system_generated/logs/transcript.jsonl', 'r', encoding='utf-8') as f:
    for line_idx, line in enumerate(f):
        data = json.loads(line)
        content = str(data.get('content', ''))
        thinking = str(data.get('thinking', ''))
        combined = content + " " + thinking
        if 'envelope' in combined.lower() or 'scroll stop' in combined.lower() or 'finalcthero' in combined.lower():
            user_msg = data.get('source') == 'USER_EXPLICIT' or data.get('type') == 'USER_INPUT'
            if user_msg:
                print(f"User line {line_idx}:", content[:200].replace('\n', ' '))
            elif 'scroll stop' in combined.lower() or 'card' in combined.lower():
                # print summary
                m = re.findall(r'.{0,60}(?:scroll stop|pinned|envelope|dwell).{0,60}', combined, re.IGNORECASE)
                for snippet in m[:2]:
                    print(f"   [{line_idx}]:", snippet.strip().replace('\n', ' '))
