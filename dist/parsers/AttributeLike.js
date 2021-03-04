/**
 * Try to retrieve attribute like verbose from target element content tags and dataset
 * @param {HTMLElement} target
 * @param {string} verbose
 * @return {string} // string as sku or empry string
 */
import Attributes from "./Attributes";
export default (target, verbose) => {
    let sku = "";
    if (!target)
        return "";
    const attributes = Attributes(target);
    for (const attr of Object.keys(attributes)) {
        if (attr.indexOf(verbose) !== -1)
            sku = attributes[attr];
    }
    return sku;
};
//# sourceMappingURL=AttributeLike.js.map