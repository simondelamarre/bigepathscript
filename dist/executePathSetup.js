"use strict";
/**
 * Execute setup script
 * get and parse each static
 * for each list
 * - for each list
 * -- scroll to item element scrollToElement()
 * --- parse and
 * --- add each list item parsed as complementary
 * --- store dataset in response
 * - switch navigation
 * -- [1] scrollToBottom()
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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItem = exports.processListItem = exports.processScrollToBottom = exports.processLoadMoreButton = exports.bigePath = void 0;
const scrollToBottom_1 = require("./events/scrollToBottom");
const scrollToElement_1 = require("./events/scrollToElement");
const productScheme_1 = require("./parsers/productScheme");
exports.bigePath = (setup) => __awaiter(void 0, void 0, void 0, function* () {
    const response = {
        static: {},
        list: []
    };
    return response;
    /* for (const stat of setup.static) {
      const statElement = document.querySelector(stat.selector);
      response.static[stat.label] = statElement.textContent;
    }
    if (setup.navigation.mode === "loadMoreButton") {
      return processLoadMoreButton(setup, response.list, function (response) {
        response.list = response;
        return response;
      });
    } else if (setup.navigation.mode === "scrollToBottom") {
      return processScrollToBottom(setup, response.list, function (response) {
        return response;
      });
    } else if (setup.navigation.mode === "nextButton") {
      for await (const list of setup.lists) {
        response.list = response.list.concat(response.list, await processListItem(list.target.selector));
      }
      return response;
    } */
});
exports.processLoadMoreButton = (setup, response, callback) => __awaiter(void 0, void 0, void 0, function* () {
    var e_1, _a;
    try {
        // let response = [];
        for (var _b = __asyncValues(setup.lists), _c; _c = yield _b.next(), !_c.done;) {
            const list = _c.value;
            response = response.concat(response, yield exports.processListItem(list.target.selector));
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    const loadMore = document.querySelector(setup.navigation.loadMoreSelector);
    if (!loadMore) {
        callback(response);
        return response;
    }
    else {
        loadMore.click();
        setTimeout(function () {
            exports.processLoadMoreButton(setup, response, callback);
        }, 1000);
    }
});
exports.processScrollToBottom = (setup, response, callback) => __awaiter(void 0, void 0, void 0, function* () {
    var e_2, _d;
    yield scrollToBottom_1.default(window.document.body, 500);
    try {
        for (var _e = __asyncValues(setup.lists), _f; _f = yield _e.next(), !_f.done;) {
            const list = _f.value;
            response = response.concat(response, yield exports.processListItem(list.target.selector));
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_f && !_f.done && (_d = _e.return)) yield _d.call(_e);
        }
        finally { if (e_2) throw e_2.error; }
    }
    callback(response);
    return response;
});
exports.processListItem = (selector) => {
    let response = [];
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        var e_3, _a;
        const listTarget = document.querySelectorAll(selector);
        try {
            try {
                for (var listTarget_1 = __asyncValues(listTarget), listTarget_1_1; listTarget_1_1 = yield listTarget_1.next(), !listTarget_1_1.done;) {
                    const listTar = listTarget_1_1.value;
                    const data = yield exports.getItem(listTar);
                    if (data)
                        response.push();
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (listTarget_1_1 && !listTarget_1_1.done && (_a = listTarget_1.return)) yield _a.call(listTarget_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
            resolve(response);
        }
        catch (err) {
            reject(err);
        }
    }));
};
exports.getItem = (listTar) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (!listTar.classList.contains('bigeProcessed')) {
                yield scrollToElement_1.default(window.document.body, listTar);
                // todo schemorg setup from item push on response
                // response.push(listTar);
                listTar.classList.add('bigeProcessed');
                const scheme = yield productScheme_1.default(listTar);
                resolve(scheme);
            }
            else {
                resolve(null);
            }
        }
        catch (err) {
            reject("fail");
        }
    }));
};
//# sourceMappingURL=executePathSetup.js.map