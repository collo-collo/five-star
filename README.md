# Five Star Farms static site

This is a static front-end preview for Five Star Farms. It covers canola, barley, maize, potatoes, and common bean (*Phaseolus vulgaris*); potato and common-bean seed; and tractor, silage/feed, and harvesting equipment hire. `index.html` is the default homepage and `index3.html` is the named homepage copy. Shared navigation, page content, filters, assistant, and interactions are in `site.js`. The shared Tailwind palette is defined in `theme-config.js`, the company logo is stored in `assets/five-star-farms-logo.jpg`, and `favicon.ico` is generated from that logo at 16–256 px resolutions.

## Vercel

Import the repository and set the project Root Directory to `site`. Choose the **Other** framework preset, leave the Build Command empty, and set Output Directory to `.`. Vercel serves `index.html` by default.

Tailwind CSS, Alpine.js, and Unsplash images load from public CDNs. Visitors need an internet connection for the styling and interactive features.

## Before going live

- Set `WHATSAPP_NUMBER` in `site.js` to the business's WhatsApp number in international format with digits only. Until set, the floating quick-contact button links to the enquiry page.
- Connect the front-end-only inquiry form to an email or form service; it currently does not send or store data.
- Confirm the farm's location, contact details, seed varieties, certification, equipment inventory, technical specifications, hire terms, and rates.
- Do not add acreage, germination percentages, certification marks, machine specifications, or performance claims until the client verifies them.
- Confirm image suitability and usage rights for the selected production photography.

The crop planning filter records crop type, soil context, and rainfall outlook as enquiry context only. It does not make agronomic recommendations. Equipment information modals likewise avoid inventing specifications or rates.
