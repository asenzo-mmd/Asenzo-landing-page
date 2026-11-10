# ASENZO — Connect Effortlessly (Integrations) Design Specification

Generated via **Google Stitch MCP** (`ServerName: stitch`)
- **Stitch Project Title**: `ASENZO Website Redesign`
- **Stitch Project ID**: `18137294653046752499`
- **Stitch Screen Title**: `ASENZO — Connect Effortlessly`
- **Stitch Screen ID**: `d7a364293435426d8ac860588f9a2092`
- **Stitch Resource Name**: `projects/18137294653046752499/screens/d7a364293435426d8ac860588f9a2092`
- **HTML Code Asset**: `projects/18137294653046752499/files/9561622aa448478f963ac88fca25a10c`
- **Design System Asset**: `assets/86f27f38f1fc4e68a7eb093e79ff177b` ("Obsidian Precision")

---

## 1. Design Tokens & Color Palette

| Token Role | Hex / RGBA Value | Applied To |
| :--- | :--- | :--- |
| **Canvas Background** | `#050505` / `#000000` | Section backdrop |
| **Watermark Text** | `rgba(255, 255, 255, 0.03)` | Oversized "INTEGRATIONS" watermark |
| **Card Surface** | `rgba(255, 255, 255, 0.025)` | 6 Integration card backgrounds |
| **Card Surface Hover** | `rgba(255, 255, 255, 0.05)` | Card interactive state |
| **Card Border** | `rgba(255, 255, 255, 0.08)` | 1px border around integration cards |
| **Card Border Hover** | `rgba(255, 255, 255, 0.22)` | Card hover border glow |
| **Central Hub Capsule** | `#111111` / `rgba(18, 18, 20, 0.95)` | "Connected through ASENZO" pill |
| **Central Hub Border** | `rgba(255, 255, 255, 0.15)` | Central hub 1px border |
| **Connector Lines** | `rgba(255, 255, 255, 0.18)` | Curved SVG circuit connector stroke |
| **Primary Typography** | `#FFFFFF` | Headlines, card titles, hub text |
| **Secondary Typography** | `#A1A1AA` / `#A3A3A3` | Supporting copy, descriptions |
| **Muted Metadata** | `#71717A` / `#52525B` | Sub-labels, "View website ↗" links |

---

## 2. Typography Hierarchy

- **Watermark**: `font-black`, uppercase, `tracking-tighter`, `text-[130px] md:text-[180px] lg:text-[220px]`, `leading-none`, opacity `0.035`.
- **Eyebrow Capsule**: `font-mono text-xs uppercase tracking-widest text-zinc-300`, pill border `rgba(255, 255, 255, 0.1)`.
- **Main Heading**: `text-4xl md:text-5xl font-medium tracking-tight text-white`.
- **Top Right Description**: `text-base md:text-lg text-zinc-400 max-w-md leading-relaxed`.
- **Hub Text**: `text-sm font-medium text-white tracking-tight`.
- **Card Domain / Title**: `text-lg font-semibold text-white tracking-tight`.
- **Card Description**: `text-sm text-zinc-400 leading-relaxed`.
- **Card Link**: `text-xs font-mono text-zinc-400 hover:text-white transition-colors`.

---

## 3. Layout, Proportions & Spacing

- **Section Container**: `max-w-7xl mx-auto px-6 md:px-12 py-24 relative overflow-hidden`.
- **Header Split**: Two-column flex container:
  - Left: Capsule badge + `Connect effortlessly.`
  - Right: Editorial description aligned right on desktop.
- **Central Connection Hub**:
  - Pill dimensions: `px-6 py-2.5 rounded-full`, centered horizontally.
  - Active status indicator: `h-2 w-2 rounded-full bg-emerald-500` with subtle ping animation.
  - Bottom terminal pins: micro-dots beneath hub.
- **SVG Connector Paths**:
  - Width: `w-full max-w-6xl h-24`, desktop viewbox `0 0 1152 96`.
  - Origin: `(576, 0)` (bottom center of hub).
  - Column 1 destination: `(192, 96)` with smooth cubic bezier `M 576 0 V 28 C 576 56, 192 40, 192 96`.
  - Column 2 destination: `(576, 96)` vertical drop `M 576 0 V 96`.
  - Column 3 destination: `(960, 96)` with smooth cubic bezier `M 576 0 V 28 C 576 56, 960 40, 960 96`.
- **Card Grid**:
  - `grid grid-cols-1 md:grid-cols-3 gap-6`.
  - Card radius: `rounded-2xl` (16px).
  - Card padding: `p-7`.
- **Bottom Button**:
  - Pill button: `px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-zinc-200`.
