# Kalpna Restaurant & Cafe: demo website

A fast, mobile-first, no-build static website for portfolio use. Plain HTML, CSS and a little JavaScript. No frameworks, paid APIs, payments or tracking.

**What is real and what is sample**
- Real (from the public Google Maps listing): restaurant name and location.
- Sample / fictional: menu, prices, opening hours, phone, email, and all food images (original illustrations).
- The site states on every page that it is a demo and not affiliated with the restaurant. There are no reviews or claims.

## Files

| File | Purpose |
|---|---|
| `index.html` | All page content: text, menu, hours, SEO tags |
| `config.js` | WhatsApp number and message, phone, email, address, map coordinates |
| `styles.css` | Colours (top of file), fonts, layout |
| `script.js` | Menu filter, mobile nav, WhatsApp/map links from config, "today" highlight |
| `images/` | Hero, gallery images and favicon |

## Run locally

You need Python 3 (already on most computers) or Node.

```bash
cd kalpana-demo
python3 -m http.server 8000
```

Open http://localhost:8000. On Windows use `python -m http.server 8000`.
With Node instead: `npx serve .`

You can also double-click `index.html`; it works without a server too.

## Deploy free (Netlify Drop: easiest, no account setup needed to try)

1. Go to https://app.netlify.com/drop
2. Drag the whole `kalpana-demo` folder onto the page.
3. You get a live `https://something.netlify.app` link. Create a free account to keep it and rename it.

### Alternative: GitHub Pages
1. Create a free GitHub repository and upload all files (keep `index.html` at the top level).
2. Repo **Settings → Pages → Build and deployment**: Source "Deploy from a branch", branch `main`, folder `/ (root)`.
3. After about a minute the site is at `https://YOUR-USERNAME.github.io/REPO-NAME/`.

Cloudflare Pages and Vercel also have free static hosting; upload the same folder.

## Customise

**Restaurant name**: open `index.html` and find-and-replace `Kalpna` (and `Restaurant &amp; Cafe` if needed). It appears in the `<title>`, meta tags, header, hero, footer and image alt text. Also update the demo notices if the site becomes real.

**Menu**: in `index.html`, find `<section class="menu-cat"`. Each dish is one line:
```html
<li><span class="dot veg"><span class="sr">Vegetarian</span></span><span class="dish">Dish name</span><span class="price">₹260</span></li>
```
Copy a line to add a dish, delete one to remove it. Use `dot nonveg` and `Non-vegetarian` for non-veg items. To add a category, copy a whole `<section class="menu-cat" data-cat="...">` block, give it a new `data-cat` value, and add a matching `<button class="tab" data-filter="...">` in the `tabs` row.

**Photos**: put your images in `images/` (JPG or WebP, around 800 px wide, under 150 KB each for speed). In `index.html`, change each `src="images/....svg"` to your file name, and update the `alt` text and caption to describe the real dish. Keep `width` and `height` as they are, or set them to your image's size. The hero image is the first `<img>`. Only use photos you own or have permission to use.

**Address**: edit `addressLines` in `config.js`. (The text inside `<address>` in `index.html` is the no-JavaScript fallback; update it too.)

**Map link**: edit `latitude` and `longitude` in `config.js`. To get them, right-click the place in Google Maps and click the numbers at the top of the menu to copy them.

**Phone, email, WhatsApp**: edit `config.js`.
- `whatsappNumber`: country code plus number, digits only, e.g. `"919876543210"` for +91 98765 43210. Spaces, `+` and dashes are stripped automatically.
- `whatsappMessage`: the text pre-filled when someone taps the button.
- `phoneDisplay` and `email`: what is shown and linked.

**Opening hours**: edit the seven table rows in `index.html` (section `id="visit"`).

**Colours and fonts**: change the values in the `:root` block at the top of `styles.css`. Fonts load from Google Fonts (free); to avoid that request, delete the three `<link>` lines for fonts in `index.html` and the site falls back to system fonts.

**SEO**: edit `<title>` and `<meta name="description">` in the `<head>` of `index.html`.
