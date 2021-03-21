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
export const bigePath = async (setup: SETUP, callback: Function) => {
  console.log('bigePath');
  return new Promise(async resolve => {
    console.log('in promise');
    const response = {
      static: {
        url: window.location.href
      },
      list: [],
      pages: 0,
      message: "hello"
    };
    console.log('let try');
    try {
      response.message = "try";
      if (setup.static) {
        for (const stat of setup.static) {
          const statElement = document.querySelector(stat.selector);
          if (statElement)
            response.static[stat.label] = statElement.textContent;
        }
      }
      console.log('static passed');
      response.message = "static passed";
      console.log('setup.navigation ', setup.navigation);
      if (setup.navigation) {
        response.message = "has navigation " + setup.navigation;
        if (setup.navigation.mode === "loadMore") {
          console.log('load more nav mode');
          response.message = "waiting parser loadmore";
          await processLoadMoreButton(setup, response.list, 0, function (res, pages) {
            console.log('processed ', res);
            response.list = res;
            response.pages = pages;
            return res;
          });
          response.message = "processLoadMoreButton processed";
          console.log('will resolve');
          resolve(response);
        } else if (setup.navigation.mode === "scrollToBottom") {
          response.message = "waiting parser processScrollToBottom";
          response.list = await processScrollToBottom(setup, response.list, function (response) {
            return response;
          });
          resolve(response);
        } else if (setup.navigation.mode === "nextButton") {
          response.message = "waiting parser processScrollToBottom";
          for await (const list of setup.lists) {
            response.list = response.list.concat(response.list, await processListItem(list.target.selector));
          }
          resolve(response);
        }
      } else {
        callback({ response: response });
        resolve(response);
        return response;
      }
    } catch (err) {
      console.log('has error');
      callback({ response: response, err: err });
      resolve(response);
      return { error: err, message: "wrong path setup" }
    }
    callback({ response: response });
  });
}

export const processLoadMoreButton = async (setup: SETUP, response: any[], page: number, callback: Function) => {
  console.log('processLoadMoreButton ', response, setup.lists);
  // let response = [];
  for await (const list of setup.lists) {
    const news = await processListItem(list.target.selector);
    console.log('news ?? ', news, response);
    response = response.concat(news);
  }
  const loadMore = document.querySelector(setup.navigation.loadMoreSelector);
  if (!loadMore) {
    // process all when list load more is kicked
    callback(response, page);
    return response;
  } else {
    (loadMore as HTMLElement).click();
    setTimeout(function () {
      page++;
      processLoadMoreButton(setup, response, page, callback);
    }, 1000);
  }
}

export const processScrollToBottom = async (setup: SETUP, response: any[], callback: Function) => {
  await scrollToBottom(200);
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
        if (!listTar.classList.contains('processed')) {
          const data = await getItem(listTar as HTMLElement);
          if (data)
            response.push(data);
          listTar.classList.add('processed');
        }
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
        await scrollToElement((listTar as HTMLElement));
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

export const helloPuppeteer = async (str: string): Promise<string> => {
  return `hello ${str}`;
}
declare global {
  interface Window {
    bigePath: Function;
    helloPuppeteer: Function;
    scrollToBottom: Function;
  }
}
window.bigePath = bigePath;
window.helloPuppeteer = helloPuppeteer;
window.scrollToBottom = scrollToBottom;