
//ESERCIZIO 1 PALINDROMA
/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

//Quando una parola è palindroma?
//Se letta da sx a dx e viceversa risulta uguale
//Dovrei fare un confronto booleano tra la parola data e il suo reverse
//Potrei utilizzare un for che gira al contrario, si salva la parola e poi aggiungere un if

let word = 'ciao';
/* 
let reversedWord = '';
for (let i = word.length - 1; i >= 0; i--){
     reversedWord = reversedWord + word[i];
    
}
console.log(reversedWord)

if (word == reversedWord) {
    console.log('Le parole sono palindrome');
    
} else {
     console.log('Le parole non sono palindrome');
}
*/
//definisco una funzione
function palindroma(word) {
    let reversedWord = '';
    let ispalindroma = '';
    for (let i = word.length - 1; i >= 0; i--){
        reversedWord = reversedWord + word[i];
        
    }
   
    if (word == reversedWord) {
        ispalindroma = true;
       // console.log('Le parole sono palindrome');
        
    } else {
        //console.log('Le parole non sono palindrome');
        ispalindroma = false;
    }

    return ispalindroma
}

//utilizzo la funzione

const word_palindroma = palindroma('anna')
console.log(word_palindroma);

//Utilizzo della funzione con un prompt
/* 
let parola = prompt('Inserisci una parola:').toLowerCase();
console.log(parola);
console.log(palindroma(parola));
*/


//ESERCIZIO 2 PARI O DISPARI
/*  
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

//Logica preparazione
//Se l'utente sceglie, alla fine ci deve essere un promp,
// uno per la scelta tra pari/dispari e uno per la scelta del numero da 1a5
//supponiamo per il momento di avere già queste variabili che chiamerò pari_dispari e numb
let pari_dispari = 'pari';
let numb = 4; 
//Per generare un numero random tra 1 e 5 attraverso una funzione, la cerco: 
function getRandomInt() {
  return Math.floor(Math.random() * 5) + 1;
}
//definisco una funzione che assume il valore 'random' così da averlo sottomano 
const numb_random = getRandomInt();
console.log(numb_random);
//sommare i due numeri

let sum = numb + numb_random; 
console.log(sum);

//Stabilire se la somma dei due numeri è pari o dispari
let ispari = '';
if (sum % 2 == 0) {
    console.log('La somma è pari');
    ispari = true;
    
} else {
    console.log('La somma è dispari');
    ispari = false;
}

//Per dichiarare chi ha vinto, devo verificare che se l'utente ha scelto pari e la somma è pari allora ha vinto,
// altrimenti ha perso e vince il pc
if (pari_dispari == 'pari' && ispari == true) {
    console.log('Ha vinto utente');
    
} else if (pari_dispari == 'dispari' && ispari == false) {
    console.log('Ha vinto utente');
}
else {
    console.log('Ha vinto il pc');
    
}

//Devo creare una funzione che definisca se la somma dei numeri è pari o dispari 
function sum_pari_dispari(numb, numb_random) {
    let sum = numb + numb_random; 
    let ispari = '';
    if (sum % 2 == 0) {
        ispari = true;
        
    } else {
        ispari = false;
    }
}