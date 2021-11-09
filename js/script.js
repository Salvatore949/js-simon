// Visualizzare in pagina 5 numeri casuali.
//Creare un array vuoto
//Riempire l'array con numeri casuali attravero Math.random 
// Da lì parte un timer di 30 secondi.
// Uso setTimeout per impostare il conto alla rovescia
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Creare un ciclo for
// All'interno del ciclo inserisco il prompt
//  
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
const elemento = document.getElementById("container")

var random_names = []

for ( i = 0; i < 5; i++ ){
     let remind = Math.floor(Math.random() * 5) + 1;
     random_names.push(remind);
}

console.log(random_names)

const cont_down = 

setTimeout