# Eden Garden Stay Website

Static marketing website for Eden Garden Stay.

## Overview

This repository contains a single-page site built with plain HTML, CSS, and a small amount of vanilla JavaScript. It is intentionally simple so it can be hosted on GitHub Pages or any static hosting provider without a build step.

## Files

- `index.html`: Main website page, including structure, styling, and gallery behavior.
- `logo.png`: Brand logo used in the header.
- `front.png`: Hero image.
- `image.png`, `Side1.png`, `Side2.png`: Gallery images.
- `CNAME`: Custom domain configuration for GitHub Pages.

## Local Editing

Because this is a static site, you can edit `index.html` directly and open it in a browser.

Simple options:

1. Double-click `index.html` in Finder.
2. Or run a local server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Content Areas

The page is split into these sections:

1. Sticky header with promotional banner and navigation
2. Hero section with primary messaging and CTA buttons
3. Amenities section
4. Stay detail cards
5. Gallery section with carousel and lightbox
6. Contact / booking section
7. Footer

See [docs/CONTENT_GUIDE.md](/Users/shinejoseph/Developer/edengardenstay/docs/CONTENT_GUIDE.md) for what to edit in each part.

## Design Notes

- The site uses CSS custom properties near the top of `index.html` for colors, shadows, spacing, and layout width.
- Typography uses `Cormorant Garamond` for headings and `Manrope` for body text.
- The page is fully self-contained aside from external font and icon CDNs.

## Deployment

This repo is already structured for static hosting. If GitHub Pages is being used, pushing changes to the published branch is usually enough.

See [docs/DEPLOYMENT.md](/Users/shinejoseph/Developer/edengardenstay/docs/DEPLOYMENT.md) for deployment notes and a quick checklist.

## Maintenance

- Optimize image sizes if page load becomes slow.
- Keep contact details in sync across the hero, gallery CTA area, and contact section.
- If you add more gallery images, update both the HTML slides and the indicator controls.

See [docs/MAINTENANCE.md](/Users/shinejoseph/Developer/edengardenstay/docs/MAINTENANCE.md) for recurring edit guidance.
