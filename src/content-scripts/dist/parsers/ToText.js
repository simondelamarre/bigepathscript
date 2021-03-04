"use strict";
/**
 * retrieve string cleaned from element html
 * @param {HTMLElement} target // element to parse
 * @return {string} // retrieve cleaned string
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (target) => {
    return target.innerText.replace(/\n/g, ' ');
};
