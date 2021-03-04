/**
 * Scroll to target element position Y
 * @param {HTMLElement} scroll // the element to scroll
 * @param {HTMLElement} target // the target element to to get position and scroll to
 * @param {Function} callback // called function while scrollevent task is comoplete
 */

import AnimateScroll from "./animateScroll";
export default (scroll: HTMLElement, target: HTMLElement) => {
  return new Promise<any>(async (resolve, reject) => {
    const event = await AnimateScroll(scroll, 500, target.scrollTop, 0, null);
    if (event) resolve(event);
    else reject(event);
  })
}
// new Promise<string>((resolve, reject) => { });