/**
 * @param {HTMLElement} scroll // the element to scroll - body by default
 * @param {Function} callback // called function while scrollevent task is comoplete
 */

import { animateScroll } from "./animateScroll";
export default (delay: number = 100) => {
  if (scroll)
    return new Promise<any>(async (resolve, reject) => {
      try {
        let scrollEnd = document.body.scrollHeight;
        const finished = function () {
          // waiting page load then check page.scrollHeight has changed
          setTimeout(function () {
            if (scrollEnd === document.body.scrollHeight) {
              resolve({ status: "complete" })
            } else {
              scrollEnd = document.body.scrollHeight;
              animateScroll(delay, window.scrollY, window.scrollX, scrollEnd, 0, finished)
            }
          }, 100 + delay);
        };
        animateScroll(delay, window.scrollY, window.scrollX, scrollEnd, 0, finished)
      } catch (err) {
        reject(err);
      }
    });
  else
    return true
}