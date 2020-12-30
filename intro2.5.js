/*
For each of the exercises below, assume you are starting with the following people array.

var people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

    Write a command that prints out all of the people in the list.
    Write the command to remove "Dani" from the array.
    Write the command to remove "Juan" from the array.
    Write the command to add "Luis" to the front of the array.
    Write the command to add your name to the end of the array.
    Using a loop, iterate through this array and after console.log-ing "Maria", exit from the loop.
    Write the command that gives the indexOf where "Maria" is located.

At the end of the exercise, there should be 4 people in the array.
*/

var people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
var test = []

//Write a command that prints out all of the people in the list.
console.log("Mostramos el array completo de people:")
console.log(people);

//Write the command to remove "Dani" from the array.
console.log("\nEliminamos a Dani del array:")
people.splice(1, 1);
console.log(people);

//Write the command to remove "Juan" from the array.
console.log("\nEliminamos a Juan del array:")
people.splice(2, 1);
console.log(people);

//Write the command to add "Luis" to the front of the array.
console.log("\nAgregamos a Luis al array:")
people.splice(0, 0, "Luis");
people.splice(2, 1);
console.log(people);

//Write the command to add your name to the end of the array.
console.log("\nPonemos nuestro nombre al final del array:")
people.push("Sandro")
//people.splice(people.length, 0, "Sandro");
console.log(people);

//Using a loop, iterate through this array and after console.log-ing "Maria", exit from the loop.
console.log("\nUtilizando un bucle, ponemos los nombres del array hasta llegar a María:")
for(i=0; i<people.length; i++){
    if(i <= people.indexOf("Maria")){
        test.push(people[i]);
    }
}
console.log(test);

//Write the command that gives the indexOf where "Maria" is located.
console.log("\nBuscamos el índice de María:")
console.log("María está en el índice: " + people.indexOf("Maria"))

console.log("\nAl finalizar el ejercicio hay cuatro personas en el array:")
console.log(people)
