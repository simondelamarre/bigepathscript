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


import scrollToBottom from "./events/scrollToBottom";
import scrollToElement from "./events/scrollToElement";
import { PRODUCTSCHEME } from "./types/ProductScheme";
import { SETUP } from "./types/Setup";
import productScheme from "./parsers/productScheme";
export const bigePath = async (setup: SETUP): Promise<any> => {
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
}

export const processLoadMoreButton = async (setup: SETUP, response: any[], callback: Function) => {
  // let response = [];
  for await (const list of setup.lists) {
    response = response.concat(response, await processListItem(list.target.selector));
  }
  const loadMore = document.querySelector(setup.navigation.loadMoreSelector);
  if (!loadMore) {
    callback(response);
    return response;
  } else {
    (loadMore as HTMLElement).click();
    setTimeout(function () {
      processLoadMoreButton(setup, response, callback);
    }, 1000);
  }
}

export const processScrollToBottom = async (setup: SETUP, response: any[], callback: Function) => {
  await scrollToBottom(window.document.body, 500);
  for await (const list of setup.lists) {
    response = response.concat(response, await processListItem(list.target.selector));
  }
  callback(response);
  return response;
}

export const processListItem = (selector: string) => {
  let response = [];
  return new Promise<PRODUCTSCHEME[]>(async (resolve, reject) => {
    const listTarget = document.querySelectorAll(selector);
    try {
      for await (const listTar of listTarget) {
        const data = await getItem(listTar as HTMLElement);
        if (data)
          response.push();
      }
      resolve(response);
    } catch (err) {
      reject(err);
    }
  });
}

export const getItem = (listTar: HTMLElement) => {
  return new Promise<Partial<PRODUCTSCHEME>>(async (resolve, reject) => {
    try {
      if (!listTar.classList.contains('bigeProcessed')) {
        await scrollToElement(window.document.body, (listTar as HTMLElement));
        // todo schemorg setup from item push on response
        // response.push(listTar);
        listTar.classList.add('bigeProcessed');
        const scheme = await productScheme(listTar as HTMLElement);
        resolve(scheme);
      } else {
        resolve(null);
      }
    } catch (err) {
      reject("fail");
    }
  })
}