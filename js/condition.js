"use strict";

let xCondition = 2; //number
let yCondition = 3; //number
let wCondition = "2"; //string
let zCondition = 3; //number

// test si xCondition est plus petit que yCondition
if (xCondition < yCondition) {
  console.log("xCondition est inferieur à yCondition");
}

// test si xCondition (2) est plus grand que yCondition (3)
if (xCondition > yCondition) {
  console.log("xCondition est superieur à yCondition");
} else {
  console.log("xCondition est inferieur à yCondition");
}

//test si xCondition existe
if (zCondition) {
  console.log("ma variable zCondition existe");
}

//quand ma variable est a comme valeur null la condition est false
let aCondition = null;
if (aCondition) {
  console.log("ma variable aCondition existe");
}

// test si xCondition est different de 3
if (xCondition != 3) {
  console.log("xCondition est different de 3");
}

//test d'egalité
if (xCondition == wCondition) {
  console.log("ils sont égaux mais pas en typage (une string et un number)");
}

// test d'égalité strict
if (yCondition === zCondition) {
  console.log("Ils sont strictement égaux en valeur et en typage");
}

//test si l'une des conditions est vrai
if (xCondition == 2 || yCondition == 2) {
  console.log("l'un des deux est vrai");
}

// si les deux son vrai
if (xCondition === 2 && wCondition == 2) {
  console.log("les deux sont vrai");
}

//on peut fair un if sur une seul ligne s'il n'ya qu'une seul instruction
if (xCondition === 2 && wCondition == 2) console.log("les deux sont vrai");

// une autre facon d'ecrire un if -> les ternaires
// si vrai ? alors innstruction : sinon (else)
// "?" correspond à si la condition est vrai donc on y entre
// ":" correspond à sinon (else)
xCondition != yCondition
  ? console.log("ils sont differents")
  : console.log("ils sont identique");

// -------------------------- le switch ----------------------------
let fruit = "pomme";
let fruit = "poire";
let fruit = "cerise";
switch (fruit) {
  case "pomme":
    console.log("c'est une pomme");
    break;
  case "poire":
    console.log("c'est une poire");
    break;

  default:
    console.log("ce n'est ni une pomme, ni une poire");
}
