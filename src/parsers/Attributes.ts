/**
 * Retrieve element list of attributes data- and others
 * @param  {HtmlElement} target // wich element you want to analyse
 * @return {array} // array of attributes from verbose
 **/

export declare type Attribute = {
    name: string;
    value: string;
}
export default (target: HTMLElement): { [key: string]: string; } => {
    const response: { [key: string]: string; } = {};
    for (const attr of target.attributes) {
        response[attr.name] = attr.value;
    }
    const childs = target.querySelectorAll('*');
    for (const children of childs) {
        for (const attr of children.attributes) {
            response[attr.name] = attr.value;
        }
    }
    return response;
}