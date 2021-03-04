/**
 * Scroll to target element position Y
 * @param {HTMLElement} scroll // the element to scroll
 * @param {HTMLElement} target // the target element to to get position and scroll to
 * @param {Function} callback // called function while scrollevent task is comoplete
 */

import { animateScroll } from "./animateScroll";
export default (scroll: HTMLElement, target: HTMLElement) => {

  return new Promise<any>(async (resolve, reject) => {
    if (target) {
      const event = await animateScroll(scroll, 500, target.scrollTop, 0, null);
      if (event) resolve(event);
      else reject(event);
    } else
      resolve(true)
  })

}
// new Promise<string>((resolve, reject) => { });