/**
 * Company details.
 *
 * Name, kennitala and phone number are the real ones. The street address
 * and both email addresses are still placeholders and have to be replaced
 * before this site is published.
 */

export const company = {
  name: 'Byggingakerfi ehf.',
  kennitala: '481225-0780',
  address: {
    street: 'Súðarvogur 7',
    postcode: '104',
    city: 'Reykjavík',
    country: 'Ísland',
  },

  phone: {
    /** Dial-ready form for tel: links: no spaces, leading plus. */
    href: '+37127531082',
    /** Display form. */
    label: '+371 27 531 082',
  },

  email: 'hallo@byggingakerfi.is',
  /** Careers inbox — CV submissions land here, not in the general inbox. */
  emailCareers: 'storf@byggingakerfi.is',

  /**
   * Year the company started. Not shown anywhere: the company is young and
   * the site leads on the work rather than on a founding date. Kept because
   * it is real company metadata, not because a page reads it.
   */
  founded: 2024,
} as const;

/** Single-line postal address, e.g. "Súðarvogur 7, 104 Reykjavík". */
export function formatAddress(): string {
  const { street, postcode, city } = company.address;
  return `${street}, ${postcode} ${city}`;
}
