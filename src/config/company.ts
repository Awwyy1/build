/**
 * Company details.
 *
 * PLACEHOLDER DATA — every value below is invented for layout purposes.
 * The kennitala, phone number and addresses belong to no real company and
 * must all be replaced before this site is published.
 */

export const company = {
  name: 'Bergverk ehf.',
  /** Placeholder. Icelandic company kennitalar carry +40 on the day field. */
  kennitala: '540719-1130',
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

  email: 'hallo@bergverk.is',
  /** Careers inbox — CV submissions land here, not in the general inbox. */
  emailCareers: 'storf@bergverk.is',

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
