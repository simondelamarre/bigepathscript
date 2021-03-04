/**
 * retrieve list of prices from string
 * @param {string} str // parsed string
 * @return {PRICE[]} [] list of prices in cents with devise
 */
const devises = ["EUR", " EUR", " €", "€", "EURO", "EUROS", "AFN", "AFGHANI", "ALL", "LEK", "DZD", "ALGERIAN DINAR", "USD", "US DOLLAR", "$", "AOA", "KWANZA", "XCD", "EAST CARIBBEAN DOLLAR", "ARS", "ARGENTINE PESO", "AMD", "ARMENIAN DRAM", "AWG", "ARUBAN FLORIN", "Ƒ", "AUD", "AUSTRALIAN DOLLAR", "AZN", "AZERBAIJANIAN MANAT", "₼", "BSD", "BAHAMIAN DOLLAR", "BHD", "BAHRAINI DINAR", "BDT", "TAKA", "BBD", "BARBADOS DOLLAR", "BYN", "BELARUSSIAN RUBLE", "BR", "BZD", "BELIZE DOLLAR", "BZ\\$", "XOF", "CFA FRANC BCEAO", "BMD", "BERMUDIAN DOLLAR", "BTN", "NGULTRUM", "INR", "INDIAN RUPEE", "", "BOB", "BOLIVIANO", "$B", "BOV", "MVDOL", "BAM", "؋", "CONVERTIBLE MARK", "KM", "BWP", "PULA", "NOK", "NORWEGIAN KRONE", "KR", "BRL", "BRAZILIAN REAL", "R\\$", "BND", "BRUNEI DOLLAR", "BGN", "BULGARIAN LEV", "ЛВ", "BIF", "BURUNDI FRANC", "CVE", "CABO VERDE ESCUDO", "KHR", "RIEL", "៛", "XAF", "CFA FRANC BEAC", "CAD", "CANADIAN DOLLAR", "KYD", "CAYMAN ISLANDS DOLLAR", "CLF", "UNIDAD DE FOMENTO", "CLP", "CHILEAN PESO", "CNY", "YUAN RENMINBI", "¥", "COP", "COLOMBIAN PESO", "COU", "UNIDAD DE VALOR REAL", "KMF", "COMORO FRANC", "CDF", "CONGOLESE FRANC", "NZD", "NEW ZEALAND DOLLAR", "CRC", "COSTA RICAN COLON", "₡", "HRK", "KUNA", "KN", "CUC", "PESO CONVERTIBLE", "CUP", "CUBAN PESO", "₱", "ANG", "NETHERLANDS ANTILLEAN GUILDER", "Ƒ", "CZK", "CZECH KORUNA", "KČ", "DKK", "DANISH KRONE", "KR", "DJF", "DJIBOUTI FRANC", "DOP", "DOMINICAN PESO", "RD\\$", "EGP", "EGYPTIAN POUND", "£", "SVC", "EL SALVADOR COLON", "ERN", "NAKFA", "ETB", "ETHIOPIAN BIRR", "FKP", "FALKLAND ISLANDS POUND", "£", "FJD", "FIJI DOLLAR", "XPF", "CFP FRANC", "GMD", "DALASI", "GEL", "LARI", "GHS", "GHANA CEDI", "¢", "GIP", "GIBRALTAR POUND", "£", "GTQ", "QUETZAL", "Q", "GBP", "POUND STERLING", "£", "GNF", "GUINEA FRANC", "GYD", "GUYANA DOLLAR", "HTG", "GOURDE", "HNL", "LEMPIRA", "L", "HKD", "HONG KONG DOLLAR", "HUF", "FORINT", "FT", "ISK", "ICELAND KRONA", "KR", "IDR", "RUPIAH", "RP", "XDR", "SDR (SPECIAL DRAWING RIGHT)", "IRR", "IRANIAN RIAL", "﷼", "IQD", "IRAQI DINAR", "ILS", "NEW ISRAELI SHEQEL", "₪", "JMD", "JAMAICAN DOLLAR", "J\\$", "JPY", "YEN", "¥", "JOD", "JORDANIAN DINAR", "KZT", "TENGE", "ЛВ", "KES", "KENYAN SHILLING", "KPW", "NORTH KOREAN WON", "₩", "KRW", "WON", "₩", "KWD", "KUWAITI DINAR", "KGS", "SOM", "ЛВ", "LAK", "KIP", "₭", "LBP", "LEBANESE POUND", "£", "LSL", "LOTI", "ZAR", "RAND", "R", "LRD", "LIBERIAN DOLLAR", "LYD", "LIBYAN DINAR", "CHF", "SWISS FRANC", "MOP", "PATACA", "MGA", "MALAGASY ARIARY", "MWK", "KWACHA", "MYR", "MALAYSIAN RINGGIT", "RM", "MVR", "RUFIYAA", "MRU", "OUGUIYA", "MUR", "MAURITIUS RUPEE", "₨", "XUA", "ADB UNIT OF ACCOUNT", "MXN", "MEXICAN PESO", "MXV", "MEXICAN UNIDAD DE INVERSION (UDI)", "MDL", "MOLDOVAN LEU", "MNT", "TUGRIK", "₮", "MAD", "MOROCCAN DIRHAM", "MZN", "MOZAMBIQUE METICAL", "MT", "MMK", "KYAT", "NAD", "NAMIBIA DOLLAR", "NPR", "NEPALESE RUPEE", "₨", "NIO", "CORDOBA ORO", "C\\$", "NGN", "NAIRA", "₦", "OMR", "RIAL OMANI", "﷼", "PKR", "PAKISTAN RUPEE", "₨", "PAB", "BALBOA", "B/.", "PGK", "KINA", "PYG", "GUARANI", "GS", "PEN", "NUEVO SOL", "S/.", "PHP", "PHILIPPINE PESO", "₱", "PLN", "ZLOTY", "ZŁ", "QAR", "QATARI RIAL", "﷼", "MKD", "DENAR", "ДЕН", "RON", "ROMANIAN LEU", "LEI", "RUB", "RUSSIAN RUBLE", "₽", "RWF", "RWANDA FRANC", "SHP", "SAINT HELENA POUND", "£", "WST", "TALA", "STN", "DOBRA", "SAR", "SAUDI RIYAL", "﷼", "RSD", "SERBIAN DINAR", "ДИН.", "SCR", "SEYCHELLES RUPEE", "₨", "SLL", "LEONE", "SGD", "SINGAPORE DOLLAR", "XSU", "SUCRE", "SBD", "SOLOMON ISLANDS DOLLAR", "SOS", "SOMALI SHILLING", "S", "SSP", "SOUTH SUDANESE POUND", "LKR", "SRI LANKA RUPEE", "₨", "SDG", "SUDANESE POUND", "SRD", "SURINAM DOLLAR", "SZL", "LILANGENI", "SEK", "SWEDISH KRONA", "KR", "CHE", "WIR EURO", "CHW", "WIR FRANC", "SYP", "SYRIAN POUND", "£", "TWD", "NEW TAIWAN DOLLAR", "NT\\$", "TJS", "SOMONI", "TZS", "TANZANIAN SHILLING", "THB", "BAHT", "฿", "TOP", "PA’ANGA", "TTD", "TRINIDAD AND TOBAGO DOLLAR", "TT\\$", "TND", "TUNISIAN DINAR", "TRY", "TURKISH LIRA", "", "TMT", "TURKMENISTAN NEW MANAT", "UGX", "UGANDA SHILLING", "UAH", "HRYVNIA", "₴", "AED", "UAE DIRHAM", "USN", "US DOLLAR (NEXT DAY)", "UYI", "URUGUAY PESO EN UNIDADES INDEXADAS (URUIURUI)", "UYU", "PESO URUGUAYO", "$U", "UZS", "UZBEKISTAN SUM", "ЛВ", "VUV", "VATU", "VEF", "BOLIVAR", "BS", "VND", "DONG", "₫", "YER", "YEMENI RIAL", "﷼", "ZMW", "ZAMBIAN KWACHA", "ZWL", "ZIMBABWE DOLLAR"];
export default (str) => {
    str = str.replace(/ +/g, ' ');
    let allPrices = [];
    // todo while break;
    let match = false;
    for (const devise of devises) {
        if (!match && devise && devise !== "") {
            // const middleReg = new RegExp(`\\d+(\\[${devise}]}+)\\d+`, 'g');
            try {
                const middleReg = new RegExp(`\\d+(\\${devise}+)\\d+`, 'g');
                if (str.match(middleReg)) {
                    match = true;
                    allPrices = allPrices.concat(str.match(middleReg));
                }
                else {
                    const startReg = new RegExp(`\\${devise}((?:\\d|\\,)*\\.?\\d+)`, 'g');
                    if (str.match(startReg)) {
                        match = true;
                        allPrices = allPrices.concat(str.match(startReg) || []);
                    }
                    const endReg = new RegExp(`((?:\\d|\\,)*\\.?\\d+)\\${devise}`, 'g');
                    if (str.match(endReg) && !match) {
                        match = true;
                        allPrices = allPrices.concat(str.match(endReg) || []);
                    }
                }
            }
            catch (err) {
                console.error(err);
            }
        }
    }
    const priceList = [];
    for (const price of allPrices) {
        /* eslint-disable */
        const separator = price.match(/\d+(\D+)\d+/g);
        let integer = parseInt(price.replace(/[^\d]/g, ""));
        /* eslint-disable */
        const devise = price.replace(/\,|\.|\d/g, "");
        if (!separator)
            integer = integer * 100;
        priceList.push({ price: integer, devise: getDevise(devise) });
    }
    return priceList
        .filter((e, i) => priceList.findIndex(x => x.price === e.price && x.devise === e.devise) === i)
        .sort((a, b) => a.price - b.price);
};
export const getDevise = (devise) => {
    if (!devise) {
        return 'EUR';
    }
    devise = devise.replace(/\s/g, '');
    let response = devise;
    if (Object.keys(currency).includes(devise))
        return devise;
    for (const cur of Object.keys(currency)) {
        if (currency[cur].indexOf(devise))
            return cur;
    }
    return response;
};
const currency = {
    "EUR": ["EUR", "Euro", "Euros", "€"],
    "USD": ["USD", "US Dollar", "$"],
    "AFN": ["AFN", "Afghani", "؋"],
    "ALL": ["ALL", "Lek"],
    "DZD": ["DZD", "Algerian Dinar"],
    "AOA": ["AOA", "Kwanza"],
    "XCD": ["XCD", "East Caribbean Dollar", "$"],
    "ARS": ["ARS", "Argentine Peso", "$"],
    "AMD": ["AMD", "Armenian Dram"],
    "AWG": ["AWG", "Aruban Florin", "ƒ"],
    "AUD": ["AUD", "Australian Dollar", "$"],
    "AZN": ["AZN", "Azerbaijanian Manat", "₼"],
    "BSD": ["BSD", "Bahamian Dollar", "$"],
    "BHD": ["BHD", "Bahraini Dinar"],
    "BDT": ["BDT", "Taka"],
    "BBD": ["BBD", "Barbados Dollar", "$"],
    "BYN": ["BYN", "Belarussian Ruble", "Br"],
    "BZD": ["BZD", "Belize Dollar", "BZ$"],
    "XOF": ["XOF", "CFA Franc BCEAO"],
    "BMD": ["BMD", "Bermudian Dollar", "$"],
    "BTN": ["BTN", "Ngultrum"],
    "INR": ["INR", "Indian Rupee", ""],
    "BOB": ["BOB", "Boliviano", "$b"],
    "BOV": ["BOV", "Mvdol"],
    "BAM": ["BAM", "Convertible Mark", "KM"],
    "BWP": ["BWP", "Pula", "P"],
    "NOK": ["NOK", "Norwegian Krone", "kr"],
    "BRL": ["BRL", "Brazilian Real", "R$"],
    "BND": ["BND", "Brunei Dollar", "$"],
    "BGN": ["BGN", "Bulgarian Lev", "лв"],
    "BIF": ["BIF", "Burundi Franc"],
    "CVE": ["CVE", "Cabo Verde Escudo"],
    "KHR": ["KHR", "Riel", "៛"],
    "XAF": ["XAF", "CFA Franc BEAC"],
    "CAD": ["CAD", "Canadian Dollar", "$"],
    "KYD": ["KYD", "Cayman Islands Dollar", "$"],
    "CLF": ["CLF", "Unidad de Fomento"],
    "CLP": ["CLP", "Chilean Peso", "$"],
    "CNY": ["CNY", "Yuan Renminbi", "¥"],
    "COP": ["COP", "Colombian Peso", "$"],
    "COU": ["COU", "Unidad de Valor Real"],
    "KMF": ["KMF", "Comoro Franc"],
    "CDF": ["CDF", "Congolese Franc"],
    "NZD": ["NZD", "New Zealand Dollar", "$"],
    "CRC": ["CRC", "Costa Rican Colon", "₡"],
    "HRK": ["HRK", "Kuna", "kn"],
    "CUC": ["CUC", "Peso Convertible"],
    "CUP": ["CUP", "Cuban Peso", "₱"],
    "ANG": ["ANG", "Netherlands Antillean Guilder", "ƒ"],
    "CZK": ["CZK", "Czech Koruna", "Kč"],
    "DKK": ["DKK", "Danish Krone", "kr"],
    "DJF": ["DJF", "Djibouti Franc"],
    "DOP": ["DOP", "Dominican Peso", "RD$"],
    "EGP": ["EGP", "Egyptian Pound", "£"],
    "SVC": ["SVC", "El Salvador Colon", "$"],
    "ERN": ["ERN", "Nakfa"],
    "ETB": ["ETB", "Ethiopian Birr"],
    "FKP": ["FKP", "Falkland Islands Pound", "£"],
    "FJD": ["FJD", "Fiji Dollar", "$"],
    "XPF": ["XPF", "CFP Franc"],
    "GMD": ["GMD", "Dalasi"],
    "GEL": ["GEL", "Lari"],
    "GHS": ["GHS", "Ghana Cedi", "¢"],
    "GIP": ["GIP", "Gibraltar Pound", "£"],
    "GTQ": ["GTQ", "Quetzal", "Q"],
    "GBP": ["GBP", "Pound Sterling", "£"],
    "GNF": ["GNF", "Guinea Franc"],
    "GYD": ["GYD", "Guyana Dollar", "$"],
    "HTG": ["HTG", "Gourde"],
    "HNL": ["HNL", "Lempira", "L"],
    "HKD": ["HKD", "Hong Kong Dollar", "$"],
    "HUF": ["HUF", "Forint", "Ft"],
    "ISK": ["ISK", "Iceland Krona", "kr"],
    "IDR": ["IDR", "Rupiah", "Rp"],
    "XDR": ["XDR", "SDR (Special Drawing Right)"],
    "IRR": ["IRR", "Iranian Rial", "﷼"],
    "IQD": ["IQD", "Iraqi Dinar"],
    "ILS": ["ILS", "New Israeli Sheqel", "₪"],
    "JMD": ["JMD", "Jamaican Dollar", "J$"],
    "JPY": ["JPY", "Yen", "¥"],
    "JOD": ["JOD", "Jordanian Dinar"],
    "KZT": ["KZT", "Tenge", "лв"],
    "KES": ["KES", "Kenyan Shilling"],
    "KPW": ["KPW", "North Korean Won", "₩"],
    "KRW": ["KRW", "Won", "₩"],
    "KWD": ["KWD", "Kuwaiti Dinar"],
    "KGS": ["KGS", "Som", "лв"],
    "LAK": ["LAK", "Kip", "₭"],
    "LBP": ["LBP", "Lebanese Pound", "£"],
    "LSL": ["LSL", "Loti"],
    "ZAR": ["ZAR", "Rand", "R"],
    "LRD": ["LRD", "Liberian Dollar", "$"],
    "LYD": ["LYD", "Libyan Dinar"],
    "CHF": ["CHF", "Swiss Franc"],
    "MOP": ["MOP", "Pataca"],
    "MGA": ["MGA", "Malagasy Ariary"],
    "MWK": ["MWK", "Kwacha"],
    "MYR": ["MYR", "Malaysian Ringgit", "RM"],
    "MVR": ["MVR", "Rufiyaa"],
    "MRU": ["MRU", "Ouguiya"],
    "MUR": ["MUR", "Mauritius Rupee", "₨"],
    "XUA": ["XUA", "ADB Unit of Account"],
    "MXN": ["MXN", "Mexican Peso", "$"],
    "MXV": ["MXV", "Mexican Unidad de Inversion (UDI)"],
    "MDL": ["MDL", "Moldovan Leu"],
    "MNT": ["MNT", "Tugrik", "₮"],
    "MAD": ["MAD", "Moroccan Dirham"],
    "MZN": ["MZN", "Mozambique Metical", "MT"],
    "MMK": ["MMK", "Kyat"],
    "NAD": ["NAD", "Namibia Dollar", "$"],
    "NPR": ["NPR", "Nepalese Rupee", "₨"],
    "NIO": ["NIO", "Cordoba Oro", "C$"],
    "NGN": ["NGN", "Naira", "₦"],
    "OMR": ["OMR", "Rial Omani", "﷼"],
    "PKR": ["PKR", "Pakistan Rupee", "₨"],
    "PAB": ["PAB", "Balboa", "B/."],
    "PGK": ["PGK", "Kina"],
    "PYG": ["PYG", "Guarani", "Gs"],
    "PEN": ["PEN", "Nuevo Sol", "S/."],
    "PHP": ["PHP", "Philippine Peso", "₱"],
    "PLN": ["PLN", "Zloty", "zł"],
    "QAR": ["QAR", "Qatari Rial", "﷼"],
    "MKD": ["MKD", "Denar", "ден"],
    "RON": ["RON", "Romanian Leu", "lei"],
    "RUB": ["RUB", "Russian Ruble", "₽"],
    "RWF": ["RWF", "Rwanda Franc"],
    "SHP": ["SHP", "Saint Helena Pound", "£"],
    "WST": ["WST", "Tala"],
    "STN": ["STN", "Dobra"],
    "SAR": ["SAR", "Saudi Riyal", "﷼"],
    "RSD": ["RSD", "Serbian Dinar", "Дин."],
    "SCR": ["SCR", "Seychelles Rupee", "₨"],
    "SLL": ["SLL", "Leone"],
    "SGD": ["SGD", "Singapore Dollar", "$"],
    "XSU": ["XSU", "Sucre"],
    "SBD": ["SBD", "Solomon Islands Dollar", "$"],
    "SOS": ["SOS", "Somali Shilling", "S"],
    "SSP": ["SSP", "South Sudanese Pound"],
    "LKR": ["LKR", "Sri Lanka Rupee", "₨"],
    "SDG": ["SDG", "Sudanese Pound"],
    "SRD": ["SRD", "Surinam Dollar", "$"],
    "SZL": ["SZL", "Lilangeni"],
    "SEK": ["SEK", "Swedish Krona", "kr"],
    "CHE": ["CHE", "WIR Euro"],
    "CHW": ["CHW", "WIR Franc"],
    "SYP": ["SYP", "Syrian Pound", "£"],
    "TWD": ["TWD", "New Taiwan Dollar", "NT$"],
    "TJS": ["TJS", "Somoni"],
    "TZS": ["TZS", "Tanzanian Shilling"],
    "THB": ["THB", "Baht", "฿"],
    "TOP": ["TOP", "Pa’anga"],
    "TTD": ["TTD", "Trinidad and Tobago Dollar", "TT$"],
    "TND": ["TND", "Tunisian Dinar"],
    "TRY": ["TRY", "Turkish Lira", ""],
    "TMT": ["TMT", "Turkmenistan New Manat"],
    "UGX": ["UGX", "Uganda Shilling"],
    "UAH": ["UAH", "Hryvnia", "₴"],
    "AED": ["AED", "UAE Dirham"],
    "USN": ["USN", "US Dollar (Next day)"],
    "UYI": ["UYI", "Uruguay Peso en Unidades Indexadas (URUIURUI)"],
    "UYU": ["UYU", "Peso Uruguayo", "$U"],
    "UZS": ["UZS", "Uzbekistan Sum", "лв"],
    "VUV": ["VUV", "Vatu"],
    "VEF": ["VEF", "Bolivar", "Bs"],
    "VND": ["VND", "Dong", "₫"],
    "YER": ["YER", "Yemeni Rial", "﷼"],
    "ZMW": ["ZMW", "Zambian Kwacha"],
    "ZWL": ["ZWL", "Zimbabwe Dollar"]
};
//# sourceMappingURL=PriceParser.js.map