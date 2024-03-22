
/**
 * Die folgenden drei Zeilen braucht ihr nicht verstehen!
 * ( Dürft ihr aber, wenn ich wollt. ;-) )
 */
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const countries = require("./countries.json");

console.log(countries);



/**
 * Schreibe eine Funktion, die ein Land daraufhin prüft, ob es in Europa liegt.
 * 
 * @param {*} country 
 * @returns 
 */
export function isEurope (country) {

    // ...
}

/**
 * Schreibe eine Funktion, die den official name eines Landes zurückgibt.
 * 
 * @param {*} country 
 * @returns 
 */
export function officialName(country) {
    
    // ...
}

/**
 * Schreibe eine Funktion, die alle Namen (common, official, native, ...) eines
 * Landes in einer Liste zurück gibt.
 * 
 * @param {*} country 
 * @returns 
 */
export function allNames (country) {

    // ...
}

/**
 * Schreibe eine Funktion, die ein Objekt nach einer Liste von keys filtert und
 * ein neues Objekt zurückgibt, welches nur die angegebenen keys sowie die
 * dazugehörigen Werte enthält.
 * 
 * @param {*} obj 
 * @param {*} keys 
 * @returns 
 */
export function filterKeys (obj, keys) {
    
    // ...
}
