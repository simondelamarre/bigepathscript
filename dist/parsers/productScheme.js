"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const PriceParser_1 = require("./PriceParser");
const Attributes_1 = require("./Attributes");
const AttributeLike_1 = require("./AttributeLike");
const ItemProps_1 = require("./ItemProps");
const Material_1 = require("./Material");
const GetUrl_1 = require("./GetUrl");
const Offers_1 = require("./Offers");
const PicturesList_1 = require("./PicturesList");
const ToText_1 = require("./ToText");
exports.default = (target) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = {};
        let images = yield PicturesList_1.default(target);
        response.pictures = images;
        response.image = images[0] ? images[0] : {};
        response.description = ToText_1.default(target);
        response.prices = PriceParser_1.default(response.description);
        response.price = response.prices[0] ? response.prices[0] : {};
        response.offers = Offers_1.default(response.description);
        response.tags = images[0] && images[0].tags ? images[0].tags : [];
        response.additionalProperty = Attributes_1.default(target);
        response.sku = AttributeLike_1.default(target, 'sku');
        response.url = GetUrl_1.default(target);
        response.productID = AttributeLike_1.default(target, 'id');
        const props = ItemProps_1.default(target);
        response.additionalProperty = Object.assign(response.additionalProperty, props);
        response.material = Material_1.default(target);
        return response;
    }
    catch (err) {
        console.error('SchemmaORG ', err);
        return {};
    }
});
//# sourceMappingURL=productScheme.js.map