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

/** Questions on the home page, in display order. */
export const faqs = ['start', 'size', 'area', 'inuse', 'materials', 'warranty'] as const;

/**
 * Client quotes, in display order. Adding a fourth means adding its four
 * strings to every locale; nothing else has to change.
 */
export const reviewIds = ['one', 'two', 'three'] as const;

/** Open roles listed on the Careers page. */
export const roles = ['roofer', 'cladder', 'carpenter'] as const;

type Strings = Record<string, string>;

export const ui: Record<Locale, Strings> = {
  is: {
    'a11y.skip': 'Fara í meginmál',
    'a11y.menu': 'Valmynd',
    'a11y.close': 'Loka',
    'a11y.slide': 'Mynd',
    'gallery.previous': 'Fyrri mynd',
    'gallery.next': 'Næsta mynd',
    'theme.label': 'Þema',
    'contact.whatsapp': 'WhatsApp',
    'theme.dark': 'Skipta yfir í dökkt þema',
    'theme.light': 'Skipta yfir í ljóst þema',

    'nav.services': 'Þjónusta',
    'nav.projects': 'Verkefni',
    'nav.about': 'Um okkur',
    'nav.careers': 'Störf',
    'nav.contact': 'Hafa samband',

    'site.tagline': 'Verktakafyrirtæki í Reykjavík',
    'media.placeholder': 'Ljósmynd',

    'hero.eyebrow': 'Verktakafyrirtæki í Reykjavík',
    'hero.title': 'Verslunarmiðstöðvar, gagnaver, einbýlishús',
    'hero.body':
      'Við tökum að okkur stór verk, vinnum þau vel og skilum á þröngum tíma.',
    'hero.cta': 'Fá tilboð',
    'hero.cta2': 'Sjá verkefni',
    'hero.slide1.alt': 'Þakskipti í Kringlunni',
    'hero.slide2.alt': 'Uppsetning eininga í gagnaveri',
    'hero.slide3.alt': 'Vinnuflokkur á staðnum',

    'services.title': 'Þjónusta',
    'services.lead': 'Eigin vinnuflokkar á hverju sviði. Ef verkið kallar á meira tökum við að okkur aðalverktökuna.',
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
      'Sökklar, steypuvinna, viðbyggingar, viðgerðir og tréverk, bæði í nýbyggingum og í húsum sem þegar standa.',

    'projects.title': 'Verkefni',
    'project.kringlan.kind': 'Þök',
    'project.kringlan.title': 'Kringlan verslunarmiðstöð, Reykjavík',
    'project.kringlan.status': 'Í vinnslu',
    'project.kringlan.body':
      'Heildarendurnýjun þakklæðningar: eldra þakefni rifið af og nýtt lagt í staðinn, á miðstöð sem er opin á meðan.',
    'project.atnorth.kind': 'Iðnaðarbygging',
    'project.atnorth.title': 'Gagnaver',
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
      'Byggingakerfi er ungt og framsækið byggingarfyrirtæki með rúmlega tuttugu starfsmenn. Við tökum að okkur allar tegundir byggingarvinnu.',
    'about.body2':
      'Þeir sem verðleggja verkið vinna sjálfir í því. Þess vegna getum við ábyrgst bæði nákvæmni tilboðsins og tæknilegt eftirlit með framkvæmdinni.',
    'about.photo.alt': 'Vinnuflokkur Byggingakerfis',

    'careers.title': 'Störf',
    'careers.lead':
      'Við erum að stækka hratt og ráðum til okkar. Byggingakerfi vinnur á verslunarmiðstöðvum, í gagnaverum og við einbýlishús á höfuðborgarsvæðinu. Okkur vantar fólk sem gengur í verkin án þess að staðið sé yfir því.',
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

    'reviews.title': 'Hvað viðskiptavinir segja',
    'reviews.lead': 'Safnað hjá fólkinu sem við unnum fyrir.',
    'review.one.quote':
      'Þeir byrjuðu daginn sem þeir sögðust byrja og verslanirnar fyrir neðan lokuðu aldrei. Reikningurinn stemmdi við tilboðið.',
    'review.one.who': 'Húsvörður, verslunarmiðstöð',
    'review.one.place': 'Reykjavík',
    'review.one.when': 'Júní 2026',
    'review.two.quote':
      'Við fengum þrjú tilboð. Þeirra var ekki ódýrast og það var það eina sem sagði hvað myndi gerast ef þakviðurinn undir reyndist fúinn.',
    'review.two.who': 'Húseigandi',
    'review.two.place': 'Mosfellsbær',
    'review.two.when': 'Apríl 2026',
    'review.three.quote':
      'Það var sópað á hverju kvöldi. Það hljómar smátt þar til maður hefur unnið í húsi þar sem svo var ekki.',
    'review.three.who': 'Húseigandi',
    'review.three.place': 'Garðabær',
    'review.three.when': 'Febrúar 2026',

    'faq.title': 'Algengar spurningar',
    'faq.lead': 'Þær sem koma fyrst upp í símann.',
    'faq.foot': 'Ekki á listanum? Hringdu og spurðu.',
    'faq.start.q': 'Hvenær getið þið byrjað?',
    'faq.start.a':
      'Úttekt fer yfirleitt fram innan viku frá símtalinu. Hvenær vinna hefst á staðnum ræðst af stærð verksins og þeim veðurglugga sem stefnt er á, og við tökum fram í tilboðinu hvaða gluggi það er.',
    'faq.size.q': 'Hvaða stærð verka takið þið að ykkur?',
    'faq.size.a':
      'Allt frá þaki á einbýlishúsi upp í fulla klæðningu á atvinnuhúsnæði. Undir ákveðinni stærð kosta pallar og lyfta meira en vinnan sjálf, og þá segjum við það hreint út í stað þess að fela það í tilboðinu.',
    'faq.area.q': 'Vinnið þið utan Reykjavíkur?',
    'faq.area.a':
      'Um allt höfuðborgarsvæðið sem sjálfsagðan hlut. Lengra förum við þegar verkið er nógu stórt til að halda flokki þar alla vikuna.',
    'faq.inuse.q': 'Getur húsið verið í notkun á meðan?',
    'faq.inuse.a':
      'Já, og flest verk okkar í atvinnuhúsnæði eru unnin þannig. Það breytir því hvernig svæðið er skipulagt og hvernig dagurinn er lagður upp, svo það þarf að ræða áður en tilboðið er gert, ekki eftir á.',
    'faq.materials.q': 'Hver kaupir efnið?',
    'faq.materials.a':
      'Við gerum það, nema þú viljir leggja það til sjálfur. Hvort sem er telur tilboðið upp kerfin með nafni, svo þú sérð hvað fer á húsið þitt.',
    'faq.warranty.q': 'Hvað gerist ef eitthvað bilar síðar?',
    'faq.warranty.a':
      'Við ábyrgjumst vinnuna og framleiðandinn efnið, og báðir frestir eru skrifaðir inn í samninginn. Sama símanúmerið gildir í báðum tilvikum, okkar.',

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
    'gallery.previous': 'Previous photograph',
    'gallery.next': 'Next photograph',
    'theme.label': 'Theme',
    'contact.whatsapp': 'WhatsApp',
    'theme.dark': 'Switch to the dark theme',
    'theme.light': 'Switch to the light theme',

    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.about': 'About us',
    'nav.careers': 'Careers',
    'nav.contact': 'Contact',

    'site.tagline': 'Building contractor in Reykjavík',
    'media.placeholder': 'Photograph',

    'hero.eyebrow': 'Building contractor in Reykjavík',
    'hero.title': 'Shopping centres, data centres, private homes',
    'hero.body':
      'We take on large volumes of work, build them properly and deliver to tight deadlines.',
    'hero.cta': 'Request a quote',
    'hero.cta2': 'See projects',
    'hero.slide1.alt': 'Roof replacement at Kringlan',
    'hero.slide2.alt': 'Panel installation at a data centre',
    'hero.slide3.alt': 'A crew on site',

    'services.title': 'Services',
    'services.lead': 'Our own crews on every trade. Where a job needs more, we carry it as main contractor.',
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
      'Foundations, concrete work, extensions, repairs and joinery, on new build and on buildings already standing.',

    'projects.title': 'Projects',
    'project.kringlan.kind': 'Roofing',
    'project.kringlan.title': 'Kringlan shopping centre, Reykjavík',
    'project.kringlan.status': 'In progress',
    'project.kringlan.body':
      'Full replacement of the roof covering: the old covering stripped off and a new one laid, over a centre that stays open throughout.',
    'project.atnorth.kind': 'Industrial build',
    'project.atnorth.title': 'Data centre',
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
      'Byggingakerfi is a young, forward-looking construction company with more than twenty people on staff. We carry out every kind of construction work.',
    'about.body2':
      'The people who price a job are the people who work on it. That is why we can stand behind both the accuracy of our estimates and the technical supervision on site.',
    'about.photo.alt': 'The Byggingakerfi crew',

    'careers.title': 'Careers',
    'careers.lead':
      'We are growing fast and hiring. Byggingakerfi works on shopping centres, data centres and private houses around Reykjavík. We need people who get on with the work without being watched.',
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

    'reviews.title': 'What clients say',
    'reviews.lead': 'Collected from the people whose buildings we worked on.',
    'review.one.quote':
      'They started on the day they said they would and the shops below never closed. The invoice matched the quote.',
    'review.one.who': 'Building manager, shopping centre',
    'review.one.place': 'Reykjavík',
    'review.one.when': 'June 2026',
    'review.two.quote':
      'We had three quotes. Theirs was not the cheapest and it was the only one that said what would happen if the deck underneath turned out to be rotten.',
    'review.two.who': 'Homeowner',
    'review.two.place': 'Mosfellsbær',
    'review.two.when': 'April 2026',
    'review.three.quote':
      'The site was swept every evening. That sounds like a small thing until you have worked in a building where it was not.',
    'review.three.who': 'Homeowner',
    'review.three.place': 'Garðabær',
    'review.three.when': 'February 2026',

    'faq.title': 'Questions we get',
    'faq.lead': 'The ones that come up on the phone before anything else.',
    'faq.foot': 'Not on the list? Call and ask.',
    'faq.start.q': 'How soon can you start?',
    'faq.start.a':
      'A survey usually happens within a week of the call. Start on site depends on the size of the job and on the weather window we are aiming at, and we say which window that is in the quote.',
    'faq.size.q': 'What size of job do you take on?',
    'faq.size.a':
      'From a single house roof up to a full commercial envelope. Below a certain size the scaffold and the lift cost more than the work itself, and we will say so rather than quote around it.',
    'faq.area.q': 'Do you work outside Reykjavík?',
    'faq.area.a':
      'Across the capital region as a matter of course. Further out we go when the job is large enough to keep a crew there for the week.',
    'faq.inuse.q': 'Can the building stay in use while you work?',
    'faq.inuse.a':
      'Yes, and most of our commercial work is done that way. It changes how the site is staged and how the day is planned, so it belongs in the conversation before the quote, not after.',
    'faq.materials.q': 'Who buys the materials?',
    'faq.materials.a':
      'We do, unless you would rather supply them. Either way the quote lists the systems by name, so you can see what is going on your building.',
    'faq.warranty.q': 'What happens if something fails later?',
    'faq.warranty.a':
      'Workmanship is covered by us and the materials by their maker, and both periods are written into the contract. One phone number either way, ours.',

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
    'gallery.previous': 'Poprzednie zdjęcie',
    'gallery.next': 'Następne zdjęcie',
    'theme.label': 'Motyw',
    'contact.whatsapp': 'WhatsApp',
    'theme.dark': 'Przełącz na ciemny motyw',
    'theme.light': 'Przełącz na jasny motyw',

    'nav.services': 'Usługi',
    'nav.projects': 'Realizacje',
    'nav.about': 'O nas',
    'nav.careers': 'Praca',
    'nav.contact': 'Kontakt',

    'site.tagline': 'Firma budowlana w Reykjavíku',
    'media.placeholder': 'Zdjęcie',

    'hero.eyebrow': 'Firma budowlana w Reykjavíku',
    'hero.title': 'Centra handlowe, centra danych, domy prywatne',
    'hero.body':
      'Bierzemy duże zakresy prac, wykonujemy je solidnie i oddajemy w krótkich terminach.',
    'hero.cta': 'Poproś o wycenę',
    'hero.cta2': 'Zobacz realizacje',
    'hero.slide1.alt': 'Wymiana dachu w Kringlan',
    'hero.slide2.alt': 'Montaż płyt w centrum danych',
    'hero.slide3.alt': 'Ekipa na budowie',

    'services.title': 'Usługi',
    'services.lead': 'Na każdym kierunku własne ekipy. Jeśli budowa wymaga więcej, prowadzimy ją jako generalny wykonawca.',
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
      'Fundamenty, betony, rozbudowy, remonty i stolarka, w nowych budynkach i w tych, które już stoją.',

    'projects.title': 'Realizacje',
    'project.kringlan.kind': 'Dachy',
    'project.kringlan.title': 'Centrum handlowe Kringlan, Reykjavík',
    'project.kringlan.status': 'W trakcie',
    'project.kringlan.body':
      'Pełna wymiana pokrycia dachowego: demontaż starego pokrycia i montaż nowego, na obiekcie czynnym przez cały czas prac.',
    'project.atnorth.kind': 'Budownictwo przemysłowe',
    'project.atnorth.title': 'Centrum danych',
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
      'Byggingakerfi to młoda, nowoczesna firma budowlana zatrudniająca ponad dwadzieścia osób. Wykonujemy wszystkie rodzaje prac budowlanych.',
    'about.body2':
      'Wyceny przygotowują ci, którzy potem pracują na budowie. Dlatego możemy ręczyć zarówno za dokładność kosztorysu, jak i za nadzór techniczny nad realizacją.',
    'about.photo.alt': 'Ekipa Byggingakerfi',

    'careers.title': 'Praca',
    'careers.lead':
      'Szybko rośniemy i rekrutujemy. Byggingakerfi pracuje na centrach handlowych, w centrach danych i przy domach prywatnych w rejonie Reykjavíku. Szukamy ludzi, którzy robią swoje bez pilnowania.',
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

    'reviews.title': 'Co mówią klienci',
    'reviews.lead': 'Zebrane od ludzi, przy których budynkach pracowaliśmy.',
    'review.one.quote':
      'Zaczęli w dniu, w którym obiecali, a sklepy poniżej ani razu się nie zamknęły. Faktura zgadzała się z wyceną.',
    'review.one.who': 'Zarządca, centrum handlowe',
    'review.one.place': 'Reykjavík',
    'review.one.when': 'Czerwiec 2026',
    'review.two.quote':
      'Mieliśmy trzy wyceny. Ich nie była najtańsza i jako jedyna mówiła, co się stanie, jeśli deskowanie pod spodem okaże się zbutwiałe.',
    'review.two.who': 'Właściciel domu',
    'review.two.place': 'Mosfellsbær',
    'review.two.when': 'Kwiecień 2026',
    'review.three.quote':
      'Plac był zamiatany każdego wieczoru. Brzmi drobno, dopóki nie przeżyje się budowy, gdzie tak nie było.',
    'review.three.who': 'Właściciel domu',
    'review.three.place': 'Garðabær',
    'review.three.when': 'Luty 2026',

    'faq.title': 'Częste pytania',
    'faq.lead': 'Te, które padają w telefonie w pierwszej kolejności.',
    'faq.foot': 'Nie ma twojego pytania? Zadzwoń i zapytaj.',
    'faq.start.q': 'Jak szybko możecie zacząć?',
    'faq.start.a':
      'Oględziny zwykle w ciągu tygodnia od telefonu. Start na budowie zależy od wielkości zakresu i od okna pogodowego, na które celujemy, a w wycenie piszemy, o które okno chodzi.',
    'faq.size.q': 'Jakiej wielkości zlecenia bierzecie?',
    'faq.size.a':
      'Od dachu jednego domu po pełną powłokę budynku komercyjnego. Poniżej pewnej skali rusztowanie i podnośnik kosztują więcej niż sama praca, i mówimy to wprost, zamiast ukrywać w wycenie.',
    'faq.area.q': 'Pracujecie poza Reykjavíkiem?',
    'faq.area.a':
      'W całym regionie stołecznym standardowo. Dalej jedziemy, gdy zakres jest na tyle duży, by ekipa została tam na cały tydzień.',
    'faq.inuse.q': 'Czy budynek może działać w trakcie prac?',
    'faq.inuse.a':
      'Tak, i tak wykonujemy większość prac komercyjnych. Zmienia to organizację placu i plan dnia, więc rozmawiamy o tym przed wyceną, a nie po niej.',
    'faq.materials.q': 'Kto kupuje materiały?',
    'faq.materials.a':
      'My, chyba że wolisz dostarczyć je sam. Tak czy inaczej wycena wymienia systemy z nazwy, więc widzisz, co trafia na twój budynek.',
    'faq.warranty.q': 'Co, jeśli coś zawiedzie później?',
    'faq.warranty.a':
      'Za robociznę odpowiadamy my, za materiał jego producent, a oba okresy są wpisane do umowy. W obu przypadkach jeden numer telefonu, nasz.',

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
    'gallery.previous': 'Iepriekšējais attēls',
    'gallery.next': 'Nākamais attēls',
    'theme.label': 'Tēma',
    'contact.whatsapp': 'WhatsApp',
    'theme.dark': 'Pārslēgt uz tumšo tēmu',
    'theme.light': 'Pārslēgt uz gaišo tēmu',

    'nav.services': 'Pakalpojumi',
    'nav.projects': 'Projekti',
    'nav.about': 'Par mums',
    'nav.careers': 'Karjera',
    'nav.contact': 'Kontakti',

    'site.tagline': 'Būvuzņēmums Reikjavīkā',
    'media.placeholder': 'Fotogrāfija',

    'hero.eyebrow': 'Būvuzņēmums Reikjavīkā',
    'hero.title': 'Tirdzniecības centri, datu centri, privātmājas',
    'hero.body':
      'Uzņemamies lielus darba apjomus, izpildām tos kvalitatīvi un nododam saspringtos termiņos.',
    'hero.cta': 'Pieprasīt tāmi',
    'hero.cta2': 'Skatīt projektus',
    'hero.slide1.alt': 'Jumta nomaiņa Kringlan',
    'hero.slide2.alt': 'Paneļu montāža datu centrā',
    'hero.slide3.alt': 'Brigāde objektā',

    'services.title': 'Pakalpojumi',
    'services.lead': 'Katrā virzienā savas brigādes. Ja objektam vajag vairāk, vadām to kā ģenerāluzņēmējs.',
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
      'Pamati, betona darbi, piebūves, remonti un kokdarbi, gan jaunbūvēs, gan jau uzceltās ēkās.',

    'projects.title': 'Projekti',
    'project.kringlan.kind': 'Jumti',
    'project.kringlan.title': 'Tirdzniecības centrs Kringlan, Reikjavīkā',
    'project.kringlan.status': 'Procesā',
    'project.kringlan.body':
      'Pilnīga jumta seguma nomaiņa: vecais segums demontēts un ieklāts jauns, objektā, kas visu laiku paliek atvērts.',
    'project.atnorth.kind': 'Rūpnieciskā būvniecība',
    'project.atnorth.title': 'Datu centrs',
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
      'Byggingakerfi ir jauns un progresīvs būvuzņēmums ar vairāk nekā divdesmit darbiniekiem. Mēs veicam visu veidu būvdarbus.',
    'about.body2':
      'Tāmes sagatavo tie paši cilvēki, kas strādā objektā. Tāpēc mēs varam galvot gan par tāmes precizitāti, gan par tehnisko uzraudzību būvlaukumā.',
    'about.photo.alt': 'Byggingakerfi brigāde',

    'careers.title': 'Karjera',
    'careers.lead':
      'Mēs strauji augam un pieņemam darbā. Byggingakerfi strādā tirdzniecības centros, datu centros un pie privātmājām Reikjavīkas apkaimē. Mums vajag cilvēkus, kas dara savu darbu bez uzraudzības.',
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

    'reviews.title': 'Ko saka klienti',
    'reviews.lead': 'Savākts no cilvēkiem, pie kuru ēkām strādājām.',
    'review.one.quote':
      'Viņi sāka tajā dienā, ko bija solījuši, un veikali apakšā neaizvērās nevienu reizi. Rēķins sakrita ar tāmi.',
    'review.one.who': 'Ēkas pārvaldnieks, tirdzniecības centrs',
    'review.one.place': 'Reikjavīka',
    'review.one.when': '2026. gada jūnijs',
    'review.two.quote':
      'Mums bija trīs tāmes. Viņu tāme nebija lētākā un bija vienīgā, kas pateica, kas notiks, ja apakšā esošais dēļu klājs izrādīsies satrupējis.',
    'review.two.who': 'Mājas īpašnieks',
    'review.two.place': 'Mosfellsbær',
    'review.two.when': '2026. gada aprīlis',
    'review.three.quote':
      'Objekts tika izslaucīts katru vakaru. Tas izklausās sīkums, līdz esi strādājis ēkā, kur tā nebija.',
    'review.three.who': 'Mājas īpašnieks',
    'review.three.place': 'Garðabær',
    'review.three.when': '2026. gada februāris',

    'faq.title': 'Biežākie jautājumi',
    'faq.lead': 'Tie, kas telefonā izskan vispirms.',
    'faq.foot': 'Nav sarakstā? Zvani un jautā.',
    'faq.start.q': 'Cik ātri varat sākt?',
    'faq.start.a':
      'Apsekojums parasti notiek nedēļas laikā pēc zvana. Darbu sākums objektā ir atkarīgs no apjoma un no laikapstākļu loga, uz kuru mērķējam, un tāmē norādām, kurš tas ir.',
    'faq.size.q': 'Kāda apjoma darbus uzņematies?',
    'faq.size.a':
      'No vienas privātmājas jumta līdz pilnai komercēkas apvalka nomaiņai. Zem noteikta apjoma sastatnes un pacēlājs izmaksā vairāk nekā pats darbs, un mēs to pasakām atklāti, nevis paslēpjam tāmē.',
    'faq.area.q': 'Vai strādājat ārpus Reikjavīkas?',
    'faq.area.a':
      'Visā galvaspilsētas reģionā kā pašsaprotami. Tālāk braucam, kad darbs ir pietiekami liels, lai brigāde tur paliktu visu nedēļu.',
    'faq.inuse.q': 'Vai ēka var darboties darbu laikā?',
    'faq.inuse.a':
      'Jā, un lielākā daļa mūsu komercobjektu tā arī tiek darīti. Tas maina objekta organizāciju un dienas plānu, tāpēc par to runājam pirms tāmes, nevis pēc tās.',
    'faq.materials.q': 'Kas pērk materiālus?',
    'faq.materials.a':
      'Mēs, ja vien tu nevēlies piegādāt tos pats. Jebkurā gadījumā tāmē sistēmas ir nosauktas vārdā, tāpēc redzi, kas nonāk uz tavas ēkas.',
    'faq.warranty.q': 'Kas notiek, ja kaut kas vēlāk sabojājas?',
    'faq.warranty.a':
      'Par darbu atbildam mēs, par materiālu tā ražotājs, un abi termiņi ir ierakstīti līgumā. Abos gadījumos viens telefona numurs, mūsu.',

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
