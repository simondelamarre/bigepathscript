"use strict";
/**
 * Try to retrieve attribute like verbose from target element content tags and dataset
 * @param {HTMLElement} target
 * @param {string} verbose
 * @return {string} // string as sku or empry string
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (target) => {
    const hrefs = target.querySelectorAll('a');
    if (hrefs.length > 0) {
        const url = [];
        for (const link of hrefs) {
            if (link.getAttribute('href') && link.getAttribute('href').indexOf('javascript') === -1)
                url.push(link.getAttribute('href'));
        }
        if (url.length > 1)
            url.sort((a, b) => a.length - b.length);
        return url[0];
    }
    else
        return "";
};
