

// JSON 

//const obj =  JSON.parse

const laender = require("./countries.json")
//console.log(laender)

//const countries = require('./countries.json')
//console.log(countries);


let mensch = {
    namen: "Stefan",
    jahrgang: 1974,
    farbe: "blau",
    alter: function (jahr) {
        return jahr - this.jahrgang
    }


}


console.log( mensch.alter(2024) )

Object.keys(mensch)
Object.values(mensch)

for( key of Object.keys(mensch) ){
    console.log(key, mensch[key])
}




function alter(jahr) {
    if(!this.jahrgang) console.log("fehler")
    return jahr - this["jahrgang"]
}

console.log( alter(2024) )


