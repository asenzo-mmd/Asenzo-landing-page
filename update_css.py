with open(r'c:\Users\Administrator\Asenzo landing page\src\index.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Remove transform hover in .btn-cta-primary
css = css.replace('transform: translateY(-1px);', '/* no expand */')

# Add integrations responsive rule
if '.integrations-six-layout' not in css:
    css += '''

/* 6-Group Integrations Responsive Grid */
@media (max-width: 980px) {
  .integrations-six-layout {
    grid-template-columns: 1fr !important;
    gap: 20px !important;
  }
}
'''

with open(r'c:\Users\Administrator\Asenzo landing page\src\index.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Updated src/index.css successfully!")
