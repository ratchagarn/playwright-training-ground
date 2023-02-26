/**
 * Creates an object whose keys and values are the same, based on the input array of string literals.
 *
 * @example
 * const pagePath = keyMirror('/', '/users', '/users/create');
 * Result: { '/': '/', '/users': '/users', '/users/create': '/users/create' }
 *
 * @param values Array of string literals
 * @returns An object with keys and values equal to the input strings
 */
export const keyMirror = <T extends readonly string[]>(values: T) =>
  values.reduce<{ readonly [K in T[number]]: K }>(
    (acc, val) => ({ ...acc, [val]: val }),
    {} as { readonly [K in T[number]]: K }
  )
