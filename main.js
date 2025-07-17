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

let parola = prompt('Inserisci una parola:').toLowerCase();
console.log(parola);
console.log(palindroma(parola));