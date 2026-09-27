# Area 7 website

Static site for Area 7 at 218/220 Ballarat Rd, Maidstone. It has no build step: open `index.html`, or upload the whole folder to any static host (Netlify, Cloudflare Pages, GitHub Pages).

| File | What it is |
|---|---|
| `index.html` | Hub page: four quadrants with the logo in the centre |
| `carwash.html`, `kebab.html`, `dessert.html`, `pizza.html` | Business pages |
| `js/data.js` | **All prices, menus, hours, phones and links.** Edit here only. |
| `js/main.js` | Renders `data.js` into the pages (menus, hours, open-now status, JSON-LD) |
| `css/styles.css` | All styles |
| `assets/` | Logo, favicons and photos |

## Deploying
The site is hosted on GitHub Pages from the `main` branch (repository root). Every push to `main` goes live at https://area7.com.au within about a minute. `CNAME` holds the custom domain; `.nojekyll` makes GitHub serve the files as-is.

## Changing prices, items or hours
Edit `js/data.js`. Each item has a permanent `id`, which the future ordering and booking system will use, so don't rename ids once that system is live. To hide an item without deleting it, set `available: false`.

## Photos
Each business uses `assets/<id>-hero.webp` plus a `.jpg` fallback (carwash, kebab, dessert, pizza). They appear in the hub quadrant, the page banner and the promo cards. To replace one, overwrite both files with the same names; around 1600 px wide gives the sharpest result. If a file is missing, the page shows a tinted placeholder with the business icon.

## Still to fill in
- `js/data.js`: in the `pizza` entry, `reviewUrl: ""`. Add the Google review link once the Cafe & Pizzeria has a Google listing; the review link appears automatically. When that listing exists, also update the pizza `geo`, `mapsUrl` and `mapsEmbedUrl`.

## Notes
- The canonical and Open Graph URLs in each page's `<head>` are hard-coded to `https://area7.com.au`, because Facebook and other link previews don't run JavaScript. If the domain changes, update them together with `SITE_URL` in `data.js`.
- "Book online" and "Order online" are disabled buttons with `data-feature="booking"` / `data-feature="ordering"` hooks, ready for the future booking and ordering system. Kababjii's button is a live DoorDash link.
- Opening hours and the open-now status use Melbourne time.
