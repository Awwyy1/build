/**
 * Locale registry and UI strings.
 *
 * Icelandic is the source language: when a string is missing from another
 * locale, `t()` falls back to Icelandic rather than rendering a blank.
 *
 * House style: no dashes in running copy. Where a dash would normally join
 * two thoughts, the sentence is split or rebuilt instead.
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
 * from the Careers page. Careers sits before Contact so that contact
 * details, and then the footer, close the page.
 */
export const homeSections = ['services', 'projects', 'about', 'careers', 'contact'] as const;
export type HomeSection = (typeof homeSections)[number];

/** Service rows, in display order. */
export const services = ['roofs', 'cladding', 'fitout', 'general'] as const;

/** Project cards, in display order. */
export const projects = ['kringlan', 'atnorth', 'house'] as const;

/** Open roles listed on the Careers page. */
export const roles = ['roofer', 'cladder', 'carpenter'] as const;

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

    'site.tagline': 'Verktakafyrirtæki í Reykjavík',
    'media.placeholder': 'Ljósmynd',

    'hero.eyebrow': 'Frá gagnaverum að einbýlishúsum',
    'hero.title': 'Þök á verslunarmiðstöðvar, veggir í gagnaver',
    'hero.body':
      'Við erum verktakafyrirtæki í Reykjavík. Við tökum að okkur stór verk, vinnum þau vel og skilum á þröngum tíma. Sömu flokkar skipta um þak á húsinu þínu.',
    'hero.cta': 'Fá tilboð',
    'hero.cta2': 'Sjá verkefni',
    'hero.slide1.alt': 'Þakskipti í Kringlunni',
    'hero.slide2.alt': 'Uppsetning eininga í gagnaveri',
    'hero.slide3.alt': 'Vinnuflokkur á staðnum',

    'services.title': 'Þjónusta',
    'services.lead': 'Fjögur svið sem við vinnum mest í. Listinn er ekki takmörkun. Spurðu okkur.',
    'services.photo.alt': 'Vinna á staðnum',
    'service.roofs.title': 'Þök',
    'service.roofs.body':
      'Heildarskipti á þakklæðningu á verslunarmiðstöðvum, fjölbýli og einbýlishúsum. Gamla efnið af, nýtt á, þétt áður en við förum.',
    'service.cladding.title': 'Klæðningar og einingar',
    'service.cladding.body':
      'Samlokueiningar á iðnaðarhús og gagnaver. Þétt, rétt og á áætlun.',
    'service.fitout.title': 'Milliveggir og innréttingar',
    'service.fitout.body':
      'Innveggir, milliveggir og frágangur. Þetta er hlutinn sem flestir verktakar senda áfram. Við höldum honum hjá okkur.',
    'service.general.title': 'Hús og almenn verktaka',
    'service.general.body':
      'Sökklar, steypuvinna, viðbyggingar, viðgerðir og tréverk. Ef þetta er byggingarvinna, spurðu okkur.',

    'projects.title': 'Verkefni',
    'projects.lead': 'Það sem við erum í núna.',
    'project.kringlan.kind': 'Þök',
    'project.kringlan.title': 'Kringlan verslunarmiðstöð, Reykjavík',
    'project.kringlan.status': 'Í vinnslu',
    'project.kringlan.body':
      'Heildarendurnýjun þakklæðningar: eldra þakefni rifið af og nýtt lagt í staðinn, á miðstöð sem er opin á meðan.',
    'project.atnorth.kind': 'Iðnaðarbygging',
    'project.atnorth.title': 'atNorth Mega Data Center, Keflavík',
    'project.atnorth.status': 'Í vinnslu',
    'project.atnorth.body':
      'Uppsetning samlokueininga, milliveggir og önnur verk á byggingarstað.',
    'project.house.kind': 'Einbýlishús',
    'project.house.title': 'Steypt plata við einbýlishús',
    'project.house.status': 'Lokið',
    'project.house.body':
      'Uppsláttur móta, járnabinding, lagnir fyrir snjóbræðslu og steypa á plötu við einbýlishús.',

    'about.title': 'Um okkur',
    'about.body':
      'Bergverk er ungt og framsækið byggingarfyrirtæki með rúmlega tuttugu starfsmenn. Við tökum að okkur allar tegundir byggingarvinnu.',
    'about.body2':
      'Þeir sem verðleggja verkið vinna sjálfir í því. Þess vegna getum við ábyrgst bæði nákvæmni tilboðsins og tæknilegt eftirlit með framkvæmdinni.',
    'about.photo.alt': 'Vinnuflokkur Bergverks',
    'about.stat1': 'Starfsmenn',
    'about.stat2': 'Verk unnin',

    'careers.title': 'Störf',
    'careers.lead':
      'Við erum að stækka hratt og ráðum til okkar. Bergverk vinnur á verslunarmiðstöðvum, í gagnaverum og við einbýlishús á höfuðborgarsvæðinu. Okkur vantar fólk sem gengur í verkin án þess að staðið sé yfir því.',
    'careers.teaser': 'Við ráðum þaksmiði, einingamenn og smiði.',
    'careers.more': 'Sjá laus störf',
    'careers.photo.alt': 'Vinnuflokkur á staðnum',
    'careers.roles.title': 'Laus störf',
    'role.roofer.title': 'Þaksmiður',
    'role.roofer.body':
      'Niðurrif þaka og ný klæðning á stórum atvinnuþökum. Vinna í hæð, í öllum veðrum.',
    'role.cladder.title': 'Einingamaður',
    'role.cladder.body':
      'Samlokueiningar og klæðningar á iðnaðarsvæðum. Bæði nákvæmni og hraði skipta máli.',
    'role.carpenter.title': 'Smiður',
    'role.carpenter.body':
      'Milliveggir, innréttingar og almenn byggingarvinna, bæði á atvinnuhúsnæði og einbýlishúsum.',
    'careers.how.title': 'Hvernig sækir þú um',
    'careers.how.body':
      'Sendu okkur ferilskrá og stutta lýsingu á því sem þú hefur unnið við. Við lesum allt og svörum.',
    'careers.cta': 'Senda ferilskrá',
    'careers.back': 'Til baka á forsíðu',

    'contact.title': 'Hafa samband',
    'contact.body':
      'Segðu okkur frá verkinu. Við komum á staðinn, skoðum aðstæður og höfum samband með næstu skref.',
    'contact.phone': 'Sími',
    'contact.email': 'Netfang',
    'contact.address': 'Heimilisfang',
    'contact.hours': 'Opnunartími',
    'contact.hours.value': 'Mánudaga til föstudaga, 8 til 17',

    'footer.kennitala': 'Kennitala',
    'footer.rights': 'Allur réttur áskilinn',

    'cookies.text':
      'Veldu „Samþykkja allt“ til að samþykkja notkun okkar á vefkökum og sambærilegri tækni til að bæta upplifun þína, öryggi, greiningar og sérstillingar. Veldu „Stjórna vefkökum“ til að velja nánar eða hafna.',
    'cookies.accept': 'Samþykkja allt',
    'cookies.decline': 'Hafna öllu',
    'cookies.manage': 'Stjórna vefkökum',
    'cookies.settings': 'Stillingar vefkaka',
    'cookies.necessary.title': 'Nauðsynlegar',
    'cookies.necessary.body': 'Þarf til að vefurinn virki. Ekki er hægt að slökkva á þeim.',
    'cookies.analytics.title': 'Greiningar',
    'cookies.analytics.body': 'Hjálpa okkur að sjá hvernig vefurinn er notaður.',
    'cookies.marketing.title': 'Markaðssetning',
    'cookies.marketing.body': 'Notaðar til að birta efni sem á betur við þig.',
    'cookies.always': 'Alltaf virkt',
    'cookies.save': 'Vista val',
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

    'site.tagline': 'Building contractor in Reykjavík',
    'media.placeholder': 'Photograph',

    'hero.eyebrow': 'From data centres to private homes',
    'hero.title': 'Roofs on shopping centres, walls in data centres',
    'hero.body':
      'We are a Reykjavík contractor. We take on large volumes of work, build them properly and deliver to tight deadlines. The same crews will re-roof your house.',
    'hero.cta': 'Request a quote',
    'hero.cta2': 'See projects',
    'hero.slide1.alt': 'Roof replacement at Kringlan',
    'hero.slide2.alt': 'Panel installation at a data centre',
    'hero.slide3.alt': 'A crew on site',

    'services.title': 'Services',
    'services.lead': 'The four things we do most. The list is not a limit. Ask us.',
    'services.photo.alt': 'Work on site',
    'service.roofs.title': 'Roofing',
    'service.roofs.body':
      'Full roof replacement on shopping centres, apartment blocks and houses. Old covering off, new one on, watertight before we leave.',
    'service.cladding.title': 'Cladding and panels',
    'service.cladding.body':
      'Sandwich panel envelopes for industrial buildings and data centres. Sealed, square and to programme.',
    'service.fitout.title': 'Partitions and fit-out',
    'service.fitout.body':
      'Internal walls, partitions and finishing. This is the part most contractors hand to somebody else. We keep it in-house.',
    'service.general.title': 'Houses and general building',
    'service.general.body':
      'Foundations, concrete work, extensions, repairs and joinery. If it is building work, ask us.',

    'projects.title': 'Projects',
    'projects.lead': 'What we are on right now.',
    'project.kringlan.kind': 'Roofing',
    'project.kringlan.title': 'Kringlan shopping centre, Reykjavík',
    'project.kringlan.status': 'In progress',
    'project.kringlan.body':
      'Full replacement of the roof covering: the old covering stripped off and a new one laid, over a centre that stays open throughout.',
    'project.atnorth.kind': 'Industrial build',
    'project.atnorth.title': 'atNorth Mega Data Center, Keflavík',
    'project.atnorth.status': 'In progress',
    'project.atnorth.body':
      'Sandwich panel installation, internal partitions and further works on site.',
    'project.house.kind': 'Private home',
    'project.house.title': 'Concrete slab at a private house',
    'project.house.status': 'Completed',
    'project.house.body':
      'Formwork, reinforcement mesh, snow melting pipework and the concrete pour for a slab at a private house.',

    'about.title': 'About us',
    'about.body':
      'Bergverk is a young, forward-looking construction company with more than twenty people on staff. We carry out every kind of construction work.',
    'about.body2':
      'The people who price a job are the people who work on it. That is why we can stand behind both the accuracy of our estimates and the technical supervision on site.',
    'about.photo.alt': 'The Bergverk crew',
    'about.stat1': 'People on staff',
    'about.stat2': 'Projects delivered',

    'careers.title': 'Careers',
    'careers.lead':
      'We are growing fast and hiring. Bergverk works on shopping centres, data centres and private houses around Reykjavík. We need people who get on with the work without being watched.',
    'careers.teaser': 'We are hiring roofers, panel fitters and carpenters.',
    'careers.more': 'See open roles',
    'careers.photo.alt': 'A crew on site',
    'careers.roles.title': 'Open roles',
    'role.roofer.title': 'Roofer',
    'role.roofer.body':
      'Strip-out and new coverings on large commercial roofs. Work at height, in all weather.',
    'role.cladder.title': 'Panel fitter',
    'role.cladder.body':
      'Sandwich panel envelopes and cladding on industrial sites. Precision and pace both matter.',
    'role.carpenter.title': 'Carpenter',
    'role.carpenter.body':
      'Partitions, fit-out and general building, on commercial sites and private houses alike.',
    'careers.how.title': 'How to apply',
    'careers.how.body':
      'Send us your CV and a short note on what you have worked on. We read everything and we reply.',
    'careers.cta': 'Send your CV',
    'careers.back': 'Back to the home page',

    'contact.title': 'Contact',
    'contact.body':
      'Tell us about the project. We come out, look at the site and get back to you with the next steps.',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.address': 'Address',
    'contact.hours': 'Opening hours',
    'contact.hours.value': 'Monday to Friday, 8 to 17',

    'footer.kennitala': 'Company ID',
    'footer.rights': 'All rights reserved',

    'cookies.text':
      'Select "Accept all" to agree to our use of cookies and similar technologies to enhance your browsing experience, security, analytics and customization. Select "Manage cookies" to make more choices or opt out.',
    'cookies.accept': 'Accept all',
    'cookies.decline': 'Decline all',
    'cookies.manage': 'Manage cookies',
    'cookies.settings': 'Cookie settings',
    'cookies.necessary.title': 'Necessary',
    'cookies.necessary.body': 'Required for the site to work. These cannot be turned off.',
    'cookies.analytics.title': 'Analytics',
    'cookies.analytics.body': 'Help us see how the site is used.',
    'cookies.marketing.title': 'Marketing',
    'cookies.marketing.body': 'Used to show content that is more relevant to you.',
    'cookies.always': 'Always on',
    'cookies.save': 'Save choices',
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

    'site.tagline': 'Firma budowlana w Reykjavíku',
    'media.placeholder': 'Zdjęcie',

    'hero.eyebrow': 'Od centrów danych po domy prywatne',
    'hero.title': 'Dachy na centrach handlowych, ściany w centrach danych',
    'hero.body':
      'Jesteśmy firmą budowlaną z Reykjavíku. Bierzemy duże zakresy prac, wykonujemy je solidnie i oddajemy w krótkich terminach. Te same ekipy wymienią dach w Twoim domu.',
    'hero.cta': 'Poproś o wycenę',
    'hero.cta2': 'Zobacz realizacje',
    'hero.slide1.alt': 'Wymiana dachu w Kringlan',
    'hero.slide2.alt': 'Montaż płyt w centrum danych',
    'hero.slide3.alt': 'Ekipa na budowie',

    'services.title': 'Usługi',
    'services.lead': 'Cztery rzeczy, które robimy najczęściej. Ta lista nie jest granicą. Pytaj.',
    'services.photo.alt': 'Praca na budowie',
    'service.roofs.title': 'Dachy',
    'service.roofs.body':
      'Pełna wymiana pokrycia dachowego na centrach handlowych, blokach i domach. Stare zdejmujemy, nowe kładziemy, szczelnie, zanim zejdziemy z budowy.',
    'service.cladding.title': 'Okładziny i płyty warstwowe',
    'service.cladding.body':
      'Obudowy z płyt warstwowych dla obiektów przemysłowych i centrów danych. Szczelnie, równo i w terminie.',
    'service.fitout.title': 'Ścianki działowe i wykończenia',
    'service.fitout.body':
      'Ściany wewnętrzne, ścianki działowe i wykończenia. To część, którą większość firm oddaje podwykonawcom. My robimy ją sami.',
    'service.general.title': 'Domy i prace ogólnobudowlane',
    'service.general.body':
      'Fundamenty, betony, rozbudowy, remonty i stolarka. Jeśli to prace budowlane, pytaj.',

    'projects.title': 'Realizacje',
    'projects.lead': 'Nad czym pracujemy teraz.',
    'project.kringlan.kind': 'Dachy',
    'project.kringlan.title': 'Centrum handlowe Kringlan, Reykjavík',
    'project.kringlan.status': 'W trakcie',
    'project.kringlan.body':
      'Pełna wymiana pokrycia dachowego: demontaż starego pokrycia i montaż nowego, na obiekcie czynnym przez cały czas prac.',
    'project.atnorth.kind': 'Budownictwo przemysłowe',
    'project.atnorth.title': 'atNorth Mega Data Center, Keflavík',
    'project.atnorth.status': 'W trakcie',
    'project.atnorth.body':
      'Montaż płyt warstwowych, ścianek działowych i pozostałe prace na obiekcie.',
    'project.house.kind': 'Dom prywatny',
    'project.house.title': 'Płyta betonowa przy domu prywatnym',
    'project.house.status': 'Ukończono',
    'project.house.body':
      'Montaż szalunków, zbrojenie, instalacja ogrzewania przeciwoblodzeniowego i wylanie betonu przy domu prywatnym.',

    'about.title': 'O nas',
    'about.body':
      'Bergverk to młoda, nowoczesna firma budowlana zatrudniająca ponad dwadzieścia osób. Wykonujemy wszystkie rodzaje prac budowlanych.',
    'about.body2':
      'Wyceny przygotowują ci, którzy potem pracują na budowie. Dlatego możemy ręczyć zarówno za dokładność kosztorysu, jak i za nadzór techniczny nad realizacją.',
    'about.photo.alt': 'Ekipa Bergverk',
    'about.stat1': 'Osób w firmie',
    'about.stat2': 'Zrealizowanych obiektów',

    'careers.title': 'Praca',
    'careers.lead':
      'Szybko rośniemy i rekrutujemy. Bergverk pracuje na centrach handlowych, w centrach danych i przy domach prywatnych w rejonie Reykjavíku. Szukamy ludzi, którzy robią swoje bez pilnowania.',
    'careers.teaser': 'Szukamy dekarzy, monterów płyt i cieśli.',
    'careers.more': 'Zobacz oferty pracy',
    'careers.photo.alt': 'Ekipa na budowie',
    'careers.roles.title': 'Otwarte stanowiska',
    'role.roofer.title': 'Dekarz',
    'role.roofer.body':
      'Demontaż i montaż pokryć na dużych dachach komercyjnych. Praca na wysokości, w każdą pogodę.',
    'role.cladder.title': 'Monter płyt warstwowych',
    'role.cladder.body':
      'Obudowy z płyt warstwowych i okładziny na obiektach przemysłowych. Liczy się precyzja i tempo.',
    'role.carpenter.title': 'Cieśla',
    'role.carpenter.body':
      'Ścianki działowe, wykończenia i prace ogólnobudowlane, na obiektach i w domach.',
    'careers.how.title': 'Jak aplikować',
    'careers.how.body':
      'Wyślij nam CV i krótko napisz, przy czym pracowałeś. Czytamy wszystko i odpowiadamy.',
    'careers.cta': 'Wyślij CV',
    'careers.back': 'Powrót na stronę główną',

    'contact.title': 'Kontakt',
    'contact.body':
      'Opowiedz nam o projekcie. Przyjedziemy, obejrzymy obiekt i wrócimy do Ciebie z kolejnymi krokami.',
    'contact.phone': 'Telefon',
    'contact.email': 'E-mail',
    'contact.address': 'Adres',
    'contact.hours': 'Godziny otwarcia',
    'contact.hours.value': 'Od poniedziałku do piątku, 8 do 17',

    'footer.kennitala': 'Numer firmy',
    'footer.rights': 'Wszelkie prawa zastrzeżone',

    'cookies.text':
      'Wybierz „Akceptuj wszystkie”, aby zgodzić się na używanie przez nas plików cookie i podobnych technologii w celu poprawy komfortu przeglądania, bezpieczeństwa, analityki i personalizacji. Wybierz „Zarządzaj plikami cookie”, aby dokonać innych wyborów lub zrezygnować.',
    'cookies.accept': 'Akceptuj wszystkie',
    'cookies.decline': 'Odrzuć wszystkie',
    'cookies.manage': 'Zarządzaj plikami cookie',
    'cookies.settings': 'Ustawienia plików cookie',
    'cookies.necessary.title': 'Niezbędne',
    'cookies.necessary.body': 'Wymagane do działania strony. Nie można ich wyłączyć.',
    'cookies.analytics.title': 'Analityka',
    'cookies.analytics.body': 'Pomagają nam zobaczyć, jak korzystasz ze strony.',
    'cookies.marketing.title': 'Marketing',
    'cookies.marketing.body': 'Służą do pokazywania treści lepiej dopasowanych do Ciebie.',
    'cookies.always': 'Zawsze aktywne',
    'cookies.save': 'Zapisz wybór',
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

    'site.tagline': 'Būvuzņēmums Reikjavīkā',
    'media.placeholder': 'Fotogrāfija',

    'hero.eyebrow': 'No datu centriem līdz privātmājām',
    'hero.title': 'Jumti tirdzniecības centriem, sienas datu centriem',
    'hero.body':
      'Mēs esam būvuzņēmums Reikjavīkā. Uzņemamies lielus darba apjomus, izpildām tos kvalitatīvi un nododam saspringtos termiņos. Tās pašas brigādes nomainīs jumtu tavai mājai.',
    'hero.cta': 'Pieprasīt tāmi',
    'hero.cta2': 'Skatīt projektus',
    'hero.slide1.alt': 'Jumta nomaiņa Kringlan',
    'hero.slide2.alt': 'Paneļu montāža datu centrā',
    'hero.slide3.alt': 'Brigāde objektā',

    'services.title': 'Pakalpojumi',
    'services.lead': 'Četri virzieni, ko darām visbiežāk. Saraksts nav robeža. Jautā mums.',
    'services.photo.alt': 'Darbs objektā',
    'service.roofs.title': 'Jumti',
    'service.roofs.body':
      'Pilnīga jumta seguma nomaiņa tirdzniecības centriem, daudzdzīvokļu namiem un privātmājām. Veco nost, jauno virsū, hermētiski, pirms aizejam.',
    'service.cladding.title': 'Apšuvumi un paneļi',
    'service.cladding.body':
      'Sendviča paneļu apvalki rūpnieciskām ēkām un datu centriem. Hermētiski, precīzi un laikā.',
    'service.fitout.title': 'Starpsienas un iekšdarbi',
    'service.fitout.body':
      'Iekšējās sienas, starpsienas un apdare. Šo daļu lielākā daļa uzņēmumu nodod apakšuzņēmējiem. Mēs to paturam pie sevis.',
    'service.general.title': 'Mājas un vispārējie būvdarbi',
    'service.general.body':
      'Pamati, betona darbi, piebūves, remonti un kokdarbi. Ja tie ir būvdarbi, jautā mums.',

    'projects.title': 'Projekti',
    'projects.lead': 'Pie kā strādājam šobrīd.',
    'project.kringlan.kind': 'Jumti',
    'project.kringlan.title': 'Tirdzniecības centrs Kringlan, Reikjavīkā',
    'project.kringlan.status': 'Procesā',
    'project.kringlan.body':
      'Pilnīga jumta seguma nomaiņa: vecais segums demontēts un ieklāts jauns, objektā, kas visu laiku paliek atvērts.',
    'project.atnorth.kind': 'Rūpnieciskā būvniecība',
    'project.atnorth.title': 'atNorth Mega Data Center, Keflavīkā',
    'project.atnorth.status': 'Procesā',
    'project.atnorth.body':
      'Sendviča paneļu montāža, starpsienas un citi darbi objektā.',
    'project.house.kind': 'Privātmāja',
    'project.house.title': 'Betona plātne pie privātmājas',
    'project.house.status': 'Pabeigts',
    'project.house.body':
      'Veidņu montāža, stiegrojums, pretapledošanas sildīšanas cauruļu ieklāšana un betona liešana pie privātmājas.',

    'about.title': 'Par mums',
    'about.body':
      'Bergverk ir jauns un progresīvs būvuzņēmums ar vairāk nekā divdesmit darbiniekiem. Mēs veicam visu veidu būvdarbus.',
    'about.body2':
      'Tāmes sagatavo tie paši cilvēki, kas strādā objektā. Tāpēc mēs varam galvot gan par tāmes precizitāti, gan par tehnisko uzraudzību būvlaukumā.',
    'about.photo.alt': 'Bergverk brigāde',
    'about.stat1': 'Darbinieki',
    'about.stat2': 'Pabeigti objekti',

    'careers.title': 'Karjera',
    'careers.lead':
      'Mēs strauji augam un pieņemam darbā. Bergverk strādā tirdzniecības centros, datu centros un pie privātmājām Reikjavīkas apkaimē. Mums vajag cilvēkus, kas dara savu darbu bez uzraudzības.',
    'careers.teaser': 'Meklējam jumiķus, paneļu montētājus un namdarus.',
    'careers.more': 'Skatīt vakances',
    'careers.photo.alt': 'Brigāde objektā',
    'careers.roles.title': 'Vakances',
    'role.roofer.title': 'Jumiķis',
    'role.roofer.body':
      'Jumta demontāža un jauni segumi lielos komercobjektos. Darbs augstumā, jebkuros laikapstākļos.',
    'role.cladder.title': 'Paneļu montētājs',
    'role.cladder.body':
      'Sendviča paneļu apvalki un apšuvumi rūpnieciskos objektos. Svarīga gan precizitāte, gan temps.',
    'role.carpenter.title': 'Namdaris',
    'role.carpenter.body':
      'Starpsienas, iekšdarbi un vispārējie būvdarbi komercobjektos un privātmājās.',
    'careers.how.title': 'Kā pieteikties',
    'careers.how.body':
      'Atsūti mums savu CV un īsu aprakstu par to, ar ko esi strādājis. Mēs izlasām visu un atbildam.',
    'careers.cta': 'Nosūtīt CV',
    'careers.back': 'Atpakaļ uz sākumlapu',

    'contact.title': 'Kontakti',
    'contact.body':
      'Pastāsti mums par projektu. Mēs atbrauksim, apskatīsim objektu un sazināsimies ar nākamajiem soļiem.',
    'contact.phone': 'Tālrunis',
    'contact.email': 'E-pasts',
    'contact.address': 'Adrese',
    'contact.hours': 'Darba laiks',
    'contact.hours.value': 'No pirmdienas līdz piektdienai, 8 līdz 17',

    'footer.kennitala': 'Reģistrācijas nr.',
    'footer.rights': 'Visas tiesības aizsargātas',

    'cookies.text':
      'Izvēlieties “Pieņemt visas”, lai piekristu sīkdatņu un līdzīgu tehnoloģiju izmantošanai, kas uzlabo pārlūkošanas pieredzi, drošību, analītiku un personalizāciju. Izvēlieties “Pārvaldīt sīkdatnes”, lai izdarītu citu izvēli vai atteiktos.',
    'cookies.accept': 'Pieņemt visas',
    'cookies.decline': 'Noraidīt visas',
    'cookies.manage': 'Pārvaldīt sīkdatnes',
    'cookies.settings': 'Sīkdatņu iestatījumi',
    'cookies.necessary.title': 'Nepieciešamās',
    'cookies.necessary.body': 'Vajadzīgas vietnes darbībai. Tās nevar izslēgt.',
    'cookies.analytics.title': 'Analītika',
    'cookies.analytics.body': 'Palīdz mums saprast, kā vietne tiek lietota.',
    'cookies.marketing.title': 'Mārketings',
    'cookies.marketing.body': 'Izmanto, lai rādītu tev atbilstošāku saturu.',
    'cookies.always': 'Vienmēr aktīvas',
    'cookies.save': 'Saglabāt izvēli',
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
