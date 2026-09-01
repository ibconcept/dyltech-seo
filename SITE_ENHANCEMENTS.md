# What to ADD to dyltechcomputers.co.ke

The site already exists as a React SPA (products loaded from a database, WhatsApp enquiry buttons, category pages, a services page). This document lists **new things to add** — content sections, features, pages and trust builders — to grow traffic and convert visitors into customers.

---

## 1. Homepage Sections to Add

The homepage currently shows hero, categories, offers and featured products. Add these high-converting sections:

### A. "Why Choose Dyltech" / Trust Badges Strip
4 short value props under the hero:
- ✅ Genuine products — all brands, never counterfeit
- ✅ 100% M-Pesa & secure payment accepted
- ✅ Genuine warranty on every machine
- ✅ Same-day Nairobi CBD pickup & delivery

### B. Customer Testimonials / Reviews Carousel
Real quotes with names + photos. Add a "Google Reviews" widget pulling live ratings. Keywords: *trusted laptop shop Tom Mboya Street*.

### C. Brands Carousel
Logo marquee: **HP • Dell • Lenovo • ASUS • Acer • Apple • Microsoft**. Links to filtered brand pages (`/category/laptops/hp`). Helps with branded searches.

### D. Latest Arrivals
A "New in Stock" row of the most recently added products with date badges.

### E. "Shop by Use Case" Section
Bundles speak to intent:
- 🎓 For Students — budget laptops
- 💼 For Business — office laptops, bulk supply
- 🎮 For Gamers — RTX gaming laptops, high-refresh monitors
- 🛠 For Creators — MacBook, high-RAM workstations

### F. Bulk / Corporate Sales Section
Big CTA banner for B2B: "Equipping your office or school? Bulk orders, corporate invoicing, quotations & delivery nationwide." Links to `/services` and a WhatsApp quote button. (Competitors like Intechs and Masterpiece win this segment with dedicated pages.)

### G. Location, Map & Hours Section
- Embedded Google Map of Meru South House, Tom Mboya St
- Opening hours (Mon–Sat 8:00–18:30)
- "Get Directions" button + NAP footer note

### H. FAQ Section (accordion)
Questions like:
- Do you sell refurbished laptops?
- Do you offer warranty?
- Can I pay on delivery / M-Pesa?
- Do you deliver outside Nairobi?
- Can I trade in my old laptop?

---

## 2. Convert More Visitors — Functionality to Add

### A. M-Pesa Express Checkout (or "Pay on Delivery" flow)
Currently every product uses "Enquire on WhatsApp". Add an optional **pre-checkout**: collect phone → generate M-Pesa STK push link → confirm → store notifies. At minimum, add a "Order now via M-Pesa" CTA.

### B. Product Filters on Category Pages
Already have brand filters. Add:
- Price range slider (e.g. under 50k, 50–100k, 100k+)
- RAM / storage / screen size filters
- Sort by: price, newest, most popular

### C. Comparison Feature
Let shoppers pick 2–3 products and compare specs side-by-side (RAM, CPU, storage, display, warranty). Huge for laptops.

### D. Wishlist / Share
Wishlist icon on each card (share already exists). Repeat ability to save and share via WhatsApp is high value.

### E. Stock Status Badges
Show **In Stock / Limited / Order on Request** per product. Fewer lost leads, more urgency.

### F. Promo Codes & Offers
A "PROMO" box at checkout + a `/category/offers` page (route already exists). Support codes like `DYLTECH5`.

### G. Order Summary via WhatsApp
Pre-fill the WhatsApp message with product + price (already done), add cart so multiple items can be batched into one message.

---

## 3. New Pages to Create

### A. Product Detail Page (dedicated URL per product — critical for SEO)
Currently products seem to share a modal. Create `/category/:category/:brand/:productSlugId` rich pages with:
- Big gallery (multiple images)
- Full spec table (CPU, RAM, SSD, display, ports, weight, battery)
- Warranty & delivery tabs
- Related products
- JSON-LD **Product** schema (price, brand, availability)

### B. `/about` — Our Story Page
Who you are, "Plug wa Gadgets" tagline, years in the business, photos of the store, team. Builds E-E-A-T trust that Google rewards.

### C. `/contact` — Contact & Directions
Form, WhatsApp, phone, map, hours, full NAP. Encourage reviews from here.

