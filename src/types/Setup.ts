export declare type SETUP = {
  ID: number;
  userID: number;
  website: WEBSITE;
  urls: Partial<URLS>[];
  static: Partial<TARGET>[];
  lists: Partial<LIST>[];
  navigation: NAVIGATION;
  created: number;
  updated: number;
}

export declare type WEBSITE = {
  url: string;
  refresh: string;
  brand: string;
  country: string;
  searchURL: string;
}

export declare type TARGET = {
  label: string;
  selector: string;
}

export declare type LIST = {
  target: Partial<TARGET>;
  additional: Partial<TARGET>[];
}

export declare type NAVIGATION = {
  mode: string;
  nextSelector: string | null;
  loadMoreSelector: string | null;
}

export declare type URLS = {
  url: string;
  tags: string[];
  lastVisit: number;
}