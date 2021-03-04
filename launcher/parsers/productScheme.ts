/**
 * Retrieve valid schema.org product infos from HTMLElement
 * @param  {HTMLElement} target // element to parse
 * @return {PRODUCTSCHEME} // retrieve schema.org product scheme
 **/

import Prices from "./PriceParser"
import Attributes from "./Attributes"
import AttributeLike from "./AttributeLike"
import ItemProps from "./ItemProps"
import Material from "./Material"
import GetUrl from "./GetUrl"
import { PRODUCTSCHEME } from "../types/ProductScheme"
import Offers from "./Offers"
import PicturesList from "./PicturesList"
import ToText from "./ToText"

export default async (target: HTMLElement): Promise<Partial<PRODUCTSCHEME>> => {
  try {
    const response: Partial<PRODUCTSCHEME> = {};
    let images = await PicturesList(target);
    response.pictures = images;
    response.image = images[0] ? images[0] : {};
    response.description = ToText(target);
    response.prices = Prices(response.description);
    response.price = response.prices[0] ? response.prices[0] : {};
    response.offers = Offers(response.description);
    response.tags = images[0] && images[0].tags ? images[0].tags : [];
    response.additionalProperty = Attributes(target);
    response.sku = AttributeLike(target, 'sku');
    response.url = GetUrl(target);
    response.productID = AttributeLike(target, 'id');
    const props = ItemProps(target);
    response.additionalProperty = Object.assign(response.additionalProperty, props);
    response.material = Material(target);
    return response;
  } catch (err) {
    console.error('SchemmaORG ', err)
    return {}
  }
}