### D. `/blog` — Blog/Guidance Hub
The #1 missing asset. Competitors (TechStore, Intechs, Digtech, Devicestech) all rank for long-tail keywords via blog posts. Suggested first 10 articles:
1. Best Laptops for Students in Kenya 2026 (Budget Picks)
2. HP vs Dell vs Lenovo in Kenya — Which Brand Should You Buy?
3. Best Gaming Laptops in Kenya Under KSh 150,000
4. How Much Does a Refurbished Laptop Cost in Nairobi?
5. Windows, Linux or Dual-Boot — Which OS is Right for You?
6. What to Check Before Buying a Used Laptop (Buyer's Guide)
7. Huawei? No — Best Business Laptops for Kenyan Offices
8. SSD vs HDD: Why an SSD Upgrade Matters
9. How to Spot a Refurbished vs Brand New Laptop in Kenya
10. Bulk Buying Computers for Schools & Offices in Kenya

### E. `/bulk` or Corporate Section
Dedicated B2B/tenders page with quotation form.

### F. `/sell` — Trade-In Page
"We buy your old laptop" — price offer form. Unique differentiator (Nexcom does this well).

### G. Legal Pages
Terms & Conditions, Privacy Policy, Returns/Warranty Policy. Needed for Google Shopping/Ads approval and trust.

---

## 4. Services to Add

Current services: OS/software installation, hardware repair, HDD/SSD upgrade, laptop upgrading, spare parts, charging port repair, bulk sales.

Add these services (very common requests in Nairobi, huge for local SEO):
- 🛡 **Data Recovery** — dead HDD, water damage
- 📷 **CCTV Installation & Networking Setup** (Intechs ranks for "CCTV cameras Nairobi")
- 🖥 **Computer Training** (basic IT, LinkedIn-style courses for students)
- ↩️ **Trade-In / Buy-Back** (accept old laptops as part-payment)
- 🔋 **Genuine Battery, Charger & Spare Parts** — already partially there; price the page well
- 📦 **Nationwide Delivery Setup** — formal page with zones/pricing
- 🧰 **On-Site IT Support for Offices** (maintenance contracts, monthly)
- 🖨 **Printer & Toner Supply / Cartridge Refill**

Each service gets its own URL (`/services/repairs`, `/services/networking`, ...) rather than one long page. Each one targets a keyword.

---

## 5. Trust, Social & Credibility Builders

### A. Google Business Profile (GBP) — do this first
- Claim + verify listing for **Dyltech Computers, Meru South House, Tom Mboya St**
- Add photos of the store + products, hours, phone, services
- Activate **Reviews** and respond to them (reviews = local rankings + conversions)
- Post weekly updates (arrivals, offers)

### B. Social Proof on Site
- Add a **"Trusted by 1,000+ customers across Kenya"** stat strip
- Embed Instagram feed of real product photos
- Show review stars on product cards

### C. Security & Trust Icons
- "Secured by M-Pesa", "Genuine warranty", "AFU/assured origin" badges
- WhatsApp click-to-chat floating button visible on all pages (make it persistent)

### D. Newsletter / WhatsApp Broadcast
Add a simple "Join WhatsApp Broadcast" + email signup in the footer. Use it for new arrivals and deals.

---

## 6. Performance & Platform Quick Wins

- **Migrate product images to WebP** + lazy-load (currently Unsplash preconnect hints at heavy stock images)
- **Add JSON-LD schema for every product page** (Product + Offer + Review)
- **Enable SSR/prerendering** so the homepage/category HTML is crawlable — the site is currently a JS-only SPA (verified: raw HTML contains no content, empty `<!--ssr-outlet-->`). Google can render it, but speed + reliability improves with prerendering. This is the single biggest technical SEO win available.
- **Add a real `sitemap.xml` entry for every product and blog post** as they're created.
- **Image alt text** on all product photos (auto-generate from product name).

---

## Priority Order (Do This Sequence)

| # | Item | Effort | Impact |
|---|------|--------|--------|
| 1 | Google Business Profile + photos + reviews | Low | 🔥🔥🔥🔥🔥 |
| 2 | Dedicated product detail URLs (+ schema) | Medium | 🔥🔥🔥🔥🔥 |
| 3 | Blog section (first 5 posts) | Medium | 🔥🔥🔥🔥 |
| 4 | M-Pesa / Pay-on-Delivery checkout options | Medium | 🔥🔥🔥🔥 |
| 5 | Trade-in ("We buy your laptop") page | Low | 🔥🔥🔥 |
| 6 | Bulk/corporate section + quote form | Low | 🔥🔥🔥 |
| 7 | Testimonials + review widget on homepage | Low | 🔥🔥 |
| 8 | New service pages (data recovery, CCTV, training) | Medium | 🔥🔥🔥 |
| 9 | Filters (price/RAM/storage), comparison, wishlist | Medium | 🔥🔥 |
| 10 | Prerender/SSR the SPA | High | 🔥🔥🔥🔥 |

---

*Review monthly. As rankings improve, double down on the blog (content is the long-term growth engine — every competitor ranking on page one has one).*