// scrivere una funzione per capire se una parola è palindroma. Quindi chiedere una parola all'utente, utilizzare la funzione per sapere se la parola inserita è palindroma e stampare un messaggio appropriato

// Scrivo una var di prova
var parola = 'pippo';
console.log(parola);

var restituzione_parola = controlloParola(parola);

if (restituzione_parola) {
    console.log('é palindroma');

} else {
    console.log('non è');
}

// apro la funzione
function controlloParola(p) {
    var parola_inversa = '';
    for (var i = p.length - 1; i >= 0; i--) {
        //console.log(p[i]);
        parola_inversa += p[i];
    }

    if (p == parola_inversa) {
        return true;

    } else {
        return false;
    }

}
