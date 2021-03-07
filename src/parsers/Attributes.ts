/**
 * Retrieve element list of attributes data- and others
 * @param  {HtmlElement} target // wich element you want to analyse
 * @return {array} // array of attributes from verbose
 **/

const excludeTags = [
  "class",
  "style",
  "data-widths",
  "data-sizes",
  "sizes",
  "srcset",
  "method",
  "enctype",
  "type",
  "disabled",
  "x",
  "y",
  "width",
  "height",
  "viewBox",
  "fill",
  "stroke-width",
  "stroke-linecap",
  "stroke-miterlimit",
  "d",
  "version",
  "xmlns",
  "xmlns:xlink",
  "xml:space",
  "transform",
  "data-swaction",
  "data-test",
  "checked",
  "data-image-widths",
  "aria-hidden",
]
export declare type Attribute = {
  name: string;
  value: string;
}
export default (target: HTMLElement): { [key: string]: string; } => {
  const response: { [key: string]: string; } = {};
  for (const attr of target.attributes) {
    if (!excludeTags.includes(attr.name))
      response[attr.name] = attr.value;
  }
  const childs = target.querySelectorAll('*');
  for (const children of childs) {
    for (const attr of children.attributes) {
      if (!excludeTags.includes(attr.name))
        response[attr.name] = attr.value;
    }
  }
  return response;
}

