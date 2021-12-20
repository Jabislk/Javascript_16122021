"use strict";

// je crée un tableau de couleur
let tabColor = ["rouge", "bleu", "vert", null];
console.log(tabColor[0]);
//connaitre la taille d'un tableau
console.log(tabColor.length); //3 entrée dans le tableau | 3couleur entré dans le tableau = 3 entré

// pour entrer une nouvelle valeur dans un tableau
tabColor.push("violet");
console.log(tabColor);
console.log(tabColor.length);

// Supprimer le dernier element du tableau
tabColor.pop();
console.log(tabColor);
console.log(tabColor.length);

//Supprimer le premier élément du tableau
tabColor.shift();
console.log(tabColor);
console.log(tabColor.length);

//ajouter au debut
tabColor.unshift("orange");
console.log(tabColor);
console.log(tabColor.length);

//trouver l'index d'un element dans le tableau
tabColor.indexOf("bleu");
console.log(tabColor.indexOf("bleu"));

//supprimer un element a son index
tabColor.splice(3);
console.log(tabColor);

//tableau imbriqué
let tabtest = ["un", "deux", [1, 2]];
console.log(tabtest);
console.log(tabtest[0]); //retourne un
console.log(tabtest[2][0]); //retourne 1
console.log(tabtest[0] + tabtest[2][0]); //cela retourne un 1 dans la console
