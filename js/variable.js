"use strict";
// commentaire 1
/**
 * commentaire 2
 *
 */
//kamelCase on commence en miniuscule et à chaque nouveau mots onn met une majuscule
//une variable c'est un espace dans lequel on stack des choses c'est une boite que l'on nomme
var unTexte = "voixi un texte"; //ce qui est à droite donne sa valeur de ce qui à gauche/
console.log(unTexte);
unTexte = "nouveau texte"; // on peut changer a valeur d'une variable
console.log(unTexte);
// c'est une constante on ne peut la changer
const TVA = 20 / 100;
console.log(TVA);
const tva2 = 5.5 / 100;
console.log(tva2);
// TVA = 25 / 100; => message d'erreur dans la console et stop le code

let unChiffre = 24; //on peut changer la valeur du let
unChiffre = 12;
console.log(unChiffre);

let maChaineDeCaracteres = "ho ! le beau variant !"; // on peut utiliser les simple ou double quote.
//let echapement = 'je suis l\'autre chaine de caractère'; ici on echape le caractère.

//------------------------- LA CONCATENATION --------------------------------
let number1 = 10;
number1 = 15;
let phraseNumber = "le chiffre est : " + number1 + "degrés";
console.log(phraseNumber);
//les backtick permet d'eviter la concatenation
let phrase3 = ` le chiffre est : ${number1} ${number2} `;
console.log(phrase3);