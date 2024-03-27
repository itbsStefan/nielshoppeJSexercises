const inventar = [
    { name: "Apfel", kategorie: "Obst", anzahl: 10 },
    { name: "Banane", kategorie: "Obst", anzahl: 20 },
    { name: "Birne", kategorie: "Obst", anzahl: 15 },
    { name: "Karotte", kategorie: "Gemüse", anzahl: 10 },
    { name: "Spinat", kategorie: "Gemüse", anzahl: 5 },
    { name: "Kartoffel", kategorie: "Gemüse", anzahl: 25 }
  ];
  // Produkte nach Kategorie
console.log(inventar[0].kategorie)



  // Gesamtanzahl der Produkte im Inventar



  const buecher = [
    { titel: "Der Hobbit", autor: "J.R.R. Tolkien", jahr: 1937, gelesen: true },
    { titel: "Harry Potter und der Stein der Weisen", autor: "J.K. Rowling", jahr: 1997, gelesen: false },
    { titel: "1984", autor: "George Orwell", jahr: 1949, gelesen: true },
    { titel: "Brave New World", autor: "Aldous Huxley", jahr: 1932, gelesen: false }
  ];


const tiere = ["Katze","Hund","Kaninchen"]

console.log( tiere.includes("Elefant") )
console.log( tiere.includes("Hund") )
  

console.log( "bücher gelesen?" , buecher.some( x => x.gelesen==true )

const istGroesserAlsDrei = ( element => element > 3 )

function groesserDrei(zahl){
    if(zahl>3)
        return true
}

const zahlen1 = [1, 30, 39, 29, 10, 13];

console.log(zahlen.some(istGroesserAlsDrei)); // Gibt true aus, weil mindestens ein Element größer als 3 ist.



// buecher.forEach( console.log )

buecher.forEach( (wer,ind,all) => { console.log("Ausgabe Each",ind,wer.gelesen?"  gelesen":"ungelesen",wer.titel) } )

console.log( buecher.map( b => b.titel ) )

console.log("nicht gelesene Bücher", buecher.filter( b => !b.gelesen ) )


console.log(".jahr<1945", buecher.filter( x => x.jahr<1945 ) )


buecher.some()
