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
 * Sections of the home page, in navigation order. These are anchors, and
 * the nav links to them absolutely (`/is/#services`) so they also work
 * from Careers, which is a page of its own.
 */
export const homeSections = ['services', 'projects', 'about', 'contact'] as const;
export type HomeSection = (typeof homeSections)[number];

/** Service rows, in display order. */
export const services = ['restoration', 'roofs', 'masonry', 'joinery'] as const;

/** Project cards, in display order. */
export const projects = ['vesturbaer', 'akranes', 'hlidar'] as const;

/** Open roles listed on the Careers page. */
export const roles = ['carpenter', 'mason', 'roofer'] as const;

type Strings = Record<string, string>;

export const ui: Record<Locale, Strings> = {
  is: {
    'a11y.skip': 'Fara í meginmál',
    'a11y.menu': 'Valmynd',
    'a11y.close': 'Loka',
    'a11y.slide': 'Mynd',

    'nav.services': 'Þjónusta',
    'nav.projects': 'Verkefni',
    'nav.about': 'Um okkur',
    'nav.careers': 'Störf',
    'nav.contact': 'Hafa samband',

    'site.tagline': 'Endurgerð og viðhald í Reykjavík',
    'media.placeholder': 'Ljósmynd',

    'hero.eyebrow': 'Endurgerð og viðhald síðan 2007',
    'hero.title': 'Við gerum upp hús sem eiga að standa áfram',
    'hero.body':
      'Við komum á staðinn, skoðum og gerum tilboð. Engin yfirborðsvinna — við lögum það sem er að.',
    'hero.cta': 'Fá tilboð',
    'hero.cta2': 'Sjá verkefni',
    'hero.slide1.alt': 'Bárujárnshús í endurgerð',
    'hero.slide2.alt': 'Þakskipti í vinnslu',
    'hero.slide3.alt': 'Múrviðgerð á fjölbýli',

    'services.title': 'Þjónusta',
    'services.lead': 'Fjögur svið. Allt unnið af okkar eigin mönnum.',
    'services.photo.alt': 'Handverk á staðnum',
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
    'projects.lead': 'Þrjú nýleg verk.',
    'project.vesturbaer.kind': 'Endurgerð',
    'project.vesturbaer.title': 'Bárujárnshús, Vesturbær',
    'project.vesturbaer.meta': 'Lokið 2024',
    'project.vesturbaer.body':
      'Skiptum um bárujárn, endurnýjuðum glugga og lagfærðum burðarvirki í kjallara.',
    'project.akranes.kind': 'Þök',
    'project.akranes.title': 'Þakskipti, Akranes',
    'project.akranes.meta': 'Lokið 2023',
    'project.akranes.body': 'Nýtt þak yfir 320 m², ný rennukerfi og einangrun endurnýjuð að fullu.',
    'project.hlidar.kind': 'Múrverk',
    'project.hlidar.title': 'Múrviðgerð, Hlíðar',
    'project.hlidar.meta': 'Lokið 2025',
    'project.hlidar.body': 'Sprungur þéttar, múr endurnýjaður og fjölbýlið steinað upp á nýtt.',

    'about.title': 'Um okkur',
    'about.body':
      'Við erum lítið verktakafyrirtæki í Reykjavík. Sömu menn mæta á staðinn frá fyrstu skoðun til lokaúttektar.',
    'about.body2':
      'Við tökum að okkur færri verk en við gætum, því við klárum hvert og eitt áður en það næsta byrjar.',
    'about.photo.alt': 'Starfsfólk Bergverks',
    'about.stat1': 'Ár í rekstri',
    'about.stat2': 'Verk á ári',
    'about.stat3': 'Fastir starfsmenn',

    'careers.title': 'Störf',
    'careers.lead':
      'Bergverk er lítið verktakafyrirtæki í Reykjavík sem sérhæfir sig í endurgerð og viðhaldi eldri húsa. Við erum að stækka og leitum að fólki sem kann til verka.',
    'careers.teaser': 'Við ráðum smiði, múrara og þaksmiði.',
    'careers.photo.alt': 'Vinnuflokkur á staðnum',
    'careers.roles.title': 'Laus störf',
    'role.carpenter.title': 'Smiður',
    'role.carpenter.body':
      'Endurgerð glugga, hurða og innréttinga. Reynsla af gömlum húsum er kostur.',
    'role.mason.title': 'Múrari',
    'role.mason.body': 'Múrviðgerðir, steining og sprunguviðgerðir á eldri húsum.',
    'role.roofer.title': 'Þaksmiður',
    'role.roofer.body': 'Þakskipti og viðgerðir á bárujárni. Vinna í hæð.',
    'careers.how.title': 'Hvernig sækir þú um',
    'careers.how.body':
      'Sendu okkur ferilskrá og stutta lýsingu á því sem þú hefur unnið við. Við svörum öllum umsóknum.',
    'careers.cta': 'Senda ferilskrá',
    'careers.back': 'Til baka á forsíðu',

    'contact.title': 'Hafa samband',
    'contact.body': 'Segðu okkur frá húsinu. Við komum, skoðum og sendum tilboð.',
    'contact.phone': 'Sími',
    'contact.email': 'Netfang',
    'contact.address': 'Heimilisfang',
    'contact.hours': 'Opnunartími',
    'contact.hours.value': 'Mánudaga til föstudaga, 8–17',

    'footer.kennitala': 'Kennitala',
    'footer.vsk': 'VSK-nr.',
    'footer.rights': 'Allur réttur áskilinn',
  },

  en: {
    'a11y.skip': 'Skip to content',
    'a11y.menu': 'Menu',
    'a11y.close': 'Close',
    'a11y.slide': 'Slide',

    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.about': 'About us',
    'nav.careers': 'Careers',
    'nav.contact': 'Contact',

    'site.tagline': 'Restoration and maintenance in Reykjavík',
    'media.placeholder': 'Photograph',

    'hero.eyebrow': 'Restoration and maintenance since 2007',
    'hero.title': 'We restore houses that are meant to keep standing',
    'hero.body':
      'We come out, look at the building and quote. No cosmetic work — we fix what is actually wrong.',
    'hero.cta': 'Request a quote',
    'hero.cta2': 'See projects',
    'hero.slide1.alt': 'Iron-clad house under restoration',
    'hero.slide2.alt': 'Roof replacement in progress',
    'hero.slide3.alt': 'Render repair on an apartment block',

    'services.title': 'Services',
    'services.lead': 'Four trades. All of it done by our own people.',
    'services.photo.alt': 'Work on site',
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
    'projects.lead': 'Three recent jobs.',
    'project.vesturbaer.kind': 'Restoration',
    'project.vesturbaer.title': 'Iron-clad house, Vesturbær',
    'project.vesturbaer.meta': 'Completed 2024',
    'project.vesturbaer.body':
      'Replaced the corrugated iron, renewed the windows and repaired the structure in the basement.',
    'project.akranes.kind': 'Roofs',
    'project.akranes.title': 'Roof replacement, Akranes',
    'project.akranes.meta': 'Completed 2023',
    'project.akranes.body':
      'A new roof over 320 m², new guttering and the insulation renewed throughout.',
    'project.hlidar.kind': 'Masonry',
    'project.hlidar.title': 'Render repair, Hlíðar',
    'project.hlidar.meta': 'Completed 2025',
    'project.hlidar.body':
      'Cracks sealed, render renewed and the whole block finished in fresh pebbledash.',

    'about.title': 'About us',
    'about.body':
      'We are a small contractor in Reykjavík. The same people who survey the building are the ones who finish it.',
    'about.body2':
      'We take on fewer jobs than we could, because we finish each one before the next begins.',
    'about.photo.alt': 'The Bergverk team',
    'about.stat1': 'Years trading',
    'about.stat2': 'Jobs a year',
    'about.stat3': 'People on staff',

    'careers.title': 'Careers',
    'careers.lead':
      'Bergverk is a small contractor in Reykjavík specialising in the restoration and upkeep of older buildings. We are growing and looking for people who know the work.',
    'careers.teaser': 'We are hiring carpenters, masons and roofers.',
    'careers.photo.alt': 'A crew on site',
    'careers.roles.title': 'Open roles',
    'role.carpenter.title': 'Carpenter',
    'role.carpenter.body':
      'Restoring windows, doors and fittings. Experience with old buildings is an advantage.',
    'role.mason.title': 'Mason',
    'role.mason.body': 'Render repair, pebbledash and crack work on older buildings.',
    'role.roofer.title': 'Roofer',
    'role.roofer.body': 'Corrugated iron replacement and repair. Work at height.',
    'careers.how.title': 'How to apply',
    'careers.how.body':
      'Send us your CV and a short note on what you have worked on. We reply to every application.',
    'careers.cta': 'Send your CV',
    'careers.back': 'Back to the home page',

    'contact.title': 'Contact',
    'contact.body': 'Tell us about the building. We come out, look and send a quote.',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.address': 'Address',
    'contact.hours': 'Opening hours',
    'contact.hours.value': 'Monday to Friday, 8–17',

    'footer.kennitala': 'Company ID',
    'footer.vsk': 'VAT no.',
    'footer.rights': 'All rights reserved',
  },

  pl: {
    'a11y.skip': 'Przejdź do treści',
    'a11y.menu': 'Menu',
    'a11y.close': 'Zamknij',
    'a11y.slide': 'Zdjęcie',

    'nav.services': 'Usługi',
    'nav.projects': 'Realizacje',
    'nav.about': 'O nas',
    'nav.careers': 'Praca',
    'nav.contact': 'Kontakt',

    'site.tagline': 'Renowacje i remonty w Reykjavíku',
    'media.placeholder': 'Zdjęcie',

    'hero.eyebrow': 'Renowacje i remonty od 2007 roku',
    'hero.title': 'Remontujemy domy, które mają stać dalej',
    'hero.body':
      'Przyjeżdżamy, oglądamy budynek i wyceniamy. Bez prac pozornych — naprawiamy to, co faktycznie nie działa.',
    'hero.cta': 'Poproś o wycenę',
    'hero.cta2': 'Zobacz realizacje',
    'hero.slide1.alt': 'Dom w blasze w trakcie renowacji',
    'hero.slide2.alt': 'Wymiana dachu w toku',
    'hero.slide3.alt': 'Naprawa tynku na bloku mieszkalnym',

    'services.title': 'Usługi',
    'services.lead': 'Cztery specjalności. Wszystko robią nasi ludzie.',
    'services.photo.alt': 'Praca na budowie',
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
    'projects.lead': 'Trzy ostatnie roboty.',
    'project.vesturbaer.kind': 'Renowacja',
    'project.vesturbaer.title': 'Dom w blasze, Vesturbær',
    'project.vesturbaer.meta': 'Ukończono 2024',
    'project.vesturbaer.body':
      'Wymieniliśmy blachę falistą, odnowiliśmy okna i naprawiliśmy konstrukcję w piwnicy.',
    'project.akranes.kind': 'Dachy',
    'project.akranes.title': 'Wymiana dachu, Akranes',
    'project.akranes.meta': 'Ukończono 2023',
    'project.akranes.body': 'Nowy dach o powierzchni 320 m², nowe rynny i pełna wymiana izolacji.',
    'project.hlidar.kind': 'Murarstwo',
    'project.hlidar.title': 'Naprawa tynku, Hlíðar',
    'project.hlidar.meta': 'Ukończono 2025',
    'project.hlidar.body':
      'Uszczelnione pęknięcia, odnowiony tynk i cały blok wykończony nową wyprawą.',

    'about.title': 'O nas',
    'about.body':
      'Jesteśmy małą firmą budowlaną w Reykjavíku. Ci sami ludzie, którzy oglądają budynek, kończą potem robotę.',
    'about.body2':
      'Bierzemy mniej zleceń, niż moglibyśmy, bo każde kończymy, zanim zaczniemy następne.',
    'about.photo.alt': 'Zespół Bergverk',
    'about.stat1': 'Lat na rynku',
    'about.stat2': 'Realizacji rocznie',
    'about.stat3': 'Osób na etacie',

    'careers.title': 'Praca',
    'careers.lead':
      'Bergverk to mała firma budowlana w Reykjavíku, specjalizująca się w renowacji i utrzymaniu starszych budynków. Rozwijamy się i szukamy ludzi, którzy znają fach.',
    'careers.teaser': 'Szukamy cieśli, murarzy i dekarzy.',
    'careers.photo.alt': 'Ekipa na budowie',
    'careers.roles.title': 'Otwarte stanowiska',
    'role.carpenter.title': 'Cieśla',
    'role.carpenter.body': 'Renowacja okien, drzwi i zabudowy. Doświadczenie ze starymi domami mile widziane.',
    'role.mason.title': 'Murarz',
    'role.mason.body': 'Naprawa tynków, wyprawy i pęknięć w starszych budynkach.',
    'role.roofer.title': 'Dekarz',
    'role.roofer.body': 'Wymiana i naprawa blachy falistej. Praca na wysokości.',
    'careers.how.title': 'Jak aplikować',
    'careers.how.body':
      'Wyślij nam CV i krótko napisz, przy czym pracowałeś. Odpowiadamy na każde zgłoszenie.',
    'careers.cta': 'Wyślij CV',
    'careers.back': 'Powrót na stronę główną',

    'contact.title': 'Kontakt',
    'contact.body': 'Opowiedz nam o budynku. Przyjedziemy, obejrzymy i wyślemy wycenę.',
    'contact.phone': 'Telefon',
    'contact.email': 'E-mail',
    'contact.address': 'Adres',
    'contact.hours': 'Godziny otwarcia',
    'contact.hours.value': 'Poniedziałek–piątek, 8–17',

    'footer.kennitala': 'Numer firmy',
    'footer.vsk': 'Nr VAT',
    'footer.rights': 'Wszelkie prawa zastrzeżone',
  },

  lv: {
    'a11y.skip': 'Pāriet uz saturu',
    'a11y.menu': 'Izvēlne',
    'a11y.close': 'Aizvērt',
    'a11y.slide': 'Attēls',

    'nav.services': 'Pakalpojumi',
    'nav.projects': 'Projekti',
    'nav.about': 'Par mums',
    'nav.careers': 'Karjera',
    'nav.contact': 'Kontakti',

    'site.tagline': 'Restaurācija un remonts Reikjavīkā',
    'media.placeholder': 'Fotogrāfija',

    'hero.eyebrow': 'Restaurācija un remonts kopš 2007. gada',
    'hero.title': 'Mēs atjaunojam mājas, kurām jāstāv arī turpmāk',
    'hero.body':
      'Mēs atbraucam, apskatām ēku un sagatavojam tāmi. Nekādu virspusēju darbu — labojam to, kas patiešām nav kārtībā.',
    'hero.cta': 'Pieprasīt tāmi',
    'hero.cta2': 'Skatīt projektus',
    'hero.slide1.alt': 'Skārda apšuvuma māja restaurācijā',
    'hero.slide2.alt': 'Jumta nomaiņa procesā',
    'hero.slide3.alt': 'Apmetuma remonts daudzdzīvokļu namā',

    'services.title': 'Pakalpojumi',
    'services.lead': 'Četri virzieni. Visu dara mūsu pašu cilvēki.',
    'services.photo.alt': 'Darbs objektā',
    'service.restoration.title': 'Restaurācija',
    'service.restoration.body':
      'Vecas mājas, oriģinālie materiāli. Strādājam ar to, kas jau ir, nevis izraujam to ārā.',
    'service.roofs.title': 'Jumti',
    'service.roofs.body': 'Profilētā skārda nomaiņa un remonts. Noblīvējam, pirms ūdens atrod ceļu.',
    'service.masonry.title': 'Mūrēšana',
    'service.masonry.body':
      'Plaisas, apmetuma remonts un fasādes. Novēršam cēloni, nevis tikai tā pēdas.',
    'service.joinery.title': 'Kokdarbi',
    'service.joinery.body': 'Logi, durvis un iebūvējamās mēbeles pēc izmēra.',

    'projects.title': 'Projekti',
    'projects.lead': 'Trīs nesenie darbi.',
    'project.vesturbaer.kind': 'Restaurācija',
    'project.vesturbaer.title': 'Skārda apšuvuma māja, Vesturbær',
    'project.vesturbaer.meta': 'Pabeigts 2024',
    'project.vesturbaer.body':
      'Nomainījām profilēto skārdu, atjaunojām logus un salabojām nesošās konstrukcijas pagrabā.',
    'project.akranes.kind': 'Jumti',
    'project.akranes.title': 'Jumta nomaiņa, Akranes',
    'project.akranes.meta': 'Pabeigts 2023',
    'project.akranes.body': 'Jauns jumts 320 m² platībā, jaunas notekas un pilnībā atjaunota izolācija.',
    'project.hlidar.kind': 'Mūrēšana',
    'project.hlidar.title': 'Apmetuma remonts, Hlíðar',
    'project.hlidar.meta': 'Pabeigts 2025',
    'project.hlidar.body':
      'Noblīvētas plaisas, atjaunots apmetums un visa ēka no jauna apstrādāta ar fasādes segumu.',

    'about.title': 'Par mums',
    'about.body':
      'Mēs esam neliels būvuzņēmums Reikjavīkā. Tie paši cilvēki, kas apseko ēku, arī pabeidz darbu.',
    'about.body2':
      'Mēs uzņemamies mazāk darbu, nekā varētu, jo katru pabeidzam, pirms sākas nākamais.',
    'about.photo.alt': 'Bergverk komanda',
    'about.stat1': 'Gadi darbībā',
    'about.stat2': 'Objekti gadā',
    'about.stat3': 'Pastāvīgie darbinieki',

    'careers.title': 'Karjera',
    'careers.lead':
      'Bergverk ir neliels būvuzņēmums Reikjavīkā, kas specializējas vecāku ēku restaurācijā un uzturēšanā. Mēs augam un meklējam cilvēkus, kas prot savu darbu.',
    'careers.teaser': 'Meklējam namdarus, mūrniekus un jumiķus.',
    'careers.photo.alt': 'Brigāde objektā',
    'careers.roles.title': 'Vakances',
    'role.carpenter.title': 'Namdaris',
    'role.carpenter.body': 'Logu, durvju un iebūvējamo mēbeļu atjaunošana. Pieredze ar vecām ēkām ir priekšrocība.',
    'role.mason.title': 'Mūrnieks',
    'role.mason.body': 'Apmetuma remonts, fasādes un plaisu darbi vecākās ēkās.',
    'role.roofer.title': 'Jumiķis',
    'role.roofer.body': 'Profilētā skārda nomaiņa un remonts. Darbs augstumā.',
    'careers.how.title': 'Kā pieteikties',
    'careers.how.body':
      'Atsūti mums savu CV un īsu aprakstu par to, ar ko esi strādājis. Mēs atbildam uz katru pieteikumu.',
    'careers.cta': 'Nosūtīt CV',
    'careers.back': 'Atpakaļ uz sākumlapu',

    'contact.title': 'Kontakti',
    'contact.body': 'Pastāsti mums par ēku. Mēs atbrauksim, apskatīsim un nosūtīsim tāmi.',
    'contact.phone': 'Tālrunis',
    'contact.email': 'E-pasts',
    'contact.address': 'Adrese',
    'contact.hours': 'Darba laiks',
    'contact.hours.value': 'Pirmdiena–piektdiena, 8–17',

    'footer.kennitala': 'Reģistrācijas nr.',
    'footer.vsk': 'PVN nr.',
    'footer.rights': 'Visas tiesības aizsargātas',
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
