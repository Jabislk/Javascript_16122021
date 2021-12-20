"use strict";
// on declare une fonction avec le mot function

function avanceVersLeNord() {
    //ici on met le code
    console.log("je pars vers le nord");
    console.log("je fais 10 km");
}
// on fait appel a la fonction 3fois
avanceVersLeNord();
avanceVersLeNord();
avanceVersLeNord();

//function nom(argument)
//on peut mettre plusieurs arguments dans nos fonctions
function avanceVersOuest(distanceDeMarche, gourde) {
    console.log("je pars vers l'ouest");
    console.log("je fais " + distanceDeMarche + "km");
    console.log("je bois a ma gourde " + gourde);
}

avanceVersOuest(25, "thé et du lait");
let contenu = "du coca";
avanceVersOuest(25, contenu);

// fonction qui ce joue toute seul
// une fonction anonyme
(function() {
    console.log("je me joue toute seul");
})();
//fonction anonyme fléché
(() => {
    console.log("je me joue aussi toute seul");
})();

//les variable et les portées
function add2() {
    let g = 4;
    let a = 2;
    return g + 2;
}
console.log("ma fonction retourne : " + add2());
//a n'existe pas à l'extérieur de ma fonction
console.log(a);