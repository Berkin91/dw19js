/*
Commentaire :
Nous allons apprebdre
1- LES VARIABLES
2- LES CONDITIONS
3- LES BOUCLES
4- LES FONCTIONS
*/

//Les variables

/*

1.Pourquoi les variables ? pour stocker des données EX: Nom d'un jeu = "jeu du plus ou du moins";
2.Une variable : le nom de la variable et la valeur de la variable : Tiroir qui porte un nom
EX: Tiroir A <= 10 valeur 
Le numérique ne contient pas de guillemets
Additionner des nombre ça fonctionne
Addition une chaine de caractere avec autre choses fait de la concetanation
*/
a=10 // 10 rentre dans la variable A
b=50 // PAREIL
c="80" // PAREIL
b=90 // B va contenir 90
console.error(a+parseInt(c));
console.error(typeof(c));
console.error(b);

// EXO : LES VARIABLES
SEL=100;
SUCRE=80;
console.error("Nous avons du SEL en Q. de " + SEL + " Nous avons du sucre en quantité de " + SUCRE);

// INVERSERSION DES VARIABLES
z=SEL;
SEL=SUCRE;
SUCRE=z;
console.error("Nous avons du SEL en Q. de " + SEL + " Nous avons du sucre en quantité de " + SUCRE);

/*
EXO 2 :
1. Récuperer l'age de l'utilisateur via la commande prompt
2. Affichez l'age de l'utilisateur dans la console
3. Affiche quel age aura l'utilisateur dans 2 ans dans la console
*/
/* person = prompt("Quel age avez-vous ?");
age = 2
console.log("L'utilisateur a " + person + " ans");
console.log("dans 2 ans l'utilisateur aura " , age +parseInt(person) , " ans");
*/
/*
EXO 3 :
1. Demander un prix d'un article via la commande prompt
2. Affichez dans la console : l'article vaut 45 euros. 45 étant le prix
3. Affichez dans la console : l'article vaut 50 euros TTC. prix * 1.2
*/
prix = prompt("Quel est le prix de cet article ?" , "45");
console.log("l'article vaut " + prix + " euros .");
a= (parseInt(prix) * 1.2);
console.log("l'article vaut " + a + " euros TTC");

 



