/**
 * retrieve string cleaned from element html
 * @param {HTMLElement} target // element to parse
 * @return {string} // retrieve cleaned string
 */

export default (target: HTMLElement) => {
    return target.innerText.replace(/\n/g, ' ')
}