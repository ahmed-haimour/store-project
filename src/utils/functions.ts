/**
 *
 * @param {string} txt
 * @param {string} [max=50]
 * @returns
 */

export function txtSlicer(txt: string, max: number = 50) {
  if (txt.length >= max) return `${txt.slice(0, max)}...`;
  return txt;
}
