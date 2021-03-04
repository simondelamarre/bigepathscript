"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (target) => {
    const response = [];
    try {
        const images = target.querySelectorAll('img');
        for (const picture of images) {
            try {
                let desc = "";
                if (picture.attributes['alt'])
                    desc = picture.attributes['alt'].value;
                let url = "";
                if (picture.attributes['src'])
                    url = picture.attributes['src'].value;
                /* if (url && url !== "")
                  if (url.indexOf('http') === -1) url = `https://${url}`; */
                if (response.findIndex(e => e.url === url) === -1)
                    response.push({ url: url, description: desc ? desc : "" });
            }
            catch (err) {
                console.error('ERROR in pictures selector loop');
            }
        }
    }
    catch (err) {
        console.error("ERROR PICTuRe LIST ::: ", err);
    }
    return response;
};
