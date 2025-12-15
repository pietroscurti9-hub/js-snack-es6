// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const bici = [
    { nome: "mountain bike", peso: 14 },
    { nome: "bici da corsa", peso: 7 },
    { nome: "city bike", peso: 16 },
    { nome: "bici elettrica", peso: 5 }
];


let lightBike = bici[0] //{ nome: "mountain bike", peso: 14 }


for (let i = 0; i < bici.length; i++) {
    const biciCorrente = bici[i];
    // 5 < 7
    if (biciCorrente.peso < lightBike.peso) {
        lightBike = biciCorrente // 5
    }
}

console.log("La bici con il peso minore è :", lightBike.nome, lightBike.peso, "kg");
// console.log(pesoPiuBasso)




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

let nomiEfalli = [{}]

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < squadre.length; i++) {
    const squadra = squadre[i];
    squadra.puntiFatti = getRandomInt(0, 100);
    squadra.falliSubiti = getRandomInt(0, 20);

    if (squadra.puntiFatti !== 0) {
        nomiEfalli.push({
            nome: squadra.nome,
            falliSubiti: squadra.falliSubiti
        });

    }
}

console.log(nomiEfalli);



