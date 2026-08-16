/**
 * Photography slots.
 *
 * Slots fill themselves from the file name. Drop a photo into
 * `src/assets/photos/` named after its slot, and it appears; nothing here
 * needs editing. A slot with no matching file renders a labelled
 * placeholder instead of a broken image.
 *
 * Files live under `src/` rather than `public/` so that Astro processes
 * them: each one is resized, re-encoded and served at the size the layout
 * actually asks for, which is why a 2 MB photograph off a phone can be
 * dropped in as-is. Anything in `public/` would be served untouched.
 *
 * A descriptive prefix is allowed and ignored, so `projectPhotos.house.jpg`
 * and `house.jpg` both fill the same slot. Matching is on the part after
 * the last dot and is case-insensitive.
 *
 * Alt text is not here; it is translated, and lives in `src/i18n/ui.ts`.
 */

export type PhotoSrc = ImageMetadata | null;

/*
 * Vite reads the directory at build time. The glob has to be a literal, so
 * the extension list lives here rather than in a variable.
 */
const files = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/photos/*.{jpg,jpeg,png,webp,avif}',
  { eager: true }
);

/** Maps slot name -> processed image, for every file in the directory. */
const discovered: Record<string, ImageMetadata> = {};

for (const [path, module] of Object.entries(files)) {
  const filename = path.split('/').pop() ?? '';
  const base = filename.replace(/\.[^.]+$/, '');
  // "projectPhotos.house" -> "house"; "hero-1" stays "hero-1".
  const slot = base.split('.').pop()!.toLowerCase();
  discovered[slot] = module.default;
}

/** First name that matches a file on disk, or null if none do. */
function pick(...names: (string | null)[]): PhotoSrc {
  for (const name of names) {
    if (!name) continue;
    const hit = discovered[name.toLowerCase()];
    if (hit) return hit;
  }
  return null;
}

/**
 * A fixed-length run of slots for one project's gallery: `house-1`,
 * `house-2`, `house-3`. The first also answers to the bare project name.
 * Empty slots stay in place as placeholders, so the number of slides does
 * not change as photographs trickle in.
 */
function gallery(name: string, count: number): PhotoSrc[] {
  return Array.from({ length: count }, (_, index) =>
    pick(`${name}-${index + 1}`, index === 0 ? name : null)
  );
}

/** Hero slideshow, in order. Name files `hero-1`, `hero-2`, `hero-3`. */
export const heroSlides: readonly { id: string; src: PhotoSrc }[] = [
  { id: 'slide1', src: pick('hero-1', 'hero1', 'slide1') },
  { id: 'slide2', src: pick('hero-2', 'hero2', 'slide2') },
  { id: 'slide3', src: pick('hero-3', 'hero3', 'slide3') },
];

/** One photo per section that carries one. */
export const sectionPhotos: Record<'services' | 'about' | 'careers', PhotoSrc> = {
  services: pick('services'),
  about: pick('about'),
  careers: pick('careers'),
};

/**
 * How many slides each project card carries. Raise a number and the extra
 * slots appear as placeholders straight away, waiting for their files; the
 * indicator bars divide the same width, so a longer run simply reads as
 * thinner rules.
 */
export const projectSlideCounts: Record<string, number> = {
  kringlan: 5,
  atnorth: 5,
  house: 3,
};

/** A gallery per project. Keys match the `projects` list in the i18n module. */
export const projectPhotos: Record<string, PhotoSrc[]> = Object.fromEntries(
  Object.entries(projectSlideCounts).map(([name, count]) => [name, gallery(name, count)])
);

/** How long each hero slide holds, in milliseconds. */
export const heroSlideDurationMs = 6000;
