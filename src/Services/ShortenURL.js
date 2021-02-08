// sample tinyurlDomain
const serviceDomain = "http://rubinjohny.com/";
// using 6 chars for encoded string
const maxChars = 6;
// from the char set of [a-z][A-Z][0-9]
let charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
// this will give 62^6 possibilities
// we can increase the maxChars for more urls


let longToShortMap = new Map();
let shortToLongMap = new Map();

export const encode = function (longUrl) {
    if (longToShortMap.has(longUrl)) 
        return serviceDomain + longToShortMap.get(longUrl);

    let code = [...Array(maxChars)].map(_ => Math.floor(Math.random() * charSet.length)).map(i => charSet[i]).join("");

    longToShortMap.set(longUrl, code);
    shortToLongMap.set(code, longUrl);
    return serviceDomain + code;
};

export const decode = function (shortUrl) {
    let code = shortUrl.substr(-maxChars);

    if (!shortToLongMap.has(code))
        throw new Error(`${code} does not exist `);

    return shortToLongMap.get(code);
};

export const getMap = () => {

    const obj = Object.fromEntries(longToShortMap);
    const arr = Object.keys(obj)
        .filter(v => obj[v] != null)
        .map(key => ({ 
            longUrl:key,
            shortUrl: obj[key]
        }))

    return arr
}