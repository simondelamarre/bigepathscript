/**
 * retrive any nice values from item props for websites that define meta or use schema.org properly
 * @param  {HTMLElement} target
 * @return {ItemProp} 
 */

declare type ItemProp = { [key: string]: string }

export default (target: HTMLElement): ItemProp => {
  const response: ItemProp = {};
  const itemsProp = target.querySelectorAll("[itemprop]");
  for (const item of itemsProp) {
    response[item.attributes['itemprop'].value] = item.attributes['content'] ? item.attributes['content'].value : "";
  }
  return response;
}