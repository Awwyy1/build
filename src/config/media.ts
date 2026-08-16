/**
 * Photography slots.
 *
 * Slots fill themselves from the file name. Drop a photo into
 * `public/photos/` named after its slot — `about.jpg`, `vesturbaer.jpg`,
 * `hero-1.jpg` — and it appears; nothing here needs editing. A slot with no
 * matching file renders a labelled placeholder instead of a broken image.
 *
 * A descriptive prefix is allowed and ignored, so `projectPhotos.vesturbaer.jpg`
 * and `vesturbaer.jpg` both land in the same slot. Matching is on the part
 * after the last dot and is case-insensitive.
 *
 * The directory is read at build time, so a newly added photo shows up on
 * the next build — restart `npm run dev` after copying one in.
 *
 * Alt text is not here; it is translated, and lives in `src/i18n/ui.ts`.
 */
import fs from 'node:fs';
import path from 'node:path';

export type PhotoSrc = string | null;

const PHOTO_DIR = path.join(process.cwd(), 'public', 'photos');
const EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);

/** Maps slot name -> public URL, for every usable file in the directory. */
function discover(): Record<string, string> {
  const found: Record<string, string> = {};

  let entries: string[];
  try {
    entries = fs.readdirSync(PHOTO_DIR);
  } catch {
    // No directory yet: every slot simply stays empty.
    return found;
  }

  for (const entry of entries) {
    const extension = path.extname(entry).toLowerCase();
    if (!EXTENSIONS.has(extension)) continue;

    const base = entry.slice(0, entry.length - extension.length);
    // "projectPhotos.vesturbaer" -> "vesturbaer"; "hero-1" stays "hero-1".
    const slot = base.split('.').pop()!.toLowerCase();

    found[slot] = `/photos/${entry}`;
  }

  return found;
}

const discovered = discover();

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
 * A fixed-length run of slots for one project's gallery: `kringlan-1`,
 * `kringlan-2`, `kringlan-3`. The first also answers to the bare project
 * name. Empty slots stay in place as placeholders, so the number of slides
 * does not change as photographs trickle in.
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

/** How many slides each project card carries. */
export const projectSlideCount = 3;

/** A gallery per project. Keys match the `projects` list in the i18n module. */
export const projectPhotos: Record<string, PhotoSrc[]> = {
  kringlan: gallery('kringlan', projectSlideCount),
  atnorth: gallery('atnorth', projectSlideCount),
  house: gallery('house', projectSlideCount),
};

/** How long each hero slide holds, in milliseconds. */
export const heroSlideDurationMs = 6000;
