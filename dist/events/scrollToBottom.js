"use strict";
/**
 * @param {HTMLElement} scroll // the element to scroll - body by default
 * @param {Function} callback // called function while scrollevent task is comoplete
 */
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
const animateScroll_1 = require("./animateScroll");
exports.default = (scroll, delay = 100) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let scrollEnd = scroll.scrollHeight;
            const finished = function () {
                // waiting page load then check page.scrollHeight has changed
                setTimeout(function () {
                    if (scrollEnd === scroll.scrollHeight) {
                        resolve({ status: "complete" });
                    }
                    else {
                        animateScroll_1.default(scroll, delay, scrollEnd, 0, finished);
                    }
                }, 500 + delay);
            };
            animateScroll_1.default(scroll, delay, scrollEnd, 0, finished);
        }
        catch (err) {
            reject(err);
        }
    }));
};
//# sourceMappingURL=scrollToBottom.js.map