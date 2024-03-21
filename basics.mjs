/**
 * Schreibe je eine Funtion add, substract, multiply, divide, die die
 * jeweilige Grundrechenart auf die beiden übergebenen Parameter A und B
 * anwendet. Verwende Arrow-Funktionen.
 */
// export const ...
// ...
export const add = (A,B) => {
    return 8 //  A+B
}

export const substract = (A,B) => {
    return A-B
}

export const multiply = (A,B) => {
    return A*B
}

export const divide = (A,B) => {
    return A/B
}
// ...
const A = 6
const B = 7
console.log("Grundrechenart mit",A,"und",B)
console.log(add(A,B),substract(A,B),multiply(A,B),divide(A,B))

/**
 * Schreibe eine Funktion, die eine Temeratur in Celsius in eine Temperatur in
 * Fahrenheit umrechnet.
 * 
 * @param {*} celsius 
 */
export function inFahrenheit (celsius) {

    // ...
}

/**
 * Schreibe eine Funktion, die eine Temeratur in Fahrenheit in eine Temperatur
 * in Celsius umrechnet.
 * 
 * @param {*} celsius 
 */
export const inCelsius = (fahrenheit) => {

    // ...
}

/**
 * Schreibe eine Funktion, die prüft, ob eine Zahl gerade ist.
 */
export const isEven = () => undefined // TODO

/**
 * Schreibe eine Funktion, die prüft, ob eine Zahl ungerade ist.
 */
export const isOdd = () => undefined // TODO

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
    let r = (umsatz * 0.19)

    if (steuerjahr<2007) {
        r = ((umsatz-17500) * 0.16) // Verbrauchersteuer von 16 auf 19 Prozent. „Haushaltsbegleitgesetz 2006“
    }

    if(steuerjahr == 2020){
        r = ((umsatz-17500) * 0.16)
        console.log("In Deutschland wurde der reguläre Mehrwertsteuersatz ab dem 01. Juli 2020 bis zum Ende des Jahres von 19 auf 16 Prozent gesenkt. Der ermäßigte Steuersatz wurde von 7 auf 5 Prozent reduziert.")
    }

    if(steuerjahr >= 2006 && steuerjahr <= 2019) {
        r = 0
        console.log("Kleinunternehmerregelung 17.500 EUR")
        r = ((umsatz-17500)* 0.19)
    }
    
    if(steuerjahr >= 2020) {
        console.log("Kleinunternehmerregelung",umsatz, steuerjahr)
        r = 0
        if(umsatz > 22000) {
            r = ((umsatz-22000)* 0.19)
        }
    }

    if(steuerjahr > new Date().getFullYear()) 
        console.log("Frage die zukunfts KI im Internet nach den Steuersatz!\n")
    return r
    // ...
}
console.log(umsatzsteuer(20000,2020),"\n",umsatzsteuer(620000,2030))
console.log(umsatzsteuer(18000, 2023))
// switch

/**
 * Schreibe eine Funktion, die den Flächeninhalt verschiedener geometrischer
 * Formen berechnet. Die Funktion soll zwei Argumente erhalten:
 * Den Namen der geometrischen Form (circle, triangle, rectangle), sowie die
 * dafür relevanten Parameter als ein Objekt.
 * Für die Berechnung eines Kreises wird der Radius (radius) benötigt.
 * Für die Berechnung eines Dreieckes sowie eines Rechteckes werden die Länge
 * der Grundseite (base) sowie die Höhe (height) benötigt.
 * 
 * @param {*} shape 
 * @param {*} params 
 * @returns 
 */
export const area = (shape, params) => {
    let  flaecheninhalt
    switch(shape) {
        case "circle":
            flaecheninhalt = Math.PI * params.radius**2
            break
        case "triangle":
            flaecheninhalt = 0.5 * (params.base*params.height)
            break
        case "rectangle":
            flaecheninhalt = (params.base*params.height)
            break
        default:
            console.log("nicht implementierte Form.")
    }
        return flaecheninhalt
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
    let karten = []
    let farbe = ["Clubs", "Spades", "Hearts", "Diamonds"]
    let karte = [2,3,4,5,6,7,8,9,10,'J','Q','K','A']
    
    for(let i=0;i<farbe.length;i++){
        for(let j=0;j<karte.length;j++){
            karten.push(farbe[i]+karte[j]) 
        }
    }
    return karten
}
console.log("Kartenspiels",deckOfCards())


/**
 * Schreibe eine Funktion, die die ersten N Antworten für das FizzBuzz-Spiel
 * erzeugt und auf der Konsole ausgibt.
 * 
 * @param {*} n 
 * @see https://de.wikipedia.org/wiki/Fizz_buzz
 * 
 * Eine typische Runde Fizz Buzz würde beispielsweise wie folgt beginnen:
 * 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz …
 */
export function fizzbuzz(n) {
    //console.log(n)
    let m = n-1
    if(m <= 0){
        console.log(n)
        return
    }else{
        fizzbuzz(m)
    }
    if( (n%3 == 0) && (n%5 == 0) ){
        console.log("fizz buzz")
    }else if(n%3 == 0){
        console.log("fizz")
    }else if(n%5 == 0){
        console.log("buzz")
    }else{
        console.log(n)
    }
}
console.log("Das war Aufruf fizzbuzz(42)")

// recursion

/**
 * Schreibe eine rekursive Funktion, die die N-te Fibonacci-Zahl berechnet.
 * 
 * @param {*} n 
 * @returns n-th Fibonacci number
 * @see https://de.wikipedia.org/wiki/Fibonacci-Folge
 */
export function fibonacci(n) {
    if(n == 0) {
        return 0
    }
    if(n == 1) {
        return 1
    }
    if(n == 2) {
        return 1
    }
    let n1 = n-1
    let n2 = n-2
    let x1 = fibonacci(n1)
    let x2 = fibonacci(n2)
    return (x1 + x2)
}

for(let i = 1;i<=15;i++) {
//    console.log(`fibonacci(${i})`,fibonacci(i))
}


