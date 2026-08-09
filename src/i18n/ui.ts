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

/**
 * Navigation targets, in order.
 *
 * These are sections of the single page, not separate routes — the site is
 * one page for now, so linking them as pages would produce dead links.
 * Promote them to real routes once the sections outgrow the homepage.
 */
export const sections = [
  'services',
  'projects',
  'about',
  'careers',
  'contact',
] as const;
export type Section = (typeof sections)[number];

/** Service cards, in display order. */
export const services = ['restoration', 'roofs', 'masonry', 'joinery'] as const;

/** Project cards, in display order. Placeholder work until real photos exist. */
export const projects = ['vesturbaer', 'akranes', 'hlidar'] as const;

type Strings = Record<string, string>;

export const ui: Record<Locale, Strings> = {
  is: {
    'a11y.skip': 'Fara í meginmál',
    'nav.services': 'Þjónusta',
    'nav.projects': 'Verkefni',
    'nav.about': 'Um okkur',
    'nav.careers': 'Störf',
    'nav.contact': 'Hafa samband',

    'site.tagline': 'Endurgerð og viðhald í Reykjavík',

    'hero.eyebrow': 'Endurgerð og viðhald síðan 2007',
    'hero.title': 'Við gerum upp hús sem eiga að standa áfram',
    'hero.body':
      'Við komum á staðinn, skoðum og gerum tilboð. Engin yfirborðsvinna — við lögum það sem er að.',
    'hero.cta': 'Fá tilboð',
    'hero.cta2': 'Sjá verkefni',

    'services.title': 'Þjónusta',
    'service.restoration.title': 'Endurgerð',
    'service.restoration.body':
      'Gömul hús, upprunaleg efni. Við vinnum með það sem fyrir er í stað þess að rífa það burt.',
    'service.roofs.title': 'Þök',
    'service.roofs.body':
      'Þakskipti og viðgerðir á bárujárni. Við þéttum áður en vatnið finnur leiðina.',
    'service.masonry.title': 'Múrverk',
    'service.masonry.body':
      'Sprungur, múrviðgerðir og steining. Við lögum orsökina, ekki bara ummerkin.',
    'service.joinery.title': 'Tréverk',
    'service.joinery.body': 'Gluggar, hurðir og innréttingar smíðaðar eftir máli.',

    'projects.title': 'Verkefni',
    'projects.before': 'Fyrir',
    'projects.after': 'Eftir',
    'project.vesturbaer.kind': 'Endurgerð',
    'project.vesturbaer.title': 'Bárujárnshús, Vesturbær',
    'project.vesturbaer.meta': 'Byggt 1912 · Lokið 2024',
    'project.akranes.kind': 'Þök',
    'project.akranes.title': 'Þakskipti, Akranes',
    'project.akranes.meta': '320 m² · Lokið 2023',
    'project.hlidar.kind': 'Múrverk',
    'project.hlidar.title': 'Múrviðgerð, Hlíðar',
    'project.hlidar.meta': 'Fjölbýli · Lokið 2025',

    'about.title': 'Um okkur',
    'about.body':
      'Við erum lítið verktakafyrirtæki í Reykjavík. Sömu menn mæta á staðinn frá fyrstu skoðun til lokaúttektar.',

    'careers.title': 'Störf',
    'careers.body': 'Við ráðum smiði og múrara. Sendu okkur ferilskrá.',
    'careers.cta': 'Senda ferilskrá',

    'contact.title': 'Hafa samband',
    'contact.body': 'Segðu okkur frá húsinu. Við komum, skoðum og sendum tilboð.',
    'contact.phone': 'Sími',
    'contact.email': 'Netfang',
    'contact.address': 'Heimilisfang',

    'footer.kennitala': 'Kennitala',
    'footer.vsk': 'VSK-nr.',
  },

  en: {
    'a11y.skip': 'Skip to content',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.about': 'About us',
    'nav.careers': 'Careers',
    'nav.contact': 'Contact',

    'site.tagline': 'Restoration and maintenance in Reykjavík',

    'hero.eyebrow': 'Restoration and maintenance since 2007',
    'hero.title': 'We restore houses that are meant to keep standing',
    'hero.body':
      'We come out, look at the building and quote. No cosmetic work — we fix what is actually wrong.',
    'hero.cta': 'Request a quote',
    'hero.cta2': 'See projects',

    'services.title': 'Services',
    'service.restoration.title': 'Restoration',
    'service.restoration.body':
      'Old houses, original materials. We work with what is already there instead of tearing it out.',
    'service.roofs.title': 'Roofs',
    'service.roofs.body':
      'Corrugated iron replacement and repair. We seal it before the water finds its way in.',
    'service.masonry.title': 'Masonry',
    'service.masonry.body':
      'Cracks, render repair and pebbledash. We fix the cause, not just the marks it left.',
    'service.joinery.title': 'Joinery',
    'service.joinery.body': 'Windows, doors and fittings built to measure.',

    'projects.title': 'Projects',
    'projects.before': 'Before',
    'projects.after': 'After',
    'project.vesturbaer.kind': 'Restoration',
    'project.vesturbaer.title': 'Iron-clad house, Vesturbær',
    'project.vesturbaer.meta': 'Built 1912 · Completed 2024',
    'project.akranes.kind': 'Roofs',
    'project.akranes.title': 'Roof replacement, Akranes',
    'project.akranes.meta': '320 m² · Completed 2023',
    'project.hlidar.kind': 'Masonry',
    'project.hlidar.title': 'Render repair, Hlíðar',
    'project.hlidar.meta': 'Apartment block · Completed 2025',

    'about.title': 'About us',
    'about.body':
      'We are a small contractor in Reykjavík. The same people who survey the building are the ones who finish it.',

    'careers.title': 'Careers',
    'careers.body': 'We are hiring carpenters and masons. Send us your CV.',
    'careers.cta': 'Send your CV',

    'contact.title': 'Contact',
    'contact.body': 'Tell us about the building. We come out, look and send a quote.',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.address': 'Address',

    'footer.kennitala': 'Company ID',
    'footer.vsk': 'VAT no.',
  },

  pl: {
    'a11y.skip': 'Przejdź do treści',
    'nav.services': 'Usługi',
    'nav.projects': 'Realizacje',
    'nav.about': 'O nas',
    'nav.careers': 'Praca',
    'nav.contact': 'Kontakt',

    'site.tagline': 'Renowacje i remonty w Reykjavíku',

    'hero.eyebrow': 'Renowacje i remonty od 2007 roku',
    'hero.title': 'Remontujemy domy, które mają stać dalej',
    'hero.body':
      'Przyjeżdżamy, oglądamy budynek i wyceniamy. Bez prac pozornych — naprawiamy to, co faktycznie nie działa.',
    'hero.cta': 'Poproś o wycenę',
    'hero.cta2': 'Zobacz realizacje',

    'services.title': 'Usługi',
    'service.restoration.title': 'Renowacje',
    'service.restoration.body':
      'Stare domy, oryginalne materiały. Pracujemy z tym, co zastajemy, zamiast to wyrywać.',
    'service.roofs.title': 'Dachy',
    'service.roofs.body':
      'Wymiana i naprawa blachy falistej. Uszczelniamy, zanim woda znajdzie drogę.',
    'service.masonry.title': 'Murarstwo',
    'service.masonry.body':
      'Pęknięcia, naprawa tynków i wypraw. Usuwamy przyczynę, nie tylko jej ślady.',
    'service.joinery.title': 'Stolarka',
    'service.joinery.body': 'Okna, drzwi i zabudowa robione na wymiar.',

    'projects.title': 'Realizacje',
    'projects.before': 'Przed',
    'projects.after': 'Po',
    'project.vesturbaer.kind': 'Renowacja',
    'project.vesturbaer.title': 'Dom w blasze, Vesturbær',
    'project.vesturbaer.meta': 'Zbudowany 1912 · Ukończono 2024',
    'project.akranes.kind': 'Dachy',
    'project.akranes.title': 'Wymiana dachu, Akranes',
    'project.akranes.meta': '320 m² · Ukończono 2023',
    'project.hlidar.kind': 'Murarstwo',
    'project.hlidar.title': 'Naprawa tynku, Hlíðar',
    'project.hlidar.meta': 'Blok mieszkalny · Ukończono 2025',

    'about.title': 'O nas',
    'about.body':
      'Jesteśmy małą firmą budowlaną w Reykjavíku. Ci sami ludzie, którzy oglądają budynek, kończą potem robotę.',

    'careers.title': 'Praca',
    'careers.body': 'Szukamy cieśli i murarzy. Wyślij nam swoje CV.',
    'careers.cta': 'Wyślij CV',

    'contact.title': 'Kontakt',
    'contact.body': 'Opowiedz nam o budynku. Przyjedziemy, obejrzymy i wyślemy wycenę.',
    'contact.phone': 'Telefon',
    'contact.email': 'E-mail',
    'contact.address': 'Adres',

    'footer.kennitala': 'Numer firmy',
    'footer.vsk': 'Nr VAT',
  },

  lv: {
    'a11y.skip': 'Pāriet uz saturu',
    'nav.services': 'Pakalpojumi',
    'nav.projects': 'Projekti',
    'nav.about': 'Par mums',
    'nav.careers': 'Karjera',
    'nav.contact': 'Kontakti',

    'site.tagline': 'Restaurācija un remonts Reikjavīkā',

    'hero.eyebrow': 'Restaurācija un remonts kopš 2007. gada',
    'hero.title': 'Mēs atjaunojam mājas, kurām jāstāv arī turpmāk',
    'hero.body':
      'Mēs atbraucam, apskatām ēku un sagatavojam tāmi. Nekādu virspusēju darbu — labojam to, kas patiešām nav kārtībā.',
    'hero.cta': 'Pieprasīt tāmi',
    'hero.cta2': 'Skatīt projektus',

    'services.title': 'Pakalpojumi',
    'service.restoration.title': 'Restaurācija',
    'service.restoration.body':
      'Vecas mājas, oriģinālie materiāli. Strādājam ar to, kas jau ir, nevis izraujam to ārā.',
    'service.roofs.title': 'Jumti',
    'service.roofs.body':
      'Profilētā skārda nomaiņa un remonts. Noblīvējam, pirms ūdens atrod ceļu.',
    'service.masonry.title': 'Mūrēšana',
    'service.masonry.body':
      'Plaisas, apmetuma remonts un fasādes. Novēršam cēloni, nevis tikai tā pēdas.',
    'service.joinery.title': 'Kokdarbi',
    'service.joinery.body': 'Logi, durvis un iebūvējamās mēbeles pēc izmēra.',

    'projects.title': 'Projekti',
    'projects.before': 'Pirms',
    'projects.after': 'Pēc',
    'project.vesturbaer.kind': 'Restaurācija',
    'project.vesturbaer.title': 'Skārda apšuvuma māja, Vesturbær',
    'project.vesturbaer.meta': 'Būvēta 1912 · Pabeigts 2024',
    'project.akranes.kind': 'Jumti',
    'project.akranes.title': 'Jumta nomaiņa, Akranes',
    'project.akranes.meta': '320 m² · Pabeigts 2023',
    'project.hlidar.kind': 'Mūrēšana',
    'project.hlidar.title': 'Apmetuma remonts, Hlíðar',
    'project.hlidar.meta': 'Daudzdzīvokļu nams · Pabeigts 2025',

    'about.title': 'Par mums',
    'about.body':
      'Mēs esam neliels būvuzņēmums Reikjavīkā. Tie paši cilvēki, kas apseko ēku, arī pabeidz darbu.',

    'careers.title': 'Karjera',
    'careers.body': 'Meklējam namdarus un mūrniekus. Atsūti mums savu CV.',
    'careers.cta': 'Nosūtīt CV',

    'contact.title': 'Kontakti',
    'contact.body': 'Pastāsti mums par ēku. Mēs atbrauksim, apskatīsim un nosūtīsim tāmi.',
    'contact.phone': 'Tālrunis',
    'contact.email': 'E-pasts',
    'contact.address': 'Adrese',

    'footer.kennitala': 'Reģistrācijas nr.',
    'footer.vsk': 'PVN nr.',
  },
};

/** Returns a translator bound to `locale`, falling back to Icelandic. */
export function useTranslations(locale: Locale) {
  return function t(key: string): string {
    return ui[locale][key] ?? ui[defaultLocale][key] ?? key;
  };
}

/** Builds a locale-prefixed path, e.g. ('en') -> '/en/'. */
export function localePath(locale: Locale, segment = ''): string {
  return segment ? `/${locale}/${segment}/` : `/${locale}/`;
}

/** Narrows an unknown route param to a supported locale. */
export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (locales as readonly string[]).includes(value);
}
