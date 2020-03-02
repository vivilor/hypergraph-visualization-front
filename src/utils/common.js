/**
 * Return true if provided value can be cast to boolean _`true`_
 * @param {any} v - value to test
 * @returns {boolean} true, if value is truthy
 */
export const truthy = v => !!v

/**
 * Return true if provided value can be cast to boolean _`false`_
 * @param {any} v - value to test
 * @return {boolean} true, if value is falsy
 */
export const falsy = v => !v

/**
 * Returns a new array of unique elements from __`arr`__
 * @template T
 * @param {T[]} arr input array
 * @returns {T[]} array of unique elements
 */
export const uniq = arr => [...new Set(arr).values()]

/**
 *
 * @see https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 * @returns {string}
 */
export const uuid = () => ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
  (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16))


export const arrayMax = arr => arr.length ? Math.max(...arr) : 0
