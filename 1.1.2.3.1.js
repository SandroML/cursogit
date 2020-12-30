/*
There are 12 people on an island. One person weighs less than the others, 11 people weigh exactly the same. There is a seesaw that can be used to weigh the people.

    Design an algorithm to find the person who weighs less.
    The seesaw can only be used max 4 times; what does your algorithm look like?
    The seesaw can only be used max 3 times; what does your algorithm look like?

    This is a Layton!! :D
*/

var gente = [80,80,80,78,80,80,80,80,80,80,80,80]

console.log("Balanza 1:")

var mitad = gente.length/2;
var total = gente.length;

var izq = 0;
var der = 0;
var gana;
var genteIzq = [];
var genteDer = [];
var res;

for(i=0; i<total; i++){
    if(i < mitad){
        izq = izq + gente[i]
        genteIzq[i] = gente[i];
        //console.log(genteIzq[i]);
    }
    else{
        der = der + gente[i]
        res = i - mitad;
        genteDer[res] = gente[i];
        //console.log(genteDer[res]);
    }
}

if (izq < der){
    gana = "izquierda";
    gente = genteIzq;
}
else{
    gana = "derecha";
    gente = genteDer;
}

console.log("Ponemos a 6 en un lado y a 6 en otro.");
console.log("Los de la izquierda pesan "+ izq + "kg y los de la derecha " + der +"kg, por lo que seguimos al grupo de la " + gana + ".")
console.log("")

console.log("Balanza 2:")

var mitad = gente.length/2;
var total = gente.length;

izq = 0;
der = 0;
genteIzq = [];
genteDer = [];

for(i=0; i<total; i++){
    if(i < mitad){
        genteIzq[i] = gente[i];
        izq = izq + gente[i];
        //console.log(genteIzq)
    }
    else{
        res = i - mitad;
        genteDer[res] = gente[i];
        der = der + gente[i];
        //console.log(genteDer)
    }
}

if (izq < der){
    gana = "izquierda";
    gente = genteIzq;
}
else{
    gana = "derecha";
    gente = genteDer;
}

console.log("Ahora quedan 6, ponemos a 3 en un lado y a 3 en otro.");
console.log("Los de la izquierda pesan "+ izq + "kg y los de la derecha " + der +"kg, por lo que seguimos al grupo de la " + gana + ".")
console.log("")

console.log("Balanza 3:")

var menor=0;

console.log("Ahora quedan 3, ponemos a una persona a un lado de la balanza y a otra al otro lado, dejando a uno fuera.")


console.log("El de la izquierda pesa " + gente[0] + "kg y el de la derecha " + gente[1] + "kg, mientras que el que ha quedado fuera es el que pesa " + gente[2] + "kg (aunque no sepamos este dato).");

if(gente[0]<gente[1]){
    menor = gente[0]
}
else if (gente[1]<gente[0]){
    menor = gente[1]
}
else{
    menor = gente[2]
}

console.log("El isleño que pesa menos pesa " + menor + "kg.")