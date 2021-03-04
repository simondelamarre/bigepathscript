"use strict";
/**
 * Scroll to target element position Y
 * @param {HTMLElement} scroll // the element to scroll
 * @param {HTMLElement} target // the target element to to get position and scroll to
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
exports.default = (scroll, target) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        const event = yield animateScroll_1.animateScroll(scroll, 500, target.scrollTop, 0, null);
        if (event)
            resolve(event);
        else
            reject(event);
    }));
};
// new Promise<string>((resolve, reject) => { });
