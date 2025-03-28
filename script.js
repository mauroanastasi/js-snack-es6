// Snack 1 Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare in console la bici con peso minore.

const bike = [
    {
        nome: `superquantum`,
        peso: `35`
    },
    {
        nome: `essential`,
        peso: `25`
    },
    {
        nome: `spiyceone`,
        peso: `37`
    },
    {
        nome: `bartella`,
        peso: `28`
    },
    {
        nome: `mountainfive`,
        peso: `29`
    },
]

let actualWeight =  bike[0].peso;
let minWeight;
// ciclo tutti gli oggetti all'interno dell'array:
for(let i=0; i<bike.length; i++){
    // se il peso di bike[i] è minore del peso dell'oggetto che sto iterando (actualWeight), all'ora inseriro questo oggetto in minWeight e scambierò l'oggetto precedente contenuto in actualweight con questo nuovo appena iterato, procedo fino a iterare tutti gli oggetti contenuti nell'array bike:
    if(actualWeight > bike[i].peso){
        minWeight = bike[i];
        actualWeight = bike[i].peso;
    }
}

console.log(minWeight);
// ---------------------------------------------------------------------------------------------------
// Snack2 Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”. Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const team = [
    {
        nome: `Juve`,
        puntiFatti: `92`,
        falliSubiti: `11`
    },
    {
        nome: `Palermo`,
        puntiFatti: `83`,
        falliSubiti: `6`

    },
    {
        nome: `Frosinone`,
        puntiFatti: `44`,
        falliSubiti: `9`

    },
    {
        nome: `Cagliari`,
        puntiFatti: `46`,
        falliSubiti: `7`

    },
    {
        nome: `Benevento`,
        puntiFatti: `33`,
        falliSubiti: `5`

    },
    {
        nome: `Atalanta`,
        puntiFatti: `78`,
        falliSubiti: `14`

    },
]