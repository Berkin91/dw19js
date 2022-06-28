age = prompt ("Veuillez entrer votre âge")
age = parseInt(age)


if (age > 18) {
    console.log ("Vous êtes majeur");
}
if (age < 18) {
    console.log ("Vous êtes mineur");
}
if (age == 18) {
    console.log ("Vous êtes pile majeur");
}

// EXO 1

nombre = prompt("Veuillez donner un nombre");
nombre = parseInt(nombre);
if (nombre > 0) {
    console.log ("Ce nombre est positif");
}
if (nombre < 0) {
    console.log ("Ce nombre est négatif");
}

// EXO 2

nombre = prompt("Veuillez donner un nombre");
nombre = parseInt(nombre);
if (nombre % 2 == 0) {
    console.log ("Ce nombre est pair");
}    else {
    console.log ("Ce nombre est impair");
}
