# AGENTS.md

## Purpose

This repository contains a static marketing website for Eden Garden Stay. The site is intentionally simple: one HTML file, a few image assets, and no build system.

## Project Shape

- `index.html` contains the full page markup, CSS, and JavaScript.
- `logo.png`, `front.png`, `image.png`, `Side1.png`, `Side2.png` are the current image assets.
- `README.md` and files in `docs/` explain content updates, deployment, and maintenance.
- `CNAME` is used for the production custom domain and should be preserved unless the domain changes.

## Working Rules

- Keep the site static. Do not introduce a framework, bundler, or package manager unless explicitly requested.
- Prefer editing `index.html` directly for layout, styling, and content changes.
- Keep dependencies minimal. The current page only relies on Google Fonts and Font Awesome CDN links.
- Preserve existing contact details unless the user asks to change them.
- Preserve the seasonal banner unless the user asks to change or remove it.
- Do not remove documentation files when making design or content updates.

## Design Guidance

- Maintain the current luxury, warm, editorial visual style.
- Avoid generic template-looking changes.
- Keep the hero section visually balanced: headline, CTA buttons, and house image should all fit cleanly in the first viewport on desktop.
- Be careful with the hero image crop. The front elevation of the house should remain visible and should not be overly clipped.
- When adjusting typography, prefer small scale changes over full redesigns.
- Keep mobile behavior usable without adding unnecessary complexity.

## Content Guidance

- If adding or removing gallery images, update both the slide markup and the indicator controls.
- Keep email and phone links synchronized across all sections.
- Use clear hospitality-focused copy, not vague startup-style marketing language.
- Prefer concise, readable text over long promotional paragraphs.

## Verification

After making changes:

1. Review `index.html` for obvious structural mistakes.
2. Check that `mailto:` and `tel:` links still exist where expected.
3. Confirm gallery controls and lightbox hooks still match the image markup.
4. If the hero section was edited, verify that the image and headline still fit well together.

## Out of Scope By Default

- No backend work
- No CMS integration
- No analytics or tracking scripts
- No build tooling
- No dependency installation

## Useful References

- `README.md`
- `docs/CONTENT_GUIDE.md`
- `docs/DEPLOYMENT.md`
- `docs/MAINTENANCE.md`
