/**
 * Retrieve valid schema.org product infos from HTMLElement
 * @param  {HTMLElement} target // element to parse
 * @return {PRODUCTSCHEME} // retrieve schema.org product scheme
 **/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Prices from "./PriceParser";
import Attributes from "./Attributes";
import AttributeLike from "./AttributeLike";
import ItemProps from "./ItemProps";
import Material from "./Material";
import GetUrl from "./GetUrl";
import Offers from "./Offers";
import PicturesList from "./PicturesList";
import ToText from "./ToText";
export default (target) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = {};
        let images = yield PicturesList(target);
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
    }
    catch (err) {
        console.error('SchemmaORG ', err);
        return {};
    }
});
//# sourceMappingURL=productScheme.js.map