# PetroByte Website Clone
## Complete Marketing Website — HTML / CSS / JavaScript

### Project Structure
```
petrobyte/
├── index.html              ← Homepage (main landing page — 19 sections)
├── features.html           ← Features & Portfolio page
├── pricing.html            ← Plans & Pricing page
├── about.html              ← About page
├── contact.html            ← Contact page
├── demo.html               ← Demo videos page
├── pages/
│   ├── customers.html      ← Customer reviews & testimonials
│   ├── terms.html          ← Terms & Conditions
│   └── policy.html         ← Privacy Policy
└── assets/
    ├── css/
    │   ├── root.css        ← CSS variables / design tokens
    │   ├── reset.css       ← Browser reset & base styles
    │   ├── components.css  ← Buttons, cards, modals, forms
    │   └── sections.css    ← All page sections + responsive
    └── js/
        └── main.js         ← All JavaScript interactions

```

### How to Run
- No build step required. Just open `index.html` in any browser.
- For local development with proper font loading, use a local server:
  ```bash
  npx serve .        # OR
  python -m http.server 3000
  ```

### Tech Stack
- Pure HTML5 + CSS3 + Vanilla JavaScript
- Google Fonts: Plus Jakarta Sans + Syne
- Zero dependencies, zero frameworks
- Fully responsive (mobile/tablet/desktop)

### Features Implemented
- ✅ Sticky dark navbar + hamburger mobile menu
- ✅ Announcement bar (dismissible)
- ✅ Quick-action bar (5 buttons)
- ✅ Hero section with simulated dashboard
- ✅ Animated stats counter (scroll-triggered)
- ✅ 12-card core features grid
- ✅ Benefit pills with dynamic content
- ✅ Dashboard tab switcher (A/B/C/D)
- ✅ 9-card notable features grid
- ✅ Dark additional features cards
- ✅ 4-card usage section
- ✅ 3-panel work panels
- ✅ Tally integration section
- ✅ GST return section
- ✅ Comparison table (PetroByte vs Pen-Paper vs Excel)
- ✅ Auto-scrolling testimonials carousel
- ✅ Mobile app gallery (simulated screens)
- ✅ 5-step getting started guide
- ✅ FAQ accordion (data freedom section)
- ✅ Pricing section + modal popup
- ✅ Trust badges strip (your addition)
- ✅ Clients logos (BPCL/HPCL/IOCL/Nayara)
- ✅ Lead capture form with validation
- ✅ Final CTA section
- ✅ 4-column footer with community form
- ✅ Sticky bottom CTA bar (your addition)
- ✅ Exit intent popup (your addition)
- ✅ Scroll-to-top button
- ✅ Pricing modal
- ✅ Callback request modal
- ✅ Scroll reveal animations
- ✅ Toast notifications

### Your Custom Additions (Beyond Original)
1. Animated Stats Counter Section
2. Announcement Top Bar
3. Sticky CTA Bar (appears after 500px scroll)
4. Exit Intent Popup
5. Trust Badges Strip
6. India State Coverage Map (customers.html)
7. Oil Company Distribution Charts
8. Enhanced FAQ section (4 items vs original 3)

### Color Palette
| Color         | Hex      | Usage                        |
|---------------|----------|------------------------------|
| Primary Blue  | #1A6FC4  | Nav, headings, buttons       |
| Accent Orange | #E87820  | CTAs, highlights, badges     |
| Dark Navy     | #0F1E36  | Nav bg, hero, footer         |
| Light Blue    | #D6E8FA  | Card backgrounds, info boxes |
| White         | #FFFFFF  | Main page background         |

### Hosting (Free)
Deploy to Netlify in 60 seconds:
1. Drag the `petrobyte/` folder to app.netlify.com/drop
2. Set custom domain
3. Done — live site!

### Developer Notes
- All forms show toast notifications (no actual backend connected yet)
- Connect forms to Netlify Forms or Formspree by adding `data-netlify="true"` to form tags
- All external links point to the real petrobyte.app domain
- Images are CSS-simulated (replace with actual WebP images when available)

---
Built by Claude | Based on petrobyte.in
