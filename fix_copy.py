import sys

def main():
    with open('c:\\Users\\Administrator\\Asenzo landing page\\src\\App.jsx', 'r', encoding='utf-8') as f:
        content = f.read()

    replacements = [
        ('Popular\n            </span>', 'Fast-track\n            </span>'),
        ('Week 1\n              </span>', 'Step 1\n              </span>'),
        (' Weeks 2-3\n              </span>', 'Step 2\n              </span>'),
        ('Weeks 2-3\n              </span>', 'Step 2\n              </span>'),
        ('Week 4\n              </span>', 'Step 3\n              </span>'),
        ('Book Your Free Assessment Call\n        </button>', 'Book Your Free Diagnostic Call\n        </button>'),
        ('Design Your System →\n        </button>', "See Where I'm Stuck →\n        </button>"),
        ('Book a free call\n            </button>', 'Join the Waitlist\n            </button>'),
        ('Take Free Assessment\n          </button>', 'Join the Waitlist\n          </button>'),
        ('<span>Features</span>', '<span>The Problem</span>'),
        ('<span>Integrations</span>', '<span>The System</span>'),
        ('<span>Testimonials</span>', '<span>Proof</span>'),
    ]

    for old, new in replacements:
        if old in content:
            content = content.replace(old, new)
        else:
            print(f"WARNING: Could not find '{old.strip()}'")

    with open('c:\\Users\\Administrator\\Asenzo landing page\\src\\App.jsx', 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == '__main__':
    main()
