# Ruang Seduh — Design System & UI Documentation

Dokumentasi ini merapihkan dan membakukan seluruh spesifikasi desain UI dari Stitch AI dan Product Requirements Document (PRD) untuk **Ruang Seduh**.

---

## 1. Filosofi & Karakter Brand
- **Brand Name:** Ruang Seduh
- **Tagline:** *Coffee • Conversation • Creation*
- **Vibe:** Hangat, kreatif, tenang, terkurasi, modern, dan membumi (*warm organic minimalism*).
- **Pendekatan:** *Tactile sanctuary* terinspirasi dari kultur *slow coffee* — memadukan keanggunan editorial dan kehangatan ruang komunal.

---

## 2. Palet Warna (Color Tokens)

| Peruntukan | Hex Code | Deskripsi & Aturan Penggunaan |
|---|---|---|
| **Background / Canvas Utama** | `#FAF8F5` | Oat beige hangat, lembut di mata, mencegah fatigue visual |
| **Surface Elevasi / Kartu** | `#FFFFFF` | Putih bersih untuk kontras kartu produk & panel menu |
| **Surface Kontainer Rendah** | `#F6F3F2` | Stone oat untuk background section sekunder |
| **Accent / Secondary (Terracotta)** | `#C86C58` | Rust terracotta untuk CTA utama, aksen tombol, badge sorotan |
| **Warm Highlight / Amber** | `#D4A373` | Warna latte amber untuk ikon, badge rating, & detail |
| **Text Utama (Charcoal Slate)** | `#2D2D2D` | Charcoal pekat. **Dilarang keras memakai hitam pekat `#000000`** |
| **Text Sekunder (Muted Slate)** | `#5C554E` | Body copy penjelasan, label pendukung, & microcopy |
| **Border & Hairline Stroke** | `rgba(45, 45, 45, 0.08)` | Garis batas tipis & lembut tanpa kesan kaku |

---

## 3. Tipografi (Typography Hierarchy)

| Kategori | Font Family | Weight | Ukuran (Desktop / Mobile) | Penerapan |
|---|---|---|---|---|
| **Display / Hero H1** | `Playfair Display` | SemiBold (600) | `48px` / `32px` | Judul utama landing page |
| **Section Heading H2** | `Playfair Display` | SemiBold (600) | `36px` / `26px` | Judul section (Menu, Space, Lokasi) |
| **Sub-heading / Card H3** | `Playfair Display` | Medium (500) | `24px` / `20px` | Kategori menu, nama ruangan |
| **Menu Item Title H4** | `Playfair Display` | SemiBold (600) | `20px` / `18px` | Nama item kopi & kudapan |
| **Body Large** | `Plus Jakarta Sans` | Regular (400) | `18px` / `16px` | Hero lead text, quote filosofi |
| **Body Regular** | `Plus Jakarta Sans` | Regular (400) | `16px` / `14px` | Deskripsi umum & penjelasan ruang |
| **Body Small** | `Plus Jakarta Sans` | Regular (400) | `14px` / `13px` | Deskripsi menu item |
| **Label / Button / Badges**| `Plus Jakarta Sans` | SemiBold (600) | `14px` / `12px` | Tombol CTA, chip kategori, jam buka |

---

## 4. Spacing & Bentuk Geometri (Shapes & Radii)

- **Border Radius:**
  - Micro / Badge: `rounded-full` (`9999px`)
  - Kartu & Wadah Konten: `rounded-xl` (`16px` / `1rem`)
  - Panel Besar: `rounded-2xl` (`24px` / `1.5rem`)
- **Grid Layout:**
  - Desktop: 12-kolom fluid grid (Outer margin: `2rem` - `4rem`)
  - Tablet: 8-kolom grid
  - Mobile: 4-kolom stacked layout (Outer margin: `1.25rem`)
- **Sentuhan Interaktif (Accessibility):**
  - Semua area sentuh (*tap targets*) minimal berukuran **44x44px** (sesuai standar WCAG AA).

---

## 5. Struktur Aset Desain Terorganisir

```
Design/
├── README.md                      # Panduan umum desain ini
├── DESIGN_TOKENS.md               # Spesifikasi token CSS & variabel
├── logo/
│   ├── logo.svg                   # Vektor logo resmi Ruang Seduh
│   └── preview.png                # Preview logo
├── screens/
│   ├── hero_interior.png          # Visual interior kafe untuk Hero
│   ├── space_creation.png         # Visual workspace 'For Your Creation'
│   ├── space_conversation.png     # Visual terrace 'For Your Conversations'
│   └── stitch_landing_page.png    # Mockup lengkap rancangan Stitch AI
└── stitch_raw/                    # Arsip file mentah Stitch AI asli
```
