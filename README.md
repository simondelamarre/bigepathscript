# Bige Path Script eval

This repository contain basic functions extracted from BigePath Chrome Extension.
The object of this repo is to build an eval script library dedicated to APIM puppeteer eval from paths setups.

## What is bigepath_script ?

Bige path is wurrently under developpement...

BigePath is a chrome extension that allow you to bind elements from any website and store any paths as setups.
every setups has the same structure and thats the only scheme authorized by bigepath_script (this repo).

Once you've stored a setup on bige apim Path,
you'll be able to run yours setups from pathapi services.
Also pathapis gonna create a machine to evaluate your setup and retrieve yours dataset.

this is a complexe environement that necessite this small library...

Once puppeteer receive a demand from path this lib will be executed then retrieve you any kind of e-commerce website as product SchemaOrg augmented format.

## Fonctionnalities 

- Scroll events
  - scrollToTarget // prevent lazyloading images processor
  - scrollToBottom // enable scroll to bottom websites to get complete items list on a page
  - animateScroll // delayed and natural scroll event to prevent lazyloading and a part of bot detection

- Parsers
  - prices // surch and retrieves prices detected in any text string value
  - offers // surch detect and retrieve an offers on page list items
  - pictures // get interligent list of pictures from any HTMLElement
  - getUrl // find a correct href url on any list items and prevent js events to get true URL
  - AttributeLike // allow you to search is an HTMLElement contain an attribute whos name like string
  - Attributes // retrieve a list of attributes detected on any HTMLElement
  - ItemProps // for worst websites that retrieve a list of HTMLElement attributes 
  - ToText  // simply retrieve HTMLElement parsed to text 
  - Material //  Not implemented - it will detect and retrieve materials dedicated to wears product items
  - Tags // not implementeed - thats a text processor that create string[] tags from text content
  - Mannufacturer // not implemented due to unknown value on any tested websites

- Basic Processor
  - by enabling image processor in your setup anevery images will be tagged and parsed to retrieve colors
  - parser processor : add tags string[] to IMAGE from mobilenet image classifier module
  - color processor : get dominant from picture and retrieve list with weight

- Exec
  - bigePath(setup:SETUP) Once puppeteer has embeded bigepath_script lib its allowed to exec any setups from path

## Setup definition

This is the type scheme of any setups from path :
- @param ID: number; // Until thats just you setup ID
- @param userID: number; // Need an APIM account to store setup
- @param website: WEBSITE; // Website setup by brand url and country
- @param urls: Partial<URLS>[]; // list of urls to visit
- @param static: Partial<TARGET>[]; // dedicated to product pages
- @param lists: Partial<LIST>[]; // dedicated to pages list
- @param navigation: NAVIGATION; // website page list navigation mode
- [...until] created, updated, ID (...) from pathapi

to learn more about setups please refer to the bigepathapi :
- original : https://pathapi.herokuapp.com/
- apim API : https://apim.bige.dev/gateway/api/38

## whats does bigePath(setup)

- check and parse static element from setup
- check lists loop items and parse to ProductScheme
- check navigation mode
  - scrollToBottom
    - wait page reload then loop list again
  - loadMore
    - hit load moore button then loop list again
  - nextPage
    - retrieve next page url then refresh tab each time next button exist


Once the setup is complete this script retrieve a Partial<PRODUCTSCHEME>[] :

```javascript
PRODUCTSCHEME = {
    brand: string;
    category: string;
    color: string;
    additionalProperty: { [key: string]: string };
    aggregateRating: Partial<RATING>;
    description: string;
    name: string;
    model: string;
    image: Partial<IMAGE>;
    pictures: Partial<IMAGE>[];
    sameAs: string;
    sku: string;
    productID: string;
    releaseDate: Date;
    purchaseDate: Date;
    manufacturer: string;
    logo: string;
    material: Partial<MATERIAL>[];
    url: string;
    price: Partial<PRICE>;
    prices: Partial<PRICE>[];
    sizes: string[];
    offers: OFFER[];
    hasEnergyConsumptionDetails: boolean;
    EnergyConsumptionDetails: Partial<EnergyConsumptionDetails>;
    availlability: boolean;
    tags: string[];
}
```

This is an interesting extraction from https://schema.org/Product to parse some kinds of ecommerce product items has standard that permit pathapi to analyse any website dataset.


## Test mode

Currently in studies, tests are too complicate due to dependencies and APIs needs...
It can be processed only with setup from pathapi and tab execution from puppeteer so
Tests has been removed from this repository because itsmake no sens outside of the APIM.bige.dev environment.

Also pathapi uses other APIs from APIM such as puppeteer, image processor and much more to run right.