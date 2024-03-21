
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

console.log("for( [i,e] of liste.entries()) { console.log(i,e)}")
for( [i,e] of liste.entries()) { console.log(i,e)} // alle indexes definiert aber e undefined
console.log("------------------------")



