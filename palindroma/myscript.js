// scrivere una funzione per capire se una parola è palindroma. Quindi chiedere una parola all'utente, utilizzare la funzione per sapere se la parola inserita è palindroma e stampare un messaggio appropriato

// Scrivo una var di prova
var parola = prompt('Digita una parola');
console.log(parola);
// apro una variabile per farmi restituire la parola dell'utente
var restituzione_parola = controlloParola(parola);
// comunico se è palindroma o no
if (restituzione_parola) {
    console.log('la parola é palindroma');

} else {
    console.log('la parola non è palindroma');
}

// apro la funzione
function controlloParola(p) {
    var parola_inversa = '';
    //apro un ciclo war e calcolo l'inverso della parola
    for (var i = p.length - 1; i >= 0; i--) {
        //console.log(p[i]);
        parola_inversa += p[i];
    }

    if (p == parola_inversa) {
        // se è uguale allora è palindroma
        return true;

    } else {
        // altrimenti non è palindroma
        return false;
    }

}
