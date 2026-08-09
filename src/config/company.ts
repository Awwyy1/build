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
  /** Placeholder VAT registration number. */
  vsk: '128456',

  address: {
    street: 'Súðarvogur 7',
    postcode: '104',
    city: 'Reykjavík',
    country: 'Ísland',
  },

  phone: {
    /** Dial-ready form for tel: links. */
    href: '+3545550182',
    /** Display form, grouped the way Icelandic numbers are written. */
    label: '+354 555 0182',
  },

  email: 'hallo@bergverk.is',
  /** Careers inbox — CV submissions land here, not in the general inbox. */
  emailCareers: 'storf@bergverk.is',

  /** Year the company started, shown in the footer and the about section. */
  founded: 2007,
} as const;

/** Single-line postal address, e.g. "Súðarvogur 7, 104 Reykjavík". */
export function formatAddress(): string {
  const { street, postcode, city } = company.address;
  return `${street}, ${postcode} ${city}`;
}
