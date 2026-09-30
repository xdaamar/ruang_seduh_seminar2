---
name: Warm Artisanal Earth
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e4e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#454843'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0f0'
  outline: '#757873'
  outline-variant: '#c5c7c1'
  surface-tint: '#5e5e5c'
  primary: '#5e5e5c'
  on-primary: '#ffffff'
  primary-container: '#faf8f5'
  on-primary-container: '#727270'
  inverse-primary: '#c8c6c4'
  secondary: '#974635'
  on-secondary: '#ffffff'
  secondary-container: '#ff9881'
  on-secondary-container: '#772e1e'
  tertiary: '#7d562d'
  on-tertiary: '#ffffff'
  tertiary-container: '#fff7f3'
  on-tertiary-container: '#93693e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e4e2df'
  primary-fixed-dim: '#c8c6c4'
  on-primary-fixed: '#1b1c1a'
  on-primary-fixed-variant: '#474745'
  secondary-fixed: '#ffdad3'
  secondary-fixed-dim: '#ffb4a4'
  on-secondary-fixed: '#3e0500'
  on-secondary-fixed-variant: '#792f20'
  tertiary-fixed: '#ffdcbd'
  tertiary-fixed-dim: '#f0bd8b'
  on-tertiary-fixed: '#2c1600'
  on-tertiary-fixed-variant: '#623f18'
  background: '#fcf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e1'
typography:
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
The design system reflects a grounded, tactile sanctuary inspired by slow coffee culture and modern craft. It balances editorial sophistication with welcoming hospitality, creating an atmosphere that feels unhurried, mindful, and sensory.

The design movement combines **warm organic minimalism** with **editorial elegance**: generous breathable negative space, subtle tactile layering, smooth geometry, and distinct typographic contrast. Surfaces evoke linen, ceramic, and oat paper rather than plastic or cold digital glass.

## Colors
The palette is built on sun-dried, ceramic, and roasted coffee tones:
- **Base Canvas (`#FAF8F5`)**: A soft, comforting oat beige that serves as the predominant light surface. Pure white (`#FFFFFF`) is reserved solely for crisp interactive card backgrounds or image backing.
- **Secondary Accent (`#C86C58`)**: Terracotta rust providing warmth, focal points, primary actions, and selected states.
- **Warm Highlight (`#D4A373`)**: Golden latte amber used for badges, subtle indicators, rating stars, and secondary callouts.
- **Secondary Surface (`#F3EEE7`)**: Deeper stone-oat for container tiers, structural wells, and input fields.
- **Text & Stroke (`#2D2D2D`)**: Muted charcoal slate. Never use pure black (`#000000`) for text or borders to preserve the warm, organic atmosphere. Subdued body copy shifts to an earthy charcoal tint (`#5C554E`).

## Typography
Typographic scale relies on the pairing of an editorial high-contrast serif for narrative anchors with a clean, humanist grotesque for clarity and functional interfaces:
- **Playfair Display**: Used for hero expressions, section headers, coffee blend titles, and featured editorial quotes. It brings artisanal character, heritage, and warmth.
- **Plus Jakarta Sans**: Used for body descriptions, checkout steps, brew parameters, and microcopy. Its gentle terminal curves match the rounded visual system while remaining highly legible at compact scales.

## Layout & Spacing
A fluid 12-column responsive grid governs desktop layouts, compressing to 8 columns on tablet devices and 4 columns on mobile. 

- **Outer Margins**: Desktop layouts use `2rem` (expanding up to `4rem` on wide screens); mobile views reduce to `1.25rem` to maximize touch areas.
- **Vertical Rhythm**: Generous vertical spacing (`space-xl` or larger section separators) guarantees a relaxed, editorial pace reminiscent of a coffee table journal.
- **Density**: Compact layouts are strictly avoided. Elements must have sufficient negative space to feel deliberate and calm.

## Elevation & Depth
Elevation favors soft ambient shadows and tonal surface stacking rather than sharp drop shadows or cold borders:
- **Tonal Layering**: Depth is primarily established by placing `#FFFFFF` or elevated `#FAF8F5` containers over `#F3EEE7` base layers.
- **Ambient Warm Shadows**: When elevation is required (e.g., active cards, floating order sheets, modal trays), apply soft, diffused shadows tinted with raw umber rather than neutral grey (e.g., `0 10px 30px -10px rgba(78, 62, 48, 0.08)`).
- **Subtle Surface Borders**: Outlines use hairline strokes (`1px`) in a warm beige tone (`rgba(45, 45, 45, 0.06)`) to preserve clean silhouettes without visual harshness.

## Shapes
Forms are soft, friendly, and organic:
- Primary elements and interactive controls employ relaxed curves (`rounded-lg` at 1rem).
- Large containers, menu cards, visual feature panels, and modals use expressive generous corners (`rounded-xl` to `rounded-2xl` at 1.5rem - 2rem).
- Floating tags, micro-badges, and pill buttons utilize fully rounded ends (`rounded-full`) to echo ceramic pebble forms.

## Components

### Buttons
- **Primary**: Terracotta background (`#C86C58`), warm off-white label (`#FAF8F5`), `rounded-xl` (1rem), subtle warm shadow on hover.
- **Secondary**: Tinted oat surface (`#F3EEE7`), charcoal text (`#2D2D2D`), no shadow, hairline outline (`rgba(45, 45, 45, 0.08)`).
- **Text Button**: Terracotta text (`#C86C58`) with an underline animation; zero background padding offset.

### Cards
- **Product & Story Cards**: Solid `#FFFFFF` or `#FAF8F5` surface with `1.5rem` (`rounded-xl`) corner radius. Padding is generous (`1.5rem`). Borders are soft and warm (`1px solid rgba(45, 45, 45, 0.06)`). Images use matching rounded tops or inset padding.

### Chips & Badges
- **Tasting Notes / Filters**: Pill-shaped (`rounded-full`), padded with `0.5rem 1rem`. Unselected chips use `#F3EEE7` with `#2D2D2D` text. Active chips take `#C86C58` with `#FAF8F5` text, or a warm latte wash (`#D4A373` at 20% opacity) for tasting profile highlights (e.g., "Floral", "Citrus").

### Input Fields
- Filled style with `#F3EEE7` background, `rounded-xl` radius, charcoal text (`#2D2D2D`), and placeholder in muted umber (`#8C827A`). Active focus shifts border stroke to `#C86C58` with a soft terracotta glow ring.

### Checkboxes & Radio Buttons
- Rounded geometry (`0.375rem` for checkboxes, circular for radio). Selected state fills with `#C86C58` showcasing a clean `#FAF8F5` check icon.

### Specialized Components
- **Brew Recipe Card**: Structured section showcasing coffee-to-water ratio, grind size, and water temperature using gentle dividers, Playfair numerals, and amber-tinted badge indicators.
- **Flavor Profile Radar / Tags**: Soft organic pill clusters with subdued earthen tones indicating body, acidity, and roast levels.