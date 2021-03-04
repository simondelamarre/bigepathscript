export declare type RGB = {
    r: number;
    g: number;
    b: number;
    weight: number;
}
export declare type IMAGE = {
    image: string;
    url: string;
    size: number;
    width: number;
    height: number;
    dominant: RGB;
    panel: RGB[];
    embedUrl: string;
    description: string;
    tags: string[];
}