/*
    Write a program to sort a list of numbers in descending order (from highest to lowest).
*/
var number = [3, 5, 7, 1, 6];

console.log("Números recibidos: " + number)

console.log("Números ordenados de mayor a menor: " + number.sort((a,b)=>b-a))