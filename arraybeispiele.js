
console.log("------------------------")
console.log("Beispiele Array und Listen")
console.log("------------------------")

let liste = []
const array = [] // keine neue zuweisung möglich

liste = ["Apfel",1,null,true,"Banane","wird entfernt"]
liste.pop()

liste.push("Wert für index 5")

console.log("liste.length","letzte Wert","at1","at-1","at10","at-10")
console.log(liste.length,
liste[liste.length-1],
liste.at(1),
liste.at(-1),
liste.at(10),
liste.at(-10)
)

liste[10]=42
console.log(liste.at(-11),liste[liste.length-1],liste[0])
console.log("------------------------")

for(let i=0;i<liste.length;i++) {
    console.log(i,liste.at(i))
}
console.log("------------------------")

console.log("for(i in liste) {console.log(liste[i])}")
for(i in liste) {console.log(liste[i])} // überspringt undefined indexes
console.log("------------------------")

// gleichwertig nur mit if()
console.log("for(let i=0;i<liste.length;i++){if(liste.at(i)) console.log(liste.at(i),i)}")
for(let i=0;i<liste.length;i++){if(liste.at(i)) console.log(liste.at(i),i)}
console.log("------------------------")

console.log("for(werte of liste) {console.log(werte)}")
for(werte of liste) {console.log(werte)} // gibt alles aus 
// 1 2
// 2 undefined
// undefined undefined
/// 42 undefined
console.log("------------------------")

console.log("for(wert of liste) {if(wert)console.log(wert)}")
for(wert of liste) {if(wert)console.log(wert)}
// 1 2
// 2 undefined
console.log("------------------------")

//Object.keys(mensch)
//Object.values(mensch)
//Object.entries()

liste.keys()
liste.values()
liste.entries()

console.log("for( [i,e] of liste.entries()) { console.log(i,e)}")
for( [i,e] of liste.entries()) { console.log(i,e)} // alle indexes definiert aber e undefined
console.log("------------------------")


console.log("---undef=forEach--map--filter-----Liste=[].Expressions()------")

let ind =100
console.log("forEach", liste.forEach( (wer,ind) => { console.log(wer,ind) } ) )

const zahlen = [1,2,3,42]
let neu = []

neu = zahlen.map( (e,i) => { return 2*e } )
console.log("Typeof map", typeof neu,neu ) 
neu.forEach( (wer,ind,all) => { console.log("neu von Map",ind,wer,all) } )


neu = zahlen.filter( (element, index) => {return ((element%2==0)? true:false) } )
console.log("Typeof filter", typeof neu,neu ) 
//neu.forEach( (wer,ind) => { console.log("neu von Filter",ind,wer) } )
neu.forEach( console.log )

console.log("filter", zahlen,neu ) 


// in node console
// ( (a,x=2) => console.log(a) )(h)





