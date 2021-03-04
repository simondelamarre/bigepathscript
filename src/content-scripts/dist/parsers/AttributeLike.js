"use strict";
/**
 * Try to retrieve attribute like verbose from target element content tags and dataset
 * @param {HTMLElement} target
 * @param {string} verbose
 * @return {string} // string as sku or empry string
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Attributes_1 = require("./Attributes");
exports.default = (target, verbose) => {
    let sku = "";
    if (!target)
        return "";
    const attributes = Attributes_1.default(target);
    for (const attr of Object.keys(attributes)) {
        if (attr.indexOf(verbose) !== -1)
            sku = attributes[attr];
    }
    return sku;
};
