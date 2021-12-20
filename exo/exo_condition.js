// let couleurPrimaireASaisir = prompt(
//   "Veuillez saisir une couleur primaire tout en minuscule "
// );
// let couleurJaune = "jaune";
// let couleurRouge = "rouge";
// let couleurBleu = "bleu";

// if (
//   couleurPrimaireASaisir == couleurRouge ||
//   couleurPrimaireASaisir == couleurBleu ||
//   couleurPrimaireASaisir == couleurJaune
// ) {
//   console.log(
//     "bravo la couleur : " + couleurPrimaireASaisir + " est une couleur primaire"
//   );
//   document.write(
//     "bravo la couleur : " + couleurPrimaireASaisir + " est une couleur primaire"
//   );
// } else {
//   console.log("la couleur choisie n'est pas une couleur primaire");
//   document.write("la couleur choisie n'est pas une couleur primaire");
//   window.location.href = "https://www.youtube.com/watch?v=Zbrz_WL9H6A";
// }

let colorRed = "rouge";
let colorJaune = "jaune";
let colorBleu = "bleu";
let colorSaisir = prompt("Veuillez saisir une couleur primaire en minuscule");
switch (colorSaisir) {
  case "jaune":
    document.write("Bravo vous avez saisie une couleur primaire");
    console.log("Bravo vous avez saisie une couleur primaire");
    break;
  case "bleu":
    document.write("Bravo vous avez saisie une couleur primaire");
    console.log("Bravo vous avez saisie une couleur primaire");
    break;
  case "rouge":
    document.write("Bravo vous avez saisie une couleur primaire");
    console.log("Bravo vous avez saisie une couleur primaire");
  default:
    document.write("ALLEZ ZWWAAA MA RAKAKAKTOUUTURARA");
    console.log("ALLEZ ZWWAAA MA RAKAKAKTOUUTURARA");
}
