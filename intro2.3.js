/*
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.

Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
*/

var number = [1, 2, 3, 4]

console.log("Dado los siguientes números: " + number)

var sum = (a, b) => a + b;
var mult = (a, b) => a * b;

console.log("La suma de todos es: " + number.reduce(sum));

console.log("El producto de todos es: " + number.reduce(mult));