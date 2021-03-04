# Bige Path Script eval

This repository contain basic functions extracted from BigePath Chrome Extension.
The object of this repo is to build an eval script library dedicated to APIM puppeteer eval from paths setups.

## How does bigepath_script

Bige path is wurrently under developpement...

BigePath is a chrome extension that allow you to bind elements from any website and store any paths as setups.
every setups has the same structure and thats the only scheme authorized by bigepath_script (this repo).

Once you've stored a setup on bige apim Path,
you'll be able to run yours setups from pathapi services.
Also pathapis gonna create a machine to evaluate your setup and retrieve yours dataset.

this is a complexe environement that necessite this small library...

Once puppeteer receive a demand from path this lib will be executed then retrieve you any kind of e-commerce website as product SchemaOrg augmented format.

## fonctionnalities 

- Scroll events
  - scrollToTarget 
  - scrollToBottom
  - animateScroll

- Parsers
  - prices // surch and retrieves prices detected in any text string value
  - offers // surch detect and retrieve an offers on page list items
  - pictures // get interligent list of pictures from any HTMLElement
  - getUrl // find a correct href url on any list items and prevent js events to get true URL
  - AttributeLike // allow you to search is an HTMLElement contain an attribute whos name like string
  - Attributes // retrieve a list of attributes detected on any HTMLElement
  - ItemProps // for worst websites that retrieve a list of HTMLElement attributes 
  - ToText  // simply retrieve HTMLElement parsed to text 

- Exec
  - bigePath(setup:SETUP) Once puppeteer has embeded bigepath_script lib its allowed to exec any setups from path

## Setup definition

This is the type scheme of any setups from path :
@param ID: number;
@param userID: number;
@param website: WEBSITE;
@param urls: Partial<URLS>[];
@param static: Partial<TARGET>[];
@param lists: Partial<LIST>[];
@param navigation: NAVIGATION;
@param created: number;
@param updated: number;

## whats does bigePath(setup)

