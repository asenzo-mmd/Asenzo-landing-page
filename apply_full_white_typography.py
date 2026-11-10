with open('src/App.jsx', 'r', encoding='utf-8') as f:
    code = f.read()

# 1. Update LiveIn30DaysTimeline in App.jsx
tl_start = code.find('const LiveIn30DaysTimeline')
tl_end = code.find('const GuaranteeBanner')
if tl_start != -1 and tl_end != -1:
    tl_code = code[tl_start:tl_end]
    # Replace white and light grey colors in Timeline
    tl_code = tl_code.replace("color: '#FFFFFF'", "color: '#0f0f11'")
    tl_code = tl_code.replace("color: '#F5F5F5'", "color: '#0f0f11'")
    tl_code = tl_code.replace("color: '#EEEEEE'", "color: '#0f0f11'")
    tl_code = tl_code.replace("color: '#8A8A8A'", "color: '#52525b'")
    tl_code = tl_code.replace("color: '#8A8A8E'", "color: '#52525b'")
    tl_code = tl_code.replace("color: '#666666'", "color: '#52525b'")
    tl_code = tl_code.replace("backgroundColor: '#0A0A0C'", "backgroundColor: '#ffffff'")
    tl_code = tl_code.replace("backgroundColor: '#121212'", "backgroundColor: '#fafafa'")
    tl_code = tl_code.replace("border: '1px solid #1F1F1F'", "border: '1px solid #e4e4e7'")
    tl_code = tl_code.replace("border: '1px solid #222222'", "border: '1px solid #e4e4e7'")
    code = code[:tl_start] + tl_code + code[tl_end:]
    print("Updated LiveIn30DaysTimeline typography!")

# 2. Update GuaranteeBanner in App.jsx
gb_start = code.find('const GuaranteeBanner')
gb_end = code.find('const FAQSection')
if gb_start != -1 and gb_end != -1:
    gb_code = code[gb_start:gb_end]
    gb_code = gb_code.replace("color: '#FFFFFF'", "color: '#0f0f11'")
    gb_code = gb_code.replace("color: '#F5F5F5'", "color: '#0f0f11'")
    gb_code = gb_code.replace("color: '#8A8A8A'", "color: '#52525b'")
    gb_code = gb_code.replace("backgroundColor: '#0D0D0F'", "backgroundColor: '#fafafa'")
    gb_code = gb_code.replace("border: '1px solid #242426'", "border: '1px solid #e4e4e7'")
    code = code[:gb_start] + gb_code + code[gb_end:]
    print("Updated GuaranteeBanner typography!")

# 3. Update MasterFooter in App.jsx
ft_start = code.find('const MasterFooter')
ft_end = code.find('const DiagnosticModal')
if ft_start != -1 and ft_end != -1:
    ft_code = code[ft_start:ft_end]
    ft_code = ft_code.replace("color: '#FFFFFF'", "color: '#0f0f11'")
    ft_code = ft_code.replace("color: '#F5F5F5'", "color: '#0f0f11'")
    ft_code = ft_code.replace("color: '#A0A0A0'", "color: '#52525b'")
    ft_code = ft_code.replace("color: '#8A8A8A'", "color: '#71717a'")
    ft_code = ft_code.replace("color: '#666666'", "color: '#71717a'")
    ft_code = ft_code.replace("borderTop: '1px solid #1A1A1A'", "borderTop: '1px solid #e4e4e7'")
    ft_code = ft_code.replace("borderBottom: '1px solid #1A1A1A'", "borderBottom: '1px solid #e4e4e7'")
    code = code[:ft_start] + ft_code + code[ft_end:]
    print("Updated MasterFooter typography!")

# 4. Update DiagnosticModal in App.jsx
dm_start = code.find('const DiagnosticModal')
if dm_start != -1:
    dm_code = code[dm_start:]
    dm_code = dm_code.replace("backgroundColor: '#0D0D10'", "backgroundColor: '#ffffff'")
    dm_code = dm_code.replace("backgroundColor: '#16161A'", "backgroundColor: '#f4f4f5'")
    dm_code = dm_code.replace("border: '1px solid #222222'", "border: '1px solid #e4e4e7'")
    dm_code = dm_code.replace("border: '1px solid #2A2A2A'", "border: '1px solid #e4e4e7'")
    dm_code = dm_code.replace("color: '#FFFFFF'", "color: '#0f0f11'")
    dm_code = dm_code.replace("color: '#F5F5F5'", "color: '#0f0f11'")
    dm_code = dm_code.replace("color: '#8A8A8A'", "color: '#52525b'")
    code = code[:dm_start] + dm_code
    print("Updated DiagnosticModal typography!")

with open('src/App.jsx', 'w', encoding='utf-8') as f:
    f.write(code)

print("Saved updated src/App.jsx with full dark typography on white background!")
