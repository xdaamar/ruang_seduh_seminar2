Act as an expert UI/UX Designer and Frontend Developer. Generate a responsive Single Page Application (SPA) landing page for a coffee shop named "Ruang Seduh" based on the following Product Requirements Document (PRD).

The final output should use Semantic HTML5 and Tailwind CSS (or similar modern CSS framework) for styling.

# Brand Identity & Design System
- **Brand Name:** Ruang Seduh
- **Tagline:** Coffee • Conversation • Creation
- **Vibe:** Warm, creative, calm, thoughtful, modern, and earthy.
- **Color Palette:**
  - Background/Primary: Warm Beige or Oat (e.g., #FAF8F5)
  - Accent/Secondary: Terracotta or Soft Brown (e.g., #C86C58)
  - Text: Charcoal or Dark Grey (e.g., #2D2D2D). Strictly DO NOT use pure black (#000000).
- **Typography:**
  - Headings: Modern Serif (Playfair Display or Lora)
  - Body Text: Clean Sans-Serif (Inter, Lato, or Roboto)
- **UI Elements:** Use rounded corners (rounded-lg or rounded-xl) for all images, cards, and buttons to emphasize a warm and welcoming feel. 

# Layout & Content Sections (Mobile-First approach)

1. **Smart Navigation (Header):**
   - Contains the logo "Ruang Seduh" and links: Tentang Kami, Menu, The Space, Lokasi.
   - Interaction: Implement a "Hide-on-Scroll" behavior (navbar disappears when scrolling down to maximize reading space, and reappears immediately when scrolling up).
   - Mobile: Convert to a hamburger menu.

2. **Hero Section:**
   - Headline: Ruang Seduh
   - Sub-headline: Coffee • Conversation • Creation.
   - Call to Action (CTA) Button: "Lihat Menu" (smooth scroll to Menu section).
   - Visual: A high-quality placeholder image of a warm cafe interior with a subtle, slow zoom-in animation (Ken Burns effect).

3. **About Us Section:**
   - A minimalist section with a brief paragraph: "Lebih dari sekadar tempat ngopi, Ruang Seduh dirancang sebagai ruang yang nyaman bagi ide dan obrolan untuk tumbuh bersama."

4. **Our Menu Section:**
   - Display a clean grid for 3 categories: 
     - Signature Coffee
     - Non-Coffee & Artisan Tea
     - Pastry & Bites
   - Include dummy items with prices (e.g., Rp 25.000) and small rounded thumbnail images.

5. **The Space Section (Experience-based Features):**
   - Layout: 2 columns on desktop, stacked vertically on mobile.
   - Column 1 ("For Your Creation"): Visual of a quiet indoor workspace. Text: "Colokan di setiap meja & Wi-Fi stabil (rata-rata 50Mbps) untuk deep work Anda."
   - Column 2 ("For Your Conversations"): Visual of a semi-outdoor communal area. Text: "Sudut santai dengan musik lo-fi pelan, ruang yang pas untuk bertukar ide tanpa terdistraksi."

6. **Footer (Location & Contact):**
   - Display opening hours (08:00 - 22:00) and full dummy address.
   - Interactive Elements:
     - Button 1: "Buka di Google Maps"
     - Button 2: "Hubungi WhatsApp"
     - Button 3: "Salin Alamat" (Include a small UI toast/tooltip that says "Alamat tersalin!" when clicked).
   - Fallback Text: Below the WhatsApp button, include selectable text: "Atau simpan nomor kami: 0812-XXXX-XXXX".
   - Social Media links (Instagram, TikTok icons).

# Technical & UX Constraints
- Ensure all tap targets (buttons/links) are at least 44x44px for mobile accessibility.
- Maintain WCAG AA color contrast for all text against backgrounds.
- Do not add any complex scroll-jacking or heavy animations; use only light, elegant fade-ins on scroll.
- Do not include any login, register, or e-commerce cart functionalities.