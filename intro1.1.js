/*
    Write a program that takes in an array of numbers and returns the largest number in the list. Example: The given array is [3, 5, 7, 1, 6] The largest number is 7.
*/

var number = [3, 5, 7, 1, 6];

console.log("Dado los siguientes números: " + number);

var mayor = number.sort((a,b)=>b-a);

console.log("El número mayor es " + mayor[0] + ".");