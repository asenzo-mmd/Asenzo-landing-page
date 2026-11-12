# ASENZO — Growth Infrastructure

> Design. Build. Operate.

High-performance, ultra-responsive landing page for **ASENZO**, connecting positioning, content, and prospect acquisition infrastructure.

## 🚀 Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vite.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS with custom glassmorphism design system & Switzer / Inter typography
- **Booking**: [Cal.com](https://cal.com/) embed integration
- **Deploy Ready**: Configured for Cloudflare Pages, Vercel, Netlify, and Hostinger Web Hosting (with `_redirects` and `.htaccess`)

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/asenzo-mmd/Asenzo-landing-page.git

# Navigate into project directory
cd Asenzo-landing-page

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
```

The production output is generated in the `dist/` directory, optimized and ready for immediate deployment.

## 📁 Project Structure

```
├── public/                 # Static assets (logo, lines, favicon, routing config)
│   ├── _redirects          # Cloudflare Pages / Netlify SPA redirects
│   ├── .htaccess           # Apache / Hostinger Web Hosting SPA routing
│   ├── asenzo-logo.jpg     # Brand silver star emblem
│   └── favicon.svg         # SVG Favicon
├── src/
│   ├── assets/             # Bundled static assets
│   ├── App.jsx             # Main application and interactive sections
│   ├── index.css           # Global typography, glassmorphism, responsive styles
│   └── main.jsx            # Application entry point
├── index.html              # HTML shell & font definitions
├── package.json            # Dependencies and scripts
└── vite.config.js          # Vite configuration
```

## 📄 License

All rights reserved © 2026 ASENZO.
