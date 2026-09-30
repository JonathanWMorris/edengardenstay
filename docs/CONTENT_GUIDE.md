# Content Guide

This site is managed directly in `index.html`.

## Update the hero copy

Search for the `hero-copy` section in `index.html`.

Common edits:

- Main headline: the `<h1>`
- Supporting paragraph: the first `<p>` below the headline
- Primary CTA email subject line: the `mailto:` link in the hero buttons

## Update amenities

Search for:

```html
<section class="section-shell features-section" id="features">
```

Each amenity card is an `<article class="feature-item">`.

## Update gallery images

Search for:

```html
<div class="carousel">
```

Each image slide looks like this:

```html
<div class="carousel-slide">
    <img src="./image.png" alt="..." onclick="openLightbox('./image.png')">
</div>
```

If you add or remove slides, also update the indicator buttons below the carousel.

## Update contact details

The current contact details appear in multiple places:

- Hero CTA buttons
- Gallery CTA buttons
- Contact section list

Search for:

- `edengardenpky@gmail.com`
- `+919880394102`

Update every occurrence so the site stays consistent.

## Update colors and layout tokens

Search for the `:root` block near the top of `index.html`.

The main tokens include:

- `--forest`: primary dark green
- `--cream`: light warm surface color
- `--wrap`: page content width

## Update page metadata

Search in the `<head>` section for:

- `<title>`
- `<meta name="description">`
- `<meta name="theme-color">`

These affect SEO, browser appearance, and link previews.
