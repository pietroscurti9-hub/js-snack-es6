// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const bici = [
    { nome: "mountain bike", peso: 14 },
    { nome: "bici da corsa", peso: 7 },
    { nome: "city bike", peso: 16 },
    { nome: "bici elettrica", peso: 18 }
];

// creo una variabile per avere un dato da cui partire
let biciLeggera = bici[0] //{ nome: "mountain bike", peso: 14 }

// uso un ciclo "for" per scorrere tra le varie bici all'interno dell'array di oggetti "bici"
for (let i = 0; i < bici.length; i++) {
    // biciCorrente è uguale al singolo indice di bici
    const biciCorrente = bici[i];
    
//  se il "peso" di biciCorrente è minore del peso di biciLeggera
    if (biciCorrente.peso < biciLeggera.peso) {
        // allora sovrascrivi il dato, il peso di biciLeggera equivarrà al peso di biciCorrente
        biciLeggera = biciCorrente 
    } 
}

console.log("La bici con il peso minore è :", biciLeggera.nome, biciLeggera.peso, "kg");





// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


const squadre = [
    { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Napoli", puntiFatti: 0, falliSubiti: 0 }
];

// creo una variabile con array di oggetti vuota in cui pushare solo nomi e falli subiti
let nomiEfalli = [{}]

// funzione per numeri random
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// uso un ciclo for per scorrere tra le varie squadre all'interno dell'array di oggetti "squadre"
for (let i = 0; i < squadre.length; i++) {
    // creo una costante che equivale al singolo indice di squadre
    const squadra = squadre[i];
    // do un numero casuale ai parametri di squadra con range da 0 a 20/50
    squadra.falliSubiti = getRandomInt(0, 20);
    squadra.puntiFatti = getRandomInt(0, 50);

    // se i punti fatti da ogni squadra sono uguali o maggiori di zero (condizione sempre vera)
    // allora pusha su nomiEfalli il nome della squadra e i falliSubiti

    if (squadra.puntiFatti >= 0) {
        nomiEfalli.push({
            nome: squadra.nome,
            falliSubiti: squadra.falliSubiti
        });
    }
}


console.log(nomiEfalli);



