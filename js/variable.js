"use strict";
// commentaire 1
/**
 * commmentaire 2
 *
 *
 *
 *
 *
 *
 */
// kamelCase on commence en minuscule et à chaque nouveau mots on met une majuscule
//une variable c'est un espace dans lequel on stock des choses, c'est une boite que l'on nomme
var unTexte = "voici un texte"; // ce qui est a droite donne sa valeur de ce qui est a gauche/
console.log(unTexte);
unTexte = "nouveau texte";
console.log(unTexte);

// c'est une constante on ne peut la changer
const TVA = 20 / 100;
console.log(TVA);
const tva2 = 5.5 / 100;
console.log(tva2);
// TVA = 25 / 100; => message d'erreur dans la console et stop le code

let unChiffre = 24; // on peut changer sa valeur du let
console.log(unChiffre);
unChiffre = 12;
console.log(unChiffre);

let maChaineDeCaracteres = "ho ! le beau variant"; // on peut utiliser les simpl ou double quote.
// let echapement = 'je suis l\'autre chaine de caractere';ici on echape le caractere.

// -------------------------------------------- La CONCATENATION ------------------------------------------

let number1 = 10;
number1 = 15;
let number2 = 55;
let phraseNumber = "le chiffre est : " + number1 + "degrés";
console.log(phraseNumber);
// les backtick permet d'eviter la concatenation
let phrase3 = ` le chiffre est : ${number1} ${number2}`;
console.log(phrase3);

//------------------------------------------------ LES TYPES DE VARIABLES -------------------------------------

let string = "je suis une chaine de caractere";
let number = 24;
let number24 = "24";
console.log(number + number24);
console.log(number + parseInt(number24));

let boolean = true; // un boolean est true ou false (vrai ou faux)*

let array = ["je", "suis", "mairot", 50, true, false, ["voiture", 15]]; // un tableau
console.log(array); // un tableau commence a l'index 0 => la premiere valeur du tableau
console.log(array[1]); //donc ici on a "suis"
console.log(array[3 + 6]);

let object = { prenom: "louis", age: 30, ville: "Paris" }; // l'objet fonctionne avec des key et des key:value
console.log(object);
//