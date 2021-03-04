/**
 * retrive any nice values from item props for websites that define meta or use schema.org properly
 * @param  {HTMLElement} target
 * @return {ItemProp}
 */
export default (target) => {
    const response = {};
    const itemsProp = target.querySelectorAll("[itemprop]");
    for (const item of itemsProp) {
        response[item.attributes['itemprop'].value] = item.attributes['content'] ? item.attributes['content'].value : "";
    }
    return response;
};
//# sourceMappingURL=ItemProps.js.map