
function die_sich_selbst_aufruft(argument) {
    // rekursions-Anker ( stop )
    if(argument < 2) {return }

    console.log(argument)

    die_sich_selbst_aufruft(argument-1)
}


die_sich_selbst_aufruft(4)
