// gioco pari o dispari contro il pc: chiedere all'utente un numero tra 1 e 5 e generare un numero random tra 1 e 5. Chiedere all'utente se sceglie pari o dispari, quindi fare la somma dei due numeri (giocata utente + giocata pc), quindi valutare se il risultato è pari o dispari e comunicare all'utente se ha vinto o meno)

// Chiedere all'utente un numero tra 1 e 5
var numero_utente = parseInt(prompt('Scrivi un numero da 1 a 5'));
console.log('numero_utente: ' + numero_utente);
// Generare un numero random tra 1 e 5
var numero_pc = genera_numero_casuale();
// creo una funzione per generare il numero random del pc
function genera_numero_casuale(){
    var numero_pc = Math.floor(Math.random() * 5);
    console.log('numero pc: ' + numero_pc);
    return numero_pc ;
}
// chiedere all'utente se sceglie pari o dispari
var scelta = prompt('Scegli pari o dispari')
console.log(scelta);
// fare la somma dei due numeri (utente e pc)
var somma = numero_utente + numero_pc;
console.log(somma);
// Valuta se la scelta è pari e la somma con il resto 0
if (somma % 2 == 0 && scelta =='pari') {
    // Comunicare se ha vinto o meno
    console.log('è pari ed hai vinto');
    //Valuto se la scelta è dispari e la somma è diversa da 0
} else if(somma % 2 != 0 && scelta =='dispari'){
    console.log('è dispari ed hai vinto');
} else {
    // se la scelta è sbagliato comunico che ha perso
    console.log('hai perso');
}
