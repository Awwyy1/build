/**
 * Locale registry and UI strings.
 *
 * Icelandic is the source language: when a string is missing from another
 * locale, `t()` falls back to Icelandic rather than rendering a blank.
 */

export const locales = ['is', 'en', 'pl', 'lv'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'is';

/** Native language names, used by the language switcher. */
export const localeNames: Record<Locale, string> = {
  is: 'Íslenska',
  en: 'English',
  pl: 'Polski',
  lv: 'Latviešu',
};

/** Route segments shared by every locale, in navigation order. */
export const routes = [
  'services',
  'projects',
  'about',
  'careers',
  'news',
  'contact',
] as const;
export type Route = (typeof routes)[number];

type Strings = Record<string, string>;

export const ui: Record<Locale, Strings> = {
  is: {
    'nav.services': 'Þjónusta',
    'nav.projects': 'Verkefni',
    'nav.about': 'Um okkur',
    'nav.careers': 'Störf',
    'nav.news': 'Fréttir',
    'nav.contact': 'Hafa samband',
    'site.tagline': 'Verktaki á höfuðborgarsvæðinu',
    'wip.title': 'Vefurinn er í smíðum',
    'wip.body': 'Uppbygging stendur yfir. Hafðu samband á meðan.',
  },
  en: {
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.about': 'About us',
    'nav.careers': 'Careers',
    'nav.news': 'News',
    'nav.contact': 'Contact',
    'site.tagline': 'Building contractor in the capital region',
    'wip.title': 'Site under construction',
    'wip.body': 'We are still building this. Get in touch in the meantime.',
  },
  pl: {
    'nav.services': 'Usługi',
    'nav.projects': 'Realizacje',
    'nav.about': 'O nas',
    'nav.careers': 'Praca',
    'nav.news': 'Aktualności',
    'nav.contact': 'Kontakt',
    'site.tagline': 'Firma budowlana w regionie stołecznym',
    'wip.title': 'Strona w budowie',
    'wip.body': 'Pracujemy nad nią. W międzyczasie prosimy o kontakt.',
  },
  lv: {
    'nav.services': 'Pakalpojumi',
    'nav.projects': 'Projekti',
    'nav.about': 'Par mums',
    'nav.careers': 'Karjera',
    'nav.news': 'Jaunumi',
    'nav.contact': 'Kontakti',
    'site.tagline': 'Būvuzņēmums galvaspilsētas reģionā',
    'wip.title': 'Vietne tiek veidota',
    'wip.body': 'Mēs pie tās strādājam. Pa to laiku sazinieties ar mums.',
  },
};

/** Returns a translator bound to `locale`, falling back to Icelandic. */
export function useTranslations(locale: Locale) {
  return function t(key: string): string {
    return ui[locale][key] ?? ui[defaultLocale][key] ?? key;
  };
}

/** Builds a locale-prefixed path, e.g. ('en', 'careers') -> '/en/careers/'. */
export function localePath(locale: Locale, segment = ''): string {
  return segment ? `/${locale}/${segment}/` : `/${locale}/`;
}

/** Narrows an unknown route param to a supported locale. */
export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (locales as readonly string[]).includes(value);
}
