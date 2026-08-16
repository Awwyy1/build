# Photographs

Drop a file in this folder named after its slot. That is the whole
procedure, no code needs editing. A slot with no matching file shows a
labelled placeholder instead.

**Do not compress anything first.** Files here go through Astro's image
pipeline: each one is resized to several widths, re-encoded as WebP and
served at whatever size the layout actually asks for. A 2 MB photo straight
off a phone is fine. That is why these live under `src/` and not `public/`,
where they would be served untouched.

The folder is read when the site builds, so after copying a photo in,
restart `npm run dev` (or rebuild) for it to appear.

## File names

| Name the file | Where it appears |
|---|---|
| `hero-1` | Hero, first slide |
| `hero-2` | Hero, second slide |
| `hero-3` | Hero, third slide |
| `services` | Services section |
| `about` | About section |
| `careers` | Careers section and Careers page |
| `kringlan-1`, `-2`, `-3` | Project card, Kringlan |
| `atnorth-1`, `-2`, `-3` | Project card, atNorth |
| `house-1`, `-2`, `-3` | Project card, private house |

Extension can be `.jpg`, `.jpeg`, `.png`, `.webp` or `.avif`.

So `about.jpg` becomes the About photo. Capitalisation does not matter.

A descriptive prefix before a dot is ignored, so `projectPhotos.house.jpg`
and `house.jpg` both fill the same slot. Only the part after the last dot
is matched.

Each project card is a swipeable gallery of three slides. Fill them in any
order: `atnorth-2.jpg` on its own lands on the second slide and the other
two keep their placeholders. The first slide also answers to the bare
project name, so `kringlan.jpg` works in place of `kringlan-1.jpg`.

To change how many slides a card has, edit `projectSlideCount` in
`src/config/media.ts`.

## Shapes

| Slot | Works best as |
|---|---|
| Hero slides | wide landscape |
| Services, About | tall portrait |
| Careers | landscape |
| Project cards | 4:3 |

Every slot uses `object-fit: cover`: the image fills its frame and is
cropped to fit, never stretched. Keep the subject away from the edges.

Hero images sit behind the headline, which occupies the left half on wide
screens, so a photo with a busy left side will fight it.

## Alt text

Alt text is not set here. It is translated into all four languages and
lives in `src/i18n/ui.ts` under keys such as `hero.slide1.alt` and
`about.photo.alt`. Edit it there if a photo shows something other than
what the existing description says.

## Overriding a slot by hand

If a file needs a name that does not match, point the slot straight at it
in `src/config/media.ts`, replacing the `pick(...)` call with an import.
