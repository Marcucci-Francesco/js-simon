/*
**Descrizione:**
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 10 secondi.
Dopo 10 secondi i numeri scompaiono e appaiono invece 5 input in cui l’utente deve inserire i numeri che ha visto precedentemente, nell’ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

// Inizializzare tutti gli id e le classi che servono
const countdownNumber = document.querySelector('.countdown');
const randomNumbers = document.getElementById('randomNumbers')
const input = document.querySelectorAll('input');
const btn = document.querySelector('.btn');
const message = document.getElementById('message');

const min = 1;
const max = 60;
const totNumbers = 5;
const timer = 10;
const totNumbersArray = [];
let liItems = '';

console.log(totNumbersArray);

// Faccio un ciclo for per creare i numeri random e pusharli in un array vuoto
for (let i = 0; i < totNumbers; i++) {
  totNumbersArray.push(Math.floor(Math.random() * (max - min +1) + min)); 
}

// Faccio un ciclo for per stampare in pagina i numeri casuali dell'array 
for(let i = 0; i < totNumbersArray.length; i++){
  const numbers = totNumbersArray[i] 
  liItems += `<li class="fs-3">${numbers}</li>`;
}
randomNumbers.innerHTML = liItems;










