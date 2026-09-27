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

## Photos to add
Until photos are added, each spot shows a dark placeholder with the business icon. Save each photo as both `.webp` and `.jpg` with these exact names:

| File | Used on | Recommended size |
|---|---|---|
| `assets/carwash-hero.webp` / `.jpg` | Hub quadrant, car wash hero, promo cards | 1600 × 1067 (3:2), under 300 KB |
| `assets/kebab-hero.webp` / `.jpg` | Same, for Kababjii | 1600 × 1067 |
| `assets/dessert-hero.webp` / `.jpg` | Same, for Dessert House | 1600 × 1067 |
| `assets/pizza-hero.webp` / `.jpg` | Same, for Cafe & Pizzeria | 1600 × 1067 |

Once they're in, uncomment the preload line in `index.html` `<head>` for each photo.

## Still to fill in
- `js/data.js`: in the `pizza` entry, `reviewUrl: ""`. Add the Google review link once the Cafe & Pizzeria has a Google listing; the review link appears automatically. When that listing exists, also update the pizza `geo`, `mapsUrl` and `mapsEmbedUrl`.

## Notes
- The canonical and Open Graph URLs in each page's `<head>` are hard-coded to `https://area7.com.au`, because Facebook and other link previews don't run JavaScript. If the domain changes, update them together with `SITE_URL` in `data.js`.
- "Book online" and "Order online" are disabled buttons with `data-feature="booking"` / `data-feature="ordering"` hooks, ready for the future booking and ordering system. Kababjii's button is a live DoorDash link.
- Opening hours and the open-now status use Melbourne time.
