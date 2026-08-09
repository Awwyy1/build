/**
 * Photography slots.
 *
 * Every slot is `null` until a real photograph exists. A null slot renders
 * a labelled turf-texture placeholder instead of a broken image, so the
 * layout is complete and self-documenting before the photo shoot happens.
 *
 * To fill a slot, drop the file into `public/photos/` and put the public
 * path here, e.g. '/photos/hero-vesturbaer.jpg'. Nothing else changes.
 *
 * Alt text lives in the i18n catalogue, not here — it has to be translated.
 */

export type PhotoSrc = string | null;

/** Hero slideshow. Three slides rotate; add or remove entries freely. */
export const heroSlides: readonly { id: string; src: PhotoSrc }[] = [
  { id: 'slide1', src: null },
  { id: 'slide2', src: null },
  { id: 'slide3', src: null },
];

/** One photo per section that carries one. */
export const sectionPhotos: Record<'services' | 'about' | 'careers', PhotoSrc> = {
  services: null,
  about: null,
  careers: null,
};

/** One photo per project card. Keys match the `projects` list in the i18n module. */
export const projectPhotos: Record<string, PhotoSrc> = {
  vesturbaer: null,
  akranes: null,
  hlidar: null,
};

/** How long each hero slide holds, in milliseconds. */
export const heroSlideDurationMs = 6000;
