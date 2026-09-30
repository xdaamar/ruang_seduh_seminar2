# Ruang Seduh — Design Tokens Specification

Daftar token CSS resmi yang diimplementasikan pada stylesheet proyek.

```css
:root {
  /* Color Tokens */
  --color-canvas: #FAF8F5;            /* Warm Oat Beige */
  --color-canvas-dim: #F6F3F2;        /* Stone Oat Secondary */
  --color-surface: #FFFFFF;           /* Crisp Card Surface */
  --color-surface-tint: #F3EEE7;      /* Warm Input / Elevated well */
  
  --color-primary: #C86C58;          /* Terracotta Rust */
  --color-primary-hover: #B55B47;    /* Deepened Terracotta */
  --color-primary-soft: #FFDAD3;     /* Muted Terracotta Tint */
  --color-primary-container: #FFF7F3;/* Soft Blush Accent */
  
  --color-amber: #D4A373;            /* Golden Amber / Latte */
  --color-amber-soft: #F9EFE6;       /* Latte Wash */

  --color-text-main: #2D2D2D;        /* Slate Charcoal (DO NOT USE #000) */
  --color-text-muted: #5C554E;       /* Warm Charcoal Subdued */
  --color-text-light: #8C827A;       /* Tertiary Slate / Placeholder */
  
  --color-border: rgba(45, 45, 45, 0.08); /* Warm hairline border */
  --color-border-hover: rgba(200, 108, 88, 0.3);

  /* Typography */
  --font-serif: 'Playfair Display', Georgia, serif;
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  /* Elevation Shadows */
  --shadow-sm: 0 2px 8px rgba(78, 62, 48, 0.04);
  --shadow-md: 0 8px 24px -4px rgba(78, 62, 48, 0.08);
  --shadow-lg: 0 16px 36px -6px rgba(78, 62, 48, 0.12);
  --shadow-primary: 0 10px 25px -5px rgba(200, 108, 88, 0.35);

  /* Border Radii */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;

  /* Transitions */
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-normal: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 400ms cubic-bezier(0.4, 0, 0.2, 1);
}
```
