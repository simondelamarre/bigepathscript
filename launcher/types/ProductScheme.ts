import { IMAGE } from "./Image"
import { MATERIAL } from "./Material"
import { OFFER } from "./Offers"
import { PRICE } from "./Price"

declare type RATING = {
    ratingValue: number;
    ratingCount: number;
}
declare type EnergyConsumptionDetails = {
    energyEfficiencyScaleMax: number;
    energyEfficiencyScaleMin: number;
    hasEnergyEfficiencyCategory: EUEnergyEfficiencyEnumeration; // Enum from EUEnergyEfficiencyEnumeration
    alternateName: string;
    description: string;
    disambiguatingDescription: string;
    identifier: string;
    potentialAction: string
}
declare enum EUEnergyEfficiencyEnumeration {
    A = "EUEnergyEfficiencyCategoryA",
    A1 = "EUEnergyEfficiencyCategoryA1Plus",
    A2 = "EUEnergyEfficiencyCategoryA2Plus",
    A3 = "EUEnergyEfficiencyCategoryA3Plus",
    B = "EUEnergyEfficiencyCategoryB",
    C = "EUEnergyEfficiencyCategoryC",
    D = "EUEnergyEfficiencyCategoryD",
    E = "EUEnergyEfficiencyCategoryE",
    F = "EUEnergyEfficiencyCategoryF",
    G = "EUEnergyEfficiencyCategoryG"
}
export declare type PRODUCTSCHEME = {
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