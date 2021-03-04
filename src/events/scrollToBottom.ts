/**
 * @param {HTMLElement} scroll // the element to scroll - body by default
 * @param {Function} callback // called function while scrollevent task is comoplete
 */

import { animateScroll } from "./animateScroll";
export default (scroll: HTMLElement, delay: number = 100) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      let scrollEnd = scroll.scrollHeight;
      const finished = function () {
        // waiting page load then check page.scrollHeight has changed
        setTimeout(function () {
          if (scrollEnd === scroll.scrollHeight) {
            resolve({ status: "complete" })
          } else {
            animateScroll(scroll, delay, scrollEnd, 0, finished)
          }
        }, 500 + delay);
      };
      animateScroll(scroll, delay, scrollEnd, 0, finished)
    } catch (err) {
      reject(err);
    }
  });
}