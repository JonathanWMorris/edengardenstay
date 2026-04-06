# Maintenance Notes

## Images

The current images are large PNG files. If performance becomes an issue:

1. Resize oversized images.
2. Convert large PNG photos to compressed JPG or WebP when appropriate.
3. Keep filenames stable unless you also update references in `index.html`.

## Gallery behavior

The gallery logic is at the bottom of `index.html`.

It currently supports:

- Previous / next controls
- Manual dot navigation
- Auto-play every 10 seconds
- Pause on hover or focus
- Keyboard left / right navigation
- Lightbox open / close

If you change slide counts, verify that `indicators` still match the number of slides.

## Styling approach

All styling is inline in the `<style>` block in `index.html`.

Recommended editing order:

1. Update the `:root` variables first.
2. Adjust section-specific classes after that.
3. Review responsive rules in the two media query blocks near the bottom of the stylesheet.

## Accessibility checks

After edits, verify:

- Images have useful `alt` text
- Buttons and links remain readable on mobile
- Text contrast stays high enough against background colors
- Keyboard navigation still works for the gallery
