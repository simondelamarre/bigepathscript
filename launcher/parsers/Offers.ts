/**
 * retrieve offers in percent string sample -40%
 * @param {string} str // parsed string
 * @return {OFFER[]} [] list of prices in cents with devise
 */

import { OFFER } from "../types/Offers";

export default (str): OFFER[] => {
  str = str.replace(/\s/g, '');
  const response: OFFER[] = [];
  try {
    // const offerReg = new RegExp(`\\(?\\-|\\+)((?:\\d)\\%`, 'g');
    const offerReg = new RegExp(`(\\d?\\d?)%`, 'g');
    const hasEntries = str.match(offerReg);
    if (hasEntries) {
      for (const entry of hasEntries) {
        response.push({
          operator: entry.match(/\+/g) ? '+' : '-',
          amount: entry.match(/\d+/g) ? entry.match(/\d+/g)[0] : 0,
          reducer: "%"
        })
      }
    }
  } catch (err) {
    console.error('Probably invalid regular expression ', err);
  }
  return response;
}
