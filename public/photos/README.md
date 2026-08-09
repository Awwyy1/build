# Photographs

Anything in `public/` is copied to the site root as-is, so a file saved here
as `hero-1.jpg` is served at `/photos/hero-1.jpg`.

Dropping a file in is not enough on its own — each slot has to be pointed at
it in `src/config/media.ts`. Until then the slot renders a labelled turf
texture, which is why the site currently shows "Ljósmynd" boxes.

## The nine slots

| Where | Field in `src/config/media.ts` | Shape |
|---|---|---|
| Hero, slide 1 | `heroSlides[0].src` | wide, landscape |
| Hero, slide 2 | `heroSlides[1].src` | wide, landscape |
| Hero, slide 3 | `heroSlides[2].src` | wide, landscape |
| Services | `sectionPhotos.services` | tall, portrait |
| About | `sectionPhotos.about` | tall, portrait |
| Careers | `sectionPhotos.careers` | landscape |
| Project — Vesturbær | `projectPhotos.vesturbaer` | 4:3 |
| Project — Akranes | `projectPhotos.akranes` | 4:3 |
| Project — Hlíðar | `projectPhotos.hlidar` | 4:3 |

## Example

Save the file:

    public/photos/hero-1.jpg

Then in `src/config/media.ts`:

```ts
export const heroSlides = [
  { id: 'slide1', src: '/photos/hero-1.jpg' },   // was: null
  { id: 'slide2', src: null },
  { id: 'slide3', src: null },
];
```

Slots are independent, so filling one at a time is fine — the rest keep
their placeholders.

## Practical notes

- Every slot is rendered with `object-fit: cover`, so the image fills its
  frame and is cropped, never stretched. Keep the subject away from the
  edges.
- Hero images sit behind the headline, which occupies the left half on wide
  screens. Pictures with a busy left side will fight it.
- Export at roughly 2000px on the long edge and compress; these are served
  as-is, with no build-time resizing.
- Alt text is **not** set here. It lives in `src/i18n/ui.ts` under keys like
  `hero.slide1.alt`, already translated into all four languages — edit it
  there if a photo shows something other than what the text describes.
