/**
 * Schreibe je eine Funtion add, substract, multiply, divide, die die
 * jeweilige Grundrechenart auf die beiden übergebenen Parameter A und B
 * anwendet. Verwende Arrow-Funktionen.
 */
// export const ...
// ...
// ...
// ...

// Kontrollfluss

// if

/**
 * Schreibe eine Funktion, die die Umsatzsteuer anhand des Umsatzes und des
 * Steuerjahres berechnet. Der Steuersatz beträgt 19%. Liegt der Umsatz unter
 * der Freigrenze von 17.500 EUR (für die Steuerjahre 2003-2019) bzw. 22.000 EUR
 * (für die Steuerjahre ab 2020) soll die Kleinunternehmerregelung angewendet
 * und keine Umsatzsteuer berechnet werden. Der Rückgabewert ist dann 0.
 * 
 * @param {*} umsatz 
 * @param {*} steuerjahr 
 * @returns 
 */
export function umsatzsteuer (umsatz, steuerjahr = 2024) {
    
    // ...
}

// switch

/**
 * Schreibe eine Funktion, die den Flächeninhalt verschiedener geometrischer
 * Formen berechnet. Die Funktion soll zwei Argumente erhalten:
 * Den Namen der geometrischen Form (circle, triangle, rectangle), sowie die
 * dafür relevanten Parameter als ein Objekt.
 * Für die Berechnung eines Kreises wird der Radius benötigt.
 * Für die Berechnung eines Dreieckes sowie eines Rechteckes werden die Länge
 * der Grundseite sowie die Höhe benötigt.
 * 
 * @param {*} shape 
 * @param {*} params 
 * @returns 
 */
export const area = (shape, params) => {
    
    // ...
}

// loops

/**
 * Schreibe eine Funktion, die alle Karten eines Kartenspiels jeweils mit ihrer
 * Farbe (Clubs, Spades, Hearts, Diamonds) und ihrem Wert (2 - 10, J, K, Q, A)
 * erzeugt.
 * Die Karten werden als Array bestehend aus Farbe und Wert dargestellt und alle
 * Karten in einem Array gesammelt zurückgegeben.
 * 
 * @returns 
 */
export function deckOfCards () {
    
    // ...
}

/**
 * Schreibe eine Funktion, die die ersten N Antworten für das FizzBuzz-Spiel
 * erzeugt und auf der Konsole ausgibt.
 * 
 * @param {*} n 
 * @see https://de.wikipedia.org/wiki/Fizz_buzz
 */
export function fizzbuzz (n) {
    
    // ...
}

// recursion

/**
 * Schreibe eine rekursive Funktion, die die N-te Fibonacci-Zahl berechnet.
 * 
 * @param {*} n 
 * @returns 
 * @see https://de.wikipedia.org/wiki/Fibonacci-Folge
 */
export function fibonacci (n) {
    
    // ...
}