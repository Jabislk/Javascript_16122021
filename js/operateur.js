"use strict";

//affectation aprés addition
let a = 10;
let b = 5;
let addition = b + a; // 15
console.log(addition);
a = a + b; // a vaut maintenant 15
console.log(a);
a += b; // 15 + 5 -> 20 donc a=20
console.log(a);

//affectation apres soustraction
a -= b; // 20 - 5 -> 15 donc a=15
console.log("a est egale à : " + a);

// affectation après multiplication
let multiplication = a * b; // 15 * 5 ->75 multiplication | multiplication vaut 75 | multiplication vaut a * b
console.log(multiplication);

a *= b;
console.log(a); //a vaut maintenant 75

//affectation après division
let division = a / b; // 75 / 5 ->15 | division vaut  15
console.log(division); //15
a /= b; // 75 / 5 ->15 | division vaut  15
console.log(a); //15

// affectation du reste
let c = 3;
let d = 10;
let reste = d % c; // 10 % 3 -> 1
console.log(reste); //1

// affectation aprés puissance
let puissance = d ** c; // 10 puissance 3
conso;
// le.log("le resultat est : " + puissance);
incrémentation;
let total = 10;
total++; // 11
console.log(total);

// decrementation
total--; // 10
console.log(total);