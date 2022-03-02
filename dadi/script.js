// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?



const btnPlay = document.querySelector('#play');
const eleOutput = document.querySelector('.output');

let numComputer = Math.floor(Math.random() * (6) ) +1;
let numUtente = Math.floor(Math.random() * (6) ) +1;

if (numComputer>numUtente){
    console.log('computer = ' + numComputer)
    console.log('utente = ' + numUtente)
    console.log('Hai perso, il computer ha vinto')
}
else if (numUtente>numComputer){
    console.log('computer = ' + numComputer)
    console.log('utente = ' + numUtente)
    console.log('Hai vinto!')
}
else{
    console.log('compute r= ' + numComputer)
    console.log('utente = ' + numUtente)
    console.log('pareggio!')
}