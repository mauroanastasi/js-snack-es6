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

let maxWeight =  bike[0].peso;
let minWeight;

for(let i=0; i<bike.length; i++){
    if(maxWeight > bike[i].peso){
        minWeight = bike[i];
        maxWeight = bike[i].peso;
    }
}

console.log(minWeight);