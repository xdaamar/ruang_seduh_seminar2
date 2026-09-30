# Ruang Seduh — Haute Artisanal Design Tokens Specification

Daftar token CSS resmi yang diimplementasikan pada stylesheet proyek, memadukan estetika *Japanese Minimalist Architecture* dan editorial majalah kopi *Kinfolk*.

```css
:root {
  /* Surface & Canvas (Warm Oat Porcelain & Stone) */
  --bg-canvas: #FAF7F2;              /* Warm Oat Linen */
  --bg-canvas-subtle: #F4EFE8;       /* Deeper Tonal Stone */
  --bg-surface: #FFFFFF;             /* Pure Ceramic Card */
  --bg-surface-tint: #F3ECE2;        /* Well / Recessed Surface */
  --bg-glass: rgba(250, 247, 242, 0.88);
  --bg-glass-card: rgba(255, 255, 255, 0.92);

  /* Primary Brand Tones (Roasted Clay & Ember) */
  --color-terracotta: #B6533C;       /* Burnt Terracotta Rust */
  --color-terracotta-hover: #9E432E; /* Deep Terracotta */
  --color-terracotta-soft: #FDEEEB;  /* Creamy Terracotta Wash */
  --color-terracotta-tint: rgba(182, 83, 60, 0.08);

  /* Secondary Accents (Golden Crema & Amber) */
  --color-crema: #D4A373;            /* Golden Amber Crema */
  --color-crema-soft: #FCF6EE;       /* Warm Crema Tint */
  --color-crema-dark: #8C6436;

  /* Typographic Hierarchy (Espresso Slate - NO #000000) */
  --text-main: #201D1A;              /* Roasted Espresso Slate */
  --text-muted: #5C554E;             /* Aged Parchment Charcoal */
  --text-light: #8E867E;             /* Subdued Metadata Slate */

  /* Borders & Hairlines */
  --border-subtle: rgba(45, 38, 32, 0.07);
  --border-medium: rgba(45, 38, 32, 0.12);
  --border-accent: rgba(182, 83, 60, 0.28);

  /* Typography Stacks */
  --font-serif: 'Playfair Display', Georgia, serif;
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'Space Mono', monospace; /* Coffee Cupping Specs & Technical Data */

  /* Shadows (Tonal Umber Elevation) */
  --shadow-xs: 0 1px 3px rgba(45, 38, 32, 0.04);
  --shadow-sm: 0 4px 14px rgba(45, 38, 32, 0.05);
  --shadow-md: 0 12px 30px -4px rgba(45, 38, 32, 0.07);
  --shadow-lg: 0 24px 50px -10px rgba(45, 38, 32, 0.11);
  --shadow-terracotta: 0 12px 28px -6px rgba(182, 83, 60, 0.32);

  /* Geometry & Curves */
  --radius-xs: 6px;
  --radius-sm: 10px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-xl: 30px;
  --radius-full: 9999px;

  /* Layout */
  --container-max: 1220px;
  --header-height: 82px;
  --tap-target: 44px;
}
```
