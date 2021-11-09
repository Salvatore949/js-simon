// Visualizzare in pagina 5 numeri casuali.
// Creare un array vuoto
// Riempire l'array con numeri casuali attravero Math.random 
// Stampo i numeri
// Da quì parte un timer di 30 secondi.
// Uso setTimeout per impostare il conto alla rovescia
// Cancello i numeri da imparare
// Creare un ciclo for
// All'interno del for uso il prompt per chiedere di inserire i numeri visti in precedenza
// All'interno del ciclo inserisco il prompt
// Creo una condizione per verificare che i numeri inseriri corrispondano a quelli generati Dal random
// Stampo il risultato

const elemento = document.getElementById("container")

var numbers = []
var users = [];

for ( i = 0; i < 5; i++ ){
     let remind = Math.floor(Math.random() * 100) + 1;
     numbers.push(remind);
}

document.querySelector("#num_guess").innerHTML=" I numeri che devi ricordare :" + numbers;
console.log(numbers)

setTimeout(miaFunzione, 3 * 3000);

function miaFunzione() {
    document.querySelector("#num_guess").innerHTML = "";
    let beccati = "Beccati: ";
    let num_beccati = 0;
    for ( i = 0; i < 5; i++ ){
        let num = parseInt(prompt("Inserisci i numeri"));
        users.push(num);
        
        if (numbers.includes(num)) {
            console.log('numero indovinato');
            beccati += num + ",";
            num_beccati++;
        }
    }

    document.querySelector("#num_beccati").innerHTML = beccati + "<br>" + "Totale beccati: " + num_beccati;

}

